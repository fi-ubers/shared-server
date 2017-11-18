webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_business_users_register_register_component__ = __webpack_require__("../../../../../src/app/components/business-users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_business_users_list_list_component__ = __webpack_require__("../../../../../src/app/components/business-users/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_business_users_delete_delete_component__ = __webpack_require__("../../../../../src/app/components/business-users/delete/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_business_users_update_update_component__ = __webpack_require__("../../../../../src/app/components/business-users/update/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_rules_run_all_rules_run_all_rules_component__ = __webpack_require__("../../../../../src/app/components/rules/run-all-rules/run-all-rules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_rules_run_individual_rule_run_individual_rule_component__ = __webpack_require__("../../../../../src/app/components/rules/run-individual-rule/run-individual-rule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_users_delete_user_delete_user_component__ = __webpack_require__("../../../../../src/app/components/users/delete-user/delete-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_users_delete_car_delete_car_component__ = __webpack_require__("../../../../../src/app/components/users/delete-car/delete-car.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_edit_edit_component__ = __webpack_require__("../../../../../src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_business_users_information_information_component__ = __webpack_require__("../../../../../src/app/components/business-users/information/information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_users_users_list_users_list_component__ = __webpack_require__("../../../../../src/app/components/users/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_users_user_information_user_information_component__ = __webpack_require__("../../../../../src/app/components/users/user-information/user-information.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'business-users/register', component: __WEBPACK_IMPORTED_MODULE_18__components_business_users_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'business-users/list', component: __WEBPACK_IMPORTED_MODULE_19__components_business_users_list_list_component__["a" /* ListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'business-users/delete', component: __WEBPACK_IMPORTED_MODULE_20__components_business_users_delete_delete_component__["a" /* DeleteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'business-users/update', component: __WEBPACK_IMPORTED_MODULE_21__components_business_users_update_update_component__["a" /* UpdateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'business-users/information', component: __WEBPACK_IMPORTED_MODULE_27__components_business_users_information_information_component__["a" /* InformationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users/delete', component: __WEBPACK_IMPORTED_MODULE_24__components_users_delete_user_delete_user_component__["a" /* DeleteUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users/list', component: __WEBPACK_IMPORTED_MODULE_28__components_users_users_list_users_list_component__["a" /* UsersListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users/information', component: __WEBPACK_IMPORTED_MODULE_29__components_users_user_information_user_information_component__["a" /* UserInformationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users/cars/delete', component: __WEBPACK_IMPORTED_MODULE_25__components_users_delete_car_delete_car_component__["a" /* DeleteCarComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'rules/run-all-rules', component: __WEBPACK_IMPORTED_MODULE_22__components_rules_run_all_rules_run_all_rules_component__["a" /* RunAllRulesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'rules/run-individual-rules', component: __WEBPACK_IMPORTED_MODULE_23__components_rules_run_individual_rule_run_individual_rule_component__["a" /* RunIndividualRuleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile/edit', component: __WEBPACK_IMPORTED_MODULE_26__components_edit_edit_component__["a" /* EditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_business_users_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_business_users_list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_business_users_delete_delete_component__["a" /* DeleteComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_business_users_update_update_component__["a" /* UpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_rules_run_all_rules_run_all_rules_component__["a" /* RunAllRulesComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_rules_run_individual_rule_run_individual_rule_component__["a" /* RunIndividualRuleComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_users_delete_user_delete_user_component__["a" /* DeleteUserComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_users_delete_car_delete_car_component__["a" /* DeleteCarComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_business_users_information_information_component__["a" /* InformationComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_users_users_list_users_list_component__["a" /* UsersListComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_users_user_information_user_information_component__["a" /* UserInformationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_15_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_16_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_17_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/business-users/delete/delete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/business-users/delete/delete.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Remove business user </h2>\n<form (submit)=\"onDeleteSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Business user id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Delete\">\n  </div>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/business-users/delete/delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteComponent = (function () {
    function DeleteComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    DeleteComponent.prototype.ngOnInit = function () {
    };
    DeleteComponent.prototype.onDeleteSubmit = function () {
        var _this = this;
        this.authService.deleteBusinessUser(this.id).subscribe(function (data) {
            _this.flashMessage.show('Business user ' + _this.id + ' removed!', {
                cssClass: 'alert-success',
                timeout: 5000
            });
        }, function (err) {
            _this.flashMessage.show(err.json().message, {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        });
    };
    return DeleteComponent;
}());
DeleteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-delete',
        template: __webpack_require__("../../../../../src/app/components/business-users/delete/delete.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/business-users/delete/delete.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], DeleteComponent);

var _a, _b;
//# sourceMappingURL=delete.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/business-users/information/information.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/business-users/information/information.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n<h2 class=\"page-header\">Business user information</h2>\n<form (submit)=\"onGetInfoSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Business user id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Get information\">\n  </div>\n</form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Business user {{id}} information </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result._ref}}</li>\n    <li class=\"list-group-item\">Username: {{result.username}}</li>\n    <li class=\"list-group-item\">Password: {{result.password}}</li>\n    <li class=\"list-group-item\">Name: {{result.name}}</li>\n    <li class=\"list-group-item\">Surname: {{result.surname}}</li>\n    <li class=\"list-group-item\">Roles: {{result.roles.join(', ')}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onGetInfoClick()\">Get information about another business user</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/business-users/information/information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformationComponent = (function () {
    function InformationComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    InformationComponent.prototype.ngOnInit = function () {
    };
    InformationComponent.prototype.onGetInfoSubmit = function () {
        var _this = this;
        this.authService.getBusinessUser(this.id).subscribe(function (data) {
            _this.result = data.businessUser;
        }, function (err) {
            _this.flashMessage.show(err.json().message, {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        });
    };
    InformationComponent.prototype.onGetInfoClick = function () {
        this.id = null;
        this.result = null;
    };
    return InformationComponent;
}());
InformationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-information',
        template: __webpack_require__("../../../../../src/app/components/business-users/information/information.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/business-users/information/information.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], InformationComponent);

var _a, _b;
//# sourceMappingURL=information.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/business-users/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/business-users/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2 class=\"page-header\">Business users list </h2>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"input-group input-group-sm input-group-left\">\n      <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n      <span class=\"input-group-addon\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </span>\n    </div>\n  </div>\n</div>\n\n<table class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th (click)=\"sort('id')\">Id\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('_ref')\">_ref\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == '_ref'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('username')\">Username\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'username'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('password')\">Password\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'password'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('name')\">Name\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('surname')\">Surname\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'surname'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('roles')\">Roles\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'roles'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let businessUser of businessUsersList | orderBy: key : reverse | filter:filter | paginate: {itemsPerPage: 10, currentPage: p, totalItems: total }\">\n      <td>{{businessUser.id}}</td>\n      <td>{{businessUser._ref}}</td>\n      <td>{{businessUser.username}}</td>\n      <td>{{businessUser.password}}</td>\n      <td>{{businessUser.name}}</td>\n      <td>{{businessUser.surname}}</td>\n      <td>{{businessUser.roles.join(', ')}}</td>\n    </tr>\n  </tbody>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/business-users/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = (function () {
    function ListComponent(authService) {
        this.authService = authService;
        this.key = 'id';
        this.reverse = false;
        this.p = 1;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getBusinessUsersList().subscribe(function (list) {
            _this.businessUsersList = list.businessUser;
            _this.total = list.metadata.total;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/components/business-users/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/business-users/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], ListComponent);

var _a;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/business-users/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/business-users/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n  <h2 class=\"page-header\">Register business user </h2>\n  <form (submit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Surname</label>\n      <input type=\"text\" [(ngModel)]=\"surname\" name=\"surname\" class=\"form-control\">\n    </div> \n    <label>Roles</label>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"admin\" name=\"admin\"> Admin </label>\n    </div>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"manager\" name=\"manager\"> Manager</label>\n    </div>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"user\" name=\"user\"> User </label>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Registered business user </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result._ref}}</li>\n    <li class=\"list-group-item\">Username: {{result.username}}</li>\n    <li class=\"list-group-item\">Password: {{result.password}}</li>\n    <li class=\"list-group-item\">Name: {{result.name}}</li>\n    <li class=\"list-group-item\">Surname: {{result.surname}}</li>\n    <li class=\"list-group-item\">Roles: {{result.roles.join(', ')}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onRegisterClick()\">Register another business user</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/business-users/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
    function RegisterComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createRolesArray = function () {
        var roles = [];
        if (this.admin) {
            roles.push("admin");
        }
        if (this.manager) {
            roles.push("manager");
        }
        if (this.user) {
            roles.push("user");
        }
        return roles;
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var businessUser = {
            username: this.username,
            password: this.password,
            name: this.name,
            surname: this.surname,
            roles: this.createRolesArray()
        };
        this.authService.registerBusinessUser(businessUser).subscribe(function (data) {
            _this.flashMessage.show('Business user registered!', {
                cssClass: 'alert-success',
                timeout: 5000
            });
            _this.result = data.businessUser;
            _this.router.navigate(['register']);
        }, function (err) {
            _this.flashMessage.show(err.json().message, {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        });
    };
    RegisterComponent.prototype.clearForm = function () {
        this.username = null;
        this.password = null;
        this.name = null;
        this.surname = null;
        this.admin = null;
        this.manager = null;
        this.user = null;
        this.result = null;
    };
    RegisterComponent.prototype.onRegisterClick = function () {
        this.clearForm();
        //this.router.navigate(['register']);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/business-users/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/business-users/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/business-users/update/update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/business-users/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n  <h2 class=\"page-header\">Modify business user </h2>\n  <form (submit)=\"onUpdateSubmit()\">\n    <div class=\"form-group\">\n      <label>Id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>_ref</label>\n      <input type=\"text\" [(ngModel)]=\"_ref\" name=\"_ref\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Surname</label>\n      <input type=\"text\" [(ngModel)]=\"surname\" name=\"surname\" class=\"form-control\">\n    </div> \n    <label>Roles</label>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"admin\" name=\"admin\"> Admin </label>\n    </div>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"manager\" name=\"manager\"> Manager</label>\n    </div>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"user\" name=\"user\"> User </label>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Updated business user </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result._ref}}</li>\n    <li class=\"list-group-item\">Username: {{result.username}}</li>\n    <li class=\"list-group-item\">Password: {{result.password}}</li>\n    <li class=\"list-group-item\">Name: {{result.name}}</li>\n    <li class=\"list-group-item\">Surname: {{result.surname}}</li>\n    <li class=\"list-group-item\">Roles: {{result.roles.join(', ')}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onUpdateClick()\">Modify another business user</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/business-users/update/update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateComponent = (function () {
    function UpdateComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent.prototype.createRolesArray = function () {
        var roles = [];
        if (this.admin) {
            roles.push("admin");
        }
        if (this.manager) {
            roles.push("manager");
        }
        if (this.user) {
            roles.push("user");
        }
        return roles;
    };
    UpdateComponent.prototype.onUpdateSubmit = function () {
        var _this = this;
        var businessUser = {
            _ref: this._ref,
            username: this.username,
            password: this.password,
            name: this.name,
            surname: this.surname,
            roles: this.createRolesArray()
        };
        this.authService.updateBusinessUser(this.id, businessUser).subscribe(function (data) {
            _this.flashMessage.show('Business user updated!', {
                cssClass: 'alert-success',
                timeout: 5000
            });
            _this.result = data.businessUser;
            _this.router.navigate(['update']);
        }, function (err) {
            _this.flashMessage.show(err.json().message, {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        });
    };
    UpdateComponent.prototype.clearForm = function () {
        this.id = null;
        this._ref = null;
        this.username = null;
        this.password = null;
        this.name = null;
        this.surname = null;
        this.admin = null;
        this.manager = null;
        this.user = null;
        this.result = null;
    };
    UpdateComponent.prototype.onUpdateClick = function () {
        this.clearForm();
        //this.router.navigate(['update']);
    };
    return UpdateComponent;
}());
UpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update',
        template: __webpack_require__("../../../../../src/app/components/business-users/update/update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/business-users/update/update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], UpdateComponent);

var _a, _b, _c;
//# sourceMappingURL=update.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your dashboard</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n  <h2 class=\"page-header\">Edit my information </h2>\n  <form (submit)=\"onUpdateSubmit()\">\n    <div class=\"form-group\">\n      <label>_ref</label>\n      <input type=\"text\" [(ngModel)]=\"_ref\" name=\"_ref\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Surname</label>\n      <input type=\"text\" [(ngModel)]=\"surname\" name=\"surname\" class=\"form-control\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Updated information </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result._ref}}</li>\n    <li class=\"list-group-item\">Username: {{result.username}}</li>\n    <li class=\"list-group-item\">Password: {{result.password}}</li>\n    <li class=\"list-group-item\">Name: {{result.name}}</li>\n    <li class=\"list-group-item\">Surname: {{result.surname}}</li>\n    <li class=\"list-group-item\">Roles: {{result.roles.join(', ')}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onUpdateClick()\">Edit again</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = (function () {
    function EditComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent.prototype.onUpdateSubmit = function () {
        var _this = this;
        var businessUser = {
            _ref: this._ref,
            username: this.username,
            password: this.password,
            name: this.name,
            surname: this.surname
        };
        this.authService.editMyInformation(businessUser).subscribe(function (data) {
            _this.flashMessage.show('Information updated!', {
                cssClass: 'alert-success',
                timeout: 5000
            });
            _this.authService.updateUserInStorage({
                username: _this.username,
                password: _this.password
            });
            _this.result = data.businessUser;
            _this.router.navigate(['edit']);
        }, function (err) {
            _this.flashMessage.show(err.json().message, {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        });
    };
    EditComponent.prototype.clearForm = function () {
        this._ref = null;
        this.username = null;
        this.password = null;
        this.name = null;
        this.surname = null;
        this.result = null;
    };
    EditComponent.prototype.onUpdateClick = function () {
        this.clearForm();
        //this.router.navigate(['edit']);
    };
    return EditComponent;
}());
EditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__("../../../../../src/app/components/edit/edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit/edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], EditComponent);

var _a, _b, _c;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1> FIUBER Business Users</h1>\n  <div *ngIf=\"!authService.loggedIn()\">\n    <p class=\"lead\">Welcome users!</p>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n  <div *ngIf=\"authService.loggedIn()\">\n    <p class=\"lead\">Welcome back {{username}}!</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.username = this.authService.getUsername();
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            _this.authService.storeUserData(data.token.token, user);
            _this.flashMessage.show('You are now logged in', {
                cssClass: 'alert-success',
                timeout: 5000
            });
            _this.router.navigate(['dashboard']);
        }, function (err) {
            _this.flashMessage.show(err.json().message, {
                cssClass: 'alert-danger',
                timeout: 5000
            });
            _this.router.navigate(['login']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">FIUBER Business Users</a>\n        </div>\n        \n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n          </ul>\n          \n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n            \n            <li class=\"nav-item dropdown\" *ngIf=\"authService.roleLoggedIn('user')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" dropdown>\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>Profile <span class=\"caret\"></span>\n            </a>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/profile']\">My information</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/profile/edit']\">Edit information</a></li>\n            </ul>\n            </li>\n            \n            <li class=\"nav-item dropdown\" *ngIf=\"authService.roleLoggedIn('admin') || authService.roleLoggedIn('user')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" dropdown>\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>Business Users <span class=\"caret\"></span>\n            </a>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li *ngIf=\"authService.roleLoggedIn('admin')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/business-users/register']\">Register business user</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('admin')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/business-users/list']\">Business users list</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('admin')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/business-users/delete']\">Delete business user</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('admin')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/business-users/update']\">Modify business user</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/business-users/information']\">Information of a business user</a></li>\n            </ul>\n            </li>\n            \n            <li class=\"nav-item dropdown\" *ngIf=\"authService.roleLoggedIn('manager') || authService.roleLoggedIn('user')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" dropdown>\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>Users <span class=\"caret\"></span>\n            </a>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/users/list']\">Application users list</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/users/information']\">Information of an application user</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('admin')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/users/delete']\">Delete application user</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('admin')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/users/cars/delete']\">Delete user car</a></li>\n            </ul>\n            </li>\n            \n            <li class=\"nav-item dropdown\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" dropdown>\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>Rules <span class=\"caret\"></span>\n            </a>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li *ngIf=\"authService.roleLoggedIn('admin')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/business-users/register']\">Run set of rules</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('admin')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/business-users/list']\">Run individual rule</a></li>\n            </ul>\n            </li>\n            \n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 5000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name + ' ' + user.surname}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{user.id}}</li>\n    <li class=\"list-group-item\">_ref: {{user._ref}}</li>\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Password: {{user.password}}</li>\n    <li class=\"list-group-item\">Roles: {{user.roles.join(', ')}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.businessUser;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/rules/run-all-rules/run-all-rules.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/rules/run-all-rules/run-all-rules.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  run-all-rules works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/rules/run-all-rules/run-all-rules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunAllRulesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RunAllRulesComponent = (function () {
    function RunAllRulesComponent() {
    }
    RunAllRulesComponent.prototype.ngOnInit = function () {
    };
    return RunAllRulesComponent;
}());
RunAllRulesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-run-all-rules',
        template: __webpack_require__("../../../../../src/app/components/rules/run-all-rules/run-all-rules.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/rules/run-all-rules/run-all-rules.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RunAllRulesComponent);

//# sourceMappingURL=run-all-rules.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/rules/run-individual-rule/run-individual-rule.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/rules/run-individual-rule/run-individual-rule.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  run-individual-rule works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/rules/run-individual-rule/run-individual-rule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunIndividualRuleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RunIndividualRuleComponent = (function () {
    function RunIndividualRuleComponent() {
    }
    RunIndividualRuleComponent.prototype.ngOnInit = function () {
    };
    return RunIndividualRuleComponent;
}());
RunIndividualRuleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-run-individual-rule',
        template: __webpack_require__("../../../../../src/app/components/rules/run-individual-rule/run-individual-rule.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/rules/run-individual-rule/run-individual-rule.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RunIndividualRuleComponent);

//# sourceMappingURL=run-individual-rule.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/delete-car/delete-car.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/delete-car/delete-car.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Remove car of application user </h2>\n<form (submit)=\"onDeleteSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Application user id</label>\n      <input type=\"text\" [(ngModel)]=\"userId\" name=\"userId\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Application user car id</label>\n      <input type=\"text\" [(ngModel)]=\"carId\" name=\"carId\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Delete\">\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/delete-car/delete-car.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteCarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteCarComponent = (function () {
    function DeleteCarComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    DeleteCarComponent.prototype.ngOnInit = function () {
    };
    DeleteCarComponent.prototype.onDeleteSubmit = function () {
        var _this = this;
        if (!this.userId || !this.carId) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.deleteCar(this.userId, this.carId).subscribe(function (data) {
                _this.flashMessage.show('Car ' + _this.carId + 'of application user ' + _this.userId + ' removed!', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    return DeleteCarComponent;
}());
DeleteCarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-delete-car',
        template: __webpack_require__("../../../../../src/app/components/users/delete-car/delete-car.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users/delete-car/delete-car.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], DeleteCarComponent);

var _a, _b;
//# sourceMappingURL=delete-car.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/delete-user/delete-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/delete-user/delete-user.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Remove application user </h2>\n<form (submit)=\"onDeleteSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Application user id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Delete\">\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/delete-user/delete-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteUserComponent = (function () {
    function DeleteUserComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    DeleteUserComponent.prototype.ngOnInit = function () {
    };
    DeleteUserComponent.prototype.onDeleteSubmit = function () {
        var _this = this;
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.deleteUser(this.id).subscribe(function (data) {
                _this.flashMessage.show('Application user ' + _this.id + ' removed!', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    return DeleteUserComponent;
}());
DeleteUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-delete-user',
        template: __webpack_require__("../../../../../src/app/components/users/delete-user/delete-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users/delete-user/delete-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], DeleteUserComponent);

var _a, _b;
//# sourceMappingURL=delete-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/user-information/user-information.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/user-information/user-information.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n<h2 class=\"page-header\">Application user information</h2>\n<form (submit)=\"onGetInfoSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Application user id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Get information\">\n  </div>\n</form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Application user {{id}} information </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result._ref}}</li>\n    <li class=\"list-group-item\">Application owner: {{result.applicationOwner}}</li>\n    <li class=\"list-group-item\">Type: {{result.type}}</li>\n    <li class=\"list-group-item\">Cars: [ {{getUserCars(result.cars)}} ]</li>\n    <li class=\"list-group-item\">Username: {{result.username}}</li>\n    <li class=\"list-group-item\">Name: {{result.name}}</li>\n    <li class=\"list-group-item\">Surname: {{result.surname}}</li>\n    <li class=\"list-group-item\">Country: {{result.country}}</li>\n    <li class=\"list-group-item\">Email: {{result.email}}</li>\n    <li class=\"list-group-item\">Birthdate: {{result.birthdate}}</li>\n    <li class=\"list-group-item\">Images: [ {{result.images.join(', ')}} ]</li>\n    <li class=\"list-group-item\">Balance: [ {{getUserBalance(result.balance)}} ]</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onGetInfoClick()\">Get information about another application user</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/user-information/user-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInformationComponent = (function () {
    function UserInformationComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    UserInformationComponent.prototype.ngOnInit = function () {
    };
    UserInformationComponent.prototype.onGetInfoSubmit = function () {
        var _this = this;
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.getUser(this.id).subscribe(function (data) {
                _this.result = data.user;
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    UserInformationComponent.prototype.onGetInfoClick = function () {
        this.id = null;
        this.result = null;
    };
    UserInformationComponent.prototype.getUserCars = function (cars) {
        return cars.map(function (car) { return JSON.stringify(car); }).join(', ');
    };
    UserInformationComponent.prototype.getUserBalance = function (balance) {
        return balance.map(function (cost) { return JSON.stringify(cost); }).join(', ');
    };
    return UserInformationComponent;
}());
UserInformationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-information',
        template: __webpack_require__("../../../../../src/app/components/users/user-information/user-information.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users/user-information/user-information.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], UserInformationComponent);

var _a, _b;
//# sourceMappingURL=user-information.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/users-list/users-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/users-list/users-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2 class=\"page-header\">Application users list </h2>\n  </div>\n  <div *ngIf=\"total > 0\" class=\"col-md-6\">\n    <div class=\"input-group input-group-sm input-group-left\">\n      <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n      <span class=\"input-group-addon\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </span>\n    </div>\n  </div>\n</div>\n\n<p *ngIf=\"total == 0\" class=\"lead\"> Sorry :( <p>\n<p *ngIf=\"total == 0\" class=\"lead\"> There are no registered users at the moment. <span class=\"glyphicon glyphicon-phone\"></span> <span class=\"glyphicon glyphicon-road\"></span></p>\n\n<table *ngIf=\"total > 0\" class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th (click)=\"sort('id')\">Id\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('_ref')\">_ref\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == '_ref'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('applicationOwner')\">Application owner\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'applicationOwner'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('type')\">Type\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'type'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('cars')\">Cars\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'cars'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('username')\">Username\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'username'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('name')\">Name\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('surname')\">Surname\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'surname'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('country')\">Country\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'country'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('email')\">Email\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'email'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('birthdate')\">Birthdate\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'birthdate'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('images')\">Images\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'images'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('balance')\">Balance\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'balance'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of usersList | orderBy: key : reverse | filter:filter | paginate: {itemsPerPage: 10, currentPage: p, totalItems: total }\">\n      <td>{{user.id}}</td>\n      <td>{{user._ref}}</td>\n      <td>{{user.applicationOwner}}</td>\n      <td>{{user.type}}</td>\n      <td>{{obtainUserCars(user.cars)}}</td>\n      <td>{{user.username}}</td>\n      <td>{{user.name}}</td>\n      <td>{{user.surname}}</td>\n      <td>{{user.country}}</td>\n      <td>{{user.email}}</td>\n      <td>{{user.birthdate}}</td>\n      <td>{{user.images.join(', ')}}</td>\n      <td>{{obtainUserBalance(user.balance)}}</td>\n    </tr>\n  </tbody>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/users-list/users-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersListComponent = (function () {
    function UsersListComponent(authService) {
        this.authService = authService;
        this.key = 'id';
        this.reverse = false;
        this.p = 1;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUsersList().subscribe(function (list) {
            _this.usersList = list.users;
            _this.total = list.metadata.total;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    UsersListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    UsersListComponent.prototype.obtainUserCars = function (cars) {
        return cars.map(function (car) { return JSON.stringify(car); }).join(', ');
    };
    UsersListComponent.prototype.obtainUserBalance = function (balance) {
        return balance.map(function (cost) { return JSON.stringify(cost); }).join(', ');
    };
    return UsersListComponent;
}());
UsersListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users-list',
        template: __webpack_require__("../../../../../src/app/components/users/users-list/users-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users/users-list/users-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UsersListComponent);

var _a;
//# sourceMappingURL=users-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
    }
    AuthService.prototype.authenticateUser = function (user) {
        var uri = 'api/token';
        //let uri = 'http://localhost:5000/api/token';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(uri, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.roleLoggedIn = function (role) {
        var roles = localStorage.getItem('user_roles');
        if (!roles) {
            return false;
        }
        return this.loggedIn && roles.includes(role);
    };
    AuthService.prototype.registerBusinessUser = function (user) {
        var uri = 'api/business-users/';
        //let uri = 'http://localhost:5000/api/business-users/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.post(uri + '?token=' + this.authToken, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteBusinessUser = function (id) {
        var uri = 'api/business-users/' + id;
        //let uri = 'http://localhost:5000/api/business-users/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateBusinessUser = function (id, user) {
        var uri = 'api/business-users/' + id;
        //let uri = 'http://localhost:5000/api/business-users/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.put(uri + '?token=' + this.authToken, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getBusinessUser = function (id) {
        var uri = 'api/business-users/' + id;
        //let uri = 'http://localhost:5000/api/business-users/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUser = function (id) {
        var uri = 'api/users/' + id;
        //let uri = 'http://localhost:5000/api/users/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteUser = function (id) {
        var uri = 'api/users/' + id;
        //let uri = 'http://localhost:5000/api/users/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteCar = function (userId, carId) {
        var uri = 'api/users/' + userId + '/cars/' + carId;
        //let uri = 'http://localhost:5000/api/users/' + userId + '/cars/' + carId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var uri = 'api/business-users/me';
        //let uri = 'http://localhost:5000/api/business-users/me';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.editMyInformation = function (user) {
        var uri = 'api/business-users/me';
        //let uri = 'http://localhost:5000/api/business-users/me';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.put(uri + '?token=' + this.authToken, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getBusinessUsersList = function () {
        var uri = 'api/business-users/';
        //let uri = 'http://localhost:5000/api/business-users/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUsersList = function () {
        var uri = 'api/users/';
        //let uri = 'http://localhost:5000/api/users/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('user_roles', this.jwtHelper.decodeToken(token).roles);
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.updateUserInStorage = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
    };
    AuthService.prototype.getUsername = function () {
        return JSON.parse(localStorage.getItem('user')).username;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map