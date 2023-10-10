const mongoose = require('mongoose')

const baseProductSchema =  mongoose.Schema({
    // Define common fields
    title: String,
    images: [String],
    brand: String,
    color: String,
    price: Number,
    category: String,
});




const MensProductModel = mongoose.model('mens_product_Base', baseProductSchema);
const WomensProductModel = mongoose.model('womens_product_Base', baseProductSchema);
const ShoesProductModel = mongoose.model('shoes_product_Base', baseProductSchema);


module.exports = {
   MensProductModel,
   WomensProductModel,
   ShoesProductModel
}