
# Sketch App 🎨

The **Sketch App** is a simple, interactive drawing tool built with HTML, CSS, and JavaScript. Create beautiful patterns, experiment with colors, or simply enjoy doodling on a dynamic grid. Adjust the grid size, toggle grid lines, and choose from various drawing modes for endless creative possibilities.

---

## ✨ Features

- **Dynamic Grid:** Adjust the grid size with a slider, ranging from 1x1 to 128x128.
- **Drawing Modes:**
  - **Grayscale:** Draw with varying shades of gray.
  - **Rainbow:** Create colorful and vibrant patterns.
  - **Eraser:** Erase parts of your drawing.
  - **Solid Black:** Draw with solid black (default mode).
- **Clear Grid:** Quickly reset the canvas for a fresh start.
- **Toggle Grid Lines:** Show or hide grid lines to suit your preference.
- **Responsive UI:** Clean, user-friendly design.

---

## 🚀 Getting Started

### Prerequisites

You need:
- A web browser (e.g., Chrome, Firefox, Edge, or Safari)
- Basic understanding of HTML/CSS/JavaScript (for customization, if needed)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sketch-app.git
   ```

2. Navigate to the project folder:
   ```bash
   cd sketch-app
   ```

3. Open `index.html` in your preferred web browser to start drawing!

---

## 📖 How to Use

1. **Adjust Grid Size:** Use the slider to change the number of cells in the grid (e.g., 8x8, 16x16, up to 128x128).
2. **Choose a Drawing Mode:**
   - Click on one of the buttons:
     - **Grayscale:** Draw in shades of gray.
     - **Rainbow:** Add colorful strokes.
     - **Eraser:** Remove specific parts of your drawing.
     - **Color (default):** Draw in solid black.
3. **Toggle Grid Lines:** Use the **Show Grid** button to toggle grid line visibility.
4. **Clear Grid:** Press the **Clear** button to reset the drawing area.
5. **Start Drawing:** Hover over grid cells to apply the selected effect.

---

## 📂 Project Structure

```
sketch-app/
│
├── index.html        # Main HTML structure
├── styles.css        # Styling for the app
├── scripts.js        # JavaScript functionality
└── README.md         # Documentation
```

---

## 🔧 Customization

### Change Default Grid Size

Edit the `rows` and `cols` variables in `scripts.js`:
```javascript
let rows = cols = 8; // Default grid size
```

### Update Grid Container Dimensions

Change the `GRIDSIDE` constant in `scripts.js` to adjust the size of the grid container:
```javascript
const GRIDSIDE = 600; // Grid container size in pixels
```

### Customize Buttons

Edit button styles in `styles.css` under the `.btn-container` and `button` selectors:
```css
button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
}
```

---

## 🤝 Contribution

Contributions are welcome! If you’d like to improve this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Submit a pull request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software.

---

## 🙌 Acknowledgments

- Inspired by classic Etch-a-Sketch toys.
- Built using vanilla JavaScript, CSS, and HTML.

---

Enjoy sketching and let your creativity flow! ✍️✨
