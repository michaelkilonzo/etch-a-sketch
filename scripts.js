// Constants
const GRIDSIDE = 600;

// Variables
let rows = 3;
let cols = rows;

// DOM Elements
const gridContainerElement = document.querySelector('.grid-container');
const toggleGridBtn = document.querySelector('#btn-grid');
const clearGridBtn = document.querySelector('#btn-clear');
const toggleGrayscaleBtn = document.querySelector('#btn-grayscale');
const toggleRainbowBtn = document.querySelector('#btn-rainbow');
const toggleEraserBtn = document.querySelector('#btn-eraser');
const slider = document.querySelector(".slider");
const gridSizeTxt = document.querySelector('#grid-size');

// Flags
let drawFlags = new Map();
drawFlags.set('isGrayscale', false);
drawFlags.set('isRainbow', false);
drawFlags.set('isEraser', false);

// Functions
function createGrid() {
    gridContainerElement.innerHTML = '';
    gridContainerElement.style.width = `${GRIDSIDE}px`;
    gridContainerElement.style.height = `${GRIDSIDE}px`;

    for (let i = 0; i < (2 ** rows) * (2 ** cols); i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('cell');
        gridCell.style.width = `${(GRIDSIDE / 2 ** cols) - 2}px`;
        gridCell.style.height = `${(GRIDSIDE / 2 ** rows) - 2}px`;

        gridContainerElement.appendChild(gridCell);
        gridCell.addEventListener('mouseover', draw);
    }
    // init slider text 
    gridSizeTxt.innerText = `${2**rows}x${2**cols}`;

}

function draw() {
    if (drawFlags.get('isGrayscale')) {
        this.style.backgroundColor = getGrayscaleColor();
    }
    else if (drawFlags.get('isRainbow')) {
        this.style.backgroundColor = getRandomColor();
    }
    else if (drawFlags.get('isEraser')) {
        this.style.backgroundColor = 'white';
    }
    else {
        this.style.backgroundColor = 'black';
    }
}

function toggleGrid() {
    const defaultBorder = '1px solid rgb(245, 245, 245)';
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        if (window.getComputedStyle(cell).border === defaultBorder) {
            cell.style.border = 'none';
        } else {
            cell.style.border = defaultBorder;
        }
    });
}

function clearGrid() {
    if (confirm("Are you sure you want to clear the sketch area?") == true) {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => cell.style.backgroundColor = 'white');
    };
}
function toggleMode(mode, button) {
    drawFlags.forEach((_, key) => drawFlags.set(key, key === mode ? !drawFlags.get(key) : false));

    // Update button active state
    const buttons = [toggleGrayscaleBtn, toggleRainbowBtn, toggleEraserBtn, toggleGridBtn];
    buttons.forEach(btn => btn.classList.remove('active-btn')); // Remove active class
    if (drawFlags.get(mode)) button.classList.add('active-btn'); // Add active class if mode is true
}


function getGrayscaleColor() {
    const value = Math.floor(Math.random() * 256);
    const hexValue = value.toString(16).padStart(2, '0').toUpperCase();
    const color = `#${hexValue}${hexValue}${hexValue}`;
    return color;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function gridSlider() {
    rows = cols = this.value;
    gridSizeTxt.innerText = `${2**rows}x${2**cols}`;
    createGrid();
}

// Event Listeners
toggleGridBtn.addEventListener('click', toggleGrid);
clearGridBtn.addEventListener('click', clearGrid);
toggleGrayscaleBtn.addEventListener('click', () => toggleMode('isGrayscale', toggleGrayscaleBtn));
toggleRainbowBtn.addEventListener('click', () => toggleMode('isRainbow', toggleRainbowBtn));
toggleEraserBtn.addEventListener('click', () => toggleMode('isEraser', toggleEraserBtn));
slider.addEventListener('input', gridSlider);

// Initial Grid Creation
createGrid();