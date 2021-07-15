(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\New folder\New folder\fe-dqtv-angular-admin\src\main.ts */"zUnb");


/***/ }),

/***/ "3Dj4":
/*!***********************************!*\
  !*** ./src/app/route.provider.ts ***!
  \***********************************/
/*! exports provided: APP_ROUTE_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTE_PROVIDER", function() { return APP_ROUTE_PROVIDER; });
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/ng.core */ "HmNo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const APP_ROUTE_PROVIDER = [
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: configureRoutes, deps: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RoutesService"]], multi: true },
];
function configureRoutes(routesService) {
    return () => {
        routesService.add([
            {
                path: '/',
                name: '::Menu:Home',
                iconClass: 'fas fa-home',
                order: 1,
                layout: "application" /* application */,
            },
        ]);
    };
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const baseUrl = 'http://localhost:4200';
const environment = {
    production: false,
    application: {
        baseUrl,
        name: 'AppCore',
        logoUrl: '',
    },
    oAuthConfig: {
        issuer: 'https://localhost:44365',
        redirectUri: baseUrl,
        clientId: 'AppCore_App',
        responseType: 'code',
        scope: 'offline_access openid profile role email phone AppCore',
    },
    apis: {
        default: {
            url: 'https://localhost:44339',
            rootNamespace: 'ASP.AppCore',
        },
    },
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.theme.shared */ "1REP");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "HmNo");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "abp-loader-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "abp-dynamic-layout");
    } }, directives: [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["LoaderBarComponent"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["DynamicLayoutComponent"]], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _abp_ng_account_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/ng.account/config */ "bwtB");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "HmNo");
/* harmony import */ var _abp_ng_core_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core/locale */ "9ab/");
/* harmony import */ var _abp_ng_identity_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.identity/config */ "K42P");
/* harmony import */ var _abp_ng_setting_management_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @abp/ng.setting-management/config */ "K+XH");
/* harmony import */ var _abp_ng_tenant_management_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @abp/ng.tenant-management/config */ "QLtX");
/* harmony import */ var _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @abp/ng.theme.basic */ "Kxe9");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @abp/ng.theme.shared */ "1REP");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _route_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./route.provider */ "3Dj4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_route_provider__WEBPACK_IMPORTED_MODULE_14__["APP_ROUTE_PROVIDER"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forRoot({
                environment: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"],
                registerLocaleFn: Object(_abp_ng_core_locale__WEBPACK_IMPORTED_MODULE_2__["registerLocale"])(),
            }),
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_7__["ThemeSharedModule"].forRoot(),
            _abp_ng_account_config__WEBPACK_IMPORTED_MODULE_0__["AccountConfigModule"].forRoot(),
            _abp_ng_identity_config__WEBPACK_IMPORTED_MODULE_3__["IdentityConfigModule"].forRoot(),
            _abp_ng_tenant_management_config__WEBPACK_IMPORTED_MODULE_5__["TenantManagementConfigModule"].forRoot(),
            _abp_ng_setting_management_config__WEBPACK_IMPORTED_MODULE_4__["SettingManagementConfigModule"].forRoot(),
            _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["NgxsModule"].forRoot(),
            _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_6__["ThemeBasicModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RootCoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_7__["ThemeSharedModule"], _abp_ng_account_config__WEBPACK_IMPORTED_MODULE_0__["AccountConfigModule"], _abp_ng_identity_config__WEBPACK_IMPORTED_MODULE_3__["IdentityConfigModule"], _abp_ng_tenant_management_config__WEBPACK_IMPORTED_MODULE_5__["TenantManagementConfigModule"], _abp_ng_setting_management_config__WEBPACK_IMPORTED_MODULE_4__["SettingManagementConfigModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["ɵk"], _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_6__["ThemeBasicModule"]] }); })();


/***/ }),

/***/ "pBzC":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular/common/locales lazy ^\.\/.*\.js$ include: [/\\](ar|cs|en|en-GB|es|de|fr|pt|tr|ru|hu|sl|zh-Hans|zh-Hant).js exclude: [/\\]global|extra namespace object ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar.js": [
		"Brhu",
		"_locale-ar-js"
	],
	"./cs.js": [
		"4mcN",
		"_locale-cs-js"
	],
	"./de.js": [
		"VLs4",
		"_locale-de-js"
	],
	"./en-GB.js": [
		"URqu",
		"_locale-en-GB-js"
	],
	"./en.js": [
		"tAZD",
		"_locale-en-js"
	],
	"./es.js": [
		"2Yyj",
		"_locale-es-js"
	],
	"./fr.js": [
		"Hfs6",
		"_locale-fr-js"
	],
	"./hu.js": [
		"CCy4",
		"_locale-hu-js"
	],
	"./pt.js": [
		"vT00",
		"_locale-pt-js"
	],
	"./ru.js": [
		"wq8c",
		"_locale-ru-js"
	],
	"./sl.js": [
		"YLnv",
		"_locale-sl-js"
	],
	"./tr.js": [
		"6/97",
		"_locale-tr-js"
	],
	"./zh-Hans.js": [
		"5D2u",
		"_locale-zh-Hans-js"
	],
	"./zh-Hant.js": [
		"u6yn",
		"_locale-zh-Hant-js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "pBzC";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule),
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() | abp-ng-account */ "abp-ng-account").then(__webpack_require__.bind(null, /*! @abp/ng.account */ "us7/")).then(m => m.AccountModule.forLazy()),
    },
    {
        path: 'identity',
        loadChildren: () => Promise.all(/*! import() | abp-ng-identity */[__webpack_require__.e("default~abp-ng-identity~abp-ng-setting-management~abp-ng-tenant-management"), __webpack_require__.e("abp-ng-identity")]).then(__webpack_require__.bind(null, /*! @abp/ng.identity */ "kuRq")).then(m => m.IdentityModule.forLazy()),
    },
    {
        path: 'tenant-management',
        loadChildren: () => Promise.all(/*! import() | abp-ng-tenant-management */[__webpack_require__.e("default~abp-ng-identity~abp-ng-setting-management~abp-ng-tenant-management"), __webpack_require__.e("abp-ng-tenant-management")]).then(__webpack_require__.bind(null, /*! @abp/ng.tenant-management */ "6MLJ")).then(m => m.TenantManagementModule.forLazy()),
    },
    {
        path: 'setting-management',
        loadChildren: () => Promise.all(/*! import() | abp-ng-setting-management */[__webpack_require__.e("default~abp-ng-identity~abp-ng-setting-management~abp-ng-tenant-management"), __webpack_require__.e("abp-ng-setting-management")]).then(__webpack_require__.bind(null, /*! @abp/ng.setting-management */ "MM+m")).then(m => m.SettingManagementModule.forLazy()),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map