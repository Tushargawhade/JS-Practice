//-----:Element selection:----

// let h1 = document.getElementById("abcd");         //for id
// let h2 = document.getElementsByClassName("efg");  //for class
// let h3 = document.querySelector("h1");            //select 1st element
// let h4 = document.querySelectorAll("h2");         //select all element

// console.log(h1);
// console.log(h2);  // array like structure
// console.log(h3);
// console.log(h4);  // array like structure



//-----:Manipulation:-----

// let h1 = document.querySelector("h1");

// h1.innerText = "kaise ho.";      //change Text
// h1.textContent = "kaise ho..";   //change Text
// h1.innerHTML = "<i>kaise ho</i>";  //change Html of h1 HTML Badalna



//-----:Attribute Manipulation:-----

// let a = document.querySelector("a");
// a.setAttribute("href","https://www.facebook.com");  //set attribute value change karne ke liye hota hai

// let img = document.querySelector("img");
// console.log(img.getAttribute("src"));               //get attribute value lene ke liye use hota hai

// img.setAttribute("src","https://images.unsplash.com/photo-1500576992153-0271099def59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVsbG98ZW58MHx8MHx8fDA%3D")

// a.removeAttribute("href")



//-----:Dynamic DOM Manipulation:-----

// let h1 = document.createElement("h1")    //Element created
// h1.innerText = "Element Created"         //Element mai value di

// console.log(h1)
// document.body.prepend(h1)                 //Element ko page par show kara

// let h2 = document.querySelector("h2")
// h2.remove()                              //h2 body se remove ho gaya

// let h3 = document.createElement("h1")
// h3.textContent = "New Element Created For Div"
// console.log(h3)
// document.querySelector("div").prepend(h3)   



//-----:Style Update:-----

// let h1 = document.querySelector("h1")
// h1.style.backgroundColor  = "black"
// h1.style.color  = "red"
// h1.style.fontFamily ="gilroy"

// let h2 = document.querySelector("h2")
// h2.classList.add("h2kiclass")


//-----:Task1:-----

// let h1 = document.querySelector("#h1")
// h1.textContent = "Welcome to Sheryians !"


//-----:Task2:-----

// let star = document.querySelectorAll("li")
// for(let i=0;i<star.length;i++){
//     console.log(star[i].innerText)
// }



//-----:Task3:-----
let para =  document.querySelector("p")
para.innerHTML = "<b>updated</b> by javascript"
para.setAttribute("title","Click Now")

let val = document.querySelector("a")
console.log(val.getAttribute("href"))
val.setAttribute("href","https://www.sheryians.com/")


let newlist = document.createElement("li")
console.log(newlist)
newlist.textContent = "New List"

ul = document.querySelector("ul")
ul.append(newlist)  