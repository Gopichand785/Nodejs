const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send(`<h1>kranthi is a good boy</h1>`)
})
app.use('/user',require('./Router/userRouter'))
app.listen(5000,(err)=>{
    if (err) throw err
    console.log(`server is running :port:5000`)
})