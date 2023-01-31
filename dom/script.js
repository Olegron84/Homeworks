let first = document.getElementById("first");
let first_p = document.getElementById("first-p");
let second = document.getElementById("second");
let body = document.getElementById("body");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function cl_random(){
    first_p.style.color = `${getRandomColor()}`;
}
function shape(){
    second.style.borderRadius = "50px";
}
function bkg(){
    body.style.background = `${getRandomColor()}`;
}
function bg(){
    fourth.style.background = `${getRandomColor()}`;
}
function font(){
    fifth.style.fontFamily = "sans-serif";
}