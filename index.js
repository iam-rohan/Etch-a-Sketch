const divMaker = document.querySelector(".container");

const gridSize = 16;

for (i = 0; i < gridSize; i++) {
  for (j = 0; j < gridSize; j++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    divMaker.appendChild(div);
  }
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("grid-hover");
  });
});
