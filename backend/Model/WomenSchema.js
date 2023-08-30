const mongoose = require('mongoose')

const womenSchema = mongoose.Schema({
    name:String,
    email: String,
    password: String
})

const WomenModel = mongoose.model("women",womenSchema)

module.exports={
    WomenModel
}