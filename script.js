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
      const max = 255, min = 0;
      const red = Math.floor(Math.random() * (max - min + 1)) + min ;
      const green = Math.floor(Math.random() * (max - min + 1)) + min ;
      const blue = Math.floor(Math.random() * (max - min + 1)) + min ;
      const opacity = cell.style.opacity;
      console.log(Number(opacity));
      cell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
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
    else if (size > 100 || size < 1) {
      alert("Please input number between 1 and 100! Try again!");
    }
    else {
      renderGrid(size);
    }
  }
});

renderGrid();