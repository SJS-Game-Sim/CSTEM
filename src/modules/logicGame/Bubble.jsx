import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './itemTypes'
import './LogicGame.css'

const Bubble = props => {
    const id = props
    const [{ isDragging }, drag] = useDrag(() => ({
        // Type works with drop locations to determine if this item can be dropped there.
        type: ItemTypes.BUBBLE,
        // Collect is a builtin property of react-dnd drag hook. Pulls state from DnD
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return (
        <div className="bubble" ref={drag}>
            <h3>{props.text}</h3>
        </div>
    )
}

export default Bubble
