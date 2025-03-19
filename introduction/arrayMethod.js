/*  map method:create a new array with   result of some operation .
the value its callback return are used to form new array */

// Array.map(callbackFun(val,idx,Array))

/* let nums=[22,34,53];
nums.map((val)=>{
    console.log(val);
}) */


// let nums=[22,34,53];
// let newArr=nums.map((val)=>{
//     return val;
// });

// console.log(newArr);
// console.log(nums);



// filter:create a new array of element that gives true for condition/filter 

/* 
let arrays=[1,2,3,4,5,6];
let evenarray=arrays.filter((i)=>{
    return i%2===0;
});
console.log(arrays);
console.log(evenarray); */


// reduce:perform some operations  & reduce the array to a single value .it returns that single value

// let arrays=[1,2,3,4];
// const output=arrays.reduce((prev,curr)=>{
//     return prev+curr;

// });

// console.log(output);



// find grater number in array

// let arrays=[4,3,6,1,2];
// const output=arrays.reduce((prev,curr)=>{
//     return prev>curr?prev:curr;
// })
// console.log(output);


// quesrions
// let marks=[87,93,64,99,86];
// let greaterMarks=marks.filter((i)=>{
//     return i>90;
// })
// console.log(greaterMarks);

// question 2:

let n=prompt("enter the number");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);


let SUM=arr.reduce((pre,curr)=>{
    return pre+curr;
});
console.log(SUM);
let Mul=arr.reduce((pre,curr)=>{
    return pre*curr;
});
console.log(Mul);