let inp = document.querySelector("input")
let span = document.querySelector("span")

inp.addEventListener("input", function (dets) {
    let val = 20 - inp.value.length;

    span.textContent = val;
    if (val < 0) {
        span.style.color = "red";
    }
    else {
        span.style.color = "black";
    }
})