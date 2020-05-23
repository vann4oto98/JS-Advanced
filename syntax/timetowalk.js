function calculateTimeToWalk(steps, length, speed){
    let distance = steps * length;
    let minutesBreak = Math.floor(distance/500) * 60;
    let time = Math.round(distance/speed*3.6 + minutesBreak);
    let sec = time % 60;
    let min = ((time-sec)/60) % 60;
    let hours = ((time - sec - min*60)/60) % 60;
    sec = replaceZero(sec);
    min = replaceZero(min);
    hours = replaceZero(hours);

    console.log( `${hours}:${min}:${sec}`);

    function replaceZero(value){
        if (0 <= value && value <= 9){
            value = '0' + value;
        }
        return value;
    }
}

calculateTimeToWalk(2564, 0.70, 5.5);