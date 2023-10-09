const express = require('express')
const {userModel, UserModel} = require('../Model/UserSchema')
const bcrypt = require('bcrypt')
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
        
    }
})




module.exports = {
    userRoute
}