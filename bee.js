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
if (clicks == 1,2,3) {
        setTimeout(() => {
                clicks--
        }, 1000);
let redness = clicks*0.166;
let yup = "255,0,0,"+redness;
bee.style.backgroundColor = yup
bee.style.transition = "0.5s ease-in"
}
clicks++
})