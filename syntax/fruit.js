function solve(fruit, weight, price){
    weight /= 1000;
    let cost = weight * price;

    console.log(`I need $${cost.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

solve("apple", 1563, 2.35);