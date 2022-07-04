class GameBoardBuilder extends BoardBuidlerBase {
    constructor() {
        super()
    }

    build(cardList) {
        let board = []
        let edgeLength = Math.floor(Math.sqrt(cardList.length))
        for (let i = 0; i < edgeLength; i++) {
            let row = []
            for (let j = 0; j < edgeLength; j++) {
                row.push(cardList[i * edgeLength + j])
            }
            board.push(row)
        }
        return board
    }
}