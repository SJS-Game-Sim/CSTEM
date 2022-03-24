/**
 * @fileoverview Provides Scratch-Like coding game for CSTEM's Educational Games.
 * @author James Isaacks <james.isaacks@roguedevstudios.com>
 * @author Kevin Segarra
 * */

import React, { useState } from 'react'
import Board from './Board'

const { logicData } = require('./LogicData').logicData

function createRows(col, answer) {

}

export default class LogicGame extends React.Component {
    constructor(props) {
        super(props)
    }

    createBoard({ logicData }, props) {
        const curLevel = logicData.levelData[this.props.level]
        const ROWS = createRows(curLevel.columns, curLevel.answer)
    }
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
