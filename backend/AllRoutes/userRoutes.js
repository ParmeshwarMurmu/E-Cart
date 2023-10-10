const express = require('express')
const {userModel, UserModel} = require('../Model/UserSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {auth} = require('../middlewares/auth')
const {CartModel} = require('../Model/CartSchema')
require('dotenv').config()

const userRoute = express.Router()

userRoute.post('/register', async(req, res)=>{

    const {email, password} = req.body

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
                const token = jwt.sign({userId: existingUser._id, userName: existingUser.firstName}, process.env.SECRET_KEY, {expiresIn: '7d'});
                res.status(200).send({"msg": "LogIn successfull", "token": token})
            });
            
        }
   
        
    } catch (error) {
        res.status(400).send({"msg": "Cannot Registered", "error": error})
    }
})


userRoute.post('/addToCart', auth, async(req, res)=>{

    const { userId, userName, productId, productType } = req.body;
    console.log("req body");
    console.log(req.body);
    try {
        // const newCartItem = new CartModel({
        //     userId,
        //     userName,
        //     productType, // Set this to "men", "women", or "shoes" based on the product type
        //     productId
        // });

        // await newCartItem.save()
        res.send({"msg": "Product added to your cart"})
    } catch (error) {
        
        res.send({"msg": "Product added to your cart"})
    }
})



module.exports = {
    userRoute
}