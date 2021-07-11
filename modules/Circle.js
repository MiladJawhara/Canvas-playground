import Drawable from "./Drawable.js";
import Input from "./InputManager.js";
import Vector2 from "./Vector2.js";

/**@param {Circle} circle*/
let keepingInsideCanvas = function (circle) {

    let { position, radios, canvas } = circle;

    let { x, y } = position;

    if (x - radios < 0) circle.position.x = radios;

    if (x + radios > canvas.width) circle.position.x = canvas.width - radios;

    if (y - radios < 0) circle.position.y = radios;
    if (y + radios > canvas.height) circle.position.y = canvas.height - radios;

};

/**@param {Circle} circle*/
let bounceWhenBorderWithCanvas = function (circle) {
    let { position, radios, canvas, velocity } = circle;
    let { x, y } = position;

    if ((x - radios < 0) || (x + radios > canvas.width)) velocity.x = - velocity.x;

    if ((y - radios < 0) || (y + radios > canvas.height)) velocity.y = - velocity.y;
}


export default class Circle extends Drawable {
    /**
    * @param {HTMLCanvasElement} canvas
    * @param {Number} radios
    */
    constructor(x, y, radios, fillColor, outLineColor, fill = false) {
        super(x, y);
        this.radios = radios;
        this.outLineColor = outLineColor;
        this.fillColor = fillColor;
        this.fill = fill;
        this.speed = new Vector2(2 + Math.random() * 5, 2 + Math.random() * 5);
        this.velocity = new Vector2((Math.random() - 0.5) * this.speed.x, (Math.random() - 0.5) * this.speed.y);
    }

    update() {
        this.position.add(this.velocity);
        this.runFromCursor();
        bounceWhenBorderWithCanvas(this);
        keepingInsideCanvas(this);
    }

    render() {
        this.ctx2D.beginPath();
        this.ctx2D.arc(this.position.x, this.position.y, this.radios, 0, Math.PI * 2, false);
        this.ctx2D.strokeStyle = this.outLineColor;
        this.ctx2D.fillStyle = this.fillColor;
        if (this.fill) this.ctx2D.fill();
        else this.ctx2D.stroke();
    }

    keepInsideCanvas(keep = false) {
        this.insideCanvas = keep;
    }

    runFromCursor() {
        let mousePosition = Input.getMousePosition();
        if (!mousePosition) return;

        if (Vector2.distance(mousePosition, this.position) < this.radios + 70) {
            let dir = Vector2.dirFromTo(mousePosition, this.position).getNormalized();
            this.velocity = dir.multiplyV(this.speed);
        }

    }

}