class Game {
    constructor(board) {
        
        for(let row = 0; row < board.board.length; row++)
        {
            for(let column = 0; column < board.board[row].length; column++)
            {
                if(typeof(board.board[row][column]) == "EmptyCard")
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
        
        if(this.emptyCardIndex.row == destination.row)
        {
            return this.emptyCardIndex.column + 1 == destination.column || 
                   this.emptyCardIndex.column - 1 == destination.column
        }
        else if(this.emptyCardIndex.column == destination.column)
        {
            return this.emptyCardIndex.row + 1 == destination.row || 
                   this.emptyCardIndex.row - 1 == destination.row
        }
        return false
    }

    isWon() {
        let won = true
        let lastCard = null
        let sequance = []
        
        this.board.board.forEach((row) => {
            sequance = sequance.concat(row)
        })

        sequance.every((card) => {
            if(card.value != NaN) 
            {
                if(lastCard != null)
                {
                    won = (lastCard.value + 1 == card.value)
                }
                lastCard = card
            }
            
            return won
        })

        won = won && (typeof(lastCard) == "EmptyCard")
        return won
    }
}