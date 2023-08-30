const mongoose = require('mongoose')

const shoeSchema = mongoose.Schema({
    name:String,
    email: String,
    password: String
})

const ShoeModel = mongoose.model("shoe", shoeSchema)

module.exports={
    ShoeModel
}