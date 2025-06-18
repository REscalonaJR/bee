let bee = document.getElementById("bee")
let clicks = 0
bee.addEventListener("click", () => {
if (clicks == 0) {
bee.classList.add("active")
}
clicks++
})