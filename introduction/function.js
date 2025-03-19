//function declaration

/* function myfunction(){
    console.log("hello js");
}

//call function
myfunction(); */


/* 
function myFun(n){   //parMETER value
    console.log(n);
}
myFun(555);   //argument value
 */

// fuction parameter like local variable ---> it have block scope of function


// function --->2 number sum

/* function sum(x,y){
//local variable scope of parameter 
    s=x+y;
    return s;
}

console.log(sum(5,5)); */
  





// arrow funciton
 
// const arrowSum=(a,b) =>{
//     return a+b;
// }

// console.log(arrowSum(8,8));

// // multi
// console.log("multi plication using arrow function");

// let multi= (a,b)=>{
//     console.log(a*b);
    
// }

// console.log(multi(5,5));

 



// Questions
/* 
 function countVowel(Str){
    let count=0;
    for(const i of Str){
        if(i==="a"||i==="e"||i==="i" ||i==="o"||i==="u"){
            count++;

        }
    }

    console.log(count);

}

countVowel("darker.com");
  */

// function countVowel(Str){
//     let count=0;
//     for(const i of Str){
//         if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u"){
//             count++;
//         }
        
//     }
//     return count;
// }

// console.log("the vowel present in:"+countVowel("darker.com"));


// function is take input from user and return the output of the function
// method is used to return the value of the function mainly associate  with Object


 
// for each loop :used for array do not return new array it change in original array

//call back function:is a function as an argument to another function
// call back function is a function that is passed as an argument to another function 


// let arr=[11,12,13,14,15];
// arr.forEach(function printVal(val){ // it pass value at each index of array
//     console.log(val);
// });
   

// arr.forEach((val)=>{
//     console.log(val);
// });


/* let arr=[1,2,3,4,5];
arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
});  */


// higher order function/method (for each ):take funciton as parameter,and  return function as there output



// question

// let nums=[1,2,3,4,5];
// nums.forEach((val)=>{
//     console.log(val**2);
// });

/* let nums=[1,2,3,4,5];
nums.forEach(
    function printVal(i){
    console.log(i*i);}
); */

// let nums=[1,2,3,4,5];
// let calSquare=(nums)=>{
//     console.log(nums*nums);
// };

// nums.forEach(calSquare);


//for each normally used to print the value of array
//map is used to create new array with the result of some operation

// Map method=>create a new array with the result of some operation. the value its call back return are used to form the new array.
// map method just like for each but it return new array
  
//  let arr1=[1,2,3,4,5];
//  let newArr=arr1.map((val)=>{
//     return val**2;
//  });
// console.log(newArr);
  


// filter=>create new Array of elemnets that gives true for a condtion/filter 

// let arr1=[1,2,3,4,5];
// let newarr=arr1.filter((val)=>{
//     return val%2===0;
// })
// console.log(newarr);

// reduce =>perform some operations & and reduce the array to a single value .its return that single value


// let n=[1,2,3,4];
// let output=n.reduce((prev,curr)=>{
//     // return prev+curr;
//     return prev>curr?prev:curr;
// });

// console.log(output);//10



//Question
// let marks=[10,98,39,93,50];
// let good=marks.filter((val)=>{
//     return val>90;
// });

// console.log(good);


let number=prompt("enter the number");
let arr=[];



for(let i=1;i<=number;i++){
    arr[i-1]=i;
}

console.log(arr);

let ans=arr.reduce((prev,curr)=>{
    return prev*curr;
});

console.log(ans);





// let n=prompt("enter the number");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// };
// console.log(arr);

// // let sum=arr.reduce((res,curr)=>{
// //     return res+curr;
// // }) ;
// // console.log(sum);
// let factorial=arr.reduce((res,curr)=>{
//     return res*curr;
// }) ;
// console.log(factorial);