(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["abp-ng-tenant-management"],{

/***/ "3erh":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@abp/ng.feature-management/__ivy_ngcc__/fesm2015/abp-ng.feature-management.js ***!
  \****************************************************************************************************/
/*! exports provided: FeatureManagementComponent, FeatureManagementModule, FeaturesService, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementComponent", function() { return FeatureManagementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementModule", function() { return FeatureManagementModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesService", function() { return FeaturesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FeatureManagementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return FeaturesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return FreeTextInputDirective; });
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/ng.core */ "HmNo");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.theme.shared */ "1REP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

















function FeatureManagementComponent_abp_modal_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "abpLocalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "AbpFeatureManagement::Features"));
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_1_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return feature_r15.value = $event; })("ngModelChange", function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_1_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5); return ctx_r25.onCheckboxClick($event, feature_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_1_ng_container_5_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", feature_r15.name)("ngModel", feature_r15.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("htmlFor", feature_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](feature_r15.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, feature_r15.description));
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_2_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return feature_r15.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_2_ng_container_5_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("htmlFor", feature_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](feature_r15.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", feature_r15.name)("ngModel", feature_r15.value)("abpFeatureManagementFreeText", feature_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, feature_r15.description));
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_ng_container_1_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "abpLocalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", item_r36.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, (item_r36.displayText == null ? null : item_r36.displayText.resourceName) + "::" + (item_r36.displayText == null ? null : item_r36.displayText.name)), " ");
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_ng_container_1_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; return feature_r15.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_ng_container_1_option_5_Template, 3, 4, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_ng_container_1_ng_container_6_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("htmlFor", feature_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](feature_r15.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", feature_r15.name)("ngModel", feature_r15.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", feature_r15.valueType.itemSource == null ? null : feature_r15.valueType.itemSource.items)("ngForTrackBy", ctx_r33.track.by("value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, feature_r15.description));
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_ng_container_1_Template, 7, 10, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", feature_r15.valueType.itemSource == null ? null : feature_r15.valueType.itemSource.items == null ? null : feature_r15.valueType.itemSource.items.length);
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const feature_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](feature_r15.displayName);
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_Template_div_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5); return ctx_r43.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_1_Template, 6, 8, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_2_Template, 6, 9, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_3_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_ng_container_4_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", feature_r15.style)("ngSwitch", feature_r15.valueType == null ? null : feature_r15.valueType.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r14.valueTypes.ToggleStringValueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r14.valueTypes.FreeTextStringValueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r14.valueTypes.SelectionStringValueType);
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_div_3_Template, 5, 5, "div", 18);
} if (rf & 2) {
    const group_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r13.selectedGroupDisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r13.features[group_r12.name])("ngForTrackBy", ctx_r13.track.by("id"));
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_ng_template_3_Template, 4, 3, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", group_r12.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](group_r12.displayName);
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_ng_template_5_small_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const description_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](description_r46);
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FeatureManagementComponent_abp_modal_0_ng_template_3_ng_template_5_small_0_Template, 2, 1, "small", 33);
} if (rf & 2) {
    const description_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", description_r46);
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "abpLocalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "AbpFeatureManagement::NoFeatureFoundMessage"), " ");
} }
function FeatureManagementComponent_abp_modal_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeIdChange", function FeatureManagementComponent_abp_modal_0_ng_template_3_Template_ul_activeIdChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r49.selectedGroupDisplayName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FeatureManagementComponent_abp_modal_0_ng_template_3_li_4_Template, 4, 2, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FeatureManagementComponent_abp_modal_0_ng_template_3_ng_template_5_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, FeatureManagementComponent_abp_modal_0_ng_template_3_div_9_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeId", ctx_r4.selectedGroupDisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.groups)("ngForTrackBy", ctx_r4.track.by("name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.groups.length);
} }
function FeatureManagementComponent_abp_modal_0_ng_template_5_abp_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "abp-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeatureManagementComponent_abp_modal_0_ng_template_5_abp_button_3_Template_abp_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r52.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "abpLocalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r51.modalBusy);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "AbpFeatureManagement::Save"), " ");
} }
function FeatureManagementComponent_abp_modal_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "abpLocalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FeatureManagementComponent_abp_modal_0_ng_template_5_abp_button_3_Template, 3, 4, "abp-button", 37);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "AbpFeatureManagement::Cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.groups.length);
} }
function FeatureManagementComponent_abp_modal_0_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "abp-modal", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function FeatureManagementComponent_abp_modal_0_Template_abp_modal_visibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r54.visible = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FeatureManagementComponent_abp_modal_0_ng_template_1_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FeatureManagementComponent_abp_modal_0_ng_template_3_Template, 10, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FeatureManagementComponent_abp_modal_0_ng_template_5_Template, 4, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx_r0.visible)("busy", ctx_r0.modalBusy);
} }
class FeaturesService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'AbpFeatureManagement';
        this.get = (providerName, providerKey) => this.restService.request({
            method: 'GET',
            url: '/api/feature-management/features',
            params: { providerName, providerKey },
        }, { apiName: this.apiName });
        this.update = (providerName, providerKey, input) => this.restService.request({
            method: 'PUT',
            url: '/api/feature-management/features',
            params: { providerName, providerKey },
            body: input,
        }, { apiName: this.apiName });
    }
}
FeaturesService.ɵfac = function FeaturesService_Factory(t) { return new (t || FeaturesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"])); };
FeaturesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function FeaturesService_Factory() { return new FeaturesService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"])); }, token: FeaturesService, providedIn: "root" });
FeaturesService.ctorParameters = () => [
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FeaturesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"] }]; }, null); })();

var ValueTypes;
(function (ValueTypes) {
    ValueTypes["ToggleStringValueType"] = "ToggleStringValueType";
    ValueTypes["FreeTextStringValueType"] = "FreeTextStringValueType";
    ValueTypes["SelectionStringValueType"] = "SelectionStringValueType";
})(ValueTypes || (ValueTypes = {}));
class FeatureManagementComponent {
    constructor(track, service, store, configState, appConfigService) {
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
    get visible() {
        return this._visible;
    }
    set visible(value) {
        if (this._visible === value)
            return;
        this._visible = value;
        this.visibleChange.emit(value);
        if (value)
            this.openModal();
    }
    openModal() {
        if (!this.providerName) {
            throw new Error('providerName is required.');
        }
        this.getFeatures();
    }
    getFeatures() {
        this.service.get(this.providerName, this.providerKey).subscribe(res => {
            var _a;
            if (!((_a = res.groups) === null || _a === void 0 ? void 0 : _a.length))
                return;
            this.groups = res.groups.map(({ name, displayName }) => ({ name, displayName }));
            this.selectedGroupDisplayName = this.groups[0].displayName;
            this.features = res.groups.reduce((acc, val) => (Object.assign(Object.assign({}, acc), { [val.name]: mapFeatures(val.features, document.body.dir) })), {});
        });
    }
    save() {
        if (this.modalBusy)
            return;
        const changedFeatures = [];
        Object.keys(this.features).forEach(key => {
            this.features[key].forEach(feature => {
                if (feature.value !== feature.initialValue)
                    changedFeatures.push({ name: feature.name, value: `${feature.value}` });
            });
        });
        if (!changedFeatures.length) {
            this.visible = false;
            return;
        }
        this.modalBusy = true;
        this.service
            .update(this.providerName, this.providerKey, { features: changedFeatures })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => (this.modalBusy = false)))
            .subscribe(() => {
            this.visible = false;
            if (!this.providerKey) {
                // to refresh host's features
                this.appConfigService
                    .get()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => this.configState.setState(res)))
                    .subscribe();
            }
        });
    }
    onCheckboxClick(val, feature) {
        if (val) {
            this.checkToggleAncestors(feature);
        }
        else {
            this.uncheckToggleDescendants(feature);
        }
    }
    uncheckToggleDescendants(feature) {
        this.findAllDescendantsOfByType(feature, ValueTypes.ToggleStringValueType).forEach(node => this.setFeatureValue(node, false));
    }
    checkToggleAncestors(feature) {
        this.findAllAncestorsOfByType(feature, ValueTypes.ToggleStringValueType).forEach(node => this.setFeatureValue(node, true));
    }
    findAllAncestorsOfByType(feature, type) {
        let parent = this.findParentByType(feature, type);
        const ancestors = [];
        while (parent) {
            ancestors.push(parent);
            parent = this.findParentByType(parent, type);
        }
        return ancestors;
    }
    findAllDescendantsOfByType(feature, type) {
        const descendants = [];
        const queue = [feature];
        while (queue.length) {
            const node = queue.pop();
            const newDescendants = this.findChildrenByType(node, type);
            descendants.push(...newDescendants);
            queue.push(...newDescendants);
        }
        return descendants;
    }
    findParentByType(feature, type) {
        return this.getCurrentGroup().find(f => f.valueType.name === type && f.name === feature.parentName);
    }
    findChildrenByType(feature, type) {
        return this.getCurrentGroup().filter(f => f.valueType.name === type && f.parentName === feature.name);
    }
    getCurrentGroup() {
        var _a;
        return (_a = this.features[this.selectedGroupDisplayName]) !== null && _a !== void 0 ? _a : [];
    }
    setFeatureValue(feature, val) {
        feature.value = val;
    }
}
FeatureManagementComponent.ɵfac = function FeatureManagementComponent_Factory(t) { return new (t || FeatureManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["TrackByService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](FeaturesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["AbpApplicationConfigurationService"])); };
FeatureManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FeatureManagementComponent, selectors: [["abp-feature-management"]], inputs: { visible: "visible", providerKey: "providerKey", providerName: "providerName" }, outputs: { visibleChange: "visibleChange" }, exportAs: ["abpFeatureManagement"], decls: 1, vars: 1, consts: [["size", "lg", 3, "visible", "busy", "visibleChange", 4, "ngIf"], ["size", "lg", 3, "visible", "busy", "visibleChange"], ["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], [1, "row"], [1, "col-md-4"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["descTmp", ""], [1, "col-md-8"], [3, "ngbNavOutlet"], ["class", "mx-3", 4, "ngIf"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", "mb-3"], ["class", "mt-2", 3, "ngStyle", "ngSwitch", "keyup.enter", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mt-2", 3, "ngStyle", "ngSwitch", "keyup.enter"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "custom-checkbox", "custom-control"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "ngModel", "ngModelChange"], [1, "custom-control-label", 3, "htmlFor"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "form-group"], [3, "htmlFor"], ["type", "text", 1, "form-control", 3, "id", "ngModel", "abpFeatureManagementFreeText", "ngModelChange"], [4, "ngIf"], [1, "form-control", "custom-select", 3, "id", "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngValue"], ["class", "form-text text-muted", 4, "ngIf"], [1, "form-text", "text-muted"], [1, "mx-3"], ["abpClose", "", "type", "button", 1, "btn", "btn-secondary"], ["iconClass", "fa fa-check", 3, "disabled", "click", 4, "ngIf"], ["iconClass", "fa fa-check", 3, "disabled", "click"]], template: function FeatureManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FeatureManagementComponent_abp_modal_0_Template, 7, 2, "abp-modal", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNav"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], FreeTextInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ModalCloseDirective"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]]; }, pipes: function () { return [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["LocalizationPipe"]]; }, encapsulation: 2 });
FeatureManagementComponent.ctorParameters = () => [
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["TrackByService"] },
    { type: FeaturesService },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigStateService"] },
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["AbpApplicationConfigurationService"] }
];
FeatureManagementComponent.propDecorators = {
    providerKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    providerName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    visibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FeatureManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'abp-feature-management',
                template: "<abp-modal *ngIf=\"visible\" size=\"lg\" [(visible)]=\"visible\" [busy]=\"modalBusy\">\n  <ng-template #abpHeader>\n    <h3>{{ 'AbpFeatureManagement::Features' | abpLocalization }}</h3>\n  </ng-template>\n\n  <ng-template #abpBody>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <ul\n          ngbNav\n          #nav=\"ngbNav\"\n          [(activeId)]=\"selectedGroupDisplayName\"\n          class=\"nav-pills\"\n          orientation=\"vertical\"\n        >\n          <li\n            *ngFor=\"let group of groups; trackBy: track.by('name')\"\n            [ngbNavItem]=\"group.displayName\"\n          >\n            <a ngbNavLink>{{ group.displayName }}</a>\n            <ng-template ngbNavContent>\n              <h4>{{ selectedGroupDisplayName }}</h4>\n              <hr class=\"mt-2 mb-3\" />\n\n              <div\n                class=\"mt-2\"\n                *ngFor=\"let feature of features[group.name]; let i = index; trackBy: track.by('id')\"\n                [ngStyle]=\"feature.style\"\n                [ngSwitch]=\"feature.valueType?.name\"\n                (keyup.enter)=\"save()\"\n              >\n                <ng-container *ngSwitchCase=\"valueTypes.ToggleStringValueType\">\n                  <div class=\"custom-checkbox custom-control\">\n                    <input\n                      class=\"custom-control-input\"\n                      type=\"checkbox\"\n                      [id]=\"feature.name\"\n                      [(ngModel)]=\"feature.value\"\n                      (ngModelChange)=\"onCheckboxClick($event, feature)\"\n                    />\n\n                    <label class=\"custom-control-label\" [htmlFor]=\"feature.name\">{{\n                      feature.displayName\n                    }}</label>\n                    <ng-container\n                      *ngTemplateOutlet=\"descTmp; context: { $implicit: feature.description }\"\n                    ></ng-container>\n                  </div>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"valueTypes.FreeTextStringValueType\">\n                  <div class=\"form-group\">\n                    <label [htmlFor]=\"feature.name\">{{ feature.displayName }}</label>\n                    <input\n                      class=\"form-control\"\n                      type=\"text\"\n                      [id]=\"feature.name\"\n                      [(ngModel)]=\"feature.value\"\n                      [abpFeatureManagementFreeText]=\"feature\"\n                    />\n\n                    <ng-container\n                      *ngTemplateOutlet=\"descTmp; context: { $implicit: feature.description }\"\n                    ></ng-container>\n                  </div>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"valueTypes.SelectionStringValueType\">\n                  <ng-container *ngIf=\"feature.valueType.itemSource?.items?.length\">\n                    <div class=\"form-group\">\n                      <label [htmlFor]=\"feature.name\">{{ feature.displayName }}</label>\n                      <select\n                        class=\"form-control custom-select\"\n                        [id]=\"feature.name\"\n                        [(ngModel)]=\"feature.value\"\n                      >\n                        <option\n                          *ngFor=\"\n                            let item of feature.valueType.itemSource?.items;\n                            trackBy: track.by('value')\n                          \"\n                          [ngValue]=\"item.value\"\n                        >\n                          {{\n                            item.displayText?.resourceName + '::' + item.displayText?.name\n                              | abpLocalization\n                          }}\n                        </option>\n                      </select>\n                      <ng-container\n                        *ngTemplateOutlet=\"descTmp; context: { $implicit: feature.description }\"\n                      ></ng-container>\n                    </div>\n                  </ng-container>\n                </ng-container>\n                <ng-container *ngSwitchDefault>{{ feature.displayName }}</ng-container>\n              </div>\n            </ng-template>\n          </li>\n        </ul>\n      </div>\n\n      <ng-template #descTmp let-description>\n        <small *ngIf=\"description\" class=\"form-text text-muted\">{{ description }}</small>\n      </ng-template>\n\n      <div class=\"col-md-8\"><div [ngbNavOutlet]=\"nav\"></div></div>\n\n      <div class=\"mx-3\" *ngIf=\"!groups.length\">\n        {{ 'AbpFeatureManagement::NoFeatureFoundMessage' | abpLocalization }}\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #abpFooter>\n    <button abpClose type=\"button\" class=\"btn btn-secondary\">\n      {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\n    </button>\n    <abp-button\n      *ngIf=\"groups.length\"\n      iconClass=\"fa fa-check\"\n      [disabled]=\"modalBusy\"\n      (click)=\"save()\"\n    >\n      {{ 'AbpFeatureManagement::Save' | abpLocalization }}\n    </abp-button>\n  </ng-template>\n</abp-modal>\n",
                exportAs: 'abpFeatureManagement'
            }]
    }], function () { return [{ type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["TrackByService"] }, { type: FeaturesService }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigStateService"] }, { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["AbpApplicationConfigurationService"] }]; }, { visibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], providerKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], providerName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
function mapFeatures(features, dir) {
    const margin = `margin-${dir === 'rtl' ? 'right' : 'left'}.px`;
    return features.map(feature => {
        var _a;
        const value = ((_a = feature.valueType) === null || _a === void 0 ? void 0 : _a.name) === ValueTypes.ToggleStringValueType
            ? (feature.value || '').toLowerCase() === 'true'
            : feature.value;
        return Object.assign(Object.assign({}, feature), { value, initialValue: value, style: { [margin]: feature.depth * 20 } });
    });
}

const INPUT_TYPES = {
    numeric: 'number',
    default: 'text',
};
class FreeTextInputDirective {
    set feature(val) {
        this._feature = val;
        this.setInputType();
    }
    get feature() {
        return this._feature;
    }
    setInputType() {
        var _a, _b, _c, _d;
        const validatorType = (_c = (_b = (_a = this.feature) === null || _a === void 0 ? void 0 : _a.valueType) === null || _b === void 0 ? void 0 : _b.validator) === null || _c === void 0 ? void 0 : _c.name.toLowerCase();
        this.type = (_d = INPUT_TYPES[validatorType]) !== null && _d !== void 0 ? _d : INPUT_TYPES.default;
    }
}
FreeTextInputDirective.ɵfac = function FreeTextInputDirective_Factory(t) { return new (t || FreeTextInputDirective)(); };
FreeTextInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: FreeTextInputDirective, selectors: [["input", "abpFeatureManagementFreeText", ""]], hostVars: 1, hostBindings: function FreeTextInputDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { feature: ["abpFeatureManagementFreeText", "feature"] }, exportAs: ["inputAbpFeatureManagementFreeText"] });
FreeTextInputDirective.propDecorators = {
    feature: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['abpFeatureManagementFreeText',] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['type',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FreeTextInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'input[abpFeatureManagementFreeText]',
                exportAs: 'inputAbpFeatureManagementFreeText'
            }]
    }], null, { feature: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['abpFeatureManagementFreeText']
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['type']
        }] }); })();

