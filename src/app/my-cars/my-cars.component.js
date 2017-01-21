/**
 * Created by Christian on 1/19/2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MyCarsComponent = (function () {
    function MyCarsComponent(carService, rentedCarService) {
        this.carService = carService;
        this.rentedCarService = rentedCarService;
        this.carService.loadMyCars();
    }
    Object.defineProperty(MyCarsComponent.prototype, "cars", {
        get: function () {
            return this.carService.cars;
        },
        enumerable: true,
        configurable: true
    });
    MyCarsComponent.prototype.deleteEntry = function (car) {
        this.rentedCarService.getId(car.id);
    };
    MyCarsComponent = __decorate([
        core_1.Component({
            selector: 'my-cars',
            templateUrl: './my-cars.component.html'
        })
    ], MyCarsComponent);
    return MyCarsComponent;
}());
exports.MyCarsComponent = MyCarsComponent;
