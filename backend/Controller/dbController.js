const {connectPool} = require("../models/connectDB")

const insertUser = async(username,email,password,accessLevel)=>{
    await connectPool.query("insert into reunion_user values($1,$2,$3,$4);", [username,email,password,accessLevel],(error,results)=>{
        if(error){
            console.log(error)
            return
        }else{
            console.log("success")
            return
        }
    })
}

module.exports = {insertUser}