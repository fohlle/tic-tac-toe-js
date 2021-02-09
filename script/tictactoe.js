

class TicTacToe {

  constructor(){
    this.board = this.make_board();
    this.add_reset();
    this.player_one = new Player("me","X")
    this.player_two = new Player("me","O")
  }

  make_click(){
    let child = [...document.querySelectorAll(".child")]
    child.forEach( (n) => {
      n.addEventListener("click", (e) => {
        e.target.innerText = this.board[e.target.id-1]
      })
    })
  }

  make_board(){
    return this.board = [11,"two",3,4,5,6,7,8,9]
  }

  update_board(player){
    this.board[0] = player.type
  }

  add_reset(){
    let button = document.querySelector("button")
    let child = [...document.querySelectorAll(".child")]
    button.addEventListener("click",() => {
      child.forEach( (n) => {
        n.innerText = ""
      })
    })
  }

  play(){
    this.update_board(this.player_one)
    this.update_board(this.player_two)
  }
}