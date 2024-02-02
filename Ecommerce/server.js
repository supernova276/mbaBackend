const express=require("express")
var {productData}=require("./data") 
var bodyParser=require("body-parser")
const mongoose=require("mongoose")
const ProductRoutes=require("./src/Routes/product.routes")
const userRoutes=require("./src/Routes/auth.routes")
const MovieRoutes=require("./src/Routes/movie.routes")
const TheaterRoutes=require("./src/Routes/theater.routes")
const bookingRoutes=require("./src/Routes/booking.routes")
const paymentRoutes=require("./src/Routes/payment.routes")


var cors=require("cors")

//this dotenv package will load teh var,available in the env file 
require("dotenv").config()

const {PORT}=require("./configs/server.config")
const {DB_URL}=require("./configs/db.config")

// console.log(process.env)
mongoose.connect(DB_URL).then(()=>{console.log("succsessfully connected to the database")})
.catch((err)=>{console.log(err)})

// this is how we import in express/node
const app=express()
app.use(cors());
app.use(bodyParser.json())
ProductRoutes(app)
userRoutes(app)
MovieRoutes(app)
TheaterRoutes(app)
bookingRoutes(app)
paymentRoutes(app)

//to model the prouct into a collection
// const Product=mongoose.model("product",productSchema)
//product is the name of the collection
//next argument is the product schema

//create a product



////////////get data based on aparticular id










// ----------------------------------------------------------------------------------------------------------------------
// app.get("/",(req,res)=>{
//     res.send("i created my first server")
// })

// app.get("/products",(req,res)=>{
//     // console.log(productData)
//      res.status(200).send(JSON.stringify(productData))
// })
// app.post("/products",(req,res)=>{
//     // console.log(productData)
//     //  console.log(req.body)
//     let newProduct=req.body
//     productData.push(newProduct)
//     res.status(200).send({message:"product created successfully"})
//     // this is specifically used to send da
    
// })

// app.get("/products/:id",(req,res)=>{

//     const productId=req.params.id; 
//     // this is a req to the server

//     const product=productData.find((product)=>(product.id==productId))
//     if(!product){
//         return res.status(404).send({message:"no such product available"})
//     }
//     else{
//         res.status(200).send(JSON.stringify(product))
//         //    this  is sending the response from the server to postman, this is how we test apis on postman
//     }   
// })

app.listen(PORT,()=>{
    console.log("your application is running on port no 3000")
})