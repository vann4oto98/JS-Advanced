function printElement(input) {
    let steps = +input.pop();

    for (let i = 0; i < input.length; i+=steps) {
       console.log(input[i]);
    }
}

printElement(['5', 
'20', 
'31', 
'4', 
'20', 
'2']);