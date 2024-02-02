const { verifyAdmin, verifyToken } = require("../middlewares/auth.jwtMiddleware")
const {validateCreatePaymentRequest}=require("../middlewares/payment.middleware")
const {createPayment}=require("../Controllers/payment.controller")

module.exports=(app)=>{

    app.post("/mba/api/v1/payments",[verifyToken],createPayment)
}