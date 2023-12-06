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
let currentPlayer = "O";
let startState = ["", "", "", "", "", "", "", "", ""];

// handle start messages
if (startState=["", "", "", "", "", "", "", "", ""]) {
    messageText.innerText = "Pick a square to Start! ☝️ "
}


// handle player clicks
const handlePlayerClick = (clickedBox: HTMLElement, index: number) => {
    
    if(clickedBox.innerHTML === "" && currentPlayer){
        updateBoard(clickedBox, index);           
        changePlayer();
        messageText.innerText = "";  
        
    } else {
        return;
    }
}

    gridBoxes.forEach((clickedBox, index) => 
        clickedBox.addEventListener("click", () => {
            handlePlayerClick(clickedBox, index);  handleResultCheck();
    }));


//update board
const updateBoard = (clickedBox: HTMLElement, index: number) => {
    startState[index] = currentPlayer;
    clickedBox.innerHTML = currentPlayer;
}

// change players
const changePlayer = () => {
    if(currentPlayer === "O") {
        currentPlayer = "X";
    } else {
        currentPlayer = "O";
    }
}

// handle restart game

const handleRestartGame = () => {
    startState = ["", "", "", "", "", "", "", "", ""]
    currentPlayer="O";
    gridBoxes.forEach(box => box.innerHTML = "")
    messageText.innerText = "Pick a square to Start! ☝️ "
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
       
        if(first === "X" && first === second && second === third) {
            roundWonX = true;
            break;
        }

        if(first === "O" && first === second && second === third) {
            roundWonO = true;
            break;
        }
        // Draw 
            if(i == 7 && !startState.includes ("")){
                messageText.innerHTML = "its a draw - play again!";
            break;
        }
       
    } 
// winning messages
    if (roundWonX) {
        messageText.innerHTML = "congrats, you won xx";
        return;
    }
    
    if (roundWonO) {
        messageText.innerHTML = "oooo you're a winner";
        return;
    }
}


/*
//computers turn 

const handleComputerTurn = (clickedBox, index)  => {
    const random = Math.floor(Math.random() * gridBoxes.length);
 
    if (!currentPlayer && clickedBox.innerHTML === "") {
        gridBoxes[random].innerHTML = "X";
        currentPlayer = "O";    
    
      } else {
      return
    
}
}*/
