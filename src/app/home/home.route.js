"use strict";
var router_1 = require('@angular/router');
var register_component_1 = require("../register/register.component");
var login_component_1 = require("../login/login.component");
var HOME_ROUTES = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    }
];
exports.HomeRoutes = router_1.RouterModule.forChild(HOME_ROUTES);
