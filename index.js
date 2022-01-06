//plays the game...
let ui = new UIHandler();
let play = new Game(ui);

//play again button functionality
let resetButton = document.querySelector("#retry-prompt");
resetButton.addEventListener("click", () => {
    play.startGame(4,4);
    document.querySelector("#endgame-alert").classList.add("hidden");
});

ui.sizeGrid();
window.addEventListener("keydown", (e) => {
    let key = e.key;
    play.move(key);
});
play.startGame(4,4);
