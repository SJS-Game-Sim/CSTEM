/**
 * @fileoverview Provides Scratch-Like coding game for CSTEM's Educational Games.
 * @author James Isaacks <james.isaacks@roguedevstudios.com>
 * @author Kevin Segarra
 * */

import React, { useState } from 'react'
import Board from './Board'

const { logicData } = require('./Data').logicData

const createBubbles = props => {
    const bubbles = [props.answer]
    while (bubbles.length <= props.amount) {
        if (bubbles.length >= logicData.commands.length) break
        const bubble = logicData.commands[Math.floor(Math.random() * bubbles.length)]
        if (this.bubbles.indexOf(bubble) === -1) {
            this.bubbles.push(bubble)
        }
    }
    // Durstenfeld Shuffle courtesy of Laurens Holst, StackOverflow
    for (let i = bubbles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bubbles[i], bubbles[j]] = [bubbles[j], bubbles[i]];
    }
    return bubbles
}

const createRows = props => {
    // Create a number of rows based on number of entries in {answer}
    const rows = []
    for (const i = 0; i <= props.answer.length; i++) {
        rows.push({
            bubbles = createBubbles(amount = props.amount, answer = props.answer[i]),
            id = i
        })
    }
    return rows
}

const createBoard = props => {
    const curLevel = logicData.levels[this.props.level]
    const rows = createRows(amount = curLevel.amount, answer = curLevel.answer)
    return (
        <>
            <Board row={rows}/>
        </>
    )
}

export default function LogicGame(props) {
    const [level, setLevel] = useState(0)

}

/*var body = "" +
"<div>" +
"        <div>" +
"            <img src=\"\" alt=\"\"" +
"            class=\"duplicate\" id=\"dragElement1\"/>" +
"        </div>" +
"" +
"        <div>" +
"            <img src=\"\" alt=\"\"" +
"            class=\"duplicate\" id=\"dragElement2\"/>" +
"        </div>" +
"" +
"        <div>" +
"            <img src=\"\" alt=\"\"" +
"            class=\"duplicate\" id=\"dragElement3\"/>" +
"        </div>" +
"    </div>" +
"    <div id=\"dropLocation\">" +
"    </div>" +
"";

document.querySelector('body').innerHTML += (body);

var dragItem1 = document.getElementById("dragElement1");
var dragItem2 = document.getElementById("dragElement2");
var dragItem3 = document.getElementById("dragElement3");

var dropLoc = document.getElementById("dropLocation");

//this event will be fire when the user starts dragging the item

dragItem1.ondragstart = function(evt) {
  evt.dataTransfer.setData("key", evt.target.id)
};

dragItem2.ondragstart = function(evt) {
  evt.dataTransfer.setData("key", evt.target.id)
};

dragItem3.ondragstart = function(evt) {
  evt.dataTransfer.setData("key", evt.target.id)
};

//this event will be fire when an element selection is  being dragged over a valid drop location
dropLocation.ondragover = function(evt) {
  evt.preventDefault();
}

//this will be fire when u drop the dragged item on the drop location
dropLoc.ondrop = function(evt) {
  var dropItem = evt.dataTransfer.getData("key");
  evt.preventDefault();
  var myElement = document.getElementById(dropItem);
  var myNewElement = document.createElement("img");
  myNewElement.src = myElement.src;
  dropLoc.appendChild(myNewElement);
}*/
