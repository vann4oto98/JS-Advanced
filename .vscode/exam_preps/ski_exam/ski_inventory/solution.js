function solve() { //TODO: continue
   let form = Array.from(document.getElementById("add-new").children);
   let filterButton = document.querySelector(".filter").children[2];
   let myProducts = document.getElementById("myProducts");
   let addButton = form[4];

   addButton.addEventListener("click", addProduct);
   filterButton.addEventListener("click", filterElements);


   function filterElements(){
      let nameSearched = document.getElementById("filter").value;
      let products = document.querySelectorAll("#products ul li");
      for (i=0;i<products.length; i++){
         let current = products[i];
         let name = current.children[0].textContent;

         if (!(name.toLowerCase()).includes((nameSearched.toLowerCase()))){
            current.setAttribute("style", "display: none")
         }
      }
      document.getElementById("filter").value = "";
   }

   function addProduct(){
      event.preventDefault();
      let name = form[1].value;
      let quantity = form[2].value;
      let price = form[3].value;

      let availableProducts = document.getElementById("products").children[1];
      let li = document.createElement("li");
      let span = document.createElement("span");
      span.textContent = name;
      let strong1 = document.createElement("strong");
      strong1.textContent = `Available: ${quantity}`;

      let div = document.createElement("div");
      let strong2 = document.createElement("strong");
      strong2.textContent = price;
      let button = document.createElement("button");
      button.textContent = "Add to Client's List";
      button.addEventListener("click", addToClient);

      li.appendChild(span);
      li.appendChild(strong1);
      div.appendChild(strong2);
      div.appendChild(button);
      li.appendChild(div);
      
      availableProducts.appendChild(li);

      form[1].value = "";
      form[2].value = "";
      form[3].value = "";
   }

   function addToClient(){
      let ul = myProducts.children[1];
      let item = event.target.parentNode.parentNode;
      ul.appendChild(item)
   }
}