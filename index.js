const itemData = {
  "": "(No item)",
  "dried_mushroom": "<strong>Dried Mushroom</strong><br>A less-than-tasty dried mushroom.<br>Replenishes 1 HP.",
  "mushroom": "<strong>Mushroom</strong><br>A feel-good mushroom.<br>Replenishes 5 HP.",
  "super_mushroom": "<strong>Super Mushroom</strong><br>A feel-super mushroom.<br>Replenishes 10 HP.",
  "life_mushroom": "<strong>Life Mushroom</strong><br>Restores 10 HP when Mario or his partner falls.",
  "honey_syrup": "<strong>Honey Syrup</strong><br>A sweet snack. Restores 5 FP.",
  "tasty_tonic": "<strong>Tasty Tonic</strong><br>A tasty medicine. Cures poison and<br>other ailments.",
  "fire_flower": "<strong>Fire Flower</strong><br>Attacks all enemies with fireballs that<br>do 3 damage. Does not actually burn enemies.",
  "ice_storm": "<strong>Ice Storm</strong><br>Blows a cold wind at all enemies that<br>does 3 damage and freezes them.",
  "sleepy_sheep": "<strong>Sleepy Sheep</strong><br>Temporarily puts all enemies to sleep,<br>immobilizing them.",
  "fright_mask": "<strong>Fright Mask</strong><br>Summons a scary spirit that may<br>chase enemies away.",
  "horsetail": "<strong>Horsetail</strong><br>A plant found in Petal Meadows.<br>Replenishes 3 HP.",
  "courage_shell": "<strong>Courage Shell</strong><br>Temporarily gives a party member<br>courage to boost their Defense.",
  "thunder_bolt": "<strong>Thunder Bolt</strong><br>Drops lightning on an enemy and<br>does 5 damage.",
  "inn_coupon": "<strong>Inn Coupon</strong><br>A free pass! Lets you stay one free<br>night at an inn.",
  "dizzy_dial": "<strong>Dizzy Dial</strong><br>Temporarily makes all enemies dizzy,<br>decreasing their accuracy.",

  "mushroom_fry": "<strong>Mushroom Fry</strong><br>A tasty dish made by Zess T.<br>Replenishes 6 HP and 2 FP.<br><em>Made by cooking a Mushroom or a<br>Super Mushroom.</em>",
  "mushroom_roast": "<strong>Mushroom Roast</strong><br>A tasty dish made by Zess T.<br>Replenishes 15 HP and 5 FP.",
  "mushroom_steak": "<strong>Mushroom Steak</strong><br>A tasty dish made by Zess T.<br>Replenishes 30 HP and 10 FP.",
  "fresh_juice": "<strong>Fresh Juice</strong><br>A Zess T. juice. Cures conditions like<br>poisoning and replenishes 5 FP.<br><em>Made by steeping Honey Syrup.</em>",
  "spicy_soup": "<strong>Spicy Soup</strong><br>Yummy soup made by Zess T.<br>Replenishes 4 HP and 4 FP.<br><em>Made by cooking a Fire Flower.</em>",

  "honey_mushroom": "<strong>Honey Mushroom</strong><br>A dessert made by Zess T.<br>Replenishes 5 HP and 5 FP.",

  "mystery_output": "<strong>ALMOST ALWAYS GIVES A MISTAKE. But can rarely give:</strong><br> Honey Mushroom, Life Mushroom",
  "mystery": "<strong>Mystery</strong><br>Who knows what this does? Take a<br>chance and find out!",
  "mistake": "<strong>Mistake</strong><br>Zess T.'s failed attempt.<br>Replenishes 1 HP and 1 FP.<br><em>Made by mixing incompatible<br>ingredients.</em>"
};

/*
So for translations, we'll do like [itemNames("fr", "mushroom")] or something? Does my US copy even allow me to change language?
*/
const options = [
  ["Dried Mushroom", "dried_mushroom"],
  ["Mushroom", "mushroom"],
  ["Super Mushroom", "super_mushroom"],
  ["Life Mushroom", "life_mushroom"],
  ["Honey Syrup", "honey_syrup"],
  ["Tasty Tonic", "tasty_tonic"],
  ["Fire Flower", "fire_flower"],
  ["Ice Storm", "ice_storm"],
  ["Sleepy Sheep", "sleepy_sheep"],
  ["Fright Mask", "fright_mask"],
  ["Horsetail", "horsetail"],
  ["Courage Shell", "courage_shell"],
  ["Thunder Bolt", "thunder_bolt"],
  ["Inn Coupon", "inn_coupon"],

  ["Mushroom Fry", "mushroom_fry"],
  ["Mushroom Roast", "mushroom_roast"],
  ["Mushroom Steak", "mushroom_steak"],

  ["Fresh Juice", "fresh_juice"],
  ["Spicy Soup", "spicy_soup"],

  ["Honey Mushroom", "honey_mushroom"],
  ["Mystery", "mystery"],
  ["Mistake", "mistake"]
];

const recipes = {
  "-mushroom": "mushroom_fry",
  "-super_mushroom": "mushroom_fry",
  "-ultra_mushroom": "mushroom_steak",
  "-honey_syrup": "fresh_juice",
  "-fire_flower": "spicy_soup",
  "-mystery": "mystery_output",
  "-life_mushroom": "mushroom_roast",
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