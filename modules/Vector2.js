export default class Vector2 {
    constructor(x, y) {
        /**@type Number*/
        this.x = x;
        /**@type Number*/
        this.y = y;

        this.magnitude = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }

    /**@param {Vector2} other*/
    add(other) {
        this.x += other.x;
        this.y += other.y;
    }


    /**
     * @param {Vector2} v1
     * @param {Vector2} v2
    */
    static distance(v1, v2) {
        let ans = Math.pow((v2.x - v1.x), 2) + Math.pow((v2.y - v1.y), 2);
        return Math.sqrt(ans);
    }

    /**
     * @param {Vector2} v1
     * @param {Vector2} v2
    */
    static dirFromTo(v1, v2) {
        return new Vector2(v2.x - v1.x, v2.y - v1.y);
    }
    /**@param {Number} other*/
    multiply(num) {
        this.x *= num;
        this.y *= num;

        return this;
    }
    /**@param {Vector2} other*/
    multiplyV(other) {
        this.x *= other.x;
        this.y *= other.y;
        return this;
    }
    getNormalized() {
        return new Vector2((this.x / this.magnitude), (this.y / this.magnitude));
    }
}