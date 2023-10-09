const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
})

const UserModel = mongoose.model("user",userSchema)

module.exports={
    UserModel
}