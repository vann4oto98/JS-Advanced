function solve() {
   let body = document.querySelector("tbody");
   let last = "";


   body.addEventListener("click", changeColor);


   function changeColor(e) {
      if (last !== "") {
         last.removeAttribute("style")
      }
      last = e.target.parentNode;
      last.style.backgroundColor = "#413f5e"
   }

}
