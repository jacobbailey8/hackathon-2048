//takes gamestate info from Game.js and updates the page
function sizeGrid() {
    const grid = document.querySelector("#game-grid");
    grid.style.height = grid.clientWidth + "px";
}

window.onload = sizeGrid;
window.onresize = sizeGrid;