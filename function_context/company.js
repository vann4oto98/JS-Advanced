class Company{
    constructor(){
        this.departments = [];
    }
    addEmployee(username, salary, position, department){
        
        if(!username || !salary || !position || !department || salary < 0){
            throw new Error("Invalid input!");
        }

        if (!this.departments.includes(department)) {
            this.departments.push({
                name: department,
                employees: [],
            });
        }

        let currentDepartment = this.departments.find(d => d.name === department);
        let employee = {
            username: username,
            salary: salary,
            position: position
        }

        currentDepartment.employees.push(employee);
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
    bestDepartment(){
        let bestAverage = 0
        let best = {};
        this.departments.forEach(d => {
           let average = d.employees.reduce((as, e) => as +=e.salary, 0)/d.employees.length;
            if(average > bestAverage){
                bestAverage = average;
                best = d;
                best.average = bestAverage;
            }
        });

        let output = [];
        output.push(`Best Department is: ${best.name}`);
        output.push(`Average salary: ${best.average.toFixed(2)}`);

        best.employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
        .forEach(e => output.push(`${e.username} ${e.salary} ${e.position}`));
        
        return output.join("\n");
    }
}