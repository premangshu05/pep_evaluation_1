const e = document.getElementById("btn");
const cl = document.getElementById("cl");
function count() {
    let c = 0;
    let l = false;
    return function () {
        if (l) return;
        c++;
        cl.innerText = "count = "+ c;
        l = true;
        setTimeout(() => {
            l = false;
        }, 1000);
    };
}
e.addEventListener("click", count());
