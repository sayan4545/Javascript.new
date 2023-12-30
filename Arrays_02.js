let num1 = [12,14,16,18,20];
let num2 = [1,2,3,4,5];
//num1.push(num2);
console.log(num1);

// let num3 = num1.concat(num2);
// console.log(num3);

let num4 = [...num1,...num2];
console.log(num4);

let another_array = [1,2,[7,8,9,[78,90],8,90]];
console.log(another_array.flat(Infinity));