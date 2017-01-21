"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var APP_ROUTES = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    }
];
exports.AppRouterModule = router_1.RouterModule.forRoot(APP_ROUTES);
