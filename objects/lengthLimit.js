class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length){
        this.innerLength += length;
    }
    decrease(length){
        if (this.innerLength - length < 0){
            this.innerLength = 0;
        } else{
            this.innerLength -= length;
        }
    }

    toString(){
        if (this.innerString.length <= this.innerLength){
            return this.innerString;
        } else{
            let word = this.innerString.length - this.innerLength;
            if (word <= 0 || this.innerLength === 0){
                return "..."
            }
            let output = "";
            for (let i= 0; i<word; i++){
                output += this.innerString[i];
            }
            output += "...";
            return output;
        }
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
