const router = require('express').Router()
const Product = require('../models/Product')
const ProductManagementService= require('../services/ProductManagementService')
router.get('/getProduct', async(req, res) => {
    try{
    const id= req.query.id
    console.log("id",id)
    const details= await ProductManagementService.getProductDetails(id)
    res.send(details);

}catch(err){
    console.log(err)
    res.status(500)
}
    
})
router.post('/addProduct',async(req,res)=>{
    try{
        console.log("route created")

        const {name,id,description,price,available}=req.body
        await Product.create({
            name,id,description,price,available
        })

        res.send({
            message:"Product created"
        })
    }catch(err){
        console.log("ye error aya:", err)
        res.status(500).send({
            message: "could'nt create product"
    })
}
})
module.exports= router
