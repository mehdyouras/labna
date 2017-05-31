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
                'row' : 3,
                'x' : (this.bricksOrigin.x)+(i*this.brickWidth),
                'y' : this.bricksOrigin.y,
                "health" : 3
            };
            bricks.push(currentBrick);
        }
        for (i = 0; i < 8; i++) {
            let currentBrick;
            currentBrick = {
                'row' : 2,
                'x' : (this.bricksOrigin.x)+(i*this.brickWidth)+(this.brickWidth),
                'y' : (this.bricksOrigin.y)+this.brickHeight,
                "health" : 2
            };
            bricks.push(currentBrick);
        }
        for (i = 0; i < 6; i++) {
            let currentBrick;
            currentBrick = {
                'row' : 1,
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
    handleBrickHit(topY, bottomY, speed, ballX) {
        let {bricks, brickWidth} = this;


        let getBrick = function(rowToFind, x) {
            return bricks.findIndex(function(obj) {
                if(obj.row === rowToFind) {
                    if(obj.x <= x && (obj.x + brickWidth) > x) {
                        return true;
                    }
                }
            })
        };

        let hitBrick = function(row) {
            let brick = getBrick(row, ballX);
            if(brick === -1 || bricks[brick].health <= 0) {
                return false;
            }
            bricks[brick].health -= 1;
            return true;
        }

        if(speed < 0) { // If ball going up
            if(topY <= 150 && topY > 120) {
                return hitBrick(1);
            }
            else if(topY <= 120 && topY > 90) {
                return hitBrick(2);
            }
            else if(topY <= 90) {
                return hitBrick(3);
            }
        }

        if(speed > 0) { // If ball going down
            if(bottomY >= 120 && bottomY < 150) {
                return hitBrick(1);
            }
            else if(bottomY >= 90 && bottomY < 120) {
                return hitBrick(2);
            }
            else if(bottomY >= 60 && bottomY < 90) {
                return hitBrick(3);
            }
        }
    }
    areBricks() {

        function findHealth(obj) {
            return obj.health > 0;
        }
        return this.bricks.find(findHealth);
    }

}