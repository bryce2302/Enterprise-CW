import React from 'react'
import { useState } from 'react'
import bat from './../assets/images/bat.png'
import blobfish from './../assets/images/blobfish.png'
import monkey from './../assets/images/monkey.png'
import turtle from './../assets/images/turtle.png'
import goblin from './../assets/images/goblin.png'
import rat from './../assets/images/rat.png'




const cardImages = [
    {"src" : bat},
    {"src" : blobfish},
    {"src" : monkey},
    {"src" : turtle},
    {"src" : goblin},
    {"src" : rat}
]


function Game() {
    const [cards,setCards] = useState ([])
    const [turns, setTurns] = useState (0)

    

//shuffle cards
const shuffleCards = () => {
    const shuffledCards = [...cardImages,...cardImages]
        .sort(() => Math.random() -0.5)
        .map((card) => ({...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
}

console.log(cards, turns)

return(
    <div className = 'Game'>
        <h1>Magic Match</h1>
        <button onClick={shuffleCards}>New Game</button>

    <div className ="card-grid">
        {cards.map(card => (
            <SingleCard key = {card.id} card={card} />
        ))}
    </div>
    </div>
);
}

export default Game