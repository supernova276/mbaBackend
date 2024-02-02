const { userTypes, userStatus } = require("../utils/constants");
const User=require("../Models/user.model")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
require("dotenv").config()
const{SECRET}=require("../../configs/auth.config")

exports.userSignup=async(req,res)=>{

    //signup is a get request but we send data in the req body
    const{name,email,userId,password,userType}=req.body;
   
    const status=(userTypes===userTypes.CUSTOMER)?userStatus.APPROVED:userStatus.PENDING

    const hashedPassword=bcrypt.hashSync(password,10)
    const newUser= new User({
        name,
        email,
        userId,
        password:hashedPassword,
        userType,
        userStatus:status
    })
    try{
        const user=await newUser.save()
        return res.status(201).send(user)
    }
    catch(err){
       res.status(500).send({message:"something went wrong"})
    }


}
exports.userSingIn=async(req,res)=>{

    const{userId,password}=req.body

    const user=await User.findOne({userId:userId})
    //here we are trying to check inside the databse

    if(!user){
       return res.status(400).send({message:"userId passed is invalid"})
    }
    const isPassValid=bcrypt.compareSync(password,user.password)

    if(!isPassValid){
     return  res.status(400).send({message:"password passed is invalid"})
    }
    var token=jwt.sign({
        userId:user.userId,
    },SECRET,{expiresIn:'24h'})

    console.log(token)

    //this is the response sent to the client
    //here we are trying to embed the info so that the user can use it later like in the case of authentication and authorization
    //this info can also be used later by the controllers
    return  res.status(200).send({
        name:user.name,
        userId:user.userId,
        email:user.email,
        userType:user.userType,
        accessToken:token
    })

}