const tinderUser = new Object();
//console.log(tinderUser);
tinderUser.id = "123abc";
tinderUser.displayName ="Sayan";
tinderUser.loggedIn = true;
tinderUser.fullName ={
    firstName :"Sayan",
    lastName :"Chatterjee"
}
console.log(tinderUser.fullName.firstName);
console.log(typeof tinderUser.fullName);
console.log(typeof tinderUser.loggedIn);

