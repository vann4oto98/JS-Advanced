function checkIfSame(number){
    let numbers = String(number).split('').map(x => Number(x));
    let isSame = numbers.filter((n) => n !== numbers[0]);
    let sum = numbers.reduce((acc, number) => acc + number);
    let result = isSame.length == 0 ? true : false;

    console.log(result);
    console.log(sum);

}

checkIfSame(1234);