// for(let index =0;index<10;index++){
//     const element =index;
//     console.log(element);
// }

// for(let i=0;i<10;i++){
//     console.log(`Outer loop ${i}`);
//     for(let j=0;j<10;j++){
//         console.log(`Inner loop is ${j} outer loop ${i}`);
//     }
// }

// const myArr =["flash","batman","superman"];
// for(let i=0;i<myArr.length;i++){
//     const element = myArr[i];
//     console.log(element);
// }

for(let i=0;i<20;i++){
    if(i==5){
        console.log("detected 5");
        continue;
    }
    console.log(i);
}