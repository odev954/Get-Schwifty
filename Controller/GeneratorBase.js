class GeneratorBase {
    constructor(cardsAmount) {
        this.cards = []
        for(let i = 0; i < cardsAmount; i++) {
            this.cards.push(new Card(i + 1))
        }
        this.cards.push(new EmptyCard())
    }
}