import React from 'react'
import { useState } from 'react'
import './Game.css'
import bat from './../assets/images/bat.png'

const cardImages = [
    {"src" : bat},
    {"src" : "C:/Users/Username/Enterprise-CW/Enterprise-CW/client/assets/images/blobfish.png"},
    {"src" : "./../assets/images/monkey.png"},
    {"src" : "/assests/images/turtle.png"},
    {"src" : "/assests/images/goblin.png"},
    {"src" : "/assests/images/rat.png"}
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
            <div className ="card" key={card.id}>
                <div>
                    <img className="front" src={card.src} alt="card front "/>
                    <img className="back" src = "/assests/images/cover.png" alt="back card "/>
                </div>
                </div>
        ))}
    </div>
    </div>
);
}

export default Game