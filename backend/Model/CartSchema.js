const mongoose = require('mongoose')
const {MenModel} = require('../Model/MenSchema')
const {WomenModel} = require('../Model/WomenSchema')
const {ShoeModel} = require('../Model/ShoeSchema')

const cartSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    userName: String,
    size: String,
    productId:{ type: mongoose.Schema.Types.ObjectId, refPath: 'productModel' },
    productModel: { type: String, required: true, enum: ['men', 'women', 'shoe'] }
},{
    versionKey: false
})





const CartModel = mongoose.model("cart",cartSchema)


module.exports={
    CartModel
}