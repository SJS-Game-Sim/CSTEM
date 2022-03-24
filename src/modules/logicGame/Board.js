import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import logicData from '.logicData'

function renderCell() {

}

export default function Board({ logicData }) {

    return <DndProvider backend={HTML5Backend}>
        <div className='board' style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {rows}
        </div>
    </DndProvider>
}
