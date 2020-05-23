function sortCatalogue(input){
    input.sort();

    let char = '';

    input.forEach((element, index) => {
        let productAndPrice = element.split(" : ");

        if (char !== productAndPrice[0].charAt(0)) {
            char = productAndPrice[0].charAt(0);
            console.log(char);
        }
        console.log(`  ${productAndPrice[0]}: ${productAndPrice[1]}`);
    });


}

sortCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);