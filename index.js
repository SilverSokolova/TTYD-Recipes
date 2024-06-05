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


//Cooking
const emptyOption = document.createElement("option");
emptyOption.value = "";
emptyOption.textContent = "No Item";

function cook(a) {
  var e = document.getElementById("dropdown" + a);
  var inputValue = doString(e.value);
  var text = e.options[e.selectedIndex].text;
  console.log("Input " + a + ": " + inputValue);
/*
  let isEmpty = value == "";
  let target = document.getElementById("dropdown2");
  target.disabled = isEmpty;
  if (isEmpty) {
    target.value = "";
    let desc = document.getElementById("desc2");
    if (a == "1") {
      cook("2"); //Clear second item
    };
  };*/
  //If we're coming from the first dropdown, decide whether to enable the second
  if (a == "1") {
    let isEmpty = inputValue == "";
    let target = document.getElementById("dropdown2");
    target.disabled = isEmpty;
    target.value = "";
    cook("2"); //Clear second item
    if (!isEmpty) {
      //Clear dropdown2 and populate it with any item that is part of a valid recipe involving the first input
      dropdown2.innerHTML = "";
      dropdown2.appendChild(emptyOption);
      Object.entries(recipes).forEach(([key, value]) => {
        let splitAt = key.indexOf("-");
        let first = key.substring(0, splitAt);
        let second = key.substring(splitAt+1, key.length);
        //TODO: loop??
        if ((first == inputValue) && (second != "")) {
        //console.log("F: " +first+" S: "+second);
          const test = document.createElement("option");
          test.value = second;
          test.textContent = doString(itemData[second] && itemData[second][0] || "?");
          dropdown2.appendChild(test);
        };
        if ((second == inputValue) && (first != "")) {
          const test = document.createElement("option");
          test.value = first;
          test.textContent = doString(itemData[first] && itemData[first][0] || "?");
          dropdown2.appendChild(test);
        };
      })
    };
  };

  //Load selected option, set image
  const itemName = doString(itemData[inputValue][0]);
  const itemDesc = doString(itemData[inputValue][1]);
  document["item" + a].src = (inputValue != "" && "img/items/" + spritePath + inputValue + ".png" || "");

  //Set desc
  let desc = document.getElementById("desc" + a);
  desc.innerHTML = "<strong>" + itemName + "</strong><br>" + itemDesc;
  inputs[a-1] = inputValue;

  //Calculate recipe
  output = (inputs[0] < inputs[1]) && (inputs[0] + "-" + inputs[1]) || (inputs[1] + "-" + inputs[0]);
  console.log("Recipe: " + output);

  //Find and display recipe output
  desc = document.getElementById("desc3");
  let outputItem = doString(failedRecipes[output] && "mistake_verified" || recipes[output] || "mistake");
  let outputName = doString(itemData[outputItem][0]);
  let outputDesc = doString(itemData[outputItem][1]);
  document["item3"].src = "img/items/" + spritePath + (outputItem || "mistake") + ".png";
  desc.innerHTML = "<strong>" + outputName + "</strong><br>" + outputDesc;
};

function doString(str) {
  str = str || "";
  return str.replace(/\$/g, "");
};

// Function to create options
function createOptions(selectElement, optionsToSet) {
  Object.entries(optionsToSet).forEach(([key, value]) => {
    //2nd check is to allow non-items, such as "- HP -"
    if (isUsedInRecipe(key) || value[1] == "") {
      const optionElement = document.createElement("option");
      optionElement.value = key;
      optionElement.textContent = doString(value[0]);
      selectElement.appendChild(optionElement);
    }
  })
}

function isUsedInRecipe(itemName) {
  let valid = false;
  Object.entries(recipes).forEach(([key, value]) => {
    let splitAt = key.indexOf("-");
    let first = key.substring(0, splitAt);
    let second = key.substring(splitAt+1, key.length);
    if ((first == itemName) || (second == itemName)) {
      valid = true;
    };
  })
  return valid;
}

itemData["mistake_verified"] = [...itemData["mistake"]];

// Get references to the select elements
const dropdown1 = document.getElementById("dropdown1");
const dropdown2 = document.getElementById("dropdown2");

// Populate dropdowns with options
const inputs = ["", ""];
let output;
createOptions(dropdown1, itemData);
createOptions(dropdown2, itemData);

// Do this after we add it to the list
itemData["mistake"][1] = "<strong>(Unconfirmed)</strong><br>" + itemData["mistake"][1];
itemData["mistake_verified"][1] = "<strong>(Confirmed)</strong><br>" + itemData["mistake_verified"][1];

//Sprite-changing stuff
var spritePath = "";

function swapSprites() {
  spritePath = spritePath === "" && "gcn/" || "";
  for (let i = 1; i <= 3; i++) {
    document["item" + i].src = updateImage(document["item" + i].src);
  }
}

function updateImage(img) {
  return spritePath === "" && img.replace("gcn/", "") || img.replace("items/", "items/gcn/");
}