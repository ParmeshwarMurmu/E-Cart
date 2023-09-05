const mongoose = require('mongoose')

const menSchema = mongoose.Schema({
    title:String,
    images: [String],
    brand: String,
    color: String,
    price: Number,
    category: String,
    size: [String]
})

const MenModel = mongoose.model("men",menSchema)

module.exports={
    MenModel
}