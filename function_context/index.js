function solve() {
   let body = document.querySelector("tbody");
   let last = "";

   body.addEventListener("click", changeColor);

   function changeColor(e) {
      if (last !== "") {
         last.removeAttribute("style")
      }

      let current = e.target.parentNode;

      if (current === last){
         last.removeAttribute("style");
         return;
      }
      
      current.style.backgroundColor = "#413f5e";
      last = current;
   }
}
