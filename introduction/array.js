// let marks=[97,55,77,25,36];
// console.log(marks);
// console.log(typeof marks);
// console.log(marks[1]);
// console.log(marks[11]);//undefined
// marks[2]=66;
// console.log(marks); 
// console.log("------------------");

// for(let i of marks){
//     console.log(i);
    
// }

// let str="hello";
// console.log(str);
// str[0]="Y";
// console.log(str);


// string are immutable
//array are mutable



// let cities=["delhi","pune","mumbai","hyderbad","gurgarm"];
// for(let i of cities){ //for of loop
//     console.log(i.toUpperCase());
// } 




// questions
// let arr=[85,97,44,37,76,60];
// let sum=0;
// for(let i of arr){
//     sum=sum+i;


// }
// console.log(sum);
// let avg=sum/arr.length;
// console.log(`the avg of array is ${avg}`); 


//question 2

// let item=[250,645,300,900,50];
// console.log(item);

// let newItem=[];
// //find percentage i*20/100

// for(let i of item){
//     newItem.push(i-(i*20/100));
// }

// console.log(newItem);


// console.log("simple loop");
// for(let i=0;i<item.length;i++){
//     let offer=item[i]*20/100;
//     item[i]=item[i]-offer;
// }

// console.log(item);



//Array method IN JS



// push()  //affect in original array

// let foodItems=["pea","apple","paneer","ladyfinger"];
// foodItems.push("chips","candy");
// console.log(foodItems); 


// pop()//affect in original array


// let foodItems=["pea","apple","paneer","ladyfinger"];
// console.log(foodItems);
// let deleteItem=foodItems.pop();
// console.log(deleteItem); 
// console.log(foodItems);



//tostring():convert array to string  // not affect in original array IT create new array

//  let foodItems=["pea","apple","paneer","ladyfinger"];
// console.log(foodItems);
// console.log(foodItems.toString());
// let arr=[12,34,55,66,66];
// console.log(arr);
// console.log(arr.toString());

 

// concat :it create new array after concatination of two array
/* let marvelHero=["thor","spiderman","ironman"];
let dcHero=["superman","batman"];
let indians=["firejat","krsih"];
let hero=marvelHero.concat(dcHero,indians);
console.log(hero); */

// unshift():add to start
//It does not create a new array. It modifies the original array.
// shift():delete from start&return

/* let marvelHero=["thor","spiderman","ironman"];
marvelHero.unshift("Antman");
console.log(marvelHero);

let val=marvelHero.shift();
console.log("deleted",val);
console.log(marvelHero); */


// slice() =not change in orginal array
//  let n=[22,23,44,24,6,4];
// console.log(n.slice(1,4));
// console.log(n.slice(1));
// console.log(n.slice());
/*

// splice:change original array(add,remove,replace)
// splice(startIdx,del,newElement)

let arr=[1,2,3,4,5,6,7,8];
arr.splice(2,2,101,102,103,104);
console.log(arr);

// add element
arr.splice(3,0,555);
console.log(arr);

arr.splice(3);
console.log(arr); */



let company=["google","microsoft","Uber","facebook","apple","oracle"];
console.log(company);
company.shift();
console.log(company);

company.splice(1,1,"ola");
console.log(company); 

company.push("Amazon");
console.log(company);



















