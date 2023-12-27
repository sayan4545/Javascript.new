let accountId = 1;
var accountPassword = "sayan1234";
const userName = "Sayan Chatterjee";
accountCity = "Rupnarayanpur";

//userName = "Bishal Bose"; --> This will throw an error , assignment to constant variable. variables with keywords const cant be reassigned

console.log(userName+" "+accountId+" "+accountPassword+" "+accountCity);
console.table([accountId,accountPassword,userName,accountCity]);

{
    let a = 19;
    var b =10;
    var b =17;
    //let a =23; --> Since let is block scoped, it cant be redclared.Where as var is not block scoped . it can be redclared.
    console.table([a,b]);//-->a=19.b=17
}
a =23;
console.table([a,b]);//a=23,b=17

/*
prefer not to use var , since issues with block scope and functional scope.
*/
