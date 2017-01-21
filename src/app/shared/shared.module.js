"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Christian on 1/19/2017.
 */
var core_1 = require("@angular/core");
var common_1 = require('@angular/common');
var car_card_component_1 = require("../car-card/car-card.component");
var customer_service_1 = require("../services/customer-service/customer.service");
var customer_login_service_1 = require("../services/customer-service/customer-login.service");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                car_card_component_1.CarCardComponent
            ],
            providers: [
                customer_service_1.CustomerService,
                customer_login_service_1.CustomerLoginService
            ],
            exports: [
                car_card_component_1.CarCardComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
