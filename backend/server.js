const express = require('express')
const {connectPool,connectDB} = require("./models/connectDB")
const {userRouter} = require("./Routes/userRoutes")
const { rentalRouter } = require('./Routes/rentalRoutes')
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectPool
// connectDB()

const queryUser = async(email)=>{
    await connectPool.query("insert into reunion_user values($1,$2,$3,$4);",['dharshan56','dha@gmail',"@@@@#####",'owner']);
    
}

// queryUser()

app.use("/",userRouter)
app.use("/reunion",rentalRouter)

app.listen(3000, ()=>console.log("listening to port 3000"))