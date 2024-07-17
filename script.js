function renderGrid() {
  const container = document.querySelector(".container");
  let html = "";
  for (let i=0; i<16; i++) {
    html += `
      <div class="row">
    `;
    for (let j=0; j<16; j++) {
      html += `
        <div class="cell"></div>
    `;
    }
    html += "</div>";
  }
  container.innerHTML = html;
}

renderGrid();
const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = "gray";
  });
});