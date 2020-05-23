function cook(input) {
    let num = Number(input.shift());
    for(let i of input){
        if(i == 'chop'){
            num /= 2;
        }
        else if(i == 'dice'){
            num = Math.sqrt(num);
        }
        else if(i == 'spice'){
            num++;
        }
        else if(i == 'bake'){
            num *= 3;
        }
        else if(i == 'fillet'){
            num *= 0.8;
            num = num.toFixed(1);
        }
        console.log(num); 
    }
}

cook(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);