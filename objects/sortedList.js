class List{
    constructor(){
        this.numbers = [];
        this.size = 0;
    }

    add(num) {
        this.numbers.push(num);
        this.size++;
        return this.numbers.sort((a,b) => a-b);
    }

    remove(index){
        if(index >= this.size || index < 0){
            throw 'Index out of bounds';
        }
        this.size--;
        return this.numbers.splice(index, 1);
    }

    get(index){
        if(index >= this.size || index < 0){
            throw 'Index out of bounds';
        }
        return this.numbers[index];
    }
}
let list = new List();
console.log(list.get(0)); 
