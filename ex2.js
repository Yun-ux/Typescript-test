"use strict";
var negate = function (b) { return !b; };
var doubles = function (a) { return a * 2; };
doubles(10);
var hello = function (hi) { return console.log("hello " + hi); };
var pair = function (num) { return num % 2 === 0; };
var impair = function (num) { return !num; };
var compare = function (k, l, m) { return k + l < m; };
var pluriel = function (mot) { return mot + "s"; };
var n42 = function () { return 42; }; //thunk
var compare2 = function (x, y, z) { return x + y < z; };
var x2 = compare2(12, 34, 78);
var titi = 2;
var today = "mardi";
