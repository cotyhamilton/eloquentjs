size = 8;

function chessBoard(x) {
    var board = "";
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < x; j++) {
            if (board.length === 0) {
                board += "#";
            }
            else if (board.length % (x + 1) === 0) {
                if (board[board.length - (x + 1)] == "#") {
                    board += " ";
                }
                else {
                    board += "#";
                }
            }
            else if (board[board.length - 1] == " ") {
                board += "#";
            }
            else {
                board += " ";
            }
        }
        board += "\n";
    }
    return board;
}

console.log(chessBoard(size));

/* ----- OFFICIAL SOLUTION ----- *

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);

 * ----------------------------- */