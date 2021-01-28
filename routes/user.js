const express=require('express')
const router=express.Router()
const User=require('../models/User')

// test router
router.get('/test',(req,res)=>{
    res.send("Hello ")
})
// add new user
router.post('/',async(req,res)=>{
    const {name,email,password,phone,address}=req.body;
try {
    const user= new User({name,email,password,phone,address})
    await user.save()
     res.status(200).send({msg:"user added",user})
} catch (error) {
    res.status(400).send({msg:"Bad request"})
}   
})
// get all users
router.get('/',async(req,res)=>{
    try {
        let users= await User.find()
        res.status(200).send(users)
    } catch (error) {
        res.status(404).send({msg:"Bad requests"})
    }
})
// update user
router.put('/:ID',async(req,res)=>{
const {ID}=req.params;
console.log(ID)
const {name,email,password,address,phone}=req.body;
try {
  const user = await User.findOneAndUpdate({_id:ID},{$set:{name,email,password,address,phone}})
    res.status(200).send({msg:"update with success",user})
} catch (error) {
    res.status(400).send({msg:"error client"})
}
})
// delete user
router.delete('/:ID',async(req,res)=>{
const {ID}=req.params
try {
    await User.findOneAndDelete({_id:ID})
    res.status(200).send({msg:'user deleted'})
} catch (error) {
    res.status(400).send({msg:"error client"})
}
})





module.exports=router