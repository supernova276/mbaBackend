const Product = require("../Models/product.model");
const mongoose=require("mongoose")

exports.createProduct=async(req,res)=>{

    const {price,name,description,category}=req.body;

    if(!price || price<=0){
        return res.status(400).send({message:"price cannot be null or less than 0"})
    }
    if(!name){
        return res.status(400).send({message:"product has no  name, please add a name"})
    }

    const ProductData={
        price,
        name,
        description,
        category
    }
    //this is the new document for the product created from the model
    const newProduct= new Product(ProductData)

    //these are the details

    try{
        const response= await newProduct.save();
        return res.status(201).send(response)
    }
    catch(err){
        // ideally if a category is not correct or somehting we get the interanl server error
           return res.status(500).send({message:`internal server error : ${err}`})
    }
}

exports.getAllProducts=async(req,res)=>{

    const {category,maxPrice}=req.query
  
      const query={}
      if(category)
      query.category=category
  
      if(maxPrice){
          query.price={
              $lte:maxPrice
          }
      }
  
      try{
          const products=await Product.find(query)
          return res.status(201).send(products)
      }
      catch(err){
          console.log(err)
      }
  }
  exports.getProductById=async(req,res)=>{

    const productId=req.params.id

    if(!mongoose.Types.ObjectId.isValid(productId))
    return res.status(400).send({message:"this is not a valid productid"})
    try{
        const product=await Product.findById(productId).exec()
    
        if(!product){
            return res.status(404).send({message:"product not found"})
        }
        return res.status(201).send(product)
    }
    catch(err){
        res.status(400).send({message:err})
    }
}
exports.updateProduct=async(req,res)=>{

    const productId=req.params.id

    if(!mongoose.Types.ObjectId.isValid(productId))
    return res.status(400).send({message:"this is not a valid productid"})

    const updatedProduct=req.body

    try{
        const product=await Product.findByIdAndUpdate(productId,updatedProduct)
    
        if(!product){
            return res.status(404).send({message:"product not found"})
        }
        return res.status(201).send(product)
    }
    catch(err){
        res.status(400).send({message:err})
    }
}

exports.deleteProduct=async(res,req)=>{

    const productId=req.params.id;
    
    try{
        const product = await Product.findByIdAndDelete({productId})

        if(!product){
            return res.status(404).send({message:"product not found"})
        }
        return res.status(201).send(product)
    }
    catch(err){
        res.status(400).send({message:err})
    }
}