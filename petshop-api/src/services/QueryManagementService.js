const query = require('../models/Query')
async function getQueryDetails(email){
    const queryDetails = await query.find({email})
    return queryDetails
}
module.exports = {
    getQueryDetails
}