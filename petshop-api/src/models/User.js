const mongoose = require('mongoose')
const {isEmail} = require('validator')
const { Schema } = mongoose;
const bcrypt= require('bcrypt')

// creating users schema
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  }, // String is shorthand for {type: String}
  age: String,
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase:true,
    validate:[isEmail,'Please enter a valid email']
  },
  sex: String,
  address: String,
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength:[6,"Minimum password length is 6 characters"]
  },
  available: { type: Boolean, default: false }

})
userSchema.post('save',function(doc, next){

  console.log('new user was created and saved',doc);
   next();
});
//fire a function before doc saved to db
userSchema.pre('save',async function(next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password,salt);
  next();

})
const User = mongoose.model('User', userSchema)

module.exports = User;
