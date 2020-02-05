"use strict";
var Travailleur = /** @class */ (function () {
    function Travailleur(nom, job, salary) {
        var _this = this;
        this.nom = nom;
        this.job = job;
        this.salary = salary;
        this.result = 0;
        setInterval(function () {
            _this.result += _this.salary / 1000;
        }, 100);
    }
    Travailleur.prototype.getValue = function () {
        return this.result;
    };
    return Travailleur;
}());
var travailleur = new Travailleur("Toto", "IT manager", 1500);
setTimeout(function () { return console.log(travailleur.getValue()); }, 5000);
