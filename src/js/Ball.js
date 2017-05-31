/**
 * Created by mehdy on 28/05/17.
 */
class Ball {
    constructor({width, height, context}) {
        this.width = width;
        this.height = height;
        this.context = context;

        this.isLaunched = false;
        this.radius = 10;
        this.center = {
            x: this.width/2,
            y: this.height-65,
        };
        this.speed = {
            "x": 0,
            "y": 0,
            "gameSpeed": 6,
        };

    }
    draw() {
        let {context, center, radius, speed} = this;
        center.y += speed.y;
        center.x += speed.x;

        context.beginPath();
        context.arc(center.x,center.y,radius,0,2*Math.PI);
        context.fill();
        context.closePath();
    }
    handleAction() {
        if(!this.isLaunched) {
            this.speed.y = -this.speed.gameSpeed;
            this.speed.x = Math.random() * (this.speed.gameSpeed + this.speed.gameSpeed) - this.speed.gameSpeed;
        }
        this.isLaunched = true;
    }
    changeDirection() {
        if(this.speed.y === -this.speed.gameSpeed) {
            this.speed.y = this.speed.gameSpeed;
        } else {
            this.speed.y = -this.speed.gameSpeed;
        }
    }
}