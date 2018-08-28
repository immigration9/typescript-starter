"use strict";
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y) {
        this.x = x;
        this.y = y;
    }
    Rectangle.prototype.getArea = function () {
        return this.x * this.y;
    };
    Rectangle.printConsole = function () {
        console.log("hello, world!");
    };
    return Rectangle;
}());
Rectangle.printConsole();
var square = new Rectangle(4, 4);
console.log(square.getArea());
