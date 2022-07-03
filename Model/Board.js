class Board {
    constructor(cardList) {
        let edgeLength = Math.floor(Math.sqrt(cardList.length))

        this.board = []
        
        for (let i = 0; i < edgeLength; i++) {
            let row = []
            for (let j = 0; j < edgeLength; j++) {
                row.push(cardList[i * edgeLength + j])
            }
            this.board.push(row)
        }
    }

    // swap between elements
    // gets indexes in format {row: x, column: y}
    swap(source, destination) {
        let temporary = this.board[destination.row][destination.column];
        this.board[destination.row][destination.column] = this.board[source.row][source.column]
        this.board[source.row][source.column] = temporary
    }
}