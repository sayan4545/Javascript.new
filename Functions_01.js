

function saymyName(){
    console.log("S");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
}

//saymyName();//calling the function
//saymyName();//calling the function again
//function to add two numbers
function addTwoNumbers(a,b){//a,b are parameters
    return Number(a)+Number(b);
}
const result =addTwoNumbers(3,"4");//3,"4" are argumenets
console.log("Result: " + result);

function loggedInMessage(username){
    if(username===undefined){
        console.log("username is not defined");
    }else{
        return `${username} just logged in`;
    }
    
}

console.log(loggedInMessage());
//passing multiple values to a function

function addCartPrice(...num1){
    return num1;
}
console.log(addCartPrice(200,288,100));//The output will be an array

const user ={
    username:"Sayan Chatterjee",
    email: "sayanchatterjee3010@gmail.com"
}

function handleObject(anyObject){
    return `user name is ${anyObject.username} and email id is ${anyObject.username}`;
}

console.log(handleObject(user));

const myArr =[200,300,400];
function getArray(arr){
    return arr[1];
}
console.log(getArray(myArr));