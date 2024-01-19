let counts = setInterval(updated);
let upto = 0;
function updated() {
    let count = document.querySelectorAll(".counter");
    count.forEach(element => {
        element.innerHTML = ++upto;
        if (upto === 12000) {
            clearInterval(counts);
        }
    });
}


































