const bcrypt=require('bcrypt')
let user={
    name:"rahul",
    cc:"1234 5678 1234 5678",
    user_name:"rahul@pm.com"
}
let salt=bcrypt.genSaltSync(1)
let new_CC=bcrypt.hashSync(user.cc,salt)
let new_user_name=bcrypt.hashSync(user.user_name,salt)
/* console.log(user.cc)
console.log(new_CC)
console.log(user.user_name)
console.log(new_user_name) */

let flag=bcrypt.compareSync('rahul@pm.com',new_user_name)
console.log(flag)