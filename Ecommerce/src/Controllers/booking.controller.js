const mongoose=require("mongoose")
const BOOKING=require("../Models/booking.model")


exports.createBooking=async(req,res)=>{

    const{movieId,theatreId,timings,noOfSeats}=req.body;

    const bookingObj={
        theatreId,
        movieId,
        userId:req.user._id,
        timings,
        noOfSeats,
        totalCost:noOfSeats*800
    }
       
 try{ 
    const booking= await BOOKING.create(bookingObj)
    return res.status(200).send(booking)
}
catch(err){
    return res.status(500).send({message:err.message})
}

}

exports.getAllBookings=async(req,res)=>{
       
    try{ 
       const booking= await BOOKING.find({}).populate("movieId").populate("theatreId").populate("userId")
       return res.status(200).send(booking)
   }
   catch(err){
       return res.status(500).send({message:err.message})
   }
   
   }

exports.getBookingsById=async(req,res)=>{
       
    const id=req.params.id
    try{ 
       const booking= await BOOKING.findById(id)
       if(!booking)return res.status(400).send({message:"their is no booking with this id"})


       return res.status(200).send(booking)
   }
   catch(err){
       return res.status(500).send({message:err.message})
   }
   
   }

exports.updateBooking=async(req,res)=>{

    const id=req.params.id
    try{

       const booking= await BOOKING.findById(id)
       if(!booking)return res.status(400).send({message:"their is no booking with this id"})
       booking=req.body;
       await booking.save()
       return res.status(200).send(booking)
   }
   catch(err){
       return res.status(500).send({message:err.message})
   }
   
   }