const validateCreateBookingRequest=async(req,res,next)=>{

    const{movieId,theatreId,timings,noOfSeats}=req.body;
    if(!movieId)
    return res.status(400).send({message:"movieId is not provided"})

    if(!theatreId)
    return res.status(400).send({message:"theatreId is not provided"})

    if(!timings)
    return res.status(400).send({message:"timings is not provided"})

    if(!noOfSeats)
    return res.status(400).send({message:"noOfSeats is not provided"})

    next();

}
module.exports={
    validateCreateBookingRequest
}