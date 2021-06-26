export default class GameView {

  updateBoard(game) {
    let result = document.querySelector(".result-box")
    let overlay = document.querySelector(".overlay")
    let body = document.querySelector("body")
    result.classList.remove("open")
    overlay.classList.remove("open")
    body.style.overflow = "auto";
    this.updateTurn(game)

    const winningCombination = game.findWinningCombinations()
      for(let i =0; i < game.board.length; i++){
        const tile = document.querySelector(`.board-tile[data-index='${i}']`);
        tile.classList.remove("tile-winner")
        
        let tileType = game.board[i] == 'X' ? "tile-x" : "tile-o"
        tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`
        
        //result box modal
        let text = document.querySelector(".result-box .text")

        if (winningCombination && winningCombination.includes(i)) {
          tile.classList.add("tile-winner")
          text.textContent = `Congratulation 🎉 Winner is Player ${game.board[i]}!`
          result.classList.add("open")
          overlay.classList.add("open")
          body.style.overflow = "hidden";
        }
      }
  }

  updateTurn(game) {
    let playerX = document.querySelector(".player-X")
    let playerO = document.querySelector(".player-O")

    if (game.turn == 'X') {
      playerX.classList.add('active')
      playerO.classList.remove('active')
      
    } else {
      playerO.classList.add('active')
      playerX.classList.remove('active')
    }

  }
}