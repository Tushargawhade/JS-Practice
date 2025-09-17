let btn = document.querySelector("#btninput")
let type = document.querySelector("#fileinput")

btn.addEventListener("click",function(){
     type.click();
})   

type.addEventListener("change",function(details){
     const file = details.target.files[0];

     if(file){
          btn.textContent = file.name;
     }
})