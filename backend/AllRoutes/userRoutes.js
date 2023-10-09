const express = require('express')
const {userModel, UserModel} = require('../Model/UserSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const userRoute = express.Router()

userRoute.post('/register', async(req, res)=>{

    const {email, password} = req.body
    console.log(email,password);

    try {

        const existingEmail = await UserModel.findOne({email})
        if(existingEmail){
            res.status(200).send({"msg": "user already exist"})
        }
        else{
            bcrypt.hash(password, 5, async(err, hash)=> {
                // Store hash in your password DB.
                if(err){
                    res.status(200).send({"msg": err})
                }

                const user = UserModel({...req.body, password: hash})
                await user.save();
                res.status(200).send({"msg": "Registered Successfully"})
            });
        }
        
    } catch (error) {
        res.status(400).send({"msg": "Cannot Registered", "error": error})
    }
})

userRoute.post('/login', async(req, res)=>{

    const {email, password} = req.body
 

    try {

        const existingUser = await UserModel.findOne({email})
        if(existingUser){

            bcrypt.compare(password, existingUser.password, (err, result)=> {

                if(err){
                    res.status(200).send({"msg": 'Wrong Password'})
                }
                // result == true
                const token = jwt.sign({userId: existingUser._id}, process.env.SECRET_KEY, {expiresIn: '7d'});
                res.status(200).send({"msg": "LogIn successfull", "token": token})
            });
            
        }
   
        
    } catch (error) {
        res.status(400).send({"msg": "Cannot Registered", "error": error})
    }
})




module.exports = {
    userRoute
}