import React from 'react'

export default function Bubble({ command, dragClass }) {
    return (
        <div className="bubble">
            <h3>{command.title}</h3>
        </div>
    );
}

