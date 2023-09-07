const mongoose = require('mongoose')

const womenSchema = mongoose.Schema({
    title:String,
    images: [String],
    brand: String,
    color: String,
    price: Number,
    category: String,
    size: [String]
})

const WomenModel = mongoose.model("women",womenSchema)

module.exports={
    WomenModel
}