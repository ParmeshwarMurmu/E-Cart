const express = require('express')
const {  UserModel } = require('../Model/UserSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { auth } = require('../middlewares/auth')
const { CartModel } = require('../Model/CartSchema')
const { OrderModel } = require('../Model/OrderShema')

require('dotenv').config()

const userRoute = express.Router()

userRoute.post('/register', async (req, res) => {

    const { email, password } = req.body

    try {

        const existingEmail = await UserModel.findOne({ email })
        if (existingEmail) {
            res.status(200).send({ "msg": "user already exist" })
        }
        else {
            bcrypt.hash(password, 5, async (err, hash) => {
                // Store hash in your password DB.
                if (err) {
                    res.status(200).send({ "msg": err })
                }

                const user = UserModel({ ...req.body, password: hash })
                await user.save();
                res.status(200).send({ "msg": "Registered Successfully" })
            });
        }

    } catch (error) {
        res.status(400).send({ "msg": "Cannot Registered", "error": error })
    }
})

userRoute.post('/login', async (req, res) => {

    const { email, password } = req.body
   console.log(email);

    try {

        const existingUser = await UserModel.findOne({ email })
        console.log(existingUser, "+")

        if (existingUser) {

            bcrypt.compare(password, existingUser.password, (err, result) => {

                if (err) {
                    res.status(200).send({ "msg": 'Wrong Password' })
                }
                // result == true
                const token = jwt.sign({ userId: existingUser._id, userName: existingUser.firstName }, process.env.SECRET_KEY, { expiresIn: '7d' });
                res.status(200).send({ "msg": "LogIn successfull", "token": token, userId: existingUser._id })
            });

        }
        else{
            res.status(200).send({"msg": "user not found"})
        }


    } catch (error) {
        res.status(400).send({ "msg": "Cannot Registered", "error": error })
    }
})

userRoute.get('/singleUser/:id', async (req, res) => {

    const { id} = req.params

    try {
        const user = await UserModel.findOne({_id: id})
        res.status(200).send({"user": user})

    } catch (error) {
        res.status(400).send({ "msg": "Please login Cannot find single User", "error": error })
    }
})



userRoute.post('/addToCart', auth, async (req, res) => {

    // console.log(req.body);

    try {
        const newCartItem = new CartModel(req.body);
        await newCartItem.save()
        res.send({ "msg": "Product added to your cart" })
    } catch (error) {
        res.send({ "msg": "Cannot add product to your cart" })
    }
})

userRoute.get('/cart', auth, async (req, res) => {

    const { userId } = req.body;
 

    try {

        const data = await CartModel.find({userId}).populate('mensProduct').populate('womensProduct').populate('shoesProduct').sort({ _id: -1 })
        res.send({ "cart":data });
    } catch (error) {
        res.send({ "err": error, "msg": "cannot get your cart product" });
    }

})



userRoute.delete('/cart/:id', auth, async (req, res) => {

    const { id } = req.params;
    // console.log("id", id)
    

    try {

        await CartModel.findByIdAndDelete({_id: id})
        res.send({"msg": "Item Removed Successfully"});
    } catch (error) {
        res.send({ "err": error, "msg": "cannot get your cart product" });
    }

})



userRoute.post('/order', auth, async (req, res) => {

    const { userId } = req.body;
    console.log("cart");
    console.log(req.body);

    try {

        const order = new OrderModel({...req.body, orderDate: new Date()})
        await order.save()
        // console.log(data);
        res.send({ "msg": "Ordered Succesfully" });
        // res.send({ "cart":data });
    } catch (error) {
        res.send({ "err": error, "msg": "cannot get your cart product" });
    }

})


// user Order Route

userRoute.get('/userOrder', auth, async (req, res) => {

    const { userId } = req.body;
   console.log("userOrder", userId);

    try {

        if(userId){
            // const userOrder = await OrderModel.find({userId}).sort({_id: -1})
            const userOrder = await OrderModel.find({ userId })
            .sort({ _id: -1 })
            .populate({
              path: 'products',
              populate: [
                { path: 'mensProduct', model: 'men' },
                { path: 'womensProduct', model: 'women' },
                { path: 'shoesProduct', model: 'shoe' }
              ]
            });
            res.send({ "userOrder": userOrder });
        }

      
    } catch (error) {
        res.send({ "err": error, "msg": "cannot get your cart product" });
    }

})


userRoute.patch('/order/:orderId/:productId', async(req, res)=>{

    const {orderId, productId} = req.params;

    const {deleiveredStatus} = req.body;

    console.log("patching");
    console.log(orderId, "orderId")
    console.log(productId, "productId");
    console.log(deleiveredStatus);
   


    try {
        const updatedOrder = await OrderModel.findOneAndUpdate(
            { _id: orderId, "products._id": productId },
            { $set: { "products.$.deleiveredStatus": deleiveredStatus } },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ error: "Order or product not found" });
        }

        return res.json({ message: "Status updated" });

       

        // const data = await OrderModel.findByIdAndUpdate(id, { "products.$.deleiveredStatus": deleiveredStatus })
        // res.status(200).send({"msg": "Status updated", "data": data})
    } catch (error) {
        res.status(400).send({"msg": error})
    }
})

userRoute.delete('/cartItems/:id', auth, async(req, res)=>{

    const {id} = req.params;
    console.log("id", id);
    // console.log(userId, "cartItems");

    try {
        const result = await CartModel.deleteMany({userId: id})
        res.status(200).send({"msg": "Deleted all Cart Items"})
    } catch (error) {
        res.status(400).send({"msg": error, "err": error})
    }
})





module.exports = {
    userRoute
}