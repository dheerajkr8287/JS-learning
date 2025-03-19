// window object represents an open window in a brower. it is brower object object (not javascript )& is automatically created by the browser.
// it is the global object of the browser environment. with lot of properties and methods.
// window object is the global object in client side javascript. it represents the browser window.

// console.log(window.document);//this will print the document element of the window object.
// console.dir(window.document);//this will print the document object of the window object in a directory format.


// console.dir(document.body.childNodes[2]);
// document.body.childNodes[2].textContent = "Hello World";


//DOM manipulation

//selecting with getElementById       -- ID ARE ALWAYS UNIQUE IN A DOCUMENT.(Represents with #)       
// syntax: document.getElementById("id");
//it return null if the element is not found.

// let heading =document.getElementById("myid1");
// console.dir(heading); //this will print the heading1 element in a directory format.
// console.log(heading);

//selecting with getElementsByClassName---- class are not unique in a document.(Represents with .)
// syntax: document.getElementsByClassName("class");
//it return an array like object called HTMLCollection.
//if the class is not found it will return an empty HTMLCollection.

// let heading3=document.getElementsByClassName("myclass");
// console.dir(heading3);
// console.log(heading3);  


//selecting with getElementsByTagName---- tag are not unique in a document.
// syntax: document.getElementsByTagName("tag");
//it return an array like object called HTMLCollection.
//if the tag is not found it will return an empty HTMLCollection.
// let para=document.getElementsByTagName("p");
// console.dir(para);
// console.log(para);


//QuerySelector---- it is used to select the first element that matches a specified CSS selector in the document.
//syntax: document.querySelector("css selector");
//it return null if the element is not found.
// let heading1=document.querySelector(".myclass");
// let heading1=document.querySelector("p");
// let heading1=document.querySelector("#myid1");
// console.dir(heading1);

//QuerySelectorAll---- it is used to select all the elements that matches a specified CSS selector in the document.
//syntax: document.querySelectorAll("css selector");
//it return an array like object called NodeList.
//if the element is not found it will return an empty NodeList.
// let heading2=document.querySelectorAll(".myclass");
// console.dir(heading2);
// let button1=document.querySelectorAll("#butt");
// console.dir(button1);
// console.log(button1);


//properties 

// tagName:return the tag name of the element.
// if (button1.length > 0) {
// 	console.log(button1[0].tagName);
// } else {
// 	console.log("No elements found with the specified selector.");
// }
 
// console.log(heading2[1].tagName);


//innerText: return the text content of the element.and all its child elements.
//innerHTML: return the plain twxt or HTML content of the element.

// let div=document.querySelector("div");
// console.log(div.innerText);
// console.log(div.innerHTML);


// let heading=document.querySelector("h2");
// console.log(heading.innerText);
// console.log(heading.innerHTML);

// let heading1=heading.innerText="<b>New heading</b>";
// console.log(heading1);
// //textContent: return the textual content even for hidden elements.
// console.log(heading1);
// console.log(heading.innerText);//text not visible
// console.log(heading.textContent);



//Questions

// let h2=document.querySelector("h2");
// h2.innerText=h2.innerText+"from apna college";//concatenation
// console.log(h2.innerText);


//Questions
let boxs=document.querySelectorAll(".box");
// console.log(boxs[0]);
//normal way
// console.log(boxs[0].innerText="First box");
// console.log(boxs[1].innerText="Second box");	
// console.log(boxs[2].innerText="Third box");

// but better approach is to use for loop.
let ind=1;
for(let i of boxs ){
	console.log(i.innerText=`box number ${ind}`);
	ind++;
}






 





