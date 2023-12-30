let myArr = [1,2,3,4];
let newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

//Slice and Splice methods
/*
Slice: The slice() method of Array instances returns a shallow copy of a portion of an array into a new array
 object selected from start to end (end not included) where start and end represent the index of items in that array.
 The original array will not be modified.
 */
let arr = [1,3,5,7,9];
console.log("A",arr);
let arr_1=arr.slice(1,4);
console.log(`The sliced array is ${arr_1}`);
console.log("B",arr);

/*
Splice:The splice() method of Array instances changes the contents of an array by 
removing or replacing existing elements and/or adding new elements in place.

To create a new array with a segment removed and/or replaced without
 mutating the original array, use toSpliced(). 
To access part of an array without modifying it, see slice().
*/
let arr_2 = arr.splice(1,4);
console.log("C",arr);
console.log("D",arr_2);