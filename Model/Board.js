class Board {
    constructor(cardList, boardBuilder) {
        this.board = boardBuilder.build(cardList)
    }

    swap(source, destination) {
        if('row' in source &&
           'row' in destination &&
           'column' in source && 
           'column' in destination)
        {
            //check range
            if(this.board.length > destination.row && 
               this.board[destination.row].length > destination.column && 
               this.board.length > source.row && 
               this.board[source.row].length > source.column)
            {
                let temporary = this.board[destination.row][destination.column];
                this.board[destination.row][destination.column] = this.board[source.row][source.column]
                this.board[source.row][source.column] = temporary
            }
            else
            {
                throw new RangeError("Invalid source / destination")
            }
        }
        else
        {
            throw new TypeError("Indexes should be in format {row: x, column: y}")
        }
    }
}