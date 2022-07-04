class ViewControl {
    constructor(game) {
        this.game = game
    }

    onCardClick(destination) {
        let hadError = false
        try 
        {
            this.game.doMove(destination)
        }
        catch(error)
        {
            console.log("ERROR: " + error)
            hadError = true
        }

        if(!hadError)
        {
            if(this.game.isWon())
            {
                let wonDisplayer = new WinningDisplayer()
                wonDisplayer.display()
            }
            let boardDisplay = new BoardDisplayer(this.game.board.board)
            boardDisplay.display(this)
        }
    }
}