const user ={
    username:"Sayan",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the channel`)
        console.log(this);
    }

}
// user.welcomeMessage();
// user.username="Chandrika";
// user.welcomeMessage();

/*In the above case , this while being in the function body refers to the present context.
When we log this outside the object in the global scope, it will give an empty object as it is in 
the node environment. While we log this in the browser, it will give the window object.
*/

//console.log(this);
//arrow functions
const one =()=>{
    console.log("Hey!");
}
one();

//arrow function to add two numbers
const addTwonums =(num1,num2)=>(Number(num1)+Number(num2));//this is implicit return.return keyword is not required in this case.
console.log(addTwonums(3,4));

const example=()=>{
    console.log(this);
}


example();