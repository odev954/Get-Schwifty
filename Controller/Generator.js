class Generator extends GeneratorBase {
    constructor(cardsAmount) {
        super(cardsAmount)

    }

    shuffle(sequance) {
        return sequance.sort(() => Math.random() - 0.5)
    }

    isSequanceValid(sequance) {
        let score = 0
        for(let checkedCard in sequance) {
            for(let card in sequance) {
                if(checkedCard !== card) {
                    if(card.value != NaN && card.value < checkedCard.value)
                    {
                        score++
                    }
                }
            }
        }

        if(sequance.length % 2 == 0) 
        {
            let counter = 0;
            const SIZE = Math.floor(Math.sqrt(sequance.length))
            for(let card in sequance) 
            {
                if(card.value == NaN) 
                {
                    score += Math.floor(counter / SIZE)
                    break
                }
                counter++
            }
        }

        return score % 2 == 0
    }

    generate() {
        sequance = this.cards
        
        do
        {
            sequance = shuffle(sequance)

        } while(!this.isSequanceValid())

        return sequance
    }
}