let h1 = document.querySelector("h1")

window.addEventListener("keydown",function(inpkey){
    if(inpkey.key === " "){
        h1.textContent = "space"
        
    }
    else{
        h1.textContent = inpkey.key
    }
})