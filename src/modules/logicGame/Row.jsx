import React, { useState, useCallback } from 'react'
import update from 'immutability-helper'
import { Bubble } from './Bubble'
import { ItemTypes } from './itemTypes'

export const Row = (props) => {
    {
        const { BUBBLES } = props

        const [bubbles, setBubbles] = useState({ BUBBLES })

        const moveBubble = useCallback((dragIndex, hoverIndex) => {
            setBubbles((prevBubbles) => update(prevBubbles, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevBubbles[dragIndex]],
                ],
            }))
        }, [])

        const renderBubble = useCallback((bubble, index) => {
            return (
                <Bubble key={bubble.id} index={index} text={bubble.text} moveBubble={moveBubble} />
            )
        }, [])

        // Enable row as a droppable area
        const [{ canDrop, isOver }, drop] = useDrop(() => ({
            // Type to accept. Defined in ItemTypes.
            accept: ItemTypes.BUBBLE,
            //Collection
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop()
            })
        }))

        // Returns a variable amount of 'Cell' object to hold 'Bubbles'.
        // Requires a className for CSS shading.
        return (<>
            <div className={this.props.className}>{bubbles.map((bubble, id) => renderBubble(bubble, id))}</div>
        </>
        )
    }
}