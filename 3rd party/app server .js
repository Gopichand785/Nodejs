const http=require('http')
const dotenv=require('dotenv')
const chalk=require('chalk')
dotenv.config({path:'./config/config.env'})
console.log(process.env.PORT)

let server=http.createServer((req,resp)=> {
    resp.writeHead(200,{'Content-Type':'text/plain'})
    resp.end("hi rahul ji .ram ji where are you.......praveen i love you")
})
server.listen(process.env.PORT,()=>{
    console.log(chalk.red(`server is running on e the server on PORT:${process.env.PORT}`))
})

