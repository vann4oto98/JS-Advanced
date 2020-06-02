function solve() {
    let inputText = document.getElementsByTagName('input')[0];
    let list = document.getElementsByTagName('li');
    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', function () {
        let name = inputText.value;

        if (name) {
            let currentName = "";
            currentName += name[0].toUpperCase();

            for (i = 1; i < name.length; i++) {
                currentName += name[i].toLowerCase();
            }


            let index = currentName.charCodeAt(0) - 65;

            if (list[index].textContent.length === 0) {
                list[index].textContent += currentName;
            } else {
                list[index].textContent += ", " + currentName;
            }

            inputText.value = null;
        }

    });

}