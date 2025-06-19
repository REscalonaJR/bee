let bee = document.getElementById("bee")
let clicks = 0
bee.addEventListener("click", () => {
if (clicks == 0) {
bee.classList.add("active");
bee.classList.remove("deactive");
setTimeout(() => {
    if (clicks==2) {
        bee.classList.add("spin")
    }
}, 3000);
}
clicks++
})