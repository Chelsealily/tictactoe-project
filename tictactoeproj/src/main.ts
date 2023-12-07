import "./styles.scss";
import confetti, {Options} from "canvas-confetti";

const gridBoxes = document.querySelectorAll<HTMLElement>(".grid__box")
const mainGrid = document.querySelector<HTMLElement>(".grid")
const messageArea = document.querySelector<HTMLElement>(".message")
const messageText = document.querySelector<HTMLElement>(".message__text")
const restartButton = document.querySelector<HTMLButtonElement>(".button__restart")
const restartAudio = new Audio("./src/shakesound.mp3");
const yayAudio = new Audio("./src/yay.mp3");
const drawAudio = new Audio("./src/drawsound.mp3");

if (!mainGrid || !messageArea || !messageText || !restartButton) {
    throw new Error("issue with a query selector");
  }

// defaults
let currentPlayer = "O";
let startState = ["", "", "", "", "", "", "", "", ""];

// confetti 

const X = confetti.shapeFromText({ text: "❌"});
const tic= confetti.shapeFromText({ text: "💊"});

const opX : Options = {
    particleCount: 100,
    spread: 180,
    colors: ["#ffffff","#77DD77","#000000"],
    shapes: ["star", X, tic],
    scalar:5
}

const O = confetti.shapeFromText({ text: "O"});
const opO : Options = {
    particleCount: 100,
    spread: 180,
    colors: ["#ffffff","#77DD77","#FFA500"],
    shapes: ["circle", O, tic],
    scalar:5,
}


// handle start messages
if (startState=["", "", "", "", "", "", "", "", ""]) {
    messageText.innerText = "Pick a square to Start! ☝️ "
    restartButton.style.visibility="hidden";
    
}


// handle player clicks
const handlePlayerClick = (clickedBox: HTMLElement, index: number) => {
    
    if(clickedBox.innerHTML === "" && currentPlayer){
        updateBoard(clickedBox, index);           
        changePlayer();
        messageText.innerText = "";  
        restartButton.style.visibility="visible";
    
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
    restartAudio.play();

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
                drawAudio.play()
            break;
        }
       
    } 

/* notes for computer player

const robotTurn = () => {
    for (let i = 0; i <= 8; i++) {

        const position = priorityPicks[i];

        if(position === "") {
            startState[index] = "X"
            break;
        }
    }
const priorityPicks = [4, 0, 2, 6, 8,
	1, 3, 5, 7] */


// winning messages
    if (roundWonX) {
        messageText.innerHTML = "❌congrats, X won!❌";
        confetti(opX)
        yayAudio.play()
        return;
    }
    
    if (roundWonO) {
        messageText.innerHTML = "💊OOOO you're a winner💊";
        confetti(opO)
        yayAudio.play()
        return;
    }
}
