counter = 0;
class Block {
    constructor(row, col, value){
        this.row = row;
        this.col = col;
        this.value = value;
    }
}

function RandomIndex(){
    value = Math.random() * 40;

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

function createBoard(row, col){
    board = [];
    for (i = 0; i < row; i++){
        board.push([]);
        for(j = 0; j < col; j++){
            board[i].push(new Block(i, j, 0));
        }
    }

    /*for (i = 0; i < row; i++){
        for (j = 0; j < col; j++){
            //board[i][j] = new Block(i, j, 0);
        }
    }
    */
    i = RandomIndex();
    j = RandomIndex();
    board[i][j].value = 2;

    i = RandomIndex();
    j = RandomIndex();

    while (board[i][j].value == 2){
        i = RandomIndex();
        j = RandomIndex();
    }
    board[i][j].value = 2;

   



    return board;
}

function values(userBoard){
    arry = [];
    for (i = 0; i < userBoard.length; i++){
        arry.push([])
        for(j = 0; j < userBoard.length; j++ ){
            arry[i].push(userBoard[i][j].value);
        }
    }
    for (i = 0; i < userBoard.length; i++){
        console.log(...arry[i] + "\n");
    }
    console.log("\n\n\n");
    

}
function ShiftRight(userBoard){
    
    for (i = 0; i < userBoard.length; i++){
        for(j = userBoard.length - 1; j >= 0; j-- ){
            var block = userBoard[i][j];
            
            
            while(block.value > 0 && (block.col < userBoard.length - 1) && (block.col >= 0) && (userBoard[i][block.col + 1].value == 0 )){
                if (userBoard[i][block.col + 1].value == 0 ){
                    temp = userBoard[i][block.col + 1].value;
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

function MoveRight(userBoard){
   
    counter = 0;
    userBoard = ShiftRight(userBoard);
    for (i = 0; i < userBoard.length; i++){
        for(j = userBoard.length - 1; j >= 0; j-- ){
            var block = userBoard[i][j];
            

            if (block.col > 0 && userBoard[i][block.col].value == userBoard[i][block.col - 1].value){
                userBoard[i][block.col].value = block.value *= 2;
                userBoard[i][block.col - 1].value = 0;
                counter++;
                
            }
            
        
        }



    }
    userBoard = ShiftRight(userBoard);
    if (counter > 0){
        spawn(userBoard);
    }
    
    values(userBoard);
    return userBoard;

}

function ShiftLeft(userBoard){
    for (i = 0; i < userBoard.length; i++){
        for(j = 0; j < userBoard.length; j++ ){
            var block = userBoard[i][j];
            
            
            while(block.value > 0 && (block.col > 0) && (block.col < userBoard.length) && (userBoard[i][block.col - 1].value == 0)){
                temp = userBoard[i][block.col - 1].value;
                userBoard[i][block.col - 1].value = userBoard[i][block.col].value;
                userBoard[i][block.col].value = temp;
                counter++;
                block = userBoard[i][block.col - 1];


            }
                
                
        }

    }

    return userBoard;

}

function MoveLeft(userBoard){
    counter = 0;
    userBoard = ShiftLeft(userBoard);
    for (i = 0; i < userBoard.length; i++){
        for(j = 0; j < userBoard.length; j++ ){
            var block = userBoard[i][j];
            

            if (block.col < userBoard.length - 1 && userBoard[i][block.col].value == userBoard[i][block.col + 1].value){
                userBoard[i][block.col].value = block.value *= 2;
                userBoard[i][block.col + 1].value = 0;
                counter++;
                
            }
            
        
        }



    }
    userBoard = ShiftLeft(userBoard);
    if (counter > 0){
        spawn(userBoard);
    }
    values(userBoard);
    return userBoard;

}

function ShiftUp(userBoard){

    for (i = 0; i < userBoard.length; i++){
        for(j = 0; j < userBoard.length; j++ ){
            var block = userBoard[i][j];

            while(block.value > 0 && (block.row > 0) && (userBoard[block.row - 1][j].value == 0)){
                temp = userBoard[block.row - 1][j].value;
                userBoard[block.row - 1][j].value = userBoard[block.row][j].value;
                userBoard[block.row][j].value = temp;
                counter++;
                block = userBoard[block.row - 1][j];

               

            }

        }

    }

    return userBoard;

}

function MoveUp(userBoard){
    counter = 0;

    userBoard = ShiftUp(userBoard);
    for (i = 0; i < userBoard.length; i++){
        for(j = 0; j < userBoard.length; j++ ){
            var block = userBoard[i][j];
            

            if (block.row < userBoard.length - 1 && userBoard[block.row][j].value == userBoard[block.row + 1][j].value){
                userBoard[block.row][j].value = block.value *= 2;
                userBoard[block.row + 1][j].value = 0;
                counter++;
                
            }
            
        
        }



    }
    userBoard = ShiftUp(userBoard);
    if (counter > 0){
        spawn(userBoard);
    }
    values(userBoard);
    return userBoard;

}

function ShiftDown(userBoard){

    for (i = userBoard.length - 1; i >= 0; i--){
        for(j = userBoard.length - 1; j >= 0; j-- ){
            var block = userBoard[i][j];
            
            
            while(block.value > 0 && (block.row < userBoard.length - 1) && (block.row >= 0) && (userBoard[block.row + 1][j].value == 0 )){
                if (userBoard[block.row + 1][j].value == 0 ){
                    temp = userBoard[block.row + 1][j].value;
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

function MoveDown(userBoard){
    counter = 0;
    userBoard = ShiftDown(userBoard);
    for (i = userBoard.length - 1; i >= 0; i--){
        for(j = userBoard.length - 1; j >= 0; j-- ){
            var block = userBoard[i][j];
            

            if (block.row > 0 && userBoard[block.row][j].value == userBoard[block.row - 1][j].value){
                userBoard[block.row][j].value = block.value *= 2;
                userBoard[block.row - 1][j].value = 0;
                counter++;
                
            }
            
        
        }



    }
    userBoard = ShiftDown(userBoard);
    if (counter > 0){
        spawn(userBoard);
    }
    values(userBoard);
    return userBoard;

}

 
function spawn(userBoard){

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

function FindAdjacentTiles(userBlock, userBoard){
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

function EndGame(userBoard){


    for ( var i = 0; i < userBoard.length;  i++){
        for ( var j = 0; j < userBoard.length; j++){
            var block = userBoard[i][j];
            var tiles = FindAdjacentTiles(block, userBoard);
            for (k = 0; k < tiles.length; k++){
                if (tiles[k].value == block.value || tiles[k].value == 0){
                    return false;
                }
                
            }
        }
    }
    return true;
}

function Winner(userBoard){
    for (i = 0; i < userBoard.length; i++){
        for (j = 0; j < userBoard.length; j++){
            if(userBoard[i][j].value == 2048){
                return true;
            }
        }
    }
    return false;
}

var gameBoard = createBoard(4 , 4);

values(gameBoard);






while(EndGame(gameBoard) == false && Winner(gameBoard) == false){

    var num = RandomIndex();

    if (num == 0){
        console.log("down");
        MoveDown(gameBoard);
        

    }
    else if (num == 1){
        console.log("up");
        MoveUp(gameBoard);

    }
    else if (num == 2){
        console.log("right");
        MoveRight(gameBoard);

    }

    else{
        console.log("left");
        MoveLeft(gameBoard);

    }
}


if (Winner(gameBoard) == true){
    console.log("Congrats! You Won");
}
else{
    console.log("You suck!");
}




