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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_admin_auth_guard__ = __webpack_require__("../../../../../src/app/guards/admin-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_manager_auth_guard__ = __webpack_require__("../../../../../src/app/guards/manager-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__ = __webpack_require__("../../../../../src/app/guards/user-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_business_users_register_register_component__ = __webpack_require__("../../../../../src/app/components/business-users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_business_users_list_list_component__ = __webpack_require__("../../../../../src/app/components/business-users/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_business_users_delete_delete_component__ = __webpack_require__("../../../../../src/app/components/business-users/delete/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_business_users_update_update_component__ = __webpack_require__("../../../../../src/app/components/business-users/update/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_rules_run_all_rules_run_all_rules_component__ = __webpack_require__("../../../../../src/app/components/rules/run-all-rules/run-all-rules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_rules_run_individual_rule_run_individual_rule_component__ = __webpack_require__("../../../../../src/app/components/rules/run-individual-rule/run-individual-rule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_users_delete_user_delete_user_component__ = __webpack_require__("../../../../../src/app/components/users/delete-user/delete-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_users_delete_car_delete_car_component__ = __webpack_require__("../../../../../src/app/components/users/delete-car/delete-car.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_edit_edit_component__ = __webpack_require__("../../../../../src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_business_users_information_information_component__ = __webpack_require__("../../../../../src/app/components/business-users/information/information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_users_users_list_users_list_component__ = __webpack_require__("../../../../../src/app/components/users/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_users_user_information_user_information_component__ = __webpack_require__("../../../../../src/app/components/users/user-information/user-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_users_cars_list_cars_list_component__ = __webpack_require__("../../../../../src/app/components/users/cars-list/cars-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_users_cars_information_cars_information_component__ = __webpack_require__("../../../../../src/app/components/users/cars-information/cars-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_users_transactions_list_transactions_list_component__ = __webpack_require__("../../../../../src/app/components/users/transactions-list/transactions-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_users_user_trips_list_user_trips_list_component__ = __webpack_require__("../../../../../src/app/components/users/user-trips-list/user-trips-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_paymethods_paymethods_component__ = __webpack_require__("../../../../../src/app/components/paymethods/paymethods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_trips_trips_list_trips_list_component__ = __webpack_require__("../../../../../src/app/components/trips/trips-list/trips-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_trips_trip_information_trip_information_component__ = __webpack_require__("../../../../../src/app/components/trips/trip-information/trip-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_servers_servers_list_servers_list_component__ = __webpack_require__("../../../../../src/app/components/servers/servers-list/servers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_servers_server_information_server_information_component__ = __webpack_require__("../../../../../src/app/components/servers/server-information/server-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_rules_rules_list_rules_list_component__ = __webpack_require__("../../../../../src/app/components/rules/rules-list/rules-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_rules_rule_information_rule_information_component__ = __webpack_require__("../../../../../src/app/components/rules/rule-information/rule-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_servers_register_server_register_server_component__ = __webpack_require__("../../../../../src/app/components/servers/register-server/register-server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_servers_update_server_update_server_component__ = __webpack_require__("../../../../../src/app/components/servers/update-server/update-server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_servers_server_reset_token_server_reset_token_component__ = __webpack_require__("../../../../../src/app/components/servers/server-reset-token/server-reset-token.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_servers_delete_server_delete_server_component__ = __webpack_require__("../../../../../src/app/components/servers/delete-server/delete-server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_rules_create_rule_create_rule_component__ = __webpack_require__("../../../../../src/app/components/rules/create-rule/create-rule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_rules_delete_rule_delete_rule_component__ = __webpack_require__("../../../../../src/app/components/rules/delete-rule/delete-rule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_rules_update_rule_update_rule_component__ = __webpack_require__("../../../../../src/app/components/rules/update-rule/update-rule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_rules_commits_list_commits_list_component__ = __webpack_require__("../../../../../src/app/components/rules/commits-list/commits-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_rules_rule_at_commit_rule_at_commit_component__ = __webpack_require__("../../../../../src/app/components/rules/rule-at-commit/rule-at-commit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_servers_current_state_current_state_component__ = __webpack_require__("../../../../../src/app/components/servers/current-state/current-state.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'business-users/register', component: __WEBPACK_IMPORTED_MODULE_20__components_business_users_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_admin_auth_guard__["a" /* AdminAuthGuard */]] },
    { path: 'business-users/list', component: __WEBPACK_IMPORTED_MODULE_21__components_business_users_list_list_component__["a" /* ListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_admin_auth_guard__["a" /* AdminAuthGuard */]] },
    { path: 'business-users/delete', component: __WEBPACK_IMPORTED_MODULE_22__components_business_users_delete_delete_component__["a" /* DeleteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_admin_auth_guard__["a" /* AdminAuthGuard */]] },
    { path: 'business-users/update', component: __WEBPACK_IMPORTED_MODULE_23__components_business_users_update_update_component__["a" /* UpdateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_admin_auth_guard__["a" /* AdminAuthGuard */]] },
    { path: 'business-users/information', component: __WEBPACK_IMPORTED_MODULE_29__components_business_users_information_information_component__["a" /* InformationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'users/delete', component: __WEBPACK_IMPORTED_MODULE_26__components_users_delete_user_delete_user_component__["a" /* DeleteUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_manager_auth_guard__["a" /* ManagerAuthGuard */]] },
    { path: 'users/list', component: __WEBPACK_IMPORTED_MODULE_30__components_users_users_list_users_list_component__["a" /* UsersListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'users/information', component: __WEBPACK_IMPORTED_MODULE_31__components_users_user_information_user_information_component__["a" /* UserInformationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'users/cars/delete', component: __WEBPACK_IMPORTED_MODULE_27__components_users_delete_car_delete_car_component__["a" /* DeleteCarComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_manager_auth_guard__["a" /* ManagerAuthGuard */]] },
    { path: 'users/cars/list', component: __WEBPACK_IMPORTED_MODULE_32__components_users_cars_list_cars_list_component__["a" /* CarsListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'users/cars/information', component: __WEBPACK_IMPORTED_MODULE_33__components_users_cars_information_cars_information_component__["a" /* CarsInformationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'users/transactions/list', component: __WEBPACK_IMPORTED_MODULE_34__components_users_transactions_list_transactions_list_component__["a" /* TransactionsListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'users/trips/list', component: __WEBPACK_IMPORTED_MODULE_35__components_users_user_trips_list_user_trips_list_component__["a" /* UserTripsListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'servers/list', component: __WEBPACK_IMPORTED_MODULE_39__components_servers_servers_list_servers_list_component__["a" /* ServersListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'servers/current-state', component: __WEBPACK_IMPORTED_MODULE_52__components_servers_current_state_current_state_component__["a" /* CurrentStateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'servers/information', component: __WEBPACK_IMPORTED_MODULE_40__components_servers_server_information_server_information_component__["a" /* ServerInformationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'servers/register', component: __WEBPACK_IMPORTED_MODULE_43__components_servers_register_server_register_server_component__["a" /* RegisterServerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_manager_auth_guard__["a" /* ManagerAuthGuard */]] },
    { path: 'servers/update', component: __WEBPACK_IMPORTED_MODULE_44__components_servers_update_server_update_server_component__["a" /* UpdateServerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_manager_auth_guard__["a" /* ManagerAuthGuard */]] },
    { path: 'servers/reset-token', component: __WEBPACK_IMPORTED_MODULE_45__components_servers_server_reset_token_server_reset_token_component__["a" /* ServerResetTokenComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_manager_auth_guard__["a" /* ManagerAuthGuard */]] },
    { path: 'servers/delete', component: __WEBPACK_IMPORTED_MODULE_46__components_servers_delete_server_delete_server_component__["a" /* DeleteServerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_manager_auth_guard__["a" /* ManagerAuthGuard */]] },
    { path: 'trips/list', component: __WEBPACK_IMPORTED_MODULE_37__components_trips_trips_list_trips_list_component__["a" /* TripsListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'trips/information', component: __WEBPACK_IMPORTED_MODULE_38__components_trips_trip_information_trip_information_component__["a" /* TripInformationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'rules/run-all-rules', component: __WEBPACK_IMPORTED_MODULE_24__components_rules_run_all_rules_run_all_rules_component__["a" /* RunAllRulesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_admin_auth_guard__["a" /* AdminAuthGuard */]] },
    { path: 'rules/run-individual-rule', component: __WEBPACK_IMPORTED_MODULE_25__components_rules_run_individual_rule_run_individual_rule_component__["a" /* RunIndividualRuleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_admin_auth_guard__["a" /* AdminAuthGuard */]] },
    { path: 'rules/list', component: __WEBPACK_IMPORTED_MODULE_41__components_rules_rules_list_rules_list_component__["a" /* RulesListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'rules/create', component: __WEBPACK_IMPORTED_MODULE_47__components_rules_create_rule_create_rule_component__["a" /* CreateRuleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_manager_auth_guard__["a" /* ManagerAuthGuard */]] },
    { path: 'rules/update', component: __WEBPACK_IMPORTED_MODULE_49__components_rules_update_rule_update_rule_component__["a" /* UpdateRuleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_manager_auth_guard__["a" /* ManagerAuthGuard */]] },
    { path: 'rules/delete', component: __WEBPACK_IMPORTED_MODULE_48__components_rules_delete_rule_delete_rule_component__["a" /* DeleteRuleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_manager_auth_guard__["a" /* ManagerAuthGuard */]] },
    { path: 'rules/information', component: __WEBPACK_IMPORTED_MODULE_42__components_rules_rule_information_rule_information_component__["a" /* RuleInformationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'rules/commits/list', component: __WEBPACK_IMPORTED_MODULE_50__components_rules_commits_list_commits_list_component__["a" /* CommitsListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_manager_auth_guard__["a" /* ManagerAuthGuard */]] },
    { path: 'rules/commits/rule-at-commit', component: __WEBPACK_IMPORTED_MODULE_51__components_rules_rule_at_commit_rule_at_commit_component__["a" /* RuleAtCommitComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_manager_auth_guard__["a" /* ManagerAuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'profile/edit', component: __WEBPACK_IMPORTED_MODULE_28__components_edit_edit_component__["a" /* EditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] },
    { path: 'paymethods', component: __WEBPACK_IMPORTED_MODULE_36__components_paymethods_paymethods_component__["a" /* PaymethodsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]] }
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
            __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_business_users_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_business_users_list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_business_users_delete_delete_component__["a" /* DeleteComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_business_users_update_update_component__["a" /* UpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_rules_run_all_rules_run_all_rules_component__["a" /* RunAllRulesComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_rules_run_individual_rule_run_individual_rule_component__["a" /* RunIndividualRuleComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_users_delete_user_delete_user_component__["a" /* DeleteUserComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_users_delete_car_delete_car_component__["a" /* DeleteCarComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_business_users_information_information_component__["a" /* InformationComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_users_users_list_users_list_component__["a" /* UsersListComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_users_user_information_user_information_component__["a" /* UserInformationComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_users_cars_list_cars_list_component__["a" /* CarsListComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_users_cars_information_cars_information_component__["a" /* CarsInformationComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_users_transactions_list_transactions_list_component__["a" /* TransactionsListComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_users_user_trips_list_user_trips_list_component__["a" /* UserTripsListComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_paymethods_paymethods_component__["a" /* PaymethodsComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_trips_trips_list_trips_list_component__["a" /* TripsListComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_trips_trip_information_trip_information_component__["a" /* TripInformationComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_servers_servers_list_servers_list_component__["a" /* ServersListComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_servers_server_information_server_information_component__["a" /* ServerInformationComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_rules_rules_list_rules_list_component__["a" /* RulesListComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_rules_rule_information_rule_information_component__["a" /* RuleInformationComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_servers_register_server_register_server_component__["a" /* RegisterServerComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_servers_update_server_update_server_component__["a" /* UpdateServerComponent */],
            __WEBPACK_IMPORTED_MODULE_45__components_servers_server_reset_token_server_reset_token_component__["a" /* ServerResetTokenComponent */],
            __WEBPACK_IMPORTED_MODULE_46__components_servers_delete_server_delete_server_component__["a" /* DeleteServerComponent */],
            __WEBPACK_IMPORTED_MODULE_47__components_rules_create_rule_create_rule_component__["a" /* CreateRuleComponent */],
            __WEBPACK_IMPORTED_MODULE_48__components_rules_delete_rule_delete_rule_component__["a" /* DeleteRuleComponent */],
            __WEBPACK_IMPORTED_MODULE_49__components_rules_update_rule_update_rule_component__["a" /* UpdateRuleComponent */],
            __WEBPACK_IMPORTED_MODULE_50__components_rules_commits_list_commits_list_component__["a" /* CommitsListComponent */],
            __WEBPACK_IMPORTED_MODULE_51__components_rules_rule_at_commit_rule_at_commit_component__["a" /* RuleAtCommitComponent */],
            __WEBPACK_IMPORTED_MODULE_52__components_servers_current_state_current_state_component__["a" /* CurrentStateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_17_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_18_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_19_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__guards_admin_auth_guard__["a" /* AdminAuthGuard */], __WEBPACK_IMPORTED_MODULE_14__guards_manager_auth_guard__["a" /* ManagerAuthGuard */], __WEBPACK_IMPORTED_MODULE_15__guards_user_auth_guard__["a" /* UserAuthGuard */]],
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
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
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
        }
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