const exported = [FeatureManagementComponent, FreeTextInputDirective];
class FeatureManagementModule {
}
FeatureManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FeatureManagementModule });
FeatureManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function FeatureManagementModule_Factory(t) { return new (t || FeatureManagementModule)(); }, imports: [[_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forFeature([])]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FeatureManagementModule, { declarations: function () { return [FeatureManagementComponent, FreeTextInputDirective]; }, imports: function () { return [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]]; }, exports: function () { return [FeatureManagementComponent, FreeTextInputDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FeatureManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [...exported],
                imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forFeature([])],
                exports: [...exported]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=abp-ng.feature-management.js.map

/***/ }),

/***/ "6MLJ":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@abp/ng.tenant-management/__ivy_ngcc__/fesm2015/abp-ng.tenant-management.js ***!
  \**************************************************************************************************/
/*! exports provided: CreateTenant, DEFAULT_TENANT_MANAGEMENT_CREATE_FORM_PROPS, DEFAULT_TENANT_MANAGEMENT_EDIT_FORM_PROPS, DEFAULT_TENANT_MANAGEMENT_ENTITY_ACTIONS, DEFAULT_TENANT_MANAGEMENT_ENTITY_PROPS, DEFAULT_TENANT_MANAGEMENT_TOOLBAR_ACTIONS, DeleteTenant, GetTenantById, GetTenants, TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS, TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS, TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS, TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS, TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS, TenantManagementExtensionsGuard, TenantManagementModule, TenantManagementState, TenantManagementStateService, TenantService, TenantsComponent, UpdateTenant, ɵ0, ɵa, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTenant", function() { return CreateTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TENANT_MANAGEMENT_CREATE_FORM_PROPS", function() { return DEFAULT_TENANT_MANAGEMENT_CREATE_FORM_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TENANT_MANAGEMENT_EDIT_FORM_PROPS", function() { return DEFAULT_TENANT_MANAGEMENT_EDIT_FORM_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TENANT_MANAGEMENT_ENTITY_ACTIONS", function() { return DEFAULT_TENANT_MANAGEMENT_ENTITY_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TENANT_MANAGEMENT_ENTITY_PROPS", function() { return DEFAULT_TENANT_MANAGEMENT_ENTITY_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TENANT_MANAGEMENT_TOOLBAR_ACTIONS", function() { return DEFAULT_TENANT_MANAGEMENT_TOOLBAR_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTenant", function() { return DeleteTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTenantById", function() { return GetTenantById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTenants", function() { return GetTenants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS", function() { return TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS", function() { return TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS", function() { return TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS", function() { return TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS", function() { return TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementExtensionsGuard", function() { return TenantManagementExtensionsGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementModule", function() { return TenantManagementModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementState", function() { return TenantManagementState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementStateService", function() { return TenantManagementStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantService", function() { return TenantService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantsComponent", function() { return TenantsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTenant", function() { return UpdateTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0$4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TenantsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return TenantManagementState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return TenantService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return GetTenants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return GetTenantById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return CreateTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return UpdateTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return DeleteTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return TenantManagementRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return TenantManagementExtensionsGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return TenantManagementExtensionsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "HmNo");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "1REP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @abp/ng.theme.shared/extensions */ "J7bl");
/* harmony import */ var _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @abp/ng.feature-management */ "3erh");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-validate/core */ "iWZL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");



























