"use strict";
var hello = "hello typescript!";
console.log(hello);
function add(a, b) {
    console.log(a, b);
}
add(5, 10);
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Mon"] = 0] = "Mon";
    Weekday[Weekday["Tues"] = 1] = "Tues";
    Weekday[Weekday["Wed"] = 2] = "Wed";
    Weekday[Weekday["Thurs"] = 3] = "Thurs";
    Weekday[Weekday["Fri"] = 4] = "Fri";
    Weekday[Weekday["Sat"] = 5] = "Sat";
    Weekday[Weekday["Sun"] = 6] = "Sun";
})(Weekday || (Weekday = {}));
var monday = Weekday.Mon;
console.log(monday);
var thisEvent = "keyup";
// Array
var items = [1, 2, 3];
// Tuple
var tup = ["tuple", 100];
var number1 = 50;
number1.toFixed(0); // Works - Detects during runtime
var number2 = 50;
// number2.toFixed(0); // Does not work - Detects during compilation
var unionArray = [1, "hello,world!", true];
var genericArray = [1, "hello,world!"];
var genericFunctionArray = [function () { return "one"; }, function () { return "two"; }];
// void return
function goodbye() {
    console.log("Hello, World!");
}
// strictNullCheck: (default true), false로 변경시 undefined / null 할당이 가능해진다.
var apple = null;
var banana = undefined;
function compareMax(x, y) {
    return (x > y) ? x : y;
}
function isXLargerThanY(x, y) {
    return (x > y) ? x : "That is not true";
}
console.log(isXLargerThanY(3, 5));
console.log(isXLargerThanY(5, 4));
function initializedComparator(x, y) {
    if (x === void 0) { x = 1; }
    if (y === void 0) { y = 0; }
    return (x > y) ? x : y;
}
console.log(initializedComparator());
function selectiveParameter(x, y) {
    return x + y;
}
console.log(selectiveParameter(1));
console.log(selectiveParameter(1, 2));
function addOverload(a, b) {
    return a + b;
}
var person = {
    name: "Happy",
    hello: function (name2) {
        console.log(this);
        console.log("Hello, " + this.name + " " + name2);
    }
};
person.hello("World");
var typedPerson = {
    name: "New",
    hello: function (name2) {
        console.log(this);
        var message = "Hello, " + this.name + " " + name2;
        return message;
    }
};
console.log(typedPerson.hello('World!'));
var myConcat = function (str1, str2) { return str1 + str2; };
function callbackFunc(message, callback) {
    return callback(message);
}
var responseMessage = callbackFunc("hello, world of callback!", function (message) { return console.log(message); });
