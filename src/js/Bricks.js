/**
 * Created by mehdy on 28/05/17.
 */
class Bricks {
    constructor({width, height, context}) {
        this.width = width;
        this.height = height;
        this.context = context;

        this.bricksOrigin = {
            'x' : 25,
            'y' : 60
        };
        this.brickWidth = (this.width-50)/10;
        this.brickHeight = 30;
    }
    generateBricksArray() {
        this.bricks = [];
        let i,
            bricks = [];
        for (i = 0; i < 10; i++) {
            let currentBrick;
            currentBrick = {
                'x' : (this.bricksOrigin.x)+(i*this.brickWidth),
                'y' : this.bricksOrigin.y,
                "health" : 3
            };
            bricks.push(currentBrick);
        }
        for (i = 0; i < 8; i++) {
            let currentBrick;
            currentBrick = {
                'x' : (this.bricksOrigin.x)+(i*this.brickWidth)+(this.brickWidth),
                'y' : (this.bricksOrigin.y)+this.brickHeight,
                "health" : 2
            };
            bricks.push(currentBrick);
        }
        for (i = 0; i < 6; i++) {
            let currentBrick;
            currentBrick = {
                'x' : (this.bricksOrigin.x)+(i*this.brickWidth)+(2*this.brickWidth),
                'y' : (this.bricksOrigin.y)+(2*this.brickHeight),
                "health" : 1
            };
            bricks.push(currentBrick);
        }

        this.bricks = bricks;
    }
    draw() {
        let {context, brickWidth, brickHeight} = this;
        let healthColor = [ "#b07b4b", "#b0ae4b", "#88b04b"];

        context.strokeStyle = "#000000";
        context.lineWidth   = 1;

        this.bricks.forEach(function(brick) {
            if(brick.health > 0) {
                context.fillStyle=healthColor[brick.health-1];
                context.fillRect(brick.x, brick.y, brickWidth, brickHeight);
                context.strokeRect(brick.x,brick.y, brickWidth,brickHeight);
            }
        });
    }
}