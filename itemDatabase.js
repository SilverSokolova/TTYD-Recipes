//sorted by type and strength. for items that restore hp and fp, use the sum of both
const itemData = {
  "": "",

  //ingredients
    //hp
    "dried_mushroom": "<strong>Dried Mushroom</strong><br>A less-than-tasty dried mushroom.<br>Replenishes 1 HP.",
    "dried_bouquet": "<strong>Dried Bouquet</strong><br>Beautiful flowers made by Bub-ulber.<br>Replenishes 1 HP.",
    "horsetail": "<strong>Horsetail</strong><br>A plant found in Petal Meadows.<br>Replenishes 3 HP.",
    "mushroom": "<strong>Mushroom</strong><br>A feel-good mushroom.<br>Replenishes 5 HP.",
    "super_mushroom": "<strong>Super Mushroom</strong><br>A feel-super mushroom.<br>Replenishes 10 HP.",
    "life_mushroom": "<strong>Life Mushroom</strong><br>Restores 10 HP when Mario<br>or his partner falls.",
    "ultra_mushroom": "<strong>Ultra Mushroom</strong><br>A feel-great mushroom.<br>Replenishes 50 HP.",

    //fp
    "cake_mix": "<strong>Cake Mix</strong><br>An ingredient for making<br>treats. Replenishes 1 FP.",
    "turtley_leaf": "<strong>Turtley Leaf</strong><br>A leaf found in Petalburg.<br>Replenishes 3 FP.",
    "honey_syrup": "<strong>Honey Syrup</strong><br>A sweet snack. Restores 5 FP.",
    "koopa_tea": "<strong>Koopa Tea</strong><br>Tea brewed by Zess T.<br>Replenishes 7 FP.<br><em>Made by steeping a Turtley Leaf.</em>",
    "maple_syrup": "<strong>Maple Syrup</strong><br>A deliciously sweet syrup.<br>Replenishes 10 FP.",
    "mousse_cake": "<strong>Mousse Cake</strong><br>A cake made by Zess T.<br>Replenishes 15 FP.<br><em>Made by cooking Cake Mix.</em>",
    "jammin'_jelly": "<strong>Jammin' Jelly</strong><br>A highly nutritious snack.<br>Restores 50 FP.",

    //hfp
    "hot_dog": "<strong>Hot Dog</strong><br>Mr. Hoggle's meaty work of art.<br>Refills 5 HP and 5 FP.",

    //attacking
    "pow_block": "<strong>POW Block</strong><br>Attacks all enemies and does 2<br>damage, flipping shelled enemies.",
    "fire_flower": "<strong>Fire Flower</strong><br>Attacks all enemies with fireballs that<br>do 3 damage. Does not actually burn enemies.",
    "ice_storm": "<strong>Ice Storm</strong><br>Blows a cold wind at all enemies that<br>does 3 damage and freezes them.",
    "earth_quake": "<strong>Earth Quake</strong><br>Attacks all enemies on the ground or<br>ceiling and does 5 damage.",
    "hp_drain": "<strong>HP Drain</strong><br>Does 5 damage to a foe while<br>replenishing your own HP by 5.",
    "thunder_bolt": "<strong>Thunder Bolt</strong><br>Drops lightning on an enemy and<br>does 5 damage.",
    "thunder_rage": "<strong>Thunder Rage</strong><br>Drops lightning on all enemies<br>and does 5 damage.",
    "shooting_star": "<strong>Shooting Star</strong><br>Drops shooting stars on all enemies<br>and does 6 damage.",

    //buffing
    "volt_mushroom": "<strong>Volt Mushroom</strong><br>Temporarily electrifies a party member<br>so they damage direct-attackers.",
    "tasty_tonic": "<strong>Tasty Tonic</strong><br>A tasty medicine. Cures poison and<br>other ailments.",
    "power_punch": "<strong>Power Punch</strong><br>Temporarily boosts a party member's<br>Attack power by adding hugeness.",
    "courage_shell": "<strong>Courage Shell</strong><br>Temporarily gives a party member<br>courage to boost their Defense.",
    "slow_mushroom": "<strong>Slow Mushroom</strong><br>Makes a party member recover HP<br>gradually for a brief period.",
    "gradual_syrup": "<strong>Gradual Syrup</strong><br>Makes a party member recover FP<br>gradually for a brief period.",
    "boo's_sheet": "<strong>Boo's Sheet</strong><br>Temporarily makes a party member<br>invisible, warding against attacks.",
    "repel_cape": "<strong>Repel Cape</strong><br>Temporarily makes a party member<br>dodgy so they are harder to hit.",

    //debuffing
    "sleepy_sheep": "<strong>Sleepy Sheep</strong><br>Temporarily puts all enemies to sleep,<br>immobilizing them.",
    "dizzy_dial": "<strong>Dizzy Dial</strong><br>Temporarily makes all enemies dizzy,<br>decreasing their accuracy.",
    "mr_softener": "<strong>Mr. Softener</strong><br>Temporarily softens up an enemy,<br>decreasing their Defense.",
    "mini_mr._mini": "<strong>Mini Mr. Mini</strong><br>Temporarily makes enemies tiny,<br>dropping their Attack power.",
    "stopwatch": "<strong>Stopwatch</strong><br>Temporarily immobilizes all enemies.",

    //other
    "fright_mask": "<strong>Fright Mask</strong><br>Summons a scary spirit that may<br>chase enemies away.",
    "inn_coupon": "<strong>Inn Coupon</strong><br>A free pass! Lets you stay one free<br>night at an inn.",
    "mystery": "<strong>Mystery</strong><br>Who knows what this does? Take a<br>chance and find out!",
    "gold_bar": "<strong>Gold Bar</strong><br>A gold bar.",
    "point_swap": "<strong>Point Swap</strong><br>Swaps a partner's HP and FP.<br>(Cannot exceed max.)",
    "mystery_output": "<strong>Random Item:</strong><br> <u>Mistake</u> (very common)<br>Honey Mushroom<br>Life Mushroom",
    "ruin_powder": "<strong>Ruin Powder</strong>",

  //cooked stuff
    //hp

    //fp
    "fresh_juice": "<strong>Fresh Juice</strong><br>A Zess T. juice. Cures conditions like<br>poisoning and replenishes 5 FP.<br><em>Made by steeping Honey Syrup.</em>",

    //hp + fp
    "mistake": "<strong>Mistake</strong><br>Zess T.'s failed attempt.<br>Replenishes 1 HP and 1 FP.<br><em>Made by mixing incompatible<br>ingredients.</em>",
    "spicy_soup": "<strong>Spicy Soup</strong><br>Yummy soup made by Zess T.<br>Replenishes 4 HP and 4 FP.<br><em>Made by cooking a Fire Flower.</em>",
    "mushroom_fry": "<strong>Mushroom Fry</strong><br>A tasty dish made by Zess T.<br>Replenishes 6 HP and 2 FP.<br><em>Made by cooking a Mushroom or a<br>Super Mushroom.</em>",
    "honey_mushroom": "<strong>Honey Mushroom</strong><br>A dessert made by Zess T.<br>Replenishes 5 HP and 5 FP.",
    "mushroom_roast": "<strong>Mushroom Roast</strong><br>A tasty dish made by Zess T.<br>Replenishes 15 HP and 5 FP.<br><em>Made by cooking a Life Mushroom or<br>a Slow Mushroom.</em>",
    "mushroom_steak": "<strong>Mushroom Steak</strong><br>A tasty dish made by Zess T.<br>Replenishes 30 HP and 10 FP.<br><em>Made by cooking an Ultra Mushroom.</em>"

    //attacking
    //buffing
    //debuffing
    //other

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
    ["", ""],
    ["- HP Restoring -", ""],
    ["Dried Mushroom", "dried_mushroom"],
    ["Dried Bouquet", "dried_bouquet"],
    ["Horsetail", "horsetail"],
    ["Mushroom", "mushroom"],
    ["Super Mushroom", "super_mushroom"],
    ["Life Mushroom", "life_mushroom"],
    ["Ultra Mushroom", "ultra_mushroom"],

    //fp
    ["", ""],
    ["- FP Restoring -", ""],
    ["Cake Mix", "cake_mix"],
    ["Turtley Leaf", "turtley_leaf"],
    ["Honey Syrup", "honey_syrup"],
    ["Fresh Juice", "fresh_juice"],
    ["Koopa Tea", "koopa_tea"],
    ["Maple Syrup", "maple_syrup"],
    ["Mousse Cake", "mousse_cake"],
    ["Jammin' Jelly", "jammin'_jelly"],

    //hfp
    ["", ""],
    ["- HP + FP Restoring -", ""],
    ["Mistake", "mistake"],
    ["Spicy Soup", "spicy_soup"],
    ["Hot Dog", "hot_dog"],

    //attacking
    ["", ""],
    ["- Damaging -", ""],
    ["POW Block", "pow_block"],
    ["Fire Flower", "fire_flower"],
    ["Ice Storm", "ice_storm"],
    ["Earth Quake", "earth_quake"],
    ["HP Drain", "hp_drain"],
    ["Thunder Bolt", "thunder_bolt"],
    ["Thunder Rage", "thunder_rage"],
    ["Shooting Star", "shooting_star"],

    //buffing
    ["", ""],
    ["- Buffing -", ""],
    ["Volt Mushroom", "volt_mushroom"],
    ["Tasty Tonic", "tasty_tonic"],
    ["Boo's Sheet", "boo's_sheet"],
    ["Power Punch", "power_punch"],
    ["Courage Shell", "courage_shell"],
    ["Slow Mushroom", "slow_mushroom"],
    ["Gradual Syrup", "gradual_syrup"],
    ["Boo's Sheet", "boo's_sheet"],
    ["Repel Cape", "repel_cape"],

    //debuffing
    ["", ""],
    ["- Debuffing -", ""],
    ["Sleepy Sheep", "sleepy_sheep"],
    ["Dizzy Dial", "dizzy_dial"],
    ["Mini Mr. Mini", "mini_mr._mini"],
    ["Stopwatch", "stopwatch"],

    //other
    ["", ""],
    ["- Unsorted -", ""],

  ["Coconut", "coconut"],
  ["Fright Mask", "fright_mask"],
  ["Gold Bar", "gold_bar"],
  ["Honey Mushroom", "honey_mushroom"],
  ["Inn Coupon", "inn_coupon"],
  ["Mushroom Fry", "mushroom_fry"],

  ["Mushroom Roast", "mushroom_roast"],
  ["Mushroom Steak", "mushroom_steak"],
  ["Ruin Powder", "ruin_powder"],

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
  "-cake_mix": "mousse_cake",


  "cake_mix-ruin_powder": "heartful_cake"
}