"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var home_route_1 = require("./home.route");
var register_component_1 = require("../register/register.component");
var customer_service_1 = require("../services/customer-service/customer.service");
var shared_module_1 = require("../shared/shared.module");
var customer_login_service_1 = require("../services/customer-service/customer-login.service");
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                home_route_1.HomeRoutes,
                shared_module_1.SharedModule
            ],
            declarations: [
                register_component_1.RegisterComponent
            ],
            exports: [],
            providers: [customer_service_1.CustomerService, customer_login_service_1.CustomerLoginService]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
