console.log("helloworld")
let count = 0;
let 엄
function countinstart() {
    count++;
    document.getElementById("count-el").innerText = count;
}
function countdown() {
    count--;
    document.getElementById("count-el").innerText = count;
}
function save() {
    document.getElementById("su").textContent += count + " - ";
    //무조건 공백 있을떄는 textContents
    count = 0; 
    document.getElementById("count-el").innerText = count;
}