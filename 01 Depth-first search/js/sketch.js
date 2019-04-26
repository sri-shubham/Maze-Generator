var grid = [];
var traversed = [];
var cellWidth = 20;
var canvaslength = 800;
var canvaswidth = 400;
const Walls = {
    LEFT    : 0,
    TOP     : 1,
    RIGHT   : 2,
    BOTTOM  : 3
}
var cols = canvaslength/cellWidth;
var rows = canvaswidth/cellWidth;

function setup() {
    var cnv = createCanvas(canvaslength, canvaswidth);
    cnv.parent("canvas");
    for (let i=0; i<cols; i++) {
        for (let j=0; j<rows; j++) {
            grid.push(new Box(i, j));
        }   
    }
    console.log(grid);
    traversed.push(grid[0]);
}

function draw() {
    for (let p = 0; p < 2; p++) {
        if (traversed.length > 0) {
            background(51);
            curBox = traversed[traversed.length - 1];
            curBox.isPointer = true;
            curBox.isVisited = true;
            for (var i=0; i<grid.length; i++) {
                grid[i].render();
            }
            neghibours = curBox.getNeighbours().filter(i => !grid[i].isVisited);
            if (neghibours.length > 0) {
                console.log(neghibours)
                var randSelection = floor(random(neghibours.length));
                traversed.push(grid[neghibours[randSelection]]);
                curBox.removeWall(grid[neghibours[randSelection]]);
                curBox.isPointer = false;
            } else {
                traversed.pop();
                curBox.isPointer = false
            }
            // noLoop();
        } else {
            noLoop();
        }
    }
}