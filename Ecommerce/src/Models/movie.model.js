const mongoose= require("mongoose")
const { releaseStatus,languages } = require("../utils/constants")

const movieSchema=mongoose.Schema({

   name:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   language:{
    type:String,
    required:true,
    enum:Object.values(languages)
   },
   casts:{
    type:[String],
    required:true
   },
   trailerUrl:{
    type:String,
    required:true
   },
   PosterUrl:{
    type:String,
    required:true
   },
   releaseDate:{
    type:String,
    required:true
   },
   director:{
    type:String,
    required:true
   },
   releaseStatus:{
    type:String,
    required:true,
    default:releaseStatus.RELEASED,
    enum:Object.values(releaseStatus)
   }

})
const Movie=mongoose.model("movies",movieSchema)
module.exports=Movie

