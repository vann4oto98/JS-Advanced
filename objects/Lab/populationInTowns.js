function getPopulation(input){
    let towns = new Map;
    for (const line of input) {
       let [name, pop] = line.split(" <-> ");
        if(towns.has(name)){
            towns.set(name, towns.get(name)+ (Number)(pop));
        } else{
            towns.set(name, +pop);
        }
    }

    for (let [key, value] of towns) {
        console.log(`${key} : ${value}`);
    }

}

getPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)