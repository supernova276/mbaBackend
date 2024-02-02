const mongoose=require("mongoose")
const Theatre=require("../Models/theater.model")
const Movie=require("../Models/movie.model")

exports.createTheatre=async(req,res)=>{
      
    try{

        const theater=await Theatre.create(req.body)
        return res.status(200).send(theater)

    }
    catch(err){
        res.status(500).send({message:err.message})
    }
}

exports.getAllTheatre=async(req,res)=>{
    
 try {  
    const theatres= await Theatre.find({})
    res.status(200).send(theatres)
}
catch(err){
    res.status(500).send({message:err.message}) 
}
}

exports.getTheatreById=async(req,res)=>{

    const id=req.params.id
    try{
        const theatre= await Theatre.findById(id).populate("movies")
        if(!theatre)return res.status(404).send({message:"movie not found"})

        return res.status(200).send(theatre)
}
catch(err){
    console.log("hello")
    return res.status(500).send({message:err.message})
}  

}
exports.addMovieToATheatre=async(req,res)=>{
    const {theatreId,movieId}=req.params

    const[savedTheatre,savedMovie]= await Promise.all([Theatre.findById(theatreId),Movie.findById(movieId)])

        // const savedTheatre= await Theatre.findById(theatreId)
        if(!savedTheatre)return res.status(400).send({message:"theatre does not exist"})

        // const savedMovie= await Movie.findById(theatreId) 
        if(!savedMovie)return res.status(400).send({message:"movie does not exist"})

        savedTheatre.movies.push(movieId)

        await savedTheatre.save()

        return res.status(200).send({message:"movie is added successfully"})
   
}

exports.checkMovieInTheatre=async(req,res)=>{


        const{movieId,theatreId}=req.params;
        const[savedTheatre,savedMovie]=await Promise.all([Theatre.findById(theatreId),Movie.findById(movieId)])

          // const savedTheatre= await Theatre.findById(theatreId)
          if(!savedTheatre)return res.status(400).send({message:"theatre does not exist"})

          // const savedMovie= await Movie.findById(theatreId) 
          if(!savedMovie)return res.status(400).send({message:"movie does not exist"})
  
        const response={
            isRunnig:savedTheatre.movies.includes(movieId)
        }
  
          return res.status(200).send(response)


}