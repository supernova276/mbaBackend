const Movie=require("../Models/movie.model")

const validateCreateMovieRequest=async (req,res,next)=>{

    const {name,description,casts,trailerUrl,posterUrl,language,releaseDate,director,releaseStatus}=req.body;

    if(!name)
    return res.status(400).send({message:"name is not provided"})

    if(!description)
    return res.status(400).send({message:"description is not provided"}) 

    if(!trailerUrl)
    return res.status(400).send({message:"trailerUrl is not provided"})

    next()
}
module.exports={
    validateCreateMovieRequest
}