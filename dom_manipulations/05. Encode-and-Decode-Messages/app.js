function encodeAndDecodeMessages() {
    let btns = document. getElementsByTagName("button");
    let encodeButton = btns[0];
    let decodeButton = btns[1];

    encodeButton.addEventListener("click", encode);

    function encode(e){
        let div = e.target.parentNode;
        let message = div.querySelector("textarea[placeholder]").value;
        let encoded = "";
        for (i = 0; i<message.length; i++){
            encoded += String.fromCharCode(message[i].charCodeAt(0)+1);
        }
        
        let outputDiv = decodeButton.parentNode;
        outputDiv.querySelector("textarea[placeholder]").value = encoded;
        
        div.querySelector("textarea[placeholder]").value = ""; 
    }

    decodeButton.addEventListener("click", decode);

    function decode(e){
        let div = e.target.parentNode;
        let message = div.querySelector("textarea[placeholder]").value;
        let decoded = "";
        for (i = 0; i<message.length; i++){
            decoded += String.fromCharCode(message[i].charCodeAt(0)-1);
        }

        div.querySelector("textarea[placeholder]").value = decoded;
    }
}