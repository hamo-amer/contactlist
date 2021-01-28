const express=require('express')
const router=express.Router()
const Auth=require('../models/Auth')
const bcrypt=require('bcrypt')
let jwt = require('jsonwebtoken');
const {validator,loginRules,registerRules}=require('../middleswares/bodyValidators')
const isAuth=require('../middleswares/isAuth')

router.post('/register',registerRules(),validator,async(req,res)=>{
    const {name,email,password}=req.body;
  try {
     let user= await Auth.findOne({email}) 
     if(user){
         res.status(400).send("user already exist")
     }
     user=new Auth({name,email,password})
     // hash password
     const salt=10
     let passwordHash= await bcrypt.hash(password,salt);
     user.password=passwordHash;
     await user.save()
     // given token
     const payload={
         _id:user._id
     }
     let token=await jwt.sign(payload,process.env.keysecret)
     res.status(200).send({msg:"register success",user,token})
  } catch (error) {
      res.status(500).send("error server")
  }
})
router.post('/login',loginRules(),validator,async(req,res)=>{
    const {email,password}=req.body
    try {
        let user=await Auth.findOne({email})
        if(!user){
            res.status(404).send("Bad credentials")
        }
        let isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            res.status(404).send("Bad credentials")
        }
        // given token 
        const payload={
            _id:user._id
        }
        let token=await jwt.sign(payload,process.env.keysecret)
        res.status(200).send({msg:"login success",user,token})
    } catch (error) {
        res.status(500).send("error server")
    }
})

// Private route
router.get('/me',isAuth,(req,res)=>{
    res.status(200).send({user:req.user})
})

module.exports=router