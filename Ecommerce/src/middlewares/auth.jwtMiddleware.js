const jwt=require("jsonwebtoken")
const User=require("../Models/user.model")
const { userTypes } = require("../utils/constants")
const { SECRET } = require("../../configs/auth.config")

//authentication
const verifyToken=async(req,res,next)=>{

    //we get the access token in the response from the server but to access it we have to pass it in the header

    let token=req.headers['x-access-token']

    if(!token){
        return res.status(403).send({message:"no token provided"})
    }

    jwt.verify(token,SECRET,async function(err,payload){

        if(err)return res.status(401).send({message:"the user is not authenticated"})

        // console.log(payload)
        // this paylod contains the info that is sent back as the response like name,email,userId and password
        //i.e if the user is valid we get the payload from the token, in payload we attached userId at the time of creation
        //therefore we got the userId in the payload
        const userId=payload.userId;
        const user=await User.findOne({userId})
        req.user=user;
        next();
    })

    //this function is called with errif token is incorrect 
    //this function is called with payload if token is correct

}
//authorization
const verifyAdmin= async(req,res,next)=>{

    // console.log(req.user)
    // the user aleardy gets the info around the user the logic defined in the above function

    if(req.user.userType !==userTypes.ADMIN) return res.status(403).send({message:"user is not autorized"})
    next();

}
module.exports={
    verifyToken,
    verifyAdmin
}