let bee = document.getElementById("bee")
let clicks = 0
let pester = 0
bee.addEventListener("click", () => {
if (clicks == 0) {
bee.classList.add("active");
bee.classList.remove("deactive");
setTimeout(() => {
        bee.classList.add("spin")
        bee.addEventListener("click", () => {
pester++
setTimeout(() => {
        clicks--
}, 1000);
if (pester == 1) {
        bee.style.backgroundColor = "rgba(255,0,0,0.166)"
} else if (pester == 2) {
        bee.style.backgroundColor = "rgba(255,0,0,0.333)"
} else if (pester == 3) {
        bee.style.backgroundColor = "rgba(255,0,0,0.500)"
}
        })
}, 3000);
}
clicks++
})

