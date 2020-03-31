const express=require('express')
const router=express.Router()
const bcrypt=require('bcryptjs')
const User=require('../models/User')
const jwt=require('jsonwebtoken')
const jwtSecret="secret"
const { check, validationResult } = require('express-validator');

router.post('/',[
    check('firstname','please enter firstname').not().isEmpty(),
    check('lastname','please enter last name').not().isEmpty(),
    check('email','please enter valid email').isEmail(),
    check('password','please enter valid password').not().isEmpty()],(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.json({errors:errors.array()})
    }
    const {firstname,lastname,email,password}=req.body
    User.findOne({email})
    .then(user=>{ 
        if(user){
            res.json({msg:'email already exist'})
        }
        else{
            user=new User({
                firstname,lastname,email,password,type:"client"
            })
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(user.password,salt,(err,hashedpassword)=>{
                    user.password=hashedpassword 
                    user.save()
                 const payload={
                     user:{
                         id:user.id
                     }
                 }
                 jwt.sign(payload,jwtSecret,{expiresIn:3600000},(err,token)=>{
                     if(err) throw err
                     res.json({token})
                 })

                })
            })
           
        }
    })
    .catch(err=>console.log(err.message))
    
})


module.exports=router