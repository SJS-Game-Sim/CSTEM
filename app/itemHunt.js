var newImg = document.createElement("img");

var imageCreate;
var src;
var id;
var width;
var height;
var alt;
var onclick;


// id tag that goes in the html file
var addHere = document.getElementById("addHere");

newImg.setAttribute("src", src);
newImg.setAttribute("id", id);
newImg.setAttribute("width", width);
newImg.setAttribute("height", height);
newImg.setAttribute("alt", alt);
newImg.setAttribute("onclick", onclick);

addHere.appendChild(newImg);
