const container = document.querySelector(".container")
let isDrawing = false;

function gridGenerator(gridAmount) {
    const gridSize = gridAmount * gridAmount;
    const gridBlockSize = 960/gridAmount;

    for(let i=0; i < gridSize; i++) {
        let newSquare = document.createElement("div");
        
        newSquare.classList.add("grid-square");

        newSquare.style.height = `${gridBlockSize}px`
        newSquare.style.width = `${gridBlockSize}px`

        container.appendChild(newSquare)
    }
}

container.addEventListener("mousedown", (e) => {
    isDraw = true;

    if (e.target.classList.contains("grid-square")) {
        e.target.style.backgroundColor = "black"
    }

})

window.addEventListener("mouseup", () => {
    isDrawing = false;
})

container.addEventListener("mouseover", (e) => {
    if(isDrawing = true && e.target.classList.contains("grid-square")) {
        e.target.style.backgroundColor = "black"
    }
})
