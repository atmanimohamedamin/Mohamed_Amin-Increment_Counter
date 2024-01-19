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


let counts2 = setInterval(updated2);
let upto2 = 0;
function updated2() {
    let count = document.querySelectorAll(".counter2");
    count.forEach(element => {
        element.innerHTML = ++upto2;
        if (upto2 === 5000) {
            clearInterval(counts2);
        }
    });
}

let counts3 = setInterval(updated3);
let upto3 = 0;
function updated3() {
    let count = document.querySelectorAll(".counter3");
    count.forEach(element => {
        element.innerHTML = ++upto3;
        if (upto3 === 7500) {
            clearInterval(counts3);
        }
    });
}






























