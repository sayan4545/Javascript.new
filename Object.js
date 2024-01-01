let mySym = Symbol("key1");

const myUser ={
    name:"Sayan Chatterjee",
    id:101,
    age:30,
    email:"sayan@gmail.com",
    isLoggedIn:true,
    lastLogIn:["Monday","Tuesday","Wednesday"],
   [mySym]:"Sayan101"

};

console.log(myUser);
console.log(`User name is ${myUser.name} . user is of age ${myUser.age}.User logged in last on ${myUser.lastLogIn}`);
console.log(myUser[mySym]);
console.log(typeof myUser[mySym]);


myUser["email"] = "sayan@google.com";
//Object.freeze(myUser);
console.log(myUser);

myUser.greeting = function(){
    console.log("Hello JS users!");
}

//console.log(myUser.greeting());
myUser.greeting2 = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(myUser.greeting2());

