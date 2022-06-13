const grid = document.querySelector('.grid')
const res = document.querySelector('.reset')
const gridSize = document.querySelector('input')
const gridValue = document.querySelector('.gridsize')
const apply = document.querySelector('.apply')

let squareSize = 8


createGrid(squareSize)
// Functions that create the grid 

function createGrid (gridsize) {
    for(i = 0; i < gridsize; i++){
        for(j = 0; j < gridsize; j++){
            grid.appendChild(createDiv(grid.clientWidth / gridsize))
        }
    }
};



function createDiv(size){
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    return div
}

function reset() {
    while(grid.firstChild){
        grid.removeChild(grid.lastChild)
    }

    createGrid(squareSize)
}

// Event listeners that will 'etch' the 'sketch'

grid.addEventListener('mouseover', (e) => {
    e.target.classList.add('active')
})

res.addEventListener('click', reset)

gridSize.addEventListener('input', (e) => {
    squareSize = e.target.value

    gridValue.textContent = `${squareSize}x${squareSize}`
})

apply.addEventListener('click', function() {
    reset()
})