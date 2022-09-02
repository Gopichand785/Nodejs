const fs=require('fs');

// reading synchronous 
/* let data=fs.readFileSync("classnotes.txt" ,"utf-8")
console.log(data) */

// reading a asynchronous
fs.readFile("classnotes.txt","utf-8",(err,newdata)=>{
    //console.log(newdata)
    fs.writeFile("one.txt",newdata,(err)=>{
        if(err) throw err;
        console.log("writing file successfully")
    });
})