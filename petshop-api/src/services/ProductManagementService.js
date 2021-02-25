const product = require('../models/Product')
async function getProductDetails (id){
    const productDetails = await order.findOne({id})
    return productDetails
}
module.exports = {
    getProductDetails
}