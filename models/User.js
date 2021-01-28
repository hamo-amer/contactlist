const mongoose=require('mongoose')

const Schema=mongoose.Schema;
 const userSchema= new Schema({
name:{type:String,required:true},
email:{type:String,required:true},
phone:{type:Number},
address:{type:String},
password:{type:String,required:true},
 })
 module.exports=mongoose.model("User",userSchema)