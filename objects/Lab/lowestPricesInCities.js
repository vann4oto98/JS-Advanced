function calculate(input){
    
    let map = new Map();

    for (let line of input) {
        let [town, product, price] = line.split(" | ");
        if (!map.has(product)){
            map.set(product, new Map());
        } 

        map.get(product).set(town, +price);
        
    }

    for (let [key, value] of map) {
        let sortedArray = Array.from(value.keys()).sort((a, b) =>{
            return value.get(a) - value.get(b);
        });
        console.log(`${key} -> ${value.get(sortedArray[0])} (${sortedArray[0]})`);
    }

}

calculate(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);


// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)
