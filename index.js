const itemData = {
  "": "",
  "dried_mushroom": "A less-than-tasty dried mushroom.<br>Replenishes 1 HP.",
  "mushroom": "A feel-good mushroom.<br>Replenishes 5 HP.",
  "honey_syrup": "A sweet snack. Restores 5 FP.",
  "tasty_tonic": "A tasty medicine. Cures poison and<br>other ailments.",
  "fire_flower": "Attacks all enemies with fireballs that<br>do 3 damage.",
  "sleepy_sheep": "Temporarily puts all enemies to sleep,<br>immobilizing them.",
  "fright_mask": "Summons a scary spirit that may<br>chase enemies away.",
  "horsetail": "A plant found in Petal Meadows.<br>Replenishes 3 HP.",

  "mushroom_fry": "A tasty dish made by Zess T.<br>Replenishes 6 HP and 2 FP.",
  "mushroom_steak": "A tasty dish made by Zess T.<br>Replenishes 30 HP and 10 FP.",
  "fresh_juice": "A Zess T. juice. Cures conditions like<br>poisoning and replenishes 5 FP.",
  "mistake": "Zess T.'s failed attempt.<br>Replenishes 1 HP and 1 FP."
};

/*
So for translations, we'll do like [itemNames("fr", "mushroom")] or something? Does my US copy even allow me to change language?
*/
const options = [
  ["Mushroom", "mushroom"],
  ["Honey Syrup", "honey_syrup"],
  ["Tasty Tonic", "tasty_tonic"],
  ["Fire Flower", "fire_flower"],
  ["Sleepy Sheep", "sleepy_sheep"],
  ["Fright Mask", "fright_mask"],
  ["Horsetail", "horsetail"],

  ["Mushroom Fry", "mushroom_fry"],
  ["Mushroom Steak", "mushroom_steak"],
  ["Mistake", "mistake"]
];

const recipes = {
  "-mushroom": "mushroom_fry",
  "-super_mushroom": "mushroom_fry",
  "-ultra_mushroom": "mushroom_steak",
  "-honey_syrup": "fresh_juice",
  "-mushroom": "mushroom_fry",
  "-mushroom": "mushroom_fry",
  "-mushroom": "mushroom_fry",
  "-mushroom": "mushroom_fry",
}

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
createOptions(dropdown1, options);
createOptions(dropdown2, options);
const inputs = ["", ""];
let output;