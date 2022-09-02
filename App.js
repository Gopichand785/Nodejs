var express=require("express")
var app=express()
//we are insiliging the app
//basic routing 
app.get("/",(req,res)=>{
        console.log(req)
        console.log(res)
    res.send("Root Request")
})
app.get("/user",(req,res)=>{
    res.send("hello,good ")
})
app.get("/employees/details" ,(req,res)=>{
    res.send("hello ,dineshs ")
})
app.listen(5000,(err)=>{
    if(err) throw err
    console.log("server is running the port:5000")
});