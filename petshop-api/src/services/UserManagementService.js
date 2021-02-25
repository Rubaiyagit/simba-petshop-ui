const user = require('../models/User')
    async function getUserDetails (email){
        const userDetails = await order.findOne({email})
        return userDetails
    }
    module.exports = {
        getUserDetails
    }
    