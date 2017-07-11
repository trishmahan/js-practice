var gameBoard = [["-","-","-"], 
                 ["-","-","-"], 
                 ["-","-","-"]]       
function drawBoard(gameBoard){
    console.log("    0   1   2");
    for (var i = 0; i < 3; i++) {
        console.log("   --- --- ---");
        console.log(i + " | " + gameBoard[i][0] + " | " + gameBoard[i][1] + " | " + gameBoard[i][2] + " |");
    }
    console.log("   --- --- ---");
}

function checkRowsColumnsForWinner(gameBoard){
    for (var x = 0; x < 3; x++) {
        if (gameBoard[x][0] != "-") {
            var row = [gameBoard[x][0], gameBoard[x][1], gameBoard[x][2]];
            if (row[0] == row[1] && row[0] == row[2]){
                if (row[0] == "O") {
                    return "O";
                } else {
                    return "X";
                }
            }
        }
        if (gameBoard[0][x] != "-") {
            var column = [gameBoard[0][x], gameBoard[1][x], gameBoard[2][x]];
            if (column[0] == column[1] && column[0] == column[2]){
                if (column[0] == "O") {
                    return "O";
                } else {
                    return "X";
                }

            }
        }
    }
    return "False"
}

function checkDiagonalsForWinner(gameBoard){
    if (gameBoard[1][1] != "-"){
        var diagonalOne = [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]];
        var diagonalTwo = [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]];
        if (diagonalOne[0] == diagonalOne[1] && diagonalOne[1] == diagonalOne[2]) {
            return ("The winner is player " + diagonalOne[1]);
        }
        if (diagonalTwo[0] == diagonalTwo[1] && diagonalTwo[1] == diagonalTwo[2]) {
            return ("The winner is player " + diagonalTwo[1]);
        }
        return "False";
    }
    else {
        return "False";
    }
}

drawBoard(gameBoard);
console.log(checkRowsColumnsForWinner(gameBoard));
prompt("Where do you want your name?");
