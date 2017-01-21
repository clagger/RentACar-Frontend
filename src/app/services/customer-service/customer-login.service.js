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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var app_tokens_1 = require("../../app.tokens");
var util_1 = require("util");
var CustomerLoginService = (function () {
    function CustomerLoginService(http, customersUrl, tokenUrl, clientName, clientSecret) {
        this.http = http;
        this.customersUrl = customersUrl;
        this.tokenUrl = tokenUrl;
        this.clientName = clientName;
        this.clientSecret = clientSecret;
        this._storage = localStorage;
    }
    CustomerLoginService.prototype.setStorage = function (storage) {
        this._storage = storage;
    };
    CustomerLoginService.prototype.loadUserProfile = function (userName) {
        var _this = this;
        if (!this.hasValidAccessToken())
            throw Error("Cannot load User Profile without access_token");
        var findbyMail = "/search/findByEmail";
        return new Promise(function (resolve, reject) {
            var headers = new http_1.Headers();
            headers.set('Authorization', 'Bearer ' + _this.getAccessToken());
            var search = new http_1.URLSearchParams();
            search.set('email', userName);
            _this.http.get(_this.customersUrl + findbyMail, { headers: headers, search: search }).map(function (r) { return r.json()._embedded.customers[0]; }).subscribe(function (userInfo) {
                console.debug('userinfo received', userInfo);
                _this._storage.setItem('userInfo', JSON.stringify(userInfo));
                resolve(userInfo);
            }, function (err) {
                console.error('Error loading user info', err);
                reject(err);
            });
        });
    };
    CustomerLoginService.prototype.fetchTokenUsingPasswordFlowAndLoadUserProfile = function (userName, password) {
        var _this = this;
        return this
            .fetchTokenUsingPasswordFlow(userName, password)
            .then(function () { return _this.loadUserProfile(userName); });
    };
    CustomerLoginService.prototype.fetchTokenUsingPasswordFlow = function (userName, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var search = new http_1.URLSearchParams();
            search.set('grant_type', 'password');
            search.set('username', userName);
            search.set('password', password);
            var headers = new http_1.Headers();
            headers.set('Content-Type', 'application/x-www-form-urlencoded');
            headers.set('Authorization', 'Basic ' + btoa(_this.clientName + ":" + _this.clientSecret));
            var params = search.toString();
            _this.http
                .post(_this.tokenUrl, params, { headers: headers })
                .map(function (r) { return r.json(); })
                .subscribe(function (tokenResponse) {
                console.debug('tokenResponse', tokenResponse);
                _this.storeAccessTokenResponse(tokenResponse.access_token, tokenResponse.refresh_token, tokenResponse.expires_in);
                resolve(tokenResponse);
            }, function (err) {
                console.error('Error performing password flow', err);
                reject(err);
            });
        });
    };
    CustomerLoginService.prototype.refreshToken = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var search = new http_1.URLSearchParams();
            search.set('grant_type', 'refresh_token');
            search.set('refresh_token', _this._storage.getItem('refresh_token'));
            var headers = new http_1.Headers();
            headers.set('Content-Type', 'application/x-www-form-urlencoded');
            headers.set('Content-Type', 'application/x-www-form-urlencoded');
            headers.set('Authorization', 'Basic ' + btoa(_this.clientName + ":" + _this.clientSecret));
            var params = search.toString();
            _this.http.post(_this.tokenUrl, params, { headers: headers }).map(function (r) { return r.json(); }).subscribe(function (tokenResponse) {
                console.debug('refresh tokenResponse', tokenResponse);
                _this.storeAccessTokenResponse(tokenResponse.access_token, tokenResponse.refresh_token, tokenResponse.expires_in);
                resolve(tokenResponse);
            }, function (err) {
                console.error('Error performing password flow', err);
                reject(err);
            });
        });
    };
    CustomerLoginService.prototype.logOut = function () {
        var id_token = this.getIdToken();
        this._storage.removeItem("access_token");
        this._storage.removeItem("id_token");
        this._storage.removeItem("refresh_token");
        this._storage.removeItem("expires_at");
        this._storage.removeItem("id_token_claims_obj");
        this._storage.removeItem("id_token_expires_at");
    };
    ;
    CustomerLoginService.prototype.storeAccessTokenResponse = function (accessToken, refreshToken, expiresIn) {
        this._storage.setItem("access_token", accessToken);
        if (expiresIn) {
            var expiresInMilliSeconds = expiresIn * 1000;
            var now = new Date();
            var expiresAt = now.getTime() + expiresInMilliSeconds;
            this._storage.setItem("expires_at", "" + expiresAt);
        }
        if (refreshToken) {
            this._storage.setItem("refresh_token", refreshToken);
        }
    };
    CustomerLoginService.prototype.getAccessToken = function () {
        return this._storage.getItem("access_token");
    };
    ;
    CustomerLoginService.prototype.getIdToken = function () {
        return this._storage.getItem("id_token");
    };
    CustomerLoginService.prototype.getIdentityClaims = function () {
        var claims = this._storage.getItem("userInfo");
        if (!claims)
            return null;
        return JSON.parse(claims);
    };
    CustomerLoginService.prototype.getUserInfos = function () {
        return JSON.parse(this._storage.getItem("userInfo"));
    };
    CustomerLoginService.prototype.hasValidAccessToken = function () {
        if (this.getAccessToken()) {
            var expiresAt = this._storage.getItem("expires_at");
            var now = new Date();
            return !(expiresAt && parseInt(expiresAt) < now.getTime());
        }
        return false;
    };
    ;
    CustomerLoginService.prototype.isLoggedIn = function () {
        if (!util_1.isNullOrUndefined(this.getAccessToken())) {
            return true;
        }
        else
            return false;
    };
    CustomerLoginService.prototype.authorizationHeader = function () {
        return "Bearer " + this.getAccessToken();
    };
    CustomerLoginService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(app_tokens_1.BASE_URL_CUSTOMERS)),
        __param(2, core_1.Inject(app_tokens_1.BASE_URL_OAUTH2_TOKEN_REQUEST)),
        __param(3, core_1.Inject(app_tokens_1.CLIENT_APP_NAME)),
        __param(4, core_1.Inject(app_tokens_1.CLIENT_APP_SECRET))
    ], CustomerLoginService);
    return CustomerLoginService;
}());
exports.CustomerLoginService = CustomerLoginService;
