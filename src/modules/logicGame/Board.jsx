import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Row } from './Row'

export default function Board(props) {
    const { rows } = props

    return (
        <DndProvider backend={HTML5Backend}>
            <div className='board' style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {rows.map(row => (
                    <Row BUBBLES={row.bubbles} key={row.id} className={row.className} />
                ))}
            </div>
        </DndProvider>
    )
}
