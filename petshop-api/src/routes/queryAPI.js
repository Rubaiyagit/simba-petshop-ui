const router = require('express').Router()
const query = require('../models/Query')
const QueryManagementService= require('../services/QueryManagementService')
router.get('/getQuery', async(req, res) => {
    try{
        const email= req.query.email
        console.log("email",email)
        const details= await QueryManagementService.getQueryDetails(email)
        res.send(details);
    }catch(err){
        console.log(err)
        res.status(500)
    }
    
    
})

router.post('/addQuery',async(req,res)=>{
    try{
        const {email,question,status}=req.body
        await query.create({
            email,question,status
        })

        res.send({
            message:"query posted"
        })
    }catch(err){
        console.log("ye error aya:", err)
        res.status(500).send({
            message: "could'nt post query"
    })
}
})
module.exports=router