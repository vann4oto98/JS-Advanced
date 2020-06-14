function calculateBMI(name, age, weight, height){

    // I wanted to make a class

    class Person{
        constructor(name, age, weight, height){
            this.name = name;
            this.age = age;
            this.weight = weight;
            this.height = height;
            //this.bmi = Math.ceil(this.weight/(Math.pow(this.height/100)));  //връща нан
        }

        get status(){
            if (this.bmi >= 30){    //нарочно така съм го направил за да влиза в get bmi, връща ми числата и после нан?
                return "obese";
            } else if (this.bmi >= 25){
                return "overweight";
            } else if (this.bmi >= 18.5){
                return "normal";
            }
        }

        get bmi(){
            console.log(this.weight);  // връща си правилно
            console.log(this.height);  //
            return Math.ceil(this.weight/(Math.pow(this.height/100))); // връща нан
        }

        info(){
           return {
               name: this.name,
               personalInfo: {
                   age: this.age,
                   weight: this.weight,
                   height: this.height
               },
               BMI: this.bmi,        // 
               status: this.status  // 
           }
        }
    }


    let person = new Person(name, age, weight, height);

    console.log(person.bmi);

    return person.info();
}

console.log(calculateBMI("Peter", 29, 75, 182));