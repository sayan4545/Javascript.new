

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