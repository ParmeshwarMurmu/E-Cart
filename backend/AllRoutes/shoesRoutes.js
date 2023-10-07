const express = require('express')
const {ShoeModel} = require('../Model/ShoeSchema')

const shoeRouter = express.Router()

shoeRouter.post('/add/shoe', async(req, res)=>{

    try {
        const shoeData = ShoeModel(req.body)
        await shoeData.save()
        res.status(200).send({"msg": "Shoe Item Added Successfully"})
    } catch (error) {
        res.status(400).send({"msg": error})
    }
})


module.exports = {
    shoeRouter
}