//runs a game of 2048, handles game logic
class Game {
    constructor(uiHandler) {
        this.ui = uiHandler; //game can can UIHandler methods to update UI
        this.board; //will be assigned values at start of game
    }

    //clears all blocks from board and adds two starting blocks
    //TAKEN FROM BLOCK.JS
    startGame(row, col) {
        //clear board
        this.board = [];
        for (let i = 0; i < row; i++){
            this.board.push([]);
            for(let j = 0; j < col; j++){
                this.board[i].push(new Block(i, j, 0));
                //update ui, draw empty board
                let loc = [i, j];
                this.ui.removeBlock(loc);
            }
        }
        //place beginning blocks
        let loc1 = this.createBlock();
        this.ui.addBlock(loc1, 2);
        let loc2 = this.createBlock();
        this.ui.addBlock(loc2, 2);
    }
    //generates a new block and adds it to this.board
    //TAKEN FROM BLOCK.JS spawn but added return for ui purposes
    createBlock() {
        let i = this.randomIndex();
        let j = this.randomIndex();
        while (this.board[i][j].value != 0){ //while grid space is taken
            //generate new grid coordinates
            i = this.randomIndex();
            j = this.randomIndex();
        }
        this.board[i][j].value = 2;
        return [i,j];
    }
    //handles keyboard input and moves blocks
    move(e) {
        if(e.key == "w" || e.key == "ArrowUp") {
            console.log("up");
        }else if(e.key == "a" || e.key == "ArrowLeft") {
            console.log("left");
        }else if(e.key == "s" || e.key == "ArrowDown") {
            console.log("down");
        }else if(e.key == "d" || e.key == "ArrowLeft") {
            console.log("right");
        }
    }
    //check for game over conditions
    checkGameOver() {
        //loop through this.board for 2048 block

        //calculate legal moves??
    }
    //helper function to generate a random index from 0 to board size
    randomIndex() {
        let value = Math.random() * 40;

        if (value >= 0 && value < 10){
            return 0;
        }
        else if (value >= 10 && value < 20){
            return 1;
        }
        else if (value >= 20 && value < 30){
            return 2;
        }
        else if (value >= 30 && value <= 40){
            return 3;
        }
    }
}