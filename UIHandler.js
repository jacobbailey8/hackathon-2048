//takes gamestate info from Game.js and updates the page
class UIHandler {
    //sizes the playing grid so that height and width are equal
    sizeGrid() {
        const grid = document.querySelector("#game-grid");
        grid.style.height = grid.clientWidth + "px";
    }
    //update the block at loc (array length 2) to new value
    addBlock(loc, updatedValue) {
        let cellNum = this.convertLoc(loc);
        let cellId = "cell" + cellNum;
        const cell = document.querySelector("#" + cellId);
        //update value in UI
        cell.innerHTML = updatedValue;
        //update full/empty status
        if(cell.classList.contains("empty")) {
            cell.classList.remove("empty");
            cell.classList.add("full");
        }
    }
    //remove the block at loc(array length 2)
    removeBlock(loc) {
        let cellNum = this.convertLoc(loc);
        let cellId = "cell" + cellNum;
        const cell = document.querySelector("#" + cellId);
        //remove value in UI
        cell.innerHTML = "";
        //update full/empty status
        cell.classList.remove("full");
        cell.classList.add("empty");
    }
    //displays a game over message
    displayGameOver(playerWon) {
        //make pop-up visible
        const alertBox = document.querySelector("#endgame-alert");
        if(alertBox.classList.contains("hidden")) {
            alertBox.classList.remove("hidden");
        }
        const alertTitle = document.querySelector("#endgame-title");
        if(playerWon) {
            alertTitle.innerHTML = "Congrats! You successfully created a 2048 square!";
        }else {
            alertTitle.innerHTML = "Better luck next time!";
        }
    }
    //draws board to ui
    drawBoard(userBoard) {
        for(let i=0; i < userBoard.length; i++) {
            for(let j = 0; j < userBoard.length; j++) {
                if(userBoard[i][j].value != 0) {
                    this.addBlock([i,j], userBoard[i][j].value);  
                }else {
                    this.removeBlock([i,j]);
                }
            }
        }
    }
    //clears board ui
    clearBoard(boardLength) {
        for(let i=0; i < boardLength; i++) {
            for(let j=0; j < boardLength; j++) {
                this.removeBlock([i,j]);
            }
        }
    }
    //helper method to turn array length 2 into a base-10 number that also represents 
    //the cell number in the 4x4 grid
    convertLoc(loc) {
        let row = loc[0];
        let col = loc[1];
        return ((row * 3) + (row + col));
    }
}