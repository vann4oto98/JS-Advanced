function sort(input = []) {
    input.sort((a, b) => {

        if (a.length - b.length === 0){
            let word1 = a.toUpperCase();
            let word2 = b.toUpperCase();
        
            return word1.localeCompare(word2);
        }

        return a.length - b.length;
    })


    console.log(input.join('\n'));
}

sort(['test', 
'Deny', 
'omen', 
'Default']);