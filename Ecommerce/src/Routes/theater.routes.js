const { verifyToken, verifyAdmin } = require("../middlewares/auth.jwtMiddleware")
const { validateCreateTheaterRequest } = require("../middlewares/theater.middlewares")
const {createTheatre,getAllTheatre,getTheatreById,addMovieToATheatre,checkMovieInTheatre}=require("../Controllers/theater.controller")

module.exports=function(app){
   
    app.post("/mba/api/v1/theaters",[verifyToken,verifyAdmin,validateCreateTheaterRequest],createTheatre)
    app.get("/mba/api/v1/theaters",[],getAllTheatre)
    app.get("/mba/api/v1/theaters/:id",[],getTheatreById)
    //to a particular theaterid we want to add a particular movieid
    app.put("/mba/api/v1/theaters/:theatreId/movies/:movieId",[verifyToken,verifyAdmin],addMovieToATheatre)
    app.get("/mba/api/v1/theaters/:theatreId/movies/:movieId",checkMovieInTheatre)
    
}
