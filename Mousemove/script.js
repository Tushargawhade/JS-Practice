let div1 = document.querySelector("#abcd")

window.addEventListener("mousemove",function(value){
    div1.style.top = value.clientY + "px";
    div1.style.left = value.clientX + "px";

    // console.log(value.clientX,value.clientY)

})