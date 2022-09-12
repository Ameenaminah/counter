
let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");



function increment () {
    count++;
    countEl.textContent = count

}

function save() {
    let total = count + (" - ")
    saveEl.textContent += total;
    countEl.textContent = 0;
    count = 0;
}

