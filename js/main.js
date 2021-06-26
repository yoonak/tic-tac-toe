import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game()
let gameView = new GameView()

document.querySelector(".restart").addEventListener("click", () => {
  onRestartClick()
})

document.querySelector(".result-box .btn").addEventListener("click", () => {
  onRestartClick()
})

document.getElementById('chk').addEventListener('change', () => {
  document.body.classList.toggle('dark');
  document.querySelector('h1').classList.toggle('dark');
  document.querySelector('.restart').classList.toggle('dark');
});

let tiles = document.querySelectorAll(".board-tile")
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index)
  })
})

function onTileClick(i) {
  // make a move 
  game.makeMove(i)

  // update board
  gameView.updateBoard(game)
}

//Restart new game
function onRestartClick() {
  game = new Game()
  gameView.updateBoard(game)
}

gameView.updateBoard(game)