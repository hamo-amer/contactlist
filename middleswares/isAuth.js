const jwt=require('jsonwebtoken')
const Auth=require('../models/Auth')

module.exports=async (req,res,next)=>{
try {
    const token=req.headers["authorization"]
    if(!token){
        return res.status(400).send({msg:"Unauthorized"})
    }
    const decoded=jwt.verify(token,process.env.keysecret)
    const user=await Auth.findById(decoded._id).select("-password")
    if(!user){
        return res.status(400).send({msg:"Unauthorized"})
    }
    req.user=user;
    next()
} catch (error) {
   return  res.status(500).send({msg:"server error"})
}


}