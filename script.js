const container = document.querySelector(".container")

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