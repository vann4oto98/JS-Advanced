function createRegister(input) {

    let cars = new Map();

    for (let line of input) {
        let [name, model, produce] = line.split(" | ");

        if (cars.has(name)) {
            if (cars.get(name).has(model)) {
                let currP = cars.get(name).get(model);
                cars.get(name).set(model, currP += +produce);
            } else {
                cars.get(name).set(model, +produce);
            }
        } else {
            cars.set(name, new Map().set(model, +produce));
        }

    }

    let name = "";
    for (let [carName, models] of cars) {

        if (carName !== name) {
            name = carName;
            console.log(name);
        }

        for (let [model, produce] of models) {
            console.log(`###${model} -> ${produce}`)
        }
    }

}


createRegister(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);