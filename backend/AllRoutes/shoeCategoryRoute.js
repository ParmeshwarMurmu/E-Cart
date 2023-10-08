const express = require('express')
const {ShoeModel} = require('../Model/ShoeSchema')

const shoeCategoryRoute = express.Router()

shoeCategoryRoute.get('/female/flatShoes', async(req, res)=>{

    try {
        const shoesData = await ShoeModel.find({category: 'flats'})
        res.status(200).send({"flatShoes": shoesData})
    } catch (error) {
        res.status(400).send({"msg": error})
    }
})

shoeCategoryRoute.get('/female/heels', async(req, res)=>{

    try {
        const shoesData = await ShoeModel.find({category: 'heel'})
        res.status(200).send({"heels": shoesData})
    } catch (error) {
        res.status(400).send({"msg": error})
    }
})

shoeCategoryRoute.get('/male/formalShoes', async(req, res)=>{

    try {
        const shoesData = await ShoeModel.find({category: 'formal shoe'})
        res.status(200).send({"formalShoes": shoesData})
    } catch (error) {
        res.status(400).send({"msg": error})
    }
})



module.exports = {
    shoeCategoryRoute
}