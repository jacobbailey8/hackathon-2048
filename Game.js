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
            }
        }
        //clear ui board
        this.ui.clearBoard(row);
        //place beginning blocks
        let loc1 = this.createBlock();
        let loc2 = this.createBlock();
        //redraw board
        this.ui.drawBoard(this.board);

        //while(EndGame(gameBoard) == false && Winner(gameBoard) == false) {
            //user makes a move
        //}
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

        if (this.randomIndex() <= 1){
            this.board[i][j].value = 2;
        }
    
        else{
            this.board[i][j].value = 4;
        }
        return [i,j];
    }
    //handles keyboard input and moves blocks
    move(key) {
        if(key == "w" || key == "ArrowUp") {
            this.MoveUp(this.board);
        }else if(key == "a" || key == "ArrowLeft") {
            this.MoveLeft(this.board);
        }else if(key == "s" || key == "ArrowDown") {
            this.MoveDown(this.board);
        }else if(key == "d" || key == "ArrowRight") {
            this.MoveRight(this.board);  
        }

        this.ui.drawBoard(this.board);
        if(this.EndGame(this.board) == true || this.Winner(this.board) == true) {
            this.ui.displayGameOver(this.Winner(this.board));
        }
    }
    MoveRight(userBoard){
        var testBlock = [];
        for (var w = 0; w < userBoard.length; w++){
            testBlock.push([]);
            for (var z = 0; z < userBoard.length; z++){
                testBlock[w][z] = new Block(w, z, userBoard[w][z].value);
            }
        }
        let counter = 0;
        userBoard = this.ShiftRight(userBoard);
        for (let i = 0; i < userBoard.length; i++){
            for(let j = userBoard.length - 1; j >= 0; j-- ){
                var block = userBoard[i][j];
                
                //add matches
                if (block.col > 0 && userBoard[i][block.col].value == userBoard[i][block.col - 1].value){
                    userBoard[i][block.col].value = block.value *= 2;
                    userBoard[i][block.col - 1].value = 0;
                    counter++;
                    
                }
                
            
            }
    
    
    
        }
        userBoard = this.ShiftRight(userBoard);
        //if (counter > 0){
            var sum = 0;

            for (var b = 0; b < userBoard.length;b++){
                for(var c = 0; c < userBoard.length;c++){
                    //console.log(userBoard[b][c]);
                    //console.log(testBlock[b][c]);
                    if (userBoard[b][c].value == testBlock[b][c].value){
                        sum++;
         c
                    }
                }
            }
        
            if (sum < 16){
                this.spawn(userBoard);
            }
        //}
        //values(userBoard);
        return userBoard;
    
    }
    ShiftRight(userBoard){
    
        for (i = 0; i < userBoard.length; i++){
            for(j = userBoard.length - 1; j >= 0; j-- ){
                var block = userBoard[i][j];
                
                
                while(block.value > 0 && (block.col < userBoard.length - 1) && (block.col >= 0) && (userBoard[i][block.col + 1].value == 0 )){
                    if (userBoard[i][block.col + 1].value == 0 ){
                        let temp = userBoard[i][block.col + 1].value;
                        userBoard[i][block.col + 1].value = userBoard[i][block.col].value;
                        userBoard[i][block.col].value = temp;
                        counter++;
                        block = userBoard[i][block.col + 1];
    
    
                    }
                    
                    
                }
    
            }
        }
        return userBoard;
    
    
    }
    MoveLeft(userBoard){
        var testBlock = [];
        for (var w = 0; w < userBoard.length; w++){
            testBlock.push([]);
            for (var z = 0; z < userBoard.length; z++){
                testBlock[w][z] = new Block(w, z, userBoard[w][z].value);
            }
        }
        let counter = 0;
        userBoard = ShiftLeft(userBoard);
        for (let i = 0; i < userBoard.length; i++){
            for(let j = 0; j < userBoard.length; j++ ){
                var block = userBoard[i][j];
                
    
                if (block.col < userBoard.length - 1 && userBoard[i][block.col].value == userBoard[i][block.col + 1].value){
                    userBoard[i][block.col].value = block.value *= 2;
                    userBoard[i][block.col + 1].value = 0;
                    counter++;
                    
                }
                
            
            }
    
    
    
        }
        userBoard = ShiftLeft(userBoard);
        //if (counter > 0){
            var sum = 0;

            for (var b = 0; b < userBoard.length;b++){
                for(var c = 0; c < userBoard.length;c++){
                    //console.log(userBoard[b][c]);
                    //console.log(testBlock[b][c]);
                    if (userBoard[b][c].value == testBlock[b][c].value){
                        sum++;
         c
                    }
                }
            }
        
            if (sum < 16){
                this.spawn(userBoard);
            }
        //}
        return userBoard;
    
    }
    ShiftLeft(userBoard){
        for (let i = 0; i < userBoard.length; i++){
            for(let j = 0; j < userBoard.length; j++ ){
                var block = userBoard[i][j];
                
                
                while(block.value > 0 && (block.col > 0) && (block.col < userBoard.length) && (userBoard[i][block.col - 1].value == 0)){
                    let temp = userBoard[i][block.col - 1].value;
                    userBoard[i][block.col - 1].value = userBoard[i][block.col].value;
                    userBoard[i][block.col].value = temp;
                    counter++;
                    block = userBoard[i][block.col - 1];
    
    
                }
                    
                    
            }
    
        }
    
        return userBoard;
    
    }
    MoveUp(userBoard){
        var testBlock = [];
        for (var w = 0; w < userBoard.length; w++){
            testBlock.push([]);
            for (var z = 0; z < userBoard.length; z++){
                testBlock[w][z] = new Block(w, z, userBoard[w][z].value);
            }
        }
        let counter = 0;
    
        userBoard = ShiftUp(userBoard);
        for (let i = 0; i < userBoard.length; i++){
            for(let j = 0; j < userBoard.length; j++ ){
                var block = userBoard[i][j];
                
    
                if (block.row < userBoard.length - 1 && userBoard[block.row][j].value == userBoard[block.row + 1][j].value){
                    userBoard[block.row][j].value = block.value *= 2;
                    userBoard[block.row + 1][j].value = 0;
                    counter++;
                    
                }
                
            
            }
    
    
    
        }
        userBoard = ShiftUp(userBoard);
        //if (counter > 0){
            var sum = 0;

            for (var b = 0; b < userBoard.length;b++){
                for(var c = 0; c < userBoard.length;c++){
                    //console.log(userBoard[b][c]);
                    //console.log(testBlock[b][c]);
                    if (userBoard[b][c].value == testBlock[b][c].value){
                        sum++;
         c
                    }
                }
            }
        
            if (sum < 16){
                this.spawn(userBoard);
            }
        //}
        return userBoard;
    
    }
    ShiftUp(userBoard){

        for (let i = 0; i < userBoard.length; i++){
            for(let j = 0; j < userBoard.length; j++ ){
                var block = userBoard[i][j];
    
                while(block.value > 0 && (block.row > 0) && (userBoard[block.row - 1][j].value == 0)){
                    let temp = userBoard[block.row - 1][j].value;
                    userBoard[block.row - 1][j].value = userBoard[block.row][j].value;
                    userBoard[block.row][j].value = temp;
                    counter++;
                    block = userBoard[block.row - 1][j];
    
                   
    
                }
    
            }
    
        }
    
        return userBoard;
    
    }
    MoveDown(userBoard){
        var testBlock = [];
        for (var w = 0; w < userBoard.length; w++){
            testBlock.push([]);
            for (var z = 0; z < userBoard.length; z++){
                testBlock[w][z] = new Block(w, z, userBoard[w][z].value);
            }
        }
        let counter = 0;
        userBoard = ShiftDown(userBoard);
        for (let i = userBoard.length - 1; i >= 0; i--){
            for(let j = userBoard.length - 1; j >= 0; j-- ){
                var block = userBoard[i][j];
                
    
                if (block.row > 0 && userBoard[block.row][j].value == userBoard[block.row - 1][j].value){
                    userBoard[block.row][j].value = block.value *= 2;
                    userBoard[block.row - 1][j].value = 0;
                    counter++;
                    
                }
                
            
            }
    
    
    
        }
        userBoard = ShiftDown(userBoard);
        //if (counter > 0){
            var sum = 0;

            for (var b = 0; b < userBoard.length;b++){
                for(var c = 0; c < userBoard.length;c++){
                    //console.log(userBoard[b][c]);
                    //console.log(testBlock[b][c]);
                    if (userBoard[b][c].value == testBlock[b][c].value){
                        sum++;
         c
                    }
                }
            }
        
            if (sum < 16){
                this.spawn(userBoard);
            }
        //}
        return userBoard;
    
    }
    ShiftDown(userBoard){

        for (let i = userBoard.length - 1; i >= 0; i--){
            for(let j = userBoard.length - 1; j >= 0; j-- ){
                var block = userBoard[i][j];
                
                
                while(block.value > 0 && (block.row < userBoard.length - 1) && (block.row >= 0) && (userBoard[block.row + 1][j].value == 0 )){
                    if (userBoard[block.row + 1][j].value == 0 ){
                        let temp = userBoard[block.row + 1][j].value;
                        userBoard[block.row + 1][j].value = userBoard[block.row][j].value;
                        userBoard[block.row][j].value = temp;
                        counter++;
                        block = userBoard[block.row + 1][j];
    
    
                    }
                    
                    
                }
    
            }
        }
        return userBoard;
    
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

    FindAdjacentTiles(userBlock, userBoard){
        var adjacentBlocks = [];
        
        for ( var i = 0; i < userBoard.length; i++){
            for (var j = 0; j < userBoard.length; j++){
                var currentBlock = userBoard[i][j];
                if (currentBlock.row == userBlock.row && Math.abs(currentBlock.col - userBlock.col) == 1){
    
                    adjacentBlocks.push(new Block(currentBlock.row, currentBlock.col, currentBlock.value));
                }
                if (Math.abs(currentBlock.row - userBlock.row) == 1 && (currentBlock.col == userBlock.col)){
                    adjacentBlocks.push(new Block(currentBlock.row, currentBlock.col, currentBlock.value));
                }
    
    
            }
        }
        return adjacentBlocks;
    
    
    }
    //returns true if game is over
    EndGame(userBoard){


        for ( var i = 0; i < userBoard.length;  i++){
            for ( var j = 0; j < userBoard.length; j++){
                var block = userBoard[i][j];
                var tiles = FindAdjacentTiles(block, userBoard);
                for (let k = 0; k < tiles.length; k++){
                    if (tiles[k].value == block.value || tiles[k].value == 0){
                        return false;
                    }
                    
                }
            }
        }
        return true;
    }
    Winner(userBoard){
        for (i = 0; i < userBoard.length; i++){
            for (j = 0; j < userBoard.length; j++){
                if(userBoard[i][j].value == 2048){
                    return true;
                }
            }
        }
        return false;
    }
    spawn(userBoard){

        i = RandomIndex();
        j = RandomIndex();
    
        while (userBoard[i][j].value != 0 ){
            i = RandomIndex();
            j = RandomIndex();
        }
    
        if (RandomIndex() <= 1){
            userBoard[i][j].value = 2;
        }
    
        else{
            userBoard[i][j].value = 4;
        }
    
    }
}