const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userId: String,
    userName: String,
    size: String,
    productType: String, 
    productId: { type: mongoose.Schema.Types.ObjectId, ref: `mens`}
},{
    versionKey: false
})

const CartModel = mongoose.model("cart",cartSchema)

module.exports={
    CartModel
}