const _c0 = ["tenantModalTemplate"];
function TenantsComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "abpLocalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.selectedModalContent.title));
} }
function TenantsComponent_ng_template_21_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function TenantsComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TenantsComponent_ng_template_21_ng_container_0_Template, 1, 0, "ng-container", 18);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.selectedModalContent == null ? null : ctx_r3.selectedModalContent.template);
} }
function TenantsComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "abpLocalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "abp-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TenantsComponent_ng_template_23_Template_abp_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "abpLocalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, "AbpTenantManagement::Cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r5.isDisabledSaveButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, "AbpTenantManagement::Save"));
} }
function TenantsComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function TenantsComponent_ng_template_25_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "abp-extensible-form", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r7.tenantForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectedRecord", ctx_r7.selected);
} }
function TenantsComponent_abp_feature_management_27_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "abp-feature-management", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function TenantsComponent_abp_feature_management_27_Template_abp_feature_management_visibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.visibleFeatures = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx_r8.visibleFeatures)("providerKey", ctx_r8.providerKey);
} }
const _c1 = function () { return { value: "T" }; };
const _c2 = function (a0) { return { value: a0 }; };
const _c3 = function (a0) { return { value: a0, twoWay: true }; };
const _c4 = function (a0, a1, a2) { return { providerName: a0, providerKey: a1, visible: a2 }; };
const _c5 = function (a0) { return { visibleChange: a0 }; };
const _c6 = function (a0, a1, a2) { return { inputs: a0, outputs: a1, componentKey: a2 }; };
class GetTenants {
    constructor(payload) {
        this.payload = payload;
    }
}
GetTenants.type = '[TenantManagement] Get Tenant';
class GetTenantById {
    constructor(payload) {
        this.payload = payload;
    }
}
GetTenantById.type = '[TenantManagement] Get Tenant By Id';
class CreateTenant {
    constructor(payload) {
        this.payload = payload;
    }
}
CreateTenant.type = '[TenantManagement] Create Tenant';
class UpdateTenant {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateTenant.type = '[TenantManagement] Update Tenant';
class DeleteTenant {
    constructor(payload) {
        this.payload = payload;
    }
}
DeleteTenant.type = '[TenantManagement] Delete Tenant';

class TenantService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'AbpTenantManagement';
        this.create = (input) => this.restService.request({
            method: 'POST',
            url: '/api/multi-tenancy/tenants',
            body: input,
        }, { apiName: this.apiName });
        this.delete = (id) => this.restService.request({
            method: 'DELETE',
            url: `/api/multi-tenancy/tenants/${id}`,
        }, { apiName: this.apiName });
        this.deleteDefaultConnectionString = (id) => this.restService.request({
            method: 'DELETE',
            url: `/api/multi-tenancy/tenants/${id}/default-connection-string`,
        }, { apiName: this.apiName });
        this.get = (id) => this.restService.request({
            method: 'GET',
            url: `/api/multi-tenancy/tenants/${id}`,
        }, { apiName: this.apiName });
        this.getDefaultConnectionString = (id) => this.restService.request({
            method: 'GET',
            responseType: 'text',
            url: `/api/multi-tenancy/tenants/${id}/default-connection-string`,
        }, { apiName: this.apiName });
        this.getList = (input) => this.restService.request({
            method: 'GET',
            url: '/api/multi-tenancy/tenants',
            params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
        }, { apiName: this.apiName });
        this.update = (id, input) => this.restService.request({
            method: 'PUT',
            url: `/api/multi-tenancy/tenants/${id}`,
            body: input,
        }, { apiName: this.apiName });
        this.updateDefaultConnectionString = (id, defaultConnectionString) => this.restService.request({
            method: 'PUT',
            url: `/api/multi-tenancy/tenants/${id}/default-connection-string`,
            params: { defaultConnectionString },
        }, { apiName: this.apiName });
    }
}
TenantService.ɵfac = function TenantService_Factory(t) { return new (t || TenantService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"])); };
TenantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ factory: function TenantService_Factory() { return new TenantService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"])); }, token: TenantService, providedIn: "root" });
TenantService.ctorParameters = () => [
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"] }
];

let TenantManagementState = class TenantManagementState {
    constructor(service) {
        this.service = service;
    }
    static get({ result }) {
        return result.items || [];
    }
    static getTenantsTotalCount({ result }) {
        return result.totalCount;
    }
    get({ patchState }, { payload }) {
        return this.service.getList(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(result => patchState({
            result,
        })));
    }
    getById({ patchState }, { payload }) {
        return this.service.get(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(selectedItem => patchState({
            selectedItem,
        })));
    }
    delete(_, { payload }) {
        return this.service.delete(payload);
    }
    add(_, { payload }) {
        return this.service.create(payload);
    }
    update({ getState }, { payload }) {
        return this.service.update(payload.id, Object.assign(Object.assign({}, getState().selectedItem), payload));
    }
};
TenantManagementState.ɵfac = function TenantManagementState_Factory(t) { return new (t || TenantManagementState)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](TenantService)); };
TenantManagementState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TenantManagementState, factory: function (t) { return TenantManagementState.ɵfac(t); } });
TenantManagementState.ctorParameters = () => [
    { type: TenantService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(GetTenants)
], TenantManagementState.prototype, "get", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(GetTenantById)
], TenantManagementState.prototype, "getById", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(DeleteTenant)
], TenantManagementState.prototype, "delete", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(CreateTenant)
], TenantManagementState.prototype, "add", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(UpdateTenant)
], TenantManagementState.prototype, "update", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], TenantManagementState, "get", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], TenantManagementState, "getTenantsTotalCount", null);
TenantManagementState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["State"])({
        name: 'TenantManagementState',
        defaults: { result: {}, selectedItem: {} },
    })
], TenantManagementState);

