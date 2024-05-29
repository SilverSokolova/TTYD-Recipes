//credits. blatantly copied from my mods page
var modImageHoverText = "Click to view!";
var modImages = document.getElementsByClassName("mod-image");
for (var i = 0; i < modImages.length; i++) {
  modImages[i].title = modImageHoverText;
}

var modEntries = document.querySelectorAll(".mod-align");
var i = 0;
while (modEntries.length > 0) {
  modEntries[0].className += "-" + (i % 2 === 0 ? "left" : "right");
  modEntries = Array.prototype.slice.call(modEntries, 1);
  i++;
}

//backgrounds
const backgrounds = [
  '/img/bg.png',
  '/img/bg_mario.png'
];

const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
document.body.style.backgroundImage = `url(${randomBackground})`;

function cook(a) {
  var e = document.getElementById("dropdown" + a);
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  console.log(value + a);
  document["item" + a].src = (value != "" && "/img/items/" + value + ".png" || "");

  let desc = document.getElementById('desc' + a);
  desc.innerHTML = itemData[value];
  inputs[a-1] = value

  if (inputs[0] < inputs[1]) {
    output = inputs[0] + "-" + inputs[1];
  } else {
    output = inputs[1] + "-" + inputs[0];
  }
  console.log(output);

  document["item3"].src = "/img/items/" + (recipes[output] || "mistake") + ".png";
  desc = document.getElementById('desc3');
  desc.innerHTML = itemData[recipes[output] || "mistake"];

}


// Function to create options
function createOptions(selectElement, optionsArray) {
  optionsArray.forEach(option => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option[0];
    optionElement.value = option[1];
    selectElement.appendChild(optionElement);
  });
}

// Get references to the select elements
const dropdown1 = document.getElementById("dropdown1");
const dropdown2 = document.getElementById("dropdown2");

// Populate dropdowns with options
const inputs = ["", ""];
let output;
createOptions(dropdown1, options);
createOptions(dropdown2, options);