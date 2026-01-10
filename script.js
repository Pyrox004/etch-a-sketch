const container = document.querySelector(".container");
const input = document.querySelector(".input-number");
const resizerButton = document.querySelector(".resizer")
const eraseButton = document.querySelector(".erase")
const rainbowButton = document.querySelector(".rainbow")
const eraserButton = document.querySelector(".eraser")
const blackButton = document.querySelector(".black")
const opacityButton = document.querySelector(".opacity")

let isDrawing = false;
let currentMode = "black"
let opacityCheck = "false"

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

function paintSquare(e) {
     if (currentMode == "erase") {
        e.target.style.backgroundColor = "white"
        e.target.style.opacity = "1"
    } else if (currentMode == "rainbow") {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)

        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    } else {
        e.target.style.backgroundColor = "black"
        e.target.style.outline = "1px solid gray"
    } 
    
    if(opacityCheck === true) {
        let currentOpacity = Number(e.target.style.opacity)

        if(currentOpacity < 1) {
            e.target.style.opacity = `${(currentOpacity + 0.1).toFixed(1)}`
        }
    } else {
        e.target.style.opacity = "1"
    }
}

gridGenerator(16)

resizerButton.addEventListener("click", ( )=> {
    let gridAmount = Number(input.value)

    if (isNaN(gridAmount) || gridAmount <= 0 || gridAmount > 100) {
        alert("pick a number equal to or below 100!")
        return
    }

    container.innerHTML = '';

    gridGenerator(gridAmount)

})

input.addEventListener("keyup", (e) => {
    if(e.keyCode === 13) {
        let gridAmount = Number(input.value)

        if (isNaN(gridAmount) || gridAmount <= 0 || gridAmount > 100) {
            alert("pick a number equal to or below 100!")
            return
        }

        container.innerHTML = '';

        gridGenerator(gridAmount)
    }
})

eraseButton.addEventListener("click", () => {
    container.innerHTML = '';
    let gridAmount = Number(input.value)

    if (input.value == "" || input.value == null || input.value === undefined || input.value <=0) {
        gridGenerator(16)
    } else gridGenerator(gridAmount)
})

blackButton.addEventListener("click", () => {
    currentMode = "black"
})

rainbowButton.addEventListener("click", () => {
    currentMode = "rainbow"
})

eraserButton.addEventListener("click", () => {
    currentMode = "erase"
})

opacityButton.addEventListener("click", (e) => {
    if(opacityCheck === false) {
        opacityCheck = true
    } else {
        opacityCheck = false
    }
})



container.addEventListener("mousedown", (e) => {
    isDrawing = true;

    if (!isDrawing || !e.target.classList.contains("grid-square")) {
        return
    }

    paintSquare(e)

})

window.addEventListener("mouseup", () => {
    isDrawing = false;
})

container.addEventListener("mouseover", (e) => {
    if (!isDrawing || !e.target.classList.contains("grid-square")) {
        return
    }

    paintSquare(e)
})

container.addEventListener("dragstart", (e) => {
    e.preventDefault()
})
