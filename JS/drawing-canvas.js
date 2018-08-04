let drawingApp = (function (){
    
let canvisDiv = document.getElementById('canvasDiv');
const canvasWidth = "600";
const canvasHeight ="600";
let clickX = new Array();

let clickY = new Array();
let clickDrag = new Array();
let clickColor = new Array();
let clickSize = new Array();
let clickToop = new Array();
let paint = false;
let colorPurple = "#cb3594";
let colorGreen = "#659b41";
let colorYellow = "#ffcf33";
let colorBrown = "#986928";
let curColor = colorPurple;
let curSize = "normal";
const curTool = "crayon";
let toolHotspotStartY = 23;
let toolHotspotHeight = 38;
let sizeHotspotStartY = 157;
let sizeHotspotHeight = 36;
sizeHotspotWidthObject = {
    huge: 39,
    large: 25,
    normal: 18,
    small: 16
},

clearCanvas = function (){
    context.clearRect(0, 0, canvasWidth, canvasHeight);
},

canvas = document.createElement('canvas');
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
if(typeof G_vmlCanvasManager != 'undefined'){
    
    canvas =G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");

$('#canvas').mousedown(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    
    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY -this.offsetTop);
    redraw();
});

$('#canvas').mousemove(function(e){
    if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        redraw();
    }
});

$('#canvas').mouseup(function(e){
   paint = false; 
});

$('#canvas').mouseleave(function(e){
    paint = false;
});

function addClick(x, y, dragging){
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    if(curTool == "eraser"){
        clickColor.push("white");
    } else{
    clickColor.push(curColor);
    }
    clickSize.push(curSize);
}


function redraw (){
    
    context.lineJoin = "round";
    context.lineWidth = 5;

    for (let i = 0; i< clickX.length; i++){
        context.beginPath();
        if(clickDrag[i] && i){
            context.moveTo(clickX[i-1], clickY[i-1]);
        } else {
            context.moveTo(clickX[i]-1, clickY[i]);
        }

        let radius;
    let r = 0;
    for(; r< clickX.length; r++){

    }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.strokeStyle = clickColor[i];
        context.lineWidth = radius;
        context.stroke();

        // if(curTool == "crayon"){
        //     context.globalAlpha = 0.4;
        //     context.drawImage(crayonTextureImage, 0, 0, canvasWidth, canvasHeight);
        // }
        // context.globalAlpha = 1;
    }
    context.save();
    context.beginPath();
    context.rect(drawingAreaX, drawingAreaY, drawingAreaWidth, drawingAreaHeight);
    context.clip();

    
    context.restore();
}


}());

