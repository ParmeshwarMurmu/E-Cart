const mongoose = require('mongoose');

const userDetailSchema = new mongoose.Schema({
        email: String,
        address: String,
        state: String,
        district: String,
        expMonth: String,
        expYear: String,
        cardNumber: String,
        pincode: String,
        cvv: String,
        paymentMode: String,
});

const orderSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  userName: String,
  orderDate: { type: Date, default: Date.now }, 
  products: [{
    productModel: String,
    deleiveredStatus: String,
    quantity: Number,
    mensProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'men' },
    womensProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'women' },
    shoesProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'shoe' }
  }],
  userDetail: userDetailSchema, 
  totalAmount: Number,
  
}, {
  versionKey: false
});

const OrderModel = mongoose.model('order', orderSchema);

module.exports = {
  OrderModel
};
