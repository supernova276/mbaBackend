const BOOKING = require("../Models/booking.model");
const { paymentStatus, bookingStatus } = require("../utils/constants");
const PAYMENT=require("../Models/payment.model");
const { sendEmail } = require("../utils/notificationsUtils");
const { bookingSuccess } = require("../scripts/emai.scripts");

exports.createPayment=async(req,res)=>{

    const{bookingId}=req.body;

    const savedBooking= await BOOKING.findById(bookingId);

    try{
        console.log("the payment is",PAYMENT)
        const payment=await PAYMENT.create(req.body)

        //  console.log("hello2")
         console.log("status of payment is",payment.status)

         if(payment.status===paymentStatus.success){
            savedBooking.status=bookingStatus.completed

            await savedBooking.save()

            //sendign confirmation email
            console.log(req.user)    
            const {subject,html,text}=bookingSuccess(req.user,savedBooking)

            sendEmail([req.user.email],subject,html,text)
           

         }
         return res.status(200).send({message:"payment successful"})
    }
    catch(err){
        console.log("inside the err")
        return res.status(500).send({message:err.message})
    }
}