var express=require("express")
const dotenv=require('dotenv')
var app=express()
dotenv:dotenv. config({path:'./config.env'})
//we are insiliging the app
//basic routing 
app.get("/",(req,res)=>{
        console.log(req)
        console.log(res)
    res.send("Root Request")
})
app.get("/user",(req,res)=>{
    res.send("hello,good morning kranthi ")
})
app.get("/employees/details" ,(req,res)=>{
    res.send("hello ,dineshs ")
})
app.get("/santhosh" ,(req,res)=>{
    res.send("hello ,snathosh u got ajob ")
})
app.listen(process.env.PORT,(err)=>{
    console.log(process.env.PORT)
    if(err) throw err
    console.log("server is running the port:5000")
});