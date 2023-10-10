const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userId: String,
    userName: String,
    productType: String, // Add this field to specify product type
    productId: { type: mongoose.Schema.Types.ObjectId, refPath: 'productType' }
},{
    versionKey: false
})

const CartModel = mongoose.model("cart",cartSchema)

module.exports={
    CartModel
}