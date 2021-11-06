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
    

}
function ShiftRight(userBoard){
    
    for (i = 0; i < userBoard.length; i++){
        for(j = userBoard.length - 1; j >= 0; j-- ){
            var block = userBoard[i][j];
            
            
            while((block.col < userBoard.length - 1) && (block.col >= 0) && (userBoard[i][block.col + 1].value == 0 )){
                if (userBoard[i][block.col + 1].value == 0 ){
                    temp = userBoard[i][block.col + 1].value;
                    userBoard[i][block.col + 1].value = userBoard[i][block.col].value;
                    userBoard[i][block.col].value = temp;
                    
                    block = userBoard[i][block.col + 1];


                }
                
                
            }

        }
    }
    return userBoard;


}

function MoveRight(userBoard){
   

    userBoard = ShiftRight(userBoard);
    for (i = 0; i < userBoard.length; i++){
        for(j = userBoard.length - 1; j >= 0; j-- ){
            var block = userBoard[i][j];
            

            if (block.col > 0 && userBoard[i][block.col].value == userBoard[i][block.col - 1].value){
                userBoard[i][block.col].value = block.value *= 2;
                userBoard[i][block.col - 1].value = 0;
                
            }
            
        
        }



    }
    userBoard = ShiftRight(userBoard);
    spawn(userBoard);
    return userBoard;

}

function ShiftLeft(userBoard){
    for (i = 0; i < userBoard.length; i++){
        for(j = 0; j < userBoard.length; j++ ){
            var block = userBoard[i][j];
            
            
            while((block.col > 0) && (block.col < userBoard.length) && (userBoard[i][block.col - 1].value == 0)){
                temp = userBoard[i][block.col - 1].value;
                userBoard[i][block.col - 1].value = userBoard[i][block.col].value;
                userBoard[i][block.col].value = temp;
                    
                block = userBoard[i][block.col - 1];


            }
                
                
        }

    }

    return userBoard;

}

function MoveLeft(userBoard){

    userBoard = ShiftLeft(userBoard);
    for (i = 0; i < userBoard.length; i++){
        for(j = 0; j < userBoard.length; j++ ){
            var block = userBoard[i][j];
            

            if (block.col < userBoard.length - 1 && userBoard[i][block.col].value == userBoard[i][block.col + 1].value){
                userBoard[i][block.col].value = block.value *= 2;
                userBoard[i][block.col + 1].value = 0;
                
            }
            
        
        }



    }
    userBoard = ShiftLeft(userBoard);
    spawn(userBoard);
    return userBoard;

}

function ShiftUp(userBoard){

    for (i = 0; i < userBoard.length; i++){
        for(j = 0; j < userBoard.length; j++ ){
            var block = userBoard[i][j];

            while((block.row > 0) && (userBoard[block.row - 1][j].value == 0)){
                temp = userBoard[block.row - 1][j].value;
                userBoard[block.row - 1][j].value = userBoard[block.row][j].value;
                userBoard[block.row][j].value = temp;
                    
                block = userBoard[block.row - 1][j];

               

            }

        }

    }

    return userBoard;

}

function MoveUp(userBoard){

    userBoard = ShiftUp(userBoard);
    for (i = 0; i < userBoard.length; i++){
        for(j = 0; j < userBoard.length; j++ ){
            var block = userBoard[i][j];
            

            if (block.row < userBoard.length - 1 && userBoard[block.row][j].value == userBoard[block.row + 1][j].value){
                userBoard[block.row][j].value = block.value *= 2;
                userBoard[block.row + 1][j].value = 0;
                
            }
            
        
        }



    }
    userBoard = ShiftUp(userBoard);
    spawn(userBoard);
    return userBoard;

}

function ShiftDown(userBoard){

    for (i = userBoard.length - 1; i >= 0; i--){
        for(j = userBoard.length - 1; j >= 0; j-- ){
            var block = userBoard[i][j];
            
            
            while((block.row < userBoard.length - 1) && (block.row >= 0) && (userBoard[block.row + 1][j].value == 0 )){
                if (userBoard[block.row + 1][j].value == 0 ){
                    temp = userBoard[block.row + 1][j].value;
                    userBoard[block.row + 1][j].value = userBoard[block.row][j].value;
                    userBoard[block.row][j].value = temp;
                    
                    block = userBoard[block.row + 1][j];


                }
                
                
            }

        }
    }
    return userBoard;

}

function MoveDown(userBoard){

    userBoard = ShiftDown(userBoard);
    for (i = userBoard.length - 1; i >= 0; i--){
        for(j = userBoard.length - 1; j >= 0; j-- ){
            var block = userBoard[i][j];
            

            if (block.row > 0 && userBoard[block.row][j].value == userBoard[block.row - 1][j].value){
                userBoard[block.row][j].value = block.value *= 2;
                userBoard[block.row - 1][j].value = 0;
                
            }
            
        
        }



    }
    userBoard = ShiftDown(userBoard);
    spawn(userBoard);
    return userBoard;

}

 



function spawn(userBoard){

    i = RandomIndex();
    j = RandomIndex();

    while (userBoard[i][j].value != 0 ){
        i = RandomIndex();
        j = RandomIndex();
    }

    userBoard[i][j].value = 2;
    
}






var gameBoard = createBoard(4 , 4);

values(gameBoard);




gameBoard = MoveDown(gameBoard);
console.log("\n\n\n");
values(gameBoard);
 




