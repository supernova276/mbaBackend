const mongoose=require("mongoose")
const { bookingStatus } = require("../utils/constants")
const bookingSchema= mongoose.Schema({

    userId:{
        // since the userid is in some aleready existing table so it has to be of type objectId
         type:mongoose.SchemaTypes.ObjectId,
         //ref stands for the table to refrence to
         ref:"users",
         required:true
         
    },
    movieId:{
         type:mongoose.SchemaTypes.ObjectId,
         ref:"movies",
         required:true
         
    },
    theatreId:{
         type:mongoose.SchemaTypes.ObjectId,
         ref:"theatre",
         required:true
         
    },
    timings:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:Object.values(bookingStatus),
        default:bookingStatus.inProgress

    },
    totalCost:{
        type:Number
    },
    noOfSeats:{
        type:Number
    }
})
const BOOKING=mongoose.model("bookings",bookingSchema)
module.exports=BOOKING