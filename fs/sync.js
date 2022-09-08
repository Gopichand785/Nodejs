const fs=require('fs')
//reading data form file(abc.txt)
let data=fs.readFileSync('./abc.txt','utf-8');
console.log(data)
fs.writeFileSync("xyz.txt",data,'utf-8')