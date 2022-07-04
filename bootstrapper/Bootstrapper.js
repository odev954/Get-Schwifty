class Bootstrapper {
    constructor() {
        this.generator = new Generator(8)
        this.board = new Board(this.generator.generate(), new GameBoardBuilder())
        this.game = new Game(this.board)
        this.viewer = new ViewControl(this.game)
    }

    init() {
        let boardDisplay = new BoardDisplayer(this.game.board)
        boardDisplay.display(this.viewer.onCardClick)
    }
}