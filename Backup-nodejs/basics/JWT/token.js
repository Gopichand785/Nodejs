//how to genarate the token
const jwt=require('jsonwebtoken')
let user={
    name:"vinayreddy",
    email:"greetlabs@gmail.com",
    password:"PSA1234"
}
//let token=jwt.sign(1.,2,3)
let token=jwt.sign(user,"cccccfrd",(err,token)=>{
    if (err) throw err
    console.log(token)
})