import Vector2 from "./Vector2.js";

export default class Drawable {
    /**
     * @param {Number} x
     * @param {Number} y
     * */
    constructor(x, y) {
        /**@type HTMLCanvasElement*/
        this.canvas = null;
        /**@type CanvasRenderingContext2D*/
        this.ctx2D = null;
        this.position = new Vector2(x, y);
        this.insideCanvas = false;
    }

    render() { }

    update() { }

    keepInsideCanvas() {
        throw new Error('This method did not implemented on this class');
    }

    /**@param {HTMLCanvasElement} canvas*/
    setCanvas(canvas) {
        if (canvas == null) return;
        this.canvas = canvas;
        this.ctx2D = canvas.getContext('2d');
    }
    /**
    * @param {keyof WindowEventMap} listener
    *
    * */
    addEventListener(listener, callback) {
        window.addEventListener(listener, (e) => {
            callback(this, e);
        });
    }
}