const ɵ0$4 = "TenantManagement.TenantsComponent" /* Tenants */;
class TenantsComponent {
    constructor(list, injector, confirmationService, tenantService, fb, store) {
        this.list = list;
        this.injector = injector;
        this.confirmationService = confirmationService;
        this.tenantService = tenantService;
        this.fb = fb;
        this.store = store;
        this.selectedModalContent = {};
        this.visibleFeatures = false;
        this.modalBusy = false;
        this.featureManagementKey = "FeatureManagement.FeatureManagementComponent" /* FeatureManagement */;
        this.onVisibleFeaturesChange = (value) => {
            this.visibleFeatures = value;
        };
    }
    get hasSelectedTenant() {
        return Boolean(this.selected.id);
    }
    get useSharedDatabase() {
        return this.defaultConnectionStringForm.get('useSharedDatabase').value;
    }
    get connectionString() {
        return this.defaultConnectionStringForm.get('defaultConnectionString').value;
    }
    get isDisabledSaveButton() {
        if (!this.selectedModalContent)
            return false;
        if (this.selectedModalContent.type === 'saveConnStr' &&
            this.defaultConnectionStringForm &&
            this.defaultConnectionStringForm.invalid) {
            return true;
        }
        else if (this.selectedModalContent.type === 'saveTenant' &&
            this.tenantForm &&
            this.tenantForm.invalid) {
            return true;
        }
        else {
            return false;
        }
    }
    ngOnInit() {
        this.hookToQuery();
    }
    createTenantForm() {
        const data = new _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["FormPropData"](this.injector, this.selected);
        this.tenantForm = Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["generateFormFromProps"])(data);
    }
    createDefaultConnectionStringForm() {
        this.defaultConnectionStringForm = this.fb.group({
            useSharedDatabase: this._useSharedDatabase,
            defaultConnectionString: [this.defaultConnectionString || ''],
        });
    }
    openModal(title, template, type) {
        this.selectedModalContent = {
            title,
            template,
            type,
        };
        this.isModalVisible = true;
    }
    addTenant() {
        this.selected = {};
        this.createTenantForm();
        this.openModal('AbpTenantManagement::NewTenant', this.tenantModalTemplate, 'saveTenant');
    }
    editTenant(id) {
        this.store
            .dispatch(new GetTenantById(id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('TenantManagementState', 'selectedItem'))
            .subscribe(selected => {
            this.selected = selected;
            this.createTenantForm();
            this.openModal('AbpTenantManagement::Edit', this.tenantModalTemplate, 'saveTenant');
        });
    }
    save() {
        const { type } = this.selectedModalContent;
        if (!type)
            return;
        if (type === 'saveTenant')
            this.saveTenant();
        else if (type === 'saveConnStr')
            this.saveConnectionString();
    }
    saveConnectionString() {
        if (this.modalBusy)
            return;
        this.modalBusy = true;
        if (this.useSharedDatabase || (!this.useSharedDatabase && !this.connectionString)) {
            this.tenantService
                .deleteDefaultConnectionString(this.selected.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.modalBusy = false)))
                .subscribe(() => {
                this.isModalVisible = false;
            });
        }
        else {
            this.tenantService
                .updateDefaultConnectionString(this.selected.id, this.connectionString)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.modalBusy = false)))
                .subscribe(() => {
                this.isModalVisible = false;
            });
        }
    }
    saveTenant() {
        if (!this.tenantForm.valid || this.modalBusy)
            return;
        this.modalBusy = true;
        this.store
            .dispatch(this.selected.id
            ? new UpdateTenant(Object.assign(Object.assign(Object.assign({}, this.selected), this.tenantForm.value), { id: this.selected.id }))
            : new CreateTenant(this.tenantForm.value))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.modalBusy = false)))
            .subscribe(() => {
            this.isModalVisible = false;
            this.list.get();
        });
    }
    delete(id, name) {
        this.confirmationService
            .warn('AbpTenantManagement::TenantDeletionConfirmationMessage', 'AbpTenantManagement::AreYouSure', {
            messageLocalizationParams: [name],
        })
            .subscribe((status) => {
            if (status === _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["Confirmation"].Status.confirm) {
                this.store.dispatch(new DeleteTenant(id)).subscribe(() => this.list.get());
            }
        });
    }
    hookToQuery() {
        this.list.hookToQuery(query => this.store.dispatch(new GetTenants(query))).subscribe();
    }
    onSharedDatabaseChange(value) {
        if (!value) {
            setTimeout(() => {
                const defaultConnectionString = document.getElementById('defaultConnectionString');
                if (defaultConnectionString) {
                    defaultConnectionString.focus();
                }
            }, 0);
        }
    }
    openFeaturesModal(providerKey) {
        this.providerKey = providerKey;
        setTimeout(() => {
            this.visibleFeatures = true;
        }, 0);
    }
    sort(data) {
        const { prop, dir } = data.sorts[0];
        this.list.sortKey = prop;
        this.list.sortOrder = dir;
    }
}
TenantsComponent.ɵfac = function TenantsComponent_Factory(t) { return new (t || TenantsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TenantService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
TenantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TenantsComponent, selectors: [["abp-tenants"]], viewQuery: function TenantsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tenantModalTemplate = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"],
            {
                provide: _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["EXTENSIONS_IDENTIFIER"],
                useValue: ɵ0$4
            },
        ])], decls: 28, vars: 35, consts: [["id", "wrapper", 1, "card"], [1, "card-header"], [1, "row"], [1, "col", "col-md-6"], [1, "card-title"], [1, "text-right", "col", "col-md-6"], [3, "record"], [1, "card-body"], ["id", "data-tables-table-filter", 1, "data-tables-filter"], [1, "input-group"], ["type", "search", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], [3, "data", "recordsTotal", "list"], ["size", "md", 3, "visible", "busy", "visibleChange"], ["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], ["tenantModalTemplate", ""], ["providerName", "T", 3, "visible", "providerKey", "visibleChange", 4, "abpReplaceableTemplate"], [4, "ngTemplateOutlet"], ["abpClose", "", "type", "button", 1, "btn", "btn-secondary"], ["iconClass", "fa fa-check", 3, "disabled", "click"], ["validateOnSubmit", "", 3, "formGroup", "ngSubmit"], [3, "selectedRecord"], ["providerName", "T", 3, "visible", "providerKey", "visibleChange"]], template: function TenantsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "abpLocalization");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "abp-page-toolbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TenantsComponent_Template_input_ngModelChange_13_listener($event) { return ctx.list.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "abpLocalization");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "abp-extensible-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "abp-modal", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function TenantsComponent_Template_abp_modal_visibleChange_18_listener($event) { return ctx.isModalVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, TenantsComponent_ng_template_19_Template, 3, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, TenantsComponent_ng_template_21_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, TenantsComponent_ng_template_23_Template, 6, 7, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, TenantsComponent_ng_template_25_Template, 2, 2, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, TenantsComponent_abp_feature_management_27_Template, 1, 2, "abp-feature-management", 17);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 10, "AbpTenantManagement::Tenants"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("record", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 12, ctx.data$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 14, "AbpUi::PagerSearch"))("ngModel", ctx.list.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 16, ctx.data$))("recordsTotal", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 18, ctx.totalCount$))("list", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.isModalVisible)("busy", ctx.modalBusy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("abpReplaceableTemplate", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](31, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](25, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c2, ctx.providerKey), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c3, ctx.visibleFeatures)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](29, _c5, ctx.onVisibleFeaturesChange), ctx.featureManagementKey));
    } }, directives: [_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["PageToolbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["ExtensibleTableComponent"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgTemplateOutlet"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ModalCloseDirective"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["FormSubmitDirective"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["ValidationGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["ExtensibleFormComponent"], _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_8__["FeatureManagementComponent"]], pipes: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], encapsulation: 2 });
