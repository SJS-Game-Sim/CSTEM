import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LogicGame from './modules/logicGame/LogicGame'

//TODO: Add Nav bar.
//TODO: Allow switching of App
export default function App() {

    return (
        <DndProvider backend={HTML5Backend}>
            <div className='App'>
                <LogicGame />
            </div>
        </DndProvider>
    )    
}