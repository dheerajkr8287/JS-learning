let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currentMode="light";//dark

// modeBtn.addEventListener("click",()=>{
//     if(currentMode==="light"){
//         currentMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light")
//     }else{
//         currentMode="light"; 
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currentMode);
    
// });


modeBtn.addEventListener("mouseover",()=>{
    if(currentMode==="light"){
        currentMode="dark";

        body.classList.add("dark");
        body.classList.remove("light");
        modeBtn.innerHTML="🌙";
        modeText.innerText = "Dark Mode";
        
        
    }else{
        currentMode="light"; 
        body.classList.add("light");
        body.classList.remove("dark");
        modeBtn.innerHTML="🌞";
        modeText.innerText = "Light Mode";


    }
    console.log(currentMode);
});