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

  const mainContainer = document.querySelector(".container");

  mainContainer.style.width = "600px";
  const boxWidth = mainContainer.offsetWidth / gridSize;

  for (i = 0; i < gridChecked; i++) {
    const outerDiv = document.createElement("div");

    for (j = 0; j < gridChecked; j++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      div.style.width = boxWidth + "px";
      div.style.height = boxWidth + "px";
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

function cleared() {
  let gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.classList.remove("grid-hover");
  });
}
