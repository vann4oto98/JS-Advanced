function validate(input){
    let x1 = input[0], y1 = input[1], x2 = input[2], y2 = input[3];
    printresult(x1, y1, 0, 0);
    printresult(x2, y2, 0, 0);
    printresult(x1, y1, x2, y2);
     
    function printresult(x1, y1, x2, y2){
        let result = Math.sqrt((x1-x2) * (x1-x2) + (y1 - y2) * (y1 - y2));
        if (result == result.toFixed(0)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

}

validate([2, 1, 1, 1]);