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
})
if (clicks == 1,2,3) {
        setTimeout(() => {
                clicks--
        }, 1000);
if (clicks== 1) {
        bee.style.backgroundColor = "rgba(255,0,0,0.166)"
        
} else if (clicks == 2) {
        bee.style.backgroundColor = "rgba(255,0,0,0.332)"
} else if (clicks == 3) {
        bee.style.backgroundColor = "rgba(255,0,0,0.500)"
}
clicks++
bee.style.transition = "0.5s ease-in"
}