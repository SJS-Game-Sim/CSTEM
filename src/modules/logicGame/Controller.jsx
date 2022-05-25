/**
 * @fileoverview Provides Scratch-Like coding game for CSTEM's Educational Games.
 * @author James Isaacks <james.isaacks@roguedevstudios.com>
 * @author Kevin Segarra
 * */

import React, { useState } from 'react'
import { Board } from './Board'

export function LogicGame(props) {
	// eslint-disable-next-line
    const [level, setLevel] = useState(0)
    console.log("Current level is " + level)
    return (
        <div>
            <Board level={level} />
        </div>
    )
}
