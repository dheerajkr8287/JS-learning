//Local Storage is a feature in JavaScript that allows you to store data in a web browser persistently
// (even after the page is refreshed or the browser is closed). It stores data in key-value pairs and has a storage limit of about 5MB per domain.


//both key and value must be strings

/*----------->Basic Local Storage Methods<-------------
Method	Description
localStorage.setItem(key, value)	Stores data (key-value pair)
localStorage.getItem(key)	Retrieves stored data
localStorage.removeItem(key)	Removes a specific item
localStorage.clear()	Removes all stored data
localStorage.length	Returns the number of stored items
localStorage.key(index)	Retrieves the key name at the specified index
*/

// let key=prompt("enter the value of key");
// let value=prompt("enter the value of value");
// localStorage.setItem(key,value);
// console.log(`the value at ${key} is ${localStorage.getItem(key)}`);


// if(key=="red" || key=="blue"){
//    localStorage.removeItem(key);
// }

// if(key==0){
//     localStorage.clear();
// }

// key(index):get the key on the given postion
// console.log(localStorage.key(1)); 
// console.log(localStorage.length);

// localStorage.one=1;
// delete localStorage.one; 


// Local storage only supports strings. If you want to store objects, convert them to JSON format using JSON.stringify().


//store the object

let user={name:"rohit",age:22,city:"delhi"};
localStorage.setItem("userInfo",JSON.stringify(user));


// Retrieve and Convert Back to Object

let data=localStorage.getItem("userInfo");
let userObj=JSON.parse(data);
console.log(userObj.age);






