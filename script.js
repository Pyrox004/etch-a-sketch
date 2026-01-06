const container = document.querySelector(".container");
const input = document.querySelector(".input-number");
let isDrawing = false;

function gridGenerator(gridAmount) {
    const gridSize = gridAmount * gridAmount;
    const gridBlockSize = 960/gridAmount;

    for(let i=0; i < gridSize; i++) {
        let newSquare = document.createElement("div");
        
        newSquare.classList.add("grid-square");

        newSquare.style.height = `${gridBlockSize}px`;
        newSquare.style.width = `${gridBlockSize}px`;

        container.appendChild(newSquare);
    }
}

input.addEventListener("input", (e) => {
    let gridAmount = Number(e.target.value)

    if (isNaN(gridAmount) || gridAmount <= 0 || gridAmount > 100) {
        alert("pick a number equal to or below 100!")
        return
    }

    container.innerHTML = '';

    gridGenerator(gridAmount)
})

container.addEventListener("mousedown", (e) => {
    isDrawing = true;

    if (e.target.classList.contains("grid-square")) {
        e.target.style.backgroundColor = "black"
    }

})

window.addEventListener("mouseup", () => {
    isDrawing = false;
})

container.addEventListener("mouseover", (e) => {
    if(isDrawing && e.target.classList.contains("grid-square")) {
        e.target.style.backgroundColor = "black"
    }
})

