const http=require('http')
const fs =require('fs')
const path=require('path')
let server=http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'})
//response.end("hello,good morning")
// response.end("<h1>jello,gm</h1>")
fs.readFile(path.join(__dirname,'static','index.html'),'utf-8',(err,data)=>{
    if (err) throw err
        response.end(data)
})
})
server.listen(8080,(err)=>{
    if (err) throw err
    console.log(`server on the running port:8080`)
})