class Generator extends GeneratorBase {
    constructor(cardsAmount) {
        super(cardsAmount)

    }

    shuffle(sequance) {
        return sequance.sort(() => Math.random() - 0.5)
    }

    isSequanceValid(sequance) {
        let score = 0

        for(let i = 0; i < sequance.length; i++) 
        {
            if(sequance[i].value != NaN) 
            {
                for(let j = i; j < sequance.length; j++) 
                {
                    if(sequance[j].value != NaN && sequance[j].value < sequance[i].value)
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
            
            sequance.forEach((card) => {
                if(card.value == NaN) 
                {
                    score += Math.floor(counter / SIZE)
                }
                counter++
            })
        }

        return score % 2 == 0
    }

    generate() {
        let sequance = this.cards
        
        do
        {
            sequance = this.shuffle(sequance)

        } while(!this.isSequanceValid(sequance))

        return sequance
    }
}