import './styles.scss'

const gridBoxes = document.querySelectorAll<HTMLElement>(".grid__box")
const mainGrid = document.querySelector<HTMLElement>(".grid")
const messageArea = document.querySelector<HTMLElement>(".message")
const messageText = document.querySelector<HTMLElement>(".message__text")
const restartButton = document.querySelector<HTMLButtonElement>(".button__restart")

if (!mainGrid || !messageArea || !messageText || !restartButton) {
    throw new Error("issue with a query selector");
  }

// defaults
const xMove = "X"
const oMove = "O"
let currentPlayer = "O";
let startState = ["", "", "", "", "", "", "", "", ""];
let gameStarted = false;


// handle start messages
if (startState=["", "", "", "", "", "", "", "", ""]) {
    messageText.innerText = "Pick a square to Start! ☝️ "
}


// handle player clicks
const handlePlayerClick = (clickedBox, index) => {
    
    if(clickedBox.innerHTML === "" && currentPlayer){
        updateBoard(clickedBox, index);           
        changePlayer();
        messageText.innerText = "";  
        gameStarted = true;
    } else {
       //handleComputerTurn();
       return;
    }
}

    gridBoxes.forEach((clickedBox, index) => 
        clickedBox.addEventListener("click", () => {
            handlePlayerClick(clickedBox, index);  handleResultCheck();
    }));

 /*//computers turn 

const handleComputerTurn = (clickedBox, index)  => {
    const random = Math.floor(Math.random() * gridBoxes.length);
 
    if (currentPlayer="X") {

        if (clickedBox.innerHTML === "") {
        gridBoxes[random].innerHTML = xMove;
        currentPlayer = "O";    
    
      } else {
      return
    
}
}} */


//update board
const updateBoard = (clickedBox, index) => {
    startState[index] = currentPlayer;
    clickedBox.innerHTML = currentPlayer;
}

// change players
const changePlayer = () => {
    if(currentPlayer === "O") {
       
        messageText.innerText = "Player X's Turn";  
        currentPlayer = "X";
    } else {
        
        currentPlayer = "O";
        messageText.innerText = "Player O's Turn";  
    }
}



// handle restart game

const handleRestartGame = (event: Event) => {
    startState = ["", "", "", "", "", "", "", "", ""]
    gameStarted = false;
    currentPlayer="O";
    gridBoxes.forEach(box => box.innerHTML = "")
    messageText.innerText = "Choose a square to start the game! :D "
    mainGrid.classList.remove(xMove);
    mainGrid.classList.add(oMove);
    

}

restartButton.addEventListener("click", handleRestartGame);



// Result Check

const winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6] 
]

const handleResultCheck = () => {
    let roundWonX = false;
    let roundWonO = false
    for (let i = 0; i <= 7; i++) {
        
        const winPoss = winningCombos[i];
        const first = startState[winPoss[0]];
        const second = startState[winPoss[1]];
        const third = startState[winPoss[2]];
        
        if(first === "" || second === "" || third === "") {
            continue;
        }
        // Win & Message
        if(first === "X" && first === second && second === third) {
            roundWonX = true;
            break;
        }

        if(first === "O" && first === second && second === third) {
            roundWonO = true;
            break;
        }
            if(i == 7 && !startState.includes ("")){
                messageText.innerHTML = "its a draw - play again!";
            break;
        }
       
    } 

    if (roundWonX) {
        messageText.innerHTML = "congrats, you won xx";
        gameStarted = false;
        return;
    }
    if (roundWonO) {
        messageText.innerHTML = "oooo you're a winner";
        gameStarted = false;
        return;
    }
}