const validateCreateTheaterRequest=async(req,res,next)=>{
    const {name}=req.body;

    if(!name){
        return res.staus(400).send({message:"name is not provided"})
    }
    next()

}
module.exports={
    validateCreateTheaterRequest
}