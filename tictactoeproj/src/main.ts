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

/*const winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6] 
]*/

// handle start message
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
        //resultCheck(); 
    } else {
       //handleComputerTurn();
       return;
    }
}

    gridBoxes.forEach((clickedBox, index) => 
        clickedBox.addEventListener("click", () => {
            handlePlayerClick(clickedBox, index);
    }));

 /* computers turn 

const handleComputerTurn = (clickedBox, index)  => {
    const random = Math.floor(Math.random() * gridBoxes.length);
 
    if (currentPlayer="X") {

        if (clickedBox.innerHTML === "") {
        gridBoxes[random].innerHTML = xMove;
        currentPlayer = "O";    
      } else {
      return
    
}
}}*/


//update board
const updateBoard = (clickedBox, index) => {
    startState[index] = currentPlayer;
    clickedBox.innerHTML = currentPlayer;
    clickedBox.classList.add(currentPlayer);
    console.log(clickedBox.classList)
}

// change players
const changePlayer = () => {
    if(currentPlayer === "O") {
        gridClassSwap();
        currentPlayer = "X";
    } else {
        gridClassSwap();
        currentPlayer = "O";
    }
}

// Change computer turn class
const gridClassSwap = () => {
    if(mainGrid.classList.contains("X")) {
        mainGrid.classList.remove(xMove);
        mainGrid.classList.add(oMove);
    } else {
        mainGrid.classList.remove(oMove);
        mainGrid.classList.add(xMove);
    }
}


/*reset individual boxes
const resetBoxData = (clickedBox) => {
    clickedBox.innerHTML = "";
    clickedBox.classList.remove(xMove);
    clickedBox.classList.add(oMove);
}*/


// handle restart game

const handleRestartGame = (event: Event) => {
    startState = ["", "", "", "", "", "", "", "", ""]
    gameStarted = false;
    currentPlayer="O";
    gridBoxes.forEach(box => box.innerHTML = "")
    messageText.innerText = "Choose a square to start the game! :D "
    mainGrid.classList.remove(xMove);
    mainGrid.classList.add(oMove);
    //gridBoxes.forEach((clickedBox) => resetBoxData(clickedBox));

}

restartButton.addEventListener("click", handleRestartGame);



/*// constants

// check rows,columns diagonals



const compTurn = spot []
let p1 = [2, 4]
p2 = [0, 2, 6, 8]
p3 = [1, 3, 5, 7]


*/