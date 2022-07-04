class BoardDisplayer extends Displayer {
    constructor(board) {
        super(board)
    }

    display(onClickEventHandler) {
        const BOARD = document.getElementById("board")
        
        BOARD.innerHTML = ''
        index = {row: 0, column: 0}

        this.object.forEach((row) => {
            
            row.forEach((card) => {
                let cardContainer = document.createElement("div")
                let cardButton = document.createElement("button")
                
                cardContainer.classList.add("card")
                
                cardButton.classList.add("card-button")
                cardButton.textContent = card.value.toString()
                cardButton.setAttribute("index", JSON.stringify(index))
                cardButton.onclick = () => {
                    onClickEventHandler(JSON.parse(cardButton.getAttribute("index")))
                }
                
                cardContainer.appendChild(cardButton)
                BOARD.appendChild(cardContainer)

                index.column++
            })
            index.column = 0
            index.row++
        })
    }
}