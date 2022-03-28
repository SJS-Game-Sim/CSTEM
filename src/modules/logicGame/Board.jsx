import React from 'react'
import { Row } from './Row'

export default function Board(props) {
    const { rows } = props

    return (
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
    )
}
