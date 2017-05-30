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
        document.addEventListener( "keydown", this.handleAction.bind( this ) );
        this.reset();
    }
    reset() {
        this.bricks = new Bricks(this);
        this.bricks.generateBricksArray();

        this.platform = new Platform(this);
        this.ball = new Ball(this);

        this.animate();

    }
    animate() {
        window.requestAnimationFrame( this.animate.bind( this ) );
        this.context.clearRect(0,0, this.width, this.height);

        this.bricks.draw();
        this.platform.draw();
        this.ball.draw();

        this.collisionsHandler();
    }
    handleAction(oEvent) {
        if(oEvent.keyCode === 27) {
            this.reset();
        }
        if(oEvent.keyCode === 32) {
            this.ball.handleAction();
        }
        if(!this.ball.isLaunched) {
            return; // Doesn't allow platform movement if the ball is not launched
        }
        if( oEvent.keyCode === 37 ) {
            this.platform.handleMovement("left")
        }
        if( oEvent.keyCode === 39 ) {
            this.platform.handleMovement("right")
        }
    }
    collisionsHandler() {
        if(this.ball.center.y - this.ball.radius === 0) {
            this.ball.changeDirection();
        }
    }
}
