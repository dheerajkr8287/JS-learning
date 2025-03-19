let str="dheeraj";
let str1="kumar";
console.log(str,str1);
console.log(str);
console.log(str.length);

console.log(str1);
console.log("char at index 2 is  :"+str[2]);


/*
A string literal in JavaScript is a sequence of characters enclosed in either single quotes ('...'), double quotes ("..."), or backticks (`...`). Each type has its own nuances:

Single Quotes: 'Hello, world!'
Double Quotes: "Hello, world!"
Backticks (Template Literals): `Hello, world!`

Template literals--
Template literals in JavaScript are a way to define strings using backticks (`)
 instead of single quotes (') or double quotes ("). They offer a more readable and 
 powerful way to create strings,especially when you need to embed variables or create multiline string



String interPolations:
String interpolation is a process substituting values of variables into placeholders in a string.
Example:  `String text ${expression} string text`
*/



let obj={
    item:"pen",
    price:10,
};

let output=`the cost of ${obj.item} is ${obj.price} rupee`; //using string literal
console.log(output);
console.log(typeof output); //string

console.log("the cost of ",obj.item,"is ",obj.price,"rupee");

let specialstring=`this is a template literal ${1+3+5}`;
console.log(specialstring);


//escape sequence:used for next line

let s1="dheeraj\nkumar";
let s2="parth\tlab";
console.log(s1);
console.log(s1.length);
console.log(s2);
console.log(s2.length);

// string method 
let st1="apnacollege";

// toUpperCase()
/*
Explanation:for String are immutable in nature in javascript
let st1 = "apnacollege"; creates a new string "apnacollege" and assigns it to the variable st1.
st1.toUpperCase(); creates a new string "APNACOLLEGE" because toUpperCase() returns a new string with all characters converted to uppercase.
st1 = st1.toUpperCase(); reassigns the variable st1 to this new string "APNACOLLEGE".
The original string "apnacollege" remains unchanged in memory, but the variable st1 now points to the new string "APNACOLLEGE". This demonstrates the immutability of strings: the original string is not altered; instead, a new string is created and assigned to the variable.
*/
st1=st1.toUpperCase();
console.log(st1);
// toLowerCase()
// st1=st1.toLowerCase();
// console.log(st1);


// // to trim()
// let s="    i am food    ";
// console.log(s.trim());


// // slice method 
// let a="hello ji";
// console.log(a.slice(1,5));

// // concat
// let r=st1.concat(a);
// console.log(r);

// let p=st1+a;
// console.log(p);

// // replace

// let str2="hellololo";
// console.log(str2.replace("lo","p"));
// console.log(str2.replaceAll("lo","p"));

console.log(s1.charAt(2));












