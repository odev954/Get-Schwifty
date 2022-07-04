class Bootstrapper {
    constructor() {
        this.generator = new Generator(8)
        this.board = new Board(this.generator.generate(), new GameBoardBuilder())
        this.game = new Game(this.board)
        this.viewController = new ViewControl(this.game)
    }

    init() {
        let replayButton = document.getElementById('replayButton')
        let boardDisplay = new BoardDisplayer(this.game.board.board)
        boardDisplay.display(this.viewController)

        replayButton.addEventListener('click', () => {
            this.board = new Board(this.generator.generate(), new GameBoardBuilder())
            this.game.setupGame(this.board)

            let boardDisplay = new BoardDisplayer(this.game.board.board)
            boardDisplay.display(this.viewController)
        })
    }
}