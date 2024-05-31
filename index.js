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
  "img/bg.png",
  "img/bg_mario.png"
];

const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
document.body.style.backgroundImage = `url(${randomBackground})`;

function cook(a) {
  var e = document.getElementById("dropdown" + a);
  var value = doString(e.value);
  var text = e.options[e.selectedIndex].text;
  console.log("Input " + a + ": " + value);

  const itemName = doString(itemData[value][0]);
  const itemDesc = doString(itemData[value][1]);
  document["item" + a].src = (value != "" && "img/items/" + value + ".png" || "");

  let desc = document.getElementById("desc" + a);
  desc.innerHTML = "<strong>" + itemName + "</strong><br>" + itemDesc;
  inputs[a-1] = value

  output = (inputs[0] < inputs[1]) && (inputs[0] + "-" + inputs[1]) || (inputs[1] + "-" + inputs[0]);
  console.log("Recipe: " + output);

  desc = document.getElementById("desc3");
  let outputItem = doString(failedRecipes[output] && "mistake_verified" || recipes[output] || "mistake");
  let outputName = doString(itemData[outputItem][0]);
  let outputDesc = doString(itemData[outputItem][1]);
  document["item3"].src = "img/items/" + (outputItem || "mistake") + ".png";
  desc.innerHTML = "<strong>" + outputName + "</strong><br>" + outputDesc;
};

function doString(str) {
  str = str || "";
  return str.replace(/\$/g, "");
};

// Function to create options
function createOptions(selectElement) {
  Object.entries(itemData).forEach(([key, value]) => {
    const optionElement = document.createElement("option");
    optionElement.value = key;
    optionElement.textContent = doString(value[0]);
    selectElement.appendChild(optionElement);
  })
}

itemData["mistake_verified"] = [...itemData["mistake"]];

// Get references to the select elements
const dropdown1 = document.getElementById("dropdown1");
const dropdown2 = document.getElementById("dropdown2");

// Populate dropdowns with options
const inputs = ["", ""];
let output;
createOptions(dropdown1);
createOptions(dropdown2);

// Do this after we add it to the list
itemData["mistake"][1] = "<strong>(Unconfirmed)</strong><br>" + itemData["mistake"][1];
itemData["mistake_verified"][1] = "<strong>(Confirmed)</strong><br>" + itemData["mistake_verified"][1];