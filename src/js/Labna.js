/**
 * Created by mehdy on 28/05/17.
 */
class Labna {
    constructor({canvas, context,width, height}) {
        this.canvas = canvas;
        this.context = context;
        this.width = width;
        this.height = height;
    }
    setup() {
        this.reset();
    }
    reset() {
        this.bricks = new Bricks(this.width, this.height);
        bricks.generateBricksArray();
    }
}
