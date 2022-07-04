function main() {
    let gen = new Generator(8)
    let board = new Board(gen.generate(), new GameBoardBuilder())

    board.board.forEach((row) =>
    {
        console.log(...row)
    })
}

main()