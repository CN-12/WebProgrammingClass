let count = 0;
setTimeout(function um() {
    count++;
    document.getElementById("count-el").innerText = count;
}, 3000);
function countinstart() {
    for(i = 0; i <= 100; i++) {
        setTimeout(() => {
            setTimeout(um(), 1000);
        }, timeout);
    }
}