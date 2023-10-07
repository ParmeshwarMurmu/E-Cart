const express = require('express')
const {WomenModel} = require('../Model/WomenSchema')



const womenCategoryRoute = express.Router()

womenCategoryRoute.get('/saree', async(req, res)=>{

    try {
        const womenData = await WomenModel.find({category: 'saree'})
        
        res.status(200).send({"data": womenData})
    } catch (error) {
        
    }
})




module.exports = {
    womenCategoryRoute
}