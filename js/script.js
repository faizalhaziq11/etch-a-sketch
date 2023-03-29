const defaultColor = `#ffffff`;
const defaultSize = `16`;
let currentColor = `#780780`;

var color = document.getElementById("colorpicker");
var showColor = document.getElementById("showcolor");
showColor.innerHTML = `<span>${color.value}</span>`;

color.oninput = function () {
  showColor.innerHTML = `<span>${this.value}</span>`;
};

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = `<span class="">${slider.value} x ${slider.value}</span>`;

slider.oninput = function () {
  output.innerHTML = `<span>${this.value} x ${this.value}</span>`;
  grid.innerHTML = "";
  makeRows(this.value, this.value);
};

function eraser() {
  console.log("delete");
}

function clean() {
  document.getElementById("colorpicker").value = defaultColor;
  document.getElementById("myRange").value = defaultSize;
  grid.innerHTML = "";
  makeRows(+defaultSize, +defaultSize);
  setColor(defaultColor);
  output.innerHTML = `<span>${defaultSize} x ${defaultSize}</span>`;
}

var grid = document.getElementById("grid");

function makeRows(rows, cols) {
  grid.style.setProperty("--grid-rows", rows);
  grid.style.setProperty("--grid-cols", cols);

  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = currentColor;
    });
    grid.appendChild(cell).className = "grid-item";
  }
}
makeRows(+defaultSize, +defaultSize);

let colorPicker = document.getElementById("colorpicker");

colorPicker.addEventListener("input", () => {
  setColor(colorPicker.value);
});

function setColor(color) {
  return (currentColor = color);
}
