//sorted by type and strength. for items that restore hp and fp, use the sum of both
//For the $'s, we can't put anything else in the name because they'll be treated as a recipe input. $ is treated as no character
const itemData = {
  "point_swap": ["Point Swap", "Swaps a partner's HP and FP.<br>(Cannot exceed max.)"],
  "": ["",""],

  //hp
  "$": ["- HP -", ""],
  "dried_mushroom": ["Dried Mushroom", "A less-than-tasty dried mushroom.<br>Replenishes 1 HP."],
  "dried_bouquet": ["Dried Bouquet", "Beautiful flowers made by Bub-ulber.<br>Replenishes 1 HP."],
  "horsetail": ["Horsetail", "A plant found in Petal Meadows.<br>Replenishes 3 HP."],
  "mushroom": ["Mushroom", "A feel-good mushroom.<br>Replenishes 5 HP."],
  "super_mushroom": ["Super Mushroom", "A feel-super mushroom.<br>Replenishes 10 HP."],
  "life_mushroom": ["Life Mushroom", "Restores 10 HP when Mario<br>or his partner falls."],
  "ultra_mushroom": ["Ultra Mushroom", "A feel-great mushroom.<br>Replenishes 50 HP."],

  //fp
  "$$": ["", ""],
  "$$$": ["- FP -", ""],
  "cake_mix": ["Cake Mix", "An ingredient for making<br>treats. Replenishes 1 FP."],
  "turtley_leaf": ["Turtley Leaf", "A leaf found in Petalburg.<br>Replenishes 3 FP."],
  "honey_syrup": ["Honey Syrup", "A sweet snack. Restores 5 FP."],
  "fresh_juice": ["Fresh Juice", "A Zess T. juice. Cures conditions like<br>poisoning and replenishes 5 FP.<br><em>Made by steeping Honey Syrup.</em>"],
  "koopa_tea": ["Koopa Tea", "Tea brewed by Zess T.<br>Replenishes 7 FP.<br><em>Made by steeping a Turtley Leaf.</em>"],
  "maple_syrup": ["Maple Syrup", "A deliciously sweet syrup.<br>Replenishes 10 FP."],
  "mousse_cake": ["Mousse Cake", "A cake made by Zess T.<br>Replenishes 15 FP.<br><em>Made by cooking Cake Mix.</em>"],
  "jammin'_jelly": ["Jammin' Jelly", "A highly nutritious snack.<br>Restores 50 FP."],

  //hfp
  "$$$$": ["", ""],
  "$$$$$": ["- HP & FP -", ""],
  "mistake": ["Mistake", "Zess T.'s failed attempt.<br>Replenishes 1 HP and 1 FP.<br><em>Made by mixing incompatible<br>ingredients.</em>"],
  "spicy_soup": ["Spicy Soup", "Yummy soup made by Zess T.<br>Replenishes 4 HP and 4 FP.<br><em>Made by cooking a Fire Flower.</em>"],
  "mushroom_fry": ["Mushroom Fry", "A tasty dish made by Zess T.<br>Replenishes 6 HP and 2 FP.<br><em>Made by cooking a Mushroom or a<br>Super Mushroom.</em>"],
  "hot_dog": ["Hot Dog", "Mr. Hoggle's meaty work of art.<br>Refills 5 HP and 5 FP."],
  "honey_mushroom": ["Honey Mushroom", "A dessert made by Zess T.<br>Replenishes 5 HP and 5 FP."],
  "mushroom_roast": ["Mushroom Roast", "A tasty dish made by Zess T.<br>Replenishes 15 HP and 5 FP.<br><em>Made by cooking a Life Mushroom or<br>a Slow Mushroom.</em>"],
  "mushroom_steak": ["Mushroom Steak", "A tasty dish made by Zess T.<br>Replenishes 30 HP and 10 FP.<br><em>Made by cooking an Ultra Mushroom.</em>"],

  //attacking
  "$$$$$$": ["", ""],
  "$$$$$$$": ["- Attacking -", ""],
  "pow_block": ["POW Block", "Attacks all enemies and does 2<br>damage, flipping shelled enemies."],
  "fire_flower": ["Fire Flower", "Attacks all enemies with fireballs that<br>do 3 damage. Does not actually burn enemies."],
  "ice_storm": ["Ice Storm", "Blows a cold wind at all enemies that<br>does 3 damage and freezes them."],
  "earth_quake": ["Earth Quake", "Attacks all enemies on the ground or<br>ceiling and does 5 damage."],
  "hp_drain": ["HP Drain", "Does 5 damage to a foe while<br>replenishing your own HP by 5."],
  "thunder_bolt": ["Thunder Bolt", "Drops lightning on an enemy and<br>does 5 damage."],
  "thunder_rage": ["Thunder Rage", "Drops lightning on all enemies<br>and does 5 damage."],
  "shooting_star": ["Shooting Star", "Drops shooting stars on all enemies<br>and does 6 damage."],

  //buffing
  "$$$$$$$$": ["", ""],
  "$$$$$$$$$": ["- Buffing -", ""],
  "volt_mushroom": ["Volt Mushroom", "Temporarily electrifies a party member<br>so they damage direct-attackers."],
  "tasty_tonic": ["Tasty Tonic", "A tasty medicine. Cures poison and<br>other ailments."],
  "power_punch": ["Power Punch", "Temporarily boosts a party member's<br>Attack power by adding hugeness."],
  "courage_shell": ["Courage Shell", "Temporarily gives a party member<br>courage to boost their Defense."],
  "slow_mushroom": ["Slow Mushroom", "Makes a party member recover HP<br>gradually for a brief period."],
  "gradual_syrup": ["Gradual Syrup", "Makes a party member recover FP<br>gradually for a brief period."],
  "boo's_sheet": ["Boo's Sheet", "Temporarily makes a party member<br>invisible, warding against attacks."],
  "repel_cape": ["Repel Cape", "Temporarily makes a party member<br>dodgy so they are harder to hit."],

  //debuffing
  "$$$$$$$$$$": ["", ""],
  "$$$$$$$$$$$": ["- Debuffing -", ""],
  "sleepy_sheep": ["Sleepy Sheep", "Temporarily puts all enemies to sleep,<br>immobilizing them."],
  "dizzy_dial": ["Dizzy Dial", "Temporarily makes all enemies dizzy,<br>decreasing their accuracy."],
  "mr_softener": ["Mr. Softener", "Temporarily softens up an enemy,<br>decreasing their Defense."],
  "mini_mr._mini": ["Mini Mr. Mini", "Temporarily makes enemies tiny,<br>dropping their Attack power."],
  "stopwatch": ["Stopwatch", "Temporarily immobilizes all enemies."],

  //other
  "$$$$$$$$$$$$": ["", ""],
  "$$$$$$$$$$$$$": ["- Other -", ""],
  "fright_mask": ["Fright Mask", "Summons a scary spirit that may<br>chase enemies away."],
  "inn_coupon": ["Inn Coupon", "A free pass! Lets you stay one free<br>night at an inn."],
  "mystery": ["Mystery", "Who knows what this does? Take a<br>chance and find out!"],
  "gold_bar": ["Gold Bar", "A gold bar."],
  "ruin_powder": ["Ruin Powder"],
  "hottest_dog": ["New Switch Recipe", "<strong>Hottest Dog</strong><br>no desc"],
  "mystery_output": ["Random Item", "<strong>The result of cooking a mystery.</strong><br><u>Mistake</u> (very common)<br>Honey Mushroom<br>Life Mushroom"]
};

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