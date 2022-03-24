import React from 'react'
import { Cell } from './Cell'

export default function Row(props) {
    const { CELLS } = props

    // Returns a variable amount of 'Cell' object to hold 'Bubbles'.
    return (
        <div className={this.props.className}>
            {CELLS.map(cell => (
                <Cell text={cell} key={cell}/>
            ))}
        </div>
    )
}