TenantsComponent.ctorParameters = () => [
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] },
    { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] },
    { type: TenantService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
TenantsComponent.propDecorators = {
    tenantModalTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['tenantModalTemplate',] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(TenantManagementState.get)
], TenantsComponent.prototype, "data$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(TenantManagementState.getTenantsTotalCount)
], TenantsComponent.prototype, "totalCount$", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TenantService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TenantManagementState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return [{ type: TenantService }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TenantsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'abp-tenants',
                template: "<div id=\"wrapper\" class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"row\">\n      <div class=\"col col-md-6\">\n        <h5 class=\"card-title\">{{ 'AbpTenantManagement::Tenants' | abpLocalization }}</h5>\n      </div>\n      <div class=\"text-right col col-md-6\">\n        <abp-page-toolbar [record]=\"data$ | async\"></abp-page-toolbar>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\">\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\n      <div class=\"input-group\">\n        <input\n          type=\"search\"\n          class=\"form-control\"\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\n          [(ngModel)]=\"list.filter\"\n        />\n      </div>\n    </div>\n\n    <abp-extensible-table\n      [data]=\"data$ | async\"\n      [recordsTotal]=\"totalCount$ | async\"\n      [list]=\"list\"\n    ></abp-extensible-table>\n  </div>\n</div>\n\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\n  <ng-template #abpHeader>\n    <h3>{{ selectedModalContent.title | abpLocalization }}</h3>\n  </ng-template>\n\n  <ng-template #abpBody>\n    <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\n  </ng-template>\n\n  <ng-template #abpFooter>\n    <button abpClose type=\"button\" class=\"btn btn-secondary\">\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\n    </button>\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"isDisabledSaveButton\">{{\n      'AbpTenantManagement::Save' | abpLocalization\n    }}</abp-button>\n  </ng-template>\n</abp-modal>\n\n<ng-template #tenantModalTemplate>\n  <form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" validateOnSubmit>\n    <abp-extensible-form [selectedRecord]=\"selected\"></abp-extensible-form>\n  </form>\n</ng-template>\n\n<abp-feature-management\n  *abpReplaceableTemplate=\"{\n    inputs: {\n      providerName: { value: 'T' },\n      providerKey: { value: providerKey },\n      visible: { value: visibleFeatures, twoWay: true }\n    },\n    outputs: { visibleChange: onVisibleFeaturesChange },\n    componentKey: featureManagementKey\n  }\"\n  [(visible)]=\"visibleFeatures\"\n  providerName=\"T\"\n  [providerKey]=\"providerKey\"\n>\n</abp-feature-management>\n",
                providers: [
                    _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"],
                    {
                        provide: _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["EXTENSIONS_IDENTIFIER"],
                        useValue: ɵ0$4
                    },
                ]
            }]
    }], function () { return [{ type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ListService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] }, { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] }, { type: TenantService }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, { tenantModalTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['tenantModalTemplate']
        }] }); })();

