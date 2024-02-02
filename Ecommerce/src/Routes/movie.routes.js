const { createMovie,getMovieById,getMovies} = require("../Controllers/movies.controller");
const { verifyToken,verifyAdmin } = require("../middlewares/auth.jwtMiddleware");
const {validateCreateMovieRequest}=require("../middlewares/movie.middlewares")

module.exports=(app)=>{

  app.post("/mba/api/v1/movies",[verifyToken,verifyAdmin,validateCreateMovieRequest],createMovie);
  app.get("/mba/api/v1/movies",[],getMovies);
  app.get("/mba/api/v1/movies/:id",[],getMovieById);

}