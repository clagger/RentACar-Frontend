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
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/Rx');
var core_2 = require("@angular/core");
var app_tokens_1 = require("../../app.tokens");
var common_1 = require("@angular/common");
var CustomerService = (function () {
    function CustomerService(baseUrl, http) {
        this.baseUrl = baseUrl;
        this.http = http;
    }
    CustomerService.prototype.createCustomer = function (firstName, lastName, address, phoneNumber, email, birthDate, driverLicense, password) {
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        //transform date into acceptable form for backend
        var datePipe = new common_1.DatePipe('de-DE');
        birthDate = datePipe.transform(birthDate, 'dd.MM.yyyy');
        return this.http
            .post(this.baseUrl, { firstName: firstName, lastName: lastName, address: address, phoneNumber: phoneNumber, email: email, birthDate: birthDate,
            driverLicenseNumber: driverLicense, password: password }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CustomerService = __decorate([
        core_1.Injectable(),
        __param(0, core_2.Inject(app_tokens_1.BASE_URL_CUSTOMERS))
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
