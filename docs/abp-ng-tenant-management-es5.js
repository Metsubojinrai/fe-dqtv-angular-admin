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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["abp-ng-tenant-management"], {
    /***/
    "3erh":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@abp/ng.feature-management/__ivy_ngcc__/fesm2015/abp-ng.feature-management.js ***!
      \****************************************************************************************************/

    /*! exports provided: FeatureManagementComponent, FeatureManagementModule, FeaturesService, ??a, ??b, ??c */

    /***/
    function erh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureManagementComponent", function () {
        return FeatureManagementComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureManagementModule", function () {
        return FeatureManagementModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeaturesService", function () {
        return FeaturesService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??a", function () {
        return FeatureManagementComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??b", function () {
        return FeaturesService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??c", function () {
        return FreeTextInputDirective;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function FeatureManagementComponent_abp_modal_0_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, "AbpFeatureManagement::Features"));
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_1_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainer"](0);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          $implicit: a0
        };
      };

      function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_1_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r24);

            var feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            return feature_r15.value = $event;
          })("ngModelChange", function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_1_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r24);

            var feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](5);

            return ctx_r25.onCheckboxClick($event, feature_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_1_ng_container_5_Template, 1, 0, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("id", feature_r15.name)("ngModel", feature_r15.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("htmlFor", feature_r15.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](feature_r15.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngTemplateOutlet", _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](6, _c0, feature_r15.description));
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_2_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainer"](0);
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_2_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r31);

            var feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            return feature_r15.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_2_ng_container_5_Template, 1, 0, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("htmlFor", feature_r15.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](feature_r15.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("id", feature_r15.name)("ngModel", feature_r15.value)("abpFeatureManagementFreeText", feature_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngTemplateOutlet", _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](7, _c0, feature_r15.description));
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_ng_container_1_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngValue", item_r36.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 2, (item_r36.displayText == null ? null : item_r36.displayText.resourceName) + "::" + (item_r36.displayText == null ? null : item_r36.displayText.name)), " ");
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_ng_container_1_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainer"](0);
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "select", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_ng_container_1_Template_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r39);

            var feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2).$implicit;

            return feature_r15.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_ng_container_1_option_5_Template, 3, 4, "option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_ng_container_1_ng_container_6_Template, 1, 0, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](6);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("htmlFor", feature_r15.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](feature_r15.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("id", feature_r15.name)("ngModel", feature_r15.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", feature_r15.valueType.itemSource == null ? null : feature_r15.valueType.itemSource.items)("ngForTrackBy", ctx_r33.track.by("value"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngTemplateOutlet", _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](8, _c0, feature_r15.description));
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_ng_container_1_Template, 7, 10, "ng-container", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", feature_r15.valueType.itemSource == null ? null : feature_r15.valueType.itemSource.items == null ? null : feature_r15.valueType.itemSource.items.length);
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](feature_r15.displayName);
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("keyup.enter", function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_Template_div_keyup_enter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](5);

            return ctx_r43.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_1_Template, 6, 8, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_2_Template, 6, 9, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_Template, 2, 1, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_4_Template, 2, 1, "ng-container", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var feature_r15 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngStyle", feature_r15.style)("ngSwitch", feature_r15.valueType == null ? null : feature_r15.valueType.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngSwitchCase", ctx_r14.valueTypes.ToggleStringValueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngSwitchCase", ctx_r14.valueTypes.FreeTextStringValueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngSwitchCase", ctx_r14.valueTypes.SelectionStringValueType);
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "hr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_Template, 5, 5, "div", 18);
        }

        if (rf & 2) {
          var group_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r13.selectedGroupDisplayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r13.features[group_r12.name])("ngForTrackBy", ctx_r13.track.by("id"));
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_Template, 4, 3, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var group_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbNavItem", group_r12.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](group_r12.displayName);
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_ng_template_5_small_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var description_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](description_r46);
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](0, FeatureManagementComponent_abp_modal_0_ng_template_3_ng_template_5_small_0_Template, 2, 1, "small", 33);
        }

        if (rf & 2) {
          var description_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", description_r46);
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, "AbpFeatureManagement::NoFeatureFoundMessage"), " ");
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "ul", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("activeIdChange", function FeatureManagementComponent_abp_modal_0_ng_template_3_Template_ul_activeIdChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r50);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r49.selectedGroupDisplayName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_Template, 4, 2, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, FeatureManagementComponent_abp_modal_0_ng_template_3_ng_template_5_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, FeatureManagementComponent_abp_modal_0_ng_template_3_div_9_Template, 3, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("activeId", ctx_r4.selectedGroupDisplayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r4.groups)("ngForTrackBy", ctx_r4.track.by("name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbNavOutlet", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r4.groups.length);
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_5_abp_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "abp-button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FeatureManagementComponent_abp_modal_0_ng_template_5_abp_button_3_Template_abp_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r52.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r51.modalBusy);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 2, "AbpFeatureManagement::Save"), " ");
        }
      }

      function FeatureManagementComponent_abp_modal_0_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, FeatureManagementComponent_abp_modal_0_ng_template_5_abp_button_3_Template, 3, 4, "abp-button", 37);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 2, "AbpFeatureManagement::Cancel"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r6.groups.length);
        }
      }

      function FeatureManagementComponent_abp_modal_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "abp-modal", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("visibleChange", function FeatureManagementComponent_abp_modal_0_Template_abp_modal_visibleChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r54.visible = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, FeatureManagementComponent_abp_modal_0_ng_template_1_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, FeatureManagementComponent_abp_modal_0_ng_template_3_Template, 10, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, FeatureManagementComponent_abp_modal_0_ng_template_5_Template, 4, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("visible", ctx_r0.visible)("busy", ctx_r0.modalBusy);
        }
      }

      var FeaturesService = function FeaturesService(restService) {
        var _this = this;

        _classCallCheck(this, FeaturesService);

        this.restService = restService;
        this.apiName = 'AbpFeatureManagement';

        this.get = function (providerName, providerKey) {
          return _this.restService.request({
            method: 'GET',
            url: '/api/feature-management/features',
            params: {
              providerName: providerName,
              providerKey: providerKey
            }
          }, {
            apiName: _this.apiName
          });
        };

        this.update = function (providerName, providerKey, input) {
          return _this.restService.request({
            method: 'PUT',
            url: '/api/feature-management/features',
            params: {
              providerName: providerName,
              providerKey: providerKey
            },
            body: input
          }, {
            apiName: _this.apiName
          });
        };
      };

      FeaturesService.??fac = function FeaturesService_Factory(t) {
        return new (t || FeaturesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]));
      };

      FeaturesService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({
        factory: function FeaturesService_Factory() {
          return new FeaturesService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]));
        },
        token: FeaturesService,
        providedIn: "root"
      });

      FeaturesService.ctorParameters = function () {
        return [{
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](FeaturesService, [{
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

      var ValueTypes;

      (function (ValueTypes) {
        ValueTypes["ToggleStringValueType"] = "ToggleStringValueType";
        ValueTypes["FreeTextStringValueType"] = "FreeTextStringValueType";
        ValueTypes["SelectionStringValueType"] = "SelectionStringValueType";
      })(ValueTypes || (ValueTypes = {}));

      var FeatureManagementComponent = /*#__PURE__*/function () {
        function FeatureManagementComponent(track, service, store, configState, appConfigService) {
          _classCallCheck(this, FeatureManagementComponent);

          this.track = track;
          this.service = service;
          this.store = store;
          this.configState = configState;
          this.appConfigService = appConfigService;
          this.groups = [];
          this.valueTypes = ValueTypes;
          this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.modalBusy = false;
        }

        _createClass(FeatureManagementComponent, [{
          key: "visible",
          get: function get() {
            return this._visible;
          },
          set: function set(value) {
            if (this._visible === value) return;
            this._visible = value;
            this.visibleChange.emit(value);
            if (value) this.openModal();
          }
        }, {
          key: "openModal",
          value: function openModal() {
            if (!this.providerName) {
              throw new Error('providerName is required.');
            }

            this.getFeatures();
          }
        }, {
          key: "getFeatures",
          value: function getFeatures() {
            var _this2 = this;

            this.service.get(this.providerName, this.providerKey).subscribe(function (res) {
              var _a;

              if (!((_a = res.groups) === null || _a === void 0 ? void 0 : _a.length)) return;
              _this2.groups = res.groups.map(function (_ref) {
                var name = _ref.name,
                    displayName = _ref.displayName;
                return {
                  name: name,
                  displayName: displayName
                };
              });
              _this2.selectedGroupDisplayName = _this2.groups[0].displayName;
              _this2.features = res.groups.reduce(function (acc, val) {
                return Object.assign(Object.assign({}, acc), _defineProperty({}, val.name, mapFeatures(val.features, document.body.dir)));
              }, {});
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this3 = this;

            if (this.modalBusy) return;
            var changedFeatures = [];
            Object.keys(this.features).forEach(function (key) {
              _this3.features[key].forEach(function (feature) {
                if (feature.value !== feature.initialValue) changedFeatures.push({
                  name: feature.name,
                  value: "".concat(feature.value)
                });
              });
            });

            if (!changedFeatures.length) {
              this.visible = false;
              return;
            }

            this.modalBusy = true;
            this.service.update(this.providerName, this.providerKey, {
              features: changedFeatures
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this3.modalBusy = false;
            })).subscribe(function () {
              _this3.visible = false;

              if (!_this3.providerKey) {
                // to refresh host's features
                _this3.appConfigService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
                  return _this3.configState.setState(res);
                })).subscribe();
              }
            });
          }
        }, {
          key: "onCheckboxClick",
          value: function onCheckboxClick(val, feature) {
            if (val) {
              this.checkToggleAncestors(feature);
            } else {
              this.uncheckToggleDescendants(feature);
            }
          }
        }, {
          key: "uncheckToggleDescendants",
          value: function uncheckToggleDescendants(feature) {
            var _this4 = this;

            this.findAllDescendantsOfByType(feature, ValueTypes.ToggleStringValueType).forEach(function (node) {
              return _this4.setFeatureValue(node, false);
            });
          }
        }, {
          key: "checkToggleAncestors",
          value: function checkToggleAncestors(feature) {
            var _this5 = this;

            this.findAllAncestorsOfByType(feature, ValueTypes.ToggleStringValueType).forEach(function (node) {
              return _this5.setFeatureValue(node, true);
            });
          }
        }, {
          key: "findAllAncestorsOfByType",
          value: function findAllAncestorsOfByType(feature, type) {
            var parent = this.findParentByType(feature, type);
            var ancestors = [];

            while (parent) {
              ancestors.push(parent);
              parent = this.findParentByType(parent, type);
            }

            return ancestors;
          }
        }, {
          key: "findAllDescendantsOfByType",
          value: function findAllDescendantsOfByType(feature, type) {
            var descendants = [];
            var queue = [feature];

            while (queue.length) {
              var node = queue.pop();
              var newDescendants = this.findChildrenByType(node, type);
              descendants.push.apply(descendants, _toConsumableArray(newDescendants));
              queue.push.apply(queue, _toConsumableArray(newDescendants));
            }

            return descendants;
          }
        }, {
          key: "findParentByType",
          value: function findParentByType(feature, type) {
            return this.getCurrentGroup().find(function (f) {
              return f.valueType.name === type && f.name === feature.parentName;
            });
          }
        }, {
          key: "findChildrenByType",
          value: function findChildrenByType(feature, type) {
            return this.getCurrentGroup().filter(function (f) {
              return f.valueType.name === type && f.parentName === feature.name;
            });
          }
        }, {
          key: "getCurrentGroup",
          value: function getCurrentGroup() {
            var _a;

            return (_a = this.features[this.selectedGroupDisplayName]) !== null && _a !== void 0 ? _a : [];
          }
        }, {
          key: "setFeatureValue",
          value: function setFeatureValue(feature, val) {
            feature.value = val;
          }
        }]);

        return FeatureManagementComponent;
      }();

      FeatureManagementComponent.??fac = function FeatureManagementComponent_Factory(t) {
        return new (t || FeatureManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["TrackByService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](FeaturesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["AbpApplicationConfigurationService"]));
      };

      FeatureManagementComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: FeatureManagementComponent,
        selectors: [["abp-feature-management"]],
        inputs: {
          visible: "visible",
          providerKey: "providerKey",
          providerName: "providerName"
        },
        outputs: {
          visibleChange: "visibleChange"
        },
        exportAs: ["abpFeatureManagement"],
        decls: 1,
        vars: 1,
        consts: [["size", "lg", 3, "visible", "busy", "visibleChange", 4, "ngIf"], ["size", "lg", 3, "visible", "busy", "visibleChange"], ["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], [1, "row"], [1, "col-md-4"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["descTmp", ""], [1, "col-md-8"], [3, "ngbNavOutlet"], ["class", "mx-3", 4, "ngIf"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", "mb-3"], ["class", "mt-2", 3, "ngStyle", "ngSwitch", "keyup.enter", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mt-2", 3, "ngStyle", "ngSwitch", "keyup.enter"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "custom-checkbox", "custom-control"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "ngModel", "ngModelChange"], [1, "custom-control-label", 3, "htmlFor"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "form-group"], [3, "htmlFor"], ["type", "text", 1, "form-control", 3, "id", "ngModel", "abpFeatureManagementFreeText", "ngModelChange"], [4, "ngIf"], [1, "form-control", "custom-select", 3, "id", "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngValue"], ["class", "form-text text-muted", 4, "ngIf"], [1, "form-text", "text-muted"], [1, "mx-3"], ["abpClose", "", "type", "button", 1, "btn", "btn-secondary"], ["iconClass", "fa fa-check", 3, "disabled", "click", 4, "ngIf"], ["iconClass", "fa fa-check", 3, "disabled", "click"]],
        template: function FeatureManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](0, FeatureManagementComponent_abp_modal_0_Template, 7, 2, "abp-modal", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.visible);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNav"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], FreeTextInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_x"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ModalCloseDirective"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]];
        },
        pipes: function pipes() {
          return [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["LocalizationPipe"]];
        },
        encapsulation: 2
      });

      FeatureManagementComponent.ctorParameters = function () {
        return [{
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["TrackByService"]
        }, {
          type: FeaturesService
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigStateService"]
        }, {
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["AbpApplicationConfigurationService"]
        }];
      };

      FeatureManagementComponent.propDecorators = {
        providerKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        providerName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        visibleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](FeatureManagementComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'abp-feature-management',
            template: "<abp-modal *ngIf=\"visible\" size=\"lg\" [(visible)]=\"visible\" [busy]=\"modalBusy\">\n  <ng-template #abpHeader>\n    <h3>{{ 'AbpFeatureManagement::Features' | abpLocalization }}</h3>\n  </ng-template>\n\n  <ng-template #abpBody>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <ul\n          ngbNav\n          #nav=\"ngbNav\"\n          [(activeId)]=\"selectedGroupDisplayName\"\n          class=\"nav-pills\"\n          orientation=\"vertical\"\n        >\n          <li\n            *ngFor=\"let group of groups; trackBy: track.by('name')\"\n            [ngbNavItem]=\"group.displayName\"\n          >\n            <a ngbNavLink>{{ group.displayName }}</a>\n            <ng-template ngbNavContent>\n              <h4>{{ selectedGroupDisplayName }}</h4>\n              <hr class=\"mt-2 mb-3\" />\n\n              <div\n                class=\"mt-2\"\n                *ngFor=\"let feature of features[group.name]; let i = index; trackBy: track.by('id')\"\n                [ngStyle]=\"feature.style\"\n                [ngSwitch]=\"feature.valueType?.name\"\n                (keyup.enter)=\"save()\"\n              >\n                <ng-container *ngSwitchCase=\"valueTypes.ToggleStringValueType\">\n                  <div class=\"custom-checkbox custom-control\">\n                    <input\n                      class=\"custom-control-input\"\n                      type=\"checkbox\"\n                      [id]=\"feature.name\"\n                      [(ngModel)]=\"feature.value\"\n                      (ngModelChange)=\"onCheckboxClick($event, feature)\"\n                    />\n\n                    <label class=\"custom-control-label\" [htmlFor]=\"feature.name\">{{\n                      feature.displayName\n                    }}</label>\n                    <ng-container\n                      *ngTemplateOutlet=\"descTmp; context: { $implicit: feature.description }\"\n                    ></ng-container>\n                  </div>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"valueTypes.FreeTextStringValueType\">\n                  <div class=\"form-group\">\n                    <label [htmlFor]=\"feature.name\">{{ feature.displayName }}</label>\n                    <input\n                      class=\"form-control\"\n                      type=\"text\"\n                      [id]=\"feature.name\"\n                      [(ngModel)]=\"feature.value\"\n                      [abpFeatureManagementFreeText]=\"feature\"\n                    />\n\n                    <ng-container\n                      *ngTemplateOutlet=\"descTmp; context: { $implicit: feature.description }\"\n                    ></ng-container>\n                  </div>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"valueTypes.SelectionStringValueType\">\n                  <ng-container *ngIf=\"feature.valueType.itemSource?.items?.length\">\n                    <div class=\"form-group\">\n                      <label [htmlFor]=\"feature.name\">{{ feature.displayName }}</label>\n                      <select\n                        class=\"form-control custom-select\"\n                        [id]=\"feature.name\"\n                        [(ngModel)]=\"feature.value\"\n                      >\n                        <option\n                          *ngFor=\"\n                            let item of feature.valueType.itemSource?.items;\n                            trackBy: track.by('value')\n                          \"\n                          [ngValue]=\"item.value\"\n                        >\n                          {{\n                            item.displayText?.resourceName + '::' + item.displayText?.name\n                              | abpLocalization\n                          }}\n                        </option>\n                      </select>\n                      <ng-container\n                        *ngTemplateOutlet=\"descTmp; context: { $implicit: feature.description }\"\n                      ></ng-container>\n                    </div>\n                  </ng-container>\n                </ng-container>\n                <ng-container *ngSwitchDefault>{{ feature.displayName }}</ng-container>\n              </div>\n            </ng-template>\n          </li>\n        </ul>\n      </div>\n\n      <ng-template #descTmp let-description>\n        <small *ngIf=\"description\" class=\"form-text text-muted\">{{ description }}</small>\n      </ng-template>\n\n      <div class=\"col-md-8\"><div [ngbNavOutlet]=\"nav\"></div></div>\n\n      <div class=\"mx-3\" *ngIf=\"!groups.length\">\n        {{ 'AbpFeatureManagement::NoFeatureFoundMessage' | abpLocalization }}\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #abpFooter>\n    <button abpClose type=\"button\" class=\"btn btn-secondary\">\n      {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\n    </button>\n    <abp-button\n      *ngIf=\"groups.length\"\n      iconClass=\"fa fa-check\"\n      [disabled]=\"modalBusy\"\n      (click)=\"save()\"\n    >\n      {{ 'AbpFeatureManagement::Save' | abpLocalization }}\n    </abp-button>\n  </ng-template>\n</abp-modal>\n",
            exportAs: 'abpFeatureManagement'
          }]
        }], function () {
          return [{
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["TrackByService"]
          }, {
            type: FeaturesService
          }, {
            type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
          }, {
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigStateService"]
          }, {
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["AbpApplicationConfigurationService"]
          }];
        }, {
          visibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          providerKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          providerName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      function mapFeatures(features, dir) {
        var margin = "margin-".concat(dir === 'rtl' ? 'right' : 'left', ".px");
        return features.map(function (feature) {
          var _a;

          var value = ((_a = feature.valueType) === null || _a === void 0 ? void 0 : _a.name) === ValueTypes.ToggleStringValueType ? (feature.value || '').toLowerCase() === 'true' : feature.value;
          return Object.assign(Object.assign({}, feature), {
            value: value,
            initialValue: value,
            style: _defineProperty({}, margin, feature.depth * 20)
          });
        });
      }

      var INPUT_TYPES = {
        numeric: 'number',
        "default": 'text'
      };

      var FreeTextInputDirective = /*#__PURE__*/function () {
        function FreeTextInputDirective() {
          _classCallCheck(this, FreeTextInputDirective);
        }

        _createClass(FreeTextInputDirective, [{
          key: "feature",
          get: function get() {
            return this._feature;
          },
          set: function set(val) {
            this._feature = val;
            this.setInputType();
          }
        }, {
          key: "setInputType",
          value: function setInputType() {
            var _a, _b, _c, _d;

            var validatorType = (_c = (_b = (_a = this.feature) === null || _a === void 0 ? void 0 : _a.valueType) === null || _b === void 0 ? void 0 : _b.validator) === null || _c === void 0 ? void 0 : _c.name.toLowerCase();
            this.type = (_d = INPUT_TYPES[validatorType]) !== null && _d !== void 0 ? _d : INPUT_TYPES["default"];
          }
        }]);

        return FreeTextInputDirective;
      }();

      FreeTextInputDirective.??fac = function FreeTextInputDirective_Factory(t) {
        return new (t || FreeTextInputDirective)();
      };

      FreeTextInputDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineDirective"]({
        type: FreeTextInputDirective,
        selectors: [["input", "abpFeatureManagementFreeText", ""]],
        hostVars: 1,
        hostBindings: function FreeTextInputDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????hostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          feature: ["abpFeatureManagementFreeText", "feature"]
        },
        exportAs: ["inputAbpFeatureManagementFreeText"]
      });
      FreeTextInputDirective.propDecorators = {
        feature: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['abpFeatureManagementFreeText']
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
          args: ['type']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](FreeTextInputDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'input[abpFeatureManagementFreeText]',
            exportAs: 'inputAbpFeatureManagementFreeText'
          }]
        }], null, {
          feature: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['abpFeatureManagementFreeText']
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['type']
          }]
        });
      })();

      var exported = [FeatureManagementComponent, FreeTextInputDirective];

      var FeatureManagementModule = function FeatureManagementModule() {
        _classCallCheck(this, FeatureManagementModule);
      };

      FeatureManagementModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: FeatureManagementModule
      });
      FeatureManagementModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        factory: function FeatureManagementModule_Factory(t) {
          return new (t || FeatureManagementModule)();
        },
        imports: [[_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forFeature([])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](FeatureManagementModule, {
          declarations: function declarations() {
            return [FeatureManagementComponent, FreeTextInputDirective];
          },
          imports: function imports() {
            return [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["??bc"]];
          },
          exports: function exports() {
            return [FeatureManagementComponent, FreeTextInputDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](FeatureManagementModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [].concat(exported),
            imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forFeature([])],
            exports: [].concat(exported)
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=abp-ng.feature-management.js.map

      /***/

    },

    /***/
    "6MLJ":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@abp/ng.tenant-management/__ivy_ngcc__/fesm2015/abp-ng.tenant-management.js ***!
      \**************************************************************************************************/

    /*! exports provided: CreateTenant, DEFAULT_TENANT_MANAGEMENT_CREATE_FORM_PROPS, DEFAULT_TENANT_MANAGEMENT_EDIT_FORM_PROPS, DEFAULT_TENANT_MANAGEMENT_ENTITY_ACTIONS, DEFAULT_TENANT_MANAGEMENT_ENTITY_PROPS, DEFAULT_TENANT_MANAGEMENT_TOOLBAR_ACTIONS, DeleteTenant, GetTenantById, GetTenants, TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS, TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS, TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS, TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS, TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS, TenantManagementExtensionsGuard, TenantManagementModule, TenantManagementState, TenantManagementStateService, TenantService, TenantsComponent, UpdateTenant, ??0, ??a, ??c, ??d, ??e, ??f, ??g, ??h, ??i, ??l, ??m, ??n, ??o, ??p, ??q, ??r, ??s */

    /***/
    function MLJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateTenant", function () {
        return CreateTenant;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_TENANT_MANAGEMENT_CREATE_FORM_PROPS", function () {
        return DEFAULT_TENANT_MANAGEMENT_CREATE_FORM_PROPS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_TENANT_MANAGEMENT_EDIT_FORM_PROPS", function () {
        return DEFAULT_TENANT_MANAGEMENT_EDIT_FORM_PROPS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_TENANT_MANAGEMENT_ENTITY_ACTIONS", function () {
        return DEFAULT_TENANT_MANAGEMENT_ENTITY_ACTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_TENANT_MANAGEMENT_ENTITY_PROPS", function () {
        return DEFAULT_TENANT_MANAGEMENT_ENTITY_PROPS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_TENANT_MANAGEMENT_TOOLBAR_ACTIONS", function () {
        return DEFAULT_TENANT_MANAGEMENT_TOOLBAR_ACTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteTenant", function () {
        return DeleteTenant;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetTenantById", function () {
        return GetTenantById;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetTenants", function () {
        return GetTenants;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS", function () {
        return TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS", function () {
        return TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS", function () {
        return TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS", function () {
        return TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS", function () {
        return TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TenantManagementExtensionsGuard", function () {
        return TenantManagementExtensionsGuard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TenantManagementModule", function () {
        return TenantManagementModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TenantManagementState", function () {
        return TenantManagementState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TenantManagementStateService", function () {
        return TenantManagementStateService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TenantService", function () {
        return TenantService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TenantsComponent", function () {
        return TenantsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateTenant", function () {
        return UpdateTenant;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??0", function () {
        return ??0$4;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??a", function () {
        return TenantsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??c", function () {
        return TenantManagementState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??d", function () {
        return TenantService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??e", function () {
        return GetTenants;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??f", function () {
        return GetTenantById;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??g", function () {
        return CreateTenant;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??h", function () {
        return UpdateTenant;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??i", function () {
        return DeleteTenant;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??l", function () {
        return TenantManagementRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??m", function () {
        return TenantManagementExtensionsGuard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??n", function () {
        return TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??o", function () {
        return TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??p", function () {
        return TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??q", function () {
        return TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??r", function () {
        return TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??s", function () {
        return TenantManagementExtensionsGuard;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @abp/ng.theme.shared/extensions */
      "J7bl");
      /* harmony import */


      var _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @abp/ng.feature-management */
      "3erh");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-validate/core */
      "iWZL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["tenantModalTemplate"];

      function TenantsComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, ctx_r1.selectedModalContent.title));
        }
      }

      function TenantsComponent_ng_template_21_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainer"](0);
        }
      }

      function TenantsComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](0, TenantsComponent_ng_template_21_ng_container_0_Template, 1, 0, "ng-container", 18);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngTemplateOutlet", ctx_r3.selectedModalContent == null ? null : ctx_r3.selectedModalContent.template);
        }
      }

      function TenantsComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "abp-button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function TenantsComponent_ng_template_23_Template_abp_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r10.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](5, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 3, "AbpTenantManagement::Cancel"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx_r5.isDisabledSaveButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](5, 5, "AbpTenantManagement::Save"));
        }
      }

      function TenantsComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "form", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngSubmit", function TenantsComponent_ng_template_25_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r12.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "abp-extensible-form", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx_r7.tenantForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("selectedRecord", ctx_r7.selected);
        }
      }

      function TenantsComponent_abp_feature_management_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "abp-feature-management", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("visibleChange", function TenantsComponent_abp_feature_management_27_Template_abp_feature_management_visibleChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r14.visibleFeatures = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("visible", ctx_r8.visibleFeatures)("providerKey", ctx_r8.providerKey);
        }
      }

      var _c1 = function _c1() {
        return {
          value: "T"
        };
      };

      var _c2 = function _c2(a0) {
        return {
          value: a0
        };
      };

      var _c3 = function _c3(a0) {
        return {
          value: a0,
          twoWay: true
        };
      };

      var _c4 = function _c4(a0, a1, a2) {
        return {
          providerName: a0,
          providerKey: a1,
          visible: a2
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

      var GetTenants = function GetTenants(payload) {
        _classCallCheck(this, GetTenants);

        this.payload = payload;
      };

      GetTenants.type = '[TenantManagement] Get Tenant';

      var GetTenantById = function GetTenantById(payload) {
        _classCallCheck(this, GetTenantById);

        this.payload = payload;
      };

      GetTenantById.type = '[TenantManagement] Get Tenant By Id';

      var CreateTenant = function CreateTenant(payload) {
        _classCallCheck(this, CreateTenant);

        this.payload = payload;
      };

      CreateTenant.type = '[TenantManagement] Create Tenant';

      var UpdateTenant = function UpdateTenant(payload) {
        _classCallCheck(this, UpdateTenant);

        this.payload = payload;
      };

      UpdateTenant.type = '[TenantManagement] Update Tenant';

      var DeleteTenant = function DeleteTenant(payload) {
        _classCallCheck(this, DeleteTenant);

        this.payload = payload;
      };

      DeleteTenant.type = '[TenantManagement] Delete Tenant';

      var TenantService = function TenantService(restService) {
        var _this6 = this;

        _classCallCheck(this, TenantService);

        this.restService = restService;
        this.apiName = 'AbpTenantManagement';

        this.create = function (input) {
          return _this6.restService.request({
            method: 'POST',
            url: '/api/multi-tenancy/tenants',
            body: input
          }, {
            apiName: _this6.apiName
          });
        };

        this["delete"] = function (id) {
          return _this6.restService.request({
            method: 'DELETE',
            url: "/api/multi-tenancy/tenants/".concat(id)
          }, {
            apiName: _this6.apiName
          });
        };

        this.deleteDefaultConnectionString = function (id) {
          return _this6.restService.request({
            method: 'DELETE',
            url: "/api/multi-tenancy/tenants/".concat(id, "/default-connection-string")
          }, {
            apiName: _this6.apiName
          });
        };

        this.get = function (id) {
          return _this6.restService.request({
            method: 'GET',
            url: "/api/multi-tenancy/tenants/".concat(id)
          }, {
            apiName: _this6.apiName
          });
        };

        this.getDefaultConnectionString = function (id) {
          return _this6.restService.request({
            method: 'GET',
            responseType: 'text',
            url: "/api/multi-tenancy/tenants/".concat(id, "/default-connection-string")
          }, {
            apiName: _this6.apiName
          });
        };

        this.getList = function (input) {
          return _this6.restService.request({
            method: 'GET',
            url: '/api/multi-tenancy/tenants',
            params: {
              filter: input.filter,
              sorting: input.sorting,
              skipCount: input.skipCount,
              maxResultCount: input.maxResultCount
            }
          }, {
            apiName: _this6.apiName
          });
        };

        this.update = function (id, input) {
          return _this6.restService.request({
            method: 'PUT',
            url: "/api/multi-tenancy/tenants/".concat(id),
            body: input
          }, {
            apiName: _this6.apiName
          });
        };

        this.updateDefaultConnectionString = function (id, defaultConnectionString) {
          return _this6.restService.request({
            method: 'PUT',
            url: "/api/multi-tenancy/tenants/".concat(id, "/default-connection-string"),
            params: {
              defaultConnectionString: defaultConnectionString
            }
          }, {
            apiName: _this6.apiName
          });
        };
      };

      TenantService.??fac = function TenantService_Factory(t) {
        return new (t || TenantService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]));
      };

      TenantService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({
        factory: function TenantService_Factory() {
          return new TenantService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]));
        },
        token: TenantService,
        providedIn: "root"
      });

      TenantService.ctorParameters = function () {
        return [{
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]
        }];
      };

      var TenantManagementState = /*#__PURE__*/function () {
        function TenantManagementState(service) {
          _classCallCheck(this, TenantManagementState);

          this.service = service;
        }

        _createClass(TenantManagementState, [{
          key: "get",
          value: function get(_ref2, _ref3) {
            var patchState = _ref2.patchState;
            var payload = _ref3.payload;
            return this.service.getList(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (result) {
              return patchState({
                result: result
              });
            }));
          }
        }, {
          key: "getById",
          value: function getById(_ref4, _ref5) {
            var patchState = _ref4.patchState;
            var payload = _ref5.payload;
            return this.service.get(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (selectedItem) {
              return patchState({
                selectedItem: selectedItem
              });
            }));
          }
        }, {
          key: "delete",
          value: function _delete(_, _ref6) {
            var payload = _ref6.payload;
            return this.service["delete"](payload);
          }
        }, {
          key: "add",
          value: function add(_, _ref7) {
            var payload = _ref7.payload;
            return this.service.create(payload);
          }
        }, {
          key: "update",
          value: function update(_ref8, _ref9) {
            var getState = _ref8.getState;
            var payload = _ref9.payload;
            return this.service.update(payload.id, Object.assign(Object.assign({}, getState().selectedItem), payload));
          }
        }], [{
          key: "get",
          value: function get(_ref10) {
            var result = _ref10.result;
            return result.items || [];
          }
        }, {
          key: "getTenantsTotalCount",
          value: function getTenantsTotalCount(_ref11) {
            var result = _ref11.result;
            return result.totalCount;
          }
        }]);

        return TenantManagementState;
      }();

      TenantManagementState.??fac = function TenantManagementState_Factory(t) {
        return new (t || TenantManagementState)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](TenantService));
      };

      TenantManagementState.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({
        token: TenantManagementState,
        factory: function factory(t) {
          return TenantManagementState.??fac(t);
        }
      });

      TenantManagementState.ctorParameters = function () {
        return [{
          type: TenantService
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(GetTenants)], TenantManagementState.prototype, "get", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(GetTenantById)], TenantManagementState.prototype, "getById", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(DeleteTenant)], TenantManagementState.prototype, "delete", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(CreateTenant)], TenantManagementState.prototype, "add", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(UpdateTenant)], TenantManagementState.prototype, "update", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()], TenantManagementState, "get", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()], TenantManagementState, "getTenantsTotalCount", null);
      TenantManagementState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["State"])({
        name: 'TenantManagementState',
        defaults: {
          result: {},
          selectedItem: {}
        }
      })], TenantManagementState);
      var ??0$4 = "TenantManagement.TenantsComponent"
      /* Tenants */
      ;

      var TenantsComponent = /*#__PURE__*/function () {
        function TenantsComponent(list, injector, confirmationService, tenantService, fb, store) {
          var _this7 = this;

          _classCallCheck(this, TenantsComponent);

          this.list = list;
          this.injector = injector;
          this.confirmationService = confirmationService;
          this.tenantService = tenantService;
          this.fb = fb;
          this.store = store;
          this.selectedModalContent = {};
          this.visibleFeatures = false;
          this.modalBusy = false;
          this.featureManagementKey = "FeatureManagement.FeatureManagementComponent"
          /* FeatureManagement */
          ;

          this.onVisibleFeaturesChange = function (value) {
            _this7.visibleFeatures = value;
          };
        }

        _createClass(TenantsComponent, [{
          key: "hasSelectedTenant",
          get: function get() {
            return Boolean(this.selected.id);
          }
        }, {
          key: "useSharedDatabase",
          get: function get() {
            return this.defaultConnectionStringForm.get('useSharedDatabase').value;
          }
        }, {
          key: "connectionString",
          get: function get() {
            return this.defaultConnectionStringForm.get('defaultConnectionString').value;
          }
        }, {
          key: "isDisabledSaveButton",
          get: function get() {
            if (!this.selectedModalContent) return false;

            if (this.selectedModalContent.type === 'saveConnStr' && this.defaultConnectionStringForm && this.defaultConnectionStringForm.invalid) {
              return true;
            } else if (this.selectedModalContent.type === 'saveTenant' && this.tenantForm && this.tenantForm.invalid) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hookToQuery();
          }
        }, {
          key: "createTenantForm",
          value: function createTenantForm() {
            var data = new _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["FormPropData"](this.injector, this.selected);
            this.tenantForm = Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["generateFormFromProps"])(data);
          }
        }, {
          key: "createDefaultConnectionStringForm",
          value: function createDefaultConnectionStringForm() {
            this.defaultConnectionStringForm = this.fb.group({
              useSharedDatabase: this._useSharedDatabase,
              defaultConnectionString: [this.defaultConnectionString || '']
            });
          }
        }, {
          key: "openModal",
          value: function openModal(title, template, type) {
            this.selectedModalContent = {
              title: title,
              template: template,
              type: type
            };
            this.isModalVisible = true;
          }
        }, {
          key: "addTenant",
          value: function addTenant() {
            this.selected = {};
            this.createTenantForm();
            this.openModal('AbpTenantManagement::NewTenant', this.tenantModalTemplate, 'saveTenant');
          }
        }, {
          key: "editTenant",
          value: function editTenant(id) {
            var _this8 = this;

            this.store.dispatch(new GetTenantById(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('TenantManagementState', 'selectedItem')).subscribe(function (selected) {
              _this8.selected = selected;

              _this8.createTenantForm();

              _this8.openModal('AbpTenantManagement::Edit', _this8.tenantModalTemplate, 'saveTenant');
            });
          }
        }, {
          key: "save",
          value: function save() {
            var type = this.selectedModalContent.type;
            if (!type) return;
            if (type === 'saveTenant') this.saveTenant();else if (type === 'saveConnStr') this.saveConnectionString();
          }
        }, {
          key: "saveConnectionString",
          value: function saveConnectionString() {
            var _this9 = this;

            if (this.modalBusy) return;
            this.modalBusy = true;

            if (this.useSharedDatabase || !this.useSharedDatabase && !this.connectionString) {
              this.tenantService.deleteDefaultConnectionString(this.selected.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                return _this9.modalBusy = false;
              })).subscribe(function () {
                _this9.isModalVisible = false;
              });
            } else {
              this.tenantService.updateDefaultConnectionString(this.selected.id, this.connectionString).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                return _this9.modalBusy = false;
              })).subscribe(function () {
                _this9.isModalVisible = false;
              });
            }
          }
        }, {
          key: "saveTenant",
          value: function saveTenant() {
            var _this10 = this;

            if (!this.tenantForm.valid || this.modalBusy) return;
            this.modalBusy = true;
            this.store.dispatch(this.selected.id ? new UpdateTenant(Object.assign(Object.assign(Object.assign({}, this.selected), this.tenantForm.value), {
              id: this.selected.id
            })) : new CreateTenant(this.tenantForm.value)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this10.modalBusy = false;
            })).subscribe(function () {
              _this10.isModalVisible = false;

              _this10.list.get();
            });
          }
        }, {
          key: "delete",
          value: function _delete(id, name) {
            var _this11 = this;

            this.confirmationService.warn('AbpTenantManagement::TenantDeletionConfirmationMessage', 'AbpTenantManagement::AreYouSure', {
              messageLocalizationParams: [name]
            }).subscribe(function (status) {
              if (status === _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["Confirmation"].Status.confirm) {
                _this11.store.dispatch(new DeleteTenant(id)).subscribe(function () {
                  return _this11.list.get();
                });
              }
            });
          }
        }, {
          key: "hookToQuery",
          value: function hookToQuery() {
            var _this12 = this;

            this.list.hookToQuery(function (query) {
              return _this12.store.dispatch(new GetTenants(query));
            }).subscribe();
          }
        }, {
          key: "onSharedDatabaseChange",
          value: function onSharedDatabaseChange(value) {
            if (!value) {
              setTimeout(function () {
                var defaultConnectionString = document.getElementById('defaultConnectionString');

                if (defaultConnectionString) {
                  defaultConnectionString.focus();
                }
              }, 0);
            }
          }
        }, {
          key: "openFeaturesModal",
          value: function openFeaturesModal(providerKey) {
            var _this13 = this;

            this.providerKey = providerKey;
            setTimeout(function () {
              _this13.visibleFeatures = true;
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

        return TenantsComponent;
      }();

      TenantsComponent.??fac = function TenantsComponent_Factory(t) {
        return new (t || TenantsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](TenantService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
      };

      TenantsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: TenantsComponent,
        selectors: [["abp-tenants"]],
        viewQuery: function TenantsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.tenantModalTemplate = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????ProvidersFeature"]([_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"], {
          provide: _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["EXTENSIONS_IDENTIFIER"],
          useValue: ??0$4
        }])],
        decls: 28,
        vars: 35,
        consts: [["id", "wrapper", 1, "card"], [1, "card-header"], [1, "row"], [1, "col", "col-md-6"], [1, "card-title"], [1, "text-right", "col", "col-md-6"], [3, "record"], [1, "card-body"], ["id", "data-tables-table-filter", 1, "data-tables-filter"], [1, "input-group"], ["type", "search", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], [3, "data", "recordsTotal", "list"], ["size", "md", 3, "visible", "busy", "visibleChange"], ["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], ["tenantModalTemplate", ""], ["providerName", "T", 3, "visible", "providerKey", "visibleChange", 4, "abpReplaceableTemplate"], [4, "ngTemplateOutlet"], ["abpClose", "", "type", "button", 1, "btn", "btn-secondary"], ["iconClass", "fa fa-check", 3, "disabled", "click"], ["validateOnSubmit", "", 3, "formGroup", "ngSubmit"], [3, "selectedRecord"], ["providerName", "T", 3, "visible", "providerKey", "visibleChange"]],
        template: function TenantsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](6, "abpLocalization");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](8, "abp-page-toolbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function TenantsComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.list.filter = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](14, "abpLocalization");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "abp-extensible-table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](16, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](17, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "abp-modal", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("visibleChange", function TenantsComponent_Template_abp_modal_visibleChange_18_listener($event) {
              return ctx.isModalVisible = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](19, TenantsComponent_ng_template_19_Template, 3, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](21, TenantsComponent_ng_template_21_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](23, TenantsComponent_ng_template_23_Template, 6, 7, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](25, TenantsComponent_ng_template_25_Template, 2, 2, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](27, TenantsComponent_abp_feature_management_27_Template, 1, 2, "abp-feature-management", 17);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](6, 10, "AbpTenantManagement::Tenants"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("record", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](9, 12, ctx.data$));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](14, 14, "AbpUi::PagerSearch"))("ngModel", ctx.list.filter);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](16, 16, ctx.data$))("recordsTotal", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](17, 18, ctx.totalCount$))("list", ctx.list);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("visible", ctx.isModalVisible)("busy", ctx.modalBusy);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("abpReplaceableTemplate", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction3"](31, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction3"](25, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](20, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](21, _c2, ctx.providerKey), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](23, _c3, ctx.visibleFeatures)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](29, _c5, ctx.onVisibleFeaturesChange), ctx.featureManagementKey));
          }
        },
        directives: [_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["PageToolbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["ExtensibleTableComponent"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgTemplateOutlet"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ModalCloseDirective"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["FormSubmitDirective"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["ValidationGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["ExtensibleFormComponent"], _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_8__["FeatureManagementComponent"]],
        pipes: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
        encapsulation: 2
      });

      TenantsComponent.ctorParameters = function () {
        return [{
          type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
        }, {
          type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]
        }, {
          type: TenantService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      };

      TenantsComponent.propDecorators = {
        tenantModalTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['tenantModalTemplate']
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(TenantManagementState.get)], TenantsComponent.prototype, "data$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(TenantManagementState.getTenantsTotalCount)], TenantsComponent.prototype, "totalCount$", void 0);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](TenantService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
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
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](TenantManagementState, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
        }], function () {
          return [{
            type: TenantService
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](TenantsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'abp-tenants',
            template: "<div id=\"wrapper\" class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"row\">\n      <div class=\"col col-md-6\">\n        <h5 class=\"card-title\">{{ 'AbpTenantManagement::Tenants' | abpLocalization }}</h5>\n      </div>\n      <div class=\"text-right col col-md-6\">\n        <abp-page-toolbar [record]=\"data$ | async\"></abp-page-toolbar>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\">\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\n      <div class=\"input-group\">\n        <input\n          type=\"search\"\n          class=\"form-control\"\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\n          [(ngModel)]=\"list.filter\"\n        />\n      </div>\n    </div>\n\n    <abp-extensible-table\n      [data]=\"data$ | async\"\n      [recordsTotal]=\"totalCount$ | async\"\n      [list]=\"list\"\n    ></abp-extensible-table>\n  </div>\n</div>\n\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\n  <ng-template #abpHeader>\n    <h3>{{ selectedModalContent.title | abpLocalization }}</h3>\n  </ng-template>\n\n  <ng-template #abpBody>\n    <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\n  </ng-template>\n\n  <ng-template #abpFooter>\n    <button abpClose type=\"button\" class=\"btn btn-secondary\">\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\n    </button>\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"isDisabledSaveButton\">{{\n      'AbpTenantManagement::Save' | abpLocalization\n    }}</abp-button>\n  </ng-template>\n</abp-modal>\n\n<ng-template #tenantModalTemplate>\n  <form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" validateOnSubmit>\n    <abp-extensible-form [selectedRecord]=\"selected\"></abp-extensible-form>\n  </form>\n</ng-template>\n\n<abp-feature-management\n  *abpReplaceableTemplate=\"{\n    inputs: {\n      providerName: { value: 'T' },\n      providerKey: { value: providerKey },\n      visible: { value: visibleFeatures, twoWay: true }\n    },\n    outputs: { visibleChange: onVisibleFeaturesChange },\n    componentKey: featureManagementKey\n  }\"\n  [(visible)]=\"visibleFeatures\"\n  providerName=\"T\"\n  [providerKey]=\"providerKey\"\n>\n</abp-feature-management>\n",
            providers: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"], {
              provide: _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["EXTENSIONS_IDENTIFIER"],
              useValue: ??0$4
            }]
          }]
        }], function () {
          return [{
            type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
          }, {
            type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]
          }, {
            type: TenantService
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }, {
            type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
          }];
        }, {
          tenantModalTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['tenantModalTemplate']
          }]
        });
      })();

      var ??0$3 = function ??0$3(data) {
        var component = data.getInjected(TenantsComponent);
        component.editTenant(data.record.id);
      },
          ??1$2 = function ??1$2(data) {
        var component = data.getInjected(TenantsComponent);
        component.openFeaturesModal(data.record.id);
      },
          ??2$1 = function ??2$1(data) {
        var component = data.getInjected(TenantsComponent);
        component["delete"](data.record.id, data.record.name);
      };

      var DEFAULT_TENANTS_ENTITY_ACTIONS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["EntityAction"].createMany([{
        text: 'AbpTenantManagement::Edit',
        action: ??0$3,
        permission: 'AbpTenantManagement.Tenants.Update'
      }, {
        text: 'AbpTenantManagement::Permission:ManageFeatures',
        action: ??1$2,
        permission: 'AbpTenantManagement.Tenants.ManageFeatures'
      }, {
        text: 'AbpTenantManagement::Delete',
        action: ??2$1,
        permission: 'AbpTenantManagement.Tenants.Delete'
      }]);

      var DEFAULT_TENANTS_ENTITY_PROPS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["EntityProp"].createMany([{
        type: "string"
        /* String */
        ,
        name: 'name',
        displayName: 'AbpTenantManagement::TenantName',
        sortable: true
      }]);

      var ??0$2 = function ??0$2() {
        return [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256)];
      },
          ??1$1 = function ??1$1() {
        return [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email];
      },
          ??2 = function ??2(data) {
        return [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required].concat(_toConsumableArray(Object(_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["getPasswordValidators"])({
          get: data.getInjected
        })));
      };

      var DEFAULT_TENANTS_CREATE_FORM_PROPS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["FormProp"].createMany([{
        type: "string"
        /* String */
        ,
        name: 'name',
        id: 'name',
        displayName: 'AbpTenantManagement::TenantName',
        validators: ??0$2
      }, {
        type: "email"
        /* Email */
        ,
        name: 'adminEmailAddress',
        displayName: 'AbpTenantManagement::DisplayName:AdminEmailAddress',
        id: 'admin-email-address',
        validators: ??1$1
      }, {
        type: "password"
        /* Password */
        ,
        name: 'adminPassword',
        displayName: 'AbpTenantManagement::DisplayName:AdminPassword',
        id: 'admin-password',
        autocomplete: 'new-password',
        validators: ??2
      }]);

      var DEFAULT_TENANTS_EDIT_FORM_PROPS = DEFAULT_TENANTS_CREATE_FORM_PROPS.slice(0, 1);

      var ??0$1 = function ??0$1(data) {
        var component = data.getInjected(TenantsComponent);
        component.openFeaturesModal(null);
      },
          ??1 = function ??1(data) {
        var component = data.getInjected(TenantsComponent);
        component.addTenant();
      };

      var DEFAULT_TENANTS_TOOLBAR_ACTIONS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["ToolbarAction"].createMany([{
        text: 'AbpTenantManagement::ManageHostFeatures',
        action: ??0$1,
        permission: 'FeatureManagement.ManageHostFeatures',
        icon: 'fa fa-cog'
      }, {
        text: 'AbpTenantManagement::NewTenant',
        action: ??1,
        permission: 'AbpTenantManagement.Tenants.Create',
        icon: 'fa fa-plus'
      }]);

      var DEFAULT_TENANT_MANAGEMENT_ENTITY_ACTIONS = _defineProperty({}, "TenantManagement.TenantsComponent"
      /* Tenants */
      , DEFAULT_TENANTS_ENTITY_ACTIONS);

      var DEFAULT_TENANT_MANAGEMENT_TOOLBAR_ACTIONS = _defineProperty({}, "TenantManagement.TenantsComponent"
      /* Tenants */
      , DEFAULT_TENANTS_TOOLBAR_ACTIONS);

      var DEFAULT_TENANT_MANAGEMENT_ENTITY_PROPS = _defineProperty({}, "TenantManagement.TenantsComponent"
      /* Tenants */
      , DEFAULT_TENANTS_ENTITY_PROPS);

      var DEFAULT_TENANT_MANAGEMENT_CREATE_FORM_PROPS = _defineProperty({}, "TenantManagement.TenantsComponent"
      /* Tenants */
      , DEFAULT_TENANTS_CREATE_FORM_PROPS);

      var DEFAULT_TENANT_MANAGEMENT_EDIT_FORM_PROPS = _defineProperty({}, "TenantManagement.TenantsComponent"
      /* Tenants */
      , DEFAULT_TENANTS_EDIT_FORM_PROPS);

      var TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS');
      var TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS');
      var TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS');
      var TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS');
      var TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS');

      var TenantManagementExtensionsGuard = /*#__PURE__*/function () {
        function TenantManagementExtensionsGuard(injector) {
          _classCallCheck(this, TenantManagementExtensionsGuard);

          this.injector = injector;
        }

        _createClass(TenantManagementExtensionsGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var extensions = this.injector.get(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["ExtensionsService"]);
            var actionContributors = this.injector.get(TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS, null) || {};
            var toolbarContributors = this.injector.get(TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS, null) || {};
            var propContributors = this.injector.get(TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS, null) || {};
            var createFormContributors = this.injector.get(TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS, null) || {};
            var editFormContributors = this.injector.get(TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS, null) || {};
            var configState = this.injector.get(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigStateService"]);
            return Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["getObjectExtensionEntitiesFromStore"])(configState, 'TenantManagement').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (entities) {
              return _defineProperty({}, "TenantManagement.TenantsComponent"
              /* Tenants */
              , entities.Tenant);
            }), Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["mapEntitiesToContributors"])(configState, 'TenantManagement'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (objectExtensionContributors) {
              Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["mergeWithDefaultActions"])(extensions.entityActions, DEFAULT_TENANT_MANAGEMENT_ENTITY_ACTIONS, actionContributors);
              Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["mergeWithDefaultActions"])(extensions.toolbarActions, DEFAULT_TENANT_MANAGEMENT_TOOLBAR_ACTIONS, toolbarContributors);
              Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["mergeWithDefaultProps"])(extensions.entityProps, DEFAULT_TENANT_MANAGEMENT_ENTITY_PROPS, objectExtensionContributors.prop, propContributors);
              Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["mergeWithDefaultProps"])(extensions.createFormProps, DEFAULT_TENANT_MANAGEMENT_CREATE_FORM_PROPS, objectExtensionContributors.createForm, createFormContributors);
              Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["mergeWithDefaultProps"])(extensions.editFormProps, DEFAULT_TENANT_MANAGEMENT_EDIT_FORM_PROPS, objectExtensionContributors.editForm, editFormContributors);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mapTo"])(true));
          }
        }]);

        return TenantManagementExtensionsGuard;
      }();

      TenantManagementExtensionsGuard.??fac = function TenantManagementExtensionsGuard_Factory(t) {
        return new (t || TenantManagementExtensionsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]));
      };

      TenantManagementExtensionsGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({
        token: TenantManagementExtensionsGuard,
        factory: TenantManagementExtensionsGuard.??fac
      });

      TenantManagementExtensionsGuard.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](TenantManagementExtensionsGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
          }];
        }, null);
      })();

      var TenantManagementStateService = /*#__PURE__*/function () {
        function TenantManagementStateService(store) {
          _classCallCheck(this, TenantManagementStateService);

          this.store = store;
        }

        _createClass(TenantManagementStateService, [{
          key: "get",
          value: function get() {
            return this.store.selectSnapshot(TenantManagementState.get);
          }
        }, {
          key: "getTenantsTotalCount",
          value: function getTenantsTotalCount() {
            return this.store.selectSnapshot(TenantManagementState.getTenantsTotalCount);
          }
        }, {
          key: "dispatchGetTenants",
          value: function dispatchGetTenants() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return this.store.dispatch(_construct(GetTenants, args));
          }
        }, {
          key: "dispatchGetTenantById",
          value: function dispatchGetTenantById() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return this.store.dispatch(_construct(GetTenantById, args));
          }
        }, {
          key: "dispatchCreateTenant",
          value: function dispatchCreateTenant() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            return this.store.dispatch(_construct(CreateTenant, args));
          }
        }, {
          key: "dispatchUpdateTenant",
          value: function dispatchUpdateTenant() {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            return this.store.dispatch(_construct(UpdateTenant, args));
          }
        }, {
          key: "dispatchDeleteTenant",
          value: function dispatchDeleteTenant() {
            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            return this.store.dispatch(_construct(DeleteTenant, args));
          }
        }]);

        return TenantManagementStateService;
      }();

      TenantManagementStateService.??fac = function TenantManagementStateService_Factory(t) {
        return new (t || TenantManagementStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
      };

      TenantManagementStateService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({
        factory: function TenantManagementStateService_Factory() {
          return new TenantManagementStateService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
        },
        token: TenantManagementStateService,
        providedIn: "root"
      });

      TenantManagementStateService.ctorParameters = function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](TenantManagementStateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
          }];
        }, null);
      })();

      var ??0 = {
        requiredPolicy: 'AbpTenantManagement.Tenants',
        replaceableComponent: {
          key: "TenantManagement.TenantsComponent"
          /* Tenants */
          ,
          defaultComponent: TenantsComponent
        }
      };
      var routes = [{
        path: '',
        redirectTo: 'tenants',
        pathMatch: 'full'
      }, {
        path: '',
        component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["DynamicLayoutComponent"],
        canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["PermissionGuard"], TenantManagementExtensionsGuard],
        children: [{
          path: 'tenants',
          component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
          data: ??0
        }]
      }];

      var TenantManagementRoutingModule = function TenantManagementRoutingModule() {
        _classCallCheck(this, TenantManagementRoutingModule);
      };

      TenantManagementRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: TenantManagementRoutingModule
      });
      TenantManagementRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        factory: function TenantManagementRoutingModule_Factory(t) {
          return new (t || TenantManagementRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](TenantManagementRoutingModule, {
          imports: function imports() {
            return [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]];
          },
          exports: function exports() {
            return [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](TenantManagementRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
          }]
        }], null, null);
      })();

      var TenantManagementModule = /*#__PURE__*/function () {
        function TenantManagementModule() {
          _classCallCheck(this, TenantManagementModule);
        }

        _createClass(TenantManagementModule, null, [{
          key: "forChild",
          value: function forChild() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: TenantManagementModule,
              providers: [{
                provide: TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
                useValue: options.entityActionContributors
              }, {
                provide: TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
                useValue: options.toolbarActionContributors
              }, {
                provide: TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
                useValue: options.entityPropContributors
              }, {
                provide: TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS,
                useValue: options.createFormPropContributors
              }, {
                provide: TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS,
                useValue: options.editFormPropContributors
              }, TenantManagementExtensionsGuard]
            };
          }
        }, {
          key: "forLazy",
          value: function forLazy() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["LazyModuleFactory"](TenantManagementModule.forChild(options));
          }
        }]);

        return TenantManagementModule;
      }();

      TenantManagementModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: TenantManagementModule
      });
      TenantManagementModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        factory: function TenantManagementModule_Factory(t) {
          return new (t || TenantManagementModule)();
        },
        imports: [[TenantManagementRoutingModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forFeature([TenantManagementState]), _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["NgxValidateCoreModule"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"], _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_8__["FeatureManagementModule"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["UiExtensionsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](TenantManagementModule, {
          declarations: function declarations() {
            return [TenantsComponent];
          },
          imports: function imports() {
            return [TenantManagementRoutingModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["??bc"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["NgxValidateCoreModule"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"], _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_8__["FeatureManagementModule"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["UiExtensionsModule"]];
          },
          exports: function exports() {
            return [TenantsComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](TenantManagementModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            declarations: [TenantsComponent],
            exports: [TenantsComponent],
            imports: [TenantManagementRoutingModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forFeature([TenantManagementState]), _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["NgxValidateCoreModule"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"], _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_8__["FeatureManagementModule"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["UiExtensionsModule"]]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=abp-ng.tenant-management.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=abp-ng-tenant-management-es5.js.map