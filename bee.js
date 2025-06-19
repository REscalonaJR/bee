let bee = document.getElementById("bee")
let clicks = 0
bee.addEventListener("click", () => {
if (clicks == 0) {
bee.classList.add("active");
bee.classList.remove("deactive");
setTimeout(() => {
        bee.classList.add("spin")
}, 3000);
}
clicks++
})