const ɵ0$3 = data => {
    const component = data.getInjected(TenantsComponent);
    component.editTenant(data.record.id);
}, ɵ1$2 = data => {
    const component = data.getInjected(TenantsComponent);
    component.openFeaturesModal(data.record.id);
}, ɵ2$1 = data => {
    const component = data.getInjected(TenantsComponent);
    component.delete(data.record.id, data.record.name);
};
const DEFAULT_TENANTS_ENTITY_ACTIONS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["EntityAction"].createMany([
    {
        text: 'AbpTenantManagement::Edit',
        action: ɵ0$3,
        permission: 'AbpTenantManagement.Tenants.Update',
    },
    {
        text: 'AbpTenantManagement::Permission:ManageFeatures',
        action: ɵ1$2,
        permission: 'AbpTenantManagement.Tenants.ManageFeatures',
    },
    {
        text: 'AbpTenantManagement::Delete',
        action: ɵ2$1,
        permission: 'AbpTenantManagement.Tenants.Delete',
    },
]);

const DEFAULT_TENANTS_ENTITY_PROPS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["EntityProp"].createMany([
    {
        type: "string" /* String */,
        name: 'name',
        displayName: 'AbpTenantManagement::TenantName',
        sortable: true,
    },
]);

const ɵ0$2 = () => [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256)], ɵ1$1 = () => [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email], ɵ2 = data => [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, ...Object(_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["getPasswordValidators"])({ get: data.getInjected })];
const DEFAULT_TENANTS_CREATE_FORM_PROPS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["FormProp"].createMany([
    {
        type: "string" /* String */,
        name: 'name',
        id: 'name',
        displayName: 'AbpTenantManagement::TenantName',
        validators: ɵ0$2,
    },
    {
        type: "email" /* Email */,
        name: 'adminEmailAddress',
        displayName: 'AbpTenantManagement::DisplayName:AdminEmailAddress',
        id: 'admin-email-address',
        validators: ɵ1$1,
    },
    {
        type: "password" /* Password */,
        name: 'adminPassword',
        displayName: 'AbpTenantManagement::DisplayName:AdminPassword',
        id: 'admin-password',
        autocomplete: 'new-password',
        validators: ɵ2,
    },
]);
const DEFAULT_TENANTS_EDIT_FORM_PROPS = DEFAULT_TENANTS_CREATE_FORM_PROPS.slice(0, 1);

