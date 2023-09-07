

const womenDataCheck = (req, res, next)=>{
    const {title, images, brand, color, price, category, size} = req.body;

    if(size.length!=0){
        if(title!=="" && images.length>0 && brand!=="" && color!=="" && price>0 && category!==""){
            next()
        }
        else{
            res.send({"msg": "Feilds cannot be empty"})
        }

    }
    else{

          if((category === 'saree' || category === 'lehenga cholis' ) && (title!=="" && images.length>0 && brand!=="" && color!=="" && price>0 && category!=="")){
            delete req.body.size;
            next()
          }
          else{
            res.send({"msg": "Feilds cannot be empty"})
        }
    }
    
    
   

}

module.exports = {
    womenDataCheck
}
