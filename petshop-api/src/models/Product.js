const mongoose = require('mongoose')

const { Schema } = mongoose
// creating users schema
const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']}, 
    id:String,
    Description:String,
    Price:String,
  available: { type: Boolean, default: false }

})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;