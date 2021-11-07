//plays the game...
let ui = new UIHandler();
let play = new Game(ui);

ui.sizeGrid();
window.addEventListener("keydown", (e) => {
    let key = e.key;
    play.move(key);
});
play.startGame(4,4);