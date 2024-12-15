const GRIDSIDE = 600;
let rows = 16;
let cols = rows;

const gridContainerElement = document.querySelector('.grid-container');
gridContainerElement.style.width = `${GRIDSIDE}px`;
gridContainerElement.style.height = `${GRIDSIDE}px`;

function createGrid(){
    for (let i = 0; i < rows * cols; i++){
        const gridCell = document.createElement('div');
        gridCell.classList.add('cell');
        gridCell.style.width = `${(GRIDSIDE / cols) - 2}px`;
        gridCell.style.height = `${(GRIDSIDE / rows) - 2}px`;

        gridContainerElement.appendChild(gridCell);

        gridCell.addEventListener('mouseover', function(){
            this.style.backgroundColor = getRandomColor();
        });
    }
}

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


createGrid();