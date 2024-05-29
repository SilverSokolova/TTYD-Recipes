//sorted by type and strength. for items that restore hp and fp, use the sum of both
const itemData = {
  "": "(No item)",
  "empty": "(No item)",

  //ingredients
    //hp
    "dried_mushroom": "<strong>Dried Mushroom</strong><br>A less-than-tasty dried mushroom.<br>Replenishes 1 HP.",
    "horsetail": "<strong>Horsetail</strong><br>A plant found in Petal Meadows.<br>Replenishes 3 HP.",
    "mushroom": "<strong>Mushroom</strong><br>A feel-good mushroom.<br>Replenishes 5 HP.",
    "super_mushroom": "<strong>Super Mushroom</strong><br>A feel-super mushroom.<br>Replenishes 10 HP.",
    "life_mushroom": "<strong>Life Mushroom</strong><br>Restores 10 HP when Mario or his partner falls.",
    "ultra_mushroom": "<strong>Ultra Mushroom</strong><br>",

    //fp
    "cake_mix": "<strong>Cake Mix</strong><br>An ingredient for making<br>treats. Replenishes 1 FP.",
    "turtley_leaf": "<strong>Turtley Leaf</strong><br>A leaf found in Petalburg.<br>Replenishes 3 FP.",
    "honey_syrup": "<strong>Honey Syrup</strong><br>A sweet snack. Restores 5 FP.",
    "koopa_tea": "<strong>Koopa Tea</strong><br>Tea brewed by Zess T.<br>Replenishes 7 FP.<br><em>Made by steeping a Turtley Leaf.</em>",
    "mousse_cake": "<strong>Mousse Cake</strong><br>A cake made by Zess T.<br>Replenishes 15 FP.<br><em>Made by cooking Cake Mix.</em>",
    "jammin'_jelly": "<strong>Jammin' Jelly</strong><br>A highly nutritious snack.<br>Restores 50 FP.",

    //attacking
    "pow_block": "<strong>POW Block</strong><br>Attacks all enemies and does 2<br>damage, flipping shelled enemies.",
    "fire_flower": "<strong>Fire Flower</strong><br>Attacks all enemies with fireballs that<br>do 3 damage. Does not actually burn enemies.",
    "ice_storm": "<strong>Ice Storm</strong><br>Blows a cold wind at all enemies that<br>does 3 damage and freezes them.",
    "thunder_bolt": "<strong>Thunder Bolt</strong><br>Drops lightning on an enemy and<br>does 5 damage.",
    "shooting_star": "<strong>Shooting Star</strong><br>Drops shooting stars on all enemies<br>and does 6 damage.",

    //buffing
    "volt_mushroom": "<strong>Volt Mushroom</strong><br>Temporarily electrifies a party member<br>so they damage direct-attackers.",
    "tasty_tonic": "<strong>Tasty Tonic</strong><br>A tasty medicine. Cures poison and<br>other ailments.",
    "courage_shell": "<strong>Courage Shell</strong><br>Temporarily gives a party member<br>courage to boost their Defense.",
    "slow_mushroom": "<strong>Slow Mushroom</strong><br>Makes a party member recover HP<br>gradually for a brief period.",
    "gradual_syrup": "<strong>Gradual Syrup</strong><br>Makes a party member recover FP<br>gradually for a brief period.",

    //debuffing
    "sleepy_sheep": "<strong>Sleepy Sheep</strong><br>Temporarily puts all enemies to sleep,<br>immobilizing them.",
    "dizzy_dial": "<strong>Dizzy Dial</strong><br>Temporarily makes all enemies dizzy,<br>decreasing their accuracy.",
    "mr_softener": "<strong>Mr. Softener</strong><br>Temporarily softens up an enemy,<br>decreasing their Defense.",
    "mini_mr._mini": "<strong>Mini Mr. Mini</strong><br>Temporarily makes enemies tiny, dropping their Attack power.",

    //other
    "fright_mask": "<strong>Fright Mask</strong><br>Summons a scary spirit that may<br>chase enemies away.",
    "inn_coupon": "<strong>Inn Coupon</strong><br>A free pass! Lets you stay one free<br>night at an inn.",
    "mystery": "<strong>Mystery</strong><br>Who knows what this does? Take a<br>chance and find out!",
    "gold_bar": "<strong>Gold Bar</strong><br>A gold bar.",
    "mystery_output": "<strong>ALMOST ALWAYS GIVES A MISTAKE. But can rarely give:</strong><br> Honey Mushroom, Life Mushroom",

  //cooked stuff
    //hp

    //fp
    "fresh_juice": "<strong>Fresh Juice</strong><br>A Zess T. juice. Cures conditions like<br>poisoning and replenishes 5 FP.<br><em>Made by steeping Honey Syrup.</em>",

    //hp + fp
    "spicy_soup": "<strong>Spicy Soup</strong><br>Yummy soup made by Zess T.<br>Replenishes 4 HP and 4 FP.<br><em>Made by cooking a Fire Flower.</em>",
    "mushroom_fry": "<strong>Mushroom Fry</strong><br>A tasty dish made by Zess T.<br>Replenishes 6 HP and 2 FP.<br><em>Made by cooking a Mushroom or a<br>Super Mushroom.</em>",
    "honey_mushroom": "<strong>Honey Mushroom</strong><br>A dessert made by Zess T.<br>Replenishes 5 HP and 5 FP.",
    "mushroom_roast": "<strong>Mushroom Roast</strong><br>A tasty dish made by Zess T.<br>Replenishes 15 HP and 5 FP.<br><em>Made by cooking a Life Mushroom or<br>a Slow Mushroom.</em>",
    "mushroom_steak": "<strong>Mushroom Steak</strong><br>A tasty dish made by Zess T.<br>Replenishes 30 HP and 10 FP.<em>Made by cooking an Ultra Mushroom.</em>",

    //attacking
    //buffing
    //debuffing
    //other

    "mistake": "<strong>Mistake</strong><br>Zess T.'s failed attempt.<br>Replenishes 1 HP and 1 FP.<br><em>Made by mixing incompatible<br>ingredients.</em>"
};

