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
