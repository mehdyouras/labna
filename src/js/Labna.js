/**
 * Created by mehdy on 28/05/17.
 */
class Labna {
    constructor( {canvas, context,width, height} ) {
        this.canvas = canvas;
        this.context = context;
        this.width = width;
        this.height = height;
        this.setup();
    }
    setup() {
        this.reset();
    }
    reset() {
        this.bricks = new Bricks(this);
        this.bricks.generateBricksArray();
        this.draw();

    }
    draw() {
        window.requestAnimationFrame( this.draw.bind( this ) );
        context.clearRect(0,0, this.width, this.height);
        this.bricks.draw();
    }
}
