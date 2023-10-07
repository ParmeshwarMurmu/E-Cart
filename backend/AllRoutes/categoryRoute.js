const express = require('express')
const {MenModel} = require('../Model/MenSchema')
const {WomenModel} = require('../Model/WomenSchema')
const categoryRoute = express.Router()


categoryRoute.get('/men/category', async(req, res)=>{

    const {category} = req.query;
  
    try {

        const categoryData = await MenModel.find({category: category})
        res.status(200).send({'category': categoryData})
    } catch (error) {
        res.status(400).send({"msg": "cannot get category data", error: error})
        
    }
})


categoryRoute.get('/women/category', async(req, res)=>{
    const {category} = req.query;

    try {
        const womenData = await WomenModel.find({category})
        res.status(200).send({"data": womenData})
    } catch (error) {
        res.status(400).send({"msg": "cannot get category data", error: error})
    }
})




module.exports = {
    categoryRoute
}