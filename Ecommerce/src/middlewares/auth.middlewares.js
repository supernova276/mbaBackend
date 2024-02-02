const { userTypes, userStatus } = require("../utils/constants");
const User=require("../Models/user.model")

const verifySignUpRequest=async (req,res,next)=>{

    const{name,email,userId,password,userType}=req.body;
   
    if(!name)
    return res.status(400).send({message:"name is not provided"})

    if(!email)
    return res.status(400).send({message:"email is not provided"})

    if(!userTypes)
    return res.status(400).send({message:"userType is not provided"})

    if(!userStatus)
    return res.status(400).send({message:"userStatus is not provided"})

    
//here we have used await as we are querying the database
//User is the name of the model
//the werird $ syntax is used when we query teh database
    const users= await User.find({
        $or:[
            {userId:userId},
            {email:email}
        ]
    });

    if(users && users.length){
        return res.status(400).send({message:"userId or Email alearady exists"})
   }
   next()

   //this is a call to the next middleware of the controller 
}

const verifySignInRequest=async(req,res,next)=>{

const{userId,password}=req.body

console.log("hello form inside the middleware")

if(!userId){
    return res.status(400).send({message:"userId is not their"})
}

if(!password){
    return res.status(400).send({message:"password is not their"})
}

next()

}
module.exports={
    verifySignUpRequest,
    verifySignInRequest
}