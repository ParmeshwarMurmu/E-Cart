const expres = require('express')
const {MenModel} = require('../Model/MenSchema')
const {menDataCheck} = require('../middlewares/menDataCheck')
const menRoutes = expres.Router();


menRoutes.post('/add/men', menDataCheck, async(req, res)=>{

    try {
        const menData = MenModel(req.body)
        await menData.save()
        res.status(200).send({"msg": "Men Item Added Successfully"})
    } catch (error) {
        res.status(400).send({"msg": error})
        
    }

})

module.exports={
    menRoutes
}