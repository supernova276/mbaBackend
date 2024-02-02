const mongoose=require("mongoose")
const theaterModel=mongoose.Schema({
    name:{
        type:String,
        required:true
       },
       description:{
        type:String,
        required:true
       },
       city:{
        type:String,
        required:true
       },
       pinCode:{
        type:String,
        required:true
       },
       movies:{
        //the type should be an array of objects
        //the object is actually the schema document as it is also stored as a json object
        type:[mongoose.SchemaType.ObjectId],
        ref:'movies'
       }
})
const Theatre=mongoose.model("theatre",theaterModel)
module.exports=Theatre