// let div=document.querySelector('div');
// console.log(div);


//getAttribute(attritube)--> to get attribute value

// let id=div.getAttribute("id");
// console.log(id);

// let name=div.getAttribute("name");
// console.log(name);

// let para=document.querySelector("p");
// let p=para.getAttribute("class");
// console.log(p);





//set attribute(att,value) //to set the attribute value 
// console.log(para.setAttribute("class","myclass"));


//style -->node.style--to change the node styling 

// let divx=document.querySelector("div");
// console.log(divx);
// console.log(divx.style);

// console.log(divx.style.backgroundColor="purple");
// console.log(divx.style.fontSize="22px");

// console.log(divx.innerText="Hello");




// create and insert elments in DOM
// create  button
let btn=document.createElement("button");
btn.innerText="ClickMe!";
console.log(btn);

// access div
let div=document.querySelector("div");
//add button at last (node.append(element))-->add at the end of node(inside)
div.append(btn);
//add button at start (node.prepend(element))-->add at the start of node(inside)
div.prepend(btn);
//node.before(element)--> add before the node (outside)
div.before(btn);
////node.after(element)--> add after the node (outside)

div.after(btn);


//try to add in body but ontop 

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>I am new Heading</i>";
document.querySelector("body").prepend(newHeading);


//delete element--> remove the node

let removed=document.querySelector("p");
removed.remove();





   
















