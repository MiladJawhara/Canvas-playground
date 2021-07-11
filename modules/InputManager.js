import SuperCanvas from "./Canvas.js";
import Vector2 from "./Vector2.js";


let keys = {};
/**@type Vector2*/
let mousePosition = null;
/**@type SuperCanvas*/
let superCanvas = null;


addEventListener('keydown', (e) => {
    keys[e.code] = true;
});

addEventListener('keyup', (e) => {
    keys[e.code] = false;
});

export default class Input {

    /**@param {SuperCanvas} canvas*/
    static setCanvas(canvas) {
        superCanvas = canvas;

        superCanvas.canvas.addEventListener('mousemove', (e) => {
            let x = e.clientX - superCanvas.container.getBoundingClientRect().x;
            let y = e.clientY - superCanvas.container.getBoundingClientRect().y;
            mousePosition = new Vector2(x, y);
        });

        superCanvas.canvas.addEventListener('mouseleave', (e) => {
            mousePosition = null;
        });
    }

    static getKeyDown(key) {
        return keys[key];
    }

    static anyKeyDown() {
        return Object.values(keys).some(value => value);
    }

    static getMousePosition() {
        if (!superCanvas) return null;
        return mousePosition;
    }
}