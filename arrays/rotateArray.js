function rotateArray(input = []) {
    let rotations = (+input.pop()) % (input.length);

    for (let i = 0; i < rotations; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(" "));
}

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']);