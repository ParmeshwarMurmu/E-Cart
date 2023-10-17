const mongoose = require('mongoose')
const {MenModel} = require('../Model/MenSchema')
const {WomenModel} = require('../Model/WomenSchema')
const {ShoeModel} = require('../Model/ShoeSchema')

const cartSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    userName: String,
    size: String,
    // productId: { type: mongoose.Schema.Types.ObjectId, ref: 'men' || 'women' || 'shoe' },
    productModel: String,
    mensProduct: {type: mongoose.Schema.Types.ObjectId, ref: 'men'},
    womensProduct: {type: mongoose.Schema.Types.ObjectId, ref: 'women'},
    shoesProduct: {type: mongoose.Schema.Types.ObjectId, ref: 'shoe'},
},{
    versionKey: false
})





const CartModel = mongoose.model("cart",cartSchema)


module.exports={
    CartModel
}