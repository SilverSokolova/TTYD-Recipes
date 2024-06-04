//TODO: make selecting the second item impossible unless there's a first
//TODO: make selecting the first item reset the second THEN limit its options to compatible ingredients

//sorted by type and strength. for items that restore hp and fp, use the sum of both
//For the $'s, we can't put anything else in the name because they'll be treated as a recipe input. $ is treated as no character


/*
  const itemData = {
    "mushroom": {
      "strings": {
        "name": "Mushroom",
        "description": "A feel-good mushroom.<br>Replenishes 5 HP."
      },
      "makesSpaceFood": true
    }
  }
*/
const itemData = {
  "point_swap": ["Point Swap", "Swaps a partner's HP and FP.<br>(Cannot exceed max.)"],
  "": ["",""],

  //hp
  "$": ["- HP -", ""],
  "dried_mushroom": ["Dried Mushroom", "A less-than-tasty dried mushroom.<br>Replenishes 1 HP."],
  "dried_bouquet": ["Dried Bouquet", "Beautiful flowers made by Bub-ulber.<br>Replenishes 1 HP."],
  "horsetail": ["Horsetail", "A plant found in Petal Meadows.<br>Replenishes 3 HP."],
  "mushroom": ["Mushroom", "A feel-good mushroom.<br>Replenishes 5 HP."],
  "coconut": ["Coconut", "Fruit from a tropical island. To be<br>honest, it ain't tasty.<br>Replenishes 5 HP."],
  "keel_mango": ["Keel Mango", "Fruit found on Keelhaul Key.<br>Replenishes 5 HP."],
  "meteor_meal": ["Meteor Meal", "Food that refills 7 HP and gradually<br>recovers even more.<br><em>Made by mixing a Shooting Star with<br>a Mushroom Fry."],
  "super_mushroom": ["Super Mushroom", "A feel-super mushroom.<br>Replenishes 10 HP."],
  "slow_mushroom": ["Slow Mushroom", "Makes a party member recover HP<br>gradually for a brief period.<br><em>Replenishes 20 HP over 10 turns.</em>"],
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
  "golden_leaf": ["Golden Leaf", "A weird leaf found in Creepy Steeple.<br>Replenishes 10 FP."],
  "mousse_cake": ["Mousse Cake", "A cake made by Zess T.<br>Replenishes 15 FP.<br><em>Made by cooking Cake Mix.</em>"],
  "healthy_salad": ["Healthy Salad", "A Zess T. salad. Cures conditions like<br>poisoning and replenishes 15 FP."],
  "electro_pop": ["Electro Pop", "Candy made by Zess T. Replenishes<br>15 FP and makes you electrified.<br><em>Made by mixing Cake Mix with a<br>Volt Shroom.</em>"],
  "icicle_pop": ["Icicle Pop", "A dessert made by Zess T.<br>Replenishes 15 FP.<br>Be careful- eating it can sometimes freeze you!<br><em>Made by mixing Honey Syrup with an<br>Ice Storm.</em>"],
  "honey_candy": ["Honey Candy", "Candy made by Zess T.<br>Replenishes 20 FP.<br><em>Made by mixing Honey Syrup with<br>Cake Mix.</em>"],
  "fire_pop": ["Fire Pop", "Candy made by Zess T.<br>Replenishes 20 FP.<br><em>Made by mixing Cake Mix with a<br>Fire Flower.</em>"],
  "jammin'_jelly": ["Jammin' Jelly", "A highly nutritious snack.<br>Restores 50 FP."],
  "jelly_candy": ["Jelly Candy", "Candy made by Zess T.<br>Replenishes 64 FP.<br><em>Made by mixing Jammin' Jelly with<br>Cake Mix.</em>"],

  //hfp
  "$$$$": ["", ""],
  "$$$$$": ["- HP & FP -", ""],
  //2
  "mistake": ["Mistake", "Zess T.'s failed attempt.<br>Replenishes 1 HP and 1 FP.<br><em>Made by mixing incompatible<br>ingredients.</em>"],

  //3
  "peachy_peach": ["Peachy Peach", "Fruit found in Twilight Town.<br>Replenishes 1 HP and 2 FP."],

  //8
  "spicy_soup": ["Spicy Soup", "Yummy soup made by Zess T.<br>Replenishes 4 HP and 4 FP.<br><em>Made by cooking a Fire Flower.</em>"],
  "mushroom_fry": ["Mushroom Fry", "A tasty dish made by Zess T.<br>Replenishes 6 HP and 2 FP.<br><em>Made by cooking a Mushroom or a<br>Super Mushroom.</em>"],

  //10
  "hot_dog": ["Hot Dog", "Mr. Hoggle's meaty work of art.<br>Refills 5 HP and 5 FP."],
  "honey_mushroom": ["Honey Mushroom", "A dessert made by Zess T.<br>Replenishes 5 HP and 5 FP.<br><em>Made by mixing a Mushroom with<br>Honey Syrup.</em>"],

  //12
  "fruit_parfait": ["Fruit Parfait", "A dessert made by Zess T.<br>Replenishes 10 HP and 2 FP.<br><em>Made by mixing a Keel Mango with a<br>Peachy Peach.</em>"],

  //13
  "mango_delight": ["Mango Delight", "A dessert made by Zess T.<br>Replenishes 10 HP and 3 FP.<br><em>Made by mixing a Keel Mango with<br>Cake Mix.</em>"],

  //15
  "honey_super": ["Honey Super", "A dessert made by Zess T.<br>Replenishes 10 HP and 5 FP.<br><em>Made by mixing a Super Mushroom with<br>Honey Syrup.</em>"],
  "maple_mushroom": ["Maple Mushroom", "A dessert made by Zess T.<br>Replenishes 5 HP and 10 FP.<br><em>Made by mixing a Mushroom with<br>Maple Syrup.</em>"],

  //18
  "coco_candy": ["Coco Candy", "Candy made by Zess T.<br>Replenishes 3 HP and 15 FP.<br><em>Made by mixing a Coconut with<br>Cake Mix.</em>"],
  //20
  "maple_super": ["Maple Super", "A dessert made by Zess T.<br>Replenishes 10 HP and 10 FP.<br><em>Made by mixing a Super Mushroom and<br>Maple Syrup.</em>"],
  "zess_dinner": ["Zess Dinner", "A tasty meal made by Zess T.<br>Replenishes 10 HP and 10 FP.<br><em>Made by mixing a Mushroom with<br>a Horsetail.</em>"],
  "mushroom_cake": ["Mushroom Cake", "A cake made by Zess T.<br>Replenishes 10 HP and 10 FP.<br><em>Made by mixing a Mushroom with<br>Cake Mix.</em>"],
  "mushroom_roast": ["Mushroom Roast", "A tasty dish made by Zess T.<br>Replenishes 15 HP and 5 FP.<br><em>Made by cooking a Life Mushroom or<br>a Slow Mushroom.</em>"],

  //30
  "zess_cookie": ["Zess Cookie", "A cookie made by Zess T.<br>Replenishes 15 HP and 15 FP.<br><em>Made by mixing Cake Mix and<br>Gradual Syrup.</em>"],

  //40
  "mushroom_steak": ["Mushroom Steak", "A tasty dish made by Zess T.<br>Replenishes 30 HP and 10 FP.<br><em>Made by cooking an Ultra Mushroom.</em>"],
  "zess_special": ["Zess Special", "A tasty meal made by Zess T.<br>Replenishes 20 HP and 20 FP.<br><em>Made by mixing an Ultra Mushroom<br>with a Slow Mushroom.</em>"],

  //50
  "mushroom_crepe": ["Mushroom Crepe", "A treat made by Zess T.<br>Replenishes 30 HP and 20 FP.<br><em>Made by mixing an Ultra Mushroom<br>with Cake Mix.</em>"],
  //55
  "honey_ultra": ["Honey Ultra", "A dessert made by Zess T.<br>Replenishes 50 HP and 5 FP.<br><em>Made by mixing an Ultra Mushroom<br>with Honey Syrup.</em>"],
  //60
  "jelly_super": ["Jelly Super", "A dessert made by Zess T.<br>Replenishes 10 HP and 50 FP.<br><em>Made by mixing a Super Mushroom<br>with Jammin' Jelly.</em>"],
  //100
  "jelly_ultra": ["Jelly Ultra", "A dessert made by Zess T.<br>Replenishes 50 HP and 50 FP.<br><em>Made by mixing an Ultra Mushroom<br>with Jammin' Jelly.</em>"],


  //attacking
  "$$$$$$": ["", ""],
  "$$$$$$$": ["- Attacking -", ""],
  "pow_block": ["POW Block", "Attacks all enemies and does 2<br>damage, flipping shelled enemies."],
  "fire_flower": ["Fire Flower", "Attacks all enemies with fireballs that<br>do 3 damage. Does not actually burn enemies."],
  "ice_storm": ["Ice Storm", "Blows a cold wind at all enemies that<br>does 3 damage and freezes them."],
  "courage_meal": ["Courage Meal", "Hard food made by Zess T.<br>THrow it to attack an enemy for 4 damage.<br><em>Made by mixing a Courage Shell with<br>a Zess Dinner.</em>"],
  "earth_quake": ["Earth Quake", "Attacks all enemies on the ground or<br>ceiling and does 5 damage."],
  "hp_drain": ["HP Drain", "Does 5 damage to a foe while<br>replenishing your own HP by 5."],
  "thunder_bolt": ["Thunder Bolt", "Drops lightning on an enemy and<br>does 5 damage."],
  "thunder_rage": ["Thunder Rage", "Drops lightning on all enemies<br>and does 5 damage."],
  "shooting_star": ["Shooting Star", "Drops shooting stars on all enemies<br>and does 6 damage."],
  "coconut_bomb": ["Coconut Bomb", "An explosive made by Zess T.<br>Throw it to attack an enemy for 7 damage.<br><em>Made by mixing a Coconut with a<br>Fire Flower.</em>"],

  //buffing
  "$$$$$$$$": ["", ""],
  "$$$$$$$$$": ["- Buffing -", ""],
  "volt_mushroom": ["Volt Mushroom", "Temporarily electrifies a party member<br>so they damage direct-attackers."],
  "tasty_tonic": ["Tasty Tonic", "A tasty medicine. Cures poison and<br>other ailments."],
  "power_punch": ["Power Punch", "Temporarily boosts a party member's<br>Attack power by adding hugeness."],
  "courage_shell": ["Courage Shell", "Temporarily gives a party member<br>courage to boost their Defense."],
  "gradual_syrup": ["Gradual Syrup", "Makes a party member recover FP<br>gradually for a brief period."],
  "boo's_sheet": ["Boo's Sheet", "Temporarily makes a party member<br>invisible, warding against attacks."],
  "repel_cape": ["Repel Cape", "Temporarily makes a party member<br>dodgy so they are harder to hit."],
  "spite_pouch": ["Spite Pouch", "Temporarily does half damage to all<br>enemies who attack directly. Won't<br>work on some enemies!"],

  //debuffing
  "$$$$$$$$$$": ["", ""],
  "$$$$$$$$$$$": ["- Debuffing -", ""],
  "sleepy_sheep": ["Sleepy Sheep", "Temporarily puts all enemies to sleep,<br>immobilizing them."],
  "dizzy_dial": ["Dizzy Dial", "Temporarily makes all enemies dizzy,<br>decreasing their accuracy."],
  "mr._softener": ["Mr. Softener", "Temporarily softens up an enemy,<br>decreasing their Defense."],
  "mini_mr._mini": ["Mini Mr. Mini", "Temporarily makes enemies tiny,<br>dropping their Attack power."],
  "stopwatch": ["Stopwatch", "Temporarily immobilizes all enemies."],

  //other
  "$$$$$$$$$$$$": ["", ""],
  "$$$$$$$$$$$$$": ["- Other -", ""],
  "trial_stew": ["Trial Stew", "Amazing food made by Zess T.<br>Yields incredible results.<br><em>Made by mixing Couple's Cake with a<br>Poison Mushroom.</em>"],
  "poison_mushroom": ["Poison Mushroom", "A snack made by Zess T.<br>Eat it and it'll poison you!<br>On rare occasions, it'll replenish all of<br>your HP instead of poisoning you.<br><em>Made by mixing a Slow Mushroom with<br>Inky Sauce.</em>"],
  "fright_mask": ["Fright Mask", "Summons a scary spirit that may<br>chase enemies away."],
  "inn_coupon": ["Inn Coupon", "A free pass! Lets you stay one free<br>night at an inn."],
  "mystery": ["Mystery", "Who knows what this does? Take a<br>chance and find out!"],
  "peach_tart": ["Peach Tart", "A Zess T. dessert. Makes you<br>electrified, dodgy, or sleepy.<br><em>Made by mixing Cake Mix with a<br>Peachy Peach.</em>"],
  "gold_bar": ["Gold Bar", "A gold bar."],
  "ruin_powder": ["Ruin Powder"],
  "hottest_dog": ["New Switch Recipe", "<strong>Hottest Dog</strong><br>no desc"],
  "heartful_cake": ["Heartful Cake", ""],
  "couple's_cake": ["Couple's Cake", ""],
  "snow_bunny": ["Snow Bunny", ""],
  "zess_dynamite": ["Zess Dynamite", ""],
  "egg_bomb": ["Egg Bomb", ""],
  "mystic_egg": ["Mystic Egg", ""],
  "mystery_output": ["Random Item", "<strong>The result of cooking a mystery.</strong><br><u>Mistake</u> (very common)<br>Honey Mushroom<br>Life Mushroom"]
};

