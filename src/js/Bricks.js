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
        }
        this.brickWidth = (width-50)/10;
        this.brickHeight = 30;
    }
    generateBricksArray() {
        while (i < 10) {
            let currentBrick;
            currentBrick = {
                'x' : (this.bricksOrigin.x)+(i*this.brickWidth),
                'y' : this.bricksOrigin.y,
            }
            i++;
        }
        while (i <= 8) {
            let currentBrick;
            currentBrick = {
                'x' : (this.bricksOrigin.x)+(i*this.brickWidth),
                'y' : this.bricksOrigin.y,
            }
            i++;
        }
        while (i <= 6) {
            let currentBrick;
            currentBrick = {
                'x' : (this.bricksOrigin.x)+(i*this.brickWidth),
                'y' : this.bricksOrigin.y,
            }
            i++;
        }
    }
}