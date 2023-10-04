const express = require('express')
const app = express();
require('dotenv').config()
const {connection} = require('./db')
const {menRoutes} = require('./AllRoutes/menRoutes')
const {womenRoutes} = require('./AllRoutes/womenRoutes')
const {categoryRoute} = require('./AllRoutes/categoryRoute')
const cors = require('cors')



app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'));
app.use('/adminMen', menRoutes)
app.use('/adminWomen', womenRoutes)
app.use('/home', categoryRoute)

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