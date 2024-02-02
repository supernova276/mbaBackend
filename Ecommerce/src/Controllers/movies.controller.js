const Movie=require("../Models/movie.model")
exports.createMovie=async( req,res)=>{

    const {name,description,casts,trailerUrl,posterUrl,language,releaseDate,director,releaseStatus}=req.body;

    //create a document first before saving into the db
    // const Movie


    try{
            const movie= await Movie.create(req.body)
            return res.status(200).send(movie)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }

}
exports.getMovies=async( req,res)=>{
    try{
        const movies= await Movie.find({})
        return res.status(200).send(movies)
}
catch(err){
    return res.status(500).send({message:err.message})
}  
     

}
exports.getMovieById=async( req,res)=>{

    const id=req.params.id;

    try{
        const movie= await Movie.findById(id)
        if(!movie)return res.status(404).send({message:"movie not found"})

        return res.status(200).send(movie)
}
catch(err){
    return res.status(500).send({message:err.message})
}  
     

}