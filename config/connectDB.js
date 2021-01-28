const mongoose=require('mongoose')
require('dotenv').config({path:'./config/.env'})

const connectDB=async()=>{
try {
    await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false  })
    console.log("database connected with success")
} catch (error) {
    console.log("database not connected")
}

}
module.exports=connectDB