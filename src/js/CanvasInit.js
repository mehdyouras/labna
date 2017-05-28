/**
 * Created by mehdy on 28/05/17.
 */
let oApp = {
    "canvas": null,
    "context": null,
    "width": null,
    "height": null,
};

const setup = function() {
    oApp.canvas = document.querySelector( "#game" );
    if ( !oApp.canvas.getContext ) {
        console.error( "Your browser doesn't support canvas!" );
        return;
    }
    oApp.context = oApp.canvas.getContext( "2d" );
    oApp.width = oApp.canvas.width;
    oApp.height = oApp.canvas.height;

    new Labna( oApp );
};

setup();