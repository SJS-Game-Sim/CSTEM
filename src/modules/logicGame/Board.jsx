import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Row } from './Row'

export default function Board(props) {
    const { ROWS } = props

    return (
        <DndProvider backend={HTML5Backend}>
            <div className='board' style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {ROWS.map(row => (
                    <Row bubbles={row.bubbles} key={row.id} className={row.className} />
                ))}
            </div>
        </DndProvider>
    )
}
