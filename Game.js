//runs a game of 2048, handles game logic
class Game {
    constructor(uiHandler) {
        this.ui = uiHandler; //game can can UIHandler methods to update UI
        this.board = []; //JD
    }

    //called inside of index.js to play the game
    startGame() {
        
    }

    //clears all blocks from board
    clearBoard() {
        //reset this.board to value in constructor.
    }
    //generates a new block and adds it to this.board
    createBlock() {

    }
    //handles keyboard input and moves blocks
    move() {

    }
    //check for game over conditions
    checkGameOver() {
        //loop through this.board for 2048 block

        //calculate legal moves??
    }
}