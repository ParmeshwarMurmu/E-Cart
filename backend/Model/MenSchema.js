const mongoose = require('mongoose')

const menSchema = mongoose.Schema({
    name:String,
    email: String,
    password: String
})

const MenModel = mongoose.model("men",menSchema)

module.exports={
    MenModel
}