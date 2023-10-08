const express = require('express')
const {MenModel} = require('../Model/MenSchema')
const {ShoeModel} = require('../Model/ShoeSchema')
const {WomenModel} = require('../Model/WomenSchema')

const allProductRoute = express.Router()

allProductRoute.get('/mens', async(req, res)=>{

    try {
        const data = await MenModel.find();
        const allBrands = await MenModel.distinct('brand');
        const allColors = await MenModel.distinct('color');
        const allCategory = await MenModel.distinct('category');
        res.status(200).send({"data": data, "allBrands": allBrands, "allColors": allColors, "allCategory": allCategory, "allGender": []})
    } catch (error) {
        res.status(200).send({"msg": error})
    }
})

allProductRoute.get('/womens', async(req, res)=>{

    try {
        const data = await WomenModel.find();
        const allBrands = await WomenModel.distinct('brand');
        const allColors = await WomenModel.distinct('color');
        const allCategory = await WomenModel.distinct('category');
        res.status(200).send({"data": data, "allBrands": allBrands, "allColors": allColors, "allCategory": allCategory, "allGender": []})
    } catch (error) {
        res.status(200).send({"msg": error})
    }
})

allProductRoute.get('/shoes', async(req, res)=>{

    try {
        const data = await ShoeModel.find();
        const allBrands = await ShoeModel.distinct('brand');
        const allGender = await ShoeModel.distinct('gender');
        const allColors = await ShoeModel.distinct('color');
        const allCategory = await ShoeModel.distinct('category');
        res.status(200).send({"data": data, "allBrands": allBrands, "allColors": allColors, "allCategory": allCategory, "allGender": allGender})
    } catch (error) {
        res.status(200).send({"msg": error})
    }
})

module.exports = {
    allProductRoute
}