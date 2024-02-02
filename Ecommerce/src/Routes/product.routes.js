const { createProduct, getAllProducts,getProductById,updateProduct,deleteProduct} = require("../Controllers/product.controller");


//since app is craeted in ther server.js
module.exports=(app)=>{

app.post("/ecom/api/v1/products",createProduct)
app.get("/ecom/api/v1/products",getAllProducts)
app.get("/ecom/api/v1/products/:id",getProductById)
app.put("/ecom/api/v1/products/:id",updateProduct)
app.delete("/ecom/api/v1/products/:id",deleteProduct)
}