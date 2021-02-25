const order = require('../models/Order')
async function getOrderDetails (email){
    const orderDetails = await order.findOne({email})
    return orderDetails
}
module.exports = {
    getOrderDetails
}