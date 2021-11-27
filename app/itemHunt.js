var newImg = document.createElement("img");

var imageCreate;
var src;
var id;
var width;
var height;
var alt;
var onclick;
var idAddHere;

// id tag that goes in the html file
var addHere = document.getElementById(idAddHere);

newImg.setAttribute("src", src);
newImg.setAttribute("id", id);
newImg.setAttribute("width", width);
newImg.setAttribute("height", height);
newImg.setAttribute("alt", alt);
newImg.setAttribute("onclick", onclick);

addHere.appendChild(newImg);

newImg.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  newImg.style.position = 'absolute';
  newImg.style.zIndex = 1000;

  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(newImg);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    newImg.style.left = pageX - newImg.offsetWidth / 2 + 'px';
    newImg.style.top = pageY - newImg.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  newImg.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    newImg.onmouseup = null;
  };

  newImg.ondragstart = function() {
    return false;
  };

};

var body = "" +
"<section class=\"draggable-elements\">" +
"      <img src=\"add image here\" class=\"draggable\" draggable=\"true\" style=\"color: #ff6384;\" id=\"img1\"/>" +
"      <img src=\"add image here\" class=\"draggable\" draggable=\"true\" style=\"color: #36a2eb;\" id=\"img2\"/>" +
"      <img src=\"add image here\" class=\"draggable\" draggable=\"true\" style=\"color: #ffce56;\" id=\"img3\"/>" +
"      <img src=\"add image here\" class=\"draggable\" draggable=\"true\" style=\"color: #9966ff;\" id=\"img4\"/>" +
"      <img src=\"add image here\" class=\"draggable\" draggable=\"true\" style=\"color: #4bc0c0;\" id=\"img5\"/>" +
"    <section class=\"droppable-elements\">" +
"      <div class=\"droppable\" data-draggable-id=\"img5\"><span>img5</span></div>" + 
"      <div class=\"droppable\" data-draggable-id=\"img3\"><span>img3</span></div>" +
"      <div class=\"droppable\" data-draggable-id=\"img1\"><span>img1</span></div>" +
"      <div class=\"droppable\" data-draggable-id=\"img4\"><span>img4</span></div>" +
"      <div class=\"droppable\" data-draggable-id=\"img2\"><span>img2</span></div>" +
"</section>" +
"";

document.querySelector('body').innerHTML += (body);

const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart); // Fires as soon as the user starts dragging an item - This is where we can define the drag data
  // elem.addEventListener("drag", drag); // Fires when a dragged item (element or text selection) is dragged
  // elem.addEventListener("dragend", dragEnd); // Fires when a drag operation ends (such as releasing a mouse button or hitting the Esc key) - After the dragend event, the drag and drop operation is complete
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
  elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
  elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
  elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
});

// Drag and Drop Functions

//Events fired on the drag target

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
}

//Events fired on the drop target

function dragEnter(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if(!event.target.classList.contains("dropped")) {
    event.preventDefault(); // Prevent default to allow drop
  }
}

function dragLeave(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event) {
  event.preventDefault(); // This is in order to prevent the browser default handling of the data
  event.target.classList.remove("droppable-hover");
  const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
  const droppableElementData = event.target.getAttribute("data-draggable-id");
  const isCorrectMatching = draggableElementData === droppableElementData;
  if(isCorrectMatching) {
    const draggableElement = document.getElementById(draggableElementData);
    event.target.classList.add("dropped");
    // event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following:
    event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
    event.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);
  }
}
