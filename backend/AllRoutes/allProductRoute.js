const express = require('express')
const {MenModel} = require('../Model/MenSchema')
const {ShoeModel} = require('../Model/ShoeSchema')
const {WomenModel} = require('../Model/WomenSchema')

const allProductRoute = express.Router()

allProductRoute.get('/mens', async(req, res)=>{

    try {
        const data = await MenModel.find();
        res.status(200).send({"data": data})
    } catch (error) {
        res.status(200).send({"msg": error})
    }
})

allProductRoute.get('/womens', async(req, res)=>{

    try {
        const data = await WomenModel.find();
        res.status(200).send({"data": data})
    } catch (error) {
        res.status(200).send({"msg": error})
    }
})

allProductRoute.get('/shoes', async(req, res)=>{

    try {
        const data = await ShoeModel.find();
        res.status(200).send({"data": data})
    } catch (error) {
        res.status(200).send({"msg": error})
    }
})

module.exports = {
    allProductRoute
}