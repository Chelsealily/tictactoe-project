import "./styles.scss";
import confetti, {Options} from "canvas-confetti";

const gridBoxes = document.querySelectorAll<HTMLElement>(".grid__box")
const mainGrid = document.querySelector<HTMLElement>(".grid")
const messageArea = document.querySelector<HTMLElement>(".message")
const messageText = document.querySelector<HTMLElement>(".message__text")
const restartButton = document.querySelector<HTMLButtonElement>(".button__restart")
const compGame = document.querySelector<HTMLInputElement>(".playComp")
const twoGame = document.querySelector<HTMLInputElement>(".playTwo")

// audios
const restartAudio = new Audio("./src/assets/shakesound.mp3");
const yayAudio = new Audio("./src/assets/yay.mp3");
const drawAudio = new Audio("./src/assets/drawsound.mp3");
const clickAudio= new Audio("./src/assets/click.mp3")
const errorAudio= new Audio("./src/assets/error.mp3")


if (!mainGrid || !messageArea || !messageText || !restartButton || !compGame
    || !twoGame) {
    throw new Error("issue with a query selector");
  }

// defaults
let twoPlayer=true;
let currentPlayer = "🔵";
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


// handle comp game choice
compGame.addEventListener("click" , () => {
    twoPlayer=false;
    handlePlayerClick(); 
})

// handle 2 player game
twoGame.addEventListener("click" , () => {
    twoPlayer=true;
    handlePlayerClick(); 
})

// handle start messages
if (startState=["", "", "", "", "", "", "", "", ""]) {
    messageText.innerText = "Pick a square to Start! ☝️ "
    restartButton.style.visibility="hidden";
}

// handle player clicks
const handlePlayerClick = (clickedBox: HTMLElement, index: number) => {

    if (currentPlayer) {

    if(clickedBox.innerHTML === ""){
        updateBoard(clickedBox, index);  
        clickAudio.play()
        changePlayer();
        messageText.innerText = "";  
        restartButton.style.visibility="visible";
    } else {
        errorAudio.play()
        alert("That space is taken dude")
        return;
    }
}}
    gridBoxes.forEach((clickedBox, index) => 
        clickedBox.addEventListener("click", () => {
            handlePlayerClick(clickedBox, index);  handleResultCheck();
    }));

    
//update board
const updateBoard = (clickedBox:HTMLElement, index: number) => {
    startState[index] = currentPlayer;
    clickedBox.innerHTML = currentPlayer;
}

// change players
const changePlayer = () => {

    if (twoPlayer) {
        if(currentPlayer === "🔵") {
        currentPlayer = "❎";
    } else {
        currentPlayer = "🔵";
    }

    } if (!twoPlayer) {
        if(currentPlayer === "🔵") {
            handleResultCheck();
            handleComputerTurn(); 
        } else {
            handleResultCheck();
            currentPlayer = "🔵";
        }
    }
}


// handle computer turn 
const handleComputerTurn = (clickedBox: HTMLElement, index: number)  => {
   let emptyBoxes: any[] = []
   // let random:number;
    let indNum: number[] = []
    currentPlayer = "❎"

let i = -1
gridBoxes.forEach(box => {
    i++
    if (box.innerText === "") {
        emptyBoxes.push(box)
        indNum.push(i);
} 
})

    clickedBox = emptyBoxes[Math.floor(Math.random()*emptyBoxes.length)];

    clickAudio.play();
    index = Number(indNum[clickedBox])
    
    updateBoard(clickedBox, index); 
    currentPlayer = "🔵";
    twoPlayer=false;

}


const handleRestartGame = () => {
    startState = ["", "", "", "", "", "", "", "", ""]
    currentPlayer="🔵";
    gridBoxes.forEach(box => box.innerHTML = "")
    messageText.innerText = "Pick a square to Start! ☝️ "
    restartAudio.play();
    twoPlayer = true;
    twoGame.checked = true;
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
    let roundWonO = false;
    let roundDraw = false;
    for (let i = 0; i <= 7; i++) {
        
        const winPoss = winningCombos[i];
        const first = startState[winPoss[0]];
        const second = startState[winPoss[1]];
        const third = startState[winPoss[2]];
        
        if(first === "" || second === "" || third === "") {
            continue;
        }
       
        if(first == "❎" && first === second && second === third) {
            roundWonX = true;
            break;
        }

        if(first === "🔵" && first === second && second === third) {
            roundWonO = true;
            break;
        }
        // Draw 
        if (i == 7) {
            if(!startState.includes("")){
                roundDraw = true;
            break;
        }
    }
       
    } 

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

    if (roundDraw) {
        messageText.innerHTML = "🤪its a draw - play again!🤪";
        drawAudio.play()
        return;
    }
}

