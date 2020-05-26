function solve() {
  let input = document.getElementById("input");
  let output = document.getElementById("output");

  let textArray = input.innerHTML.split(".");

  for (let i = 0; i < textArray.length; i += 3){
    let text = textArray.slice(i, i + 3).join('.');
    let p = document.createElement("p");

    p.innerHTML = text + '.';
    output.appendChild(p);
  }

}