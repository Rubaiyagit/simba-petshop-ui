const mongoose = require('mongoose')

const { Schema } = mongoose
// creating users schema
const orderSchema = new Schema({
 product_id:[String],
 quantity:Number,
 cash_on_delivery:Boolean,
 order_status:String,
 email:String
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;