/**
 * Created by Christian on 1/17/2017.
 */
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
var CarService = (function () {
    function CarService(baseUrl, http, customerLoginService) {
        this.baseUrl = baseUrl;
        this.http = http;
        this.customerLoginService = customerLoginService;
        this.cars = [];
    }
    CarService.prototype.find = function (searchValue, searchType) {
        var _this = this;
        var url = this.baseUrl + "/search/findBy" + searchType;
        var search = new http_1.URLSearchParams();
        search.set(searchType.charAt(0).toLowerCase() + searchType.slice(1), searchValue);
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        headers.set('Authorization', this.customerLoginService.authorizationHeader());
        //headers.set('Authorization', 'Basic ' + btoa('admin:admin')); //basic auth
        this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json()["_embedded"]["cars"]; })
            .subscribe(function (cars) {
            _this.cars = cars;
        }, function (err) {
            console.error('Fehler beim Laden', err);
        });
    };
    CarService.prototype.findAll = function () {
        var _this = this;
        var url = this.baseUrl;
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        headers.set('Authorization', this.customerLoginService.authorizationHeader());
        this
            .http
            .get(url, { headers: headers })
            .map(function (resp) { return resp.json()["_embedded"]["cars"]; })
            .subscribe(function (cars) {
            _this.cars = cars;
        }, function (err) {
            console.error('Fehler beim Laden', err);
        });
    };
    CarService.prototype.findById = function (id) {
        var url = this.baseUrl + "/search/findById";
        var search = new http_1.URLSearchParams();
        search.set('id', id);
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        headers.set('Authorization', this.customerLoginService.authorizationHeader());
        return this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); });
    };
    //load cars in My Cars Tab
    CarService.prototype.loadMyCars = function () {
        var _this = this;
        var url = this.baseUrl + "/search/findByCustomer";
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        headers.set('Authorization', this.customerLoginService.authorizationHeader());
        var search = new http_1.URLSearchParams();
        search.set('customer', this.customerLoginService.getUserInfos().id);
        this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json()["_embedded"]["cars"]; })
            .subscribe(function (cars) {
            _this.cars = cars;
        }, function (err) {
            console.error('Fehler beim Laden', err);
        });
    };
    CarService.prototype.delete = function (id) {
        var _this = this;
        var url = this.baseUrl + "/search/findByCustomer";
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        headers.set('Authorization', this.customerLoginService.authorizationHeader());
        var search = new http_1.URLSearchParams();
        search.set('customer', this.customerLoginService.getUserInfos().id);
        this
            .http
            .delete(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json()["_embedded"]["cars"]; })
            .subscribe(function (cars) {
            _this.cars = cars;
        }, function (err) {
            console.error('Fehler beim Laden', err);
        });
    };
    CarService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(app_tokens_1.BASE_URL_CARS))
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
