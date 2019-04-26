function Box(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.walls = [true, true, true, true];
    this.isVisited = false;
    this.isPointer = false;

    this.render = function() {
        if (this.isPointer) {
            fill(100, 150, 100);
        } else {
            fill(255);
        }
        if (this.isVisited) {
            noStroke();
            rect(this.x * cellWidth, this.y * cellWidth, cellWidth, cellWidth);
        }
        stroke(0);
        if (this.walls[Walls.LEFT]) {
            line(this.x * cellWidth, this.y * cellWidth, this.x * cellWidth, (this.y + 1) * cellWidth);
        }
        if (this.walls[Walls.TOP]) {
            line(this.x * cellWidth, this.y * cellWidth, (this.x + 1)* cellWidth, this.y * cellWidth);
        }
        if (this.walls[Walls.RIGHT]) {
            line((this.x + 1) * cellWidth, this.y * cellWidth, (this.x + 1) * cellWidth, (this.y + 1)*cellWidth);
        }
        if (this.walls[Walls.BOTTOM]){
            line(this.x * cellWidth, (this.y + 1) * cellWidth, (this.x + 1) * cellWidth, (this.y + 1) * cellWidth);
        }
    };

    this.hasWall = function(side) {
        return this.walls[side];
    };

    this.getNeighbours = function() {
        var i = this.x;
        var j = this.y;
        var neghibourIndex = [];
        console.log(i, j, i*cols + j);
        if (i-1 >= 0) {
            neghibourIndex.push((i - 1) * rows + j);
        }
        if (i+1 < cols) {
            neghibourIndex.push((i + 1) * rows + j);
        }
        if (j-1 >= 0) {
            neghibourIndex.push(i * rows + (j - 1));
        }
        if (j+1 < rows) {
            neghibourIndex.push(i * rows + (j + 1));
        }
        return neghibourIndex;
    };

    this.removeWall = function(newBox) {
        if ((this.x - newBox.x) < 0) {
            this.walls[Walls.RIGHT] = false;
            newBox.walls[Walls.LEFT] = false;
        } else if ((this.x - newBox.x) > 0){
            this.walls[Walls.LEFT] = false;
            newBox.walls[Walls.RIGHT] = false;
        } else if ((this.y - newBox.y) < 0) {
            this.walls[Walls.BOTTOM] = false;
            newBox.walls[Walls.TOP] = false;
        } else if ((this.y - newBox.y) > 0) {
            this.walls[Walls.TOP] = false;
            newBox.walls[Walls.BOTTOM] = false;
        }
        
    };
}