const express = require('express')
const {MenModel} = require('../Model/MenSchema')
const categoryRoute = express.Router()


categoryRoute.get('/category', async(req, res)=>{

    const {category} = req.query;
  
    try {

        const categoryData = await MenModel.find({category: category})
        res.status(200).send({'category': categoryData})
    } catch (error) {
        res.status(400).send({"msg": "cannot get category data", error: error})
        
    }
})



module.exports = {
    categoryRoute
}