import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './itemTypes'
import './LogicGame.css'

export const Bubble = ({id, text, index, moveBubble}) => {
    const ref = useRef(null)

    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.BUBBLE,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = props.index
            if (dragIndex === hoverIndex) {
                return
            }

            moveBubble(dragIndex, hoverIndex)
            item.index = hoverIndex
        }
    })

    const [{ isDragging }, drag] = useDrag({
        // Type works with drop locations to determine if this item can be dropped there.
        type: ItemTypes.BUBBLE,
        item: () => {
            return { id, index }
        },
        // Collect is a builtin property of react-dnd drag hook. Pulls state from DnD
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    drag(drop(ref))

    return (
        <div className="bubble" ref={ref} data-handler-id={handlerId}>
            <h3>{text}</h3>
        </div>
    )
}
