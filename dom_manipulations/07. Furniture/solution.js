function solve() {
  let btns = document.getElementsByTagName("button");
  let generateBtn = btns[0];
  let buyBtn = btns[1];

  generateBtn.addEventListener("click", generate);

  buyBtn.addEventListener("click", buy);

  function buy(){
    let stuff = document.querySelectorAll("input[type=checkbox]:checked");
    let boughtFurniture = [];
    let totalPrice = 0;
    let averageDecoration = 0;
    stuff.forEach(item => {
      let info = (item.parentNode).parentNode;
      fullItem = info.querySelectorAll("p");
      boughtFurniture.push(fullItem[0].textContent);
      totalPrice += (Number)(fullItem[1].textContent);
      averageDecoration += (Number)(fullItem[2].textContent);
    });

    let output = "Bought furniture: " + boughtFurniture.join(", ")
                 + "\n" + "Total price: "+ totalPrice.toFixed(2)  + "\n"
                 + "Average decoration factor: " + averageDecoration/stuff.length;
    
    document.querySelector("textarea:disabled").value = output;
    console.log(document.querySelectorAll("tbody tr").length);             

  };

  function generate() {
    let input  = document.querySelector("textarea").value;
    let objects = JSON.parse(input);  
    objects.forEach(element => {

    //create image
    let tr = document.createElement("tr");
    let tdIm = document.createElement("td");
    let img = document.createElement("img");
    img.src = element['img'];
    tdIm.appendChild(img);
    tr.appendChild(tdIm);
    

    //create name
    let tdN = document.createElement("td");
    let p = document.createElement("p");
    p.textContent = element['name'];
    tdN.appendChild(p);
    tr.appendChild(tdN);

    //create price
    let tdP = document.createElement("td");
    let pPrice = document.createElement("p");
    pPrice.textContent = element['price'];
    tdP.appendChild(pPrice);
    tr.appendChild(tdP);

    //create decoration factor
    let tdDe = document.createElement("td");
    let pF = document.createElement("p");
    pF.textContent = element['decFactor'];
    tdDe.appendChild(pF);
    tr.appendChild(tdDe);
    
    //create checkbox
    let tdCheck = document.createElement("td");
    let inputCheck = document.createElement("input");
    inputCheck.setAttribute("type", "checkbox");
    tdCheck.appendChild(inputCheck);
    tr.appendChild(tdCheck);

    //add to the item list
    document.getElementsByTagName("tbody")[0].appendChild(tr);
    });

  };
}