function checkForSpeeding(input){
    let speed = Number(input[0]);
    let area = input[1];

    let areas = ["motorway", 130, "interstate", 90, "city", 50, "residential", 20]
    let position = areas.indexOf(area);
    let limit = areas[position + 1];
    
    if (speed - limit > 40) {
        console.log("reckless driving")
    } else if (speed - limit > 20) {
        console.log("excessive speeding")
    } else if (speed - limit > 0) {
        console.log("speeding")
    }

}

checkForSpeeding([21, 'city']);