import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LogicGame from './modules/logicGame/LogicGame'
import HuntGame from './modules/huntGame/HuntGame'
import AssemblyGame from './modules/assemblyGame/AssemblyGame'
import "./app.css"

//TODO: Add Nav bar.
//TODO: Allow switching of App
export default function App() {

    const [level, setLevel] = useState(0)
    const [game, setGame] = useState(null)

    const currentGame = (game, level) => {
        switch (game) {
            case "logic":
                return <LogicGame level = {level}/>
            case "item":
                return <HuntGame level = {level}/>
            case "wire":
                return <AssemblyGame level = {level}/>
            default:
                return selectMenu(level)
        }
    }

    const selectMenu = (level) => {
        const levels = [0,1,2,3,4,5]
        const games = ["logic", "item", "wire"]
        return(
            <>
                <label>Level </label>
                <select className = 'selectLevel' value={level} onChange = {(e) => setLevel(e.target.value)}>
                    {levels.map((lvl) => { 
                        return <option value = {lvl} key = {lvl}>{lvl}</option>
                    })}
                </select>
                {games.map((game) => {
                    return <button className = 'selectGame' value={game} onClick = {(e) => setGame(e.target.value)} key = {game}>{game} game</button>
                })}
            </>
        )
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className='App'>
                {currentGame(game, level)}
            </div>
        </DndProvider>
    )
}