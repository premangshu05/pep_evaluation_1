const tA = document.getElementById("text");
const cD = document.getElementById("char-count");
const mx = 100;
tA.addEventListener("input", () => {
    const cL = tA.value.length;
    cD.textContent = `${cL} / ${mx}`;
    if (cL > mx) {
        cD.style.backgroundColor = "red";
    } 
});
