class BoardDisplayer extends Displayer {
    constructor(board) {
        super(board)
    }

    display(viewController) {
        let boardElement = document.getElementById("board")
        
        boardElement.innerHTML = ''
        let index = {row: 0, column: 0}

        this.object.forEach((row) => {
            row.forEach((card) => {
                let cardContainer = document.createElement("div")
                let cardButton = document.createElement("button")
                
                cardContainer.classList.add("card")
                
                cardButton.classList.add("card-button")
                cardButton.textContent = !isNaN(card.value) ? card.value.toString() : ""
                cardButton.setAttribute("index", JSON.stringify(index))
                cardButton.onclick = () => {
                    viewController.onCardClick(JSON.parse(cardButton.getAttribute("index")))
                }
                
                cardContainer.appendChild(cardButton)
                boardElement.appendChild(cardContainer)

                index.column++
            })
            index.column = 0
            index.row++
        })
    }
}