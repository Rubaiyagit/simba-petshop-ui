const express = require('express')
const app = express()
const port = 3000
const userRoutes = require('./routes/userAPI')
const productRoutes= require('./routes/productAPI')
const orderRoutes= require('./routes/orderAPI')
const queryRoutes=require('./routes/queryAPI')
const mongoose = require('mongoose')
const authRoutes= require('./routes/authRoutes')

mongoose.connect('mongodb://localhost:27017/Ruby-shop', { useNewUrlParser: true, useUnifiedTopology: true })
app.use(express.json())
app.use('/user', userRoutes)
app.use('/product',productRoutes)
app.use('/order',orderRoutes)
app.use('/query',queryRoutes)
app.use('/auth',authRoutes);
app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
