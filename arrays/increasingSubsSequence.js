function extractSubSequence(input) {

   let output = input.reduce((acc, curr) => {
        if (curr >= acc[acc.length-1] || acc[acc.length-1] === undefined){
            acc.push(curr);
        }
        return acc;
    }, []);
    console.log(output.join('\n'));
}

extractSubSequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])