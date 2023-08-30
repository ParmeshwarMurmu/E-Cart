const express = require('express')
const app = express();
require('dotenv').config()
const {connection} = require('./db')

app.listen(process.env.PORT, async()=>{

    try {
        console.log("Connecting to Database");
        await connection;
        console.log("Connected to Database");
        console.log(`Express server is running at port ${process.env.PORT}`);
    } catch (error) {
        console.log("Server Cannot Listen To PORT");
        console.log(error);
    }
})