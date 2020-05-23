function sumByTown(input){
    let object = {};

    for (let index = 0; index < input.length; index+=2) {
        if (object.hasOwnProperty(input[index])) {
            object[input[index]] += (Number)(input[index+1]);  
        } else{
            object[input[index]] = (Number)(input[index+1]);
        }
    }
    console.log(JSON.stringify(object));
}

sumByTown(['Sofia','20','Varna','3','Sofia','5','Varna','4']);