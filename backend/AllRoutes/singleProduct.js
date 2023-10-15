const expres = require('express')
const {MenModel} = require('../Model/MenSchema')
const {WomenModel} = require('../Model/WomenSchema')
const {ShoeModel} = require('../Model/ShoeSchema')

const singleProduct = expres.Router();


singleProduct.get('/men/:id', async(req, res)=>{

    const {id} = req.params;


    try {
        const menData = await MenModel.findOne({_id: id})
        res.status(200).send({"msg": menData})
    } catch (error) {
        res.status(400).send({"msg": error})
        
    }

})

singleProduct.get('/women/:id', async(req, res)=>{

    const {id} = req.params;


    try {
        const womenData = await WomenModel.findOne({_id: id})
        
        res.status(200).send({"msg": womenData})
    } catch (error) {
        res.status(400).send({"msg": error})
        
    }

})

singleProduct.get('/shoe/:id', async(req, res)=>{

    const {id} = req.params;


    try {
        const ShoeData = await ShoeModel.findOne({_id: id})
        
        res.status(200).send({"msg": ShoeData})
    } catch (error) {
        res.status(400).send({"msg": error})
        
    }

})

singleProduct.get('/relatedItems/men/:type', async(req, res)=>{

    const {type} = req.params;
    // console.log("type", type);
    // console.log("$$");

    try {
        const menData = await MenModel.find({category: type})
        
        res.status(200).send({"relatedItems": menData})
    } catch (error) {
        res.status(400).send({"msg": error})
        
    }

})

module.exports={
    singleProduct
}