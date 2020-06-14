function getInfo(...args) {
    let map = new Map;

    args.forEach(arg => {
        let type = typeof arg;
        putArgs(type, arg);
        console.log(`${type}: ${arg}`);
    });


    let sortedMap = new Map([...map.entries()].sort((a, b) => b[1].length - a[1].length));;

    for ([key, value] of sortedMap) {
        console.log(`${key} = ${value.length}`);
    }


    function putArgs(type, arg) {
        if (!map.has(type)){
            map.set(type, []);
        } 

        map.get(type).push(arg);
    }
}

getInfo({ name: 'bob' }, 3.333, 9.999);
