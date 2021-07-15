(function () {
  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["abp-ng-identity"], {
    /***/
    "kuRq":
    /*!********************************************************************************!*\
      !*** ./node_modules/@abp/ng.identity/__ivy_ngcc__/fesm2015/abp-ng.identity.js ***!
      \********************************************************************************/

    /*! exports provided: CreateRole, CreateUser, DEFAULT_IDENTITY_CREATE_FORM_PROPS, DEFAULT_IDENTITY_EDIT_FORM_PROPS, DEFAULT_IDENTITY_ENTITY_ACTIONS, DEFAULT_IDENTITY_ENTITY_PROPS, DEFAULT_IDENTITY_TOOLBAR_ACTIONS, DeleteRole, DeleteUser, GetRoleById, GetRoles, GetUserById, GetUserRoles, GetUsers, IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS, IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS, IDENTITY_ENTITY_ACTION_CONTRIBUTORS, IDENTITY_ENTITY_PROP_CONTRIBUTORS, IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS, IdentityExtensionsGuard, IdentityModule, IdentityRoleService, IdentityState, IdentityStateService, IdentityUserLookupService, IdentityUserService, ProfileService, RolesComponent, UpdateRole, UpdateUser, UsersComponent, ɵ0, ɵa, ɵba, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */

    /***/
    function kuRq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _DEFAULT_IDENTITY_ENT, _DEFAULT_IDENTITY_TOO, _DEFAULT_IDENTITY_ENT2, _DEFAULT_IDENTITY_CRE, _DEFAULT_IDENTITY_EDI;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateRole", function () {
        return CreateRole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateUser", function () {
        return CreateUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_IDENTITY_CREATE_FORM_PROPS", function () {
        return DEFAULT_IDENTITY_CREATE_FORM_PROPS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_IDENTITY_EDIT_FORM_PROPS", function () {
        return DEFAULT_IDENTITY_EDIT_FORM_PROPS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_IDENTITY_ENTITY_ACTIONS", function () {
        return DEFAULT_IDENTITY_ENTITY_ACTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_IDENTITY_ENTITY_PROPS", function () {
        return DEFAULT_IDENTITY_ENTITY_PROPS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_IDENTITY_TOOLBAR_ACTIONS", function () {
        return DEFAULT_IDENTITY_TOOLBAR_ACTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteRole", function () {
        return DeleteRole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteUser", function () {
        return DeleteUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetRoleById", function () {
        return GetRoleById;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetRoles", function () {
        return GetRoles;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUserById", function () {
        return GetUserById;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUserRoles", function () {
        return GetUserRoles;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUsers", function () {
        return GetUsers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS", function () {
        return IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS", function () {
        return IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IDENTITY_ENTITY_ACTION_CONTRIBUTORS", function () {
        return IDENTITY_ENTITY_ACTION_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IDENTITY_ENTITY_PROP_CONTRIBUTORS", function () {
        return IDENTITY_ENTITY_PROP_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS", function () {
        return IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdentityExtensionsGuard", function () {
        return IdentityExtensionsGuard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdentityModule", function () {
        return IdentityModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdentityRoleService", function () {
        return IdentityRoleService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdentityState", function () {
        return IdentityState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdentityStateService", function () {
        return IdentityStateService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdentityUserLookupService", function () {
        return IdentityUserLookupService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdentityUserService", function () {
        return IdentityUserService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
        return ProfileService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesComponent", function () {
        return RolesComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateRole", function () {
        return UpdateRole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateUser", function () {
        return UpdateUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
        return UsersComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0$9;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return RolesComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵba", function () {
        return IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return IdentityState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return IdentityUserService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return IdentityRoleService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵf", function () {
        return GetRoles;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵg", function () {
        return GetRoleById;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵh", function () {
        return DeleteRole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵi", function () {
        return CreateRole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵj", function () {
        return UpdateRole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵk", function () {
        return GetUsers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵl", function () {
        return GetUserById;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵm", function () {
        return DeleteUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵn", function () {
        return CreateUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵo", function () {
        return UpdateUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵp", function () {
        return GetUserRoles;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵt", function () {
        return UsersComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵu", function () {
        return IdentityRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵv", function () {
        return IdentityExtensionsGuard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵw", function () {
        return IDENTITY_ENTITY_ACTION_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵx", function () {
        return IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵy", function () {
        return IDENTITY_ENTITY_PROP_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵz", function () {
        return IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @abp/ng.core */
      "HmNo");
      /* harmony import */


      var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @abp/ng.theme.shared */
      "1REP");
      /* harmony import */


      var _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @abp/ng.theme.shared/extensions */
      "J7bl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var snq__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! snq */
      "350m");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @abp/ng.permission-management */
      "x4+Y");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-validate/core */
      "iWZL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RolesComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, (ctx_r1.selected == null ? null : ctx_r1.selected.id) ? "AbpIdentity::Edit" : "AbpIdentity::NewRole"));
        }
      }

      function RolesComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function RolesComponent_ng_template_17_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r7.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "abp-extensible-form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r3.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedRecord", ctx_r3.selected);
        }
      }

      function RolesComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "abp-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RolesComponent_ng_template_19_Template_abp_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r9.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, "AbpIdentity::Cancel"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r5.form == null ? null : ctx_r5.form.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 5, "AbpIdentity::Save"));
        }
      }

      function RolesComponent_abp_permission_management_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "abp-permission-management", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("abpInit", function RolesComponent_abp_permission_management_21_Template_abp_permission_management_abpInit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);

            var init_r11 = ctx.initTemplate;

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

            return init_r11(_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          value: "R"
        };
      };

      var _c1 = function _c1(a0) {
        return {
          value: a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          value: a0,
          twoWay: true
        };
      };

      var _c3 = function _c3() {
        return {
          value: true
        };
      };

      var _c4 = function _c4(a0, a1, a2, a3) {
        return {
          providerName: a0,
          providerKey: a1,
          visible: a2,
          hideBadges: a3
        };
      };

      var _c5 = function _c5(a0) {
        return {
          visibleChange: a0
        };
      };

      var _c6 = function _c6(a0, a1, a2) {
        return {
          inputs: a0,
          outputs: a1,
          componentKey: a2
        };
      };

      var _c7 = ["modalContent"];

      function UsersComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, (ctx_r1.selected == null ? null : ctx_r1.selected.id) ? "AbpIdentity::Edit" : "AbpIdentity::NewUser"));
        }
      }

      function UsersComponent_ng_template_21_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_ng_template_21_form_2_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "abp-extensible-form", 28);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedRecord", ctx_r11.selected);
        }
      }

      function UsersComponent_ng_template_21_form_2_ng_template_12_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var roleGroup_r14 = ctx.$implicit;
          var i_r15 = ctx.index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", roleGroup_r14.controls[ctx_r13.roles[i_r15].name]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", "roles-" + i_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("for", "roles-" + i_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r13.roles[i_r15].name);
        }
      }

      function UsersComponent_ng_template_21_form_2_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, UsersComponent_ng_template_21_form_2_ng_template_12_div_0_Template, 4, 4, "div", 29);
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r12.roleGroups)("ngForTrackBy", ctx_r12.trackByFn);
        }
      }

      function UsersComponent_ng_template_21_form_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function UsersComponent_ng_template_21_form_2_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r16.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, UsersComponent_ng_template_21_form_2_ng_template_7_Template, 1, 1, "ng-template", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, UsersComponent_ng_template_21_form_2_ng_template_12_Template, 1, 2, "ng-template", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r9.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, "AbpIdentity::UserInformations"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 6, "AbpIdentity::Roles"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r10);
        }
      }

      function UsersComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, UsersComponent_ng_template_21_ng_template_0_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, UsersComponent_ng_template_21_form_2_Template, 14, 8, "form", 18);
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.form)("ngIfElse", _r7);
        }
      }

      function UsersComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "abp-button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersComponent_ng_template_23_Template_abp_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r18.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, "AbpIdentity::Cancel"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r5.form == null ? null : ctx_r5.form.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 5, "AbpIdentity::Save"));
        }
      }

      function UsersComponent_abp_permission_management_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "abp-permission-management", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("abpInit", function UsersComponent_abp_permission_management_25_Template_abp_permission_management_abpInit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);

            var init_r20 = ctx.initTemplate;

            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

            return init_r20(_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c8 = function _c8() {
        return {
          value: "U"
        };
      };

      var _c9 = function _c9(a0, a1, a2) {
        return {
          providerName: a0,
          providerKey: a1,
          visible: a2
        };
      };

      var GetRoles = function GetRoles(payload) {
        _classCallCheck(this, GetRoles);

        this.payload = payload;
      };

      GetRoles.type = '[Identity] Get Roles';

      var GetRoleById = function GetRoleById(payload) {
        _classCallCheck(this, GetRoleById);

        this.payload = payload;
      };

      GetRoleById.type = '[Identity] Get Role By Id';

      var DeleteRole = function DeleteRole(payload) {
        _classCallCheck(this, DeleteRole);

        this.payload = payload;
      };

      DeleteRole.type = '[Identity] Delete Role';

      var CreateRole = function CreateRole(payload) {
        _classCallCheck(this, CreateRole);

        this.payload = payload;
      };

      CreateRole.type = '[Identity] Create Role';

      var UpdateRole = function UpdateRole(payload) {
        _classCallCheck(this, UpdateRole);

        this.payload = payload;
      };

      UpdateRole.type = '[Identity] Update Role';

      var GetUsers = function GetUsers(payload) {
        _classCallCheck(this, GetUsers);

        this.payload = payload;
      };

      GetUsers.type = '[Identity] Get Users';

      var GetUserById = function GetUserById(payload) {
        _classCallCheck(this, GetUserById);

        this.payload = payload;
      };

      GetUserById.type = '[Identity] Get User By Id';

      var DeleteUser = function DeleteUser(payload) {
        _classCallCheck(this, DeleteUser);

        this.payload = payload;
      };

      DeleteUser.type = '[Identity] Delete User';

      var CreateUser = function CreateUser(payload) {
        _classCallCheck(this, CreateUser);

        this.payload = payload;
      };

      CreateUser.type = '[Identity] Create User';

      var UpdateUser = function UpdateUser(payload) {
        _classCallCheck(this, UpdateUser);

        this.payload = payload;
      };

      UpdateUser.type = '[Identity] Update User';

      var GetUserRoles = function GetUserRoles(payload) {
        _classCallCheck(this, GetUserRoles);

        this.payload = payload;
      };

      GetUserRoles.type = '[Identity] Get User Roles';

      var IdentityRoleService = function IdentityRoleService(restService) {
        var _this = this;

        _classCallCheck(this, IdentityRoleService);

        this.restService = restService;
        this.apiName = 'AbpIdentity';

        this.create = function (input) {
          return _this.restService.request({
            method: 'POST',
            url: '/api/identity/roles',
            body: input
          }, {
            apiName: _this.apiName
          });
        };

        this["delete"] = function (id) {
          return _this.restService.request({
            method: 'DELETE',
            url: "/api/identity/roles/".concat(id)
          }, {
            apiName: _this.apiName
          });
        };

        this.get = function (id) {
          return _this.restService.request({
            method: 'GET',
            url: "/api/identity/roles/".concat(id)
          }, {
            apiName: _this.apiName
          });
        };

        this.getAllList = function () {
          return _this.restService.request({
            method: 'GET',
            url: '/api/identity/roles/all'
          }, {
            apiName: _this.apiName
          });
        };

        this.getList = function (input) {
          return _this.restService.request({
            method: 'GET',
            url: '/api/identity/roles',
            params: {
              sorting: input.sorting,
              skipCount: input.skipCount,
              maxResultCount: input.maxResultCount
            }
          }, {
            apiName: _this.apiName
          });
        };

        this.update = function (id, input) {
          return _this.restService.request({
            method: 'PUT',
            url: "/api/identity/roles/".concat(id),
            body: input
          }, {
            apiName: _this.apiName
          });
        };
      };

      IdentityRoleService.ɵfac = function IdentityRoleService_Factory(t) {
        return new (t || IdentityRoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]));
      };

      IdentityRoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        factory: function IdentityRoleService_Factory() {
          return new IdentityRoleService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]));
        },
        token: IdentityRoleService,
        providedIn: "root"
      });

      IdentityRoleService.ctorParameters = function () {
        return [{
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]
        }];
      };

      var IdentityUserService = function IdentityUserService(restService) {
        var _this2 = this;

        _classCallCheck(this, IdentityUserService);

        this.restService = restService;
        this.apiName = 'AbpIdentity';

        this.create = function (input) {
          return _this2.restService.request({
            method: 'POST',
            url: '/api/identity/users',
            body: input
          }, {
            apiName: _this2.apiName
          });
        };

        this["delete"] = function (id) {
          return _this2.restService.request({
            method: 'DELETE',
            url: "/api/identity/users/".concat(id)
          }, {
            apiName: _this2.apiName
          });
        };

        this.findByEmail = function (email) {
          return _this2.restService.request({
            method: 'GET',
            url: "/api/identity/users/by-email/".concat(email)
          }, {
            apiName: _this2.apiName
          });
        };

        this.findByUsername = function (username) {
          return _this2.restService.request({
            method: 'GET',
            url: '/api/identity/users/by-username/{userName}'
          }, {
            apiName: _this2.apiName
          });
        };

        this.get = function (id) {
          return _this2.restService.request({
            method: 'GET',
            url: "/api/identity/users/".concat(id)
          }, {
            apiName: _this2.apiName
          });
        };

        this.getAssignableRoles = function () {
          return _this2.restService.request({
            method: 'GET',
            url: '/api/identity/users/assignable-roles'
          }, {
            apiName: _this2.apiName
          });
        };

        this.getList = function (input) {
          return _this2.restService.request({
            method: 'GET',
            url: '/api/identity/users',
            params: {
              filter: input.filter,
              sorting: input.sorting,
              skipCount: input.skipCount,
              maxResultCount: input.maxResultCount
            }
          }, {
            apiName: _this2.apiName
          });
        };

        this.getRoles = function (id) {
          return _this2.restService.request({
            method: 'GET',
            url: "/api/identity/users/".concat(id, "/roles")
          }, {
            apiName: _this2.apiName
          });
        };

        this.update = function (id, input) {
          return _this2.restService.request({
            method: 'PUT',
            url: "/api/identity/users/".concat(id),
            body: input
          }, {
            apiName: _this2.apiName
          });
        };

        this.updateRoles = function (id, input) {
          return _this2.restService.request({
            method: 'PUT',
            url: "/api/identity/users/".concat(id, "/roles"),
            body: input
          }, {
            apiName: _this2.apiName
          });
        };
      };

      IdentityUserService.ɵfac = function IdentityUserService_Factory(t) {
        return new (t || IdentityUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]));
      };

      IdentityUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        factory: function IdentityUserService_Factory() {
          return new IdentityUserService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]));
        },
        token: IdentityUserService,
        providedIn: "root"
      });

      IdentityUserService.ctorParameters = function () {
        return [{
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]
        }];
      };

      var IdentityState = /*#__PURE__*/function () {
        function IdentityState(identityUserService, identityRoleService) {
          _classCallCheck(this, IdentityState);

          this.identityUserService = identityUserService;
          this.identityRoleService = identityRoleService;
        }

        _createClass(IdentityState, [{
          key: "getRoles",
          value: function getRoles(_ref, _ref2) {
            var patchState = _ref.patchState;
            var payload = _ref2.payload;
            return this.identityRoleService.getList(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (roles) {
              return patchState({
                roles: roles
              });
            }));
          }
        }, {
          key: "getRole",
          value: function getRole(_ref3, _ref4) {
            var patchState = _ref3.patchState;
            var payload = _ref4.payload;
            return this.identityRoleService.get(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (selectedRole) {
              return patchState({
                selectedRole: selectedRole
              });
            }));
          }
        }, {
          key: "deleteRole",
          value: function deleteRole(_, _ref5) {
            var payload = _ref5.payload;
            return this.identityRoleService["delete"](payload);
          }
        }, {
          key: "addRole",
          value: function addRole(_, _ref6) {
            var payload = _ref6.payload;
            return this.identityRoleService.create(payload);
          }
        }, {
          key: "updateRole",
          value: function updateRole(_ref7, _ref8) {
            var getState = _ref7.getState;
            var payload = _ref8.payload;
            return this.identityRoleService.update(payload.id, Object.assign(Object.assign({}, getState().selectedRole), payload));
          }
        }, {
          key: "getUsers",
          value: function getUsers(_ref9, _ref10) {
            var patchState = _ref9.patchState;
            var payload = _ref10.payload;
            return this.identityUserService.getList(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (users) {
              return patchState({
                users: users
              });
            }));
          }
        }, {
          key: "getUser",
          value: function getUser(_ref11, _ref12) {
            var patchState = _ref11.patchState;
            var payload = _ref12.payload;
            return this.identityUserService.get(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (selectedUser) {
              return patchState({
                selectedUser: selectedUser
              });
            }));
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(_, _ref13) {
            var payload = _ref13.payload;
            return this.identityUserService["delete"](payload);
          }
        }, {
          key: "addUser",
          value: function addUser(_, _ref14) {
            var payload = _ref14.payload;
            return this.identityUserService.create(payload);
          }
        }, {
          key: "updateUser",
          value: function updateUser(_ref15, _ref16) {
            var getState = _ref15.getState;
            var payload = _ref16.payload;
            return this.identityUserService.update(payload.id, Object.assign(Object.assign({}, getState().selectedUser), payload));
          }
        }, {
          key: "getUserRoles",
          value: function getUserRoles(_ref17, _ref18) {
            var patchState = _ref17.patchState;
            var payload = _ref18.payload;
            return this.identityUserService.getRoles(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('items'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (selectedUserRoles) {
              return patchState({
                selectedUserRoles: selectedUserRoles
              });
            }));
          }
        }], [{
          key: "getRoles",
          value: function getRoles(_ref19) {
            var roles = _ref19.roles;
            return roles.items || [];
          }
        }, {
          key: "getRolesTotalCount",
          value: function getRolesTotalCount(_ref20) {
            var roles = _ref20.roles;
            return roles.totalCount || 0;
          }
        }, {
          key: "getUsers",
          value: function getUsers(_ref21) {
            var users = _ref21.users;
            return users.items || [];
          }
        }, {
          key: "getUsersTotalCount",
          value: function getUsersTotalCount(_ref22) {
            var users = _ref22.users;
            return users.totalCount || 0;
          }
        }]);

        return IdentityState;
      }();

      IdentityState.ɵfac = function IdentityState_Factory(t) {
        return new (t || IdentityState)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](IdentityUserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](IdentityRoleService));
      };

      IdentityState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: IdentityState,
        factory: function factory(t) {
          return IdentityState.ɵfac(t);
        }
      });

      IdentityState.ctorParameters = function () {
        return [{
          type: IdentityUserService
        }, {
          type: IdentityRoleService
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(GetRoles)], IdentityState.prototype, "getRoles", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(GetRoleById)], IdentityState.prototype, "getRole", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(DeleteRole)], IdentityState.prototype, "deleteRole", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(CreateRole)], IdentityState.prototype, "addRole", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(UpdateRole)], IdentityState.prototype, "updateRole", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(GetUsers)], IdentityState.prototype, "getUsers", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(GetUserById)], IdentityState.prototype, "getUser", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(DeleteUser)], IdentityState.prototype, "deleteUser", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(CreateUser)], IdentityState.prototype, "addUser", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(UpdateUser)], IdentityState.prototype, "updateUser", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(GetUserRoles)], IdentityState.prototype, "getUserRoles", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()], IdentityState, "getRoles", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()], IdentityState, "getRolesTotalCount", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()], IdentityState, "getUsers", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()], IdentityState, "getUsersTotalCount", null);
      IdentityState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["State"])({
        name: 'IdentityState',
        defaults: {
          roles: {},
          selectedRole: {},
          users: {},
          selectedUser: {}
        }
      })], IdentityState);
      var ɵ0$9 = "Identity.RolesComponent"
      /* Roles */
      ;

      var RolesComponent = /*#__PURE__*/function () {
        function RolesComponent(list, confirmationService, store, injector) {
          var _this3 = this;

          _classCallCheck(this, RolesComponent);

          this.list = list;
          this.confirmationService = confirmationService;
          this.store = store;
          this.injector = injector;
          this.visiblePermissions = false;
          this.modalBusy = false;
          this.permissionManagementKey = "PermissionManagement.PermissionManagementComponent"
          /* PermissionManagement */
          ;

          this.onVisiblePermissionChange = function (event) {
            _this3.visiblePermissions = event;
          };
        }

        _createClass(RolesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hookToQuery();
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            var data = new _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["FormPropData"](this.injector, this.selected);
            this.form = Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["generateFormFromProps"])(data);
          }
        }, {
          key: "openModal",
          value: function openModal() {
            this.buildForm();
            this.isModalVisible = true;
          }
        }, {
          key: "add",
          value: function add() {
            this.selected = {};
            this.openModal();
          }
        }, {
          key: "edit",
          value: function edit(id) {
            var _this4 = this;

            this.store.dispatch(new GetRoleById(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('IdentityState', 'selectedRole')).subscribe(function (selectedRole) {
              _this4.selected = selectedRole;

              _this4.openModal();
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this5 = this;

            if (!this.form.valid) return;
            this.modalBusy = true;
            this.store.dispatch(this.selected.id ? new UpdateRole(Object.assign(Object.assign(Object.assign({}, this.selected), this.form.value), {
              id: this.selected.id
            })) : new CreateRole(this.form.value)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this5.modalBusy = false;
            })).subscribe(function () {
              _this5.isModalVisible = false;

              _this5.list.get();
            });
          }
        }, {
          key: "delete",
          value: function _delete(id, name) {
            var _this6 = this;

            this.confirmationService.warn('AbpIdentity::RoleDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
              messageLocalizationParams: [name]
            }).subscribe(function (status) {
              if (status === _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["Confirmation"].Status.confirm) {
                _this6.store.dispatch(new DeleteRole(id)).subscribe(function () {
                  return _this6.list.get();
                });
              }
            });
          }
        }, {
          key: "hookToQuery",
          value: function hookToQuery() {
            var _this7 = this;

            this.list.hookToQuery(function (query) {
              return _this7.store.dispatch(new GetRoles(query));
            }).subscribe();
          }
        }, {
          key: "openPermissionsModal",
          value: function openPermissionsModal(providerKey) {
            var _this8 = this;

            this.providerKey = providerKey;
            setTimeout(function () {
              _this8.visiblePermissions = true;
            }, 0);
          }
        }, {
          key: "sort",
          value: function sort(data) {
            var _data$sorts$ = data.sorts[0],
                prop = _data$sorts$.prop,
                dir = _data$sorts$.dir;
            this.list.sortKey = prop;
            this.list.sortOrder = dir;
          }
        }]);

        return RolesComponent;
      }();

      RolesComponent.ɵfac = function RolesComponent_Factory(t) {
        return new (t || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]));
      };

      RolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: RolesComponent,
        selectors: [["abp-roles"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"], {
          provide: _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["EXTENSIONS_IDENTIFIER"],
          useValue: ɵ0$9
        }])],
        decls: 22,
        vars: 33,
        consts: [["id", "identity-roles-wrapper", 1, "card"], [1, "card-header"], [1, "row"], [1, "col", "col-md-6"], [1, "card-title"], [1, "text-right", "col", "col-md-6"], [3, "record"], [1, "card-body"], [3, "data", "recordsTotal", "list"], ["size", "md", 3, "visible", "busy", "visibleChange"], ["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], [3, "abpInit", 4, "abpReplaceableTemplate"], ["validateOnSubmit", "", 3, "formGroup", "ngSubmit"], [3, "selectedRecord"], ["type", "button", "abpClose", "", 1, "btn", "btn-secondary"], ["iconClass", "fa fa-check", 3, "disabled", "click"], [3, "abpInit"], ["abpPermissionManagement", "abpPermissionManagement"]],
        template: function RolesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "abpLocalization");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "abp-page-toolbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "abp-extensible-table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "abp-modal", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function RolesComponent_Template_abp_modal_visibleChange_14_listener($event) {
              return ctx.isModalVisible = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, RolesComponent_ng_template_15_Template, 3, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, RolesComponent_ng_template_17_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, RolesComponent_ng_template_19_Template, 6, 7, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, RolesComponent_abp_permission_management_21_Template, 2, 0, "abp-permission-management", 13);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 8, "AbpIdentity::Roles"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("record", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 10, ctx.data$));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 12, ctx.data$))("recordsTotal", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 14, ctx.totalCount$))("list", ctx.list);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.isModalVisible)("busy", ctx.modalBusy);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("abpReplaceableTemplate", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](29, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](22, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c1, ctx.providerKey), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c2, ctx.visiblePermissions), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](21, _c3)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c5, ctx.onVisiblePermissionChange), ctx.permissionManagementKey));
          }
        },
        directives: [_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["PageToolbarComponent"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["ExtensibleTableComponent"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableTemplateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["FormSubmitDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__["ValidationGroupDirective"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["ExtensibleFormComponent"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ModalCloseDirective"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_10__["PermissionManagementComponent"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["InitDirective"]],
        pipes: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]],
        encapsulation: 2
      });

      RolesComponent.ctorParameters = function () {
        return [{
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"]
        }, {
          type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(IdentityState.getRoles)], RolesComponent.prototype, "data$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(IdentityState.getRolesTotalCount)], RolesComponent.prototype, "totalCount$", void 0);
      var ɵ0$8 = "Identity.UsersComponent"
      /* Users */
      ;

      var UsersComponent = /*#__PURE__*/function () {
        function UsersComponent(list, confirmationService, userService, fb, store, injector) {
          var _this9 = this;

          _classCallCheck(this, UsersComponent);

          this.list = list;
          this.confirmationService = confirmationService;
          this.userService = userService;
          this.fb = fb;
          this.store = store;
          this.injector = injector;
          this.visiblePermissions = false;
          this.modalBusy = false;
          this.permissionManagementKey = "PermissionManagement.PermissionManagementComponent"
          /* PermissionManagement */
          ;

          this.trackByFn = function (index, item) {
            return Object.keys(item)[0] || index;
          };

          this.onVisiblePermissionChange = function (event) {
            _this9.visiblePermissions = event;
          };
        }

        _createClass(UsersComponent, [{
          key: "roleGroups",
          get: function get() {
            var _this10 = this;

            return Object(snq__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
              return _this10.form.get('roleNames').controls;
            }, []);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hookToQuery();
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            var _this11 = this;

            var data = new _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["FormPropData"](this.injector, this.selected);
            this.form = Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["generateFormFromProps"])(data);
            this.userService.getAssignableRoles().subscribe(function (_ref23) {
              var items = _ref23.items;
              _this11.roles = items;

              _this11.form.addControl('roleNames', _this11.fb.array(_this11.roles.map(function (role) {
                return _this11.fb.group(_defineProperty({}, role.name, [_this11.selected.id ? !!Object(snq__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
                  return _this11.selectedUserRoles.find(function (userRole) {
                    return userRole.id === role.id;
                  });
                }) : role.isDefault]));
              })));
            });
          }
        }, {
          key: "openModal",
          value: function openModal() {
            this.buildForm();
            this.isModalVisible = true;
          }
        }, {
          key: "add",
          value: function add() {
            this.selected = {};
            this.selectedUserRoles = [];
            this.openModal();
          }
        }, {
          key: "edit",
          value: function edit(id) {
            var _this12 = this;

            this.store.dispatch(new GetUserById(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
              return _this12.store.dispatch(new GetUserRoles(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('IdentityState'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (state) {
              _this12.selected = state.selectedUser;
              _this12.selectedUserRoles = state.selectedUserRoles || [];

              _this12.openModal();
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this13 = this;

            if (!this.form.valid || this.modalBusy) return;
            this.modalBusy = true;
            var roleNames = this.form.value.roleNames;
            var mappedRoleNames = Object(snq__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
              return roleNames.filter(function (role) {
                return !!role[Object.keys(role)[0]];
              }).map(function (role) {
                return Object.keys(role)[0];
              });
            }, []);
            this.store.dispatch(this.selected.id ? new UpdateUser(Object.assign(Object.assign(Object.assign({}, this.selected), this.form.value), {
              id: this.selected.id,
              roleNames: mappedRoleNames
            })) : new CreateUser(Object.assign(Object.assign({}, this.form.value), {
              roleNames: mappedRoleNames
            }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this13.modalBusy = false;
            })).subscribe(function () {
              _this13.isModalVisible = false;

              _this13.list.get();
            });
          }
        }, {
          key: "delete",
          value: function _delete(id, userName) {
            var _this14 = this;

            this.confirmationService.warn('AbpIdentity::UserDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
              messageLocalizationParams: [userName]
            }).subscribe(function (status) {
              if (status === _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["Confirmation"].Status.confirm) {
                _this14.store.dispatch(new DeleteUser(id)).subscribe(function () {
                  return _this14.list.get();
                });
              }
            });
          }
        }, {
          key: "sort",
          value: function sort(data) {
            var _data$sorts$2 = data.sorts[0],
                prop = _data$sorts$2.prop,
                dir = _data$sorts$2.dir;
            this.list.sortKey = prop;
            this.list.sortOrder = dir;
          }
        }, {
          key: "hookToQuery",
          value: function hookToQuery() {
            var _this15 = this;

            this.list.hookToQuery(function (query) {
              return _this15.store.dispatch(new GetUsers(query));
            }).subscribe();
          }
        }, {
          key: "openPermissionsModal",
          value: function openPermissionsModal(providerKey) {
            var _this16 = this;

            this.providerKey = providerKey;
            setTimeout(function () {
              _this16.visiblePermissions = true;
            }, 0);
          }
        }]);

        return UsersComponent;
      }();

      UsersComponent.ɵfac = function UsersComponent_Factory(t) {
        return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](IdentityUserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]));
      };

      UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: UsersComponent,
        selectors: [["abp-users"]],
        viewQuery: function UsersComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"], {
          provide: _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["EXTENSIONS_IDENTIFIER"],
          useValue: ɵ0$8
        }])],
        decls: 26,
        vars: 35,
        consts: [["id", "identity-roles-wrapper", 1, "card"], [1, "card-header"], [1, "row"], [1, "col", "col-md-6"], [1, "card-title"], [1, "text-right", "col", "col-md-6"], [3, "record"], [1, "card-body"], ["id", "data-tables-table-filter", 1, "data-tables-filter"], [1, "input-group"], ["type", "search", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], [3, "data", "recordsTotal", "list"], ["size", "md", 3, "visible", "busy", "visibleChange"], ["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], [3, "abpInit", 4, "abpReplaceableTemplate"], ["loaderRef", ""], [3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], [1, "text-center"], [1, "fa", "fa-pulse", "fa-spinner"], [3, "formGroup", "ngSubmit"], ["ngbNav", "", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", "fade-in-top", 3, "ngbNavOutlet"], [3, "selectedRecord"], ["class", "custom-checkbox custom-control mb-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "custom-checkbox", "custom-control", "mb-2"], ["type", "checkbox", 1, "custom-control-input", 3, "formControl"], [1, "custom-control-label"], ["type", "button", "abpClose", "", 1, "btn", "btn-secondary"], ["iconClass", "fa fa-check", 3, "disabled", "click"], [3, "abpInit"], ["abpPermissionManagement", "abpPermissionManagement"]],
        template: function UsersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "abpLocalization");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "abp-page-toolbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.list.filter = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "abpLocalization");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "abp-extensible-table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "abp-modal", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function UsersComponent_Template_abp_modal_visibleChange_18_listener($event) {
              return ctx.isModalVisible = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, UsersComponent_ng_template_19_Template, 3, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, UsersComponent_ng_template_21_Template, 3, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, UsersComponent_ng_template_23_Template, 6, 7, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, UsersComponent_abp_permission_management_25_Template, 2, 0, "abp-permission-management", 16);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 10, "AbpIdentity::Users"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("record", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 12, ctx.data$));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 14, "AbpUi::PagerSearch"))("ngModel", ctx.list.filter);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 16, ctx.data$))("recordsTotal", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 18, ctx.totalCount$))("list", ctx.list);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.isModalVisible)("busy", ctx.modalBusy);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("abpReplaceableTemplate", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](31, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](25, _c9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](20, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c1, ctx.providerKey), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c2, ctx.visiblePermissions)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](29, _c5, ctx.onVisiblePermissionChange), ctx.permissionManagementKey));
          }
        },
        directives: [_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["PageToolbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["ExtensibleTableComponent"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["FormSubmitDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__["ValidationGroupDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavOutlet"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["ExtensibleFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__["ValidationDirective"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ModalCloseDirective"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_10__["PermissionManagementComponent"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["InitDirective"]],
        pipes: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]],
        encapsulation: 2
      });

      UsersComponent.ctorParameters = function () {
        return [{
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"]
        }, {
          type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]
        }, {
          type: IdentityUserService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
        }];
      };

      UsersComponent.propDecorators = {
        modalContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['modalContent', {
            "static": false
          }]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(IdentityState.getUsers)], UsersComponent.prototype, "data$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(IdentityState.getUsersTotalCount)], UsersComponent.prototype, "totalCount$", void 0);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](IdentityRoleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](IdentityUserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](IdentityState, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [{
            type: IdentityUserService
          }, {
            type: IdentityRoleService
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](RolesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'abp-roles',
            template: "<div id=\"identity-roles-wrapper\" class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"row\">\n      <div class=\"col col-md-6\">\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Roles' | abpLocalization }}</h5>\n      </div>\n      <div class=\"text-right col col-md-6\">\n        <abp-page-toolbar [record]=\"data$ | async\"></abp-page-toolbar>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\">\n    <abp-extensible-table\n      [data]=\"data$ | async\"\n      [recordsTotal]=\"totalCount$ | async\"\n      [list]=\"list\"\n    ></abp-extensible-table>\n  </div>\n</div>\n\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\n  <ng-template #abpHeader>\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization }}</h3>\n  </ng-template>\n\n  <ng-template #abpBody>\n    <form [formGroup]=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\n      <abp-extensible-form [selectedRecord]=\"selected\"></abp-extensible-form>\n    </form>\n  </ng-template>\n\n  <ng-template #abpFooter>\n    <button type=\"button\" class=\"btn btn-secondary\" abpClose>\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\n    </button>\n    <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid\" (click)=\"save()\">{{\n      'AbpIdentity::Save' | abpLocalization\n    }}</abp-button>\n  </ng-template>\n</abp-modal>\n\n<abp-permission-management\n  #abpPermissionManagement=\"abpPermissionManagement\"\n  *abpReplaceableTemplate=\"\n    {\n      inputs: {\n        providerName: { value: 'R' },\n        providerKey: { value: providerKey },\n        visible: { value: visiblePermissions, twoWay: true },\n        hideBadges: { value: true }\n      },\n      outputs: { visibleChange: onVisiblePermissionChange },\n      componentKey: permissionManagementKey\n    };\n    let init = initTemplate\n  \"\n  (abpInit)=\"init(abpPermissionManagement)\"\n>\n</abp-permission-management>\n",
            providers: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"], {
              provide: _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["EXTENSIONS_IDENTIFIER"],
              useValue: ɵ0$9
            }]
          }]
        }], function () {
          return [{
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"]
          }, {
            type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]
          }, {
            type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](UsersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'abp-users',
            template: "<div id=\"identity-roles-wrapper\" class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"row\">\n      <div class=\"col col-md-6\">\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Users' | abpLocalization }}</h5>\n      </div>\n      <div class=\"text-right col col-md-6\">\n        <abp-page-toolbar [record]=\"data$ | async\"></abp-page-toolbar>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\n      <div class=\"input-group\">\n        <input\n          type=\"search\"\n          class=\"form-control\"\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\n          [(ngModel)]=\"list.filter\"\n        />\n      </div>\n    </div>\n\n    <abp-extensible-table\n      [data]=\"data$ | async\"\n      [recordsTotal]=\"totalCount$ | async\"\n      [list]=\"list\"\n    ></abp-extensible-table>\n  </div>\n</div>\n\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\n  <ng-template #abpHeader>\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\n  </ng-template>\n\n  <ng-template #abpBody>\n    <ng-template #loaderRef\n      ><div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div\n    ></ng-template>\n\n    <form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n      <ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\">\n        <li ngbNavItem>\n          <a ngbNavLink>{{ 'AbpIdentity::UserInformations' | abpLocalization }}</a>\n          <ng-template ngbNavContent>\n            <abp-extensible-form [selectedRecord]=\"selected\"></abp-extensible-form>\n          </ng-template>\n        </li>\n\n        <li ngbNavItem>\n          <a ngbNavLink>{{ 'AbpIdentity::Roles' | abpLocalization }}</a>\n          <ng-template ngbNavContent>\n            <div\n              *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\"\n              class=\"custom-checkbox custom-control mb-2\"\n            >\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                [attr.id]=\"'roles-' + i\"\n                [formControl]=\"roleGroup.controls[roles[i].name]\"\n              />\n              <label class=\"custom-control-label\" [attr.for]=\"'roles-' + i\">{{\n                roles[i].name\n              }}</label>\n            </div>\n          </ng-template>\n        </li>\n      </ul>\n\n      <div class=\"mt-2 fade-in-top\" [ngbNavOutlet]=\"nav\"></div>\n    </form>\n  </ng-template>\n\n  <ng-template #abpFooter>\n    <button type=\"button\" class=\"btn btn-secondary\" abpClose>\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\n    </button>\n    <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid\" (click)=\"save()\">{{\n      'AbpIdentity::Save' | abpLocalization\n    }}</abp-button>\n  </ng-template>\n</abp-modal>\n\n<abp-permission-management\n  #abpPermissionManagement=\"abpPermissionManagement\"\n  *abpReplaceableTemplate=\"\n    {\n      inputs: {\n        providerName: { value: 'U' },\n        providerKey: { value: providerKey },\n        visible: { value: visiblePermissions, twoWay: true }\n      },\n      outputs: { visibleChange: onVisiblePermissionChange },\n      componentKey: permissionManagementKey\n    };\n    let init = initTemplate\n  \"\n  (abpInit)=\"init(abpPermissionManagement)\"\n>\n</abp-permission-management>\n",
            providers: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"], {
              provide: _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["EXTENSIONS_IDENTIFIER"],
              useValue: ɵ0$8
            }]
          }]
        }], function () {
          return [{
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"]
          }, {
            type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]
          }, {
            type: IdentityUserService
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
          }, {
            type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
          }];
        }, {
          modalContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['modalContent', {
              "static": false
            }]
          }]
        });
      })();

      var ɵ0$7 = function ɵ0$7(data) {
        var component = data.getInjected(RolesComponent);
        component.edit(data.record.id);
      },
          ɵ1$4 = function ɵ1$4(data) {
        var component = data.getInjected(RolesComponent);
        component.openPermissionsModal(data.record.name);
      },
          ɵ2$2 = function ɵ2$2(data) {
        var component = data.getInjected(RolesComponent);
        component["delete"](data.record.id, data.record.name);
      },
          ɵ3$1 = function ɵ3$1(data) {
        return !data.record.isStatic;
      };

      var DEFAULT_ROLES_ENTITY_ACTIONS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["EntityAction"].createMany([{
        text: 'AbpIdentity::Edit',
        action: ɵ0$7,
        permission: 'AbpIdentity.Roles.Update'
      }, {
        text: 'AbpIdentity::Permissions',
        action: ɵ1$4,
        permission: 'AbpIdentity.Roles.ManagePermissions'
      }, {
        text: 'AbpIdentity::Delete',
        action: ɵ2$2,
        permission: 'AbpIdentity.Roles.Delete',
        visible: ɵ3$1
      }]);

      var ɵ0$6 = function ɵ0$6(data) {
        var l10n = data.getInjected(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["LocalizationService"]);
        var t = l10n.instant.bind(l10n);
        var _data$record = data.record,
            isDefault = _data$record.isDefault,
            isPublic = _data$record.isPublic,
            name = _data$record.name;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(name + (isDefault ? "<span class=\"badge badge-pill badge-success ml-1\">".concat(t('AbpIdentity::DisplayName:IsDefault'), "</span>") : '') + (isPublic ? "<span class=\"badge badge-pill badge-info ml-1\">".concat(t('AbpIdentity::DisplayName:IsPublic'), "</span>") : ''));
      };

      var DEFAULT_ROLES_ENTITY_PROPS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["EntityProp"].createMany([{
        type: "string"
        /* String */
        ,
        name: 'name',
        displayName: 'AbpIdentity::RoleName',
        sortable: true,
        valueResolver: ɵ0$6
      }]);

      var ɵ0$5 = function ɵ0$5(data) {
        return data.record && data.record.isStatic;
      },
          ɵ1$3 = function ɵ1$3() {
        return [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required];
      };

      var DEFAULT_ROLES_CREATE_FORM_PROPS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["FormProp"].createMany([{
        type: "string"
        /* String */
        ,
        name: 'name',
        displayName: 'AbpIdentity::RoleName',
        id: 'role-name',
        disabled: ɵ0$5,
        validators: ɵ1$3
      }, {
        type: "boolean"
        /* Boolean */
        ,
        name: 'isDefault',
        displayName: 'AbpIdentity::DisplayName:IsDefault',
        id: 'role-is-default',
        defaultValue: false
      }, {
        type: "boolean"
        /* Boolean */
        ,
        name: 'isPublic',
        displayName: 'AbpIdentity::DisplayName:IsPublic',
        id: 'role-is-public',
        defaultValue: false
      }]);

      var DEFAULT_ROLES_EDIT_FORM_PROPS = DEFAULT_ROLES_CREATE_FORM_PROPS;

      var ɵ0$4 = function ɵ0$4(data) {
        var component = data.getInjected(RolesComponent);
        component.add();
      };

      var DEFAULT_ROLES_TOOLBAR_ACTIONS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["ToolbarAction"].createMany([{
        text: 'AbpIdentity::NewRole',
        action: ɵ0$4,
        permission: 'AbpIdentity.Roles.Create',
        icon: 'fa fa-plus'
      }]);

      var ɵ0$3 = function ɵ0$3(data) {
        var component = data.getInjected(UsersComponent);
        component.edit(data.record.id);
      },
          ɵ1$2 = function ɵ1$2(data) {
        var component = data.getInjected(UsersComponent);
        component.openPermissionsModal(data.record.id);
      },
          ɵ2$1 = function ɵ2$1(data) {
        var component = data.getInjected(UsersComponent);
        component["delete"](data.record.id, data.record.name || data.record.userName);
      };

      var DEFAULT_USERS_ENTITY_ACTIONS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["EntityAction"].createMany([{
        text: 'AbpIdentity::Edit',
        action: ɵ0$3,
        permission: 'AbpIdentity.Users.Update'
      }, {
        text: 'AbpIdentity::Permissions',
        action: ɵ1$2,
        permission: 'AbpIdentity.Users.ManagePermissions'
      }, {
        text: 'AbpIdentity::Delete',
        action: ɵ2$1,
        permission: 'AbpIdentity.Users.Delete'
      }]);

      var DEFAULT_USERS_ENTITY_PROPS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["EntityProp"].createMany([{
        type: "string"
        /* String */
        ,
        name: 'userName',
        displayName: 'AbpIdentity::UserName',
        sortable: true,
        columnWidth: 250
      }, {
        type: "string"
        /* String */
        ,
        name: 'email',
        displayName: 'AbpIdentity::EmailAddress',
        sortable: true,
        columnWidth: 250
      }, {
        type: "string"
        /* String */
        ,
        name: 'phoneNumber',
        displayName: 'AbpIdentity::PhoneNumber',
        sortable: true,
        columnWidth: 250
      }]);

      var ɵ0$2 = function ɵ0$2() {
        return [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(256)];
      },
          ɵ1$1 = function ɵ1$1(data) {
        return [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required].concat(_toConsumableArray(Object(_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["getPasswordValidators"])({
          get: data.getInjected
        })));
      },
          ɵ2 = function ɵ2() {
        return [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(64)];
      },
          ɵ3 = function ɵ3() {
        return [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(64)];
      },
          ɵ4 = function ɵ4() {
        return [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(256), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email];
      },
          ɵ5 = function ɵ5() {
        return [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(16)];
      };

      var DEFAULT_USERS_CREATE_FORM_PROPS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["FormProp"].createMany([{
        type: "string"
        /* String */
        ,
        name: 'userName',
        displayName: 'AbpIdentity::UserName',
        id: 'user-name',
        validators: ɵ0$2
      }, {
        type: "password"
        /* Password */
        ,
        name: 'password',
        displayName: 'AbpIdentity::Password',
        id: 'password',
        autocomplete: 'new-password',
        validators: ɵ1$1
      }, {
        type: "string"
        /* String */
        ,
        name: 'name',
        displayName: 'AbpIdentity::DisplayName:Name',
        id: 'name',
        validators: ɵ2
      }, {
        type: "string"
        /* String */
        ,
        name: 'surname',
        displayName: 'AbpIdentity::DisplayName:Surname',
        id: 'surname',
        validators: ɵ3
      }, {
        type: "email"
        /* Email */
        ,
        name: 'email',
        displayName: 'AbpIdentity::EmailAddress',
        id: 'email',
        validators: ɵ4
      }, {
        type: "string"
        /* String */
        ,
        name: 'phoneNumber',
        displayName: 'AbpIdentity::PhoneNumber',
        id: 'phone-number',
        validators: ɵ5
      }, {
        type: "boolean"
        /* Boolean */
        ,
        name: 'lockoutEnabled',
        displayName: 'AbpIdentity::DisplayName:LockoutEnabled',
        id: 'lockout-checkbox',
        defaultValue: true
      }]);

      var ɵ6 = function ɵ6(prop) {
        return prop.name !== 'password';
      };

      var DEFAULT_USERS_EDIT_FORM_PROPS = DEFAULT_USERS_CREATE_FORM_PROPS.filter(ɵ6);

      var ɵ0$1 = function ɵ0$1(data) {
        var component = data.getInjected(UsersComponent);
        component.add();
      };

      var DEFAULT_USERS_TOOLBAR_ACTIONS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["ToolbarAction"].createMany([{
        text: 'AbpIdentity::NewUser',
        action: ɵ0$1,
        permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus'
      }]);

      var DEFAULT_IDENTITY_ENTITY_ACTIONS = (_DEFAULT_IDENTITY_ENT = {}, _defineProperty(_DEFAULT_IDENTITY_ENT, "Identity.RolesComponent"
      /* Roles */
      , DEFAULT_ROLES_ENTITY_ACTIONS), _defineProperty(_DEFAULT_IDENTITY_ENT, "Identity.UsersComponent"
      /* Users */
      , DEFAULT_USERS_ENTITY_ACTIONS), _DEFAULT_IDENTITY_ENT);
      var DEFAULT_IDENTITY_TOOLBAR_ACTIONS = (_DEFAULT_IDENTITY_TOO = {}, _defineProperty(_DEFAULT_IDENTITY_TOO, "Identity.RolesComponent"
      /* Roles */
      , DEFAULT_ROLES_TOOLBAR_ACTIONS), _defineProperty(_DEFAULT_IDENTITY_TOO, "Identity.UsersComponent"
      /* Users */
      , DEFAULT_USERS_TOOLBAR_ACTIONS), _DEFAULT_IDENTITY_TOO);
      var DEFAULT_IDENTITY_ENTITY_PROPS = (_DEFAULT_IDENTITY_ENT2 = {}, _defineProperty(_DEFAULT_IDENTITY_ENT2, "Identity.RolesComponent"
      /* Roles */
      , DEFAULT_ROLES_ENTITY_PROPS), _defineProperty(_DEFAULT_IDENTITY_ENT2, "Identity.UsersComponent"
      /* Users */
      , DEFAULT_USERS_ENTITY_PROPS), _DEFAULT_IDENTITY_ENT2);
      var DEFAULT_IDENTITY_CREATE_FORM_PROPS = (_DEFAULT_IDENTITY_CRE = {}, _defineProperty(_DEFAULT_IDENTITY_CRE, "Identity.RolesComponent"
      /* Roles */
      , DEFAULT_ROLES_CREATE_FORM_PROPS), _defineProperty(_DEFAULT_IDENTITY_CRE, "Identity.UsersComponent"
      /* Users */
      , DEFAULT_USERS_CREATE_FORM_PROPS), _DEFAULT_IDENTITY_CRE);
      var DEFAULT_IDENTITY_EDIT_FORM_PROPS = (_DEFAULT_IDENTITY_EDI = {}, _defineProperty(_DEFAULT_IDENTITY_EDI, "Identity.RolesComponent"
      /* Roles */
      , DEFAULT_ROLES_EDIT_FORM_PROPS), _defineProperty(_DEFAULT_IDENTITY_EDI, "Identity.UsersComponent"
      /* Users */
      , DEFAULT_USERS_EDIT_FORM_PROPS), _DEFAULT_IDENTITY_EDI);
      var IDENTITY_ENTITY_ACTION_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('IDENTITY_ENTITY_ACTION_CONTRIBUTORS');
      var IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS');
      var IDENTITY_ENTITY_PROP_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('IDENTITY_ENTITY_PROP_CONTRIBUTORS');
      var IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS');
      var IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS');

      var IdentityExtensionsGuard = /*#__PURE__*/function () {
        function IdentityExtensionsGuard(injector) {
          _classCallCheck(this, IdentityExtensionsGuard);

          this.injector = injector;
        }

        _createClass(IdentityExtensionsGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var extensions = this.injector.get(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["ExtensionsService"]);
            var actionContributors = this.injector.get(IDENTITY_ENTITY_ACTION_CONTRIBUTORS, null) || {};
            var toolbarContributors = this.injector.get(IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS, null) || {};
            var propContributors = this.injector.get(IDENTITY_ENTITY_PROP_CONTRIBUTORS, null) || {};
            var createFormContributors = this.injector.get(IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS, null) || {};
            var editFormContributors = this.injector.get(IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS, null) || {};
            var configState = this.injector.get(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigStateService"]);
            return Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["getObjectExtensionEntitiesFromStore"])(configState, 'Identity').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (entities) {
              var _ref24;

              return _ref24 = {}, _defineProperty(_ref24, "Identity.RolesComponent"
              /* Roles */
              , entities.Role), _defineProperty(_ref24, "Identity.UsersComponent"
              /* Users */
              , entities.User), _ref24;
            }), Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["mapEntitiesToContributors"])(configState, 'AbpIdentity'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (objectExtensionContributors) {
              Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["mergeWithDefaultActions"])(extensions.entityActions, DEFAULT_IDENTITY_ENTITY_ACTIONS, actionContributors);
              Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["mergeWithDefaultActions"])(extensions.toolbarActions, DEFAULT_IDENTITY_TOOLBAR_ACTIONS, toolbarContributors);
              Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["mergeWithDefaultProps"])(extensions.entityProps, DEFAULT_IDENTITY_ENTITY_PROPS, objectExtensionContributors.prop, propContributors);
              Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["mergeWithDefaultProps"])(extensions.createFormProps, DEFAULT_IDENTITY_CREATE_FORM_PROPS, objectExtensionContributors.createForm, createFormContributors);
              Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["mergeWithDefaultProps"])(extensions.editFormProps, DEFAULT_IDENTITY_EDIT_FORM_PROPS, objectExtensionContributors.editForm, editFormContributors);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mapTo"])(true));
          }
        }]);

        return IdentityExtensionsGuard;
      }();

      IdentityExtensionsGuard.ɵfac = function IdentityExtensionsGuard_Factory(t) {
        return new (t || IdentityExtensionsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]));
      };

      IdentityExtensionsGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: IdentityExtensionsGuard,
        factory: IdentityExtensionsGuard.ɵfac
      });

      IdentityExtensionsGuard.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](IdentityExtensionsGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
          }];
        }, null);
      })();

      var ɵ0 = {
        requiredPolicy: 'AbpIdentity.Roles',
        replaceableComponent: {
          key: "Identity.RolesComponent"
          /* Roles */
          ,
          defaultComponent: RolesComponent
        }
      },
          ɵ1 = {
        requiredPolicy: 'AbpIdentity.Users',
        replaceableComponent: {
          key: "Identity.UsersComponent"
          /* Users */
          ,
          defaultComponent: UsersComponent
        }
      };
      var routes = [{
        path: '',
        redirectTo: 'roles',
        pathMatch: 'full'
      }, {
        path: '',
        component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["DynamicLayoutComponent"],
        canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["PermissionGuard"], IdentityExtensionsGuard],
        children: [{
          path: 'roles',
          component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
          data: ɵ0
        }, {
          path: 'users',
          component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
          data: ɵ1
        }]
      }];

      var IdentityRoutingModule = function IdentityRoutingModule() {
        _classCallCheck(this, IdentityRoutingModule);
      };

      IdentityRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: IdentityRoutingModule
      });
      IdentityRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function IdentityRoutingModule_Factory(t) {
          return new (t || IdentityRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](IdentityRoutingModule, {
          imports: function imports() {
            return [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]];
          },
          exports: function exports() {
            return [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](IdentityRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]]
          }]
        }], null, null);
      })();

      var IdentityModule = /*#__PURE__*/function () {
        function IdentityModule() {
          _classCallCheck(this, IdentityModule);
        }

        _createClass(IdentityModule, null, [{
          key: "forChild",
          value: function forChild() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: IdentityModule,
              providers: [{
                provide: IDENTITY_ENTITY_ACTION_CONTRIBUTORS,
                useValue: options.entityActionContributors
              }, {
                provide: IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS,
                useValue: options.toolbarActionContributors
              }, {
                provide: IDENTITY_ENTITY_PROP_CONTRIBUTORS,
                useValue: options.entityPropContributors
              }, {
                provide: IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS,
                useValue: options.createFormPropContributors
              }, {
                provide: IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS,
                useValue: options.editFormPropContributors
              }, IdentityExtensionsGuard]
            };
          }
        }, {
          key: "forLazy",
          value: function forLazy() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["LazyModuleFactory"](IdentityModule.forChild(options));
          }
        }]);

        return IdentityModule;
      }();

      IdentityModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: IdentityModule
      });
      IdentityModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function IdentityModule_Factory(t) {
          return new (t || IdentityModule)();
        },
        imports: [[_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forFeature([IdentityState]), _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], IdentityRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["UiExtensionsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"], _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_10__["PermissionManagementModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__["NgxValidateCoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](IdentityModule, {
          declarations: function declarations() {
            return [RolesComponent, UsersComponent];
          },
          imports: function imports() {
            return [_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], IdentityRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["UiExtensionsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"], _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_10__["PermissionManagementModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__["NgxValidateCoreModule"]];
          },
          exports: function exports() {
            return [RolesComponent, UsersComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](IdentityModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            declarations: [RolesComponent, UsersComponent],
            exports: [RolesComponent, UsersComponent],
            imports: [_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forFeature([IdentityState]), _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], IdentityRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_3__["UiExtensionsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"], _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_10__["PermissionManagementModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__["NgxValidateCoreModule"]]
          }]
        }], null, null);
      })();

      var IdentityUserLookupService = function IdentityUserLookupService(restService) {
        var _this17 = this;

        _classCallCheck(this, IdentityUserLookupService);

        this.restService = restService;
        this.apiName = 'AbpIdentity';

        this.findById = function (id) {
          return _this17.restService.request({
            method: 'GET',
            url: "/api/identity/users/lookup/".concat(id)
          }, {
            apiName: _this17.apiName
          });
        };

        this.findByUserName = function (userName) {
          return _this17.restService.request({
            method: 'GET',
            url: "/api/identity/users/lookup/by-username/".concat(userName)
          }, {
            apiName: _this17.apiName
          });
        };

        this.getCount = function (input) {
          return _this17.restService.request({
            method: 'GET',
            url: '/api/identity/users/lookup/count',
            params: {
              filter: input.filter
            }
          }, {
            apiName: _this17.apiName
          });
        };

        this.search = function (input) {
          return _this17.restService.request({
            method: 'GET',
            url: '/api/identity/users/lookup/search',
            params: {
              filter: input.filter,
              sorting: input.sorting,
              skipCount: input.skipCount,
              maxResultCount: input.maxResultCount
            }
          }, {
            apiName: _this17.apiName
          });
        };
      };

      IdentityUserLookupService.ɵfac = function IdentityUserLookupService_Factory(t) {
        return new (t || IdentityUserLookupService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]));
      };

      IdentityUserLookupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        factory: function IdentityUserLookupService_Factory() {
          return new IdentityUserLookupService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]));
        },
        token: IdentityUserLookupService,
        providedIn: "root"
      });

      IdentityUserLookupService.ctorParameters = function () {
        return [{
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](IdentityUserLookupService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]
          }];
        }, null);
      })();

      var ProfileService = function ProfileService(restService) {
        var _this18 = this;

        _classCallCheck(this, ProfileService);

        this.restService = restService;
        this.apiName = 'AbpIdentity';

        this.changePassword = function (input) {
          return _this18.restService.request({
            method: 'POST',
            url: '/api/identity/my-profile/change-password',
            body: input
          }, {
            apiName: _this18.apiName
          });
        };

        this.get = function () {
          return _this18.restService.request({
            method: 'GET',
            url: '/api/identity/my-profile'
          }, {
            apiName: _this18.apiName
          });
        };

        this.update = function (input) {
          return _this18.restService.request({
            method: 'PUT',
            url: '/api/identity/my-profile',
            body: input
          }, {
            apiName: _this18.apiName
          });
        };
      };

      ProfileService.ɵfac = function ProfileService_Factory(t) {
        return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]));
      };

      ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        factory: function ProfileService_Factory() {
          return new ProfileService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]));
        },
        token: ProfileService,
        providedIn: "root"
      });

      ProfileService.ctorParameters = function () {
        return [{
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ProfileService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]
          }];
        }, null);
      })();

      var IdentityStateService = /*#__PURE__*/function () {
        function IdentityStateService(store) {
          _classCallCheck(this, IdentityStateService);

          this.store = store;
        }

        _createClass(IdentityStateService, [{
          key: "getRoles",
          value: function getRoles() {
            return this.store.selectSnapshot(IdentityState.getRoles);
          }
        }, {
          key: "getRolesTotalCount",
          value: function getRolesTotalCount() {
            return this.store.selectSnapshot(IdentityState.getRolesTotalCount);
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            return this.store.selectSnapshot(IdentityState.getUsers);
          }
        }, {
          key: "getUsersTotalCount",
          value: function getUsersTotalCount() {
            return this.store.selectSnapshot(IdentityState.getUsersTotalCount);
          }
        }, {
          key: "dispatchGetRoles",
          value: function dispatchGetRoles() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return this.store.dispatch(_construct(GetRoles, args));
          }
        }, {
          key: "dispatchGetRoleById",
          value: function dispatchGetRoleById() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return this.store.dispatch(_construct(GetRoleById, args));
          }
        }, {
          key: "dispatchDeleteRole",
          value: function dispatchDeleteRole() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            return this.store.dispatch(_construct(DeleteRole, args));
          }
        }, {
          key: "dispatchCreateRole",
          value: function dispatchCreateRole() {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            return this.store.dispatch(_construct(CreateRole, args));
          }
        }, {
          key: "dispatchUpdateRole",
          value: function dispatchUpdateRole() {
            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            return this.store.dispatch(_construct(UpdateRole, args));
          }
        }, {
          key: "dispatchGetUsers",
          value: function dispatchGetUsers() {
            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }

            return this.store.dispatch(_construct(GetUsers, args));
          }
        }, {
          key: "dispatchGetUserById",
          value: function dispatchGetUserById() {
            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = arguments[_key7];
            }

            return this.store.dispatch(_construct(GetUserById, args));
          }
        }, {
          key: "dispatchDeleteUser",
          value: function dispatchDeleteUser() {
            for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              args[_key8] = arguments[_key8];
            }

            return this.store.dispatch(_construct(DeleteUser, args));
          }
        }, {
          key: "dispatchCreateUser",
          value: function dispatchCreateUser() {
            for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              args[_key9] = arguments[_key9];
            }

            return this.store.dispatch(_construct(CreateUser, args));
          }
        }, {
          key: "dispatchUpdateUser",
          value: function dispatchUpdateUser() {
            for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              args[_key10] = arguments[_key10];
            }

            return this.store.dispatch(_construct(UpdateUser, args));
          }
        }, {
          key: "dispatchGetUserRoles",
          value: function dispatchGetUserRoles() {
            for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
              args[_key11] = arguments[_key11];
            }

            return this.store.dispatch(_construct(GetUserRoles, args));
          }
        }]);

        return IdentityStateService;
      }();

      IdentityStateService.ɵfac = function IdentityStateService_Factory(t) {
        return new (t || IdentityStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
      };

      IdentityStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        factory: function IdentityStateService_Factory() {
          return new IdentityStateService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
        },
        token: IdentityStateService,
        providedIn: "root"
      });

      IdentityStateService.ctorParameters = function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](IdentityStateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
          }];
        }, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=abp-ng.identity.js.map

      /***/

    },

    /***/
    "x4+Y":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@abp/ng.permission-management/__ivy_ngcc__/fesm2015/abp-ng.permission-management.js ***!
      \**********************************************************************************************************/

    /*! exports provided: GetPermissions, PermissionManagementComponent, PermissionManagementModule, PermissionManagementState, PermissionManagementStateService, PermissionsService, UpdatePermissions, ɵa, ɵb, ɵc, ɵd, ɵe */

    /***/
    function x4Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetPermissions", function () {
        return GetPermissions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function () {
        return PermissionManagementComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionManagementModule", function () {
        return PermissionManagementModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionManagementState", function () {
        return PermissionManagementState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionManagementStateService", function () {
        return PermissionManagementStateService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsService", function () {
        return PermissionsService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdatePermissions", function () {
        return UpdatePermissions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return PermissionManagementComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return PermissionManagementState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return PermissionsService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return GetPermissions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return UpdatePermissions;
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


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function PermissionManagementComponent_ng_container_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "AbpPermissionManagement::Permissions"), " - ", data_r1.entityName, " ");
        }
      }

      function PermissionManagementComponent_ng_container_1_ng_template_3_li_9_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionManagementComponent_ng_container_1_ng_template_3_li_9_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var group_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r14.onChangeGroup(group_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r13 = ctx.ngIf;

          var group_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", (ctx_r12.selectedGroup == null ? null : ctx_r12.selectedGroup.name) === (group_r11 == null ? null : group_r11.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("font-weight-bold", data_r13.assignedCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", group_r11 == null ? null : group_r11.displayName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", data_r13.assignedCount, ")");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          assignedCount: a0
        };
      };

      function PermissionManagementComponent_ng_container_1_ng_template_3_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PermissionManagementComponent_ng_container_1_ng_template_3_li_9_a_1_Template, 5, 6, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r11 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx_r9.getAssignedCount(group_r11.name)));
        }
      }

      function PermissionManagementComponent_ng_container_1_ng_template_3_div_22_ng_container_5_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var provider_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", provider_r23.providerName, ": ", provider_r23.providerKey, "");
        }
      }

      function PermissionManagementComponent_ng_container_1_ng_template_3_div_22_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PermissionManagementComponent_ng_container_1_ng_template_3_div_22_ng_container_5_span_1_Template, 2, 2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var permission_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", permission_r18.grantedProviders);
        }
      }

      function PermissionManagementComponent_ng_container_1_ng_template_3_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionManagementComponent_ng_container_1_ng_template_3_div_22_Template_label_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);

            var permission_r18 = ctx.$implicit;

            var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r25.onClickCheckbox(permission_r18, _r20.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PermissionManagementComponent_ng_container_1_ng_template_3_div_22_ng_container_5_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var permission_r18 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", permission_r18.style);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r10.getChecked(permission_r18.name))("value", ctx_r10.getChecked(permission_r18.name))("disabled", ctx_r10.isGrantedByOtherProviderName(permission_r18.grantedProviders));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", permission_r18.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", permission_r18.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", permission_r18.displayName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r10.hideBadges);
        }
      }

      function PermissionManagementComponent_ng_container_1_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PermissionManagementComponent_ng_container_1_ng_template_3_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r27.selectAllTab = $event;
          })("click", function PermissionManagementComponent_ng_container_1_ng_template_3_Template_input_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r29.onClickSelectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "hr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PermissionManagementComponent_ng_container_1_ng_template_3_li_9_Template, 2, 3, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "hr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PermissionManagementComponent_ng_container_1_ng_template_3_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r30.selectThisTab = $event;
          })("click", function PermissionManagementComponent_ng_container_1_ng_template_3_Template_input_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r31.onClickSelectThisTab();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "hr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, PermissionManagementComponent_ng_container_1_ng_template_3_div_22_Template, 6, 8, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.selectAllTab);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 9, "AbpPermissionManagement::SelectAllInAllTabs"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 11, ctx_r5.groups$))("ngForTrackBy", ctx_r5.trackByFn);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.selectedGroup == null ? null : ctx_r5.selectedGroup.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.selectThisTab);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 13, "AbpPermissionManagement::SelectAllInThisTab"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 15, ctx_r5.selectedGroupPermissions$))("ngForTrackBy", ctx_r5.trackByFn);
        }
      }

      function PermissionManagementComponent_ng_container_1_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "abp-button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionManagementComponent_ng_container_1_ng_template_5_Template_abp_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r32.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "AbpIdentity::Cancel"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, "AbpIdentity::Save"));
        }
      }

      function PermissionManagementComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PermissionManagementComponent_ng_container_1_ng_template_1_Template, 3, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PermissionManagementComponent_ng_container_1_ng_template_3_Template, 24, 17, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PermissionManagementComponent_ng_container_1_ng_template_5_Template, 6, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return {
          entityName: a0
        };
      };

      var GetPermissions = function GetPermissions(payload) {
        _classCallCheck(this, GetPermissions);

        this.payload = payload;
      };

      GetPermissions.type = '[PermissionManagement] Get Permissions';

      var UpdatePermissions = function UpdatePermissions(payload) {
        _classCallCheck(this, UpdatePermissions);

        this.payload = payload;
      };

      UpdatePermissions.type = '[PermissionManagement] Update Permissions';

      var PermissionsService = function PermissionsService(restService) {
        var _this19 = this;

        _classCallCheck(this, PermissionsService);

        this.restService = restService;
        this.apiName = 'AbpPermissionManagement';

        this.get = function (providerName, providerKey) {
          return _this19.restService.request({
            method: 'GET',
            url: '/api/permission-management/permissions',
            params: {
              providerName: providerName,
              providerKey: providerKey
            }
          }, {
            apiName: _this19.apiName
          });
        };

        this.update = function (providerName, providerKey, input) {
          return _this19.restService.request({
            method: 'PUT',
            url: '/api/permission-management/permissions',
            params: {
              providerName: providerName,
              providerKey: providerKey
            },
            body: input
          }, {
            apiName: _this19.apiName
          });
        };
      };

      PermissionsService.ɵfac = function PermissionsService_Factory(t) {
        return new (t || PermissionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]));
      };

      PermissionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        factory: function PermissionsService_Factory() {
          return new PermissionsService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]));
        },
        token: PermissionsService,
        providedIn: "root"
      });

      PermissionsService.ctorParameters = function () {
        return [{
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]
        }];
      };

      var PermissionManagementState = /*#__PURE__*/function () {
        function PermissionManagementState(service) {
          _classCallCheck(this, PermissionManagementState);

          this.service = service;
        }

        _createClass(PermissionManagementState, [{
          key: "permissionManagementGet",
          value: function permissionManagementGet(_ref25, _ref26) {
            var patchState = _ref25.patchState;
            var _ref26$payload = _ref26.payload;
            _ref26$payload = _ref26$payload === void 0 ? {} : _ref26$payload;
            var providerKey = _ref26$payload.providerKey,
                providerName = _ref26$payload.providerName;
            return this.service.get(providerName, providerKey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (permissionResponse) {
              return patchState({
                permissionRes: permissionResponse
              });
            }));
          }
        }, {
          key: "permissionManagementUpdate",
          value: function permissionManagementUpdate(_, _ref27) {
            var payload = _ref27.payload;
            return this.service.update(payload.providerName, payload.providerKey, {
              permissions: payload.permissions
            });
          }
        }], [{
          key: "getPermissionGroups",
          value: function getPermissionGroups(_ref28) {
            var permissionRes = _ref28.permissionRes;
            return permissionRes.groups || [];
          }
        }, {
          key: "getEntityDisplayName",
          value: function getEntityDisplayName(_ref29) {
            var permissionRes = _ref29.permissionRes;
            return permissionRes.entityDisplayName;
          }
        }]);

        return PermissionManagementState;
      }();

      PermissionManagementState.ɵfac = function PermissionManagementState_Factory(t) {
        return new (t || PermissionManagementState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](PermissionsService));
      };

      PermissionManagementState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: PermissionManagementState,
        factory: function factory(t) {
          return PermissionManagementState.ɵfac(t);
        }
      });

      PermissionManagementState.ctorParameters = function () {
        return [{
          type: PermissionsService
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(GetPermissions)], PermissionManagementState.prototype, "permissionManagementGet", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(UpdatePermissions)], PermissionManagementState.prototype, "permissionManagementUpdate", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])()], PermissionManagementState, "getPermissionGroups", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])()], PermissionManagementState, "getEntityDisplayName", null);
      PermissionManagementState = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
        name: 'PermissionManagementState',
        defaults: {
          permissionRes: {}
        }
      })], PermissionManagementState);

      var PermissionManagementComponent = /*#__PURE__*/function () {
        function PermissionManagementComponent(store, configState, appConfigService) {
          _classCallCheck(this, PermissionManagementComponent);

          this.store = store;
          this.configState = configState;
          this.appConfigService = appConfigService;
          this.hideBadges = false;
          this._visible = false;
          this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.permissions = [];
          this.selectThisTab = false;
          this.selectAllTab = false;
          this.modalBusy = false;

          this.trackByFn = function (_, item) {
            return item.name;
          };
        }

        _createClass(PermissionManagementComponent, [{
          key: "visible",
          get: function get() {
            return this._visible;
          },
          set: function set(value) {
            var _this20 = this;

            if (value === this._visible) return;

            if (value) {
              this.openModal().subscribe(function () {
                _this20._visible = true;

                _this20.visibleChange.emit(true);
              });
            } else {
              this.selectedGroup = null;
              this._visible = false;
              this.visibleChange.emit(false);
            }
          }
        }, {
          key: "selectedGroupPermissions$",
          get: function get() {
            var _this21 = this;

            var margin = "margin-".concat(document.body.dir === 'rtl' ? 'right' : 'left', ".px");
            return this.groups$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (groups) {
              return _this21.selectedGroup ? groups.find(function (group) {
                return group.name === _this21.selectedGroup.name;
              }).permissions : [];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (permissions) {
              return permissions.map(function (permission) {
                return Object.assign(Object.assign({}, permission), {
                  style: _defineProperty({}, margin, findMargin(permissions, permission)),
                  isGranted: _this21.permissions.find(function (per) {
                    return per.name === permission.name;
                  }).isGranted
                });
              });
            }));
          }
        }, {
          key: "getChecked",
          value: function getChecked(name) {
            return (this.permissions.find(function (per) {
              return per.name === name;
            }) || {
              isGranted: false
            }).isGranted;
          }
        }, {
          key: "isGrantedByOtherProviderName",
          value: function isGrantedByOtherProviderName(grantedProviders) {
            var _this22 = this;

            if (grantedProviders.length) {
              return grantedProviders.findIndex(function (p) {
                return p.providerName !== _this22.providerName;
              }) > -1;
            }

            return false;
          }
        }, {
          key: "onClickCheckbox",
          value: function onClickCheckbox(clickedPermission, value) {
            var _this23 = this;

            if (clickedPermission.isGranted && this.isGrantedByOtherProviderName(clickedPermission.grantedProviders)) return;
            setTimeout(function () {
              _this23.permissions = _this23.permissions.map(function (per) {
                if (clickedPermission.name === per.name) {
                  return Object.assign(Object.assign({}, per), {
                    isGranted: !per.isGranted
                  });
                } else if (clickedPermission.name === per.parentName && clickedPermission.isGranted) {
                  return Object.assign(Object.assign({}, per), {
                    isGranted: false
                  });
                } else if (clickedPermission.parentName === per.name && !clickedPermission.isGranted) {
                  return Object.assign(Object.assign({}, per), {
                    isGranted: true
                  });
                }

                return per;
              });

              _this23.setTabCheckboxState();

              _this23.setGrantCheckboxState();
            }, 0);
          }
        }, {
          key: "setTabCheckboxState",
          value: function setTabCheckboxState() {
            var _this24 = this;

            this.selectedGroupPermissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (permissions) {
              var selectedPermissions = permissions.filter(function (per) {
                return per.isGranted;
              });
              var element = document.querySelector('#select-all-in-this-tabs');

              if (selectedPermissions.length === permissions.length) {
                element.indeterminate = false;
                _this24.selectThisTab = true;
              } else if (selectedPermissions.length === 0) {
                element.indeterminate = false;
                _this24.selectThisTab = false;
              } else {
                element.indeterminate = true;
              }
            });
          }
        }, {
          key: "setGrantCheckboxState",
          value: function setGrantCheckboxState() {
            var selectedAllPermissions = this.permissions.filter(function (per) {
              return per.isGranted;
            });
            var checkboxElement = document.querySelector('#select-all-in-all-tabs');

            if (selectedAllPermissions.length === this.permissions.length) {
              checkboxElement.indeterminate = false;
              this.selectAllTab = true;
            } else if (selectedAllPermissions.length === 0) {
              checkboxElement.indeterminate = false;
              this.selectAllTab = false;
            } else {
              checkboxElement.indeterminate = true;
            }
          }
        }, {
          key: "onClickSelectThisTab",
          value: function onClickSelectThisTab() {
            var _this25 = this;

            this.selectedGroupPermissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (permissions) {
              permissions.forEach(function (permission) {
                if (permission.isGranted && _this25.isGrantedByOtherProviderName(permission.grantedProviders)) return;

                var index = _this25.permissions.findIndex(function (per) {
                  return per.name === permission.name;
                });

                _this25.permissions = [].concat(_toConsumableArray(_this25.permissions.slice(0, index)), [Object.assign(Object.assign({}, _this25.permissions[index]), {
                  isGranted: !_this25.selectThisTab
                })], _toConsumableArray(_this25.permissions.slice(index + 1)));
              });
            });
            this.setGrantCheckboxState();
          }
        }, {
          key: "onClickSelectAll",
          value: function onClickSelectAll() {
            var _this26 = this;

            this.permissions = this.permissions.map(function (permission) {
              return Object.assign(Object.assign({}, permission), {
                isGranted: _this26.isGrantedByOtherProviderName(permission.grantedProviders) || !_this26.selectAllTab
              });
            });
            this.selectThisTab = !this.selectAllTab;
          }
        }, {
          key: "onChangeGroup",
          value: function onChangeGroup(group) {
            this.selectedGroup = group;
            this.setTabCheckboxState();
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this27 = this;

            var unchangedPermissions = getPermissions(this.store.selectSnapshot(PermissionManagementState.getPermissionGroups));
            var changedPermissions = this.permissions.filter(function (per) {
              return unchangedPermissions.find(function (unchanged) {
                return unchanged.name === per.name;
              }).isGranted === per.isGranted ? false : true;
            }).map(function (_ref30) {
              var name = _ref30.name,
                  isGranted = _ref30.isGranted;
              return {
                name: name,
                isGranted: isGranted
              };
            });

            if (!changedPermissions.length) {
              this.visible = false;
              return;
            }

            this.modalBusy = true;
            this.store.dispatch(new UpdatePermissions({
              providerKey: this.providerKey,
              providerName: this.providerName,
              permissions: changedPermissions
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
              return _this27.shouldFetchAppConfig() ? _this27.appConfigService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (res) {
                return _this27.configState.setState(res);
              })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this27.modalBusy = false;
            })).subscribe(function () {
              _this27.visible = false;
            });
          }
        }, {
          key: "openModal",
          value: function openModal() {
            var _this28 = this;

            if (!this.providerKey || !this.providerName) {
              throw new Error('Provider Key and Provider Name are required.');
            }

            return this.store.dispatch(new GetPermissions({
              providerKey: this.providerKey,
              providerName: this.providerName
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('PermissionManagementState', 'permissionRes'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (permissionRes) {
              _this28.selectedGroup = permissionRes.groups[0];
              _this28.permissions = getPermissions(permissionRes.groups);
            }));
          }
        }, {
          key: "initModal",
          value: function initModal() {
            this.setTabCheckboxState();
            this.setGrantCheckboxState();
          }
        }, {
          key: "getAssignedCount",
          value: function getAssignedCount(groupName) {
            return this.permissions.reduce(function (acc, val) {
              return val.name.split('.')[0] === groupName && val.isGranted ? acc + 1 : acc;
            }, 0);
          }
        }, {
          key: "shouldFetchAppConfig",
          value: function shouldFetchAppConfig() {
            var _this29 = this;

            var currentUser = this.configState.getOne('currentUser');
            if (this.providerName === 'R') return currentUser.roles.some(function (role) {
              return role === _this29.providerKey;
            });
            if (this.providerName === 'U') return currentUser.id === this.providerKey;
            return false;
          }
        }]);

        return PermissionManagementComponent;
      }();

      PermissionManagementComponent.ɵfac = function PermissionManagementComponent_Factory(t) {
        return new (t || PermissionManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["AbpApplicationConfigurationService"]));
      };

      PermissionManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: PermissionManagementComponent,
        selectors: [["abp-permission-management"]],
        inputs: {
          hideBadges: "hideBadges",
          visible: "visible",
          providerName: "providerName",
          providerKey: "providerKey"
        },
        outputs: {
          visibleChange: "visibleChange"
        },
        exportAs: ["abpPermissionManagement"],
        decls: 3,
        vars: 7,
        consts: [[3, "visible", "busy", "visibleChange", "init"], [4, "ngIf"], ["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], [1, "custom-checkbox", "custom-control", "mb-2"], ["type", "checkbox", "id", "select-all-in-all-tabs", "name", "select-all-in-all-tabs", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "click"], ["for", "select-all-in-all-tabs", 1, "custom-control-label"], [1, "mt-2", "mb-2"], [1, "row"], [1, "overflow-scroll", "col-md-4"], [1, "nav", "nav-pills", "flex-column"], ["class", "nav-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-md-8", "overflow-scroll"], [1, "mt-2", "mb-3"], [1, "pl-1", "pt-1"], ["type", "checkbox", "id", "select-all-in-this-tabs", "name", "select-all-in-this-tabs", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "click"], ["for", "select-all-in-this-tabs", 1, "custom-control-label"], [1, "mb-3"], ["class", "custom-checkbox custom-control mb-2", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "nav-item"], ["class", "nav-link pointer", 3, "active", "click", 4, "ngIf"], [1, "nav-link", "pointer", 3, "click"], [1, "custom-checkbox", "custom-control", "mb-2", 3, "ngStyle"], ["type", "checkbox", 1, "custom-control-input", 3, "checked", "value", "disabled"], ["permissionCheckbox", ""], [1, "custom-control-label", 3, "click"], ["class", "badge badge-light", 4, "ngFor", "ngForOf"], [1, "badge", "badge-light"], ["type", "button", "abpClose", "", 1, "btn", "btn-secondary"], ["iconClass", "fa fa-check", 3, "click"]],
        template: function PermissionManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "abp-modal", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function PermissionManagementComponent_Template_abp_modal_visibleChange_0_listener($event) {
              return ctx.visible = $event;
            })("init", function PermissionManagementComponent_Template_abp_modal_init_0_listener() {
              return ctx.initModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PermissionManagementComponent_ng_container_1_Template, 7, 0, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visible)("busy", ctx.modalBusy);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, ctx.entityName$)));
          }
        },
        directives: [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ModalCloseDirective"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["LocalizationPipe"]],
        styles: [".overflow-scroll[_ngcontent-%COMP%] {\n        max-height: 70vh;\n        overflow-y: scroll;\n      }"]
      });

      PermissionManagementComponent.ctorParameters = function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigStateService"]
        }, {
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["AbpApplicationConfigurationService"]
        }];
      };

      PermissionManagementComponent.propDecorators = {
        providerName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        providerKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hideBadges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        visibleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(PermissionManagementState.getPermissionGroups)], PermissionManagementComponent.prototype, "groups$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(PermissionManagementState.getEntityDisplayName)], PermissionManagementComponent.prototype, "entityName$", void 0);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PermissionsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PermissionManagementState, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: PermissionsService
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PermissionManagementComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'abp-permission-management',
            template: "<abp-modal [(visible)]=\"visible\" (init)=\"initModal()\" [busy]=\"modalBusy\">\n  <ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\n    <ng-template #abpHeader>\n      <h4>\n        {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\n      </h4>\n    </ng-template>\n    <ng-template #abpBody>\n      <div class=\"custom-checkbox custom-control mb-2\">\n        <input\n          type=\"checkbox\"\n          id=\"select-all-in-all-tabs\"\n          name=\"select-all-in-all-tabs\"\n          class=\"custom-control-input\"\n          [(ngModel)]=\"selectAllTab\"\n          (click)=\"onClickSelectAll()\"\n        />\n        <label class=\"custom-control-label\" for=\"select-all-in-all-tabs\">{{\n          'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization\n        }}</label>\n      </div>\n\n      <hr class=\"mt-2 mb-2\" />\n      <div class=\"row\">\n        <div class=\"overflow-scroll col-md-4\">\n          <ul class=\"nav nav-pills flex-column\">\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" class=\"nav-item\">\n              <a\n                *ngIf=\"{ assignedCount: getAssignedCount(group.name) } as data\"\n                class=\"nav-link pointer\"\n                [class.active]=\"selectedGroup?.name === group?.name\"\n                (click)=\"onChangeGroup(group)\"\n              >\n                <div [class.font-weight-bold]=\"data.assignedCount\">\n                  {{ group?.displayName }}\n                  <span>({{ data.assignedCount }})</span>\n                </div>\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-8 overflow-scroll\">\n          <h4>{{ selectedGroup?.displayName }}</h4>\n          <hr class=\"mt-2 mb-3\" />\n          <div class=\"pl-1 pt-1\">\n            <div class=\"custom-checkbox custom-control mb-2\">\n              <input\n                type=\"checkbox\"\n                id=\"select-all-in-this-tabs\"\n                name=\"select-all-in-this-tabs\"\n                class=\"custom-control-input\"\n                [(ngModel)]=\"selectThisTab\"\n                (click)=\"onClickSelectThisTab()\"\n              />\n              <label class=\"custom-control-label\" for=\"select-all-in-this-tabs\">{{\n                'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization\n              }}</label>\n            </div>\n            <hr class=\"mb-3\" />\n            <div\n              *ngFor=\"\n                let permission of selectedGroupPermissions$ | async;\n                let i = index;\n                trackBy: trackByFn\n              \"\n              [ngStyle]=\"permission.style\"\n              class=\"custom-checkbox custom-control mb-2\"\n            >\n              <input\n                #permissionCheckbox\n                type=\"checkbox\"\n                [checked]=\"getChecked(permission.name)\"\n                [value]=\"getChecked(permission.name)\"\n                [attr.id]=\"permission.name\"\n                class=\"custom-control-input\"\n                [disabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\n              />\n              <label\n                class=\"custom-control-label\"\n                [attr.for]=\"permission.name\"\n                (click)=\"onClickCheckbox(permission, permissionCheckbox.value)\"\n                >{{ permission.displayName }}\n                <ng-container *ngIf=\"!hideBadges\">\n                  <span\n                    *ngFor=\"let provider of permission.grantedProviders\"\n                    class=\"badge badge-light\"\n                    >{{ provider.providerName }}: {{ provider.providerKey }}</span\n                  >\n                </ng-container>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #abpFooter>\n      <button type=\"button\" class=\"btn btn-secondary\" abpClose>\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\n      </button>\n      <abp-button iconClass=\"fa fa-check\" (click)=\"submit()\">{{\n        'AbpIdentity::Save' | abpLocalization\n      }}</abp-button>\n    </ng-template>\n  </ng-container>\n</abp-modal>\n",
            exportAs: 'abpPermissionManagement',
            styles: ["\n      .overflow-scroll {\n        max-height: 70vh;\n        overflow-y: scroll;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }, {
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigStateService"]
          }, {
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["AbpApplicationConfigurationService"]
          }];
        }, {
          hideBadges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          visibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          providerName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          providerKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      function findMargin(permissions, permission) {
        var parentPermission = permissions.find(function (per) {
          return per.name === permission.parentName;
        });

        if (parentPermission && parentPermission.parentName) {
          var margin = 20;
          return margin += findMargin(permissions, parentPermission);
        }

        return parentPermission ? 20 : 0;
      }

      function getPermissions(groups) {
        return groups.reduce(function (acc, val) {
          return [].concat(_toConsumableArray(acc), _toConsumableArray(val.permissions));
        }, []);
      }

      var PermissionManagementModule = function PermissionManagementModule() {
        _classCallCheck(this, PermissionManagementModule);
      };

      PermissionManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: PermissionManagementModule
      });
      PermissionManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function PermissionManagementModule_Factory(t) {
          return new (t || PermissionManagementModule)();
        },
        imports: [[_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forFeature([PermissionManagementState])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PermissionManagementModule, {
          declarations: function declarations() {
            return [PermissionManagementComponent];
          },
          imports: function imports() {
            return [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["ɵbc"]];
          },
          exports: function exports() {
            return [PermissionManagementComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PermissionManagementModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [PermissionManagementComponent],
            imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forFeature([PermissionManagementState])],
            exports: [PermissionManagementComponent]
          }]
        }], null, null);
      })();

      var PermissionManagementStateService = /*#__PURE__*/function () {
        function PermissionManagementStateService(store) {
          _classCallCheck(this, PermissionManagementStateService);

          this.store = store;
        }

        _createClass(PermissionManagementStateService, [{
          key: "getPermissionGroups",
          value: function getPermissionGroups() {
            return this.store.selectSnapshot(PermissionManagementState.getPermissionGroups);
          }
        }, {
          key: "getEntityDisplayName",
          value: function getEntityDisplayName() {
            return this.store.selectSnapshot(PermissionManagementState.getEntityDisplayName);
          }
        }, {
          key: "dispatchGetPermissions",
          value: function dispatchGetPermissions() {
            for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
              args[_key12] = arguments[_key12];
            }

            return this.store.dispatch(_construct(GetPermissions, args));
          }
        }, {
          key: "dispatchUpdatePermissions",
          value: function dispatchUpdatePermissions() {
            for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
              args[_key13] = arguments[_key13];
            }

            return this.store.dispatch(_construct(UpdatePermissions, args));
          }
        }]);

        return PermissionManagementStateService;
      }();

      PermissionManagementStateService.ɵfac = function PermissionManagementStateService_Factory(t) {
        return new (t || PermissionManagementStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
      };

      PermissionManagementStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        factory: function PermissionManagementStateService_Factory() {
          return new PermissionManagementStateService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
        },
        token: PermissionManagementStateService,
        providedIn: "root"
      });

      PermissionManagementStateService.ctorParameters = function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PermissionManagementStateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }];
        }, null);
      })();
      /*
       * Public API Surface of permission-management
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=abp-ng.permission-management.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=abp-ng-identity-es5.js.map