const mongoose = require('mongoose')

const shoeSchema = mongoose.Schema({
    title:String,
    images: [String],
    brand: String,
    color: String,
    price: Number,
    category: String,
    size: [Number]
})

const ShoeModel = mongoose.model("shoe", shoeSchema)

module.exports={
    ShoeModel
}