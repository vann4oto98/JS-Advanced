function calculateGCD(number1, number2){
   
    if (number1 == 0){
        return number2;
    }
    return calculateGCD(number2%number1, number1);

}


console.log(calculateGCD(15, 5));