// Function to change the background color of a box element
function changeColor(elementId) {
    const box = document.getElementById(elementId);
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
    let currentColor = window.getComputedStyle(box).backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];

    // Ensure the new color is different from the current color
    while (rgbToHex(currentColor) === newColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }

    box.style.backgroundColor = newColor;
}

// Helper function to convert RGB color to HEX
function rgbToHex(rgb) {
    const rgbMatch = rgb.match(/\d+/g);
    if (rgbMatch) {
        const [r, g, b] = rgbMatch.map(Number);
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    }
    return rgb;
}

// Function to toggle the hover effect on all box elements
document.getElementById('toggleEffect').addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        if (box.style.transition) {
            box.style.transition = '';
        } else {
            box.style.transition = 'background-color 0.3s, transform 0.3s';
        }
    });
});
