const http=require('http')
const dotenv=require('dotenv')
dotenv.config({path:'./config/config.env'})

let server=http.createServer((req,resp)=> {
    resp.writeHead(200,{'Content-Type':'text/plain'})
    resp.end("hi rahul ji .ram ji where are you")
})
server.listen(process.env.PORT,()=>{
    console.log(`server is running on e the server on PORT:${process.env.PORT}`)
})