module.exports = "<div *ngIf=\"!result\">\n  <h2 class=\"page-header\">Register business user </h2>\n  <form (submit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Surname</label>\n      <input type=\"text\" [(ngModel)]=\"surname\" name=\"surname\" class=\"form-control\">\n    </div> \n    <label>Roles</label>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"admin\" name=\"admin\"> Admin </label>\n    </div>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"manager\" name=\"manager\"> Manager</label>\n    </div>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"user\" name=\"user\"> User </label>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Register business user\">\n  </form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Registered business user </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result._ref}}</li>\n    <li class=\"list-group-item\">Username: {{result.username}}</li>\n    <li class=\"list-group-item\">Password: {{result.password}}</li>\n    <li class=\"list-group-item\">Name: {{result.name}}</li>\n    <li class=\"list-group-item\">Surname: {{result.surname}}</li>\n    <li class=\"list-group-item\">Roles: {{result.roles.join(', ')}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onRegisterClick()\">Register another business user</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/business-users/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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



var RegisterComponent = (function () {
    function RegisterComponent(authService, flashMessage) {
        this.authService = authService;
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
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/business-users/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/business-users/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
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



var UpdateComponent = (function () {
    function UpdateComponent(authService, flashMessage) {
        this.authService = authService;
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
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.updateBusinessUser(this.id, businessUser).subscribe(function (data) {
                _this.flashMessage.show('Business user updated!', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.result = data.businessUser;
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
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
    };
    return UpdateComponent;
}());
UpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update',
        template: __webpack_require__("../../../../../src/app/components/business-users/update/update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/business-users/update/update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], UpdateComponent);

var _a, _b;
//# sourceMappingURL=update.component.js.map

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

module.exports = "<div>\n  <div class=\"jumbotron text-center\" style=\"background: url(../../../assets/path.jpg) no-repeat center bottom fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; -background-size: cover;\">\n  </div>\n  <div class=\"jumbotron text-center\" >\n    <h1> FIUBER Business Users</h1>\n    <div *ngIf=\"!authService.loggedIn()\">\n      <p class=\"lead\">Welcome users!</p>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n    </div>\n    <div *ngIf=\"authService.loggedIn()\">\n      <p class=\"lead\">Welcome {{username}}!</p>\n    </div>\n  </div>\n  <div class=\"jumbotron text-center\" style=\"background: url(../../../assets/path.jpg) no-repeat center bottom fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; -background-size: cover;\">\n  </div>\n</div>\n"

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
            _this.router.navigate(['']);
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

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">FIUBER Business Users</a>\n        </div>\n        \n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n          </ul>\n          \n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            \n            <li class=\"nav-item dropdown\" *ngIf=\"authService.roleLoggedIn('user')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" dropdown>\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>Profile <span class=\"caret\"></span>\n            </a>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/profile']\">My information</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/profile/edit']\">Edit information</a></li>\n            </ul>\n            </li>\n            \n            <li class=\"nav-item dropdown\" *ngIf=\"authService.roleLoggedIn('admin') || authService.roleLoggedIn('user')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" dropdown>\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>Business Users <span class=\"caret\"></span>\n            </a>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li *ngIf=\"authService.roleLoggedIn('admin')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/business-users/register']\">Register business user</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('admin')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/business-users/list']\">Business users list</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('admin')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/business-users/delete']\">Delete business user</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('admin')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/business-users/update']\">Modify business user</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/business-users/information']\">Information of a business user</a></li>\n            </ul>\n            </li>\n            \n            <li class=\"nav-item dropdown\" *ngIf=\"authService.roleLoggedIn('manager') || authService.roleLoggedIn('user')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" dropdown>\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>Users <span class=\"caret\"></span>\n            </a>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/users/list']\">Application users list</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/users/information']\">Information of an application user</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('manager')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/users/delete']\">Delete application user</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/users/cars/list']\">Application user cars list</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/users/cars/information']\">Information of an application user car</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/users/transactions/list']\">Application user transactions list</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/users/trips/list']\">Application user trips list</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('manager')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/users/cars/delete']\">Delete user car</a></li>\n            </ul>\n            </li>\n            \n            <li class=\"nav-item dropdown\" *ngIf=\"authService.roleLoggedIn('manager') || authService.roleLoggedIn('user')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" dropdown>\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>Servers <span class=\"caret\"></span>\n            </a>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/servers/list']\">Servers list</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/servers/information']\">Server information</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('manager')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/servers/register']\">Register server</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('manager')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/servers/update']\">Update server</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('manager')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/servers/reset-token']\">Reset server token</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('manager')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/servers/delete']\">Delete server</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/servers/current-state']\">Current state</a></li>\n            </ul>\n            </li>\n            \n            <li class=\"nav-item dropdown\" *ngIf=\"authService.roleLoggedIn('user')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" dropdown>\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>Trips <span class=\"caret\"></span>\n            </a>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/trips/list']\">Trips list</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/trips/information']\">Trip information</a></li>\n            </ul>\n            </li>\n            \n            <li *ngIf=\"authService.roleLoggedIn('user')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/paymethods']\">Paymethods</a></li>\n            \n            <li class=\"nav-item dropdown\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" dropdown>\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>Rules <span class=\"caret\"></span>\n            </a>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li *ngIf=\"authService.roleLoggedIn('admin')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/rules/run-all-rules']\">Run set of rules</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('admin')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/rules/run-individual-rule']\">Run individual rule</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/rules/list']\">Rules list</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('user')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/rules/information']\">Rule information</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('manager')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/rules/create']\">Create rule</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('manager')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/rules/update']\">Update rule</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('manager')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/rules/delete']\">Delete rule</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('manager')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/rules/commits/list']\">Commits list</a></li>\n              <li *ngIf=\"authService.roleLoggedIn('manager')\" role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/rules/commits/rule-at-commit']\">Get rule in commit state</a></li>\n            </ul>\n            </li>\n            \n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n</nav>\n"

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

/***/ "../../../../../src/app/components/paymethods/paymethods.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/paymethods/paymethods.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2 class=\"page-header\">Payment methods supported </h2>\n  </div>\n  <div *ngIf=\"total > 0\" class=\"col-md-6\">\n    <div class=\"input-group input-group-sm input-group-left\">\n      <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n      <span class=\"input-group-addon\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </span>\n    </div>\n  </div>\n</div>\n\n<p *ngIf=\"total == 0\" class=\"lead\"> Sorry :( <p>\n<p *ngIf=\"total == 0\" class=\"lead\"> There are no supported paymethods at the moment. <span class=\"glyphicon glyphicon-usd\"></span> <span class=\"glyphicon glyphicon-credit-card\"></span> </p>\n\n<table *ngIf=\"total > 0\" class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th (click)=\"sort('name')\">Name\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('parameters')\">Parameters\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'parameters'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let paymethod of paymethodsList | orderBy: key : reverse | filter:filter | paginate: {itemsPerPage: 10, currentPage: p, totalItems: total }\">\n      <td>{{paymethod.name}}</td>\n      <td>{{obtainPaymethodParameters(paymethod.parameters)}}</td>\n    </tr>\n  </tbody>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/paymethods/paymethods.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymethodsComponent; });
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


var PaymethodsComponent = (function () {
    function PaymethodsComponent(authService) {
        this.authService = authService;
        this.key = 'name';
        this.reverse = false;
        this.p = 1;
    }
    PaymethodsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getPaymethodsList().subscribe(function (list) {
            _this.paymethodsList = list.paymethods;
            _this.total = list.metadata.total;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PaymethodsComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    PaymethodsComponent.prototype.obtainPaymethodParameters = function (parameters) {
        return JSON.stringify(parameters, undefined, 2);
    };
    return PaymethodsComponent;
}());
PaymethodsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paymethods',
        template: __webpack_require__("../../../../../src/app/components/paymethods/paymethods.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/paymethods/paymethods.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], PaymethodsComponent);

var _a;
//# sourceMappingURL=paymethods.component.js.map

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

/***/ "../../../../../src/app/components/rules/commits-list/commits-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/rules/commits-list/commits-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!commitsList\">\n<h2 class=\"page-header\">List commits of rule</h2>\n<form (submit)=\"onGetListSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Rule id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Get list of commits\">\n  </div>\n</form>\n</div>\n\n<div *ngIf=\"commitsList\">\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2 class=\"page-header\">Rule {{id}} commits list </h2>\n  </div>\n  <div *ngIf=\"total > 0\" class=\"col-md-6\">\n    <div class=\"input-group input-group-sm input-group-left\">\n      <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n      <span class=\"input-group-addon\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </span>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"total == 0\">\n  <p class=\"lead\"> Sorry :( <p>\n  <p class=\"lead\"> There are no registered commits at the moment. <span class=\"glyphicon glyphicon-folder-open\"></span></p>\n  <a class=\"btn btn-primary\" (click)=\"onGetListClick()\">Consult commits of another rule</a>\n</div>\n\n<table *ngIf=\"total > 0\" class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th (click)=\"sort('id')\">Id\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('author')\">Author\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'author'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('message')\">Message\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'message'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('timestamp')\">Timestamp\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'timestamp'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let commit of commitsList | orderBy: key : reverse | filter:filter | paginate: {itemsPerPage: 10, currentPage: p, totalItems: total }\">\n      <td>{{commit.id}}</td>\n      <td>{{getCommitAuthor(commit.author)}}</td>\n      <td>{{commit.message}}</td>\n      <td>{{commit.timestamp}}</td>\n    </tr>\n  </tbody>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</table>\n<a *ngIf=\"total > 0\" class=\"btn btn-primary\" (click)=\"onGetListClick()\">Consult commits of another rule</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/rules/commits-list/commits-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommitsListComponent; });
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



var CommitsListComponent = (function () {
    function CommitsListComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.key = 'id';
        this.reverse = false;
        this.p = 1;
    }
    CommitsListComponent.prototype.ngOnInit = function () {
    };
    CommitsListComponent.prototype.onGetListSubmit = function () {
        var _this = this;
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.getCommitsList(this.id).subscribe(function (list) {
                _this.commitsList = list.commits;
                _this.total = list.metadata.total;
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    CommitsListComponent.prototype.onGetListClick = function () {
        this.id = null;
        this.commitsList = null;
        this.total = null;
        this.key = 'id';
        this.reverse = false;
        this.p = 1;
    };
    CommitsListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    CommitsListComponent.prototype.getCommitAuthor = function (author) {
        return JSON.stringify(author, undefined, 2);
    };
    return CommitsListComponent;
}());
CommitsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-commits-list',
        template: __webpack_require__("../../../../../src/app/components/rules/commits-list/commits-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/rules/commits-list/commits-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], CommitsListComponent);

var _a, _b;
//# sourceMappingURL=commits-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/rules/create-rule/create-rule.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/rules/create-rule/create-rule.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n  <h2 class=\"page-header\">Create rule </h2>\n  <form (submit)=\"onCreateSubmit()\">\n    <div class=\"form-group\">\n      <label>Language</label>\n      <input type=\"text\" [(ngModel)]=\"language\" name=\"language\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Blob</label>\n      <textarea rows=\"5\" [(ngModel)]=\"blob\" name=\"blob\" class=\"form-control\"></textarea>\n    </div>\n     <div class=\"form-check\">\n      <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"active\" name=\"active\"> Active </label>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Create rule\">\n  </form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Registered business user </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result._ref}}</li>\n    <li class=\"list-group-item\">Language: {{result.language}}</li>\n    <li class=\"list-group-item\">Last commit: {{getRuleLastCommit(result.lastCommit)}}</li>\n    <li class=\"list-group-item\">Blob: {{result.blob}}</li>\n    <li class=\"list-group-item\">Active: {{result.active}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onCreateClick()\">Create another rule</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/rules/create-rule/create-rule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRuleComponent; });
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



var CreateRuleComponent = (function () {
    function CreateRuleComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.active = false;
    }
    CreateRuleComponent.prototype.ngOnInit = function () {
    };
    CreateRuleComponent.prototype.onCreateSubmit = function () {
        var _this = this;
        var rule = {
            language: this.language,
            blob: this.blob,
            active: this.active
        };
        this.authService.createRule(rule).subscribe(function (data) {
            _this.flashMessage.show('Rule created!', {
                cssClass: 'alert-success',
                timeout: 5000
            });
            _this.result = data.rule;
        }, function (err) {
            _this.flashMessage.show(err.json().message, {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        });
    };
    CreateRuleComponent.prototype.clearForm = function () {
        this.language = null;
        this.blob = null;
        this.active = false;
        this.result = null;
    };
    CreateRuleComponent.prototype.onCreateClick = function () {
        this.clearForm();
    };
    CreateRuleComponent.prototype.getRuleLastCommit = function (lastCommit) {
        return JSON.stringify(lastCommit, undefined, 2);
    };
    return CreateRuleComponent;
}());
CreateRuleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-rule',
        template: __webpack_require__("../../../../../src/app/components/rules/create-rule/create-rule.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/rules/create-rule/create-rule.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], CreateRuleComponent);

var _a, _b;
//# sourceMappingURL=create-rule.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/rules/delete-rule/delete-rule.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/rules/delete-rule/delete-rule.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Remove rule </h2>\n<form (submit)=\"onDeleteSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Rule id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Delete\">\n  </div>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/rules/delete-rule/delete-rule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteRuleComponent; });
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



var DeleteRuleComponent = (function () {
    function DeleteRuleComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    DeleteRuleComponent.prototype.ngOnInit = function () {
    };
    DeleteRuleComponent.prototype.onDeleteSubmit = function () {
        var _this = this;
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.deleteRule(this.id).subscribe(function (data) {
                _this.flashMessage.show('Rule ' + _this.id + ' removed!', {
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
    return DeleteRuleComponent;
}());
DeleteRuleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-delete-rule',
        template: __webpack_require__("../../../../../src/app/components/rules/delete-rule/delete-rule.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/rules/delete-rule/delete-rule.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], DeleteRuleComponent);

var _a, _b;
//# sourceMappingURL=delete-rule.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/rules/rule-at-commit/rule-at-commit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/rules/rule-at-commit/rule-at-commit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n<h2 class=\"page-header\">Rule information in commit state</h2>\n<form (submit)=\"onGetInfoSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Rule id</label>\n      <input type=\"text\" [(ngModel)]=\"ruleId\" name=\"ruleId\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Commit id</label>\n      <input type=\"text\" [(ngModel)]=\"commitId\" name=\"commitId\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Get rule information\">\n  </div>\n</form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Rule {{ruleId}} information </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result._ref}}</li>\n    <li class=\"list-group-item\">Language: {{result.language}}</li>\n    <li class=\"list-group-item\">Last commit: getRuleLastCommit({{result.lastCommit}})</li>\n    <li class=\"list-group-item\">Blob: {{result.blob}}</li>\n    <li class=\"list-group-item\">Active: {{result.active}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onGetInfoClick()\">Get information about another rule</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/rules/rule-at-commit/rule-at-commit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuleAtCommitComponent; });
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



var RuleAtCommitComponent = (function () {
    function RuleAtCommitComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    RuleAtCommitComponent.prototype.ngOnInit = function () {
    };
    RuleAtCommitComponent.prototype.onGetInfoSubmit = function () {
        var _this = this;
        if (!this.ruleId || !this.commitId) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.getRuleAtCommit(this.ruleId, this.commitId).subscribe(function (data) {
                _this.result = data.rule;
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    RuleAtCommitComponent.prototype.onGetInfoClick = function () {
        this.ruleId = null;
        this.commitId = null;
        this.result = null;
    };
    RuleAtCommitComponent.prototype.getRuleLastCommit = function (lastCommit) {
        return JSON.stringify(lastCommit, undefined, 2);
    };
    return RuleAtCommitComponent;
}());
RuleAtCommitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rule-at-commit',
        template: __webpack_require__("../../../../../src/app/components/rules/rule-at-commit/rule-at-commit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/rules/rule-at-commit/rule-at-commit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], RuleAtCommitComponent);

var _a, _b;
//# sourceMappingURL=rule-at-commit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/rules/rule-information/rule-information.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/rules/rule-information/rule-information.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n<h2 class=\"page-header\">Rule information</h2>\n<form (submit)=\"onGetInfoSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Rule id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Get information\">\n  </div>\n</form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Rule {{id}} information </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result._ref}}</li>\n    <li class=\"list-group-item\">Language: {{result.language}}</li>\n    <li class=\"list-group-item\">Last commit: getRuleLastCommit({{result.lastCommit}})</li>\n    <li class=\"list-group-item\">Blob: {{result.blob}}</li>\n    <li class=\"list-group-item\">Active: {{result.active}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onGetInfoClick()\">Get information about another rule</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/rules/rule-information/rule-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuleInformationComponent; });
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



var RuleInformationComponent = (function () {
    function RuleInformationComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    RuleInformationComponent.prototype.ngOnInit = function () {
    };
    RuleInformationComponent.prototype.onGetInfoSubmit = function () {
        var _this = this;
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.getRule(this.id).subscribe(function (data) {
                _this.result = data.rule;
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    RuleInformationComponent.prototype.onGetInfoClick = function () {
        this.id = null;
        this.result = null;
    };
    RuleInformationComponent.prototype.getRuleLastCommit = function (lastCommit) {
        return JSON.stringify(lastCommit, undefined, 2);
    };
    return RuleInformationComponent;
}());
RuleInformationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rule-information',
        template: __webpack_require__("../../../../../src/app/components/rules/rule-information/rule-information.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/rules/rule-information/rule-information.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], RuleInformationComponent);

var _a, _b;
//# sourceMappingURL=rule-information.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/rules/rules-list/rules-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/rules/rules-list/rules-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2 class=\"page-header\">Rules list </h2>\n  </div>\n  <div *ngIf=\"total > 0\" class=\"col-md-6\">\n    <div class=\"input-group input-group-sm input-group-left\">\n      <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n      <span class=\"input-group-addon\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </span>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"total == 0\">\n  <p class=\"lead\"> Sorry :( <p>\n  <p class=\"lead\"> There are no registered rules at the moment. <span class=\"glyphicon glyphicon-ice-lolly\"></span></p>\n</div>\n\n<table *ngIf=\"total > 0\" class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th (click)=\"sort('id')\">Id\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('_ref')\">_ref\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == '_ref'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('language')\">Language\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'language'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('lastCommit')\">Last commit\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'lastCommit'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('blob')\">Blob\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'blob'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('active')\">Active\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'active'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rule of rulesList | orderBy: key : reverse | filter:filter | paginate: {itemsPerPage: 10, currentPage: p, totalItems: total }\">\n      <td>{{rule.id}}</td>\n      <td>{{rule._ref}}</td>\n      <td>{{rule.language}}</td>\n      <td>{{getRuleLastCommit(rule.lastCommit)}}</td>\n      <td>{{rule.blob}}</td>\n      <td>{{rule.active}}</td>\n    </tr>\n  </tbody>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/rules/rules-list/rules-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesListComponent; });
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


var RulesListComponent = (function () {
    function RulesListComponent(authService) {
        this.authService = authService;
        this.key = 'id';
        this.reverse = false;
        this.p = 1;
    }
    RulesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getRulesList().subscribe(function (list) {
            _this.rulesList = list.rules;
            _this.total = list.metadata.total;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RulesListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    RulesListComponent.prototype.getRuleLastCommit = function (lastCommit) {
        return JSON.stringify(lastCommit, undefined, 2);
    };
    return RulesListComponent;
}());
RulesListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rules-list',
        template: __webpack_require__("../../../../../src/app/components/rules/rules-list/rules-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/rules/rules-list/rules-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], RulesListComponent);

var _a;
//# sourceMappingURL=rules-list.component.js.map

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

module.exports = "<div *ngIf=\"!result\">\n  <h2 class=\"page-header\">Run selected rules and facts </h2>\n  <form (submit)=\"onRunSubmit()\">\n    <div class=\"form-group\">\n      <label>Rules id separated by one space</label>\n      <input type=\"text\" [(ngModel)]=\"rules\" name=\"rules\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Facts separated by '#'</label>\n      <textarea rows=\"5\" [(ngModel)]=\"facts\" name=\"facts\" class=\"form-control\"></textarea>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Run\">\n  </form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Results </h2>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let fact of result\" class=\"list-group-item\">{{fact}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onRunClick()\">Run different set of rules and facts</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/rules/run-all-rules/run-all-rules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunAllRulesComponent; });
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



var RunAllRulesComponent = (function () {
    function RunAllRulesComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    RunAllRulesComponent.prototype.ngOnInit = function () {
    };
    RunAllRulesComponent.prototype.onRunSubmit = function () {
        var _this = this;
        var body = {
            rules: this.rules.split(" "),
            facts: this.facts.split("#")
        };
        this.authService.runAllRules(body).subscribe(function (data) {
            _this.result = data.facts.map(function (fact) { return JSON.stringify(fact, undefined, 2); });
        }, function (err) {
            _this.flashMessage.show(err.json().message, {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        });
    };
    RunAllRulesComponent.prototype.clearForm = function () {
        this.rules = null;
        this.facts = null;
        this.result = null;
    };
    RunAllRulesComponent.prototype.onRunClick = function () {
        this.clearForm();
    };
    return RunAllRulesComponent;
}());
RunAllRulesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-run-all-rules',
        template: __webpack_require__("../../../../../src/app/components/rules/run-all-rules/run-all-rules.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/rules/run-all-rules/run-all-rules.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], RunAllRulesComponent);

var _a, _b;
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

module.exports = "<div *ngIf=\"!result\">\n  <h2 class=\"page-header\">Run selected rule and facts </h2>\n  <form (submit)=\"onRunSubmit()\">\n    <div class=\"form-group\">\n      <label>Rule id </label>\n      <input type=\"text\" [(ngModel)]=\"ruleId\" name=\"ruleId\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Facts separated by '#'</label>\n      <textarea rows=\"5\" [(ngModel)]=\"facts\" name=\"facts\" class=\"form-control\"></textarea>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Run\">\n  </form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Results </h2>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let fact of result\" class=\"list-group-item\">{{fact}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onRunClick()\">Run different facts with another rule</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/rules/run-individual-rule/run-individual-rule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunIndividualRuleComponent; });
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



var RunIndividualRuleComponent = (function () {
    function RunIndividualRuleComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    RunIndividualRuleComponent.prototype.ngOnInit = function () {
    };
    RunIndividualRuleComponent.prototype.onRunSubmit = function () {
        var _this = this;
        var body = {
            facts: this.facts.split("#")
        };
        this.authService.runIndividualRule(this.ruleId, body).subscribe(function (data) {
            _this.result = data.facts.map(function (fact) { return JSON.stringify(fact, undefined, 2); });
        }, function (err) {
            _this.flashMessage.show(err.json().message, {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        });
    };
    RunIndividualRuleComponent.prototype.clearForm = function () {
        this.ruleId = null;
        this.facts = null;
        this.result = null;
    };
    RunIndividualRuleComponent.prototype.onRunClick = function () {
        this.clearForm();
    };
    return RunIndividualRuleComponent;
}());
RunIndividualRuleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-run-individual-rule',
        template: __webpack_require__("../../../../../src/app/components/rules/run-individual-rule/run-individual-rule.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/rules/run-individual-rule/run-individual-rule.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], RunIndividualRuleComponent);

var _a, _b;
//# sourceMappingURL=run-individual-rule.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/rules/update-rule/update-rule.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/rules/update-rule/update-rule.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n  <h2 class=\"page-header\">Modify rule </h2>\n  <form (submit)=\"onUpdateSubmit()\">\n    <div class=\"form-group\">\n      <label>Id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>_ref</label>\n      <input type=\"text\" [(ngModel)]=\"_ref\" name=\"_ref\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Language</label>\n      <input type=\"text\" [(ngModel)]=\"language\" name=\"language\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Blob</label>\n      <textarea rows=\"5\" [(ngModel)]=\"blob\" name=\"blob\" class=\"form-control\"></textarea>\n    </div>\n     <div class=\"form-check\">\n      <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"active\" name=\"active\"> Active </label>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Modify rule\">\n  </form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Updated rule </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result._ref}}</li>\n    <li class=\"list-group-item\">Language: {{result.language}}</li>\n    <li class=\"list-group-item\">Last commit: {{getRuleLastCommit(result.lastCommit)}}</li>\n    <li class=\"list-group-item\">Blob: {{result.blob}}</li>\n    <li class=\"list-group-item\">Active: {{result.active}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onUpdateClick()\">Modify another rule</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/rules/update-rule/update-rule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateRuleComponent; });
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



var UpdateRuleComponent = (function () {
    function UpdateRuleComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.active = false;
    }
    UpdateRuleComponent.prototype.ngOnInit = function () {
    };
    UpdateRuleComponent.prototype.onUpdateSubmit = function () {
        var _this = this;
        var rule = {
            _ref: this._ref,
            language: this.language,
            blob: this.blob,
            active: this.active
        };
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.updateRule(this.id, rule).subscribe(function (data) {
                _this.flashMessage.show('Rule updated!', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.result = data.rule;
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    UpdateRuleComponent.prototype.clearForm = function () {
        this.id = null;
        this._ref = null;
        this.language = null;
        this.blob = null;
        this.active = false;
        this.result = null;
    };
    UpdateRuleComponent.prototype.onUpdateClick = function () {
        this.clearForm();
    };
    UpdateRuleComponent.prototype.getRuleLastCommit = function (lastCommit) {
        return JSON.stringify(lastCommit, undefined, 2);
    };
    return UpdateRuleComponent;
}());
UpdateRuleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-rule',
        template: __webpack_require__("../../../../../src/app/components/rules/update-rule/update-rule.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/rules/update-rule/update-rule.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], UpdateRuleComponent);

var _a, _b;
//# sourceMappingURL=update-rule.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/servers/current-state/current-state.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/servers/current-state/current-state.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2 class=\"page-header\">Current state of servers </h2>\n  </div>\n  <div *ngIf=\"total > 0\" class=\"col-md-6\">\n    <div class=\"input-group input-group-sm input-group-left\">\n      <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n      <span class=\"input-group-addon\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </span>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"total == 0\">\n  <p class=\"lead\"> Sorry :( <p>\n  <p class=\"lead\"> There are no registered servers at the moment. <span class=\"glyphicon glyphicon-globe\"></span></p>\n</div>\n\n<table *ngIf=\"total > 0\" class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th (click)=\"sort('id')\">Id\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('lastConnection')\">Last connection\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'lastConnection'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('currentState')\">Current state\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'currentState'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let server of serversList | orderBy: key : reverse | filter:filter | paginate: {itemsPerPage: 10, currentPage: p, totalItems: total }\">\n      <td>{{server.id}}</td>\n      <td>{{server.lastConnection}}</td>\n      <td>{{getServerStatus(server.lastConnection)}}</td>\n    </tr>\n  </tbody>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/servers/current-state/current-state.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentStateComponent; });
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


var CurrentStateComponent = (function () {
    function CurrentStateComponent(authService) {
        this.authService = authService;
        this.key = 'id';
        this.reverse = false;
        this.p = 1;
    }
    CurrentStateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getServersList().subscribe(function (list) {
            _this.serversList = list.servers;
            _this.total = list.metadata.total;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CurrentStateComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    CurrentStateComponent.prototype.getServerStatus = function (lastConnection) {
        if (lastConnection == null) {
            return "Inactive";
        }
        var connectionDate = new Date(lastConnection);
        var currentDate = new Date();
        var connectionDay = connectionDate.getUTCDate();
        var currentDay = currentDate.getUTCDate();
        var connectionMonth = connectionDate.getUTCMonth();
        var currentMonth = currentDate.getUTCMonth();
        var connectionYear = connectionDate.getUTCFullYear();
        var currentYear = currentDate.getUTCFullYear();
        var connectionHour = connectionDate.getUTCHours();
        var currentHour = currentDate.getUTCHours();
        var connectionMinute = connectionDate.getUTCMinutes();
        var currentMinute = currentDate.getUTCMinutes();
        if (connectionYear != currentYear) {
            return (currentYear - connectionYear) + " year/s inactive";
        }
        if (connectionMonth != currentMonth) {
            return (currentMonth - connectionMonth) + " month/s inactive";
        }
        if (connectionDay != currentDay) {
            return (currentDay - connectionDay) + " day/s inactive";
        }
        if (connectionHour != currentHour) {
            return (currentHour - connectionHour) + " hour/s inactive";
        }
        if (currentMinute - connectionMinute > 10) {
            return (currentMinute - connectionMinute) + " minutes inactive";
        }
        return "Active";
    };
    return CurrentStateComponent;
}());
CurrentStateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-current-state',
        template: __webpack_require__("../../../../../src/app/components/servers/current-state/current-state.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/servers/current-state/current-state.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], CurrentStateComponent);

var _a;
//# sourceMappingURL=current-state.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/servers/delete-server/delete-server.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/servers/delete-server/delete-server.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Remove server </h2>\n<form (submit)=\"onDeleteSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Server id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Delete\">\n  </div>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/servers/delete-server/delete-server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteServerComponent; });
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



var DeleteServerComponent = (function () {
    function DeleteServerComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    DeleteServerComponent.prototype.ngOnInit = function () {
    };
    DeleteServerComponent.prototype.onDeleteSubmit = function () {
        var _this = this;
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.deleteServer(this.id).subscribe(function (data) {
                _this.flashMessage.show('Server ' + _this.id + ' removed!', {
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
    return DeleteServerComponent;
}());
DeleteServerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-delete-server',
        template: __webpack_require__("../../../../../src/app/components/servers/delete-server/delete-server.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/servers/delete-server/delete-server.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], DeleteServerComponent);

var _a, _b;
//# sourceMappingURL=delete-server.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/servers/register-server/register-server.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/servers/register-server/register-server.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n  <h2 class=\"page-header\">Register server </h2>\n  <form (submit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Created by</label>\n      <input type=\"text\" [(ngModel)]=\"createdBy\" name=\"createdBy\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Created time</label>\n      <input type=\"text\" [(ngModel)]=\"createdTime\" name=\"createdTime\" class=\"form-control\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Registered server </h2>\n  <h3 class=\"page-header\"> Server </h3>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.server.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result.server._ref}}</li>\n    <li class=\"list-group-item\">Created by: {{result.server.createdBy}}</li>\n    <li class=\"list-group-item\">Created time: {{result.server.createdTime}}</li>\n    <li class=\"list-group-item\">Name: {{result.server.name}}</li>\n    <li class=\"list-group-item\">Last connection: {{result.server.lastConnection}}</li>\n  </ul>\n  <h3 class=\"page-header\"> Token </h3>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Expires at: {{result.token.expiresAt}}</li>\n    <li class=\"list-group-item\">Token: {{result.token.token}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onRegisterClick()\">Register another server</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/servers/register-server/register-server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterServerComponent; });
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




var RegisterServerComponent = (function () {
    function RegisterServerComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterServerComponent.prototype.ngOnInit = function () {
    };
    RegisterServerComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var server = {
            createdBy: this.createdBy,
            createdTime: this.createdTime,
            name: this.name
        };
        this.authService.registerServer(server).subscribe(function (data) {
            _this.flashMessage.show('Server registered!', {
                cssClass: 'alert-success',
                timeout: 5000
            });
            _this.result = data.server;
        }, function (err) {
            _this.flashMessage.show(err.json().message, {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        });
    };
    RegisterServerComponent.prototype.clearForm = function () {
        this.createdBy = null;
        this.createdTime = null;
        this.name = null;
        this.result = null;
    };
    RegisterServerComponent.prototype.onRegisterClick = function () {
        this.clearForm();
    };
    return RegisterServerComponent;
}());
RegisterServerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register-server',
        template: __webpack_require__("../../../../../src/app/components/servers/register-server/register-server.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/servers/register-server/register-server.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], RegisterServerComponent);

var _a, _b, _c;
//# sourceMappingURL=register-server.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/servers/server-information/server-information.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/servers/server-information/server-information.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n<h2 class=\"page-header\">Server information</h2>\n<form (submit)=\"onGetInfoSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Server id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Get information\">\n  </div>\n</form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Server {{id}} information </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result._ref}}</li>\n    <li class=\"list-group-item\">Created by: {{result.createdBy}}</li>\n    <li class=\"list-group-item\">Created time: {{result.createdTime}}</li>\n    <li class=\"list-group-item\">Name: {{result.name}}</li>\n    <li class=\"list-group-item\">Last connection: {{result.lastConnection}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onGetInfoClick()\">Get information about another server</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/servers/server-information/server-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerInformationComponent; });
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



var ServerInformationComponent = (function () {
    function ServerInformationComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    ServerInformationComponent.prototype.ngOnInit = function () {
    };
    ServerInformationComponent.prototype.onGetInfoSubmit = function () {
        var _this = this;
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.getServer(this.id).subscribe(function (data) {
                _this.result = data.server;
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    ServerInformationComponent.prototype.onGetInfoClick = function () {
        this.id = null;
        this.result = null;
    };
    return ServerInformationComponent;
}());
ServerInformationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-server-information',
        template: __webpack_require__("../../../../../src/app/components/servers/server-information/server-information.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/servers/server-information/server-information.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ServerInformationComponent);

var _a, _b;
//# sourceMappingURL=server-information.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/servers/server-reset-token/server-reset-token.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/servers/server-reset-token/server-reset-token.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n<h2 class=\"page-header\">Reset application server token</h2>\n<form (submit)=\"onGetInfoSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Application server id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Get information\">\n  </div>\n</form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Application server {{id}}: new token </h2>\n  <h3 class=\"page-header\"> Server </h3>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.server.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result.server._ref}}</li>\n    <li class=\"list-group-item\">Created by: {{result.server.createdBy}}</li>\n    <li class=\"list-group-item\">Created time: {{result.server.createdTime}}</li>\n    <li class=\"list-group-item\">Name: {{result.server.name}}</li>\n    <li class=\"list-group-item\">Last connection: {{result.server.lastConnection}}</li>\n  </ul>\n  <h3 class=\"page-header\"> Token </h3>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Expires at: {{result.token.expiresAt}}</li>\n    <li class=\"list-group-item\">Token: {{result.token.token}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onGetInfoClick()\">Reset another application server token</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/servers/server-reset-token/server-reset-token.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerResetTokenComponent; });
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



var ServerResetTokenComponent = (function () {
    function ServerResetTokenComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    ServerResetTokenComponent.prototype.ngOnInit = function () {
    };
    ServerResetTokenComponent.prototype.onGetInfoSubmit = function () {
        var _this = this;
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.resetServerToken(this.id).subscribe(function (data) {
                _this.result = data.server;
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    ServerResetTokenComponent.prototype.onGetInfoClick = function () {
        this.id = null;
        this.result = null;
    };
    return ServerResetTokenComponent;
}());
ServerResetTokenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-server-reset-token',
        template: __webpack_require__("../../../../../src/app/components/servers/server-reset-token/server-reset-token.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/servers/server-reset-token/server-reset-token.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ServerResetTokenComponent);

var _a, _b;
//# sourceMappingURL=server-reset-token.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/servers/servers-list/servers-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/servers/servers-list/servers-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2 class=\"page-header\">Servers list </h2>\n  </div>\n  <div *ngIf=\"total > 0\" class=\"col-md-6\">\n    <div class=\"input-group input-group-sm input-group-left\">\n      <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n      <span class=\"input-group-addon\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </span>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"total == 0\">\n  <p class=\"lead\"> Sorry :( <p>\n  <p class=\"lead\"> There are no registered servers at the moment. <span class=\"glyphicon glyphicon-globe\"></span></p>\n</div>\n\n<table *ngIf=\"total > 0\" class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th (click)=\"sort('id')\">Id\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('_ref')\">_ref\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == '_ref'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('createdBy')\">Created by\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'createdBy'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('createdTime')\">Created time\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'createdTime'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('name')\">Name\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('lastConnection')\">Last connection\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'lastConnection'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let server of serversList | orderBy: key : reverse | filter:filter | paginate: {itemsPerPage: 10, currentPage: p, totalItems: total }\">\n      <td>{{server.id}}</td>\n      <td>{{server._ref}}</td>\n      <td>{{server.createdBy}}</td>\n      <td>{{server.createdTime}}</td>\n      <td>{{server.name}}</td>\n      <td>{{server.lastConnection}}</td>\n    </tr>\n  </tbody>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/servers/servers-list/servers-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersListComponent; });
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


var ServersListComponent = (function () {
    function ServersListComponent(authService) {
        this.authService = authService;
        this.key = 'id';
        this.reverse = false;
        this.p = 1;
    }
    ServersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getServersList().subscribe(function (list) {
            _this.serversList = list.servers;
            _this.total = list.metadata.total;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ServersListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    return ServersListComponent;
}());
ServersListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-servers-list',
        template: __webpack_require__("../../../../../src/app/components/servers/servers-list/servers-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/servers/servers-list/servers-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], ServersListComponent);

var _a;
//# sourceMappingURL=servers-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/servers/update-server/update-server.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/servers/update-server/update-server.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n  <h2 class=\"page-header\">Modify server </h2>\n  <form (submit)=\"onUpdateSubmit()\">\n    <div class=\"form-group\">\n      <label>Id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>_ref</label>\n      <input type=\"text\" [(ngModel)]=\"_ref\" name=\"_ref\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Updated server </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result._ref}}</li>\n    <li class=\"list-group-item\">Created by: {{result.createdBy}}</li>\n    <li class=\"list-group-item\">Created time: {{result.createdTime}}</li>\n    <li class=\"list-group-item\">Name: {{result.name}}</li>\n    <li class=\"list-group-item\">Last connection: {{result.lastConnection}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onUpdateClick()\">Modify another server</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/servers/update-server/update-server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateServerComponent; });
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



var UpdateServerComponent = (function () {
    function UpdateServerComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    UpdateServerComponent.prototype.ngOnInit = function () {
    };
    UpdateServerComponent.prototype.onUpdateSubmit = function () {
        var _this = this;
        var server = {
            _ref: this._ref,
            name: this.name
        };
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.updateServer(this.id, server).subscribe(function (data) {
                _this.flashMessage.show('Server updated!', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.result = data.server;
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    UpdateServerComponent.prototype.clearForm = function () {
        this.id = null;
        this._ref = null;
        this.name = null;
        this.result = null;
    };
    UpdateServerComponent.prototype.onUpdateClick = function () {
        this.clearForm();
    };
    return UpdateServerComponent;
}());
UpdateServerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-server',
        template: __webpack_require__("../../../../../src/app/components/servers/update-server/update-server.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/servers/update-server/update-server.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], UpdateServerComponent);

var _a, _b;
//# sourceMappingURL=update-server.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/trips/trip-information/trip-information.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/trips/trip-information/trip-information.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n<h2 class=\"page-header\">Trip information</h2>\n<form (submit)=\"onGetInfoSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Trip id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Get information\">\n  </div>\n</form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Trip {{id}} information </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.id}}</li>\n    <li class=\"list-group-item\">Application owner: {{result.applicationOwner}}</li>\n    <li class=\"list-group-item\">Driver: {{result.driver}}</li>\n    <li class=\"list-group-item\">Passenger: {{result.passenger}}</li>\n    <li class=\"list-group-item\">Start: [ {{getTripStart(result.start)}} ]</li>\n    <li class=\"list-group-item\">End: [ {{getTripEnd(result.end)}} ]</li>\n    <li class=\"list-group-item\">Total time: {{result.totalTime}}</li>\n    <li class=\"list-group-item\">Wait time: {{result.waitTime}}</li>\n    <li class=\"list-group-item\">Travel time: {{result.travelTime}}</li>\n    <li class=\"list-group-item\">Distance: {{result.distance}}</li>\n    <li class=\"list-group-item\">Route: [ {{getTripRoute(result.route)}} ]</li>\n    <li class=\"list-group-item\">Cost: {{getTripCost(result.cost)}}</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onGetInfoClick()\">Get information about another trip</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/trips/trip-information/trip-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripInformationComponent; });
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



var TripInformationComponent = (function () {
    function TripInformationComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    TripInformationComponent.prototype.ngOnInit = function () {
    };
    TripInformationComponent.prototype.onGetInfoSubmit = function () {
        var _this = this;
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.getTrip(this.id).subscribe(function (data) {
                _this.result = data.trip;
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    TripInformationComponent.prototype.onGetInfoClick = function () {
        this.id = null;
        this.result = null;
    };
    TripInformationComponent.prototype.getTripStart = function (start) {
        return JSON.stringify(start, undefined, 2);
    };
    TripInformationComponent.prototype.getTripEnd = function (end) {
        return JSON.stringify(end, undefined, 2);
    };
    TripInformationComponent.prototype.getTripRoute = function (route) {
        return route.map(function (position) { return JSON.stringify(position, undefined, 2); }).join(', ');
    };
    TripInformationComponent.prototype.getTripCost = function (cost) {
        return JSON.stringify(cost, undefined, 2);
    };
    return TripInformationComponent;
}());
TripInformationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-trip-information',
        template: __webpack_require__("../../../../../src/app/components/trips/trip-information/trip-information.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/trips/trip-information/trip-information.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], TripInformationComponent);

var _a, _b;
//# sourceMappingURL=trip-information.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/trips/trips-list/trips-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/trips/trips-list/trips-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2 class=\"page-header\">Trips list </h2>\n  </div>\n  <div *ngIf=\"total > 0\" class=\"col-md-6\">\n    <div class=\"input-group input-group-sm input-group-left\">\n      <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n      <span class=\"input-group-addon\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </span>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"total == 0\">\n  <p class=\"lead\"> Sorry :( <p>\n  <p class=\"lead\"> There are no registered trips at the moment. <span class=\"glyphicon glyphicon-road\"></span></p>\n</div>\n\n<table *ngIf=\"total > 0\" class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th (click)=\"sort('id')\">Id\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('applicationOwner')\">Application owner\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'applicationOwner'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('driver')\">Driver\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'driver'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('passenger')\">Passenger\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'passenger'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('start')\">Start\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'start'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('end')\">End\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'end'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('totalTime')\">Total time\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'totalTime'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('waitTime')\">Wait time\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'waitTime'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('travelTime')\">Travel time\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'travelTime'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('distance')\">Distance\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'distance'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('route')\">Route\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'route'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('cost')\">Cost\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'cost'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let trip of tripsList | orderBy: key : reverse | filter:filter | paginate: {itemsPerPage: 10, currentPage: p, totalItems: total }\">\n      <td>{{trip.id}}</td>\n      <td>{{trip.applicationOwner}}</td>\n      <td>{{trip.driver}}</td>\n      <td>{{trip.passenger}}</td>\n      <td>{{getTripStart(trip.start)}}</td>\n      <td>{{getTripEnd(trip.end)}}</td>\n      <td>{{trip.totalTime}}</td>\n      <td>{{trip.waitTime}}</td>\n      <td>{{trip.travelTime}}</td>\n      <td>{{trip.distance}}</td>\n      <td>{{getTripRoute(trip.route)}}</td>\n      <td>{{getTripCost(trip.cost)}}</td>\n    </tr>\n  </tbody>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/trips/trips-list/trips-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsListComponent; });
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


var TripsListComponent = (function () {
    function TripsListComponent(authService) {
        this.authService = authService;
        this.key = 'id';
        this.reverse = false;
        this.p = 1;
    }
    TripsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getTripsList().subscribe(function (list) {
            _this.tripsList = list.trips;
            _this.total = list.metadata.total;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    TripsListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    TripsListComponent.prototype.getTripStart = function (start) {
        return JSON.stringify(start, undefined, 2);
    };
    TripsListComponent.prototype.getTripEnd = function (end) {
        return JSON.stringify(end, undefined, 2);
    };
    TripsListComponent.prototype.getTripRoute = function (route) {
        return route.map(function (position) { return JSON.stringify(position, undefined, 2); }).join(', ');
    };
    TripsListComponent.prototype.getTripCost = function (cost) {
        return JSON.stringify(cost, undefined, 2);
    };
    return TripsListComponent;
}());
TripsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-trips-list',
        template: __webpack_require__("../../../../../src/app/components/trips/trips-list/trips-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/trips/trips-list/trips-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], TripsListComponent);

var _a;
//# sourceMappingURL=trips-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/cars-information/cars-information.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/cars-information/cars-information.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!result\">\n<h2 class=\"page-header\">Application user car information</h2>\n<form (submit)=\"onGetInfoSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Application user id</label>\n      <input type=\"text\" [(ngModel)]=\"userId\" name=\"userId\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Application user car id</label>\n      <input type=\"text\" [(ngModel)]=\"carId\" name=\"carId\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Get car information\">\n  </div>\n</form>\n</div>\n\n<div *ngIf=\"result\">\n  <h2 class=\"page-header\"> Car {{carId}} information </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Id: {{result.id}}</li>\n    <li class=\"list-group-item\">_ref: {{result._ref}}</li>\n    <li class=\"list-group-item\">Owner: {{result.owner}}</li>\n    <li class=\"list-group-item\">Cars: [ {{getCarProperties(result.properties)}} ]</li>\n  </ul>\n  <a class=\"btn btn-primary\" (click)=\"onGetInfoClick()\">Get information about another car</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/cars-information/cars-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsInformationComponent; });
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



var CarsInformationComponent = (function () {
    function CarsInformationComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    CarsInformationComponent.prototype.ngOnInit = function () {
    };
    CarsInformationComponent.prototype.onGetInfoSubmit = function () {
        var _this = this;
        if (!this.userId || !this.carId) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.getCar(this.userId, this.carId).subscribe(function (data) {
                _this.result = data.car;
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    CarsInformationComponent.prototype.onGetInfoClick = function () {
        this.userId = null;
        this.carId = null;
        this.result = null;
    };
    CarsInformationComponent.prototype.getCarProperties = function (properties) {
        return properties.map(function (property) { return JSON.stringify(property); }).join(', ');
    };
    return CarsInformationComponent;
}());
CarsInformationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cars-information',
        template: __webpack_require__("../../../../../src/app/components/users/cars-information/cars-information.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users/cars-information/cars-information.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], CarsInformationComponent);

var _a, _b;
//# sourceMappingURL=cars-information.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/cars-list/cars-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/cars-list/cars-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!carsList\">\n<h2 class=\"page-header\">List cars of application user</h2>\n<form (submit)=\"onGetListSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Application user id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Get list of cars\">\n  </div>\n</form>\n</div>\n\n<div *ngIf=\"carsList\">\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2 class=\"page-header\">Application user {{id}} cars list </h2>\n  </div>\n  <div *ngIf=\"total > 0\" class=\"col-md-6\">\n    <div class=\"input-group input-group-sm input-group-left\">\n      <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n      <span class=\"input-group-addon\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </span>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"total == 0\">\n  <p class=\"lead\"> Sorry :( <p>\n  <p class=\"lead\"> There are no registered cars for user {{id}} at the moment. <span class=\"glyphicon glyphicon-shopping-cart\"></span> <span class=\"glyphicon glyphicon-road\"></span></p>\n  <a class=\"btn btn-primary\" (click)=\"onGetListClick()\">Consult cars of another application user</a>\n</div>\n\n<table *ngIf=\"total > 0\" class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th (click)=\"sort('id')\">Id\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('_ref')\">_ref\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == '_ref'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('owner')\">Owner\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'owner'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('properties')\">Properties\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'properties'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let car of carsList | orderBy: key : reverse | filter:filter | paginate: {itemsPerPage: 10, currentPage: p, totalItems: total }\">\n      <td>{{car.id}}</td>\n      <td>{{car._ref}}</td>\n      <td>{{car.owner}}</td>\n      <td>[ {{getCarProperties(car.properties)}} ]</td>\n    </tr>\n  </tbody>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</table>\n<a *ngIf=\"total > 0\" class=\"btn btn-primary\" (click)=\"onGetListClick()\">Consult cars of another application user</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/cars-list/cars-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsListComponent; });
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



var CarsListComponent = (function () {
    function CarsListComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.key = 'id';
        this.reverse = false;
        this.p = 1;
    }
    CarsListComponent.prototype.ngOnInit = function () {
    };
    CarsListComponent.prototype.onGetListSubmit = function () {
        var _this = this;
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.getUserCarsList(this.id).subscribe(function (data) {
                _this.carsList = data.cars;
                _this.total = data.metadata.total;
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    CarsListComponent.prototype.onGetListClick = function () {
        this.id = null;
        this.carsList = null;
        this.total = null;
        this.key = 'id';
        this.reverse = false;
        this.p = 1;
    };
    CarsListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    CarsListComponent.prototype.getCarProperties = function (properties) {
        return properties.map(function (property) { return JSON.stringify(property, undefined, 2); }).join(', ');
    };
    return CarsListComponent;
}());
CarsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cars-list',
        template: __webpack_require__("../../../../../src/app/components/users/cars-list/cars-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users/cars-list/cars-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], CarsListComponent);

var _a, _b;
//# sourceMappingURL=cars-list.component.js.map

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

/***/ "../../../../../src/app/components/users/transactions-list/transactions-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/transactions-list/transactions-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!transactionsList\">\n<h2 class=\"page-header\">List transactions of application user</h2>\n<form (submit)=\"onGetListSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Application user id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Get list of transactions\">\n  </div>\n</form>\n</div>\n\n<div *ngIf=\"transactionsList\">\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2 class=\"page-header\">Application user {{id}} transactions list </h2>\n  </div>\n  <div *ngIf=\"total > 0\" class=\"col-md-6\">\n    <div class=\"input-group input-group-sm input-group-left\">\n      <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n      <span class=\"input-group-addon\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </span>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"total == 0\">\n  <p class=\"lead\"> Sorry :( <p>\n  <p class=\"lead\"> There are no registered transactions for user {{id}} at the moment. <span class=\"glyphicon glyphicon-piggy-bank\"></span></p>\n  <a class=\"btn btn-primary\" (click)=\"onGetListClick()\">Consult transactions of another application user</a>\n</div>\n\n<table *ngIf=\"total > 0\" class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th (click)=\"sort('id')\">Id\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('trip')\">Trip\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'trip'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('timestamp')\">Timestamp\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'timestamp'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('cost')\">Cost\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'cost'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('description')\">Description\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'description'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('data')\">Data\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'data'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let transaction of transactionsList | orderBy: key : reverse | filter:filter | paginate: {itemsPerPage: 10, currentPage: p, totalItems: total }\">\n      <td>{{transaction.id}}</td>\n      <td>{{transaction.trip}}</td>\n      <td>{{transaction.timestamp}}</td>\n      <td>{{getTransactionCost(transaction.cost)}}</td>\n      <td>{{transaction.description}}</td>\n      <td>{{getTransactionData(transaction.data)}}</td>\n    </tr>\n  </tbody>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</table>\n<a *ngIf=\"total > 0\" class=\"btn btn-primary\" (click)=\"onGetListClick()\">Consult transactions of another application user</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/transactions-list/transactions-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsListComponent; });
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



var TransactionsListComponent = (function () {
    function TransactionsListComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.key = 'id';
        this.reverse = false;
        this.p = 1;
    }
    TransactionsListComponent.prototype.ngOnInit = function () {
    };
    TransactionsListComponent.prototype.onGetListSubmit = function () {
        var _this = this;
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.getUserTransactionsList(this.id).subscribe(function (data) {
                _this.transactionsList = data.transactions;
                _this.total = data.metadata.total;
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    TransactionsListComponent.prototype.onGetListClick = function () {
        this.id = null;
        this.transactionsList = null;
        this.total = null;
        this.key = 'id';
        this.reverse = false;
        this.p = 1;
    };
    TransactionsListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    TransactionsListComponent.prototype.getTransactionCost = function (cost) {
        return JSON.stringify(cost, undefined, 2);
    };
    TransactionsListComponent.prototype.getTransactionData = function (data) {
        return JSON.stringify(data, undefined, 2);
    };
    return TransactionsListComponent;
}());
TransactionsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-transactions-list',
        template: __webpack_require__("../../../../../src/app/components/users/transactions-list/transactions-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users/transactions-list/transactions-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], TransactionsListComponent);

var _a, _b;
//# sourceMappingURL=transactions-list.component.js.map

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

/***/ "../../../../../src/app/components/users/user-trips-list/user-trips-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/user-trips-list/user-trips-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!tripsList\">\n<h2 class=\"page-header\">List trips of application user</h2>\n<form (submit)=\"onGetListSubmit()\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Application user id</label>\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Get list of trips\">\n  </div>\n</form>\n</div>\n\n<div *ngIf=\"tripsList\">\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2 class=\"page-header\">Application user {{id}} trips list </h2>\n  </div>\n  <div *ngIf=\"total > 0\" class=\"col-md-6\">\n    <div class=\"input-group input-group-sm input-group-left\">\n      <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n      <span class=\"input-group-addon\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </span>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"total == 0\">\n  <p class=\"lead\"> Sorry :( <p>\n  <p class=\"lead\"> There are no registered trips for user {{id}} at the moment. <span class=\"glyphicon glyphicon-road\"></span></p>\n  <a class=\"btn btn-primary\" (click)=\"onGetListClick()\">Consult trips of another application user</a>\n</div>\n\n<table *ngIf=\"total > 0\" class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th (click)=\"sort('id')\">Id\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('applicationOwner')\">Application owner\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'applicationOwner'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('driver')\">Driver\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'driver'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('passenger')\">Passenger\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'passenger'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('start')\">Start\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'start'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('end')\">End\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'end'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('totalTime')\">Total time\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'totalTime'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('waitTime')\">Wait time\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'waitTime'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('travelTime')\">Travel time\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'travelTime'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('distance')\">Distance\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'distance'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('route')\">Route\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'route'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('cost')\">Cost\n        <span class=\"glyphicon sort-icon\" *ngIf=\"key == 'cost'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let trip of tripsList | orderBy: key : reverse | filter:filter | paginate: {itemsPerPage: 10, currentPage: p, totalItems: total }\">\n      <td>{{trip.id}}</td>\n      <td>{{trip.applicationOwner}}</td>\n      <td>{{trip.driver}}</td>\n      <td>{{trip.passenger}}</td>\n      <td>{{getTripStart(trip.start)}}</td>\n      <td>{{getTripEnd(trip.end)}}</td>\n      <td>{{trip.totalTime}}</td>\n      <td>{{trip.waitTime}}</td>\n      <td>{{trip.travelTime}}</td>\n      <td>{{trip.distance}}</td>\n      <td>{{getTripRoute(trip.route)}}</td>\n      <td>{{getTripCost(trip.cost)}}</td>\n    </tr>\n  </tbody>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</table>\n<a *ngIf=\"total > 0\" class=\"btn btn-primary\" (click)=\"onGetListClick()\">Consult trips of another application user</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/user-trips-list/user-trips-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTripsListComponent; });
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



var UserTripsListComponent = (function () {
    function UserTripsListComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.key = 'id';
        this.reverse = false;
        this.p = 1;
    }
    UserTripsListComponent.prototype.ngOnInit = function () {
    };
    UserTripsListComponent.prototype.onGetListSubmit = function () {
        var _this = this;
        if (!this.id) {
            this.flashMessage.show('Missing parameters', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            this.authService.getUserTripsList(this.id).subscribe(function (data) {
                _this.tripsList = data.trips;
                _this.total = data.metadata.total;
            }, function (err) {
                _this.flashMessage.show(err.json().message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
        }
    };
    UserTripsListComponent.prototype.onGetListClick = function () {
        this.id = null;
        this.tripsList = null;
        this.total = null;
        this.key = 'id';
        this.reverse = false;
        this.p = 1;
    };
    UserTripsListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    UserTripsListComponent.prototype.getTripStart = function (start) {
        return JSON.stringify(start, undefined, 2);
    };
    UserTripsListComponent.prototype.getTripEnd = function (end) {
        return JSON.stringify(end, undefined, 2);
    };
    UserTripsListComponent.prototype.getTripRoute = function (route) {
        return route.map(function (position) { return JSON.stringify(position, undefined, 2); }).join(', ');
    };
    UserTripsListComponent.prototype.getTripCost = function (cost) {
        return JSON.stringify(cost, undefined, 2);
    };
    return UserTripsListComponent;
}());
UserTripsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-trips-list',
        template: __webpack_require__("../../../../../src/app/components/users/user-trips-list/user-trips-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users/user-trips-list/user-trips-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], UserTripsListComponent);

var _a, _b;
//# sourceMappingURL=user-trips-list.component.js.map

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
        return cars.map(function (car) { return JSON.stringify(car, undefined, 2); }).join(', ');
    };
    UsersListComponent.prototype.obtainUserBalance = function (balance) {
        return balance.map(function (cost) { return JSON.stringify(cost, undefined, 2); }).join(', ');
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

/***/ "../../../../../src/app/guards/admin-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
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



var AdminAuthGuard = (function () {
    function AdminAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        if (this.authService.roleLoggedIn('admin')) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return AdminAuthGuard;
}());
AdminAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AdminAuthGuard);

var _a, _b;
//# sourceMappingURL=admin-auth.guard.js.map

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

/***/ "../../../../../src/app/guards/manager-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerAuthGuard; });
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



var ManagerAuthGuard = (function () {
    function ManagerAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ManagerAuthGuard.prototype.canActivate = function () {
        if (this.authService.roleLoggedIn('manager')) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return ManagerAuthGuard;
}());
ManagerAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ManagerAuthGuard);

var _a, _b;
//# sourceMappingURL=manager-auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/user-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAuthGuard; });
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



var UserAuthGuard = (function () {
    function UserAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UserAuthGuard.prototype.canActivate = function () {
        if (this.authService.roleLoggedIn('user')) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return UserAuthGuard;
}());
UserAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UserAuthGuard);

var _a, _b;
//# sourceMappingURL=user-auth.guard.js.map

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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.post(uri + '?token=' + this.authToken, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteBusinessUser = function (id) {
        var uri = 'api/business-users/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateBusinessUser = function (id, user) {
        var uri = 'api/business-users/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.put(uri + '?token=' + this.authToken, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getBusinessUser = function (id) {
        var uri = 'api/business-users/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUser = function (id) {
        var uri = 'api/users/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteUser = function (id) {
        var uri = 'api/users/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getCar = function (userId, carId) {
        var uri = 'api/users/' + userId + '/cars/' + carId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteCar = function (userId, carId) {
        var uri = 'api/users/' + userId + '/cars/' + carId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var uri = 'api/business-users/me';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.editMyInformation = function (user) {
        var uri = 'api/business-users/me';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.put(uri + '?token=' + this.authToken, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getBusinessUsersList = function () {
        var uri = 'api/business-users/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUsersList = function () {
        var uri = 'api/users/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserCarsList = function (id) {
        var uri = 'api/users/' + id + '/cars';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserTransactionsList = function (id) {
        var uri = 'api/users/' + id + '/transactions';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserTripsList = function (id) {
        var uri = 'api/users/' + id + '/trips';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getServersList = function () {
        var uri = 'api/servers';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getServer = function (id) {
        var uri = 'api/servers/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerServer = function (server) {
        var uri = 'api/servers/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.post(uri + '?token=' + this.authToken, server, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateServer = function (id, server) {
        var uri = 'api/servers/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.put(uri + '?token=' + this.authToken, server, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteServer = function (id) {
        var uri = 'api/servers/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.resetServerToken = function (id) {
        var uri = 'api/servers/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.post(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getRulesList = function () {
        var uri = 'api/rules';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.createRule = function (rule) {
        var uri = 'api/rules/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.post(uri + '?token=' + this.authToken, rule, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateRule = function (id, rule) {
        var uri = 'api/rules/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.put(uri + '?token=' + this.authToken, rule, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteRule = function (id) {
        var uri = 'api/rules/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.runAllRules = function (data) {
        var uri = 'api/rules/run';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.post(uri + '?token=' + this.authToken, data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.runIndividualRule = function (id, data) {
        var uri = 'api/rules/' + id + '/run';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.post(uri + '?token=' + this.authToken, data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getRule = function (id) {
        var uri = 'api/rules/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getCommitsList = function (id) {
        var uri = 'api/rules/' + id + '/commits';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getRuleAtCommit = function (ruleId, commitId) {
        var uri = 'api/rules/' + ruleId + '/commits/' + commitId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getTripsList = function () {
        var uri = 'api/trips';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getTrip = function (id) {
        var uri = 'api/trips/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.get(uri + '?token=' + this.authToken, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getPaymethodsList = function () {
        var uri = 'api/paymethods';
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