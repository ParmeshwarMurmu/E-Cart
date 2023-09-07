

const menDataCheck = (req, res, next)=>{
    
    const {title, images, brand, color, price, category, size} = req.body;
    
    if(title!=="" && images.length>0 && brand!=="" && color!=="" && price>0 && category!=="" && size.length>0){
        next()
    }
    else{
        res.send({"msg": "Feilds cannot be empty"})
    }
    

}

module.exports={
    menDataCheck
}