const recipes = {
  //A
  //B
  //C
  "-cake_mix": "mousse_cake",
  "cake_mix-mushroom": "mushroom_cake",
  "cake_mix-super_mushroom": "mushroom_cake",
  "cake_mix-ultra_mushroom": "mushroom_crepe",
  "cake_mix-slow_mushroom": "mushroom_cake",
  "cake_mix-life_mushroom": "mushroom_cake",

  "cake-mix-maple_syrup": "zess_cookie",
  "cake_mix-jammin'_jelly": "jelly_candy",
  "cake_mix-gradual_syrup": "zess_cookie",

  "cake_mix-ruin_powder": "heartful_cake",
  "cake_mix-fire_flower": "fire_pop",
  "cake_mix-peachy_peach": "peach_tart",
  "cake_mix-coconut": "coco_candy",
  "cake_mix-mango": "mango_delight",
  "cake_mix-volt_mushroom": "electro_pop",

  "couple's_cake-poison_mushroom": "trial_stew",

  "coconut_bomb-egg_bomb": "zess_dynamite",
  "coconut_bomb-dried_bouquet": "coconut",

  "-coconut": "tasty_tonic",
  "coconut-fire_flower": "coconut_bomb",
  "coconut_keel-mango": "fresh_juice",

  "courage_shell-zess_special": "courage_meal",
  
  //D
  "dried_bouquet-trial_stew": "poison_mushroom",
  "dried_mushroom-power_punch": "mushroom",

  //E
  //F
  "-fire_flower": "spicy_soup",
  "fire_flower-mystic_egg": "egg_bomb",
  "fire_flower-super_mushroom": "zess_dinner",
  //G
  "-gradual_syrup": "fresh_juice",
  "gradual_syrup-super_mushroom": "zess_dinner",
  "gradual_syrup-ultra_mushroom": "zess_special",
  "golden-leaf_ice-storm": "snow_bunny",

  //H
  "-honey_syrup": "fresh_juice",
  "honey_syrup-ultra_mushroom": "honey_ultra",
  "honey_syrup-life_mushroom": "honey_super",
  "honey_syrup-peachy_peach": "fruit_parfait",
  "honey_syrup-keel_mango": "fruit_parfait",
  "honey_syrup-ice_storm": "Icicle Pop",

  "hot_dog-hot_sauce": "hottest_dog",
  "horsetail-mushroom": "zess_dinner",
  "horsetail-turtley_leaf": "healthy_salad",

  //I
  "inky_sauce-slow_mushroom": "poison_mushroom",

  //J
  "-jammin'_jelly": "fresh_juice",
  "jammin'_jelly-life_mushroom": "jelly_super",
  "jammin'_jelly-slow_mushroom": "jelly_super",
  //K
  "-keel_mango": "fresh_juice",
  //L
  "-life_mushroom": "mushroom_roast",
  "life_mushroom-maple_syrup": "maple_super",

  //M
  "-mushroom": "mushroom_fry",
  "-mystery": "mystery_output",
  "maple_syrup-mushroom": "maple_mushroom",
  "mushroom_fry-shooting_star": "meteor_meal",

  //N
  //O
  //P
  "-poison_mushroom": "mushroom_fry",
  "-peachy_peach": "fresh_juice",
  //Q
  //R
  //S
  "-super_mushroom": "mushroom_fry",
  "-slow_mushroom": "mushroom_roast",
  "slow_mushroom-ultra_mushroom": "zess_special",
  "snow_bunny-spicy_soup": "couple's_cake",

  //T
  "-turtley_leaf": "koopa_tea",
  "thunder_bolt-thunder_rage": "trial_stew",
  "thunder_bolt-mushroom": "volt_mushroom",
  "thunder_rage-mushroom": "volt_mushroom",

  //U
  "-ultra_mushroom": "mushroom_steak",
  "ultra_mushroom-mr._softener": "dried_mushroom",

  //V
  "-volt_mushroom": "mushroom_fry",
  //W
  //X
  //Y
  //Z


  //swaps
  "gradual_syrup-point_swap": "honey_syrup",
  "honey_syrup-point_swap": "mushroom",
  "mushroom_point_swap": "honey_syrup",

  "point_swap-repel_cape": "boo's_sheet",
  "boo's_sheet-point_swap": "repel_cape",

  "earth_quake-point_swap": "thunder_bolt",
  "thunder_bolt-point_swap": "earth_quake"
}

const failedRecipes = {
  //A
  //B
  "boo's_sheet": true,
  //C
  "cake_mix-spite_powder": true,

  //D
  //E
  //F
  //G
  //H
  //I
  "-ice_storm": true,

  //J
  //K
  //L
  //M
  "mushroom-power_punch": true,
  "mr._softener-volt_mushroom": true,

  //N
  //O
  //P
  "-power_punch": true,

  //Q
  //R
  "-repel_cape": true,
  //S
  "-shooting_star": true,
  "-sleepy_sheep": true,

  //T
  "-tasty_tonic": true,
  "-thunder_rage": true
  //U
  //V
  //W
  //X
  //Y
  //Z
}