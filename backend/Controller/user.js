const express = require('express')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const {connectPool} = require("../models/connectDB")
const {insertUser} = require("./dbController")
require("dotenv").config()


const userSignUp = async(req,res)=>{
    const {username, email, password, accessLevel} = req.body
    if(await checkEmail(email)===false){
        res.status(400).send("invalid email ID")
        return
    }
    const hash = await generatePassword(password)
    const userCheck = await connectPool.query("select * from reunion_user where email=$1",[email])
    if(userCheck.rows[0]==null){
        await insertUser(username, email, hash, accessLevel)      
        res.status(200).send("success")
    }else{
        res.status(400).send("user already exist")
    }
}

const userLogin = async(req,res)=>{
    const {email, password} = req.body
    console.log("logging in")
    const user = await connectPool.query("select * from reunion_user where email=$1",[email]);
    console.log(user.rows)
    if(user.rows[0]!= null){
        if(await bcrypt.compare(password,user.rows[0].user_password)){
            const token = await jwt.sign({email:email},process.env.JWT_KEY)
            console.log(token)
            res.status(200).json({
                username: user.rows[0].username,
                email: user.rows[0].email,
                userType : user.rows[0].user_type,
                authToken: token
            })
        }else{
            res.status(400).send("invalid password")
        }
        
    }
}



const checkEmail = (emailID) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(emailID)
}

const generatePassword = async(password) =>{
    var salt = await bcrypt.genSalt(10)
    var hashedPassword = await bcrypt.hash(password,salt)
    return hashedPassword;
}

const checkUser = async(email) =>{
    const isEmailPresent = await connectPool.query("select * from reunion_user where email=$1", email);
    if(isEmailPresent){
        return false
    }else{
        return true
    }
}

// const queryUser = async(email)=>{
//     const user = await connectPool.query("select * from reunion_user where email=$1", email);
//     return user
// }

module.exports = {userLogin,userSignUp}