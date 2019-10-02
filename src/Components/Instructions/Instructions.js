import React from 'react'
import './Instructions.css'

const Instructions = _ => {
    return (
        <div id='instructions'>
            <li id='rule1'>
                You will be given a random number at the start of the game.
            </li>
            <li id='rule2'>
                There are four crystals below. Clicking on a crystal will add a specific amount of points to your total user score.
            </li>
            <li id='rule3'>
                You win the game by matching your total user score to the game score. You lose the game if your total score goes above the game score.
            </li>
            <li>
                The value of each crystal is hidden until you click on it. Each time the game starts, the game will change the values of each crystal and game score.
            </li>
        </div>
    )
}

export default Instructions