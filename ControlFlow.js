// if(2==='2'){
//     console.log("Executed");
// }else{
//     console.log("Not executed");
// }


const userLoggedIn = true;
const debitCard =true;
const userLoggedInFromGoogle = true;
const userLoggedInFromEmail = false;

if(userLoggedIn&&debitCard){
    console.log("Allowed to buy");

}

if(userLoggedInFromGoogle||userLoggedInFromEmail){
    console.log("Allowed to buy");
}

else{
    console.log("Not allowed access to buy!");
}

let age = 29;
if(age>=18)console.log("Can Drive");
else if(age>=60)console.log("Not eligible for a re issue");
else console.log("Cant Drive");
