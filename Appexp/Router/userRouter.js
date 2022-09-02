const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send(`santhosh gota job`)
})
router.get('/user',(req,res)=>{
    res.send(`running on the server`)
})
router.get('/login',(req,res)=>{
    res.send(`login successfully`)
})
router.get('/allusers',(req,res)=>{
    res.send(`all user as an one entity`)
})

module.exports=router;