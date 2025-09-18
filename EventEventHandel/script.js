let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let redbtn = document.querySelector("#redbtn")
let bluebtn = document.querySelector("#bluebtn")
let change = document.querySelector("#changebtn")


//Click Eventlistner
h2.addEventListener("dblclick",function(){
    h2.style.backgroundColor = "yellow";
})

redbtn.addEventListener("click",function(){
   h1.style.color = "red";
})

bluebtn.addEventListener("click",function(){
   h1.style.color = "blue";
})

function textchange(){
   h1.textContent = "Welcome to JS"
}

change.addEventListener("click",textchange)        //add event listner
change.removeEventListener("click",textchange)     //remove event listner  


//Input Eventlistner
let inp = document.querySelector("input")
inp.addEventListener("input",function(val){
    if(val.data !== null && val.data !== " "){
        console.log(val.data);
    }
})

//Change Eventlistner
let sel = document.querySelector("select")
let changeh2 = document.querySelector("#selectedcity")

sel.addEventListener("change",function(val){
        changeh2.textContent = `${val.target.value} City Selected`
})


//Mouseover Eventllistner
let div1 = document.querySelector("#abcd")

div1.addEventListener("mouseover",function(){    
    div1.style.backgroundColor = "pink";
})
div1.addEventListener("mouseout",function(){
    div1.style.backgroundColor ="hotpink"
})





