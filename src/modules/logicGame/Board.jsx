import React from 'react'
import { Row } from './Row'
import logicData from './Data'

export const Board = (level) => {

    function createBubbles(amount, answer) {
        console.log("createBubbles was called.")
        const bubbles = [answer]
        console.log(bubbles)
        while (bubbles.length <= amount) {
            if (bubbles.length >= logicData.commands.length) {
                console.log("More answer possibilities are requested than availible commands.")
                break
            }
            const bubble = logicData.commands[Math.floor(Math.random() * logicData.commands.length)]
            if (bubbles.indexOf(bubble) === -1) {
                console.log("Push " + bubble)
                bubbles.push(bubble)
            }
            console.log(bubbles)
        }
        console.log("Random sort bubbles")
        // Durstenfeld Shuffle courtesy of Laurens Holst, StackOverflow
        for (let i = bubbles.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [bubbles[i], bubbles[j]] = [bubbles[j], bubbles[i]];
        }

        console.log("bubbles")
        console.log("createBubbles end")
        return (bubbles)
    }

    function createRows(amount, answer) {
        console.log("createRow was called.")
        console.log(answer)
        // Create a number of rows based on number of entries in {answer}
        const rows = []
        for (let i = 0; i <= answer.length-1; i++) {
            console.log(i, answer[i])
            rows.push({
                bubbles: createBubbles(amount, answer[i]),
                id: i
            })
        }
        console.log("createRows created:")
        console.log(rows)
        return (rows)
    }

    console.log("Amount and Answer of current level are:")
    const amount = logicData.levels[0].amount
    console.log(amount)
    const answer = logicData.levels[0].answer
    console.log(answer)
    const rows = createRows(amount, answer)

    return (
            <div className='board' style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {rows.map(row => (
                    <Row bubblesList={row.bubbles} key={row.id} className='row' />
                ))}
            </div>
    )
}
