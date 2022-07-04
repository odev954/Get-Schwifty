class Game {
    constructor(board) {
        
        for(let row = 0; row < board.board.length; row++)
        {
            for(let column = 0; column < board.board[row].length; column++)
            {
                if(typeof(board.board[row][column].value) == "EmptyCard")
                {
                    this.emptyCardIndex = { row: row, column: column }
                }
            }
        }
        this.board = board
    }

    doMove(destination) {
        if(this.isValidMove(destination))
        {
            this.board.swap(this.emptyCardIndex, destination)
        }
        else
        {
            throw new Error("Invalid move")
        }
    }

    isValidMove(destination) {
        return true
    }

    isWon() {
        return false
    }
}