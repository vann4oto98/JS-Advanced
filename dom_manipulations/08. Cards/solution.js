function solve() {
   let playerOne = document.getElementById("player1Div");
   let playerTwo = document.getElementById("player2Div");
   let history = document.getElementById("history");
   let result = document.getElementById("result").children;

   let playerOneCard = "";
   let playerTwoCard = "";

   [playerOne, playerTwo].map(player => player.addEventListener("click", function(e){
        if (e.target.name === undefined){
            return '';
        }

    player === playerOne 
        ? playerOneCard = showCard(playerOneCard, result[0], e)
        : playerTwoCard = showCard(playerTwoCard, result[2], e);
    
    if(result[0].textContent !== "" && result[2].textContent !== ""){
        Number(playerOneCard.name) > Number(playerTwoCard.name)
        ? createBorder(playerOneCard, playerTwoCard)
        : createBorder(playerTwoCard, playerOneCard);
        saveHistory();
        defaultValues();
    }
   }))
   function createBorder(card1, card2){
    card1.style.border = "2px solid green";
    card2.style.border = "2px solid red";
   }
   function saveHistory(){
       history.textContent += `[${playerOneCard.name} vs ${playerTwoCard.name}] `;
   }
   function defaultValues(){
       result[0].textContent = "";
       result[2].textContent = "";
       playerOneCard = "";
       playerTwoCard = ""
   }
   function showCard(player, span, e){
       e.target.src = "images/whiteCard.jpg";
       span.textContent = e.target.name;
       player = e.target;
       return player;
   }
}