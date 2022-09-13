const http=require('http')
let server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end("<h1>ramji hello how are you </h1>")
})
server.listen(8080,()=>{
    console.log("server is running")
})