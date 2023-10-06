const expres = require('express')
const {MenModel} = require('../Model/MenSchema')

const singleProduct = expres.Router();


singleProduct.get('/men/:id', async(req, res)=>{

    const {id} = req.params;
    console.log("***");

    try {
        const menData = await MenModel.findOne({_id: id})
        
        res.status(200).send({"msg": menData})
    } catch (error) {
        res.status(400).send({"msg": error})
        
    }

})

module.exports={
    singleProduct
}