
const countEl = document.getElementById("count-el");
let count = 0;
const saveEl = document.getElementById("save-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");

incrementBtn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;
});
saveBtn.addEventListener("click", () => {
    let total = count + (" - ")
    saveEl.textContent += total;
    countEl.textContent = 0;
    count = 0;
})


