function townsToJson(input){

    let keys = input[0].split(/\s*\|\s*/).filter( x => x !== ''); 
    let towns = [];

    for (let line of input.slice(1)) {
       let [town, lat, long] = line.split(/\s*\|\s*/).filter(x => x !== '');

        let object = {};
        object[keys[0]] = town;
        object[keys[1]] = +(+lat).toFixed(2);
        object[keys[2]] = +(+long).toFixed(2);

        towns.push(object);

    }

    console.log(JSON.stringify(towns));
}

townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);