/*
I did it this way as to allow translations
So for translations, we'll do like [itemNames("fr", "mushroom")] or something? Does my US copy even allow me to change language?
Use same order as the item database
*/
const options = [
  ["Point Swap", "point_swap"], //Intentionally at the top of the list because it's useful i think

  //ingredients
    //hp
    ["", "empty"],
    ["- HP Restoring -", "empty"],
    ["Dried Mushroom", "dried_mushroom"],
    ["Horsetail", "horsetail"],
    ["Mushroom", "mushroom"],
    ["Super Mushroom", "super_mushroom"],
    ["Life Mushroom", "life_mushroom"],
    ["Ultra Mushroom", "ultra_mushroom"],

    //fp
    ["", "empty"],
    ["- FP Restoring -", "empty"],
    ["Cake Mix", "cake_mix"],
    ["Turtley Leaf", "turtley_leaf"],
    ["Honey Syrup", "honey_syrup"],
    ["Koopa Tea", "koopa_tea"],
    ["Mousse Cake", "mousse_cake"],
    ["Jammin' Jelly", "jammin'_jelly"],

    //attacking
    ["", "empty"],
    ["- Damaging -", "empty"],
    ["POW Block", "pow_block"],
    ["Fire Flower", "fire_flower"],
    ["Ice Storm", "ice_storm"],
    ["Earthquake", "earthquake"],
    ["Thunder Bolt", "thunder_bolt"],
    ["Shooting Star", "shooting_star"],

    //buffing
    ["", "empty"],
    ["- Buffing -", "empty"],
    ["Volt Mushroom", "volt_mushroom"],
    ["Tasty Tonic", "tasty_tonic"],
    ["Boo's Sheet", "boo's_sheet"],
    ["Courage Shell", "courage_shell"],
    ["Slow Mushroom", "slow_mushroom"],
    ["Gradual Syrup", "gradual_syrup"],

    //debuffing
    ["", "empty"],
    ["- Debuffing -", "empty"],
    ["Sleepy Sheep", "sleepy_sheep"],
    ["Dizzy Dial", "dizzy_dial"],
    ["Mini Mr. Mini", "mini_mr._mini"],

    //other
    ["", "empty"],
    ["- Unsorted -", "empty"],

  ["Coconut", "coconut"],
  ["Dried Bouquet", "dried_bouquet"],
  ["Fresh Juice", "fresh_juice"],
  ["Fright Mask", "fright_mask"],
  ["Gold Bar", "gold_bar"],
  ["Honey Mushroom", "honey_mushroom"],
  ["Hotdog", "hotdog"],
  ["Inn Coupon", "inn_coupon"],
  ["Mistake", "mistake"],
  ["Mushroom Fry", "mushroom_fry"],

  ["Mushroom Roast", "mushroom_roast"],
  ["Mushroom Steak", "mushroom_steak"],

  ["Spicy Soup", "spicy_soup"],

  ["Mystery", "mystery"]
];

const recipes = {
  "-volt_mushroom": "mushroom_fry",
  "-mushroom": "mushroom_fry",
  "-super_mushroom": "mushroom_fry",

  "-ultra_mushroom": "mushroom_steak",

  "-honey_syrup": "fresh_juice",
  "-jammin'_jelly": "fresh_juice",
  "-gradual_syrup": "fresh_juice",
  "-turtley_leaf": "koopa_tea",

  "-fire_flower": "spicy_soup",
  "-mystery": "mystery_output",
  "-life_mushroom": "mushroom_roast",
  "-cake_mix": "mousse_cake"
}