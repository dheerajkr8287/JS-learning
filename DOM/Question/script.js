// Create a new button element. Give it a text “click me”,
//  background color of red & text color of white.Insert the button as the first element inside the body tag.

let btn=document.createElement("button");
btn.innerText="clickme";
let bodys=document.querySelector("body");
bodys.prepend(btn);

console.log(btn.style.backgroundColor="red");
console.log(btn.style.color="white");


//
let paragraph=document.querySelector("p");
console.log(paragraph.getAttribute("class"));
// console.log(paragraph.setAttribute("class","newClass"));
// classList is used to take multiple attribute of element
console.log(paragraph.classList.add("newClass"));
// console.log(paragraph.classList.remove("newClass"));




