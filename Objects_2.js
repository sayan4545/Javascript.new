const tinderUser = new Object();
//console.log(tinderUser);
tinderUser.id = "123abc";
tinderUser.displayName ="Sayan";
tinderUser.loggedIn = true;
tinderUser.fullName ={
    userName:{
        firstName:"Sayan",
        lastName:"Chatterjee"
    }
}
// tinderUser.fullName ={
//     firstName :"Sayan",
//     lastName :"Chatterjee"
// }
// console.log(tinderUser.fullName.firstName);
// console.log(typeof tinderUser.fullName);
// console.log(typeof tinderUser.loggedIn);
console.log(tinderUser.fullName.userName.firstName);

