const { body, validationResult } = require('express-validator');

const registerRules=()=>[
    body("name","name is required").notEmpty(),
    body("email","Invalid email").isEmail(),
    body("password","password must contain at least 6 characters").isLength({min:5,max:20})
]

const loginRules=()=>[
    body("email","Invalid email").isEmail(),
    body("password","password must contain at least 6 characters").isLength({min:5,max:20})
] 
const validator=(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
       return  res.status(400).send({errors:errors.array().map(el=>({msg:el.msg}))})
    }
    next()
}
module.exports={validator,loginRules,registerRules}