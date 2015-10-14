var sticker = document.querySelector('#stickerimage');

var mouseStartPostion = {};
var mouseStopPostion = {};

var currentSelectionElement = null;

function findxy(event) {
    var mousePositionObject = {};
    mousePositionObject.x = event.pageX;
    mousePositionObject.y = event.pageY;

    return mousePositionObject;
}

function createSelection() {
    var div = document.createElement('div');
    div.setAttribute('class', 'selection');

    div.style.top = mouseStartPostion.y + "px";
    div.style.left = mouseStartPostion.x + "px";

    div.style.width = (mouseStopPostion.x - mouseStartPostion.x) + "px";
    div.style.height = (mouseStopPostion.y - mouseStartPostion.y) + "px";

    document.querySelector('body').appendChild(div);

    return div;
}

function redrawDiv(event) {
    mouseStopPostion = findxy(event);

    currentSelectionElement.style.top = mouseStartPostion.y + "px";
    currentSelectionElement.style.left = mouseStartPostion.x + "px";

    currentSelectionElement.style.width = (mouseStopPostion.x - mouseStartPostion.x) + "px";
    currentSelectionElement.style.height = (mouseStopPostion.y - mouseStartPostion.y) + "px";
}

var image = new Image();
image.addEventListener("load", function() {
    document.querySelector('#stickerimage').style.height = this.height+"px";
    document.querySelector('#stickerimage').style.width = this.width+"px";
}, false);
image.src = 'images/mac.JPG';

sticker.addEventListener("mousedown", function (event) {
    mouseStartPostion = findxy(event);
    mouseStopPostion = {};

    currentSelectionElement = createSelection();

    sticker.addEventListener('mousemove', redrawDiv, false);
}, false);

document.querySelector('body').addEventListener("mouseup", function () {
    sticker.removeEventListener('mousemove', redrawDiv, false);
}, false);
