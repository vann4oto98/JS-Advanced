function solve() {
    let binary = document.createElement('option');
    binary.textContent = "Binary";
    binary.value = "binary";
    let hexa = document.createElement('option');
    hexa.textContent = "Hexadecimal";
    hexa.value = "hexadecimal";
    let menuTo = document.getElementById('selectMenuTo');
    menuTo.appendChild(binary);
    menuTo.appendChild(hexa);

    let button = document.getElementsByTagName('button')[0];
    let output = document.getElementById('result');

    button.addEventListener('click', function () {

        let number = document.getElementById('input');
        if (menuTo.value === "binary") {
            output.value = (+number.value).toString(2);
        } else if (menuTo.value === "hexadecimal") {
            output.value = (+number.value).toString(16).toUpperCase();
        }
    });

}