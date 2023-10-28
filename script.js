// variables
let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");

let workTime = 25;
let breakTime = 5;

let sceonds = "00";

// display
window.onload = function () {
    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = sceonds;

    workTitle.classList.add("active");
}
