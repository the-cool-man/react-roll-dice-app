import React from "react"
import Confetti from "react-confetti"
import Die from "./Die"
import {nanoid} from "nanoid";

export default function App() {


    const [dices, setDices] = React.useState(allNewDice())

    function allNewDice() {
        let diceArray = []
        for(let i = 0; i<10; i++) {
            diceArray.push({ 
                 value: Math.ceil(Math.random() * 6),
                 isHeld: false,
                 key: nanoid()
                })
        }
        console.log(diceArray);
        return diceArray;
    }

    function rollDice() {
        setDices(allNewDice())
    }

    const DiceElement = dices.map(die => <Die value={die.value} key={die.key}/>)
    
    return (
       <main>
        <div className="dice-container">
          {DiceElement}
        </div>

        <button className='roll-dice' onClick={rollDice}>Roll</button>
       </main>
    )
}
