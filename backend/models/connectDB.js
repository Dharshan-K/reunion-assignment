const {Pool} = require("pg")
require("dotenv").config()

const mongoose = require("mongoose")

const connectDB = async()=>{
    try {
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.MONGO_URI);    
        console.log(`MONGODB onnected : ${conn.connection.host}`);
      } catch (error) {
        console.log(error);
        process.exit(1);
      }    
}

const connectPool = new Pool({
    connectionString: process.env.POSTGRESQL_EXTERNAL_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  }
})

module.exports = {connectDB, connectPool}