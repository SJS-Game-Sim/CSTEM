import React, { useState, useCallback } from 'react'
import update from 'immutability-helper'
//import { useDrop } from 'react-dnd'
import { Bubble } from './Bubble'
//import { ItemTypes } from './itemTypes'
import './styles.css'

export const Row = props => {
    {
        console.log("A Row object was created.")
        console.log("bubbleList contains:")
        console.log(props.bubblesList)
        const [bubbles, setBubbles] = useState(props.bubblesList)

        const moveBubble = useCallback((dragIndex, hoverIndex) => {
            setBubbles((prevBubbles) => update(prevBubbles, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevBubbles[dragIndex]],
                ],
            }))
        }, [])

        const renderBubble = useCallback((bubble, index) => {
            console.log("Rendering bubble:")
            console.log("bubble: ", bubble)
            console.log("index: ", index)

            return (
                <Bubble key={bubble} index={index} text={bubble} moveBubble={moveBubble} />
            )
        }, [])

	/*
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
	*/
	
        // Returns a variable amount of 'Cell' object to hold 'Bubbles'.
        // Requires a className for CSS shading.
        return (
        <>
                <div className='row'>{bubbles.map((bubble, id) => renderBubble(bubble, id))}</div>
        </>
        )
    }
}