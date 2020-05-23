function printArray(input = []){
    let delimiter = input.pop();
    let output = input.join(delimiter);
    console.log(output);
}

printArray(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']);