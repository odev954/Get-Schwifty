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
            let boardDisplay = new BoardDisplayer(this.game.board)
            boardDisplay.display(onCardClick)
        }
    }
}