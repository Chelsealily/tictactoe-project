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
let o_Player = true;
let startState = ["", "", "", "", "", "", "", "", ""];
let gameStarted = true;

// handle start message
if (startState=["", "", "", "", "", "", "", "", ""]) {
    messageText.innerText = "Choose a square to start the game! ☝️ "
}


// handle box click - NEED TO ADD PLAYER CHANGE 
const handleBoxClick = (event: Event) => {
    const clickedBox = event.currentTarget as HTMLElement;
    const clickedBoxNumber = Number(clickedBox.getAttribute("id"));
   
    if (startState[clickedBoxNumber] == "" || !gameStarted) {
       clickedBox.innerText= "O";
       o_Player=false;
       //console.log(o_Player);
       messageText.innerText = "";
  } else {
    //prompt("That square has already been used");
    return;
  }
};

gridBoxes.forEach(button => {
    button.addEventListener("click", handleBoxClick);
});


// handle restart game

const handleRestartGame = (event: Event) => {
    startState = ["", "", "", "", "", "", "", "", ""]
    gameStarted = false;
    gridBoxes.forEach(box => box.innerHTML = "")
    messageText.innerText = "Choose a square to start the game! :D "
}

restartButton.addEventListener("click", handleRestartGame);



/*

// constants

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

const compTurn = spot []
let p1 = [2, 4]
p2 = [0, 2, 6, 8]
p3 = [1, 3, 5, 7]


*/