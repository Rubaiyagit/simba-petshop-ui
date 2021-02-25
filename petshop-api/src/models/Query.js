const mongoose = require('mongoose')

const { Schema } = mongoose
// creating users schema
const querySchema = new Schema({
 email:String,
 question:String,
 status:Boolean,
})

const Query = mongoose.model('Query', querySchema)

module.exports = Query;