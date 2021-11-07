/*
    drag and drop events
      drag, dragstart dragenter, dragexit, dragleave, dragover, dragstart
    drag and drop interface
      dataTransfer
*/

var dragItem1 = document.getElementById("dragElement1");
var dragItem2 = document.getElementById("dragElement2");
var dragItem3 = document.getElementById("dragElement3");
var dragItem4 = document.getElementById("dragElement4");
var dragItem5 = document.getElementById("dragElement5");

var dropLoc = document.getElementById("dropLocation");

//this event will be fire when the user starts dragging the item

dragItem1.ondragstart = function(evt) {
  evt.dataTransfer.setData("key", evt.target.id)
  console.log("its dragging...");
};

dragItem2.ondragstart = function(evt) {
  evt.dataTransfer.setData("key", evt.target.id)
  console.log("its dragging...");
};

dragItem3.ondragstart = function(evt) {
  evt.dataTransfer.setData("key", evt.target.id)
  console.log("its dragging...");
};

dragItem4.ondragstart = function(evt) {
  evt.dataTransfer.setData("key", evt.target.id)
  console.log("its dragging...");
};

dragItem5.ondragstart = function(evt) {
  evt.dataTransfer.setData("key", evt.target.id)
  console.log("its dragging...");
};

//this event will be fire when an element selection is  being dragged over a valid drop location
dropLocation.ondragover = function(evt) {
  evt.preventDefault();
  console.log("its dragover...");
}

//this will be fire when u drop the dragged item on the drop location
dropLoc.ondrop = function(evt) {
  var dropItem = evt.dataTransfer.getData("key");
  evt.preventDefault();
  console.log("its dropped");
  console.log(dropItem);
  var myElement = document.getElementById(dropItem);
  console.log(myElement);
  var myNewElement = document.createElement("img");
  myNewElement.src = myElement.src;
  dropLoc.appendChild(myNewElement);
}
