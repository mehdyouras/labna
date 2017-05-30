/**
 * Created by mehdy on 28/05/17.
 */
class Platform {
    constructor({width, height, context}) {
        this.width = width;
        this.height = height;
        this.context = context;


        this.platformWidth = 70;
        this.platformHeight = 15;
        this.platformSpeed = 3;
        this.platformColor = "#ab94ff";

        this.platformOrigin = {
            x: (this.width/2)-(this.platformWidth/2),
            y: 30,
        }
    }
    draw() {
        let {context, platformWidth, platformHeight, platformOrigin, platformColor} = this;

    }
}