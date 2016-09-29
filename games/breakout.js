var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var startPos = [canvas.width/2, canvas.height/2];
var acc = [2, 1];
var radius = 10;

function draw() {
    context.beginPath();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.closePath();

    console.log(startPos[0]);
    console.log(canvas.width);

    if (startPos[0] + acc[0] + radius < canvas.width && startPos[0] + acc[0] - radius  > 0) {
        startPos[0] += acc[0];
    } else {
        acc[0] = -acc[0];
    }
    if (startPos[1] + acc[1] + radius < canvas.height && startPos[1] + acc[1] - radius > 0) {
        startPos[1] += acc[1];
    } else {
        acc[1] = -acc[1];
    }

    context.arc(startPos[0], startPos[1], radius, Math.PI * 2, false);
    context.fill();
}


setInterval(draw, 10);