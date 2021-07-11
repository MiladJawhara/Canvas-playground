import Input from "./InputManager.js";


export default class SuperCanvas {
    constructor(width, height) {
        /**@type HTMLCanvasElement*/
        this.canvas = document.createElement('canvas');
        this.canvas.style.border = "1px solid";

        /**@type CanvasRenderingContext2D*/
        this.ctx2D = this.canvas.getContext('2d');

        /**@type HTMLDivElement*/
        this.container = document.createElement('div');
        this.container.classList.add('container');
        this.container.style.width = width;
        this.container.style.height = height;
        this.container.style.position = 'absolute';
        this.container.style.top = "50%";
        this.container.style.left = "50%";
        this.container.style.transform = "translate(-50%,-50%)";

        this.container.appendChild(this.canvas);
        document.body.appendChild(this.container);
        this.resizeCanvas();
        window.addEventListener('resize', this.resizeCanvas.bind(this));
        Input.setCanvas(this);
        /**@type Drawable[]*/
        this.drawables = [];
    }
    update() {
        this.drawables.forEach(drawable => {
            drawable.update();
        });
    }

    render() {
        this.ctx2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawables.forEach(drawable => {
            drawable.render();
        });
    }

    /**@param {Drawable} drawable*/

    addDrawable(drawable) {
        drawable.setCanvas(this.canvas);
        this.drawables.push(drawable);
    }

    resizeCanvas() {
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
    }

    startRenderLoop() {
        this.renderLoop = this.startRenderLoop.bind(this);
        requestAnimationFrame(this.renderLoop);
        this.update();
        this.render();
    }

}


