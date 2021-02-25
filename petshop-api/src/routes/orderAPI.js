const router = require('express').Router()
const order = require('../models/Order')
const OrderManagementService= require('../services/OrderManagementService')
router.get('/getOrder', async(req, res) => {
    try{
        const email= req.query.email
        console.log("email:",email)
        const details= await OrderManagementService.getOrderDetails(email)
        res.send(details);

    }catch(err){
        console.log(err)
        res.status(500)
    }
    
    
})

router.post('/addOrder',async(req,res)=>{
    try{
        const {product_id,quantity,cash_on_delivery,order_status,email}=req.body
        await order.create({
            product_id,quantity,cash_on_delivery,order_status,email
        })

        res.send({
            message:"Order created"
        })
    }catch(err){
        console.log("ye error aya:", err)
        res.status(500).send({
            message: "could'nt create order"
    })
}
})
module.exports=router
