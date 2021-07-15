(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["abp-ng-setting-management"], {
    /***/
    "MM+m":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@abp/ng.setting-management/__ivy_ngcc__/fesm2015/abp-ng.setting-management.js ***!
      \****************************************************************************************************/

    /*! exports provided: SettingManagementComponent, SettingManagementModule, ɵa, ɵc, ɵd */

    /***/
    function MMM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingManagementComponent", function () {
        return SettingManagementComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingManagementModule", function () {
        return SettingManagementModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return SettingManagementRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return SettingManagementState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return SetSelectedSettingTab;
      });
      /* harmony import */


      var _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @abp/ng.core */
      "HmNo");
      /* harmony import */


      var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @abp/ng.theme.shared */
      "1REP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var _abp_ng_components_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @abp/ng.components/page */
      "OZko");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SettingManagementComponent_ng_container_8_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingManagementComponent_ng_container_8_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var setting_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.selected = setting_r2;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var setting_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", setting_r2.name === ctx_r3.selected.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", setting_r2.name + "-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, setting_r2.name));
        }
      }

      function SettingManagementComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SettingManagementComponent_ng_container_8_li_1_Template, 4, 6, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var setting_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("abpPermission", setting_r2.requiredPolicy);
        }
      }

      function SettingManagementComponent_div_10_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
        }
      }

      function SettingManagementComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SettingManagementComponent_div_10_ng_container_2_Template, 1, 0, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r1.selected.name + "-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngComponentOutlet", ctx_r1.selected.component);
        }
      }

      var SetSelectedSettingTab = function SetSelectedSettingTab(payload) {
        _classCallCheck(this, SetSelectedSettingTab);

        this.payload = payload;
      };

      SetSelectedSettingTab.type = '[SettingManagement] Set Selected Tab';

      var SettingManagementState = /*#__PURE__*/function () {
        function SettingManagementState() {
          _classCallCheck(this, SettingManagementState);
        }

        _createClass(SettingManagementState, [{
          key: "settingManagementAction",
          value: function settingManagementAction(_ref, _ref2) {
            var patchState = _ref.patchState;
            var payload = _ref2.payload;
            patchState({
              selectedTab: payload
            });
          }
        }], [{
          key: "getSelectedTab",
          value: function getSelectedTab(_ref3) {
            var selectedTab = _ref3.selectedTab;
            return selectedTab;
          }
        }]);

        return SettingManagementState;
      }();

      SettingManagementState.ɵfac = function SettingManagementState_Factory(t) {
        return new (t || SettingManagementState)();
      };

      SettingManagementState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: SettingManagementState,
        factory: function factory(t) {
          return SettingManagementState.ɵfac(t);
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(SetSelectedSettingTab)], SettingManagementState.prototype, "settingManagementAction", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])()], SettingManagementState, "getSelectedTab", null);
      SettingManagementState = Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
        name: 'SettingManagementState',
        defaults: {}
      })], SettingManagementState);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SettingManagementState, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], null, null);
      })();

      var SettingManagementComponent = /*#__PURE__*/function () {
        function SettingManagementComponent(store, settingTabsService) {
          _classCallCheck(this, SettingManagementComponent);

          this.store = store;
          this.settingTabsService = settingTabsService;
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
          this.settings = [];

          this.trackByFn = function (_, item) {
            return item.name;
          };
        }

        _createClass(SettingManagementComponent, [{
          key: "selected",
          get: function get() {
            var value = this.store.selectSnapshot(SettingManagementState.getSelectedTab);
            return (value === null || value === void 0 ? void 0 : value.component) ? value : this.settings[0] || {};
          },
          set: function set(value) {
            this.store.dispatch(new SetSelectedSettingTab(value));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscription.add(this.settingTabsService.visible$.subscribe(function (settings) {
              _this.settings = settings;
              if (!_this.selected) _this.selected = _this.settings[0];
            }));
          }
        }]);

        return SettingManagementComponent;
      }();

      SettingManagementComponent.ɵfac = function SettingManagementComponent_Factory(t) {
        return new (t || SettingManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SettingTabsService"]));
      };

      SettingManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SettingManagementComponent,
        selectors: [["abp-setting-management"]],
        decls: 11,
        vars: 6,
        consts: [[3, "title"], ["id", "SettingManagementWrapper"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-12", "col-md-3"], ["id", "nav-tab", "role", "tablist", 1, "nav", "flex-column", "nav-pills"], [4, "abpFor", "abpForOf", "abpForTrackBy"], [1, "col-12", "col-md-9"], ["class", "tab-content", 4, "ngIf"], ["class", "nav-item pointer", 3, "click", 4, "abpPermission"], [1, "nav-item", "pointer", 3, "click"], ["role", "tab", 1, "nav-link", 3, "id"], [1, "tab-content"], ["role", "tabpanel", 1, "tab-pane", "fade", "show", "active", 3, "id"], [4, "ngComponentOutlet"]],
        template: function SettingManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "abp-page", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "abpLocalization");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SettingManagementComponent_ng_container_8_Template, 2, 1, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SettingManagementComponent_div_10_Template, 3, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, "AbpSettingManagement::Settings"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("abpForOf", ctx.settings)("abpForTrackBy", ctx.trackByFn);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settings.length);
          }
        },
        directives: [_abp_ng_components_page__WEBPACK_IMPORTED_MODULE_4__["PageComponent"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ForDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["PermissionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgComponentOutlet"]],
        pipes: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["LocalizationPipe"]],
        encapsulation: 2
      });

      SettingManagementComponent.ctorParameters = function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SettingTabsService"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SettingManagementComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'abp-setting-management',
            template: "<abp-page [title]=\"'AbpSettingManagement::Settings' | abpLocalization\">\n  <div id=\"SettingManagementWrapper\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-12 col-md-3\">\n            <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\n              <ng-container *abpFor=\"let setting of settings; trackBy: trackByFn\">\n                <li\n                  (click)=\"selected = setting\"\n                  class=\"nav-item pointer\"\n                  *abpPermission=\"setting.requiredPolicy\"\n                >\n                  <a\n                    class=\"nav-link\"\n                    [id]=\"setting.name + '-tab'\"\n                    role=\"tab\"\n                    [class.active]=\"setting.name === selected.name\"\n                    >{{ setting.name | abpLocalization }}</a\n                  >\n                </li>\n              </ng-container>\n            </ul>\n          </div>\n          <div class=\"col-12 col-md-9\">\n            <div *ngIf=\"settings.length\" class=\"tab-content\">\n              <div class=\"tab-pane fade show active\" [id]=\"selected.name + '-tab'\" role=\"tabpanel\">\n                <ng-container *ngComponentOutlet=\"selected.component\"></ng-container>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</abp-page>\n"
          }]
        }], function () {
          return [{
            type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }, {
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SettingTabsService"]
          }];
        }, null);
      })();

      var ɵ0 = {
        requiredPolicy: 'AbpAccount.SettingManagement',
        replaceableComponent: {
          key: "SettingManagement.SettingManagementComponent"
          /* SettingManagement */
          ,
          defaultComponent: SettingManagementComponent
        }
      };
      var routes = [{
        path: '',
        component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["DynamicLayoutComponent"],
        canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        children: [{
          path: '',
          component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ReplaceableRouteContainerComponent"],
          data: ɵ0
        }]
      }];

      var SettingManagementRoutingModule = function SettingManagementRoutingModule() {
        _classCallCheck(this, SettingManagementRoutingModule);
      };

      SettingManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: SettingManagementRoutingModule
      });
      SettingManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function SettingManagementRoutingModule_Factory(t) {
          return new (t || SettingManagementRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingManagementRoutingModule, {
          imports: function imports() {
            return [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]];
          },
          exports: function exports() {
            return [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SettingManagementRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
          }]
        }], null, null);
      })();

      var SettingManagementModule = /*#__PURE__*/function () {
        function SettingManagementModule() {
          _classCallCheck(this, SettingManagementModule);
        }

        _createClass(SettingManagementModule, null, [{
          key: "forChild",
          value: function forChild() {
            return {
              ngModule: SettingManagementModule,
              providers: []
            };
          }
        }, {
          key: "forLazy",
          value: function forLazy() {
            return new _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["LazyModuleFactory"](SettingManagementModule.forChild());
          }
        }]);

        return SettingManagementModule;
      }();

      SettingManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: SettingManagementModule
      });
      SettingManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function SettingManagementModule_Factory(t) {
          return new (t || SettingManagementModule)();
        },
        imports: [[SettingManagementRoutingModule, _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _abp_ng_components_page__WEBPACK_IMPORTED_MODULE_4__["PageModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forFeature([SettingManagementState])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingManagementModule, {
          declarations: function declarations() {
            return [SettingManagementComponent];
          },
          imports: function imports() {
            return [SettingManagementRoutingModule, _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _abp_ng_components_page__WEBPACK_IMPORTED_MODULE_4__["PageModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["ɵbc"]];
          },
          exports: function exports() {
            return [SettingManagementComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SettingManagementModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [SettingManagementComponent],
            exports: [SettingManagementComponent],
            imports: [SettingManagementRoutingModule, _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _abp_ng_components_page__WEBPACK_IMPORTED_MODULE_4__["PageModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forFeature([SettingManagementState])]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=abp-ng.setting-management.js.map

      /***/

    },

    /***/
    "OZko":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@abp/ng.components/__ivy_ngcc__/fesm2015/abp-ng.components-page.js ***!
      \*****************************************************************************************/

    /*! exports provided: PAGE_RENDER_STRATEGY, PageBreadcrumbContainerComponent, PageComponent, PageModule, PagePartDirective, PageParts, PageTitleContainerComponent, PageToolbarContainerComponent */

    /***/
    function OZko(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAGE_RENDER_STRATEGY", function () {
        return PAGE_RENDER_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageBreadcrumbContainerComponent", function () {
        return PageBreadcrumbContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageComponent", function () {
        return PageComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageModule", function () {
        return PageModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagePartDirective", function () {
        return PagePartDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageParts", function () {
        return PageParts;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageTitleContainerComponent", function () {
        return PageTitleContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageToolbarContainerComponent", function () {
        return PageToolbarContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @abp/ng.theme.shared/extensions */
      "J7bl");
      /* harmony import */


      var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @abp/ng.theme.shared */
      "1REP");
      /* harmony import */


      var _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @abp/ng.core */
      "HmNo");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var _c0 = ["*"];

      function PageComponent_div_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function PageComponent_div_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function PageComponent_div_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function PageComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageComponent_div_0_ng_container_1_Template, 2, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageComponent_div_0_ng_container_2_Template, 2, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageComponent_div_0_ng_container_3_Template, 2, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.customTitle)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.customBreadcrumb)("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.customToolbar)("ngIfElse", _r5);
        }
      }

      function PageComponent_ng_template_2_ng_container_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.title, " ");
        }
      }

      function PageComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageComponent_ng_template_2_ng_container_0_div_1_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abpPagePart", ctx_r10.pageParts.title);
        }
      }

      function PageComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageComponent_ng_template_2_ng_container_0_Template, 2, 1, "ng-container", 6);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.title);
        }
      }

      function PageComponent_ng_template_4_ng_container_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "abp-breadcrumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PageComponent_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageComponent_ng_template_4_ng_container_0_div_1_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abpPagePart", ctx_r12.pageParts.breadcrumb);
        }
      }

      function PageComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageComponent_ng_template_4_ng_container_0_Template, 2, 1, "ng-container", 6);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.breadcrumbVisible);
        }
      }

      function PageComponent_ng_template_6_ng_container_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "abp-page-toolbar", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("record", ctx_r15.toolbarData);
        }
      }

      function PageComponent_ng_template_6_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageComponent_ng_template_6_ng_container_0_div_1_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abpPagePart", ctx_r14.pageParts.toolbar)("abpPagePartContext", ctx_r14.toolbarData);
        }
      }

      function PageComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageComponent_ng_template_6_ng_container_0_Template, 2, 2, "ng-container", 6);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.toolbarVisible);
        }
      }

      var _c1 = ["*", [["abp-page-title-container"]], [["abp-page-breadcrumb-container"]], [["abp-page-toolbar-container"]]];
      var _c2 = ["*", "abp-page-title-container", "abp-page-breadcrumb-container", "abp-page-toolbar-container"];
      var PageParts;

      (function (PageParts) {
        PageParts["title"] = "PageTitleContainerComponent";
        PageParts["breadcrumb"] = "PageBreadcrumbContainerComponent";
        PageParts["toolbar"] = "PageToolbarContainerComponent";
      })(PageParts || (PageParts = {}));

      var PageTitleContainerComponent = function PageTitleContainerComponent() {
        _classCallCheck(this, PageTitleContainerComponent);
      };

      PageTitleContainerComponent.ɵfac = function PageTitleContainerComponent_Factory(t) {
        return new (t || PageTitleContainerComponent)();
      };

      PageTitleContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageTitleContainerComponent,
        selectors: [["abp-page-title-container"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function PageTitleContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageTitleContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'abp-page-title-container',
            template: "\n    <ng-content></ng-content>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], null, null);
      })();

      var PageBreadcrumbContainerComponent = function PageBreadcrumbContainerComponent() {
        _classCallCheck(this, PageBreadcrumbContainerComponent);
      };

      PageBreadcrumbContainerComponent.ɵfac = function PageBreadcrumbContainerComponent_Factory(t) {
        return new (t || PageBreadcrumbContainerComponent)();
      };

      PageBreadcrumbContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageBreadcrumbContainerComponent,
        selectors: [["abp-page-breadcrumb-container"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function PageBreadcrumbContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageBreadcrumbContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'abp-page-breadcrumb-container',
            template: "\n    <ng-content></ng-content>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], null, null);
      })();

      var PageToolbarContainerComponent = function PageToolbarContainerComponent() {
        _classCallCheck(this, PageToolbarContainerComponent);
      };

      PageToolbarContainerComponent.ɵfac = function PageToolbarContainerComponent_Factory(t) {
        return new (t || PageToolbarContainerComponent)();
      };

      PageToolbarContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageToolbarContainerComponent,
        selectors: [["abp-page-toolbar-container"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function PageToolbarContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageToolbarContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'abp-page-toolbar-container',
            template: "\n    <ng-content></ng-content>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], null, null);
      })();

      var PageComponent = /*#__PURE__*/function () {
        function PageComponent() {
          _classCallCheck(this, PageComponent);

          this.toolbarVisible = false;
          this.breadcrumbVisible = true;
          this.pageParts = {
            title: PageParts.title,
            breadcrumb: PageParts.breadcrumb,
            toolbar: PageParts.toolbar
          };
        }

        _createClass(PageComponent, [{
          key: "toolbarData",
          get: function get() {
            return this._toolbarData;
          },
          set: function set(val) {
            this._toolbarData = val;
            this.toolbarVisible = true;
          }
        }, {
          key: "shouldRenderRow",
          get: function get() {
            return !!(this.title || this.toolbarVisible || this.breadcrumbVisible || this.customTitle || this.customBreadcrumb || this.customToolbar);
          }
        }]);

        return PageComponent;
      }();

      PageComponent.ɵfac = function PageComponent_Factory(t) {
        return new (t || PageComponent)();
      };

      PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageComponent,
        selectors: [["abp-page"]],
        contentQueries: function PageComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, PageTitleContainerComponent, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, PageBreadcrumbContainerComponent, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, PageToolbarContainerComponent, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customTitle = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customBreadcrumb = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customToolbar = _t.first);
          }
        },
        inputs: {
          breadcrumbVisible: ["breadcrumb", "breadcrumbVisible"],
          toolbarData: ["toolbar", "toolbarData"],
          title: "title"
        },
        ngContentSelectors: _c2,
        decls: 8,
        vars: 1,
        consts: [["class", "row entry-row", 4, "ngIf"], ["defaultTitleTemplate", ""], ["defaultBreadcrumbTemplate", ""], ["defaultPageToolbarTemplate", ""], [1, "row", "entry-row"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["class", "col-auto", 4, "abpPagePart"], [1, "col-auto"], [1, "content-header-title"], ["class", "col-lg-auto pl-lg-0", 4, "abpPagePart"], [1, "col-lg-auto", "pl-lg-0"], ["class", "col", 4, "abpPagePart", "abpPagePartContext"], [1, "col"], [3, "record"]],
        template: function PageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageComponent_div_0_Template, 4, 6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PageComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PageComponent_ng_template_6_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldRenderRow);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], PagePartDirective, _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_2__["PageToolbarComponent"]];
        },
        encapsulation: 2
      });
      PageComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toolbarData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['toolbar']
        }],
        breadcrumbVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['breadcrumb']
        }],
        customTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [PageTitleContainerComponent]
        }],
        customBreadcrumb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [PageBreadcrumbContainerComponent]
        }],
        customToolbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [PageToolbarContainerComponent]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'abp-page',
            template: "<div class=\"row entry-row\" *ngIf=\"shouldRenderRow\">\n  <ng-container *ngIf=\"customTitle; else defaultTitleTemplate\">\n    <ng-content select=\"abp-page-title-container\"></ng-content>\n  </ng-container>\n\n  <ng-container *ngIf=\"customBreadcrumb; else defaultBreadcrumbTemplate\">\n    <ng-content select=\"abp-page-breadcrumb-container\"></ng-content>\n  </ng-container>\n\n  <ng-container *ngIf=\"customToolbar; else defaultPageToolbarTemplate\">\n    <ng-content select=\"abp-page-toolbar-container\"></ng-content>\n  </ng-container>\n</div>\n\n<ng-content></ng-content>\n\n<ng-template #defaultTitleTemplate>\n  <ng-container *ngIf=\"title\">\n    <div class=\"col-auto\" *abpPagePart=\"pageParts.title\">\n      <h1 class=\"content-header-title\">\n        {{ title }}\n      </h1>\n    </div>\n  </ng-container>\n</ng-template>\n\n<ng-template #defaultBreadcrumbTemplate>\n  <ng-container *ngIf=\"breadcrumbVisible\">\n    <div class=\"col-lg-auto pl-lg-0\" *abpPagePart=\"pageParts.breadcrumb\">\n      <abp-breadcrumb></abp-breadcrumb>\n    </div>\n  </ng-container>\n</ng-template>\n\n<ng-template #defaultPageToolbarTemplate>\n  <ng-container *ngIf=\"toolbarVisible\">\n    <div class=\"col\" *abpPagePart=\"pageParts.toolbar; context: toolbarData\">\n      <abp-page-toolbar [record]=\"toolbarData\"></abp-page-toolbar>\n    </div>\n  </ng-container>\n</ng-template>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          breadcrumbVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['breadcrumb']
          }],
          toolbarData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['toolbar']
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [PageTitleContainerComponent]
          }],
          customBreadcrumb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [PageBreadcrumbContainerComponent]
          }],
          customToolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [PageToolbarContainerComponent]
          }]
        });
      })();

      var PAGE_RENDER_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('PAGE_RENDER_STRATEGY');

      var PagePartDirective = /*#__PURE__*/function () {
        function PagePartDirective(templateRef, viewContainer, renderLogic, injector) {
          var _this2 = this;

          _classCallCheck(this, PagePartDirective);

          this.templateRef = templateRef;
          this.viewContainer = viewContainer;
          this.renderLogic = renderLogic;
          this.injector = injector;
          this.hasRendered = false;

          this.render = function (shouldRender) {
            if (shouldRender && !_this2.hasRendered) {
              _this2.viewContainer.createEmbeddedView(_this2.templateRef);

              _this2.hasRendered = true;
            } else if (!shouldRender && _this2.hasRendered) {
              _this2.viewContainer.clear();

              _this2.hasRendered = false;
            }
          };
        }

        _createClass(PagePartDirective, [{
          key: "abpPagePart",
          set: function set(type) {
            this.type = type;
            this.createRenderStream(type);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(_ref4) {
            var context = _ref4.context;

            var _a;

            if ((_a = this.renderLogic) === null || _a === void 0 ? void 0 : _a.onContextUpdate) {
              this.renderLogic.onContextUpdate(context);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a;

            if ((_a = this.renderLogic) === null || _a === void 0 ? void 0 : _a.onInit) {
              this.renderLogic.onInit(this.type, this.injector, this.context);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            this.clearSubscription();

            if ((_a = this.renderLogic) === null || _a === void 0 ? void 0 : _a.onDestroy) {
              this.renderLogic.onDestroy(this.type, this.injector, this.context);
            }
          }
        }, {
          key: "shouldRender",
          value: function shouldRender(type) {
            if (this.renderLogic) {
              var willRender = this.renderLogic.shouldRender(type);
              return willRender instanceof rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"] ? willRender : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(willRender);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(true);
          }
        }, {
          key: "createRenderStream",
          value: function createRenderStream(type) {
            this.clearSubscription();
            this.subscription = this.shouldRender(type).subscribe(this.render);
          }
        }, {
          key: "clearSubscription",
          value: function clearSubscription() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
        }]);

        return PagePartDirective;
      }();

      PagePartDirective.ɵfac = function PagePartDirective_Factory(t) {
        return new (t || PagePartDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PAGE_RENDER_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      PagePartDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PagePartDirective,
        selectors: [["", "abpPagePart", ""]],
        inputs: {
          abpPagePart: "abpPagePart",
          context: ["abpPagePartContext", "context"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      PagePartDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [PAGE_RENDER_STRATEGY]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      };

      PagePartDirective.propDecorators = {
        context: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['abpPagePartContext']
        }],
        abpPagePart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagePartDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[abpPagePart]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [PAGE_RENDER_STRATEGY]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, {
          abpPagePart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          context: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['abpPagePartContext']
          }]
        });
      })();

      var exportedDeclarations = [PageComponent, PageTitleContainerComponent, PageBreadcrumbContainerComponent, PageToolbarContainerComponent, PagePartDirective];

      var PageModule = function PageModule() {
        _classCallCheck(this, PageModule);
      };

      PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PageModule
      });
      PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PageModule_Factory(t) {
          return new (t || PageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_2__["UiExtensionsModule"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_3__["ThemeSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageModule, {
          declarations: function declarations() {
            return [PageComponent, PageTitleContainerComponent, PageBreadcrumbContainerComponent, PageToolbarContainerComponent, PagePartDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_2__["UiExtensionsModule"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_3__["ThemeSharedModule"]];
          },
          exports: function exports() {
            return [PageComponent, PageTitleContainerComponent, PageBreadcrumbContainerComponent, PageToolbarContainerComponent, PagePartDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [].concat(exportedDeclarations),
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_2__["UiExtensionsModule"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_3__["ThemeSharedModule"]],
            exports: [].concat(exportedDeclarations)
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=abp-ng.components-page.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=abp-ng-setting-management-es5.js.map