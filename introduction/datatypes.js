/* 
there are two type of datatypes 
1:primitive(Number,String ,Boolean,Undefined,BigInt,Symbol)
2:non primitive:(Objects(Array,function))
*/

// Number
//  let a=55;
// console.log(a);
// console.log(typeof( a)); 

// string
/* let b="ram";
console.log(b);
console.log(typeof(b));
 */
// boolean
/* let isFollow=true;
console.log(isFollow);
console.log(typeof(isFollow));
 */

// undefined-------->gives undefined
/* let c;
console.log(c);
console.log(typeof(c)); */

// null------------->gives Object
/* let d=null;
console.log(d);
console.log(typeof(d)); */


// bigInt
//  let e=777n;
// console.log(e);
// console.log(typeof(e)); 

// symbol

//  let s=Symbol("Hello");
// console.log(s);
// console.log(typeof(s));
 



// object : IS  a collection of different variable

const student={
    fullName:"Rahul",
    age:20,
    cgpa:8.2,
    isPass:true,
};

console.log(student);
console.log(typeof(student));
console.log(student["age"]);
console.log(student.cgpa);
console.log(student.isPass);
console.log(student["fullName"]);



student["age"]=student["age"]+1;
console.log(student["age"]);

// student["name"]="DHeeraj";
// console.log(student["name"]);


// Question
// const product={
//     title:"Ball pen",
//     rating:4,
//     offer:5,
//     price:270,
// };

// console.log(product);
// console.log(typeof(product));


// const profile={
//     username:'dheeraj',
//     isfollow:true,
//     post:195,
//     follower:596,
//     following:4,
//     bio:student,

// };
// console.log(profile);
// console.log(typeof profile["isfollow"]);
