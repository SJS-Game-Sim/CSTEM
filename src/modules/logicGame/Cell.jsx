import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import './logicGame.css'

function Cell() {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        // Type to accept. Defined in ItemTypes.
        accept: ItemTypes.BUBBLE,
        //Collection
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }))

    return (
        <div className='cell' ref={drop}>
        </div>
    )
}