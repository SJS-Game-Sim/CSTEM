import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ReactDOM from "react-dom";

function App() {
    <DndProvider backend={HTML5Backend}>
        <div className='App'>
            <Nav />
            <Board />
            <Output />
        </div>
    </DndProvider>
}