function create(words) {
   let content = document.getElementById("content");

   words.forEach(element => {
      let divElement = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = element;
      paragraph.style.display = "none";
      divElement.appendChild(paragraph);
      divElement.addEventListener("click", show)
      
      content.appendChild(divElement);
   });

   function show (){
      let currentPar = this.firstChild;
      currentPar.style.display = "inline";
   }
}