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
        this.ballCenter = {
            x: this.width/2,
            y: this.height-65,
        }
        this.speed = 0;
    }
    draw() {
        let {context, ballCenter, radius, speed} = this;
        ballCenter.y += speed;

        context.beginPath();
        context.arc(ballCenter.x,ballCenter.y,radius,0,2*Math.PI);
        context.fill();
        context.closePath();
    }
    handleAction() {
        if(!this.isLaunched) {
            this.speed = -4;
        }
        this.isLaunched = true;
    }
}