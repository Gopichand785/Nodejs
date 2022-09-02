const bycrpt=require('bcryptjs')
let User_Details={
    name:"srikanth",
    email:"PSA@gmail.com",
    password:"PSA123"
};
let newpassword=bycrpt.hashSync(User_Details.password,10)
console.log(newpassword)

/* User_Details={...User_Details, password:newpassword}
console.log(User_Details) */
let x=bycrpt.hashSync("PSA1234",User_Details.password)
console.log(x)
if (bycrpt.compareSync("PSA1234",User_Details.password)){
    console.log("password-matched")
}
else{
    console.log("password -not matched")
}