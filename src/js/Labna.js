/**
 * Created by mehdy on 28/05/17.
 */
class Labna {
    constructor( {canvas, context,width, height} ) {
        this.canvas = canvas;
        this.context = context;
        this.width = width;
        this.height = height;

        this.rules = {
            "lifes" : 3,
            "score" : 0,
            "currentLifes" : 3,
            "currentScore" : 0,
        }



        this.setup();
    }

    setup() {
        this.canvas.addEventListener("mousemove", this.handleAction.bind(this));
        this.canvas.addEventListener("click", this.handleAction.bind(this));
        document.addEventListener( "keydown", this.handleAction.bind( this ) );
        this.reset();
    }

    reset() {
        window.cancelAnimationFrame(this.animationRequestId);

        this.resetScore();

        this.bricks = new Bricks(this);
        this.bricks.generateBricksArray();

        this.platform = new Platform(this);
        this.ball = new Ball(this);

        this.animate();

    }

    animate() {
        this.animationRequestId = window.requestAnimationFrame( this.animate.bind( this ) );
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
        if(oEvent.keyCode === 32 || oEvent.type === "click") {
            this.ball.handleAction();
        }
        if(!this.ball.isLaunched) {
            return; // Doesn't allow platform movement if the ball is not launched
        }
        if(oEvent.type === "mousemove") {
            let mouseX = this.getMousePos(oEvent);
            this.platform.platformOrigin.x = mouseX-(this.platform.platformWidth/2);
        }
        if( oEvent.keyCode === 37 ) {
            this.platform.handleMovement("left")
        }
        if( oEvent.keyCode === 39 ) {
            this.platform.handleMovement("right")
        }
    }

    collisionsHandler() {
        let ballHitbox = {
            "top" : this.ball.center.y - this.ball.radius,
            "bottom" : this.ball.center.y + this.ball.radius,
            "right" : this.ball.center.x + this.ball.radius,
            "left" : this.ball.center.x - this.ball.radius,
            "hitsPlatform" : this.platform.platformOrigin.x <= this.ball.center.x && this.ball.center.x <= this.platform.platformOrigin.x + this.platform.platformWidth,
        };

        if(ballHitbox.top >= this.height) {
            console.log("bottom");
            this.lose();
        }

        if(ballHitbox.top < 0) {
            this.ball.changeDirection(); // Hits top of canvas
        }

        else if(ballHitbox.bottom > this.height-50) {
            if(ballHitbox.hitsPlatform) {
                this.ball.changeDirection(); // Hits platform
            }
        }
        else if (ballHitbox.right > this.width) {
            this.ball.speed.x = -this.ball.speed.x; // Hits right
        }
        else if (ballHitbox.left < 0) {
            this.ball.speed.x = -this.ball.speed.x; // Hits left
        }
        else if(ballHitbox.top <= 155) {
            if(this.bricks.handleBrickHit(ballHitbox.top, ballHitbox.bottom, this.ball.speed.y, this.ball.center.x)) {
                this.ball.changeDirection();
                this.rules.currentScore++; // Increase score if a brick is hit
                this.updateScore();
            }
        }
    }
    getMousePos (evt) {
        let rect = this.canvas.getBoundingClientRect();
        return evt.clientX - rect.left;
    }

    /// Rules
    /////////

    lose() {
        this.rules.currentLifes--;
        if(this.rules.currentLifes < 1) {
            this.reset();
        }
        this.otherTry();
        this.updateScore();
    }

    otherTry() {
        this.ball = new Ball(this);
        this.platform = new Platform(this);
    }

    updateScore() {
        document.getElementById("score").innerHTML = this.rules.currentScore;
        document.getElementById("lifes").innerHTML = this.rules.currentLifes;
    }

    resetScore() {
        this.rules.currentLifes = this.rules.lifes;
        this.rules.currentScore = this.rules.score;

        this.updateScore();
    }
}
