class GeneratorBase {
    constructor(cardsAmount) {
        this.cards = []
        for(let i; i < cardsAmount.length; i++) {
            this.cards.push(new Card(i + 1))
        }
        this.cards.push(new EmptyCard())
    }
}