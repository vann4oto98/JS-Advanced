function solve() {
  function clickEvent(){
    let textElement = this.parentNode.children[1];
    let text = textElement.innerText.toString();
    let number = text.match(/\d+/)[0];
    text = text.replace(number, (+number +1)).toString;
    textElement.innerHtml = text;
  }


  //NOT WORKING

  let linkElements = document.querySelectorAll(); //not working

  for (let element of linkElements){
    element.addEventListener('click', clickEvent());
  }
}