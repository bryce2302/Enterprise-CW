import React from 'react'
import { useState } from 'react'
import './Game.css'


const cardImages = [
    {"src" : "./assests/images/bat.png"},
    {"src" : "./assests/images/blobfish.png"},
    {"src" : "./assests/images/monkey.png"},
    {"src" : "./assests/images/turtle.png"},
    {"src" : "./assests/images/goblin.png"},
    {"src" : "./assests/images/rat.png"}
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
    </div>
);
}

export default Game