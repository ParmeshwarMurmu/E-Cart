const mongoose = require('mongoose')

const mobileSchema = mongoose.Schema({
    name:String,
    email: String,
    password: String
})

const MobileModel = mongoose.model("mobile", mobileSchema)

module.exports={
    MobileModel
}