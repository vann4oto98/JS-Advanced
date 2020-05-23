function solve(input) {

    let systems = new Map();

    for (let line of input) {
        let [system, component, subComponent] = line.split(" | ");

        if (!systems.has(system)) {
            systems.set(system, new Map);
        }
        if (!systems.get(system).has(component)) {
            systems.get(system).set(component, [])
        }
        systems.get(system).get(component).push(subComponent);
    }

    function sortSystemComparator(sysA, sysB, systems) {
        let aComponents = systems.get(sysA).size;
        let bComponents = systems.get(sysB).size;
        
        if (aComponents > bComponents) return -1;
        if (aComponents < bComponents) return 1;

        return sysA.toLowerCase().localeCompare(sysB.toLowerCase());
    }

    let systemNames = [...systems.keys()].sort((a, b) => sortSystemComparator(a, b, systems));

    for (let system of systemNames) {

        console.log(system);

        let components = [...systems.get(system).keys()].sort((s1, s2) => systems.get(system).get(s2).length - systems.get(system).get(s1).length);

        for (let component of components) {
            console.log(`|||${component}`);
            for (let subComponent of systems.get(system).get(component)){
                console.log(`||||||${subComponent}`);
            }
        }

    }
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
);