const ɵ0$1 = data => {
    const component = data.getInjected(TenantsComponent);
    component.openFeaturesModal(null);
}, ɵ1 = data => {
    const component = data.getInjected(TenantsComponent);
    component.addTenant();
};
const DEFAULT_TENANTS_TOOLBAR_ACTIONS = _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["ToolbarAction"].createMany([
    {
        text: 'AbpTenantManagement::ManageHostFeatures',
        action: ɵ0$1,
        permission: 'FeatureManagement.ManageHostFeatures',
        icon: 'fa fa-cog',
    },
    {
        text: 'AbpTenantManagement::NewTenant',
        action: ɵ1,
        permission: 'AbpTenantManagement.Tenants.Create',
        icon: 'fa fa-plus',
    },
]);

const DEFAULT_TENANT_MANAGEMENT_ENTITY_ACTIONS = {
    ["TenantManagement.TenantsComponent" /* Tenants */]: DEFAULT_TENANTS_ENTITY_ACTIONS,
};
const DEFAULT_TENANT_MANAGEMENT_TOOLBAR_ACTIONS = {
    ["TenantManagement.TenantsComponent" /* Tenants */]: DEFAULT_TENANTS_TOOLBAR_ACTIONS,
};
const DEFAULT_TENANT_MANAGEMENT_ENTITY_PROPS = {
    ["TenantManagement.TenantsComponent" /* Tenants */]: DEFAULT_TENANTS_ENTITY_PROPS,
};
const DEFAULT_TENANT_MANAGEMENT_CREATE_FORM_PROPS = {
    ["TenantManagement.TenantsComponent" /* Tenants */]: DEFAULT_TENANTS_CREATE_FORM_PROPS,
};
const DEFAULT_TENANT_MANAGEMENT_EDIT_FORM_PROPS = {
    ["TenantManagement.TenantsComponent" /* Tenants */]: DEFAULT_TENANTS_EDIT_FORM_PROPS,
};
const TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS');
const TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS');
const TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS');
const TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS');
const TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS');

