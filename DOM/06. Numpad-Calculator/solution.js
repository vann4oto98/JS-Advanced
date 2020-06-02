function solve() {
    let expression = document.getElementById("expressionOutput");
    let output = document.getElementById("resultOutput");
    let stringExp = "";
    let operator = false;

    document.querySelector('#calculator').addEventListener('click', (button) => {
        const operators = ['/', '*', '-', '+'];
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const regex = /^\d+(\.\d+)? [*/+-] \d+(\.\d+)?$/g;

        let btn = button.target.value;

        if (btn === 'Clear') {
            expression.textContent = "";
            output.textContent = "";
            stringExp = "";
            operator = false;
        }

        if (numbers.includes(btn) || btn === '.' && stringExp != "") {
            stringExp += btn;
            expression.textContent = stringExp;
        } else if (operators.includes(btn) && !operator && !stringExp.endsWith(".")) {
            stringExp += " " + btn + " ";
            expression.textContent = stringExp;
            operator = true;
        } else if (btn === '=') {
            if (regex.test(stringExp)) {
                printResult();
            } else {
                output.textContent = NaN;
            }
        }


        function printResult() {
            let [a, op, b] = stringExp.split(" ");
            a = +a;
            b = +b;
            switch (op) {
                case "*":
                    output.textContent = a * b;
                    break;
                case "+":
                    output.textContent = a + b;
                    break;
                case "-":
                    output.textContent = a - b;
                    break;
                case "/":
                    output.textContent = a / b;
                    break;
            }
        }
    });
}