const mongoose=require("mongoose")
const{paymentStatus}=require("../utils/constants")


const paymentsSchema=mongoose.Schema({

    bookingId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"bookings",
        required:true
    },
    amount:{
          type:Number,
          rerquired:true
    },
    status:{
        type:String,
        required:true,
        enum:Object.values(paymentStatus),
        default:paymentStatus.inProgress

    }

})
const PAYMENT=mongoose.model("payments",paymentsSchema)
module.exports=PAYMENT
