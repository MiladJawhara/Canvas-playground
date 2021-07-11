import SuperCanvas from "./modules/Canvas.js";
import Circle from "./modules/Circle.js";

let can = new SuperCanvas('80vw', '80vh');


can.startRenderLoop();

let colors = ['red', 'green', 'yellow', 'purple'];
for (let index = 0; index < 500; index++) {
    let randomIndex = Math.round(Math.random() * colors.length);
    can.addDrawable(new Circle(10, 50, 10, colors[randomIndex], colors[randomIndex], Math.random() > 0.5));
}

