

const menDataCheck = (req, res, next)=>{
    
    console.log(req.body);
    const {title, images, brand, color, price, category, size} = req.body;
    if(title!==""){
        console.log("++");
    }

    if(images.length>0){
        console.log("++");
    }

    if(brand!==""){
        console.log("++");
    }

    if(color!==""){
        console.log("++");
    }

    if(price>0){
        console.log("++");
    }

    if(category!==""){
        console.log("++");
    }

    if(size.length>0){
        console.log("++");
    }

    
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