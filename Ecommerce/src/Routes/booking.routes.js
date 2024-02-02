const{createBooking,getAllBookings,getBookingsById,updateBooking}=require("../Controllers/booking.controller")
const{verifyAdmin,verifyToken}=require("../middlewares/auth.jwtMiddleware")
const {validateCreateBookingRequest}=require("../middlewares/booking.middleware")

module.exports=(app)=>{

    app.post("/mba/api/v1/booking",[verifyToken,verifyAdmin,validateCreateBookingRequest],createBooking)
    app.get("/mba/api/v1/booking",[],getAllBookings)
    app.get("/mba/api/v1/booking/:id",[],getBookingsById)
    app.put("/mba/api/v1/booking/:id",[verifyToken,verifyAdmin],updateBooking)
}