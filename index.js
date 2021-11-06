//plays the game...
let ui = new UIHandler();
let play = new Game(ui);

ui.sizeGrid();
document.addEventListener("keydown", play.move);
play.startGame(4,4);