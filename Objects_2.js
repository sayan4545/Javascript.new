const tinderUser = new Object();
console.log(tinderUser);
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
//console.log(tinderUser.fullName.userName.firstName);


//To merge to objects togeteher.
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
// const obj3 = Object.assign({},obj1,obj2);
// const obj4 = Object.assign(obj1,obj2);
// console.log(obj3);
// console.log(obj3===obj4)
const obj3 = {...obj1,...obj2};//using the spread operator
console.log(obj3);


const obj_db =[
    {id:1,email:"sayan@gmail.com"},
    {id:2,email:"h@gmail.com"},
    {id:3,email:"jeevan@gmail.com"}
]

console.log(typeof obj_db);
console.log(obj_db);
console.log(obj_db[0].id+" "+obj_db[0].email );

console.log(Object.keys(tinderUser));//This gives an array as output
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('loggedIn'));


const course ={
    name:"JS in hindi",
    courseInstructor:"sayan Chatterjee"
}

course.courseInstructor;
const{courseInstructor:instructor}=course;//Extracting the courseInstructor from the object course.
console.log(instructor);