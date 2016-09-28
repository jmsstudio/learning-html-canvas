var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function clear() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function drawLine() {
    var x1 = getRandomInt(0, canvas.width);
    var y1 = getRandomInt(0, canvas.height);

    var x2 = getRandomInt(10, canvas.width);
    var y2 = getRandomInt(10, canvas.height);

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawCircle() {
    var x = getRandomInt(1, canvas.width);
    var y = getRandomInt(1, canvas.height);
    var radius = getRandomInt(1, canvas.height /2);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = getRandomColorHex();
    console.log(ctx.fillStyle);
    ctx.fill();
    ctx.stroke();
}

function drawRectangle() {
    var x1 = getRandomInt(0, canvas.width/2);
    var y1 = getRandomInt(0, canvas.height/2);

    var x2 = getRandomInt(canvas.width/2, canvas.width);
    var y2 = getRandomInt(canvas.height/2, canvas.height);

    ctx.strokeRect(x1, y1, x2, y2);
    ctx.fillStyle = getRandomColorHex();
    console.log(ctx.fillStyle);
    ctx.fillRect(x1, y1, x2, y2);
}

function getRandomColorHex() {
    return "#"+((1<<24)*Math.random()|0).toString(16);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('clear').onclick = clear;
document.getElementById('line').onclick = drawLine;
document.getElementById('circle').onclick = drawCircle;
document.getElementById('rect').onclick = drawRectangle;