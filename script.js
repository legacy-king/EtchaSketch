const container = document.getElementById("sketch-container");
const resizeBtn = document.getElementById("resizeBtn");

function createGrid(size) {
  container.innerHTML = ""; // Clear previous grid
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Darken with opacity
    let opacity = 0;
    square.addEventListener("mouseenter", () => {
      opacity += 0.1;
      square.style.backgroundColor = `rgba(0, 0, 0, ${Math.min(opacity, 1)})`;
    });

    container.appendChild(square);
  }
}

// Initial grid
createGrid(16);

// Resize grid
resizeBtn.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter new grid size (1-100):"));
  if (newSize && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});
