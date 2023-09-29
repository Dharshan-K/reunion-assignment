const express = require("express")
const {userLogin,userSignUp} = require("../Controller/user")
const userRouter  = express.Router()

userRouter.route("/api/signup").post(userSignUp)
userRouter.route("/api/login").post(userLogin)

module.exports = {userRouter}
