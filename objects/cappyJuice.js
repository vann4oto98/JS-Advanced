function fillBottles(input) {
    let map = new Map();
    let bottleMap = new Map();
    const JUICE_FOR_BOTTLE = 1000;

    for (let juice of input) {
        let [type, quantity] = juice.split(" => ");
        let currJuice = map.get(type);

        if (currJuice === undefined) {
            map.set(type, +quantity);
        } else {
            map.set(type, currJuice + (Number)(quantity));
        }

        currJuice = map.get(type);

        if (currJuice >= JUICE_FOR_BOTTLE) {
            let quantityLeft = currJuice % JUICE_FOR_BOTTLE;
            let bottles = Math.floor(currJuice / JUICE_FOR_BOTTLE);

            if (bottles > 0) {
                if (bottleMap.get(type) > 0) {
                    let currentBottles = bottleMap.get(type);
                    bottleMap.set(type, currentBottles + bottles);
                } else{
                    bottleMap.set(type, bottles);
                }
                map.set(type, quantityLeft);
            }
        }
    }

    for (let [key, value] of bottleMap) {
        console.log(`${key} => ${value}`);
    }
}

fillBottles(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);