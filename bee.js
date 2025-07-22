let num = document.getElementById("num")
let resu = document.getElementById("resu")
function calc(){
        for (let index = 0; index < 10000; index++) {
                let res = num.innerHTML/index
                if (res%2==0, res%2==1) {
                        resu.innerHTML = resu.innerHTML + " " + res
                } else {
                        
                }
                
        }
}