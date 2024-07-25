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
  "mystic_egg": ["Mystic Egg", "A weird egg that Petuni gave you.<br>Replenishes 5 HP."],
  "coconut": ["Coconut", "Fruit from a tropical island. To be<br>honest, it ain't tasty.<br>Replenishes 5 HP."],
  "keel_mango": ["Keel Mango", "Fruit found on Keelhaul Key.<br>Replenishes 5 HP."],
  "space_food": ["Space Food (#51)", "Space food made by Zess T.<br>Replenishes 5 HP.<br>Eating it can sometimes make you<br>impervious to status changes.<br><em>Made by mixing a Dried Bouquet with<br>various foods.</em>"],

  "meteor_meal": ["Meteor Meal (#26)", "Food that refills 7 HP and gradually<br>recovers even more.<br><em>Made by mixing a Shooting Star with<br>a Mushroom Fry."],

  "super_mushroom": ["Super Mushroom", "A feel-super mushroom.<br>Replenishes 10 HP."],
  "life_mushroom": ["Life Mushroom", "Restores 10 HP when Mario<br>or his partner falls."],
  "fried_egg": ["Fried Egg (#22)", "Food made by Zess T.<br>Replenishes 10 HP.<br><em>Made by cooking a Mystic Egg.</em>"],

  "snow_bunny": ["Snow Bunny (#45)", "A Zess T. dessert that refills 15 HP<br>but often freezes you after eating.<br><em>Made by mixing a Golden Leaf with an<br>Ice Storm.</em>"],

  "couple's_cake": ["Couple's Cake (#27)", "Food that slowly refills 20 HP over 10 turns.<br>You can't eat it yourself, but you can share it.<br><em>Made by mixing a Snow Bunny with<br>Spicy Soup."],
  "slow_mushroom": ["Slow Mushroom", "Makes a party member recover HP<br>gradually for a brief period.<br><em>Replenishes 20 HP over 10 turns.</em>"],

  "ultra_mushroom": ["Ultra Mushroom", "A feel-great mushroom.<br>Replenishes 50 HP."],

  //fp
  "$$": ["", ""],
  "$$$": ["- FP -", ""],
  "cake_mix": ["Cake Mix", "An ingredient for making<br>treats. Replenishes 1 FP."],

  "turtley_leaf": ["Turtley Leaf", "A leaf found in Petalburg.<br>Replenishes 3 FP."],

  "honey_syrup": ["Honey Syrup", "A sweet snack. Restores 5 FP."],
  "fresh_juice": ["Fresh Juice (#41)", "A Zess T. juice. Cures conditions like<br>poisoning and replenishes 5 FP.<br><em>Made by steeping Honey Syrup.</em>"],

  "koopa_tea": ["Koopa Tea (#38)", "Tea brewed by Zess T.<br>Replenishes 7 FP.<br><em>Made by steeping a Turtley Leaf.</em>"],

  "maple_syrup": ["Maple Syrup", "A deliciously sweet syrup.<br>Replenishes 10 FP."],
  "golden_leaf": ["Golden Leaf", "A weird leaf found in Creepy Steeple.<br>Replenishes 10 FP."],

  "mousse_cake": ["Mousse Cake (#28)", "A cake made by Zess T.<br>Replenishes 15 FP.<br><em>Made by cooking Cake Mix.</em>"],
  "koopa_bun": ["Koopa Bun (#24)", "A dumpling made by Zess T.<br>Replenishes 15 FP.<br><em>Made by mixing a Turtley Leaf with a<br>Keel Mango.</em>"],
  "healthy_salad": ["Healthy Salad (#25)", "A Zess T. salad. Cures conditions like<br>poisoning and replenishes 15 FP."],
  "electro_pop": ["Electro Pop (#49)", "Candy made by Zess T. Replenishes<br>15 FP and makes you electrified.<br><em>Made by mixing Cake Mix with a<br>Volt Shroom.</em>"],
  "icicle_pop": ["Icicle Pop (#43)", "A dessert made by Zess T.<br>Replenishes 15 FP.<br>Be careful- eating it can sometimes freeze you!<br><em>Made by mixing Honey Syrup with an<br>Ice Storm.</em>"],

  "zess_tea": ["Zess Tea (#39)", "Tea brewed by Zess T.<br>Replenishes 20 FP.<br><em>Made by steeping a Golden Leaf.</em>"],
  "honey_candy": ["Honey Candy (#47)", "Candy made by Zess T.<br>Replenishes 20 FP.<br><em>Made by mixing Honey Syrup with<br>Cake Mix.</em>"],
  "fire_pop": ["Fire Pop (#50)", "Candy made by Zess T.<br>Replenishes 20 FP.<br><em>Made by mixing Cake Mix with a<br>Fire Flower.</em>"],
  "heartful_cake": ["Heartful Cake", "A Zess T. cake. Replenishes 20 FP<br>but also softens you.<br><em>Made by mixing Cake Mix and<br>Ruin Powder.</em>"],
  "zess_frappe": ["Zess Frappe (#44)", "A dessert made by Zess T.<br>Replenishes 20 FP.<br>Be careful- eating it can sometimes<br>freeze you!<br><em>Made by mixing Maple Syrup with an<br>Ice Storm.</em>"],

  "inky_sauce": ["Inky Sauce (#42)", "Nasty juice made by Zess T.<br>Replenishes 30 FP.<br><em>Made by mixing Hot Sauce with a<br>Turtley Leaf.</em>"],

  "jammin'_jelly": ["Jammin' Jelly", "A highly nutritious snack.<br>Restores 50 FP."],

  "jelly_candy": ["Jelly Candy (#48)", "Candy made by Zess T.<br>Replenishes 64 FP.<br><em>Made by mixing Jammin' Jelly with<br>Cake Mix.</em>"],

  //hfp
  "$$$$": ["", ""],
  "$$$$$": ["- HP & FP -", ""],
  //2
  "mistake": ["Mistake (#58)", "Zess T.'s failed attempt.<br>Replenishes 1 HP and 1 FP.<br><em>Made by mixing incompatible<br>ingredients.</em>"],

  //3
  "peachy_peach": ["Peachy Peach", "Fruit found in Twilight Town.<br>Replenishes 1 HP and 2 FP."],

  //8
  "spicy_soup": ["Spicy Soup (#21)", "Yummy soup made by Zess T.<br>Replenishes 4 HP and 4 FP.<br><em>Made by cooking a Fire Flower.</em>"],
  "mushroom_fry": ["Mushroom Fry (#1)", "A tasty dish made by Zess T.<br>Replenishes 6 HP and 2 FP.<br><em>Made by cooking a Mushroom or a<br>Super Mushroom.</em>"],

  //10
  "hot_dog": ["Hot Dog", "Mr. Hoggle's meaty work of art.<br>Refills 5 HP and 5 FP."],
  "honey_mushroom": ["Honey Mushroom (#4)", "A dessert made by Zess T.<br>Replenishes 5 HP and 5 FP.<br><em>Made by mixing a Mushroom with<br>Honey Syrup.</em>"],
  "spaghetti": ["Spaghetti (#16)", "Spaghetti made by Zess T.<br>Replenishes 6 HP and 4 FP.<br><em>Made by cooking Fresh Pasta.</em>"],
  "omelette_meal": ["Omelette Meal (#23)", "Food made by Zess T.<br>Replenishes 5 HP and 5 FP.<br><em>Made by mixing a Mystic Egg with a Horsetail.</em>"],

  //12
  "fruit_parfait": ["Fruit Parfait (#32)", "A dessert made by Zess T.<br>Replenishes 10 HP and 2 FP.<br><em>Made by mixing a Keel Mango with a<br>Peachy Peach.</em>"],

  //13
  "mango_delight": ["Mango Delight (#33)", "A dessert made by Zess T.<br>Replenishes 10 HP and 3 FP.<br><em>Made by mixing a Keel Mango with<br>Cake Mix.</em>"],

  //14
  "koopasta": ["Koopasta (#17)", "A dinner made by Zess T.<br>Replenishes 7 HP and 7 FP.<br><em>Made by mixing Fresh Pasta with a<br>Turtley Leaf.</em>"],
  "hottest_dog": ["Hottest Dog (#20)", "A spicy dog made by Zess T. Charges<br>you and replenishes 7 HP and FP.<br><em>Made by mixing a Hot Dog and<br>Hot Sauce.</em>"],

  //15
  "honey_super": ["Honey Super (#7)", "A dessert made by Zess T.<br>Replenishes 10 HP and 5 FP.<br><em>Made by mixing a Super Mushroom with<br>Honey Syrup.</em>"],
  "maple_mushroom": ["Maple Mushroom (#5)", "A dessert made by Zess T.<br>Replenishes 5 HP and 10 FP.<br><em>Made by mixing a Mushroom with<br>Maple Syrup.</em>"],
  "fresh_pasta": ["Fresh Pasta", "Poshley Heights pasta. Replenishes<br>10 HP and 5 FP."],

  //18
  "coco_candy": ["Coco Candy (#46)", "Candy made by Zess T.<br>Replenishes 3 HP and 15 FP.<br><em>Made by mixing a Coconut with<br>Cake Mix.</em>"],

  //20
  "maple_super": ["Maple Super (#8)", "A dessert made by Zess T.<br>Replenishes 10 HP and 10 FP.<br><em>Made by mixing a Super Mushroom and<br>Maple Syrup.</em>"],
  "zess_dinner": ["Zess Dinner (#13)", "A tasty meal made by Zess T.<br>Replenishes 10 HP and 10 FP.<br><em>Made by mixing a Mushroom with<br>a Horsetail.</em>"],
  "mushroom_cake": ["Mushroom Cake (#29)", "A cake made by Zess T.<br>Replenishes 10 HP and 10 FP.<br><em>Made by mixing a Mushroom with<br>Cake Mix.</em>"],
  "mushroom_roast": ["Mushroom Roast (#2)", "A tasty dish made by Zess T.<br>Replenishes 15 HP and 5 FP.<br><em>Made by cooking a Life Mushroom or<br>a Slow Mushroom.</em>"],
  "choco_cake": ["Choco Cake (#30)", "A cake made by Zess T.<br>Replenishes 5 HP and 15 FP.<br><em>Made by mixing Cake Mix with<br>Inky Sauce.</em>"],
  "spicy_pasta": ["Spicy Pasta (#18)", "Spicy pasta made by Zess T. Charges<br>you and replenishes 10 HP and FP.<br><em>Made by mixing Fresh Pasta and<br>Hot Sauce.</em>"],

  //30
  "zess_cookie": ["Zess Cookie", "A cookie made by Zess T.<br>Replenishes 15 HP and 15 FP.<br><em>Made by mixing Cake Mix and<br>Gradual Syrup.</em>"],

  //40
  "mushroom_steak": ["Mushroom Steak (#3)", "A tasty dish made by Zess T.<br>Replenishes 30 HP and 10 FP.<br><em>Made by cooking an Ultra Mushroom.</em>"],
  "zess_special": ["Zess Special (#14)", "A tasty meal made by Zess T.<br>Replenishes 20 HP and 20 FP.<br><em>Made by mixing an Ultra Mushroom<br>with a Slow Mushroom.</em>"],
  "ink_pasta": ["Ink Pasta (#19)", "Spaghetti made by Zess T.<br>Replenishes 10 HP and 30 FP.<br><em>Made by mixing Fresh Pasta and<br>Inky Sauce.</em>"],

  //50
  "whacka_bump": ["Whacka Bump", "A lump of something. Replenishes<br>25 HP and 25 FP."],
  "mushroom_crepe": ["Mushroom Crepe (#36)", "A treat made by Zess T.<br>Replenishes 30 HP and 20 FP.<br><em>Made by mixing an Ultra Mushroom<br>with Cake Mix.</em>"],
  //55
  "jelly_mushroom": ["Jelly Mushroom (#6)", "A dessert made by Zess T.<br>Replenishhes 5 HP and 50 FP.<br><em>Made by mixing a Mushroom with<br>Jammin' Jelly.</em>"],
  "honey_ultra": ["Honey Ultra (#10)", "A dessert made by Zess T.<br>Replenishes 50 HP and 5 FP.<br><em>Made by mixing an Ultra Mushroom<br>with Honey Syrup.</em>"],
  //60
  "maple_ultra": ["Maple Ultra (#11)", "A dessert made by Zess T.<br>Replenishes 50 HP and 10 FP.<br><em>Made by mixing an Ultra Mushroom<br>with Maple Syrup.</em>"],
  "jelly_super": ["Jelly Super (#8)", "A dessert made by Zess T.<br>Replenishes 10 HP and 50 FP.<br><em>Made by mixing a Super Mushroom<br>with Jammin' Jelly.</em>"],
  //80
  "zess_deluxe": ["Zess Deluxe (#15)", "A tasty meal made by Zess T.<br>Replenishes 40 HP and 40 FP.<br><em>Made by mixing a Golden Leaf with a<br>Whacka Bump.</em>"],
  //100
  "jelly_ultra": ["Jelly Ultra (#12)", "A dessert made by Zess T.<br>Replenishes 50 HP and 50 FP.<br><em>Made by mixing an Ultra Mushroom<br>with Jammin' Jelly.</em>"],


  //attacking
  "$$$$$$": ["", ""],
  "$$$$$$$": ["- Attacking -", ""],
  "pow_block": ["POW Block", "Attacks all enemies and does 2<br>damage, flipping shelled enemies."],
  "fire_flower": ["Fire Flower", "Attacks all enemies with fireballs that<br>do 3 damage. Does not actually burn enemies."],
  "ice_storm": ["Ice Storm", "Blows a cold wind at all enemies that<br>does 3 damage and freezes them."],
  "courage_meal": ["Courage Meal (#54)", "Hard food made by Zess T.<br>Throw it to attack an enemy for 4 damage.<br><em>Made by mixing a Courage Shell with<br>a Zess Dinner.</em>"],
  "earth_quake": ["Earth Quake", "Attacks all enemies on the ground or<br>ceiling and does 5 damage."],
  "hp_drain": ["HP Drain", "Does 5 damage to a foe while<br>replenishing your own HP by 5."],
  "thunder_bolt": ["Thunder Bolt", "Drops lightning on an enemy and<br>does 5 damage."],
  "thunder_rage": ["Thunder Rage", "Drops lightning on all enemies<br>and does 5 damage."],
  "shooting_star": ["Shooting Star", "Drops shooting stars on all enemies<br>and does 6 damage."],
  "coconut_bomb": ["Coconut Bomb (#55)", "An explosive made by Zess T.<br>Throw it to attack an enemy for 7 damage.<br><em>Made by mixing a Coconut with a<br>Fire Flower.</em>"],
  "egg_bomb": ["Egg Bomb (#56)", "An egg bomb made by Zess T.<br>Throw it to attack an enemy for 6 damage.<br><em>Made by mixing a Mystic Egg with a<br>Fire Flower.</em>"],
  "zess_dynamite": ["Zess Dynamite (#57)", "Blasting powder made by Zess T.<br>Toss it to attack all foes for 7 damage.<br><em>Made by mixing an Egg Bomb with a Coconut Bomb.</em>"],

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
  "mushroom_broth": ["Mushroom Broth (#40)", "Broth brewed by Zess T. Gradually<br>replenishes HP but also softens you.<br>Made by mixing a Slow Mushroom with<br>a Golden Leaf."],
  "hot_sauce": ["Hot Sauce", "A popular sauce with a captivating<br>spiciness that'll make you Charged."],

  //debuffing
  "$$$$$$$$$$": ["", ""],
  "$$$$$$$$$$$": ["- Debuffing -", ""],
  "sleepy_sheep": ["Sleepy Sheep", "Temporarily puts all enemies to sleep,<br>immobilizing them."],
  "dizzy_dial": ["Dizzy Dial", "Temporarily makes all enemies dizzy,<br>decreasing their accuracy."],
  "mr._softener": ["Mr. Softener", "Temporarily softens up an enemy,<br>decreasing their Defense."],
  "mini_mr._mini": ["Mini Mr. Mini", "Temporarily makes enemies tiny,<br>dropping their Attack power."],
  "stopwatch": ["Stopwatch", "Temporarily immobilizes all enemies."],
  "ruin_powder": ["Ruin Powder", "Temporarily confuses all enemies,<br>hindering their actions."],

  //other
  "$$$$$$$$$$$$": ["", ""],
  "$$$$$$$$$$$$$": ["- Other -", ""],
  "trial_stew": ["Trial Stew (#53)", "Amazing food made by Zess T.<br>Yields incredible results.<br><em>Made by mixing Couple's Cake with a<br>Poison Mushroom.</em>"],
  "poison_mushroom": ["Poison Mushroom (#52)", "A snack made by Zess T.<br>Eat it and it'll poison you!<br>On rare occasions, it'll replenish all of<br>your HP instead of poisoning you.<br><em>Made by mixing a Slow Mushroom with<br>Inky Sauce.</em>"],
  "fright_mask": ["Fright Mask", "Summons a scary spirit that may<br>chase enemies away."],
  "inn_coupon": ["Inn Coupon", "A free pass! Lets you stay one free<br>night at an inn."],
  "mystery": ["Mystery", "Who knows what this does? Take a<br>chance and find out!"],
  "peach_tart": ["Peach Tart (#37)", "A Zess T. dessert. Makes you<br>electrified, dodgy, or sleepy.<br><em>Made by mixing Cake Mix with a<br>Peachy Peach.</em>"],
  "love_pudding": ["Love Pudding (#34)", "A Zess T. cake. Makes you invisible,<br>electrified, or sleepy.<br><em>Made by mixing a Mystic Egg with a<br>Mango Delight.</em>"],
  "gold_bar": ["Gold Bar", "A gold bar."],
  "gold_bar_x3": ["Gold Bar X 3", "Three gold bars."],
  "mystery_output": ["Random Item", "<strong>The result of cooking a mystery.</strong><br><u>Mistake</u> (very common)<br>Honey Mushroom<br>Life Mushroom<br>Zess Cookie"]
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

  "cake_mix-honey_syrup": "honey_candy",
  "cake-mix-maple_syrup": "zess_cookie",
  "cake_mix-jammin'_jelly": "jelly_candy",
  "cake_mix-gradual_syrup": "zess_cookie",

  "cake_mix-ruin_powder": "heartful_cake",
  "cake_mix-fire_flower": "fire_pop",
  "cake_mix-hot_sauce": "fire_pop",
  "cake_mix-peachy_peach": "peach_tart",
  "cake_mix-coconut": "coco_candy",
  "cake_mix-keel_mango": "mango_delight",
  "cake_mix-volt_mushroom": "electro_pop",
  "cake_mix-inky_sauce": "choco_cake",

  "couple's_cake-poison_mushroom": "trial_stew",

  "coconut_bomb-egg_bomb": "zess_dynamite",
  "coconut_bomb-dried_bouquet": "coconut",

  "-coconut": "tasty_tonic",
  "coconut-fire_flower": "coconut_bomb",
  "coconut_keel-mango": "fresh_juice",

  "courage_shell-zess_special": "courage_meal",
  "courage_shell-zess_dinner": "courage_meal",

  "courage_meal-dried_bouquet": "courage_shell",
  
  //D
  "dried_bouquet-trial_stew": "poison_mushroom",
  "dried_mushroom-power_punch": "mushroom",

  //E
  //F
  "-fire_flower": "spicy_soup",
  "fire_flower-mystic_egg": "egg_bomb",
  "fire_flower-super_mushroom": "zess_dinner",
  "fire_flower-hot_sauce": "spicy_soup",

  "fresh_juice-hot_sauce": "inky_sauce",

  "fresh_pasta-inky_sauce": "ink_pasta",
  "fresh_pasta-hot_sauce": "spicy_pasta",
  "fresh_pasta-turtley_leaf": "koopasta",

  "fresh_pasta-ultra_mushroom": "zess_deluxe",

  //G
  "-gradual_syrup": "fresh_juice",
  "gradual_syrup-super_mushroom": "zess_dinner",
  "gradual_syrup-ultra_mushroom": "zess_special",
  "gradual_syrup-slow_mushroom": "slow_mushroom", //WTF? I tried this recipe twice, it definitely exists, but why?

  "-golden_leaf": "zess_tea",
  "golden_leaf_ice-storm": "snow_bunny",
  "golden_leaf-slow_mushroom": "mushroom_broth",
  "golden_leaf-whacka_bump": "zess_deluxe",
  "golden_leaf-life_mushroom": "mushroom_steak",

  //H
  "-honey_syrup": "fresh_juice",
  "honey_syrup-jammin'_jelly": "fresh_juice",
  "honey_syrup-mushroom": "honey_mushroom",
  "honey_syrup-ultra_mushroom": "honey_ultra",
  "honey_syrup-life_mushroom": "honey_super",
  "honey_syrup-peachy_peach": "fruit_parfait",
  "honey_syrup-keel_mango": "fruit_parfait",
  "honey_syrup-ice_storm": "icicle_pop",
  "honey_syrup-hot_sauce": "tasty_tonic",

  "hot_dog-hot_sauce": "hottest_dog",

  "horsetail-mushroom": "zess_dinner",
  "horsetail-turtley_leaf": "healthy_salad",
  "horsetail-mystic_egg": "omelette_meal",

  "healthy_salad-mushroom_roast": "zess_special",

  "honey_syrup-super_mushroom": "honey_super",

  "-hot_sauce": "tasty_tonic",
  "hot_sauce-tasty_tonic": "inky_sauce",
  "hot_sauce-turtley_leaf": "inky_sauce",
  "hot_sauce-mushroom_broth": "inky_sauce",
  "hot_sauce-zess_tea": "inky_sauce",

  "hot_sauce-koopasta": "spicy_pasta",
  "hot_sauce-spaghetti": "spicy_pasta",

  //I
  "inky_sauce-slow_mushroom": "poison_mushroom",
  "inky_sauce-mousse_cake": "choco_cake",

  "inky_sauce-spaghetti": "ink_pasta",
  "inky_sauce-spicy_pasta": "ink_pasta",
  "inky_sauce-koopasta": "ink_pasta",
  
  "ice_storm-maple_syrup": "zess_frappe",

  //J
  "-jammin'_jelly": "fresh_juice",
  "jammin'_jelly-mushroom": "jelly_mushroom",
  "jammin'_jelly-super_mushroom": "jelly_super",
  "jammin'_jelly-life_mushroom": "jelly_super",
  "jammin'_jelly-slow_mushroom": "jelly_super",

  //K
  "-keel_mango": "fresh_juice",
  "keel_mango-turtley_leaf": "koopa_bun",
  
  //L
  "-life_mushroom": "mushroom_roast",
  "life_mushroom-maple_syrup": "maple_super",

  //M
  "-mushroom": "mushroom_fry",
  "mushroom-thunder_bolt": "volt_mushroom",
  "mushroom-thunder_rage": "volt_mushroom",

  "-mystery": "mystery_output",
  "maple_syrup-mushroom": "maple_mushroom",
  "maple_syrup-super_mushroom": "maple_super",
  "maple_syrup-ultra_mushroom": "maple_ultra",
  "mushroom_fry-shooting_star": "meteor_meal",
  
  "mr._softener-ultra_mushroom": "dried_mushroom",
  "mango_delight-mystic_egg": "love_pudding",

  "-mystic_egg": "fried_egg",

  //N
  //O
  //P
  "-poison_mushroom": "mushroom_fry",
  "poison_mushroom-turtley_leaf": "mushroom_broth",

  "-peachy_peach": "fresh_juice",
  "peachy_peach-ruin_powder": "heartful_cake",
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

  //U
  "-ultra_mushroom": "mushroom_steak",

  //V
  "-volt_mushroom": "mushroom_fry",
  //W
  //X
  //Y
  //Z


  //swaps
  "gradual_syrup-point_swap": "honey_syrup",
  "honey_syrup-point_swap": "mushroom",
  "mushroom-point_swap": "honey_syrup",

  "point_swap-repel_cape": "boo's_sheet",
  "boo's_sheet-point_swap": "repel_cape",

  "earth_quake-point_swap": "thunder_bolt",
  "point_swap-thunder_bolt": "earth_quake",

  "point_swap-spite_pouch": "ruin_powder",
  "point_swap-ruin_powder": "spite_pouch",

  "point_swap-shooting_star": "thunder_rage",
  "point_swap-thunder_rage": "shooting_star",

  "mr._softener-point_swap": "courage_shell",
  "courage_shell-point_swap": "mr._softener",

  "point_swap-slow_mushroom": "poison_mushroom",

  "point_swap-power_punch": "mini_mr._mini",
  "mini_mr._mini-point_swap": "power_punch",

  "point_swap-tasty_tonic": "sleepy_sheep",
  "point_swap-sleepy_sheep": "tasty_tonic",

  "fire_flower-point_swap": "ice_storm",
  "ice_storm-point_swap": "fire_flower",

  //space food
  "dried_bouquet-dried_mushroom": "space_food"
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