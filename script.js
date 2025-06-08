const container = document.getElementById('container');
const resizeBtn = document.getElementById('resizeBtn');

function createGrid(rows, cols) {
    container.innerHTML = ''; // Clear existing grid
    const squareSize =  960 / size;
    for (let i = 0; i < rows; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        let opacity = 0;
    square.addEventListener("mouseenter", () => {
      opacity += 0.1;
      square.style.backgroundColor = `rgba(0, 0, 0, ${Math.min(opacity, 1)})`;
    });

    container.appendChild(square);
  }
}

createGrid(16); // Initial grid size
resizeBtn.addEventListener('click', () => {
    let size = parseInt(prompt("Enter the number of squares per side (1-100):", "16"));
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    createGrid(size, size);
});