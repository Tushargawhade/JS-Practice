let intervaltime = setTimeout(function () {
    console.log("setTimeout run after 2 sec.")
}, 2000)
// clearTimeout(intervaltime)


let count = 10;
let interval = setInterval(function () {
    if (count >= 0) {
        console.log(count);
        count--;
    }
    else clearInterval(interval);
}, 2000)



let bar = document.querySelector(".progress-bar")
let percentage = document.querySelector(".percentage-text")
let percentagetext = document.querySelector(".progress-text")

let counter = 0;
let downloadbar = setInterval(function () {
    if (counter < 100) {
        counter++;
        bar.style.width = `${counter}%`
        percentage.textContent = `${counter}%`
    }
    else {
        percentagetext.textContent = "Downloaded..."
        clearInterval(downloadbar)
    }
}, 3000 / 100);


setTimeout(function(){
    percentagetext.style.display ="none";

},4000)