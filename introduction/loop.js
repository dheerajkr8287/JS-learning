// for(let i=1;i<=5;i++){
//     console.log("hello");
// }
// console.log("End"); 


// calculte sum of 1 to n
// let n=prompt("entet the number");
// let sum=0;
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log("sum=",sum);


// while loop 

// let i=1;
// while(i<=5){
//     console.log("hello");
//     i++;

// }


//do while loop
// let i=1;
// do{
//     console.log("hello");
//     i++;
// }while(i<=5);

// for of loop-----> used for string and array

/* let str="javaScript";
let size=0;
for(let val of str){
    console.log("val=",val);
    size++;
}
console.log(size);
 */

// let name="Kakaji";
// let size=0;
// for(let i of name){
//     console.log("i=",i);
//     size++;


    
// }
// console.log(size);



// for in loop----->object
/* let student={
    name:"dheeraj",
    age:33,
    rollno:22,
};
for(let key in student){
    console.log("key=",key, "value=",student[key]);

} */


// problem 1

// for(let n=0;n<=100;n++){
//     if(n%2===0){
//         console.log(n);
//     }
// }


let gameNumber=33;
let userGuess=prompt("enter the number ");
while(gameNumber!=userGuess){
    if(userGuess>gameNumber){
        console.log("you enter the big number");
        
    }else if (userGuess<gameNumber){
        console.log("you enter the small number");
    }
    userGuess=prompt("enter the number again");
}
console.log("you win the game");



