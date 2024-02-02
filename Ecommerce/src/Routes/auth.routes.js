const { userSignup,userSingIn} = require("../Controllers/auth.controller")
const {verifySignUpRequest,verifySignInRequest}=require("../middlewares/auth.middlewares")

module.exports=(app)=>{

    app.post("/mba/api/v1/auth/signup",[verifySignUpRequest],userSignup)
    app.post("/mba/api/v1/auth/signin",[verifySignInRequest],userSingIn)

    // this is the middleware
}