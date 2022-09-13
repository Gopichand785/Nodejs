const http=require('http')
const fs =require('fs')
const path=require('path')
let srver=http.createServer((request,response)=>{
    let url=request.url
    response.writeHead(200,{'Content-Type':'text/html'})
    if(url==='/'){
        fs.readFile(path.join(__dirname,'static','index.html'),'utf-8',(err,data)=>{
            if(err) throw err
            response.end(data)
        })
    }
    else if(url==='/about'){
        fs.readFile(path.join(__dirname,'static','about.html'),'utf-8',(err,data)=>{
            if(err) throw err
            response.end(data)
        })
    }
    else if(url==='/product'){
        fs.readFile(path.join(__dirname,'static','product.html'),'utf-8',(err,data)=>{
            if(err) throw err
            response.end(data)
        })
    }
    else if(url==='/services'){
        fs.readFile(path.join(__dirname,'static','services.html'),'utf-8',(err,data)=>{
            if(err) throw err
            response.end(data)
        })
    }
    else if(url==='/conatct'){
        fs.readFile(path.join(__dirname,'static','conatct.html'),'utf-8',(err,data)=>{
            if(err) throw err
            response.end(data)
        })
    }
    else {
        fs.readFile(path.join(__dirname,'static','404.html'),'utf-8',(err,data)=>{
            if(err) throw err
            response.end(data)
        })
    }
})
srver.listen(8080,(err)=>{
    if(err) throw err
    console.log(`server is on runnig on port number:8080`)
})