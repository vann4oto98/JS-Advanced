function solve(input, sortBy) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = +price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let line of input){
        let [destination, price, status] = line.split("|");
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }
    return tickets.sort((a, b) => 
        sortBy === 'price' ? a[sortBy] - b[sortBy] : a[sortBy].localeCompare(b[sortBy])
    );

}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));