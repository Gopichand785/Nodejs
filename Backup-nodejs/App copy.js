//create server using node js core modules
/* const http=require('http');
const server=http.createServer((req,rsp)=>{
        rsp.end("Hello,Http server")
});
server.listen(8000,(err)=>{
        if(err) throw err;
        console.log("server runinng....")
});  
 */

const http=require('http');
const server=http.createServer((req,resp)=>{
    resp.end(`<h1>Hello,Http server</h1>`)
})
server.listen(7000,(err)=>{
    if (err) throw err
    console.log("server Running")
})