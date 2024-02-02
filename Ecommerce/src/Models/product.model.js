const mongoose=require("mongoose")

// thisi is a schema
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
       type:String,
       required:true
    },
    category:{
        type:String,
        required:true,
        enum:["Electronics","Fashion","Jewellery"]
    },
    price:{
        type:Number,
        required:true
    }

})
const Product=mongoose.model("product",productSchema)

module.exports=Product;
//now create a model out of this schema and export that particular model