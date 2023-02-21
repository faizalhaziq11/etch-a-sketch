// console.log('hello world')

const defaultColor = `#ffffff`;
const defaultSize = `53`

function eraser() {
  console.log('delete')
}

function clean() {
  // output.innerHTML = `<span>${defaultSize} x ${defaultSize}</span>`
  // showColor.innerHTML = `<span>${defaultColor}</span>`;
  document.getElementById("colorpicker").value = defaultColor
  document.getElementById("myRange").value = defaultSize

}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = `<span class="">${slider.value} x ${slider.value}</span>`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = `<span>${this.value} x ${this.value}</span>`
}

var color = document.getElementById("colorpicker");
var showColor = document.getElementById("showcolor");
showColor.innerHTML = `<span>${color.value}</span>`; // Display the default color value

// Update the current color value (each time you pick a new color)
color.oninput = function () {
  showColor.innerHTML = `<span>${this.value}</span>`;

}
