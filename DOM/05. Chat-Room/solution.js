function solve() {
   let button = document.getElementById("send");

   button.addEventListener('click', function () {
      let text = document.getElementById("chat_input");
      let chatMessages = document.getElementById("chat_messages");

      let message = document.createElement("div");
      message.className = "message my-message";
      message.textContent = text.value;

      chatMessages.appendChild(message);

      text.value = "";
   });
}