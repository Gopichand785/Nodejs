const jwt=require('jsonwebtoken')
let users={
    email:"gorantlasanthosh@gmail.com",
    password:"PSA123"
}
let payload={
    id:users.email
}
let secretKey='HEDFCER'
let token=jwt.sign(payload,secretKey,{expiresIn:60*60})
console.log(token)


jwt.verify(token,secretKey,(err,newpayload)=>{
    if(err) throw err
    console.log(newpayload)
})