class TenantManagementExtensionsGuard {
    constructor(injector) {
        this.injector = injector;
    }
    canActivate() {
        const extensions = this.injector.get(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["ExtensionsService"]);
        const actionContributors = this.injector.get(TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS, null) || {};
        const toolbarContributors = this.injector.get(TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS, null) || {};
        const propContributors = this.injector.get(TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS, null) || {};
        const createFormContributors = this.injector.get(TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS, null) || {};
        const editFormContributors = this.injector.get(TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS, null) || {};
        const configState = this.injector.get(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigStateService"]);
        return Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["getObjectExtensionEntitiesFromStore"])(configState, 'TenantManagement').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(entities => ({
            ["TenantManagement.TenantsComponent" /* Tenants */]: entities.Tenant,
        })), Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["mapEntitiesToContributors"])(configState, 'TenantManagement'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(objectExtensionContributors => {
            Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["mergeWithDefaultActions"])(extensions.entityActions, DEFAULT_TENANT_MANAGEMENT_ENTITY_ACTIONS, actionContributors);
            Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["mergeWithDefaultActions"])(extensions.toolbarActions, DEFAULT_TENANT_MANAGEMENT_TOOLBAR_ACTIONS, toolbarContributors);
            Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["mergeWithDefaultProps"])(extensions.entityProps, DEFAULT_TENANT_MANAGEMENT_ENTITY_PROPS, objectExtensionContributors.prop, propContributors);
            Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["mergeWithDefaultProps"])(extensions.createFormProps, DEFAULT_TENANT_MANAGEMENT_CREATE_FORM_PROPS, objectExtensionContributors.createForm, createFormContributors);
            Object(_abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["mergeWithDefaultProps"])(extensions.editFormProps, DEFAULT_TENANT_MANAGEMENT_EDIT_FORM_PROPS, objectExtensionContributors.editForm, editFormContributors);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mapTo"])(true));
    }
}
TenantManagementExtensionsGuard.ɵfac = function TenantManagementExtensionsGuard_Factory(t) { return new (t || TenantManagementExtensionsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"])); };
TenantManagementExtensionsGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TenantManagementExtensionsGuard, factory: TenantManagementExtensionsGuard.ɵfac });
TenantManagementExtensionsGuard.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TenantManagementExtensionsGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] }]; }, null); })();

class TenantManagementStateService {
    constructor(store) {
        this.store = store;
    }
    get() {
        return this.store.selectSnapshot(TenantManagementState.get);
    }
    getTenantsTotalCount() {
        return this.store.selectSnapshot(TenantManagementState.getTenantsTotalCount);
    }
    dispatchGetTenants(...args) {
        return this.store.dispatch(new GetTenants(...args));
    }
    dispatchGetTenantById(...args) {
        return this.store.dispatch(new GetTenantById(...args));
    }
    dispatchCreateTenant(...args) {
        return this.store.dispatch(new CreateTenant(...args));
    }
    dispatchUpdateTenant(...args) {
        return this.store.dispatch(new UpdateTenant(...args));
    }
    dispatchDeleteTenant(...args) {
        return this.store.dispatch(new DeleteTenant(...args));
    }
}
TenantManagementStateService.ɵfac = function TenantManagementStateService_Factory(t) { return new (t || TenantManagementStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
TenantManagementStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ factory: function TenantManagementStateService_Factory() { return new TenantManagementStateService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); }, token: TenantManagementStateService, providedIn: "root" });
TenantManagementStateService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TenantManagementStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();

const ɵ0 = {
    requiredPolicy: 'AbpTenantManagement.Tenants',
    replaceableComponent: {
        key: "TenantManagement.TenantsComponent" /* Tenants */,
        defaultComponent: TenantsComponent,
    },
};
const routes = [
    { path: '', redirectTo: 'tenants', pathMatch: 'full' },
    {
        path: '',
        component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["DynamicLayoutComponent"],
        canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["PermissionGuard"], TenantManagementExtensionsGuard],
        children: [
            {
                path: 'tenants',
                component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
                data: ɵ0,
            },
        ],
    },
];
class TenantManagementRoutingModule {
}
TenantManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TenantManagementRoutingModule });
TenantManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function TenantManagementRoutingModule_Factory(t) { return new (t || TenantManagementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TenantManagementRoutingModule, { imports: function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]; }, exports: function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TenantManagementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
            }]
    }], null, null); })();

class TenantManagementModule {
    static forChild(options = {}) {
        return {
            ngModule: TenantManagementModule,
            providers: [
                {
                    provide: TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
                    useValue: options.entityActionContributors,
                },
                {
                    provide: TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
                    useValue: options.toolbarActionContributors,
                },
                {
                    provide: TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
                    useValue: options.entityPropContributors,
                },
                {
                    provide: TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS,
                    useValue: options.createFormPropContributors,
                },
                {
                    provide: TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS,
                    useValue: options.editFormPropContributors,
                },
                TenantManagementExtensionsGuard,
            ],
        };
    }
    static forLazy(options = {}) {
        return new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["LazyModuleFactory"](TenantManagementModule.forChild(options));
    }
}
TenantManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TenantManagementModule });
TenantManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function TenantManagementModule_Factory(t) { return new (t || TenantManagementModule)(); }, imports: [[
            TenantManagementRoutingModule,
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forFeature([TenantManagementState]),
            _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["NgxValidateCoreModule"],
            _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"],
            _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_8__["FeatureManagementModule"],
            _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["UiExtensionsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TenantManagementModule, { declarations: function () { return [TenantsComponent]; }, imports: function () { return [TenantManagementRoutingModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["NgxValidateCoreModule"],
        _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
        _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"],
        _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_8__["FeatureManagementModule"],
        _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["UiExtensionsModule"]]; }, exports: function () { return [TenantsComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TenantManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [TenantsComponent],
                exports: [TenantsComponent],
                imports: [
                    TenantManagementRoutingModule,
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forFeature([TenantManagementState]),
                    _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["NgxValidateCoreModule"],
                    _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
                    _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"],
                    _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_8__["FeatureManagementModule"],
                    _abp_ng_theme_shared_extensions__WEBPACK_IMPORTED_MODULE_7__["UiExtensionsModule"],
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=abp-ng.tenant-management.js.map

/***/ })

}]);
//# sourceMappingURL=abp-ng-tenant-management-es2015.js.map