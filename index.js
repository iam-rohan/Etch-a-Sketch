const divMaker = document.querySelector(".container");

function clearContainer() {
  while (divMaker.firstChild) {
    divMaker.removeChild(divMaker.firstChild);
  }
}

function setStage() {
  clearContainer();
  let gridSize = prompt("How many pixels per side?");
  let gridChecked = Math.min(parseInt(gridSize), 100);
  const containerWidth = gridChecked * 20; // Assuming each grid item is 50px wide
  const containerHeight = gridChecked * 20; // Assuming each grid item is 50px high

  divMaker.style.width = containerWidth + "px";
  divMaker.style.height = containerHeight + "px";
  for (i = 0; i < gridChecked; i++) {
    const outerDiv = document.createElement("div");

    for (j = 0; j < gridChecked; j++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      outerDiv.appendChild(div);
    }
    outerDiv.classList.add("grid-row");
    divMaker.appendChild(outerDiv);
  }
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("grid-hover");
    });
  });
}
