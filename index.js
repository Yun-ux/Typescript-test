"use strict";
var a = "Bonsoir les WEB";
var double = function (x) { return x * 2; };
var b;
// let b : number = double(14);
b = double(14);
var Animal = /** @class */ (function () {
    function Animal(s) {
        this.nom = s;
    }
    return Animal;
}());
var moineau = new Animal("banane");
var mul;
(function (x, y) { return x * y; });
var x = mul(3, 3);
