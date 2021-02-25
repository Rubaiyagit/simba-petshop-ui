const router = require('express').Router()
const User = require('../models/User')
const UserManagementService= require('../services/UserManagementService')
router.get('/getUser', async(req, res) => {
    try{
        const email= req.query.email
        console.log("email:",email)
        const details= await UserManagementService.getUserDetails(email)
        res.send(details);

    }catch(err){
        console.log(err)
        res.status(500)
    }
    
    
})


router.post('/add', async(req, res) => {
    try {
        const { name,age,sex,email,password,address,available} = req.body
        await User.create({
            name,
            age,
            sex,
            email,
            password,address,available
        })
        res.send({
            message: 'User Created'
        })
    } catch (err) {
        console.log("ye error aya:", err)
        res.status(500).send({
            message: "couldn't create user"
        })
    }
})
module.exports=router
