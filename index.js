const divMaker = document.querySelector(".container");

function clearContainer() {
  while (divMaker.firstChild) {
    divMaker.removeChild(divMaker.firstChild);
  }
}

function setStage(event) {
  event.preventDefault();
  clearContainer();

  let gridSizeInput = document.getElementById("gridSize");
  let gridSize = parseInt(gridSizeInput.value);
  let gridRanged = Math.min(gridSize, 100);

  const container = document.querySelector(".container");
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  const boxWidth = container.offsetWidth / gridRanged;

  for (i = 0; i < gridRanged; i++) {
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("grid-row");

    for (j = 0; j < gridRanged; j++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      div.style.width = boxWidth + "px";
      div.style.height = boxWidth + "px";
      outerDiv.appendChild(div);
    }

    divMaker.appendChild(outerDiv);
  }
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      item.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
  });
}

function cleared() {
  let gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.style.backgroundColor = `rgb(255,255,255)`;
  });
}
