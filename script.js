let modalWindow = document.querySelector(".modal-wrap");
let inputTips = document.querySelector(".tips");
let input = document.querySelector(".input-name");



modalWindow.addEventListener("click",(event)=>{
   if(event.path[0].className == "input-name") {
       inputTips.style.display = "grid"
       setTimeout(()=>{
        inputTips.style.opacity = 1
        input.setAttribute("placeholder", "")
       },50)
   } else {
    inputTips.style.opacity = 0
    // input.value = ""  
    input.setAttribute("placeholder", "Mesh_1")
    setTimeout(()=>{
        inputTips.style.display = "none"
       },50)
    
   }
})

document.querySelector("body").addEventListener("click",()=>{
    if(event.path[0].className == "input-name") {
        inputTips.style.display = "grid"
        input.setAttribute("placeholder", "Mesh_1")   
        setTimeout(()=>{
         inputTips.style.opacity = 1
        },50)
    } else {
     inputTips.style.opacity = 0
     input.setAttribute("placeholder", "Mesh_1")
    //  input.value = ""  
     setTimeout(()=>{
         inputTips.style.display = "none"
        },50)
    }
})