var canvas = document.querySelector('#stickerstory');
var context = canvas.getContext('2d');
var mouseStartPostion = {};
var mouseStopPostion = {};

function findxy(event) {
    var mousePositionObject = {};
    mousePositionObject.x = event.clientX - canvas.offsetLeft;
    mousePositionObject.y = event.clientY - canvas.offsetTop;

    return mousePositionObject;
}

document.querySelector('#stickerstory').height = document.querySelector("#stickerimage").height;
document.querySelector('#stickerstory').width = document.querySelector("#stickerimage").width;

function updateCanvas(event) {
    context.strokeStyle = "#000000";
    context.lineWidth   = 1;
    context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    mouseStopPostion = findxy(event);

    context.strokeRect(
        mouseStartPostion.x,
        mouseStartPostion.y,
        (mouseStopPostion.x - mouseStartPostion.x),
        (mouseStopPostion.y - mouseStartPostion.y)
    );
}

canvas.addEventListener("mousedown", function (event) {
    mouseStartPostion = findxy(event);
    mouseStopPostion = {};

    canvas.addEventListener('mousemove', updateCanvas, false);
}, false);

canvas.addEventListener("mouseup", function () {
    canvas.removeEventListener('mousemove', updateCanvas, false);
    mouseStopPostion = findxy(event);
}, false);
