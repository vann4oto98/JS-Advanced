function heroicInventory(input) {
    let heroes = [];

  for (let i = 0; i < input.length; i++) {
        let currentHero = input[i].split(" / ");

        let currentName = currentHero[0];
        let currentLevel = +currentHero[1];
        let currentItems = currentHero[2] ? currentHero[2].split(", ") : [];

        let hero = {
            name: currentName,
            level: currentLevel,
            items: currentItems
        };

        heroes.push(hero);
        
      
  }

    console.log(JSON.stringify(heroes));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);