import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import logicData from '.logicData'

function renderCell() {

}

export default function Board(cols, rows) {
    const cells = []
    for (let i = 0; i <= cols * rows; i++) {
        cells.push(renderCell())
    }

    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {cells}
        </div>
    )
}
