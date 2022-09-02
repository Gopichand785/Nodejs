const bycrpt=require('bcryptjs')
let BankDetails={
    name:"santhosh",
    cc:"2222333344445555",
    cvv:"366"
}
let new_cc=bycrpt.hashSync(BankDetails.cc,10);
let new_cvv=bycrpt.hashSync(BankDetails.cvv,10);

let new_User_Payment={...BankDetails,cc:new_cc,cvv:new_cvv}
console.log(new_User_Payment)