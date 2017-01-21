"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_tokens_1 = require("../app.tokens");
var RentedCarService = (function () {
    function RentedCarService(baseUrl, http) {
        this.baseUrl = baseUrl;
        this.http = http;
    }
    RentedCarService.prototype.getId = function (id) {
        var _this = this;
        var url = this.baseUrl + "/search/findRentedCarId";
        var search = new http_1.URLSearchParams();
        search.set('customer', sessionStorage.getItem("customerID"));
        search.set('car', id.toString());
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); })
            .subscribe(function (id) {
            _this.rentedCarId = id;
            _this.deleteRentedCarEntry(_this.rentedCarId);
            location.reload();
        }, function (error) { return console.log(error); });
    };
    RentedCarService.prototype.deleteRentedCarEntry = function (rowID) {
        var url = this.baseUrl + "/" + rowID;
        this.http
            .delete(url)
            .map(function (resp) { return resp.json(); })
            .subscribe(function (res) { return res; }, function (error) { return console.log(error); });
    };
    RentedCarService.prototype.findRentedCar = function (car) {
        var url = this.baseUrl + "/search/findRentedCar";
        var search = new http_1.URLSearchParams();
        search.set('customer', sessionStorage.getItem("customerID"));
        search.set('car', car.toString());
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        return this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); });
    };
    RentedCarService.prototype.save = function (rentedCar) {
        var url = this.baseUrl + "/" + rentedCar.id;
        console.log(rentedCar.id);
        console.log(rentedCar.leaseTime);
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        return this
            .http
            .put(url, rentedCar, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    RentedCarService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(app_tokens_1.BASE_URL_RENTEDCARS))
    ], RentedCarService);
    return RentedCarService;
}());
exports.RentedCarService = RentedCarService;
