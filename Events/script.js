/* To react to an event, you attach an event handler to it. This is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires. When such a block of code is defined to run in response to an event, we say we are registering an event handler. Note: Event handlers are sometimes called event listeners — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that runs in response to it happening.
*/


// Event Handling in JS

// syntax:
// node.event = ( ) => {
// //handle here
// }

// if we have both the inline and js event handler write then the js event handler only run
 let btn1=document.querySelector('#btn1');
//  applying event object:It is a special object that has details about the event.

// All event handlers have access to the Event Object's properties and methods.

// node.event = (e) => {
// //handle here
// }

// e.target, e.type, e.clientX, e.clientY

//  btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
//     console.log("button1 was clicked by 1");
//     let a=25;
//     a++;
//     console.log(a);//26    
//  }

 //here the upper event handler not run and below event handler run because here we apply on same event so last one is run 

//  btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
//     console.log("button1 was clicked by 2");
//     let a=25;
//     a++;
//     console.log(a);//26    
//  }



//  Event Listeners allow to run muliptle event of same time
//syntax:
// node.addEventListener( event, callback )

// btn1.addEventListener("click",(evt)=>{
 
//     console.log("button1 was clicked by event listner 1");
//     console.log(evt.type);
//     console.log(evt.target);
    
// });

// btn1.addEventListener("click",(evt)=>{
 
//     console.log("button1 was clicked by event listner 2");
//     console.log(evt.type);
//     console.log(evt.target);
    
// });



// node.removeEventListener( event, callback )
// *Note : the callback reference should be same to remove

btn1.addEventListener("click",()=>{
 
    console.log("button1 was clicked by event listner 1");

    
});

btn1.addEventListener("click",()=>{
 
    console.log("button1 was clicked by event listner 2");

    
});
const handler3=()=>{
    console.log("button1 was clicked by event listner 3");

}
btn1.addEventListener("click",handler3);
btn1.addEventListener("click",()=>{
 
    console.log("button1 was clicked by event listner 4");

    
});


//apply removeEventListner

btn1.removeEventListener("click",handler3);


 




let div=document.querySelector("#divs");
div.onmouseover= () =>{
    console.log("you are inside div");
    

};