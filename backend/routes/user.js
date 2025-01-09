const express = require('express');
const jwt = require('jsonwebtoken');
const { JWT_PASSWORD } = require('../config');
const UserRouter = express.Router()
const z = require('zod');
const bcrypt = require('bcrypt');
const authmiddleware = require('./middleware');
const { prisma } = require('./prisma');


const SignupBody = z.object({
    username : z.string(),
    email : z.string().email(),
    password : z.string().min(8),
})

UserRouter.post('/Signup',async (req,res)=>{

    const {success} = SignupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            msg : "Invalid Inputs"
        })
    }

    const finduser = await prisma.user.findUnique({
            where : {
                username : req.body.username
            }
    })
    if(finduser){
        return res.status(411).json({
            msg : " Email or username is already present"
        })
    }

   const user=  await prisma.user.create({
    data : {username : req.body.username,
    password : req.body.password,
    email : req.body.email}
    })
    
    const userId = user.id
    const password = req.body.password
       const token = jwt.sign(password,JWT_PASSWORD);
       res.json({
        msg : "User created successfully",
        userId : userId,
        token : token  , 
        
       
       })
})
const SinginBody = z.object({
    username : z.string(),
    password : z.string().min(8)
})
UserRouter.post('/Signin',(req,res)=>{
    const {success} = SinginBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
             msg: "Invalid inputs"
        })
    }
    const user = req.body.username;
    const password = req.body.password;
    const finduser = prisma.user.findUnique({
        where : {
            username : user
        }
    })
    if(finduser){
        const token = jwt.sign(password,JWT_PASSWORD);
        res.status(200).json({
            userID : finduser.id,
            token : token
            
        })
        return
    }
    res.status.json({
        msg : " Error while logging in"
    })
})

module.exports = UserRouter