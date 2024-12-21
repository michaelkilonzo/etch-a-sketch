// Constants
const GRIDSIDE = 600;

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

// State for grid line visibility
let gridLinesVisible = true;

// Functions
function createGrid(showGridLines = true) {
    gridContainerElement.innerHTML = '';
    gridContainerElement.style.width = `${GRIDSIDE}px`;
    gridContainerElement.style.height = `${GRIDSIDE}px`;

    for (let i = 0; i < rows * cols; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('cell');
        gridCell.style.width = `${GRIDSIDE / cols}px`;
        gridCell.style.height = `${GRIDSIDE / rows}px`;
        gridCell.style.border = showGridLines ? '1px solid rgb(245, 245, 245)' : 'none'; // Toggle grid lines
        gridContainerElement.appendChild(gridCell);
        gridCell.addEventListener('mouseover', draw);
    }
    gridSizeTxt.innerText = `${rows}x${cols}`;
}

function draw() {
    if (drawFlags.get('isGrayscale')) {
        this.style.backgroundColor = getGrayscaleColor();
    } else if (drawFlags.get('isRainbow')) {
        this.style.backgroundColor = getRandomColor();
    } else if (drawFlags.get('isEraser')) {
        this.style.backgroundColor = 'white';
    } else {
        this.style.backgroundColor = 'black';
    }
}

function toggleGrid() {
    gridLinesVisible = !gridLinesVisible; // Toggle visibility state
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.border = gridLinesVisible ? '1px solid rgb(245, 245, 245)' : 'none';
    });
    toggleMode('isGridVisible', toggleGridBtn, gridLinesVisible); // Set button active state
}

function clearGrid() {
    if (confirm("Are you sure you want to clear the sketch area?")) {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => (cell.style.backgroundColor = 'white'));
    }
}

function toggleMode(mode, button, isActive = null) {
    if (isActive === null) {
        // Toggle flags for drawing modes
        drawFlags.forEach((_, key) => drawFlags.set(key, key === mode ? !drawFlags.get(key) : false));
    } else {
        // Directly set grid visibility state
        drawFlags.set(mode, isActive);
    }

    // Update button active state
    const buttons = [toggleGrayscaleBtn, toggleRainbowBtn, toggleEraserBtn, toggleGridBtn];
    buttons.forEach(btn => btn.classList.remove('active-btn')); // Remove active class
    if (drawFlags.get(mode)) button.classList.add('active-btn'); // Add active class if mode is true
}

function getGrayscaleColor() {
    const value = Math.floor(Math.random() * 256);
    const hexValue = value.toString(16).padStart(2, '0').toUpperCase();
    return `#${hexValue}${hexValue}${hexValue}`;
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
    gridSizeTxt.innerText = `${2 ** rows}x${2 ** cols}`;
    createGrid(gridLinesVisible); // Recreate grid with current grid line visibility
}

// Event Listeners
toggleGridBtn.addEventListener('click', toggleGrid);
clearGridBtn.addEventListener('click', clearGrid);
toggleGrayscaleBtn.addEventListener('click', () => toggleMode('isGrayscale', toggleGrayscaleBtn));
toggleRainbowBtn.addEventListener('click', () => toggleMode('isRainbow', toggleRainbowBtn));
toggleEraserBtn.addEventListener('click', () => toggleMode('isEraser', toggleEraserBtn));
slider.addEventListener('input', gridSlider);

// Initial Grid Creation
let rows = cols = 8;
createGrid(); // Create grid with default grid lines visible
