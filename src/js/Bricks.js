/**
 * Created by mehdy on 28/05/17.
 */
class Bricks {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.bricksOrigin = {
            'x' : 50,
            'y' : 80
        };
        this.brickWidth = (width-50)/10;
        this.brickHeight = 30;
    }
    generateBricksArray() {
        let bricks = [];
        for (i = 0; i < 10; i++) {
            let currentBrick;
            currentBrick = {
                'x' : (this.bricksOrigin.x)+(i*this.brickWidth),
                'y' : this.bricksOrigin.y,
                "health" : 3
            };
            bricks += currentBrick;
        }
        for (i = 0; i < 8; i++) {
            let currentBrick;
            currentBrick = {
                'x' : (this.bricksOrigin.x)+(i*this.brickWidth)+(this.brickWidth),
                'y' : (this.bricksOrigin.y)+this.brickHeight,
                "health" : 2
            };
            bricks += currentBrick;
        }
        for (i = 0; i < 6; i++) {
            let currentBrick;
            currentBrick = {
                'x' : (this.bricksOrigin.x)+(i*this.brickWidth)+(2*this.brickWidth),
                'y' : (this.bricksOrigin.y)+(2*this.brickHeight),
                "health" : 1
            };
            bricks += currentBrick;
        }
        return bricks;
    }
}