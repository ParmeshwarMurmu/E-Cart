// const mongoose = require('mongoose')
// require('dotenv').config()

// const connection = mongoose.connect(process.env.monogUrl)

// module.exports={
//     connection,
// };


const mongoose = require('mongoose')
require('dotenv').config()

const connection = mongoose.connect(process.env.mongoUrl)




module.exports = {
    connection
}