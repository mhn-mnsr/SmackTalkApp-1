webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_login_login_component__ = __webpack_require__("../../../../../src/app/landing/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_register_register_component__ = __webpack_require__("../../../../../src/app/landing/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__success_success_component__ = __webpack_require__("../../../../../src/app/success/success.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__landing_landing_component__["a" /* LandingComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__landing_register_register_component__["a" /* RegisterComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__landing_login_login_component__["a" /* LoginComponent */] },
        ]
    },
    {
        path: 'success',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_5__success_success_component__["a" /* SuccessComponent */],
        children: [],
    }
];
// export const routing = RouterModule.forRoot(routes);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_login_login_component__ = __webpack_require__("../../../../../src/app/landing/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__landing_register_register_component__ = __webpack_require__("../../../../../src/app/landing/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__success_success_component__ = __webpack_require__("../../../../../src/app/success/success.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__landing_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__landing_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__success_success_component__["a" /* SuccessComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
=======
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
>>>>>>> f0f6d12071ba93898b453f85a517454337b0869a
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
=======
>>>>>>> f0f6d12071ba93898b453f85a517454337b0869a
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

<<<<<<< HEAD



var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.addUser = function (newUser) {
        return this._http.post('/api/registerUser', newUser)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
=======
var DataService = (function () {
    function DataService() {
    }
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
>>>>>>> f0f6d12071ba93898b453f85a517454337b0869a
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container{\r\n    background-color: #BEBEBE;\r\n    height: 1100px;\r\n    width: 1100px;\r\n\r\n}\r\n\r\n#logo{\r\n    background-color: lightgray;\r\n    height: 250px;\r\n    width: 700px;\r\n    margin: 0px auto;\r\n}\r\n\r\n#loginRegBox{\r\n    width: 700px;\r\n    height: 600px;\r\n    margin: 80px auto 0px;\r\n    background-color: #B6B6B6;\r\n    box-shadow: 7px 7px gray;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <div id=\"logo\">\r\n\r\n  </div>\r\n  <div id=\"loginRegBox\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #container{\r\n    background-color: #BEBEBE;\r\n    height: 1100px;\r\n    width: 1100px;\r\n\r\n}\r\n\r\n#logo{\r\n    background-color: lightgray;\r\n    height: 250px;\r\n    width: 700px;\r\n    margin: 0px auto;\r\n}\r\n\r\n#registrationBox{\r\n    width: 700px;\r\n    height: 600px;\r\n    margin: 80px auto 0px;\r\n    background-color: #B6B6B6;\r\n    box-shadow: 7px 7px gray;\r\n} */\r\n\r\n#login{\r\n    width: 700px;\r\n    height: 600px;\r\n    margin: 80px auto 0px;\r\n    background-color: #C9C9C9;\r\n}\r\n\r\n#logTitle{\r\n    font-family: 'Open Sans', sans-serif;\r\n    color: #555;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    font-size: 50px;\r\n    text-align: center;\r\n    font-weight: 800;\r\n    letter-spacing: 15px;\r\n    padding-top: 50px;\r\n    line-height: 1;\r\n    /* text-shadow: #FFFFFF 3px 2px 0; */\r\n    position: relative;\r\n    \r\n}\r\n\r\n\r\n.inputfields{\r\n    font-size: 30px;\r\n    height: 60px;\r\n    width: 600px;\r\n    margin-top: 20px;\r\n    margin-left: 50px;\r\n    text-transform: uppercase;  \r\n    font-weight: 10;  \r\n    letter-spacing: 1px;    \r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#loginButton{\r\n    height: 60px;\r\n    width: 200px;\r\n    font-size: 30px;\r\n    font-weight: 1000;\r\n    margin-top: 30px;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    text-transform: uppercase;\r\n}\r\nh3{\r\n    display: inline-block;\r\n    margin-left: 350px;\r\n    margin-top: 0px;\r\n}\r\n\r\n::-webkit-input-placeholder { \r\n    color: #D8D8D8;\r\n    text-align: center;\r\n}\r\n::-moz-placeholder { \r\n    color: #D8D8D8;\r\n    text-align: center;\r\n}\r\n:-ms-input-placeholder { \r\n    color: #D8D8D8;\r\n    text-align: center;\r\n}\r\n:-moz-placeholder { \r\n    color: #D8D8D8;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <div id=\"logo\">\r\n\r\n  </div>\r\n  <div id=\"loginBox\">\r\n    <div id=\"login\">\r\n      <h1 id=\"logTitle\">Login</h1>\r\n      <form class=\"inputs\">\r\n        <input placeholder=\"Email Address\" class=\"inputfields\" type=\"text\" name=\"email\"><br>\r\n        <input placeholder=\"Password\" class=\"inputfields\" type=\"text\" name=\"password\"><br>\r\n        <input class=\"inputfields\" id=\"loginButton\" type=\"submit\" value=\"Login\">\r\n      </form>\r\n      <h3>Don't have an account? <a [routerLink]=\"['']\">Register here!</a></h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/landing/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/landing/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #container{\r\n    background-color: #BEBEBE;\r\n    height: 1100px;\r\n    width: 1100px;\r\n\r\n}\r\n\r\n#logo{\r\n    background-color: lightgray;\r\n    height: 250px;\r\n    width: 700px;\r\n    margin: 0px auto;\r\n}\r\n\r\n#registrationBox{\r\n    width: 700px;\r\n    height: 600px;\r\n    margin: 80px auto 0px;\r\n    background-color: #B6B6B6;\r\n    box-shadow: 7px 7px gray;\r\n} */\r\n\r\n#registration{\r\n    width: 700px;\r\n    height: 600px;\r\n    margin: 80px auto 0px;\r\n    background-color: #C9C9C9;\r\n}\r\n\r\n#regTitle{\r\n    font-family: 'Open Sans', sans-serif;\r\n    color: #555;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    font-size: 50px;\r\n    text-align: center;\r\n    font-weight: 800;\r\n    letter-spacing: 15px;\r\n    padding-top: 50px;\r\n    line-height: 1;\r\n    /* text-shadow: #FFFFFF 3px 2px 0; */\r\n    position: relative;\r\n    \r\n}\r\n\r\n\r\n.inputfields{\r\n    font-size: 30px;\r\n    height: 60px;\r\n    width: 600px;\r\n    margin-top: 20px;\r\n    margin-left: 50px;\r\n    text-transform: uppercase;  \r\n    font-weight: 10;  \r\n    letter-spacing: 1px;    \r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#registerButton{\r\n    height: 60px;\r\n    width: 200px;\r\n    font-size: 30px;\r\n    font-weight: 1000;\r\n    margin-top: 30px;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    text-transform: uppercase;\r\n}\r\nh3{\r\n    display: inline-block;\r\n    margin-left: 350px;\r\n    margin-top: 0px;\r\n}\r\n\r\n::-webkit-input-placeholder { \r\n    color: #D8D8D8;\r\n    text-align: center;\r\n}\r\n::-moz-placeholder { \r\n    color: #D8D8D8;\r\n    text-align: center;\r\n}\r\n:-ms-input-placeholder { \r\n    color: #D8D8D8;\r\n    text-align: center;\r\n}\r\n:-moz-placeholder { \r\n    color: #D8D8D8;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/register/register.component.html":
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<div id=\"container\">\n  <div id=\"logo\">\n\n  </div>\n    <div id=\"registration\">\n      <h1 id=\"regTitle\">Register</h1>\n      <form class=\"inputs\" (submit)=\"onSubmit()\">\n        <input placeholder=\"Username\" class=\"inputfields\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" #username required minlength=\"2\"><br>\n        <input placeholder=\"Email Address\" class=\"inputfields\" type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" #email required minlength=\"5\"><br>\n        <input placeholder=\"Password\" class=\"inputfields\" type=\"text\" name=\"password\" [(ngModel)]=\"user.password\" #password required minlength=\"4\"><br>\n        <input placeholder=\"Confirm Password\" class=\"inputfields\" type=\"text\" name=\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\" #confirmPassword required minlength=\"4\"><br>\n        <input class=\"inputfields\" id=\"registerButton\" type=\"submit\" value=\"Register\">\n      </form>\n      <h3>Already have an account? <a [routerLink]=\"['login']\">Log In Here!</a></h3>\n  </div>\n</div>\n"
=======
module.exports = "<div id=\"container\">\r\n  <div id=\"logo\">\r\n\r\n  </div>\r\n    <div id=\"registration\">\r\n      <h1 id=\"regTitle\">Register</h1>\r\n      <form class=\"inputs\" (submit)=\"onSubmit()\">\r\n        <input placeholder=\"Username\" class=\"inputfields\" type=\"text\" name=\"username\"><br>\r\n        <input placeholder=\"Email Address\" class=\"inputfields\" type=\"text\" name=\"email\"><br>\r\n        <input placeholder=\"Password\" class=\"inputfields\" type=\"text\" name=\"password\"><br>\r\n        <input placeholder=\"Confirm Password\" class=\"inputfields\" type=\"text\" name=\"confirmPassword\"><br>\r\n        <input class=\"inputfields\" id=\"registerButton\" type=\"submit\" value=\"Register\">\r\n      </form>\r\n      <h3>Already have an account? <a [routerLink]=\"['login']\">Log In Here!</a></h3>\r\n  </div>\r\n</div>\r\n"
>>>>>>> f0f6d12071ba93898b453f85a517454337b0869a

/***/ }),

/***/ "../../../../../src/app/landing/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this._dataService.addUser(this.user).then(function (data) {
            if (data.error) {
                console.log(data.error);
            }
            else {
                _this._router.navigateByUrl('success');
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/landing/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/success/success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Success</h1>"

/***/ }),

/***/ "../../../../../src/app/success/success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuccessComponent = (function () {
    function SuccessComponent() {
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-success',
            template: __webpack_require__("../../../../../src/app/success/success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map