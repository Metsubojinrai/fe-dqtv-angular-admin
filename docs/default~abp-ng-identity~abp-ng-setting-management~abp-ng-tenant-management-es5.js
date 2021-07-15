(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~abp-ng-identity~abp-ng-setting-management~abp-ng-tenant-management"], {
    /***/
    "J7bl":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@abp/ng.theme.shared/__ivy_ngcc__/fesm2015/abp-ng.theme.shared-extensions.js ***!
      \***************************************************************************************************/

    /*! exports provided: ActionList, BaseUiExtensionsModule, CreateFormPropsFactory, DateAdapter, DateTimeAdapter, DateTimePickerComponent, DisabledDirective, EXTENSIONS_ACTION_CALLBACK, EXTENSIONS_ACTION_DATA, EXTENSIONS_ACTION_TYPE, EXTENSIONS_IDENTIFIER, EXTRA_PROPERTIES_KEY, EditFormPropsFactory, EntityAction, EntityActionList, EntityActions, EntityActionsFactory, EntityProp, EntityPropList, EntityProps, EntityPropsFactory, ExtensibleFormComponent, ExtensibleFormPropComponent, ExtensibleTableComponent, ExtensionsService, FormProp, FormPropData, FormPropList, FormProps, GridActionsComponent, ObjectExtensions, PageToolbarComponent, PropDataDirective, PropList, TimeAdapter, ToolbarAction, ToolbarActionList, ToolbarActions, ToolbarActionsFactory, ToolbarComponent, UiExtensionsModule, createExtraPropertyValueResolver, generateFormFromProps, getObjectExtensionEntitiesFromStore, mapEntitiesToContributors, mergeWithDefaultActions, mergeWithDefaultProps, ɵ0, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj */

    /***/
    function J7bl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionList", function () {
        return ActionList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseUiExtensionsModule", function () {
        return BaseUiExtensionsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateFormPropsFactory", function () {
        return CreateFormPropsFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
        return DateAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimeAdapter", function () {
        return DateTimeAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerComponent", function () {
        return DateTimePickerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisabledDirective", function () {
        return DisabledDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXTENSIONS_ACTION_CALLBACK", function () {
        return EXTENSIONS_ACTION_CALLBACK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXTENSIONS_ACTION_DATA", function () {
        return EXTENSIONS_ACTION_DATA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXTENSIONS_ACTION_TYPE", function () {
        return EXTENSIONS_ACTION_TYPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXTENSIONS_IDENTIFIER", function () {
        return EXTENSIONS_IDENTIFIER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXTRA_PROPERTIES_KEY", function () {
        return EXTRA_PROPERTIES_KEY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditFormPropsFactory", function () {
        return EditFormPropsFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityAction", function () {
        return EntityAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityActionList", function () {
        return EntityActionList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityActions", function () {
        return EntityActions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityActionsFactory", function () {
        return EntityActionsFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityProp", function () {
        return EntityProp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityPropList", function () {
        return EntityPropList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityProps", function () {
        return EntityProps;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityPropsFactory", function () {
        return EntityPropsFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtensibleFormComponent", function () {
        return ExtensibleFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtensibleFormPropComponent", function () {
        return ExtensibleFormPropComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtensibleTableComponent", function () {
        return ExtensibleTableComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtensionsService", function () {
        return ExtensionsService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormProp", function () {
        return FormProp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormPropData", function () {
        return FormPropData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormPropList", function () {
        return FormPropList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormProps", function () {
        return FormProps;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GridActionsComponent", function () {
        return GridActionsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjectExtensions", function () {
        return objectExtensions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageToolbarComponent", function () {
        return PageToolbarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropDataDirective", function () {
        return PropDataDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropList", function () {
        return PropList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeAdapter", function () {
        return TimeAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarAction", function () {
        return ToolbarAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarActionList", function () {
        return ToolbarActionList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarActions", function () {
        return ToolbarActions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarActionsFactory", function () {
        return ToolbarActionsFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
        return ToolbarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiExtensionsModule", function () {
        return UiExtensionsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createExtraPropertyValueResolver", function () {
        return createExtraPropertyValueResolver;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateFormFromProps", function () {
        return generateFormFromProps;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getObjectExtensionEntitiesFromStore", function () {
        return getObjectExtensionEntitiesFromStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mapEntitiesToContributors", function () {
        return mapEntitiesToContributors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeWithDefaultActions", function () {
        return mergeWithDefaultActions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeWithDefaultProps", function () {
        return mergeWithDefaultProps;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0$2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return ActionData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return Action;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return ActionsFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return Actions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return PropData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵf", function () {
        return Prop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵg", function () {
        return PropsFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵh", function () {
        return Props;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵi", function () {
        return selfFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵj", function () {
        return AbstractActionsComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @abp/ng.core */
      "HmNo");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var snq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! snq */
      "350m");
      /* harmony import */


      var _abp_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @abp/utils */
      "ZFcX");
      /* harmony import */


      var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @abp/ng.theme.shared */
      "1REP");
      /* harmony import */


      var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-validate/core */
      "iWZL");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");

      function ExtensibleFormPropComponent_div_0_ng_template_1_ng_template_0_Template(rf, ctx) {}

      function ExtensibleFormPropComponent_div_0_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 14);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r3.prop.id)("formControlName", ctx_r3.prop.name)("autocomplete", ctx_r3.prop.autocomplete)("type", ctx_r3.getType(ctx_r3.prop))("abpDisabled", ctx_r3.disabled)("readonly", ctx_r3.readonly);
        }
      }

      function ExtensibleFormPropComponent_div_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 15);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r4.prop.name);
        }
      }

      function ExtensibleFormPropComponent_div_0_ng_template_3_ng_template_2_Template(rf, ctx) {}

      var _c0 = function _c0() {
        return {
          $implicit: "custom-control-label"
        };
      };

      function ExtensibleFormPropComponent_div_0_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExtensibleFormPropComponent_div_0_ng_template_3_ng_template_2_Template, 0, 0, "ng-template", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r5.prop.id)("formControlName", ctx_r5.prop.name)("abpDisabled", ctx_r5.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        }
      }

      function ExtensibleFormPropComponent_div_0_ng_template_4_ng_template_0_Template(rf, ctx) {}

      function ExtensibleFormPropComponent_div_0_ng_template_4_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r17.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r17.key, " ");
        }
      }

      function ExtensibleFormPropComponent_div_0_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExtensibleFormPropComponent_div_0_ng_template_4_option_2_Template, 2, 2, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r6.prop.id)("formControlName", ctx_r6.prop.name)("abpDisabled", ctx_r6.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r6.options$))("ngForTrackBy", ctx_r6.track.by("value"));
        }
      }

      function ExtensibleFormPropComponent_div_0_ng_template_5_ng_template_0_Template(rf, ctx) {}

      function ExtensibleFormPropComponent_div_0_ng_template_5_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r20.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r20.key, " ");
        }
      }

      function ExtensibleFormPropComponent_div_0_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_5_ng_template_0_Template, 0, 0, "ng-template", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExtensibleFormPropComponent_div_0_ng_template_5_option_2_Template, 2, 2, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r7.prop.id)("formControlName", ctx_r7.prop.name)("abpDisabled", ctx_r7.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r7.options$))("ngForTrackBy", ctx_r7.track.by("value"));
        }
      }

      function ExtensibleFormPropComponent_div_0_ng_template_6_ng_template_0_Template(rf, ctx) {}

      var _c1 = function _c1() {
        return {
          standalone: true
        };
      };

      function ExtensibleFormPropComponent_div_0_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_6_ng_template_0_Template, 0, 0, "ng-template", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExtensibleFormPropComponent_div_0_ng_template_6_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.typeaheadModel = $event;
          })("selectItem", function ExtensibleFormPropComponent_div_0_ng_template_6_Template_input_selectItem_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r25.setTypeaheadValue($event.item);
          })("blur", function ExtensibleFormPropComponent_div_0_ng_template_6_Template_input_blur_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.setTypeaheadValue(ctx_r26.typeaheadModel);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r22.classList.contains("is-invalid"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r8.prop.id)("autocomplete", ctx_r8.prop.autocomplete)("abpDisabled", ctx_r8.disabled)("ngbTypeahead", ctx_r8.search)("editable", false)("inputFormatter", ctx_r8.typeaheadFormatter)("resultFormatter", ctx_r8.typeaheadFormatter)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1))("ngModel", ctx_r8.typeaheadModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r8.prop.name);
        }
      }

      function ExtensibleFormPropComponent_div_0_ng_template_7_ng_template_0_Template(rf, ctx) {}

      function ExtensibleFormPropComponent_div_0_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_7_ng_template_0_Template, 0, 0, "ng-template", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExtensibleFormPropComponent_div_0_ng_template_7_Template_input_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r28.open();
          })("keyup.space", function ExtensibleFormPropComponent_div_0_ng_template_7_Template_input_keyup_space_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r28.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r9.prop.id)("formControlName", ctx_r9.prop.name);
        }
      }

      function ExtensibleFormPropComponent_div_0_ng_template_8_ng_template_0_Template(rf, ctx) {}

      function ExtensibleFormPropComponent_div_0_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_8_ng_template_0_Template, 0, 0, "ng-template", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngb-timepicker", 28);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r10.prop.name);
        }
      }

      function ExtensibleFormPropComponent_div_0_ng_template_9_ng_template_0_Template(rf, ctx) {}

      function ExtensibleFormPropComponent_div_0_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_9_ng_template_0_Template, 0, 0, "ng-template", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "abp-date-time-picker", 29);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prop", ctx_r11.prop);
        }
      }

      function ExtensibleFormPropComponent_div_0_ng_template_10_ng_template_0_Template(rf, ctx) {}

      function ExtensibleFormPropComponent_div_0_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_10_ng_template_0_Template, 0, 0, "ng-template", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "textarea", 30);
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r12.prop.id)("formControlName", ctx_r12.prop.name)("abpDisabled", ctx_r12.disabled)("readonly", ctx_r12.readonly);
        }
      }

      function ExtensibleFormPropComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleFormPropComponent_div_0_ng_template_1_Template, 2, 7, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExtensibleFormPropComponent_div_0_ng_template_2_Template, 1, 1, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExtensibleFormPropComponent_div_0_ng_template_3_Template, 3, 6, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExtensibleFormPropComponent_div_0_ng_template_4_Template, 4, 8, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExtensibleFormPropComponent_div_0_ng_template_5_Template, 4, 8, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExtensibleFormPropComponent_div_0_ng_template_6_Template, 5, 14, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExtensibleFormPropComponent_div_0_ng_template_7_Template, 3, 3, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExtensibleFormPropComponent_div_0_ng_template_8_Template, 2, 2, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExtensibleFormPropComponent_div_0_ng_template_9_Template, 2, 2, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExtensibleFormPropComponent_div_0_ng_template_10_Template, 2, 5, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.getComponent(ctx_r0.prop));
        }
      }

      function ExtensibleFormPropComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var classes_r35 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("htmlFor", ctx_r2.prop.id)("ngClass", classes_r35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r2.prop.displayName), " ", ctx_r2.asterisk, "");
        }
      }

      function ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "abp-extensible-form-prop", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var prop_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", ctx_r6.extraPropertiesKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prop", prop_r4)("data", data_r2);
        }
      }

      function ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_2_abp_extensible_form_prop_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "abp-extensible-form-prop", 6);
        }

        if (rf & 2) {
          var prop_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          var data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prop", prop_r4)("data", data_r2);
        }
      }

      function ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_2_abp_extensible_form_prop_0_Template, 1, 2, "abp-extensible-form-prop", 7);
        }

        if (rf & 2) {
          var prop_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.form.get(prop_r4.name));
        }
      }

      function ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 3, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var prop_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.extraProperties.controls[prop_r4.name])("ngIfElse", _r7);
        }
      }

      function ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var prop_r4 = ctx.$implicit;

          var data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", prop_r4.visible(data_r2));
        }
      }

      function ExtensibleFormComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.propList)("ngForTrackBy", ctx_r1.track.by("name"));
        }
      }

      function ExtensibleFormComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleFormComponent_ng_container_0_ng_container_1_Template, 2, 2, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abpPropDataFromList", ctx_r0.propList)("abpPropDataWithRecord", ctx_r0.record);
        }
      }

      function ExtensibleTableComponent_ngx_datatable_column_1_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function ExtensibleTableComponent_ngx_datatable_column_1_ng_template_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "abp-grid-actions", 7);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var i_r4 = ctx_r8.rowIndex;
          var row_r3 = ctx_r8.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r4)("record", row_r3);
        }
      }

      var _c2 = function _c2(a0, a1) {
        return {
          $implicit: a0,
          index: a1
        };
      };

      function ExtensibleTableComponent_ngx_datatable_column_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleTableComponent_ngx_datatable_column_1_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleTableComponent_ngx_datatable_column_1_ng_template_2_ng_template_1_Template, 1, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var row_r3 = ctx.row;
          var i_r4 = ctx.rowIndex;

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.actionsTemplate || _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c2, row_r3, i_r4));
        }
      }

      function ExtensibleTableComponent_ngx_datatable_column_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable-column", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExtensibleTableComponent_ngx_datatable_column_1_ng_template_2_Template, 3, 5, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx_r0.actionsText))("maxWidth", ctx_r0.columnWidths[0])("width", ctx_r0.columnWidths[0])("sortable", false);
        }
      }

      function ExtensibleTableComponent_ng_container_2_ng_template_3_ng_container_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExtensibleTableComponent_ng_container_2_ng_template_3_ng_container_0_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var row_r12 = ctx_r19.row;
            var i_r13 = ctx_r19.index;

            var prop_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return prop_r9.action && prop_r9.action({
              getInjected: ctx_r16.getInjected,
              record: row_r12,
              index: i_r13
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).row;

          var prop_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pointer", prop_r9.action);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, row_r12["_" + prop_r9.name].value), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ExtensibleTableComponent_ng_container_2_ng_template_3_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleTableComponent_ng_container_2_ng_template_3_ng_container_0_div_1_Template, 2, 5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var row_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;

          var prop_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r12["_" + prop_r9.name].visible);
        }
      }

      function ExtensibleTableComponent_ng_container_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleTableComponent_ng_container_2_ng_template_3_ng_container_0_Template, 2, 1, "ng-container", 9);
        }

        if (rf & 2) {
          var prop_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abpPermission", prop_r9.permission);
        }
      }

      function ExtensibleTableComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-datatable-column", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExtensibleTableComponent_ng_container_2_ng_template_3_Template, 1, 1, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var prop_r9 = ctx.$implicit;
          var i_r10 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx_r1.columnWidths[i_r10 + 1] || 200)("name", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, prop_r9.displayName))("prop", prop_r9.name)("sortable", prop_r9.sortable);
        }
      }

      var _c3 = function _c3(a0) {
        return {
          $implicit: a0
        };
      };

      function GridActionsComponent_div_0_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
        }

        if (rf & 2) {
          var action_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, action_r5));
        }
      }

      function GridActionsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GridActionsComponent_div_0_ng_container_6_Template, 1, 4, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mr-1", ctx_r0.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx_r0.text), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.actionList)("ngForTrackBy", ctx_r0.trackByFn);
        }
      }

      function GridActionsComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r1.actionList.get(0).value));
        }
      }

      function GridActionsComponent_ng_template_2_ng_container_0_button_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, action_r6.text));
        }
      }

      function GridActionsComponent_ng_template_2_ng_container_0_button_1_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, action_r6.text));
        }
      }

      function GridActionsComponent_ng_template_2_ng_container_0_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridActionsComponent_ng_template_2_ng_container_0_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var action_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return action_r6.action(ctx_r14.data);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridActionsComponent_ng_template_2_ng_container_0_button_1_span_2_Template, 3, 3, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GridActionsComponent_ng_template_2_ng_container_0_button_1_ng_template_3_Template, 3, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var action_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r8.actionList.length === 1 ? "btn btn-primary" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-center", ctx_r8.actionList.length === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mr-1", action_r6.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", action_r6.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r6.icon)("ngIfElse", _r10);
        }
      }

      function GridActionsComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridActionsComponent_ng_template_2_ng_container_0_button_1_Template, 5, 10, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var action_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abpPermission", action_r6.permission);
        }
      }

      function GridActionsComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GridActionsComponent_ng_template_2_ng_container_0_Template, 2, 1, "ng-container", 9);
        }

        if (rf & 2) {
          var action_r6 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r6.visible(ctx_r3.data));
        }
      }

      function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var component_r7 = ctx.ngIf;

          var action_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", component_r7)("ngComponentOutletInjector", ctx_r4.createInjector(action_r1));
        }
      }

      function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var action_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return action_r1.action(ctx_r10.data);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mr-1", action_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", action_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, action_r1.text), " ");
        }
      }

      function PageToolbarComponent_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template, 4, 6, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var action_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r1.component)("ngIfElse", _r5);
        }
      }

      function PageToolbarComponent_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var action_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abpPermission", action_r1.permission);
        }
      }

      function PageToolbarComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageToolbarComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r1.visible(ctx_r0.data));
        }
      }

      var DateTimeAdapter = /*#__PURE__*/function () {
        function DateTimeAdapter() {
          _classCallCheck(this, DateTimeAdapter);
        }

        _createClass(DateTimeAdapter, [{
          key: "fromModel",
          value: function fromModel(value) {
            if (!value) return null;
            var date = new Date(value);
            if (isNaN(date)) return null;
            this.value = {
              year: date.getFullYear(),
              month: date.getMonth() + 1,
              day: date.getDate(),
              hour: date.getHours(),
              minute: date.getMinutes(),
              second: date.getSeconds()
            };
            return this.value;
          }
        }, {
          key: "toModel",
          value: function toModel(value) {
            if (!value) return '';
            var now = new Date();
            value = Object.assign(Object.assign({
              year: now.getUTCFullYear(),
              month: now.getMonth() + 1,
              day: now.getDate(),
              hour: 0,
              minute: 0,
              second: 0
            }, this.value), value);
            var date = new Date(value.year, value.month - 1, value.day, value.hour, value.minute, value.second);
            return new Date(date).toISOString();
          }
        }]);

        return DateTimeAdapter;
      }();

      DateTimeAdapter.ɵfac = function DateTimeAdapter_Factory(t) {
        return new (t || DateTimeAdapter)();
      };

      DateTimeAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DateTimeAdapter,
        factory: DateTimeAdapter.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateTimeAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var DateAdapter = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
        _inherits(DateAdapter, _ng_bootstrap_ng_boot);

        var _super = _createSuper(DateAdapter);

        function DateAdapter() {
          _classCallCheck(this, DateAdapter);

          return _super.apply(this, arguments);
        }

        _createClass(DateAdapter, [{
          key: "fromModel",
          value: function fromModel(value) {
            if (!value) return null;
            var date = new Date(value);
            if (isNaN(date)) return null;
            return {
              day: date.getDate(),
              month: date.getMonth() + 1,
              year: date.getFullYear()
            };
          }
        }, {
          key: "toModel",
          value: function toModel(value) {
            if (!value) return '';
            var date = new Date(value.year, value.month - 1, value.day);
            var formattedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'yyyy-MM-dd', 'en');
            return formattedDate;
          }
        }]);

        return DateAdapter;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"]);

      DateAdapter.ɵfac = function DateAdapter_Factory(t) {
        return ɵDateAdapter_BaseFactory(t || DateAdapter);
      };

      DateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DateAdapter,
        factory: DateAdapter.ɵfac
      });

      var ɵDateAdapter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DateAdapter);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var TimeAdapter = /*#__PURE__*/function (_ng_bootstrap_ng_boot2) {
        _inherits(TimeAdapter, _ng_bootstrap_ng_boot2);

        var _super2 = _createSuper(TimeAdapter);

        function TimeAdapter() {
          _classCallCheck(this, TimeAdapter);

          return _super2.apply(this, arguments);
        }

        _createClass(TimeAdapter, [{
          key: "fromModel",
          value: function fromModel(value) {
            if (!value) return null;
            var date = isTimeStr(value) ? _construct(Date, [0, 0, 1].concat(_toConsumableArray(value.split(':').map(Number)))) : new Date(value);
            if (isNaN(date)) return null;
            return {
              hour: date.getHours(),
              minute: date.getMinutes(),
              second: date.getSeconds()
            };
          }
        }, {
          key: "toModel",
          value: function toModel(value) {
            if (!value) return '';
            var date = new Date(0, 0, 1, value.hour, value.minute, value.second);
            var formattedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'HH:mm', 'en');
            return formattedDate;
          }
        }]);

        return TimeAdapter;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimeAdapter"]);

      TimeAdapter.ɵfac = function TimeAdapter_Factory(t) {
        return ɵTimeAdapter_BaseFactory(t || TimeAdapter);
      };

      TimeAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TimeAdapter,
        factory: TimeAdapter.ɵfac
      });

      var ɵTimeAdapter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TimeAdapter);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      function isTimeStr(value) {
        return /^((2[123])|[01][0-9])(\:[0-5][0-9]){1,2}$/.test(String(value));
      }

      function selfFactory(dependency) {
        return dependency;
      }

      var ɵ0$2 = selfFactory;

      var DateTimePickerComponent = /*#__PURE__*/function () {
        function DateTimePickerComponent(cdRef) {
          _classCallCheck(this, DateTimePickerComponent);

          this.cdRef = cdRef;
        }

        _createClass(DateTimePickerComponent, [{
          key: "setDate",
          value: function setDate(datestr) {
            this.date.writeValue(datestr);
          }
        }, {
          key: "setTime",
          value: function setTime(datestr) {
            this.time.writeValue(datestr);
          }
        }]);

        return DateTimePickerComponent;
      }();

      DateTimePickerComponent.ɵfac = function DateTimePickerComponent_Factory(t) {
        return new (t || DateTimePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      DateTimePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DateTimePickerComponent,
        selectors: [["abp-date-time-picker"]],
        viewQuery: function DateTimePickerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.date = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.time = _t.first);
          }
        },
        inputs: {
          prop: "prop"
        },
        exportAs: ["abpDateTimePicker"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([], [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
          useFactory: ɵ0$2,
          deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"],
          useClass: DateTimeAdapter
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimeAdapter"],
          useClass: DateTimeAdapter
        }])],
        decls: 4,
        vars: 3,
        consts: [["ngbDatepicker", "", "type", "text", 1, "form-control", 3, "id", "formControlName", "ngModelChange", "click", "keyup.space"], ["datepicker", "ngbDatepicker"], [3, "formControlName", "ngModelChange"], ["timepicker", ""]],
        template: function DateTimePickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateTimePickerComponent_Template_input_ngModelChange_0_listener($event) {
              return ctx.setTime($event);
            })("click", function DateTimePickerComponent_Template_input_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

              return _r0.open();
            })("keyup.space", function DateTimePickerComponent_Template_input_keyup_space_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

              return _r0.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-timepicker", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateTimePickerComponent_Template_ngb_timepicker_ngModelChange_2_listener($event) {
              return ctx.setDate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.prop.id)("formControlName", ctx.prop.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.prop.name);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["ValidationDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"]],
        encapsulation: 2,
        changeDetection: 0
      });

      DateTimePickerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      DateTimePickerComponent.propDecorators = {
        prop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"]]
        }],
        time: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"]]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateTimePickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            exportAs: 'abpDateTimePicker',
            selector: 'abp-date-time-picker',
            template: "\n    <input\n      [id]=\"prop.id\"\n      [formControlName]=\"prop.name\"\n      (ngModelChange)=\"setTime($event)\"\n      (click)=\"datepicker.open()\"\n      (keyup.space)=\"datepicker.open()\"\n      ngbDatepicker\n      #datepicker=\"ngbDatepicker\"\n      type=\"text\"\n      class=\"form-control\"\n    />\n    <ngb-timepicker\n      #timepicker\n      [formControlName]=\"prop.name\"\n      (ngModelChange)=\"setDate($event)\"\n    ></ngb-timepicker>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            viewProviders: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
              useFactory: ɵ0$2,
              deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"],
              useClass: DateTimeAdapter
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimeAdapter"],
              useClass: DateTimeAdapter
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          prop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"]]
          }],
          time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"]]
          }]
        });
      })();

      var EXTRA_PROPERTIES_KEY = 'extraProperties';
      var TYPEAHEAD_TEXT_SUFFIX = '_Text';
      var TYPEAHEAD_TEXT_SUFFIX_REGEX = /_Text$/;

      function createTypeaheadOptions(lookup) {
        return function (data, searchText) {
          return searchText ? data.getInjected(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["RestService"]).request({
            method: 'GET',
            url: lookup.url,
            params: _defineProperty({}, lookup.filterParamName, searchText)
          }, {
            apiName: 'Default'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
            var list = response[lookup.resultListPropertyName];

            var mapToOption = function mapToOption(item) {
              return {
                key: item[lookup.displayPropertyName],
                value: item[lookup.valuePropertyName]
              };
            };

            return list.map(mapToOption);
          })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        };
      }

      function getTypeaheadType(lookup, name) {
        return Boolean(lookup.url) ? "typeahead"
        /* Typeahead */
        : name.endsWith(TYPEAHEAD_TEXT_SUFFIX) ? "hidden"
        /* Hidden */
        : undefined;
      }

      function createTypeaheadDisplayNameGenerator(displayNameGeneratorFn, properties) {
        return function (displayName, fallback) {
          var name = removeTypeaheadTextSuffix(fallback.name);
          return displayNameGeneratorFn(displayName || properties[name].displayName, {
            name: name,
            resource: fallback.resource
          });
        };
      }

      function addTypeaheadTextSuffix(name) {
        return name + TYPEAHEAD_TEXT_SUFFIX;
      }

      function hasTypeaheadTextSuffix(name) {
        return TYPEAHEAD_TEXT_SUFFIX_REGEX.test(name);
      }

      function removeTypeaheadTextSuffix(name) {
        return name.replace(TYPEAHEAD_TEXT_SUFFIX_REGEX, '');
      }

      var ɵ0$1 = selfFactory;

      var ExtensibleFormPropComponent = /*#__PURE__*/function () {
        function ExtensibleFormPropComponent(cdRef, track, groupDirective) {
          var _this = this;

          _classCallCheck(this, ExtensibleFormPropComponent);

          this.cdRef = cdRef;
          this.track = track;
          this.asterisk = '';
          this.options$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
          this.validators = [];

          this.search = function (text$) {
            return text$ ? text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (text) {
              return _this.prop.options(_this.data, text);
            })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
          };

          this.typeaheadFormatter = function (option) {
            return option.key;
          };

          this.form = groupDirective.form;
        }

        _createClass(ExtensibleFormPropComponent, [{
          key: "setTypeaheadValue",
          value: function setTypeaheadValue(selectedOption) {
            this.typeaheadModel = selectedOption || {
              key: null,
              value: null
            };
            var _this$typeaheadModel = this.typeaheadModel,
                key = _this$typeaheadModel.key,
                value = _this$typeaheadModel.value;

            var _this$getTypeaheadCon = this.getTypeaheadControls(),
                _this$getTypeaheadCon2 = _slicedToArray(_this$getTypeaheadCon, 2),
                keyControl = _this$getTypeaheadCon2[0],
                valueControl = _this$getTypeaheadCon2[1];

            if (valueControl.value && !value) valueControl.markAsDirty();
            keyControl.setValue(key);
            valueControl.setValue(value);
          }
        }, {
          key: "isInvalid",
          get: function get() {
            var control = this.form.get(this.prop.name);
            return control.touched && control.invalid;
          }
        }, {
          key: "getTypeaheadControls",
          value: function getTypeaheadControls() {
            var name = this.prop.name;
            var extraPropName = "".concat(EXTRA_PROPERTIES_KEY, ".").concat(name);
            var keyControl = this.form.get(addTypeaheadTextSuffix(extraPropName)) || this.form.get(addTypeaheadTextSuffix(name));
            var valueControl = this.form.get(extraPropName) || this.form.get(name);
            return [keyControl, valueControl];
          }
        }, {
          key: "setAsterisk",
          value: function setAsterisk() {
            this.asterisk = this.validators.some(isRequired) ? '*' : '';
          }
        }, {
          key: "getComponent",
          value: function getComponent(prop) {
            switch (prop.type) {
              case "boolean"
              /* Boolean */
              :
                return 'checkbox';

              case "date"
              /* Date */
              :
                return 'date';

              case "dateTime"
              /* DateTime */
              :
                return 'dateTime';

              case "hidden"
              /* Hidden */
              :
                return 'hidden';

              case "multiselect"
              /* MultiSelect */
              :
                return 'multiselect';

              case "text"
              /* Text */
              :
                return 'textarea';

              case "time"
              /* Time */
              :
                return 'time';

              case "typeahead"
              /* Typeahead */
              :
                return 'typeahead';

              default:
                return prop.options ? 'select' : 'input';
            }
          }
        }, {
          key: "getType",
          value: function getType(prop) {
            switch (prop.type) {
              case "date"
              /* Date */
              :
              case "string"
              /* String */
              :
                return 'text';

              case "boolean"
              /* Boolean */
              :
                return 'checkbox';

              case "number"
              /* Number */
              :
                return 'number';

              case "email"
              /* Email */
              :
                return 'email';

              case "password"
              /* Password */
              :
                return 'password';

              default:
                return 'hidden';
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(_ref) {
            var prop = _ref.prop;
            var currentProp = Object(snq__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
              return prop.currentValue;
            });

            var _ref2 = currentProp || {},
                options = _ref2.options,
                readonly = _ref2.readonly,
                disabled = _ref2.disabled,
                validators = _ref2.validators;

            if (options) this.options$ = options(this.data);
            if (readonly) this.readonly = readonly(this.data);
            if (disabled) this.disabled = disabled(this.data);

            if (validators) {
              this.validators = validators(this.data);
              this.setAsterisk();
            }

            var _this$getTypeaheadCon3 = this.getTypeaheadControls(),
                _this$getTypeaheadCon4 = _slicedToArray(_this$getTypeaheadCon3, 2),
                keyControl = _this$getTypeaheadCon4[0],
                valueControl = _this$getTypeaheadCon4[1];

            if (keyControl && valueControl) this.typeaheadModel = {
              key: keyControl.value,
              value: valueControl.value
            };
          }
        }]);

        return ExtensibleFormPropComponent;
      }();

      ExtensibleFormPropComponent.ɵfac = function ExtensibleFormPropComponent_Factory(t) {
        return new (t || ExtensibleFormPropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["TrackByService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]));
      };

      ExtensibleFormPropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExtensibleFormPropComponent,
        selectors: [["abp-extensible-form-prop"]],
        inputs: {
          data: "data",
          prop: "prop"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([], [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
          useFactory: ɵ0$1,
          deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"],
          useClass: DateAdapter
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimeAdapter"],
          useClass: TimeAdapter
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 3,
        vars: 1,
        consts: [["class", "form-group", 3, "ngSwitch", 4, "abpPermission"], ["label", ""], [1, "form-group", 3, "ngSwitch"], ["ngSwitchCase", "input"], ["ngSwitchCase", "hidden"], ["ngSwitchCase", "checkbox"], ["ngSwitchCase", "select"], ["ngSwitchCase", "multiselect"], ["ngSwitchCase", "typeahead"], ["ngSwitchCase", "date"], ["ngSwitchCase", "time"], ["ngSwitchCase", "dateTime"], ["ngSwitchCase", "textarea"], [3, "ngTemplateOutlet"], [1, "form-control", 3, "id", "formControlName", "autocomplete", "type", "abpDisabled", "readonly"], ["type", "hidden", 3, "formControlName"], ["validationTarget", "", 1, "custom-checkbox", "custom-control"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "formControlName", "abpDisabled"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "custom-select", "form-control", 3, "id", "formControlName", "abpDisabled"], [3, "ngValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngValue"], ["multiple", "multiple", 1, "custom-select", "form-control", 3, "id", "formControlName", "abpDisabled"], ["validationStyle", "", "validationTarget", "", 1, "position-relative"], ["typeahead", ""], [1, "form-control", 3, "id", "autocomplete", "abpDisabled", "ngbTypeahead", "editable", "inputFormatter", "resultFormatter", "ngModelOptions", "ngModel", "ngModelChange", "selectItem", "blur"], ["ngbDatepicker", "", "type", "text", 1, "form-control", 3, "id", "formControlName", "click", "keyup.space"], ["datepicker", "ngbDatepicker"], [3, "formControlName"], [3, "prop"], [1, "form-control", 3, "id", "formControlName", "abpDisabled", "readonly"], [3, "htmlFor", "ngClass"]],
        template: function ExtensibleFormPropComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_Template, 11, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleFormPropComponent_ng_template_1_Template, 3, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abpPermission", ctx.prop.permission);
          }
        },
        directives: function directives() {
          return [_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["PermissionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["ValidationDirective"], DisabledDirective, _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["ValidationTargetDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectMultipleControlValueAccessor"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["ValidationStyleDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"], DateTimePickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["LocalizationPipe"]];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      ExtensibleFormPropComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["TrackByService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]
        }];
      };

      ExtensibleFormPropComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        prop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtensibleFormPropComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'abp-extensible-form-prop',
            template: "<div class=\"form-group\" *abpPermission=\"prop.permission\" [ngSwitch]=\"getComponent(prop)\">\n  <ng-template ngSwitchCase=\"input\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <input\n      [id]=\"prop.id\"\n      [formControlName]=\"prop.name\"\n      [autocomplete]=\"prop.autocomplete\"\n      [type]=\"getType(prop)\"\n      [abpDisabled]=\"disabled\"\n      [readonly]=\"readonly\"\n      class=\"form-control\"\n    />\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"hidden\">\n    <input [formControlName]=\"prop.name\" type=\"hidden\" />\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"checkbox\">\n    <div class=\"custom-checkbox custom-control\" validationTarget>\n      <input\n        [id]=\"prop.id\"\n        [formControlName]=\"prop.name\"\n        [abpDisabled]=\"disabled\"\n        type=\"checkbox\"\n        class=\"custom-control-input\"\n      />\n      <ng-template\n        [ngTemplateOutlet]=\"label\"\n        [ngTemplateOutletContext]=\"{ $implicit: 'custom-control-label' }\"\n      ></ng-template>\n    </div>\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"select\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <select\n      [id]=\"prop.id\"\n      [formControlName]=\"prop.name\"\n      [abpDisabled]=\"disabled\"\n      class=\"custom-select form-control\"\n    >\n      <option\n        *ngFor=\"let option of options$ | async; trackBy: track.by('value')\"\n        [ngValue]=\"option.value\"\n      >\n        {{ option.key }}\n      </option>\n    </select>\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"multiselect\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <select\n      [id]=\"prop.id\"\n      [formControlName]=\"prop.name\"\n      [abpDisabled]=\"disabled\"\n      multiple=\"multiple\"\n      class=\"custom-select form-control\"\n    >\n      <option\n        *ngFor=\"let option of options$ | async; trackBy: track.by('value')\"\n        [ngValue]=\"option.value\"\n      >\n        {{ option.key }}\n      </option>\n    </select>\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"typeahead\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <div #typeahead class=\"position-relative\" validationStyle validationTarget>\n      <input\n        [id]=\"prop.id\"\n        [autocomplete]=\"prop.autocomplete\"\n        [abpDisabled]=\"disabled\"\n        [ngbTypeahead]=\"search\"\n        [editable]=\"false\"\n        [inputFormatter]=\"typeaheadFormatter\"\n        [resultFormatter]=\"typeaheadFormatter\"\n        [ngModelOptions]=\"{ standalone: true }\"\n        [(ngModel)]=\"typeaheadModel\"\n        (selectItem)=\"setTypeaheadValue($event.item)\"\n        (blur)=\"setTypeaheadValue(typeaheadModel)\"\n        [class.is-invalid]=\"typeahead.classList.contains('is-invalid')\"\n        class=\"form-control\"\n      />\n      <input [formControlName]=\"prop.name\" type=\"hidden\" />\n    </div>\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"date\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <input\n      [id]=\"prop.id\"\n      [formControlName]=\"prop.name\"\n      (click)=\"datepicker.open()\"\n      (keyup.space)=\"datepicker.open()\"\n      ngbDatepicker\n      #datepicker=\"ngbDatepicker\"\n      type=\"text\"\n      class=\"form-control\"\n    />\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"time\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <ngb-timepicker [formControlName]=\"prop.name\"></ngb-timepicker>\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"dateTime\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <abp-date-time-picker [prop]=\"prop\"></abp-date-time-picker>\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"textarea\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <textarea\n      [id]=\"prop.id\"\n      [formControlName]=\"prop.name\"\n      [abpDisabled]=\"disabled\"\n      [readonly]=\"readonly\"\n      class=\"form-control\"\n    ></textarea>\n  </ng-template>\n</div>\n\n<ng-template #label let-classes>\n  <label [htmlFor]=\"prop.id\" [ngClass]=\"classes\"\n    >{{ prop.displayName | abpLocalization }} {{ asterisk }}</label\n  >\n</ng-template>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            viewProviders: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
              useFactory: ɵ0$1,
              deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"],
              useClass: DateAdapter
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimeAdapter"],
              useClass: TimeAdapter
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["TrackByService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          prop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      function isRequired(validator) {
        return validator === _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required || validator === _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["AbpValidators"].required;
      }
      /* tslint:disable:variable-name */


      var ActionList = /*#__PURE__*/function (_abp_utils__WEBPACK_I) {
        _inherits(ActionList, _abp_utils__WEBPACK_I);

        var _super3 = _createSuper(ActionList);

        function ActionList() {
          _classCallCheck(this, ActionList);

          return _super3.apply(this, arguments);
        }

        return ActionList;
      }(_abp_utils__WEBPACK_IMPORTED_MODULE_8__["LinkedList"]);

      var ActionData = /*#__PURE__*/function () {
        function ActionData() {
          _classCallCheck(this, ActionData);
        }

        _createClass(ActionData, [{
          key: "data",
          get: function get() {
            return {
              getInjected: this.getInjected,
              index: this.index,
              record: this.record
            };
          }
        }]);

        return ActionData;
      }();

      var Action = function Action(permission) {
        var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {
          return true;
        };
        var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (_) {};

        _classCallCheck(this, Action);

        this.permission = permission;
        this.visible = visible;
        this.action = action;
      };

      var ActionsFactory = /*#__PURE__*/function () {
        function ActionsFactory() {
          _classCallCheck(this, ActionsFactory);

          this.contributorCallbacks = {};
        }

        _createClass(ActionsFactory, [{
          key: "get",
          value: function get(name) {
            this.contributorCallbacks[name] = this.contributorCallbacks[name] || [];
            return new this._ctor(this.contributorCallbacks[name]);
          }
        }]);

        return ActionsFactory;
      }();

      var Actions = /*#__PURE__*/function () {
        function Actions(callbackList) {
          _classCallCheck(this, Actions);

          this.callbackList = callbackList;
        }

        _createClass(Actions, [{
          key: "actions",
          get: function get() {
            var actionList = new this._ctor();
            this.callbackList.forEach(function (callback) {
              return callback(actionList);
            });
            return actionList;
          }
        }, {
          key: "addContributor",
          value: function addContributor(contributeCallback) {
            this.callbackList.push(contributeCallback);
          }
        }, {
          key: "clearContributors",
          value: function clearContributors() {
            while (this.callbackList.length) {
              this.callbackList.pop();
            }
          }
        }]);

        return Actions;
      }();

      var EntityActionList = /*#__PURE__*/function (_ActionList) {
        _inherits(EntityActionList, _ActionList);

        var _super4 = _createSuper(EntityActionList);

        function EntityActionList() {
          _classCallCheck(this, EntityActionList);

          return _super4.apply(this, arguments);
        }

        return EntityActionList;
      }(ActionList);

      var EntityActions = /*#__PURE__*/function (_Actions) {
        _inherits(EntityActions, _Actions);

        var _super5 = _createSuper(EntityActions);

        function EntityActions() {
          var _this2;

          _classCallCheck(this, EntityActions);

          _this2 = _super5.apply(this, arguments);
          _this2._ctor = EntityActionList;
          return _this2;
        }

        return EntityActions;
      }(Actions);

      var EntityActionsFactory = /*#__PURE__*/function (_ActionsFactory) {
        _inherits(EntityActionsFactory, _ActionsFactory);

        var _super6 = _createSuper(EntityActionsFactory);

        function EntityActionsFactory() {
          var _this3;

          _classCallCheck(this, EntityActionsFactory);

          _this3 = _super6.apply(this, arguments);
          _this3._ctor = EntityActions;
          return _this3;
        }

        return EntityActionsFactory;
      }(ActionsFactory);

      var EntityAction = /*#__PURE__*/function (_Action) {
        _inherits(EntityAction, _Action);

        var _super7 = _createSuper(EntityAction);

        function EntityAction(options) {
          var _this4;

          _classCallCheck(this, EntityAction);

          _this4 = _super7.call(this, options.permission, options.visible, options.action);
          _this4.text = options.text;
          _this4.icon = options.icon || '';
          return _this4;
        }

        _createClass(EntityAction, null, [{
          key: "create",
          value: function create(options) {
            return new EntityAction(options);
          }
        }, {
          key: "createMany",
          value: function createMany(arrayOfOptions) {
            return arrayOfOptions.map(EntityAction.create);
          }
        }]);

        return EntityAction;
      }(Action);
      /* tslint:disable:variable-name */


      var PropList = /*#__PURE__*/function (_abp_utils__WEBPACK_I2) {
        _inherits(PropList, _abp_utils__WEBPACK_I2);

        var _super8 = _createSuper(PropList);

        function PropList() {
          _classCallCheck(this, PropList);

          return _super8.apply(this, arguments);
        }

        return PropList;
      }(_abp_utils__WEBPACK_IMPORTED_MODULE_8__["LinkedList"]);

      var PropData = /*#__PURE__*/function () {
        function PropData() {
          _classCallCheck(this, PropData);
        }

        _createClass(PropData, [{
          key: "data",
          get: function get() {
            return {
              getInjected: this.getInjected,
              index: this.index,
              record: this.record
            };
          }
        }]);

        return PropData;
      }();

      var Prop = function Prop(type, name, displayName, permission) {
        var visible = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (_) {
          return true;
        };
        var isExtra = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

        _classCallCheck(this, Prop);

        this.type = type;
        this.name = name;
        this.displayName = displayName;
        this.permission = permission;
        this.visible = visible;
        this.isExtra = isExtra;
        this.displayName = this.displayName || this.name;
      };

      var PropsFactory = /*#__PURE__*/function () {
        function PropsFactory() {
          _classCallCheck(this, PropsFactory);

          this.contributorCallbacks = {};
        }

        _createClass(PropsFactory, [{
          key: "get",
          value: function get(name) {
            this.contributorCallbacks[name] = this.contributorCallbacks[name] || [];
            return new this._ctor(this.contributorCallbacks[name]);
          }
        }]);

        return PropsFactory;
      }();

      var Props = /*#__PURE__*/function () {
        function Props(callbackList) {
          _classCallCheck(this, Props);

          this.callbackList = callbackList;
        }

        _createClass(Props, [{
          key: "props",
          get: function get() {
            var propList = new this._ctor();
            this.callbackList.forEach(function (callback) {
              return callback(propList);
            });
            return propList;
          }
        }, {
          key: "addContributor",
          value: function addContributor(contributeCallback) {
            this.callbackList.push(contributeCallback);
          }
        }, {
          key: "clearContributors",
          value: function clearContributors() {
            while (this.callbackList.length) {
              this.callbackList.pop();
            }
          }
        }]);

        return Props;
      }();

      var EntityPropList = /*#__PURE__*/function (_PropList) {
        _inherits(EntityPropList, _PropList);

        var _super9 = _createSuper(EntityPropList);

        function EntityPropList() {
          _classCallCheck(this, EntityPropList);

          return _super9.apply(this, arguments);
        }

        return EntityPropList;
      }(PropList);

      var EntityProps = /*#__PURE__*/function (_Props) {
        _inherits(EntityProps, _Props);

        var _super10 = _createSuper(EntityProps);

        function EntityProps() {
          var _this5;

          _classCallCheck(this, EntityProps);

          _this5 = _super10.apply(this, arguments);
          _this5._ctor = EntityPropList;
          return _this5;
        }

        return EntityProps;
      }(Props);

      var EntityPropsFactory = /*#__PURE__*/function (_PropsFactory) {
        _inherits(EntityPropsFactory, _PropsFactory);

        var _super11 = _createSuper(EntityPropsFactory);

        function EntityPropsFactory() {
          var _this6;

          _classCallCheck(this, EntityPropsFactory);

          _this6 = _super11.apply(this, arguments);
          _this6._ctor = EntityProps;
          return _this6;
        }

        return EntityPropsFactory;
      }(PropsFactory);

      var EntityProp = /*#__PURE__*/function (_Prop) {
        _inherits(EntityProp, _Prop);

        var _super12 = _createSuper(EntityProp);

        function EntityProp(options) {
          var _this7;

          _classCallCheck(this, EntityProp);

          _this7 = _super12.call(this, options.type, options.name, options.displayName, options.permission, options.visible, options.isExtra);
          _this7.columnWidth = options.columnWidth;
          _this7.sortable = options.sortable || false;

          _this7.valueResolver = options.valueResolver || function (data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(data.record[_this7.name]);
          };

          _this7.action = options.action;
          return _this7;
        }

        _createClass(EntityProp, null, [{
          key: "create",
          value: function create(options) {
            return new EntityProp(options);
          }
        }, {
          key: "createMany",
          value: function createMany(arrayOfOptions) {
            return arrayOfOptions.map(EntityProp.create);
          }
        }]);

        return EntityProp;
      }(Prop);

      var FormPropList = /*#__PURE__*/function (_PropList2) {
        _inherits(FormPropList, _PropList2);

        var _super13 = _createSuper(FormPropList);

        function FormPropList() {
          _classCallCheck(this, FormPropList);

          return _super13.apply(this, arguments);
        }

        return FormPropList;
      }(PropList);

      var FormProps = /*#__PURE__*/function (_Props2) {
        _inherits(FormProps, _Props2);

        var _super14 = _createSuper(FormProps);

        function FormProps() {
          var _this8;

          _classCallCheck(this, FormProps);

          _this8 = _super14.apply(this, arguments);
          _this8._ctor = FormPropList;
          return _this8;
        }

        return FormProps;
      }(Props);

      var CreateFormPropsFactory = /*#__PURE__*/function (_PropsFactory2) {
        _inherits(CreateFormPropsFactory, _PropsFactory2);

        var _super15 = _createSuper(CreateFormPropsFactory);

        function CreateFormPropsFactory() {
          var _this9;

          _classCallCheck(this, CreateFormPropsFactory);

          _this9 = _super15.apply(this, arguments);
          _this9._ctor = FormProps;
          return _this9;
        }

        return CreateFormPropsFactory;
      }(PropsFactory);

      var EditFormPropsFactory = /*#__PURE__*/function (_PropsFactory3) {
        _inherits(EditFormPropsFactory, _PropsFactory3);

        var _super16 = _createSuper(EditFormPropsFactory);

        function EditFormPropsFactory() {
          var _this10;

          _classCallCheck(this, EditFormPropsFactory);

          _this10 = _super16.apply(this, arguments);
          _this10._ctor = FormProps;
          return _this10;
        }

        return EditFormPropsFactory;
      }(PropsFactory);

      var FormProp = /*#__PURE__*/function (_Prop2) {
        _inherits(FormProp, _Prop2);

        var _super17 = _createSuper(FormProp);

        function FormProp(options) {
          var _this11;

          _classCallCheck(this, FormProp);

          _this11 = _super17.call(this, options.type, options.name, options.displayName, options.permission, options.visible, options.isExtra);

          _this11.asyncValidators = options.asyncValidators || function (_) {
            return [];
          };

          _this11.validators = options.validators || function (_) {
            return [];
          };

          _this11.disabled = options.disabled || function (_) {
            return false;
          };

          _this11.readonly = options.readonly || function (_) {
            return false;
          };

          _this11.autocomplete = options.autocomplete || 'off';
          _this11.options = options.options;
          _this11.id = options.id || options.name;
          var defaultValue = options.defaultValue;
          _this11.defaultValue = isFalsyValue(defaultValue) ? defaultValue : defaultValue || null;
          return _this11;
        }

        _createClass(FormProp, null, [{
          key: "create",
          value: function create(options) {
            return new FormProp(options);
          }
        }, {
          key: "createMany",
          value: function createMany(arrayOfOptions) {
            return arrayOfOptions.map(FormProp.create);
          }
        }]);

        return FormProp;
      }(Prop);

      var FormPropData = /*#__PURE__*/function (_PropData) {
        _inherits(FormPropData, _PropData);

        var _super18 = _createSuper(FormPropData);

        function FormPropData(injector, record) {
          var _this12;

          _classCallCheck(this, FormPropData);

          _this12 = _super18.call(this);
          _this12.record = record; // tslint:disable-next-line

          _this12.getInjected = injector.get.bind(injector);
          return _this12;
        }

        return FormPropData;
      }(PropData);

      function isFalsyValue(defaultValue) {
        return [0, '', false].indexOf(defaultValue) > -1;
      }

      var ToolbarActionList = /*#__PURE__*/function (_ActionList2) {
        _inherits(ToolbarActionList, _ActionList2);

        var _super19 = _createSuper(ToolbarActionList);

        function ToolbarActionList() {
          _classCallCheck(this, ToolbarActionList);

          return _super19.apply(this, arguments);
        }

        return ToolbarActionList;
      }(ActionList);

      var ToolbarActions = /*#__PURE__*/function (_Actions2) {
        _inherits(ToolbarActions, _Actions2);

        var _super20 = _createSuper(ToolbarActions);

        function ToolbarActions() {
          var _this13;

          _classCallCheck(this, ToolbarActions);

          _this13 = _super20.apply(this, arguments);
          _this13._ctor = ToolbarActionList;
          return _this13;
        }

        return ToolbarActions;
      }(Actions);

      var ToolbarActionsFactory = /*#__PURE__*/function (_ActionsFactory2) {
        _inherits(ToolbarActionsFactory, _ActionsFactory2);

        var _super21 = _createSuper(ToolbarActionsFactory);

        function ToolbarActionsFactory() {
          var _this14;

          _classCallCheck(this, ToolbarActionsFactory);

          _this14 = _super21.apply(this, arguments);
          _this14._ctor = ToolbarActions;
          return _this14;
        }

        return ToolbarActionsFactory;
      }(ActionsFactory);

      var ToolbarAction = /*#__PURE__*/function (_Action2) {
        _inherits(ToolbarAction, _Action2);

        var _super22 = _createSuper(ToolbarAction);

        function ToolbarAction(options) {
          var _this15;

          _classCallCheck(this, ToolbarAction);

          _this15 = _super22.call(this, options.permission, options.visible, options.action);
          _this15.text = options.text;
          _this15.icon = options.icon || '';
          return _this15;
        }

        _createClass(ToolbarAction, null, [{
          key: "create",
          value: function create(options) {
            return new ToolbarAction(options);
          }
        }, {
          key: "createMany",
          value: function createMany(arrayOfOptions) {
            return arrayOfOptions.map(ToolbarAction.create);
          }
        }]);

        return ToolbarAction;
      }(Action);

      var ToolbarComponent = /*#__PURE__*/function (_Action3) {
        _inherits(ToolbarComponent, _Action3);

        var _super23 = _createSuper(ToolbarComponent);

        function ToolbarComponent(options) {
          var _this16;

          _classCallCheck(this, ToolbarComponent);

          _this16 = _super23.call(this, options.permission, options.visible, options.action);
          _this16.component = options.component;
          return _this16;
        }

        _createClass(ToolbarComponent, null, [{
          key: "create",
          value: function create(options) {
            return new ToolbarComponent(options);
          }
        }, {
          key: "createMany",
          value: function createMany(arrayOfOptions) {
            return arrayOfOptions.map(ToolbarComponent.create);
          }
        }]);

        return ToolbarComponent;
      }(Action);

      var ExtensionsService = function ExtensionsService() {
        _classCallCheck(this, ExtensionsService);

        this.entityActions = new EntityActionsFactory();
        this.toolbarActions = new ToolbarActionsFactory();
        this.entityProps = new EntityPropsFactory();
        this.createFormProps = new CreateFormPropsFactory();
        this.editFormProps = new EditFormPropsFactory();
      };

      ExtensionsService.ɵfac = function ExtensionsService_Factory(t) {
        return new (t || ExtensionsService)();
      };

      ExtensionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function ExtensionsService_Factory() {
          return new ExtensionsService();
        },
        token: ExtensionsService,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtensionsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var EXTENSIONS_IDENTIFIER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('EXTENSIONS_IDENTIFIER');
      var EXTENSIONS_ACTION_TYPE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('EXTENSIONS_ACTION_TYPE');
      var EXTENSIONS_ACTION_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('EXTENSIONS_ACTION_DATA');
      var EXTENSIONS_ACTION_CALLBACK = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('EXTENSIONS_ACTION_DATA');
      var ɵ0 = selfFactory;

      var ExtensibleFormComponent = /*#__PURE__*/function () {
        function ExtensibleFormComponent(cdRef, track, container, extensions, identifier) {
          _classCallCheck(this, ExtensibleFormComponent);

          this.cdRef = cdRef;
          this.track = track;
          this.container = container;
          this.extensions = extensions;
          this.identifier = identifier;
          this.extraPropertiesKey = EXTRA_PROPERTIES_KEY;
        }

        _createClass(ExtensibleFormComponent, [{
          key: "selectedRecord",
          set: function set(record) {
            var type = !record || JSON.stringify(record) === '{}' ? 'create' : 'edit';
            this.propList = this.extensions["".concat(type, "FormProps")].get(this.identifier).props;
            this.record = record;
          }
        }, {
          key: "form",
          get: function get() {
            return this.container ? this.container.control : {
              controls: {}
            };
          }
        }, {
          key: "extraProperties",
          get: function get() {
            return this.form.controls.extraProperties || {
              controls: {}
            };
          }
        }]);

        return ExtensibleFormComponent;
      }();

      ExtensibleFormComponent.ɵfac = function ExtensibleFormComponent_Factory(t) {
        return new (t || ExtensibleFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["TrackByService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ExtensionsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EXTENSIONS_IDENTIFIER));
      };

      ExtensibleFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExtensibleFormComponent,
        selectors: [["abp-extensible-form"]],
        viewQuery: function ExtensibleFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ExtensibleFormPropComponent, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formProps = _t);
          }
        },
        inputs: {
          selectedRecord: "selectedRecord"
        },
        exportAs: ["abpExtensibleForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([], [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
          useFactory: ɵ0,
          deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]]
        }])],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [4, "abpPropData", "abpPropDataFromList", "abpPropDataWithRecord"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "formGroupName", 4, "ngIf", "ngIfElse"], ["tempDefault", ""], [3, "formGroupName"], [3, "prop", "data"], [3, "prop", "data", 4, "ngIf"]],
        template: function ExtensibleFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], PropDataDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["ValidationGroupDirective"], ExtensibleFormPropComponent];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      ExtensibleFormComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["TrackByService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]
        }, {
          type: ExtensionsService
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [EXTENSIONS_IDENTIFIER]
          }]
        }];
      };

      ExtensibleFormComponent.propDecorators = {
        formProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [ExtensibleFormPropComponent]
        }],
        selectedRecord: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtensibleFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            exportAs: 'abpExtensibleForm',
            selector: 'abp-extensible-form',
            template: "<ng-container *ngIf=\"form\">\n  <ng-container *abpPropData=\"let data; fromList: propList; withRecord: record\">\n    <ng-container *ngFor=\"let prop of propList; trackBy: track.by('name')\">\n      <ng-container *ngIf=\"prop.visible(data)\">\n        <ng-container\n          [formGroupName]=\"extraPropertiesKey\"\n          *ngIf=\"extraProperties.controls[prop.name]; else tempDefault\"\n        >\n          <abp-extensible-form-prop [prop]=\"prop\" [data]=\"data\"></abp-extensible-form-prop>\n        </ng-container>\n\n        <ng-template #tempDefault>\n          <abp-extensible-form-prop\n            *ngIf=\"form.get(prop.name)\"\n            [prop]=\"prop\"\n            [data]=\"data\"\n          ></abp-extensible-form-prop>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ng-container>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            viewProviders: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
              useFactory: ɵ0,
              deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]]
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["TrackByService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]
          }, {
            type: ExtensionsService
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [EXTENSIONS_IDENTIFIER]
            }]
          }];
        }, {
          selectedRecord: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          formProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [ExtensibleFormPropComponent]
          }]
        });
      })();

      var DEFAULT_ACTIONS_COLUMN_WIDTH = 150;

      var ExtensibleTableComponent = /*#__PURE__*/function () {
        function ExtensibleTableComponent(locale, config, injector) {
          _classCallCheck(this, ExtensibleTableComponent);

          this.locale = locale;
          this.config = config;

          this.trackByFn = function (_, item) {
            return item.name;
          }; // tslint:disable-next-line


          this.getInjected = injector.get.bind(injector);
          var extensions = injector.get(ExtensionsService);
          var name = injector.get(EXTENSIONS_IDENTIFIER);
          this.propList = extensions.entityProps.get(name).props;
          this.actionList = extensions['entityActions'].get(name).actions;
          this.setColumnWidths(DEFAULT_ACTIONS_COLUMN_WIDTH);
        }

        _createClass(ExtensibleTableComponent, [{
          key: "actionsText",
          get: function get() {
            var _a;

            return (_a = this._actionsText) !== null && _a !== void 0 ? _a : this.actionList.length > 1 ? 'AbpUi::Actions' : '';
          },
          set: function set(value) {
            this._actionsText = value;
          }
        }, {
          key: "actionsColumnWidth",
          set: function set(width) {
            this.setColumnWidths(width ? Number(width) : undefined);
          }
        }, {
          key: "setColumnWidths",
          value: function setColumnWidths(actionsColumn) {
            var widths = [actionsColumn];
            this.propList.forEach(function (_ref3) {
              var prop = _ref3.value;
              widths.push(prop.columnWidth);
            });
            this.columnWidths = widths;
          }
        }, {
          key: "getDate",
          value: function getDate(value, format) {
            return value ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(value, format, this.locale) : '';
          }
        }, {
          key: "getIcon",
          value: function getIcon(value) {
            return value ? '<div class="text-center text-success"><i class="fa fa-check"></i></div>' : '<div class="text-center text-danger"><i class="fa fa-times"></i></div>';
          }
        }, {
          key: "getContent",
          value: function getContent(prop, data) {
            var _this17 = this;

            return prop.valueResolver(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) {
              switch (prop.type) {
                case "boolean"
                /* Boolean */
                :
                  return _this17.getIcon(value);

                case "date"
                /* Date */
                :
                  return _this17.getDate(value, Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["getShortDateFormat"])(_this17.config));

                case "time"
                /* Time */
                :
                  return _this17.getDate(value, Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["getShortTimeFormat"])(_this17.config));

                case "dateTime"
                /* DateTime */
                :
                  return _this17.getDate(value, Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["getShortDateShortTimeFormat"])(_this17.config));

                default:
                  return value;
                // More types can be handled in the future
              }
            }));
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(_ref4) {
            var _this18 = this;

            var data = _ref4.data;
            if (!(data === null || data === void 0 ? void 0 : data.currentValue)) return;
            this.data = data.currentValue.map(function (record, index) {
              _this18.propList.forEach(function (prop) {
                var propData = {
                  getInjected: _this18.getInjected,
                  record: record,
                  index: index
                };
                record["_".concat(prop.value.name)] = {
                  visible: prop.value.visible(propData),
                  value: _this18.getContent(prop.value, propData)
                };
              });

              return record;
            });
          }
        }]);

        return ExtensibleTableComponent;
      }();

      ExtensibleTableComponent.ɵfac = function ExtensibleTableComponent_Factory(t) {
        return new (t || ExtensibleTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["ConfigStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      ExtensibleTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExtensibleTableComponent,
        selectors: [["abp-extensible-table"]],
        inputs: {
          actionsText: "actionsText",
          actionsColumnWidth: "actionsColumnWidth",
          data: "data",
          list: "list",
          recordsTotal: "recordsTotal",
          actionsTemplate: "actionsTemplate"
        },
        exportAs: ["abpExtensibleTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 3,
        vars: 6,
        consts: [["default", "", 3, "rows", "count", "list"], [3, "name", "maxWidth", "width", "sortable", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "name", "maxWidth", "width", "sortable"], ["ngx-datatable-cell-template", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["gridActions", ""], ["text", "AbpUi::Actions", 3, "index", "record"], [3, "width", "name", "prop", "sortable"], [4, "abpPermission"], [3, "innerHTML", "pointer", "click", 4, "ngIf"], [3, "innerHTML", "click"]],
        template: function ExtensibleTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleTableComponent_ngx_datatable_column_1_Template, 3, 6, "ngx-datatable-column", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExtensibleTableComponent_ng_container_2_Template, 4, 6, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.data)("count", ctx.recordsTotal)("list", ctx.list);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionsTemplate || ctx.actionList.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.propList)("ngForTrackBy", ctx.trackByFn);
          }
        },
        directives: function directives() {
          return [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["DatatableComponent"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableDefaultDirective"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableListDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["DataTableColumnCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], GridActionsComponent, _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["PermissionDirective"]];
        },
        pipes: function pipes() {
          return [_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["LocalizationPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      ExtensibleTableComponent.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }, {
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["ConfigStateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      };

      ExtensibleTableComponent.propDecorators = {
        actionsText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        recordsTotal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        actionsColumnWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        actionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtensibleTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            exportAs: 'abpExtensibleTable',
            selector: 'abp-extensible-table',
            template: "<ngx-datatable default [rows]=\"data\" [count]=\"recordsTotal\" [list]=\"list\">\n  <ngx-datatable-column\n    *ngIf=\"actionsTemplate || actionList.length\"\n    [name]=\"actionsText | abpLocalization\"\n    [maxWidth]=\"columnWidths[0]\"\n    [width]=\"columnWidths[0]\"\n    [sortable]=\"false\"\n  >\n    <ng-template let-row=\"row\" let-i=\"rowIndex\" ngx-datatable-cell-template>\n      <ng-container\n        *ngTemplateOutlet=\"actionsTemplate || gridActions; context: { $implicit: row, index: i }\"\n      ></ng-container>\n      <ng-template #gridActions>\n        <abp-grid-actions [index]=\"i\" [record]=\"row\" text=\"AbpUi::Actions\"></abp-grid-actions>\n      </ng-template>\n    </ng-template>\n  </ngx-datatable-column>\n\n  <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">\n    <ngx-datatable-column\n      [width]=\"columnWidths[i + 1] || 200\"\n      [name]=\"prop.displayName | abpLocalization\"\n      [prop]=\"prop.name\"\n      [sortable]=\"prop.sortable\"\n    >\n      <ng-template let-row=\"row\" let-i=\"index\" ngx-datatable-cell-template>\n        <ng-container *abpPermission=\"prop.permission\">\n          <div\n            *ngIf=\"row['_' + prop.name].visible\"\n            [innerHTML]=\"row['_' + prop.name].value | async\"\n            (click)=\"\n              prop.action && prop.action({ getInjected: getInjected, record: row, index: i })\n            \"\n            [class.pointer]=\"prop.action\"\n          ></div>\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n  </ng-container>\n</ngx-datatable>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }]
          }, {
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["ConfigStateService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, {
          actionsText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          actionsColumnWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          recordsTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          actionsTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })(); // tslint:disable: directive-class-suffix
      // Fix for https://github.com/angular/angular/issues/23904
      // @dynamic


      var AbstractActionsComponent = /*#__PURE__*/function (_ActionData) {
        _inherits(AbstractActionsComponent, _ActionData);

        var _super24 = _createSuper(AbstractActionsComponent);

        function AbstractActionsComponent(injector) {
          var _this19;

          _classCallCheck(this, AbstractActionsComponent);

          _this19 = _super24.call(this); // tslint:disable-next-line

          _this19.getInjected = injector.get.bind(injector);
          var extensions = injector.get(ExtensionsService);
          var name = injector.get(EXTENSIONS_IDENTIFIER);
          var type = injector.get(EXTENSIONS_ACTION_TYPE);
          _this19.actionList = extensions[type].get(name).actions;
          return _this19;
        }

        return AbstractActionsComponent;
      }(ActionData);

      AbstractActionsComponent.ɵfac = function AbstractActionsComponent_Factory(t) {
        return new (t || AbstractActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      AbstractActionsComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AbstractActionsComponent,
        inputs: {
          record: "record"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      AbstractActionsComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      };

      AbstractActionsComponent.propDecorators = {
        record: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractActionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, {
          record: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var GridActionsComponent = /*#__PURE__*/function (_AbstractActionsCompo) {
        _inherits(GridActionsComponent, _AbstractActionsCompo);

        var _super25 = _createSuper(GridActionsComponent);

        function GridActionsComponent(injector) {
          var _this20;

          _classCallCheck(this, GridActionsComponent);

          _this20 = _super25.call(this, injector);
          _this20.icon = 'fa fa-cog';
          _this20.text = '';

          _this20.trackByFn = function (_, item) {
            return item.text;
          };

          return _this20;
        }

        return GridActionsComponent;
      }(AbstractActionsComponent);

      GridActionsComponent.ɵfac = function GridActionsComponent_Factory(t) {
        return new (t || GridActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      GridActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GridActionsComponent,
        selectors: [["abp-grid-actions"]],
        inputs: {
          icon: "icon",
          text: "text",
          index: "index"
        },
        exportAs: ["abpGridActions"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: EXTENSIONS_ACTION_TYPE,
          useValue: 'entityActions'
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 2,
        consts: [["ngbDropdown", "", "container", "body", "class", "d-inline-block", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["btnItem", ""], ["ngbDropdown", "", "container", "body", 1, "d-inline-block"], ["data-toggle", "dropdown", "aria-haspopup", "true", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "btn-sm", "dropdown-toggle"], [3, "ngClass"], ["ngbDropdownMenu", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], ["ngbDropdownItem", "", "type", "button", 3, "class", "text-center", "click", 4, "abpPermission"], ["ngbDropdownItem", "", "type", "button", 3, "click"], [4, "ngIf", "ngIfElse"], ["ellipsis", ""], ["abpEllipsis", ""]],
        template: function GridActionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GridActionsComponent_div_0_Template, 7, 8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridActionsComponent_ng_container_1_Template, 1, 4, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridActionsComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionList.length > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionList.length === 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["PermissionDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__["EllipsisDirective"]],
        pipes: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["LocalizationPipe"]],
        encapsulation: 2,
        changeDetection: 0
      });

      GridActionsComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      };

      GridActionsComponent.propDecorators = {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridActionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            exportAs: 'abpGridActions',
            selector: 'abp-grid-actions',
            template: "<div *ngIf=\"actionList.length > 1\" ngbDropdown container=\"body\" class=\"d-inline-block\">\n  <button\n    class=\"btn btn-primary btn-sm dropdown-toggle\"\n    data-toggle=\"dropdown\"\n    aria-haspopup=\"true\"\n    ngbDropdownToggle\n  >\n    <i [ngClass]=\"icon\" [class.mr-1]=\"icon\"></i>{{ text | abpLocalization }}\n  </button>\n  <div ngbDropdownMenu>\n    <ng-container\n      *ngFor=\"let action of actionList; trackBy: trackByFn\"\n      [ngTemplateOutlet]=\"btnItem\"\n      [ngTemplateOutletContext]=\"{ $implicit: action }\"\n    >\n    </ng-container>\n  </div>\n</div>\n\n<ng-container\n  *ngIf=\"actionList.length === 1\"\n  [ngTemplateOutlet]=\"btnItem\"\n  [ngTemplateOutletContext]=\"{ $implicit: actionList.get(0).value }\"\n></ng-container>\n\n<ng-template #btnItem let-action>\n  <ng-container *ngIf=\"action.visible(data)\">\n    <button\n      ngbDropdownItem\n      *abpPermission=\"action.permission\"\n      (click)=\"action.action(data)\"\n      type=\"button\"\n      class=\"{{ actionList.length === 1 ? 'btn btn-primary' : '' }}\"\n      [class.text-center]=\"actionList.length === 1\"\n    >\n      <i [ngClass]=\"action.icon\" [class.mr-1]=\"action.icon\"></i>\n      <span *ngIf=\"action.icon; else ellipsis\">{{ action.text | abpLocalization }}</span>\n      <ng-template #ellipsis>\n        <div abpEllipsis>{{ action.text | abpLocalization }}</div>\n      </ng-template>\n    </button>\n  </ng-container>\n</ng-template>\n",
            providers: [{
              provide: EXTENSIONS_ACTION_TYPE,
              useValue: 'entityActions'
            }],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, {
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var PageToolbarComponent = /*#__PURE__*/function (_AbstractActionsCompo2) {
        _inherits(PageToolbarComponent, _AbstractActionsCompo2);

        var _super26 = _createSuper(PageToolbarComponent);

        function PageToolbarComponent(injector) {
          var _this21;

          _classCallCheck(this, PageToolbarComponent);

          _this21 = _super26.call(this, injector);
          _this21.injector = injector;

          _this21.trackByFn = function (_, item) {
            return item.action || item.component;
          };

          return _this21;
        }

        _createClass(PageToolbarComponent, [{
          key: "createInjector",
          value: function createInjector(action) {
            var _this22 = this;

            var get = function get(token, notFoundValue, flags) {
              return token === EXTENSIONS_ACTION_DATA ? _this22.data : token === EXTENSIONS_ACTION_CALLBACK ? function () {
                var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this22.data;
                return action.action(data);
              } : _this22.getInjected.call(_this22.injector, token, notFoundValue, flags);
            };

            return {
              get: get
            };
          }
        }]);

        return PageToolbarComponent;
      }(AbstractActionsComponent);

      PageToolbarComponent.ɵfac = function PageToolbarComponent_Factory(t) {
        return new (t || PageToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      PageToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageToolbarComponent,
        selectors: [["abp-page-toolbar"]],
        exportAs: ["abpPageToolbar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: EXTENSIONS_ACTION_TYPE,
          useValue: 'toolbarActions'
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 2,
        consts: [["id", "AbpContentToolbar", 1, "row", "justify-content-end", "mx-n1"], ["class", "col-auto px-1 pt-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-auto", "px-1", "pt-2"], [4, "ngIf"], [4, "abpPermission"], [4, "ngIf", "ngIfElse"], ["button", ""], [4, "ngComponentOutlet", "ngComponentOutletInjector"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [3, "ngClass"]],
        template: function PageToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageToolbarComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.actionList)("ngForTrackBy", ctx.trackByFn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["PermissionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        pipes: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["LocalizationPipe"]],
        encapsulation: 2,
        changeDetection: 0
      });

      PageToolbarComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageToolbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            exportAs: 'abpPageToolbar',
            selector: 'abp-page-toolbar',
            template: "<div class=\"row justify-content-end mx-n1\" id=\"AbpContentToolbar\">\n  <div class=\"col-auto px-1 pt-2\" *ngFor=\"let action of actionList; trackBy: trackByFn\">\n    <ng-container *ngIf=\"action.visible(data)\">\n      <ng-container *abpPermission=\"action.permission\">\n        <ng-container *ngIf=\"action.component as component; else button\">\n          <ng-container\n            *ngComponentOutlet=\"component; injector: createInjector(action)\"\n          ></ng-container>\n        </ng-container>\n\n        <ng-template #button>\n          <button (click)=\"action.action(data)\" type=\"button\" class=\"btn btn-primary btn-sm\">\n            <i [ngClass]=\"action.icon\" [class.mr-1]=\"action.icon\"></i>\n            {{ action.text | abpLocalization }}\n          </button>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </div>\n</div>\n",
            providers: [{
              provide: EXTENSIONS_ACTION_TYPE,
              useValue: 'toolbarActions'
            }],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, null);
      })();

      var DisabledDirective = /*#__PURE__*/function () {
        function DisabledDirective(ngControl) {
          _classCallCheck(this, DisabledDirective);

          this.ngControl = ngControl;
        } // Related issue: https://github.com/angular/angular/issues/35330


        _createClass(DisabledDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(_ref5) {
            var abpDisabled = _ref5.abpDisabled;

            if (this.ngControl.control && abpDisabled) {
              this.ngControl.control[abpDisabled.currentValue ? 'disable' : 'enable']();
            }
          }
        }]);

        return DisabledDirective;
      }();

      DisabledDirective.ɵfac = function DisabledDirective_Factory(t) {
        return new (t || DisabledDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], 1));
      };

      DisabledDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DisabledDirective,
        selectors: [["", "abpDisabled", ""]],
        inputs: {
          abpDisabled: "abpDisabled"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      DisabledDirective.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }];
      };

      DisabledDirective.propDecorators = {
        abpDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisabledDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[abpDisabled]'
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }];
        }, {
          abpDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var PropDataDirective = /*#__PURE__*/function (_PropData2) {
        _inherits(PropDataDirective, _PropData2);

        var _super27 = _createSuper(PropDataDirective);

        function PropDataDirective(tempRef, vcRef, injector) {
          var _this23;

          _classCallCheck(this, PropDataDirective);

          _this23 = _super27.call(this);
          _this23.tempRef = tempRef;
          _this23.vcRef = vcRef; // tslint:disable-next-line

          _this23.getInjected = injector.get.bind(injector);
          return _this23;
        }

        _createClass(PropDataDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.vcRef.clear();
            this.vcRef.createEmbeddedView(this.tempRef, {
              $implicit: this.data,
              index: 0
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.vcRef.clear();
          }
        }]);

        return PropDataDirective;
      }(PropData);

      PropDataDirective.ɵfac = function PropDataDirective_Factory(t) {
        return new (t || PropDataDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      PropDataDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PropDataDirective,
        selectors: [["", "abpPropData", ""]],
        inputs: {
          propList: ["abpPropDataFromList", "propList"],
          record: ["abpPropDataWithRecord", "record"],
          index: ["abpPropDataAtIndex", "index"]
        },
        exportAs: ["abpPropData"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      PropDataDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      };

      PropDataDirective.propDecorators = {
        propList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['abpPropDataFromList']
        }],
        record: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['abpPropDataWithRecord']
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['abpPropDataAtIndex']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropDataDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            exportAs: 'abpPropData',
            selector: '[abpPropData]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, {
          propList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['abpPropDataFromList']
          }],
          record: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['abpPropDataWithRecord']
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['abpPropDataAtIndex']
          }]
        });
      })();

      var objectExtensions = /*#__PURE__*/Object.freeze({
        __proto__: null
      });

      var BaseUiExtensionsModule = function BaseUiExtensionsModule() {
        _classCallCheck(this, BaseUiExtensionsModule);
      };

      BaseUiExtensionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BaseUiExtensionsModule
      });
      BaseUiExtensionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BaseUiExtensionsModule_Factory(t) {
          return new (t || BaseUiExtensionsModule)();
        },
        imports: [[_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__["ThemeSharedModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["NgxValidateCoreModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeaheadModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BaseUiExtensionsModule, {
          declarations: function declarations() {
            return [DateTimePickerComponent, PageToolbarComponent, GridActionsComponent, ExtensibleFormPropComponent, ExtensibleFormComponent, ExtensibleTableComponent, PropDataDirective, DisabledDirective];
          },
          imports: function imports() {
            return [_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__["ThemeSharedModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["NgxValidateCoreModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeaheadModule"]];
          },
          exports: function exports() {
            return [DateTimePickerComponent, PageToolbarComponent, GridActionsComponent, ExtensibleFormComponent, ExtensibleTableComponent, PropDataDirective, DisabledDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseUiExtensionsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [DateTimePickerComponent, PageToolbarComponent, GridActionsComponent, ExtensibleFormComponent, ExtensibleTableComponent, PropDataDirective, DisabledDirective],
            declarations: [DateTimePickerComponent, PageToolbarComponent, GridActionsComponent, ExtensibleFormPropComponent, ExtensibleFormComponent, ExtensibleTableComponent, PropDataDirective, DisabledDirective],
            imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__["ThemeSharedModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["NgxValidateCoreModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeaheadModule"]]
          }]
        }], null, null);
      })();

      var UiExtensionsModule = function UiExtensionsModule() {
        _classCallCheck(this, UiExtensionsModule);
      };

      UiExtensionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UiExtensionsModule
      });
      UiExtensionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UiExtensionsModule_Factory(t) {
          return new (t || UiExtensionsModule)();
        },
        imports: [[BaseUiExtensionsModule], BaseUiExtensionsModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiExtensionsModule, {
          imports: [BaseUiExtensionsModule],
          exports: [BaseUiExtensionsModule]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiExtensionsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [BaseUiExtensionsModule],
            imports: [BaseUiExtensionsModule]
          }]
        }], null, null);
      })();

      function mergeWithDefaultActions(extension, defaultActions) {
        for (var _len = arguments.length, contributors = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          contributors[_key - 2] = arguments[_key];
        }

        Object.keys(defaultActions).forEach(function (name) {
          var actions = extension.get(name);
          actions.clearContributors();
          actions.addContributor(function (actionList) {
            return actionList.addManyTail(defaultActions[name]);
          });
          contributors.forEach(function (contributor) {
            return (contributor[name] || []).forEach(function (callback) {
              return actions.addContributor(callback);
            });
          });
        });
      }

      function generateFormFromProps(data) {
        var extensions = data.getInjected(ExtensionsService);
        var identifier = data.getInjected(EXTENSIONS_IDENTIFIER);
        var form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        var extraForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        form.addControl(EXTRA_PROPERTIES_KEY, extraForm);
        var record = data.record || {};
        var type = JSON.stringify(record) === '{}' ? 'create' : 'edit';
        var props = extensions["".concat(type, "FormProps")].get(identifier).props;
        var extraProperties = record[EXTRA_PROPERTIES_KEY] || {};
        props.forEach(function (_ref6) {
          var prop = _ref6.value;
          var name = prop.name;
          var isExtraProperty = prop.isExtra || name in extraProperties;
          var value = isExtraProperty ? extraProperties[name] : name in record ? record[name] : undefined;
          if (typeof value === 'undefined') value = prop.defaultValue;

          if (value) {
            var adapter;

            switch (prop.type) {
              case "date"
              /* Date */
              :
                adapter = new DateAdapter();
                value = adapter.toModel(adapter.fromModel(value));
                break;

              case "time"
              /* Time */
              :
                adapter = new TimeAdapter();
                value = adapter.toModel(adapter.fromModel(value));
                break;

              case "dateTime"
              /* DateTime */
              :
                adapter = new DateTimeAdapter();
                value = adapter.toModel(adapter.fromModel(value));
                break;

              default:
                break;
            }
          }

          var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](value, {
            asyncValidators: prop.asyncValidators(data),
            validators: prop.validators(data)
          });
          (isExtraProperty ? extraForm : form).addControl(name, formControl);
        });
        return form;
      }

      function createExtraPropertyValueResolver(name) {
        return function (data) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(data.record[EXTRA_PROPERTIES_KEY][name]);
        };
      }

      function mergeWithDefaultProps(extension, defaultProps) {
        for (var _len2 = arguments.length, contributors = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          contributors[_key2 - 2] = arguments[_key2];
        }

        Object.keys(defaultProps).forEach(function (name) {
          var props = extension.get(name);
          props.clearContributors();
          props.addContributor(function (propList) {
            return propList.addManyTail(defaultProps[name]);
          });
          contributors.forEach(function (contributor) {
            return (contributor[name] || []).forEach(function (callback) {
              return props.addContributor(callback);
            });
          });
        });
      }

      function createEnum(members) {
        var enumObject = {};
        members.forEach(function (_ref7) {
          var name = _ref7.name,
              value = _ref7.value;
          enumObject[enumObject[name] = value] = name;
        });
        return enumObject;
      }

      function createEnumValueResolver(enumType, lookupEnum, propName) {
        return function (data) {
          var value = data.record[EXTRA_PROPERTIES_KEY][propName];
          var key = lookupEnum.transformed[value];
          var l10n = data.getInjected(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["LocalizationService"]);
          var localizeEnum = createEnumLocalizer(l10n, enumType, lookupEnum);
          return createLocalizationStream(l10n, localizeEnum(key));
        };
      }

      function createEnumOptions(enumType, lookupEnum) {
        return function (data) {
          var l10n = data.getInjected(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["LocalizationService"]);
          var localizeEnum = createEnumLocalizer(l10n, enumType, lookupEnum);
          return createLocalizationStream(l10n, lookupEnum.fields.map(function (_ref8) {
            var name = _ref8.name,
                value = _ref8.value;
            return {
              key: localizeEnum(name),
              value: value
            };
          }));
        };
      }

      function createLocalizationStream(l10n, mapTarget) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null), l10n.languageChange$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
          return mapTarget;
        }));
      }

      function createEnumLocalizer(l10n, enumType, lookupEnum) {
        var resource = lookupEnum.localizationResource;
        var shortType = getShortEnumType(enumType);
        return function (key) {
          return l10n.localizeWithFallbackSync([resource], ['Enum:' + shortType + '.' + key, shortType + '.' + key, key], key);
        };
      }

      function getShortEnumType(enumType) {
        return enumType.split('.').pop();
      }

      function createDisplayNameLocalizationPipeKeyGenerator(localization) {
        var generateLocalizationPipeKey = Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["createLocalizationPipeKeyGenerator"])(localization);
        return function (displayName, fallback) {
          if (displayName && displayName.name) return generateLocalizationPipeKey([displayName.resource], [displayName.name], displayName.name);
          var key = generateLocalizationPipeKey([fallback.resource], ['DisplayName:' + fallback.name], undefined);
          if (key) return key;
          return generateLocalizationPipeKey([fallback.resource], [fallback.name], fallback.name);
        };
      }

      function getValidatorsFromProperty(property) {
        var validators = [];
        property.attributes.forEach(function (attr) {
          if (attr.typeSimple in _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["AbpValidators"]) validators.push(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["AbpValidators"][attr.typeSimple](attr.config));
        });
        return validators;
      }

      function selectObjectExtensions(configState) {
        return configState.getOne$('objectExtensions');
      }

      function selectLocalization(configState) {
        return configState.getOne$('localization');
      }

      function selectEnums(configState) {
        return selectObjectExtensions(configState).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (extensions) {
          return Object.keys(extensions.enums).reduce(function (acc, key) {
            var _extensions$enums$key = extensions.enums[key],
                fields = _extensions$enums$key.fields,
                localizationResource = _extensions$enums$key.localizationResource;
            acc[key] = {
              fields: fields,
              localizationResource: localizationResource,
              transformed: createEnum(fields)
            };
            return acc;
          }, {});
        }));
      }

      function getObjectExtensionEntitiesFromStore(configState, moduleKey) {
        return selectObjectExtensions(configState).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (extensions) {
          if (!extensions) return null;
          return (extensions.modules[moduleKey] || {}).entities;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (entities) {
          return isUndefined(entities) ? {} : entities;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
      }

      function mapEntitiesToContributors(configState, resource) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (entities) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["zip"])(selectLocalization(configState), selectEnums(configState)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_ref9) {
            var _ref10 = _slicedToArray(_ref9, 2),
                localization = _ref10[0],
                enums = _ref10[1];

            var generateDisplayName = createDisplayNameLocalizationPipeKeyGenerator(localization);
            return Object.keys(entities).reduce(function (acc, key) {
              acc.prop[key] = [];
              acc.createForm[key] = [];
              acc.editForm[key] = [];
              var entity = entities[key];
              if (!entity) return acc;
              var properties = entity.properties;
              if (!properties) return acc;
              var mapPropertiesToContributors = createPropertiesToContributorsMapper(generateDisplayName, resource, enums);
              return mapPropertiesToContributors(properties, acc, key);
            }, {
              prop: {},
              createForm: {},
              editForm: {}
            });
          }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
      }

      function createPropertiesToContributorsMapper(generateDisplayName, resource, enums) {
        return function (properties, contributors, key) {
          var isExtra = true;
          var generateTypeaheadDisplayName = createTypeaheadDisplayNameGenerator(generateDisplayName, properties);
          Object.keys(properties).forEach(function (name) {
            var property = properties[name];
            var propName = name;
            var lookup = property.ui.lookup || {};
            var type = getTypeaheadType(lookup, name) || getTypeFromProperty(property);
            var generateDN = hasTypeaheadTextSuffix(name) ? generateTypeaheadDisplayName : generateDisplayName;
            var displayName = generateDN(property.displayName, {
              name: name,
              resource: resource
            });

            if (property.ui.onTable.isVisible) {
              var sortable = Boolean(property.ui.onTable.isSortable);
              var columnWidth = type === "boolean"
              /* Boolean */
              ? 150 : 250;
              var valueResolver = type === "enum"
              /* Enum */
              ? createEnumValueResolver(property.type, enums[property.type], propName) : createExtraPropertyValueResolver(propName);
              var entityProp = new EntityProp({
                type: type,
                name: propName,
                displayName: displayName,
                sortable: sortable,
                columnWidth: columnWidth,
                valueResolver: valueResolver,
                isExtra: isExtra
              });

              var contributor = function contributor(propList) {
                return propList.addTail(entityProp);
              };

              contributors.prop[key].push(contributor);
            }

            var isOnCreateForm = property.ui.onCreateForm.isVisible;
            var isOnEditForm = property.ui.onEditForm.isVisible;

            if (isOnCreateForm || isOnEditForm) {
              var defaultValue = property.defaultValue;

              var validators = function validators() {
                return getValidatorsFromProperty(property);
              };

              var options;
              if (type === "enum"
              /* Enum */
              ) options = createEnumOptions(propName, enums[property.type]);else if (type === "typeahead"
              /* Typeahead */
              ) options = createTypeaheadOptions(lookup);
              var formProp = new FormProp({
                type: type,
                name: propName,
                displayName: displayName,
                options: options,
                defaultValue: defaultValue,
                validators: validators,
                isExtra: isExtra
              });

              var formContributor = function formContributor(propList) {
                return propList.addTail(formProp);
              };

              if (isOnCreateForm) contributors.createForm[key].push(formContributor);
              if (isOnEditForm) contributors.editForm[key].push(formContributor);
            }
          });
          return contributors;
        };
      }

      function getTypeFromProperty(property) {
        return property.typeSimple.replace(/\?$/, '');
      }

      function isUndefined(obj) {
        return typeof obj === 'undefined';
      }
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=abp-ng.theme.shared-extensions.js.map

      /***/

    },

    /***/
    "ZFcX":
    /*!************************************************************!*\
      !*** ./node_modules/@abp/utils/dist/fesm2015/abp-utils.js ***!
      \************************************************************/

    /*! exports provided: LinkedList, ListNode */

    /***/
    function ZFcX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkedList", function () {
        return LinkedList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListNode", function () {
        return ListNode;
      });
      /* harmony import */


      var just_compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! just-compare */
      "lSrJ");
      /* harmony import */


      var just_compare__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(just_compare__WEBPACK_IMPORTED_MODULE_0__);
      /* tslint:disable:no-non-null-assertion */


      var ListNode = function ListNode(value) {
        _classCallCheck(this, ListNode);

        this.value = value;
      };

      var LinkedList = /*#__PURE__*/function () {
        function LinkedList() {
          _classCallCheck(this, LinkedList);

          this.size = 0;
        }

        _createClass(LinkedList, [{
          key: "head",
          get: function get() {
            return this.first;
          }
        }, {
          key: "tail",
          get: function get() {
            return this.last;
          }
        }, {
          key: "length",
          get: function get() {
            return this.size;
          }
        }, {
          key: "attach",
          value: function attach(value, previousNode, nextNode) {
            if (!previousNode) return this.addHead(value);
            if (!nextNode) return this.addTail(value);
            var node = new ListNode(value);
            node.previous = previousNode;
            previousNode.next = node;
            node.next = nextNode;
            nextNode.previous = node;
            this.size++;
            return node;
          }
        }, {
          key: "attachMany",
          value: function attachMany(values, previousNode, nextNode) {
            if (!values.length) return [];
            if (!previousNode) return this.addManyHead(values);
            if (!nextNode) return this.addManyTail(values);
            var list = new LinkedList();
            list.addManyTail(values);
            list.first.previous = previousNode;
            previousNode.next = list.first;
            list.last.next = nextNode;
            nextNode.previous = list.last;
            this.size += values.length;
            return list.toNodeArray();
          }
        }, {
          key: "detach",
          value: function detach(node) {
            if (!node.previous) return this.dropHead();
            if (!node.next) return this.dropTail();
            node.previous.next = node.next;
            node.next.previous = node.previous;
            this.size--;
            return node;
          }
        }, {
          key: "add",
          value: function add(value) {
            var _this24 = this;

            return {
              after: function after() {
                var _this24$addAfter;

                for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  params[_key3] = arguments[_key3];
                }

                return (_this24$addAfter = _this24.addAfter).call.apply(_this24$addAfter, [_this24, value].concat(params));
              },
              before: function before() {
                var _this24$addBefore;

                for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                  params[_key4] = arguments[_key4];
                }

                return (_this24$addBefore = _this24.addBefore).call.apply(_this24$addBefore, [_this24, value].concat(params));
              },
              byIndex: function byIndex(position) {
                return _this24.addByIndex(value, position);
              },
              head: function head() {
                return _this24.addHead(value);
              },
              tail: function tail() {
                return _this24.addTail(value);
              }
            };
          }
        }, {
          key: "addMany",
          value: function addMany(values) {
            var _this25 = this;

            return {
              after: function after() {
                var _this25$addManyAfter;

                for (var _len5 = arguments.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                  params[_key5] = arguments[_key5];
                }

                return (_this25$addManyAfter = _this25.addManyAfter).call.apply(_this25$addManyAfter, [_this25, values].concat(params));
              },
              before: function before() {
                var _this25$addManyBefore;

                for (var _len6 = arguments.length, params = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                  params[_key6] = arguments[_key6];
                }

                return (_this25$addManyBefore = _this25.addManyBefore).call.apply(_this25$addManyBefore, [_this25, values].concat(params));
              },
              byIndex: function byIndex(position) {
                return _this25.addManyByIndex(values, position);
              },
              head: function head() {
                return _this25.addManyHead(values);
              },
              tail: function tail() {
                return _this25.addManyTail(values);
              }
            };
          }
        }, {
          key: "addAfter",
          value: function addAfter(value, previousValue) {
            var compareFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : just_compare__WEBPACK_IMPORTED_MODULE_0___default.a;
            var previous = this.find(function (node) {
              return compareFn(node.value, previousValue);
            });
            return previous ? this.attach(value, previous, previous.next) : this.addTail(value);
          }
        }, {
          key: "addBefore",
          value: function addBefore(value, nextValue) {
            var compareFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : just_compare__WEBPACK_IMPORTED_MODULE_0___default.a;
            var next = this.find(function (node) {
              return compareFn(node.value, nextValue);
            });
            return next ? this.attach(value, next.previous, next) : this.addHead(value);
          }
        }, {
          key: "addByIndex",
          value: function addByIndex(value, position) {
            if (position < 0) position += this.size;else if (position >= this.size) return this.addTail(value);
            if (position <= 0) return this.addHead(value);
            var next = this.get(position);
            return this.attach(value, next.previous, next);
          }
        }, {
          key: "addHead",
          value: function addHead(value) {
            var node = new ListNode(value);
            node.next = this.first;
            if (this.first) this.first.previous = node;else this.last = node;
            this.first = node;
            this.size++;
            return node;
          }
        }, {
          key: "addTail",
          value: function addTail(value) {
            var node = new ListNode(value);

            if (this.first) {
              node.previous = this.last;
              this.last.next = node;
              this.last = node;
            } else {
              this.first = node;
              this.last = node;
            }

            this.size++;
            return node;
          }
        }, {
          key: "addManyAfter",
          value: function addManyAfter(values, previousValue) {
            var compareFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : just_compare__WEBPACK_IMPORTED_MODULE_0___default.a;
            var previous = this.find(function (node) {
              return compareFn(node.value, previousValue);
            });
            return previous ? this.attachMany(values, previous, previous.next) : this.addManyTail(values);
          }
        }, {
          key: "addManyBefore",
          value: function addManyBefore(values, nextValue) {
            var compareFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : just_compare__WEBPACK_IMPORTED_MODULE_0___default.a;
            var next = this.find(function (node) {
              return compareFn(node.value, nextValue);
            });
            return next ? this.attachMany(values, next.previous, next) : this.addManyHead(values);
          }
        }, {
          key: "addManyByIndex",
          value: function addManyByIndex(values, position) {
            if (position < 0) position += this.size;
            if (position <= 0) return this.addManyHead(values);
            if (position >= this.size) return this.addManyTail(values);
            var next = this.get(position);
            return this.attachMany(values, next.previous, next);
          }
        }, {
          key: "addManyHead",
          value: function addManyHead(values) {
            var _this26 = this;

            return values.reduceRight(function (nodes, value) {
              nodes.unshift(_this26.addHead(value));
              return nodes;
            }, []);
          }
        }, {
          key: "addManyTail",
          value: function addManyTail(values) {
            var _this27 = this;

            return values.map(function (value) {
              return _this27.addTail(value);
            });
          }
        }, {
          key: "drop",
          value: function drop() {
            var _this28 = this;

            return {
              byIndex: function byIndex(position) {
                return _this28.dropByIndex(position);
              },
              byValue: function byValue() {
                for (var _len7 = arguments.length, params = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                  params[_key7] = arguments[_key7];
                }

                return _this28.dropByValue.apply(_this28, params);
              },
              byValueAll: function byValueAll() {
                for (var _len8 = arguments.length, params = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                  params[_key8] = arguments[_key8];
                }

                return _this28.dropByValueAll.apply(_this28, params);
              },
              head: function head() {
                return _this28.dropHead();
              },
              tail: function tail() {
                return _this28.dropTail();
              }
            };
          }
        }, {
          key: "dropMany",
          value: function dropMany(count) {
            var _this29 = this;

            return {
              byIndex: function byIndex(position) {
                return _this29.dropManyByIndex(count, position);
              },
              head: function head() {
                return _this29.dropManyHead(count);
              },
              tail: function tail() {
                return _this29.dropManyTail(count);
              }
            };
          }
        }, {
          key: "dropByIndex",
          value: function dropByIndex(position) {
            if (position < 0) position += this.size;
            var current = this.get(position);
            return current ? this.detach(current) : undefined;
          }
        }, {
          key: "dropByValue",
          value: function dropByValue(value) {
            var compareFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : just_compare__WEBPACK_IMPORTED_MODULE_0___default.a;
            var position = this.findIndex(function (node) {
              return compareFn(node.value, value);
            });
            return position < 0 ? undefined : this.dropByIndex(position);
          }
        }, {
          key: "dropByValueAll",
          value: function dropByValueAll(value) {
            var compareFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : just_compare__WEBPACK_IMPORTED_MODULE_0___default.a;
            var dropped = [];

            for (var current = this.first, position = 0; current; position++, current = current.next) {
              if (compareFn(current.value, value)) {
                dropped.push(this.dropByIndex(position - dropped.length));
              }
            }

            return dropped;
          }
        }, {
          key: "dropHead",
          value: function dropHead() {
            var head = this.first;

            if (head) {
              this.first = head.next;
              if (this.first) this.first.previous = undefined;else this.last = undefined;
              this.size--;
              return head;
            }

            return undefined;
          }
        }, {
          key: "dropTail",
          value: function dropTail() {
            var tail = this.last;

            if (tail) {
              this.last = tail.previous;
              if (this.last) this.last.next = undefined;else this.first = undefined;
              this.size--;
              return tail;
            }

            return undefined;
          }
        }, {
          key: "dropManyByIndex",
          value: function dropManyByIndex(count, position) {
            if (count <= 0) return [];
            if (position < 0) position = Math.max(position + this.size, 0);else if (position >= this.size) return [];
            count = Math.min(count, this.size - position);
            var dropped = [];

            while (count--) {
              var current = this.get(position);
              dropped.push(this.detach(current));
            }

            return dropped;
          }
        }, {
          key: "dropManyHead",
          value: function dropManyHead(count) {
            if (count <= 0) return [];
            count = Math.min(count, this.size);
            var dropped = [];

            while (count--) {
              dropped.unshift(this.dropHead());
            }

            return dropped;
          }
        }, {
          key: "dropManyTail",
          value: function dropManyTail(count) {
            if (count <= 0) return [];
            count = Math.min(count, this.size);
            var dropped = [];

            while (count--) {
              dropped.push(this.dropTail());
            }

            return dropped;
          }
        }, {
          key: "find",
          value: function find(predicate) {
            for (var current = this.first, position = 0; current; position++, current = current.next) {
              if (predicate(current, position, this)) return current;
            }

            return undefined;
          }
        }, {
          key: "findIndex",
          value: function findIndex(predicate) {
            for (var current = this.first, position = 0; current; position++, current = current.next) {
              if (predicate(current, position, this)) return position;
            }

            return -1;
          }
        }, {
          key: "forEach",
          value: function forEach(iteratorFn) {
            for (var node = this.first, position = 0; node; position++, node = node.next) {
              iteratorFn(node, position, this);
            }
          }
        }, {
          key: "get",
          value: function get(position) {
            return this.find(function (_, index) {
              return position === index;
            });
          }
        }, {
          key: "indexOf",
          value: function indexOf(value) {
            var compareFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : just_compare__WEBPACK_IMPORTED_MODULE_0___default.a;
            return this.findIndex(function (node) {
              return compareFn(node.value, value);
            });
          }
        }, {
          key: "toArray",
          value: function toArray() {
            var array = new Array(this.size);
            this.forEach(function (node, index) {
              return array[index] = node.value;
            });
            return array;
          }
        }, {
          key: "toNodeArray",
          value: function toNodeArray() {
            var array = new Array(this.size);
            this.forEach(function (node, index) {
              return array[index] = node;
            });
            return array;
          }
        }, {
          key: "toString",
          value: function toString() {
            var mapperFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : JSON.stringify;
            return this.toArray().map(function (value) {
              return mapperFn(value);
            }).join(' <-> ');
          } // Cannot use Generator type because of ng-packagr

        }, {
          key: Symbol.iterator,
          value:
          /*#__PURE__*/
          regeneratorRuntime.mark(function value() {
            var node, position;
            return regeneratorRuntime.wrap(function value$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    node = this.first, position = 0;

                  case 1:
                    if (!node) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 4;
                    return node.value;

                  case 4:
                    position++, node = node.next;
                    _context.next = 1;
                    break;

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, value, this);
          })
        }]);

        return LinkedList;
      }();
      /*
       * Public API Surface of utils
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=abp-utils.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~abp-ng-identity~abp-ng-setting-management~abp-ng-tenant-management-es5.js.map