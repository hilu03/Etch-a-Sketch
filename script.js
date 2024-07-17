function renderGrid(size = 16) {
  const container = document.querySelector(".container");
  let html = "";
  for (let i=0; i<size; i++) {
    html += `
      <div class="row">
    `;
    for (let j=0; j<size; j++) {
      html += `
        <div class="cell"></div>
    `;
    }
    html += "</div>";
  }
  container.innerHTML = html;
  setSizeOfCell(size);
  addHoverEffect();
}

function setSizeOfCell(size) {
  const cells = document.querySelectorAll(".cell");
  const width = document.querySelector(".row").offsetWidth;
  cells.forEach(cell => {
    cell.style.width = `${width / size}px`;
    cell.style.height = `${width / size}px`;
});
}

function addHoverEffect() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = "gray";
    });
  });
}

const inputButton = document.querySelector(".input-button");
inputButton.addEventListener("click", () => {
  let size = Number(prompt("Please input number of cell per row.\n(Note: Maximum number is 100!)", 16));
  if (size != null) {
    if (!Number.isInteger(size)) {
      alert("Please input an INTEGER! Try again!");
    }
    else if (size > 100) {
      alert("Maximum number is 100! Try again!");
    }
    else {
      renderGrid(size);
    }
  }
});

renderGrid();