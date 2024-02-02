const mongoose=require("mongoose")
const { userStatus,userTypes } = require("../utils/constants")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        minLength:4,
        required:true
    },
    email:{
        type:String,
        lowercase:true,
        required:true
    },
    userType:{
        type:String,
        required:true,
        enum:Object.values(userTypes),
        default:userTypes.CUSTOMER
    },
    userStatus:{
        type:String,
        required:true,
        default:userStatus.PENDING,
        enum:Object.values(userStatus)
    }

})

const User=mongoose.model("users",userSchema)
module.exports =User;