//jispe event aayanga agar uspar listner nahi hua to humara event uske parent par listner dhundenga aur aisa karte karte upar ki or move karenga 

document.querySelector("#nav").addEventListener("click",function(){
    alert("Navbar Listner Clicked");
})


let ul = document.querySelector("ul")
ul.addEventListener("click",function(value){ 
    value.target.classList.toggle("linet")

})


let a = document.querySelector(".a")
let b = document.querySelector(".b")
let c = document.querySelector(".c")
let btn = document.querySelector("button")



btn.addEventListener("click",function(){
    console.log("button clicked")
})

c.addEventListener("click",function(){
    console.log("c clicked")
})
b.addEventListener("click",function(){
    console.log("b clicked")
},true)
a.addEventListener("click",function(){
    console.log("a clicked")
},true)