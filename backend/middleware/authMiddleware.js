const jwt = require('jsonwebtoken')
const {connectPool} = require("../models/connectDB")
require('dotenv').config()


const authMiddleware = async(req,res, next)=>{
    const verifyToken = req.headers.authorization?.toString();
    console.log("authenticating...")
    if (verifyToken && verifyToken.startsWith("Bearer")) {
        try{
            const token = verifyToken.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_KEY)
            if(decoded){
                next()                           
            }
        }catch(error){
            console.log(error)
        }
    }

}

module.exports = authMiddleware