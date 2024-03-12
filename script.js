const btn = document.querySelector("#btn");
const label = document.querySelector("#label");
const min = 1;
const max = 6;
let randomNum;

function displayNumber(){
    randomNum = Math.floor(Math.random() * max) + min;
    label.innerHTML = randomNum;
}

btn.addEventListener("click", displayNumber);