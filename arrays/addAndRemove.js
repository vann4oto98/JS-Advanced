function solve(input = []){
    let outputArray  = new Array;
    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command === "add"){
            outputArray.push(i + 1);
        } else{
            outputArray.pop();
        }
    }
    return (outputArray.length === 0 ? console.log("Empty") : outputArray.forEach(n => console.log(n)));
}

solve(['remove', 
'remove', 
'remove']);