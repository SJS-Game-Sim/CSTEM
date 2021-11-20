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
"<div id=\"container\">" +
"      <div class=\"list\">" +
"        <h1 id=\"name1\ class=\"cName\>TODO</h1>" +
"        <div class=\"draggingContainer\">" +
"          <div class=\"card\" draggable=\"true\">" +
"            <div class=\"title\ id=\"iTitle1\">Complete Header Design</div>" +
"            <div class=\"description\" id=\"iDesc1\">" +
"              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus" +
"              sit amet volutpat dui. Cras sed vulputate augue, vel egestas quam." +
"              Donec condimentum vitae orci sed bibendum." +
"            </div>" +
"          </div>" +
"" +
"          <div class=\"card\" draggable=\"true\">" +
"            <div class=\"title\" id=\"iTitle2\">Task number 2</div>" +
"            <div class=\"description\" id=\"iDesc2\">" +
"              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus" +
"              sit amet volutpat dui. Cras sed vulputate augue, vel egestas quam." +
"              Donec condimentum vitae orci sed bibendum." +
"            </div>" +
"          </div>" +
"" +
"          <div class=\"card\" draggable=\"true\">" +
"            <div class=\"title\" id=\"iTitle3\">Task number 3</div>" +
"            <div class=\"description\" id=\"iDesc3\">" +
"              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus" +
"              sit amet volutpat dui. Cras sed vulputate augue, vel egestas quam." +
"              Donec condimentum vitae orci sed bibendum." +
"            </div>" +
"          </div>" +
"        </div>" +
"      </div>" +
"" +
"      <div class=\"list\">" +
"        <h1 id=\"name2\ class=\"cName\>In Progress</h1>" +
"        <div class=\"draggingContainer\">" +
"          <div class=\"card\" draggable=\"true\">" +
"            <div class=\"title\"id=\"iTitle4\">Task number 5</div>" +
"            <div class=\"description\" id=\"iDesc4\">" +
"              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus" +
"              sit amet volutpat dui. Cras sed vulputate augue, vel egestas quam." +
"              Donec condimentum vitae orci sed bibendum." +
"            </div>" +
"          </div>" +
"          <div class=\"card\" draggable=\"true\">" +
"            <div class=\"title\" id=\"iTitle5\">Task number 6</div>" +
"            <div class=\"description\" id=\"iDesc5\">" +
"              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus" +
"              sit amet volutpat dui. Cras sed vulputate augue, vel egestas quam." +
"              Donec condimentum vitae orci sed bibendum." +
"            </div>" +
"          </div>" +
"        </div>" +
"      </div>" +
"" +
"      <div class=\"list\">" +
"        <h1 id=\"name3\ class=\"cName\>In Review</h1>" +
"        <div class=\"draggingContainer\">" +
"          <div class=\"card\" draggable=\"true\">" +
"            <div class=\"title\" id=\"iTitle6\">Task number 7</div>" +
"            <div class=\"description\" id=\"iDesc6\">" +
"              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus" +
"              sit amet volutpat dui. Cras sed vulputate augue, vel egestas quam." +
"              Donec condimentum vitae orci sed bibendum." +
"            </div>" +
"          </div>" +
"        </div>" +
"      </div>" +
"" +
"      <div class=\"list\">" +
"        <h1 id=\"name4\ class=\"cName\>Done</h1>" +
"        <div class=\"draggingContainer\">" +
"          <div class=\"card\" draggable=\"true\">" +
"            <div class=\"title\" id=\"iTitle7\">Task number 8</div>" +
"            <div class=\"description\" id=\"iDesc7\">" +
"              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus" +
"              sit amet volutpat dui. Cras sed vulputate augue, vel egestas quam." +
"              Donec condimentum vitae orci sed bibendum." +
"            </div>" +
"          </div>" +
"        </div>" +
"      </div>" +
"    </div>" +
"";

document.querySelector('body').innerHTML += (body);

let cards = document.querySelectorAll('.card');
let lists = document.querySelectorAll('.list');


cards.forEach((card)=>{
    registerEventsOnCard(card);
});

lists.forEach((list)=>{
    list.addEventListener('dragover', (e)=>{
        e.preventDefault();
        let draggingCard = document.querySelector('.dragging');
        let cardAfterDraggingCard = getCardAfterDraggingCard(list, e.clientY);
        if(cardAfterDraggingCard){

                cardAfterDraggingCard.parentNode.insertBefore(draggingCard, cardAfterDraggingCard);
        } else{
            list.appendChild(draggingCard);
        }

    });
});

function getCardAfterDraggingCard(list, yDraggingCard){

    let listCards = [...list.querySelectorAll('.card:not(.dragging)')];

    return listCards.reduce((closestCard, nextCard)=>{
        let nextCardRect = nextCard.getBoundingClientRect();
        let offset = yDraggingCard - nextCardRect.top - nextCardRect.height /2;

        if(offset < 0 && offset > closestCard.offset){
            return {offset, element: nextCard}
        } else{
            return closestCard;
        }

    }, {offset: Number.NEGATIVE_INFINITY}).element;

}

function registerEventsOnCard(card){
    card.addEventListener('dragstart', (e)=>{
        card.classList.add('dragging');
    });


    card.addEventListener('dragend', (e)=>{
        card.classList.remove('dragging');
    });
}
