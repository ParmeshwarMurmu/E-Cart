const mongoose = require('mongoose')

const watchSchema = mongoose.Schema({
    name:String,
    email: String,
    password: String
})

const WatchModel = mongoose.model("watch",watchSchema)

module.exports={
    WatchModel
}