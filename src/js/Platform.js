/**
 * Created by mehdy on 28/05/17.
 */
class Platform {
    constructor({width, height, context}) {
        this.width = width;
        this.height = height;
        this.context = context;


        this.platformWidth = 80;
        this.platformHeight = 15;
        this.platformSpeed = 3;
        this.platformColor = "#ab94ff";

        this.platformOrigin = {
            x: (this.width/2)-(this.platformWidth/2),
            y: this.height-50,
        }
    }
    draw() {
        let {context, platformWidth, platformHeight, platformOrigin, platformColor} = this;
        
        context.fillStyle=platformColor;
        context.fillRect(platformOrigin.x, platformOrigin.y, platformWidth, platformHeight);
    }
}