

class TicTacToe {

  constructor(){
    this.board = this.make_board();
    this.add_reset();
    this.player_one = new Player("one","X")
    this.player_two = new Player("two","O")
    this.counter = 0;
    this.win_pos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
    this.win = false;
    this.win_array = [];
  }

  make_click(){
    let child = [...document.querySelectorAll(".child")]
    child.forEach( (n) => {
      n.addEventListener("click", (e) => {

        if(this.board[e.target.id - 1] === 1){
        this.update_board(e.target.id);
        e.target.innerText = this.board[e.target.id-1]
        this.test_winner();
        }

      })
    })
  }

  make_board(){
    return this.board = [1,1,1,1,1,1,1,1,1]
  }

  update_board(target){
    if(this.counter % 2 == 0){
      this.board[target-1] = "X"
    }else {
      this.board[target-1] = "O"
    }
    console.log(this.counter)
    this.counter++;
  }

  add_reset(){
    let button = document.querySelector("button")
    let child = [...document.querySelectorAll(".child")]
    button.addEventListener("click",() => {
      child.forEach( (n) => {
        n.innerText = ""
        this.win_array = [];
        this.board = [1,1,1,1,1,1,1,1,1]
        this.counter = 0;
      })
    })
  }

  test_winner(){
    this.win_pos.forEach( (arr) => {
      arr.forEach( (n) => {
        this.win_array.push(this.board[n])
      })
      if(this.win_array.every( (n) => n == "X")){
        this.win = "X"
      }
      if(this.win_array.every( (n) => n == "O")){
        this.win = "O"
      }
      this.win_array = [];
    })
    this.game_over();
  }

  reset(){
    let child = [...document.querySelectorAll(".child")]
      child.forEach( (n) => {
        n.innerText = ""
        this.win = false;
        this.win_array = [];
        this.board = [1,1,1,1,1,1,1,1,1]
        this.counter = 0;
      })
  }

  game_over(){
    if(this.win !== false){

      setTimeout( (n) => {
        alert(`Winner is ${this.win}`)
      this.reset();
      return true;
      },500)

    }
    return false;
  }

  
}