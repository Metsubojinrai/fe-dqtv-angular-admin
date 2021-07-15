(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~abp-ng-identity~abp-ng-setting-management~abp-ng-tenant-management"],{

/***/ "J7bl":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@abp/ng.theme.shared/__ivy_ngcc__/fesm2015/abp-ng.theme.shared-extensions.js ***!
  \***************************************************************************************************/
/*! exports provided: ActionList, BaseUiExtensionsModule, CreateFormPropsFactory, DateAdapter, DateTimeAdapter, DateTimePickerComponent, DisabledDirective, EXTENSIONS_ACTION_CALLBACK, EXTENSIONS_ACTION_DATA, EXTENSIONS_ACTION_TYPE, EXTENSIONS_IDENTIFIER, EXTRA_PROPERTIES_KEY, EditFormPropsFactory, EntityAction, EntityActionList, EntityActions, EntityActionsFactory, EntityProp, EntityPropList, EntityProps, EntityPropsFactory, ExtensibleFormComponent, ExtensibleFormPropComponent, ExtensibleTableComponent, ExtensionsService, FormProp, FormPropData, FormPropList, FormProps, GridActionsComponent, ObjectExtensions, PageToolbarComponent, PropDataDirective, PropList, TimeAdapter, ToolbarAction, ToolbarActionList, ToolbarActions, ToolbarActionsFactory, ToolbarComponent, UiExtensionsModule, createExtraPropertyValueResolver, generateFormFromProps, getObjectExtensionEntitiesFromStore, mapEntitiesToContributors, mergeWithDefaultActions, mergeWithDefaultProps, ɵ0, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionList", function() { return ActionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUiExtensionsModule", function() { return BaseUiExtensionsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFormPropsFactory", function() { return CreateFormPropsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return DateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeAdapter", function() { return DateTimeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePickerComponent", function() { return DateTimePickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledDirective", function() { return DisabledDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSIONS_ACTION_CALLBACK", function() { return EXTENSIONS_ACTION_CALLBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSIONS_ACTION_DATA", function() { return EXTENSIONS_ACTION_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSIONS_ACTION_TYPE", function() { return EXTENSIONS_ACTION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSIONS_IDENTIFIER", function() { return EXTENSIONS_IDENTIFIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRA_PROPERTIES_KEY", function() { return EXTRA_PROPERTIES_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormPropsFactory", function() { return EditFormPropsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityAction", function() { return EntityAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityActionList", function() { return EntityActionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityActions", function() { return EntityActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityActionsFactory", function() { return EntityActionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityProp", function() { return EntityProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityPropList", function() { return EntityPropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityProps", function() { return EntityProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityPropsFactory", function() { return EntityPropsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensibleFormComponent", function() { return ExtensibleFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensibleFormPropComponent", function() { return ExtensibleFormPropComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensibleTableComponent", function() { return ExtensibleTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionsService", function() { return ExtensionsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProp", function() { return FormProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPropData", function() { return FormPropData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPropList", function() { return FormPropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProps", function() { return FormProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridActionsComponent", function() { return GridActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectExtensions", function() { return objectExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageToolbarComponent", function() { return PageToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropDataDirective", function() { return PropDataDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropList", function() { return PropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAdapter", function() { return TimeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAction", function() { return ToolbarAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarActionList", function() { return ToolbarActionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarActions", function() { return ToolbarActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarActionsFactory", function() { return ToolbarActionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiExtensionsModule", function() { return UiExtensionsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExtraPropertyValueResolver", function() { return createExtraPropertyValueResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFormFromProps", function() { return generateFormFromProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectExtensionEntitiesFromStore", function() { return getObjectExtensionEntitiesFromStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapEntitiesToContributors", function() { return mapEntitiesToContributors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWithDefaultActions", function() { return mergeWithDefaultActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWithDefaultProps", function() { return mergeWithDefaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ActionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ActionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return Actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return PropData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return Prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return PropsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return Props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return selfFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return AbstractActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @abp/ng.core */ "HmNo");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! snq */ "350m");
/* harmony import */ var _abp_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @abp/utils */ "ZFcX");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @abp/ng.theme.shared */ "1REP");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-validate/core */ "iWZL");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");






















function ExtensibleFormPropComponent_div_0_ng_template_1_ng_template_0_Template(rf, ctx) { }
function ExtensibleFormPropComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 14);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r3.prop.id)("formControlName", ctx_r3.prop.name)("autocomplete", ctx_r3.prop.autocomplete)("type", ctx_r3.getType(ctx_r3.prop))("abpDisabled", ctx_r3.disabled)("readonly", ctx_r3.readonly);
} }
function ExtensibleFormPropComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 15);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r4.prop.name);
} }
function ExtensibleFormPropComponent_div_0_ng_template_3_ng_template_2_Template(rf, ctx) { }
const _c0 = function () { return { $implicit: "custom-control-label" }; };
function ExtensibleFormPropComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExtensibleFormPropComponent_div_0_ng_template_3_ng_template_2_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r5.prop.id)("formControlName", ctx_r5.prop.name)("abpDisabled", ctx_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
} }
function ExtensibleFormPropComponent_div_0_ng_template_4_ng_template_0_Template(rf, ctx) { }
function ExtensibleFormPropComponent_div_0_ng_template_4_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r17.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r17.key, " ");
} }
function ExtensibleFormPropComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExtensibleFormPropComponent_div_0_ng_template_4_option_2_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r6.prop.id)("formControlName", ctx_r6.prop.name)("abpDisabled", ctx_r6.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r6.options$))("ngForTrackBy", ctx_r6.track.by("value"));
} }
function ExtensibleFormPropComponent_div_0_ng_template_5_ng_template_0_Template(rf, ctx) { }
function ExtensibleFormPropComponent_div_0_ng_template_5_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r20.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r20.key, " ");
} }
function ExtensibleFormPropComponent_div_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_5_ng_template_0_Template, 0, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExtensibleFormPropComponent_div_0_ng_template_5_option_2_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r7.prop.id)("formControlName", ctx_r7.prop.name)("abpDisabled", ctx_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r7.options$))("ngForTrackBy", ctx_r7.track.by("value"));
} }
function ExtensibleFormPropComponent_div_0_ng_template_6_ng_template_0_Template(rf, ctx) { }
const _c1 = function () { return { standalone: true }; };
function ExtensibleFormPropComponent_div_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_6_ng_template_0_Template, 0, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExtensibleFormPropComponent_div_0_ng_template_6_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.typeaheadModel = $event; })("selectItem", function ExtensibleFormPropComponent_div_0_ng_template_6_Template_input_selectItem_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.setTypeaheadValue($event.item); })("blur", function ExtensibleFormPropComponent_div_0_ng_template_6_Template_input_blur_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.setTypeaheadValue(ctx_r26.typeaheadModel); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r22.classList.contains("is-invalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r8.prop.id)("autocomplete", ctx_r8.prop.autocomplete)("abpDisabled", ctx_r8.disabled)("ngbTypeahead", ctx_r8.search)("editable", false)("inputFormatter", ctx_r8.typeaheadFormatter)("resultFormatter", ctx_r8.typeaheadFormatter)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1))("ngModel", ctx_r8.typeaheadModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r8.prop.name);
} }
function ExtensibleFormPropComponent_div_0_ng_template_7_ng_template_0_Template(rf, ctx) { }
function ExtensibleFormPropComponent_div_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_7_ng_template_0_Template, 0, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExtensibleFormPropComponent_div_0_ng_template_7_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r28.open(); })("keyup.space", function ExtensibleFormPropComponent_div_0_ng_template_7_Template_input_keyup_space_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r28.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r9.prop.id)("formControlName", ctx_r9.prop.name);
} }
function ExtensibleFormPropComponent_div_0_ng_template_8_ng_template_0_Template(rf, ctx) { }
function ExtensibleFormPropComponent_div_0_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_8_ng_template_0_Template, 0, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngb-timepicker", 28);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r10.prop.name);
} }
function ExtensibleFormPropComponent_div_0_ng_template_9_ng_template_0_Template(rf, ctx) { }
function ExtensibleFormPropComponent_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_9_ng_template_0_Template, 0, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "abp-date-time-picker", 29);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prop", ctx_r11.prop);
} }
function ExtensibleFormPropComponent_div_0_ng_template_10_ng_template_0_Template(rf, ctx) { }
function ExtensibleFormPropComponent_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_ng_template_10_ng_template_0_Template, 0, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "textarea", 30);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r12.prop.id)("formControlName", ctx_r12.prop.name)("abpDisabled", ctx_r12.disabled)("readonly", ctx_r12.readonly);
} }
function ExtensibleFormPropComponent_div_0_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.getComponent(ctx_r0.prop));
} }
function ExtensibleFormPropComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "abpLocalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const classes_r35 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("htmlFor", ctx_r2.prop.id)("ngClass", classes_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r2.prop.displayName), " ", ctx_r2.asterisk, "");
} }
function ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "abp-extensible-form-prop", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const prop_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", ctx_r6.extraPropertiesKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prop", prop_r4)("data", data_r2);
} }
function ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_2_abp_extensible_form_prop_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "abp-extensible-form-prop", 6);
} if (rf & 2) {
    const prop_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prop", prop_r4)("data", data_r2);
} }
function ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_2_abp_extensible_form_prop_0_Template, 1, 2, "abp-extensible-form-prop", 7);
} if (rf & 2) {
    const prop_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.form.get(prop_r4.name));
} }
function ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const prop_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.extraProperties.controls[prop_r4.name])("ngIfElse", _r7);
} }
function ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const prop_r4 = ctx.$implicit;
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", prop_r4.visible(data_r2));
} }
function ExtensibleFormComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleFormComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.propList)("ngForTrackBy", ctx_r1.track.by("name"));
} }
function ExtensibleFormComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleFormComponent_ng_container_0_ng_container_1_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abpPropDataFromList", ctx_r0.propList)("abpPropDataWithRecord", ctx_r0.record);
} }
function ExtensibleTableComponent_ngx_datatable_column_1_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ExtensibleTableComponent_ngx_datatable_column_1_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "abp-grid-actions", 7);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r4 = ctx_r8.rowIndex;
    const row_r3 = ctx_r8.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r4)("record", row_r3);
} }
const _c2 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function ExtensibleTableComponent_ngx_datatable_column_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleTableComponent_ngx_datatable_column_1_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleTableComponent_ngx_datatable_column_1_ng_template_2_ng_template_1_Template, 1, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const row_r3 = ctx.row;
    const i_r4 = ctx.rowIndex;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.actionsTemplate || _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c2, row_r3, i_r4));
} }
function ExtensibleTableComponent_ngx_datatable_column_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable-column", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "abpLocalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExtensibleTableComponent_ngx_datatable_column_1_ng_template_2_Template, 3, 5, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx_r0.actionsText))("maxWidth", ctx_r0.columnWidths[0])("width", ctx_r0.columnWidths[0])("sortable", false);
} }
function ExtensibleTableComponent_ng_container_2_ng_template_3_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExtensibleTableComponent_ng_container_2_ng_template_3_ng_container_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const row_r12 = ctx_r19.row; const i_r13 = ctx_r19.index; const prop_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return prop_r9.action && prop_r9.action({ getInjected: ctx_r16.getInjected, record: row_r12, index: i_r13 }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).row;
    const prop_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pointer", prop_r9.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, row_r12["_" + prop_r9.name].value), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ExtensibleTableComponent_ng_container_2_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleTableComponent_ng_container_2_ng_template_3_ng_container_0_div_1_Template, 2, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;
    const prop_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r12["_" + prop_r9.name].visible);
} }
function ExtensibleTableComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleTableComponent_ng_container_2_ng_template_3_ng_container_0_Template, 2, 1, "ng-container", 9);
} if (rf & 2) {
    const prop_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abpPermission", prop_r9.permission);
} }
function ExtensibleTableComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-datatable-column", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "abpLocalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExtensibleTableComponent_ng_container_2_ng_template_3_Template, 1, 1, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const prop_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx_r1.columnWidths[i_r10 + 1] || 200)("name", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, prop_r9.displayName))("prop", prop_r9.name)("sortable", prop_r9.sortable);
} }
const _c3 = function (a0) { return { $implicit: a0 }; };
function GridActionsComponent_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    const action_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, action_r5));
} }
function GridActionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mr-1", ctx_r0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx_r0.text), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.actionList)("ngForTrackBy", ctx_r0.trackByFn);
} }
function GridActionsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r1.actionList.get(0).value));
} }
function GridActionsComponent_ng_template_2_ng_container_0_button_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "abpLocalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, action_r6.text));
} }
function GridActionsComponent_ng_template_2_ng_container_0_button_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "abpLocalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, action_r6.text));
} }
function GridActionsComponent_ng_template_2_ng_container_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridActionsComponent_ng_template_2_ng_container_0_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const action_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return action_r6.action(ctx_r14.data); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridActionsComponent_ng_template_2_ng_container_0_button_1_span_2_Template, 3, 3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GridActionsComponent_ng_template_2_ng_container_0_button_1_ng_template_3_Template, 3, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const action_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r8.actionList.length === 1 ? "btn btn-primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-center", ctx_r8.actionList.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mr-1", action_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", action_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r6.icon)("ngIfElse", _r10);
} }
function GridActionsComponent_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridActionsComponent_ng_template_2_ng_container_0_button_1_Template, 5, 10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const action_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abpPermission", action_r6.permission);
} }
function GridActionsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GridActionsComponent_ng_template_2_ng_container_0_Template, 2, 1, "ng-container", 9);
} if (rf & 2) {
    const action_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r6.visible(ctx_r3.data));
} }
function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const component_r7 = ctx.ngIf;
    const action_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", component_r7)("ngComponentOutletInjector", ctx_r4.createInjector(action_r1));
} }
function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const action_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return action_r1.action(ctx_r10.data); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "abpLocalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mr-1", action_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", action_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, action_r1.text), " ");
} }
function PageToolbarComponent_div_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template, 4, 6, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const action_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r1.component)("ngIfElse", _r5);
} }
function PageToolbarComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const action_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abpPermission", action_r1.permission);
} }
function PageToolbarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageToolbarComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r1.visible(ctx_r0.data));
} }
class DateTimeAdapter {
    fromModel(value) {
        if (!value)
            return null;
        const date = new Date(value);
        if (isNaN(date))
            return null;
        this.value = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        };
        return this.value;
    }
    toModel(value) {
        if (!value)
            return '';
        const now = new Date();
        value = Object.assign(Object.assign({ year: now.getUTCFullYear(), month: now.getMonth() + 1, day: now.getDate(), hour: 0, minute: 0, second: 0 }, this.value), value);
        const date = new Date(value.year, value.month - 1, value.day, value.hour, value.minute, value.second);
        return new Date(date).toISOString();
    }
}
DateTimeAdapter.ɵfac = function DateTimeAdapter_Factory(t) { return new (t || DateTimeAdapter)(); };
DateTimeAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DateTimeAdapter, factory: DateTimeAdapter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateTimeAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

class DateAdapter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"] {
    fromModel(value) {
        if (!value)
            return null;
        const date = new Date(value);
        if (isNaN(date))
            return null;
        return {
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
        };
    }
    toModel(value) {
        if (!value)
            return '';
        const date = new Date(value.year, value.month - 1, value.day);
        const formattedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'yyyy-MM-dd', 'en');
        return formattedDate;
    }
}
DateAdapter.ɵfac = function DateAdapter_Factory(t) { return ɵDateAdapter_BaseFactory(t || DateAdapter); };
DateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DateAdapter, factory: DateAdapter.ɵfac });
const ɵDateAdapter_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DateAdapter);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

class TimeAdapter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimeAdapter"] {
    fromModel(value) {
        if (!value)
            return null;
        const date = isTimeStr(value)
            ? new Date(0, 0, 1, ...value.split(':').map(Number))
            : new Date(value);
        if (isNaN(date))
            return null;
        return {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        };
    }
    toModel(value) {
        if (!value)
            return '';
        const date = new Date(0, 0, 1, value.hour, value.minute, value.second);
        const formattedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'HH:mm', 'en');
        return formattedDate;
    }
}
TimeAdapter.ɵfac = function TimeAdapter_Factory(t) { return ɵTimeAdapter_BaseFactory(t || TimeAdapter); };
TimeAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimeAdapter, factory: TimeAdapter.ɵfac });
const ɵTimeAdapter_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TimeAdapter);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
function isTimeStr(value) {
    return /^((2[123])|[01][0-9])(\:[0-5][0-9]){1,2}$/.test(String(value));
}

function selfFactory(dependency) {
    return dependency;
}

const ɵ0$2 = selfFactory;
class DateTimePickerComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
    }
    setDate(datestr) {
        this.date.writeValue(datestr);
    }
    setTime(datestr) {
        this.time.writeValue(datestr);
    }
}
DateTimePickerComponent.ɵfac = function DateTimePickerComponent_Factory(t) { return new (t || DateTimePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DateTimePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DateTimePickerComponent, selectors: [["abp-date-time-picker"]], viewQuery: function DateTimePickerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.date = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.time = _t.first);
    } }, inputs: { prop: "prop" }, exportAs: ["abpDateTimePicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([], [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
                useFactory: ɵ0$2,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]]
            },
            {
                provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"],
                useClass: DateTimeAdapter
            },
            {
                provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimeAdapter"],
                useClass: DateTimeAdapter
            },
        ])], decls: 4, vars: 3, consts: [["ngbDatepicker", "", "type", "text", 1, "form-control", 3, "id", "formControlName", "ngModelChange", "click", "keyup.space"], ["datepicker", "ngbDatepicker"], [3, "formControlName", "ngModelChange"], ["timepicker", ""]], template: function DateTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateTimePickerComponent_Template_input_ngModelChange_0_listener($event) { return ctx.setTime($event); })("click", function DateTimePickerComponent_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.open(); })("keyup.space", function DateTimePickerComponent_Template_input_keyup_space_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-timepicker", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateTimePickerComponent_Template_ngb_timepicker_ngModelChange_2_listener($event) { return ctx.setDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.prop.id)("formControlName", ctx.prop.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.prop.name);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["ValidationDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"]], encapsulation: 2, changeDetection: 0 });
DateTimePickerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DateTimePickerComponent.propDecorators = {
    prop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"],] }],
    time: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateTimePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                exportAs: 'abpDateTimePicker',
                selector: 'abp-date-time-picker',
                template: `
    <input
      [id]="prop.id"
      [formControlName]="prop.name"
      (ngModelChange)="setTime($event)"
      (click)="datepicker.open()"
      (keyup.space)="datepicker.open()"
      ngbDatepicker
      #datepicker="ngbDatepicker"
      type="text"
      class="form-control"
    />
    <ngb-timepicker
      #timepicker
      [formControlName]="prop.name"
      (ngModelChange)="setDate($event)"
    ></ngb-timepicker>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                viewProviders: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
                        useFactory: ɵ0$2,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]]
                    },
                    {
                        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"],
                        useClass: DateTimeAdapter
                    },
                    {
                        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimeAdapter"],
                        useClass: DateTimeAdapter
                    },
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { prop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"]]
        }], time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"]]
        }] }); })();

const EXTRA_PROPERTIES_KEY = 'extraProperties';

const TYPEAHEAD_TEXT_SUFFIX = '_Text';
const TYPEAHEAD_TEXT_SUFFIX_REGEX = /_Text$/;
function createTypeaheadOptions(lookup) {
    return (data, searchText) => searchText
        ? data
            .getInjected(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["RestService"])
            .request({
            method: 'GET',
            url: lookup.url,
            params: {
                [lookup.filterParamName]: searchText,
            },
        }, { apiName: 'Default' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
            const list = response[lookup.resultListPropertyName];
            const mapToOption = (item) => ({
                key: item[lookup.displayPropertyName],
                value: item[lookup.valuePropertyName],
            });
            return list.map(mapToOption);
        }))
        : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
}
function getTypeaheadType(lookup, name) {
    return Boolean(lookup.url)
        ? "typeahead" /* Typeahead */
        : name.endsWith(TYPEAHEAD_TEXT_SUFFIX)
            ? "hidden" /* Hidden */
            : undefined;
}
function createTypeaheadDisplayNameGenerator(displayNameGeneratorFn, properties) {
    return (displayName, fallback) => {
        const name = removeTypeaheadTextSuffix(fallback.name);
        return displayNameGeneratorFn(displayName || properties[name].displayName, {
            name,
            resource: fallback.resource,
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

const ɵ0$1 = selfFactory;
class ExtensibleFormPropComponent {
    constructor(cdRef, track, groupDirective) {
        this.cdRef = cdRef;
        this.track = track;
        this.asterisk = '';
        this.options$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        this.validators = [];
        this.search = (text$) => text$
            ? text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(text => this.prop.options(this.data, text)))
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        this.typeaheadFormatter = (option) => option.key;
        this.form = groupDirective.form;
    }
    setTypeaheadValue(selectedOption) {
        this.typeaheadModel = selectedOption || { key: null, value: null };
        const { key, value } = this.typeaheadModel;
        const [keyControl, valueControl] = this.getTypeaheadControls();
        if (valueControl.value && !value)
            valueControl.markAsDirty();
        keyControl.setValue(key);
        valueControl.setValue(value);
    }
    get isInvalid() {
        const control = this.form.get(this.prop.name);
        return control.touched && control.invalid;
    }
    getTypeaheadControls() {
        const { name } = this.prop;
        const extraPropName = `${EXTRA_PROPERTIES_KEY}.${name}`;
        const keyControl = this.form.get(addTypeaheadTextSuffix(extraPropName)) ||
            this.form.get(addTypeaheadTextSuffix(name));
        const valueControl = this.form.get(extraPropName) || this.form.get(name);
        return [keyControl, valueControl];
    }
    setAsterisk() {
        this.asterisk = this.validators.some(isRequired) ? '*' : '';
    }
    getComponent(prop) {
        switch (prop.type) {
            case "boolean" /* Boolean */:
                return 'checkbox';
            case "date" /* Date */:
                return 'date';
            case "dateTime" /* DateTime */:
                return 'dateTime';
            case "hidden" /* Hidden */:
                return 'hidden';
            case "multiselect" /* MultiSelect */:
                return 'multiselect';
            case "text" /* Text */:
                return 'textarea';
            case "time" /* Time */:
                return 'time';
            case "typeahead" /* Typeahead */:
                return 'typeahead';
            default:
                return prop.options ? 'select' : 'input';
        }
    }
    getType(prop) {
        switch (prop.type) {
            case "date" /* Date */:
            case "string" /* String */:
                return 'text';
            case "boolean" /* Boolean */:
                return 'checkbox';
            case "number" /* Number */:
                return 'number';
            case "email" /* Email */:
                return 'email';
            case "password" /* Password */:
                return 'password';
            default:
                return 'hidden';
        }
    }
    ngOnChanges({ prop }) {
        const currentProp = Object(snq__WEBPACK_IMPORTED_MODULE_7__["default"])(() => prop.currentValue);
        const { options, readonly, disabled, validators } = currentProp || {};
        if (options)
            this.options$ = options(this.data);
        if (readonly)
            this.readonly = readonly(this.data);
        if (disabled)
            this.disabled = disabled(this.data);
        if (validators) {
            this.validators = validators(this.data);
            this.setAsterisk();
        }
        const [keyControl, valueControl] = this.getTypeaheadControls();
        if (keyControl && valueControl)
            this.typeaheadModel = { key: keyControl.value, value: valueControl.value };
    }
}
ExtensibleFormPropComponent.ɵfac = function ExtensibleFormPropComponent_Factory(t) { return new (t || ExtensibleFormPropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["TrackByService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"])); };
ExtensibleFormPropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExtensibleFormPropComponent, selectors: [["abp-extensible-form-prop"]], inputs: { data: "data", prop: "prop" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([], [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
                useFactory: ɵ0$1,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]]
            },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], useClass: DateAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimeAdapter"], useClass: TimeAdapter },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 1, consts: [["class", "form-group", 3, "ngSwitch", 4, "abpPermission"], ["label", ""], [1, "form-group", 3, "ngSwitch"], ["ngSwitchCase", "input"], ["ngSwitchCase", "hidden"], ["ngSwitchCase", "checkbox"], ["ngSwitchCase", "select"], ["ngSwitchCase", "multiselect"], ["ngSwitchCase", "typeahead"], ["ngSwitchCase", "date"], ["ngSwitchCase", "time"], ["ngSwitchCase", "dateTime"], ["ngSwitchCase", "textarea"], [3, "ngTemplateOutlet"], [1, "form-control", 3, "id", "formControlName", "autocomplete", "type", "abpDisabled", "readonly"], ["type", "hidden", 3, "formControlName"], ["validationTarget", "", 1, "custom-checkbox", "custom-control"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "formControlName", "abpDisabled"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "custom-select", "form-control", 3, "id", "formControlName", "abpDisabled"], [3, "ngValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngValue"], ["multiple", "multiple", 1, "custom-select", "form-control", 3, "id", "formControlName", "abpDisabled"], ["validationStyle", "", "validationTarget", "", 1, "position-relative"], ["typeahead", ""], [1, "form-control", 3, "id", "autocomplete", "abpDisabled", "ngbTypeahead", "editable", "inputFormatter", "resultFormatter", "ngModelOptions", "ngModel", "ngModelChange", "selectItem", "blur"], ["ngbDatepicker", "", "type", "text", 1, "form-control", 3, "id", "formControlName", "click", "keyup.space"], ["datepicker", "ngbDatepicker"], [3, "formControlName"], [3, "prop"], [1, "form-control", 3, "id", "formControlName", "abpDisabled", "readonly"], [3, "htmlFor", "ngClass"]], template: function ExtensibleFormPropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormPropComponent_div_0_Template, 11, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleFormPropComponent_ng_template_1_Template, 3, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abpPermission", ctx.prop.permission);
    } }, directives: function () { return [_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["PermissionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["ValidationDirective"], DisabledDirective, _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["ValidationTargetDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectMultipleControlValueAccessor"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["ValidationStyleDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"], DateTimePickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["LocalizationPipe"]]; }, encapsulation: 2, changeDetection: 0 });
ExtensibleFormPropComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["TrackByService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"] }
];
ExtensibleFormPropComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    prop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtensibleFormPropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'abp-extensible-form-prop',
                template: "<div class=\"form-group\" *abpPermission=\"prop.permission\" [ngSwitch]=\"getComponent(prop)\">\n  <ng-template ngSwitchCase=\"input\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <input\n      [id]=\"prop.id\"\n      [formControlName]=\"prop.name\"\n      [autocomplete]=\"prop.autocomplete\"\n      [type]=\"getType(prop)\"\n      [abpDisabled]=\"disabled\"\n      [readonly]=\"readonly\"\n      class=\"form-control\"\n    />\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"hidden\">\n    <input [formControlName]=\"prop.name\" type=\"hidden\" />\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"checkbox\">\n    <div class=\"custom-checkbox custom-control\" validationTarget>\n      <input\n        [id]=\"prop.id\"\n        [formControlName]=\"prop.name\"\n        [abpDisabled]=\"disabled\"\n        type=\"checkbox\"\n        class=\"custom-control-input\"\n      />\n      <ng-template\n        [ngTemplateOutlet]=\"label\"\n        [ngTemplateOutletContext]=\"{ $implicit: 'custom-control-label' }\"\n      ></ng-template>\n    </div>\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"select\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <select\n      [id]=\"prop.id\"\n      [formControlName]=\"prop.name\"\n      [abpDisabled]=\"disabled\"\n      class=\"custom-select form-control\"\n    >\n      <option\n        *ngFor=\"let option of options$ | async; trackBy: track.by('value')\"\n        [ngValue]=\"option.value\"\n      >\n        {{ option.key }}\n      </option>\n    </select>\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"multiselect\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <select\n      [id]=\"prop.id\"\n      [formControlName]=\"prop.name\"\n      [abpDisabled]=\"disabled\"\n      multiple=\"multiple\"\n      class=\"custom-select form-control\"\n    >\n      <option\n        *ngFor=\"let option of options$ | async; trackBy: track.by('value')\"\n        [ngValue]=\"option.value\"\n      >\n        {{ option.key }}\n      </option>\n    </select>\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"typeahead\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <div #typeahead class=\"position-relative\" validationStyle validationTarget>\n      <input\n        [id]=\"prop.id\"\n        [autocomplete]=\"prop.autocomplete\"\n        [abpDisabled]=\"disabled\"\n        [ngbTypeahead]=\"search\"\n        [editable]=\"false\"\n        [inputFormatter]=\"typeaheadFormatter\"\n        [resultFormatter]=\"typeaheadFormatter\"\n        [ngModelOptions]=\"{ standalone: true }\"\n        [(ngModel)]=\"typeaheadModel\"\n        (selectItem)=\"setTypeaheadValue($event.item)\"\n        (blur)=\"setTypeaheadValue(typeaheadModel)\"\n        [class.is-invalid]=\"typeahead.classList.contains('is-invalid')\"\n        class=\"form-control\"\n      />\n      <input [formControlName]=\"prop.name\" type=\"hidden\" />\n    </div>\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"date\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <input\n      [id]=\"prop.id\"\n      [formControlName]=\"prop.name\"\n      (click)=\"datepicker.open()\"\n      (keyup.space)=\"datepicker.open()\"\n      ngbDatepicker\n      #datepicker=\"ngbDatepicker\"\n      type=\"text\"\n      class=\"form-control\"\n    />\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"time\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <ngb-timepicker [formControlName]=\"prop.name\"></ngb-timepicker>\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"dateTime\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <abp-date-time-picker [prop]=\"prop\"></abp-date-time-picker>\n  </ng-template>\n\n  <ng-template ngSwitchCase=\"textarea\">\n    <ng-template [ngTemplateOutlet]=\"label\"></ng-template>\n    <textarea\n      [id]=\"prop.id\"\n      [formControlName]=\"prop.name\"\n      [abpDisabled]=\"disabled\"\n      [readonly]=\"readonly\"\n      class=\"form-control\"\n    ></textarea>\n  </ng-template>\n</div>\n\n<ng-template #label let-classes>\n  <label [htmlFor]=\"prop.id\" [ngClass]=\"classes\"\n    >{{ prop.displayName | abpLocalization }} {{ asterisk }}</label\n  >\n</ng-template>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                viewProviders: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
                        useFactory: ɵ0$1,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]]
                    },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], useClass: DateAdapter },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimeAdapter"], useClass: TimeAdapter },
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["TrackByService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], prop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
function isRequired(validator) {
    return validator === _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required || validator === _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["AbpValidators"].required;
}

/* tslint:disable:variable-name */
class ActionList extends _abp_utils__WEBPACK_IMPORTED_MODULE_8__["LinkedList"] {
}
class ActionData {
    get data() {
        return {
            getInjected: this.getInjected,
            index: this.index,
            record: this.record,
        };
    }
}
class Action {
    constructor(permission, visible = _ => true, action = _ => { }) {
        this.permission = permission;
        this.visible = visible;
        this.action = action;
    }
}
class ActionsFactory {
    constructor() {
        this.contributorCallbacks = {};
    }
    get(name) {
        this.contributorCallbacks[name] = this.contributorCallbacks[name] || [];
        return new this._ctor(this.contributorCallbacks[name]);
    }
}
class Actions {
    constructor(callbackList) {
        this.callbackList = callbackList;
    }
    get actions() {
        const actionList = new this._ctor();
        this.callbackList.forEach(callback => callback(actionList));
        return actionList;
    }
    addContributor(contributeCallback) {
        this.callbackList.push(contributeCallback);
    }
    clearContributors() {
        while (this.callbackList.length)
            this.callbackList.pop();
    }
}

class EntityActionList extends ActionList {
}
class EntityActions extends Actions {
    constructor() {
        super(...arguments);
        this._ctor = EntityActionList;
    }
}
class EntityActionsFactory extends ActionsFactory {
    constructor() {
        super(...arguments);
        this._ctor = EntityActions;
    }
}
class EntityAction extends Action {
    constructor(options) {
        super(options.permission, options.visible, options.action);
        this.text = options.text;
        this.icon = options.icon || '';
    }
    static create(options) {
        return new EntityAction(options);
    }
    static createMany(arrayOfOptions) {
        return arrayOfOptions.map(EntityAction.create);
    }
}

/* tslint:disable:variable-name */
class PropList extends _abp_utils__WEBPACK_IMPORTED_MODULE_8__["LinkedList"] {
}
class PropData {
    get data() {
        return {
            getInjected: this.getInjected,
            index: this.index,
            record: this.record,
        };
    }
}
class Prop {
    constructor(type, name, displayName, permission, visible = _ => true, isExtra = false) {
        this.type = type;
        this.name = name;
        this.displayName = displayName;
        this.permission = permission;
        this.visible = visible;
        this.isExtra = isExtra;
        this.displayName = this.displayName || this.name;
    }
}
class PropsFactory {
    constructor() {
        this.contributorCallbacks = {};
    }
    get(name) {
        this.contributorCallbacks[name] = this.contributorCallbacks[name] || [];
        return new this._ctor(this.contributorCallbacks[name]);
    }
}
class Props {
    constructor(callbackList) {
        this.callbackList = callbackList;
    }
    get props() {
        const propList = new this._ctor();
        this.callbackList.forEach(callback => callback(propList));
        return propList;
    }
    addContributor(contributeCallback) {
        this.callbackList.push(contributeCallback);
    }
    clearContributors() {
        while (this.callbackList.length)
            this.callbackList.pop();
    }
}

class EntityPropList extends PropList {
}
class EntityProps extends Props {
    constructor() {
        super(...arguments);
        this._ctor = EntityPropList;
    }
}
class EntityPropsFactory extends PropsFactory {
    constructor() {
        super(...arguments);
        this._ctor = EntityProps;
    }
}
class EntityProp extends Prop {
    constructor(options) {
        super(options.type, options.name, options.displayName, options.permission, options.visible, options.isExtra);
        this.columnWidth = options.columnWidth;
        this.sortable = options.sortable || false;
        this.valueResolver = options.valueResolver || (data => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(data.record[this.name]));
        this.action = options.action;
    }
    static create(options) {
        return new EntityProp(options);
    }
    static createMany(arrayOfOptions) {
        return arrayOfOptions.map(EntityProp.create);
    }
}

class FormPropList extends PropList {
}
class FormProps extends Props {
    constructor() {
        super(...arguments);
        this._ctor = FormPropList;
    }
}
class CreateFormPropsFactory extends PropsFactory {
    constructor() {
        super(...arguments);
        this._ctor = FormProps;
    }
}
class EditFormPropsFactory extends PropsFactory {
    constructor() {
        super(...arguments);
        this._ctor = FormProps;
    }
}
class FormProp extends Prop {
    constructor(options) {
        super(options.type, options.name, options.displayName, options.permission, options.visible, options.isExtra);
        this.asyncValidators = options.asyncValidators || (_ => []);
        this.validators = options.validators || (_ => []);
        this.disabled = options.disabled || (_ => false);
        this.readonly = options.readonly || (_ => false);
        this.autocomplete = options.autocomplete || 'off';
        this.options = options.options;
        this.id = options.id || options.name;
        const defaultValue = options.defaultValue;
        this.defaultValue = isFalsyValue(defaultValue) ? defaultValue : defaultValue || null;
    }
    static create(options) {
        return new FormProp(options);
    }
    static createMany(arrayOfOptions) {
        return arrayOfOptions.map(FormProp.create);
    }
}
class FormPropData extends PropData {
    constructor(injector, record) {
        super();
        this.record = record;
        // tslint:disable-next-line
        this.getInjected = injector.get.bind(injector);
    }
}
function isFalsyValue(defaultValue) {
    return [0, '', false].indexOf(defaultValue) > -1;
}

class ToolbarActionList extends ActionList {
}
class ToolbarActions extends Actions {
    constructor() {
        super(...arguments);
        this._ctor = ToolbarActionList;
    }
}
class ToolbarActionsFactory extends ActionsFactory {
    constructor() {
        super(...arguments);
        this._ctor = ToolbarActions;
    }
}
class ToolbarAction extends Action {
    constructor(options) {
        super(options.permission, options.visible, options.action);
        this.text = options.text;
        this.icon = options.icon || '';
    }
    static create(options) {
        return new ToolbarAction(options);
    }
    static createMany(arrayOfOptions) {
        return arrayOfOptions.map(ToolbarAction.create);
    }
}
class ToolbarComponent extends Action {
    constructor(options) {
        super(options.permission, options.visible, options.action);
        this.component = options.component;
    }
    static create(options) {
        return new ToolbarComponent(options);
    }
    static createMany(arrayOfOptions) {
        return arrayOfOptions.map(ToolbarComponent.create);
    }
}

class ExtensionsService {
    constructor() {
        this.entityActions = new EntityActionsFactory();
        this.toolbarActions = new ToolbarActionsFactory();
        this.entityProps = new EntityPropsFactory();
        this.createFormProps = new CreateFormPropsFactory();
        this.editFormProps = new EditFormPropsFactory();
    }
}
ExtensionsService.ɵfac = function ExtensionsService_Factory(t) { return new (t || ExtensionsService)(); };
ExtensionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function ExtensionsService_Factory() { return new ExtensionsService(); }, token: ExtensionsService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtensionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const EXTENSIONS_IDENTIFIER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('EXTENSIONS_IDENTIFIER');
const EXTENSIONS_ACTION_TYPE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('EXTENSIONS_ACTION_TYPE');
const EXTENSIONS_ACTION_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('EXTENSIONS_ACTION_DATA');
const EXTENSIONS_ACTION_CALLBACK = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('EXTENSIONS_ACTION_DATA');

const ɵ0 = selfFactory;
class ExtensibleFormComponent {
    constructor(cdRef, track, container, extensions, identifier) {
        this.cdRef = cdRef;
        this.track = track;
        this.container = container;
        this.extensions = extensions;
        this.identifier = identifier;
        this.extraPropertiesKey = EXTRA_PROPERTIES_KEY;
    }
    set selectedRecord(record) {
        const type = !record || JSON.stringify(record) === '{}' ? 'create' : 'edit';
        this.propList = this.extensions[`${type}FormProps`].get(this.identifier).props;
        this.record = record;
    }
    get form() {
        return (this.container ? this.container.control : { controls: {} });
    }
    get extraProperties() {
        return (this.form.controls.extraProperties || { controls: {} });
    }
}
ExtensibleFormComponent.ɵfac = function ExtensibleFormComponent_Factory(t) { return new (t || ExtensibleFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["TrackByService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ExtensionsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EXTENSIONS_IDENTIFIER)); };
ExtensibleFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExtensibleFormComponent, selectors: [["abp-extensible-form"]], viewQuery: function ExtensibleFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ExtensibleFormPropComponent, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formProps = _t);
    } }, inputs: { selectedRecord: "selectedRecord" }, exportAs: ["abpExtensibleForm"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([], [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
                useFactory: ɵ0,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]]
            },
        ])], decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "abpPropData", "abpPropDataFromList", "abpPropDataWithRecord"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "formGroupName", 4, "ngIf", "ngIfElse"], ["tempDefault", ""], [3, "formGroupName"], [3, "prop", "data"], [3, "prop", "data", 4, "ngIf"]], template: function ExtensibleFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtensibleFormComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], PropDataDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["ValidationGroupDirective"], ExtensibleFormPropComponent]; }, encapsulation: 2, changeDetection: 0 });
ExtensibleFormComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["TrackByService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"] },
    { type: ExtensionsService },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [EXTENSIONS_IDENTIFIER,] }] }
];
ExtensibleFormComponent.propDecorators = {
    formProps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [ExtensibleFormPropComponent,] }],
    selectedRecord: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtensibleFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                exportAs: 'abpExtensibleForm',
                selector: 'abp-extensible-form',
                template: "<ng-container *ngIf=\"form\">\n  <ng-container *abpPropData=\"let data; fromList: propList; withRecord: record\">\n    <ng-container *ngFor=\"let prop of propList; trackBy: track.by('name')\">\n      <ng-container *ngIf=\"prop.visible(data)\">\n        <ng-container\n          [formGroupName]=\"extraPropertiesKey\"\n          *ngIf=\"extraProperties.controls[prop.name]; else tempDefault\"\n        >\n          <abp-extensible-form-prop [prop]=\"prop\" [data]=\"data\"></abp-extensible-form-prop>\n        </ng-container>\n\n        <ng-template #tempDefault>\n          <abp-extensible-form-prop\n            *ngIf=\"form.get(prop.name)\"\n            [prop]=\"prop\"\n            [data]=\"data\"\n          ></abp-extensible-form-prop>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ng-container>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                viewProviders: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
                        useFactory: ɵ0,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]]
                    },
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["TrackByService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"] }, { type: ExtensionsService }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [EXTENSIONS_IDENTIFIER]
            }] }]; }, { selectedRecord: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [ExtensibleFormPropComponent]
        }] }); })();

const DEFAULT_ACTIONS_COLUMN_WIDTH = 150;
class ExtensibleTableComponent {
    constructor(locale, config, injector) {
        this.locale = locale;
        this.config = config;
        this.trackByFn = (_, item) => item.name;
        // tslint:disable-next-line
        this.getInjected = injector.get.bind(injector);
        const extensions = injector.get(ExtensionsService);
        const name = injector.get(EXTENSIONS_IDENTIFIER);
        this.propList = extensions.entityProps.get(name).props;
        this.actionList = extensions['entityActions'].get(name)
            .actions;
        this.setColumnWidths(DEFAULT_ACTIONS_COLUMN_WIDTH);
    }
    set actionsText(value) {
        this._actionsText = value;
    }
    get actionsText() {
        var _a;
        return (_a = this._actionsText) !== null && _a !== void 0 ? _a : (this.actionList.length > 1 ? 'AbpUi::Actions' : '');
    }
    set actionsColumnWidth(width) {
        this.setColumnWidths(width ? Number(width) : undefined);
    }
    setColumnWidths(actionsColumn) {
        const widths = [actionsColumn];
        this.propList.forEach(({ value: prop }) => {
            widths.push(prop.columnWidth);
        });
        this.columnWidths = widths;
    }
    getDate(value, format) {
        return value ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(value, format, this.locale) : '';
    }
    getIcon(value) {
        return value
            ? '<div class="text-center text-success"><i class="fa fa-check"></i></div>'
            : '<div class="text-center text-danger"><i class="fa fa-times"></i></div>';
    }
    getContent(prop, data) {
        return prop.valueResolver(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(value => {
            switch (prop.type) {
                case "boolean" /* Boolean */:
                    return this.getIcon(value);
                case "date" /* Date */:
                    return this.getDate(value, Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["getShortDateFormat"])(this.config));
                case "time" /* Time */:
                    return this.getDate(value, Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["getShortTimeFormat"])(this.config));
                case "dateTime" /* DateTime */:
                    return this.getDate(value, Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["getShortDateShortTimeFormat"])(this.config));
                default:
                    return value;
                // More types can be handled in the future
            }
        }));
    }
    ngOnChanges({ data }) {
        if (!(data === null || data === void 0 ? void 0 : data.currentValue))
            return;
        this.data = data.currentValue.map((record, index) => {
            this.propList.forEach(prop => {
                const propData = { getInjected: this.getInjected, record, index };
                record[`_${prop.value.name}`] = {
                    visible: prop.value.visible(propData),
                    value: this.getContent(prop.value, propData),
                };
            });
            return record;
        });
    }
}
ExtensibleTableComponent.ɵfac = function ExtensibleTableComponent_Factory(t) { return new (t || ExtensibleTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["ConfigStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
ExtensibleTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExtensibleTableComponent, selectors: [["abp-extensible-table"]], inputs: { actionsText: "actionsText", actionsColumnWidth: "actionsColumnWidth", data: "data", list: "list", recordsTotal: "recordsTotal", actionsTemplate: "actionsTemplate" }, exportAs: ["abpExtensibleTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 6, consts: [["default", "", 3, "rows", "count", "list"], [3, "name", "maxWidth", "width", "sortable", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "name", "maxWidth", "width", "sortable"], ["ngx-datatable-cell-template", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["gridActions", ""], ["text", "AbpUi::Actions", 3, "index", "record"], [3, "width", "name", "prop", "sortable"], [4, "abpPermission"], [3, "innerHTML", "pointer", "click", 4, "ngIf"], [3, "innerHTML", "click"]], template: function ExtensibleTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtensibleTableComponent_ngx_datatable_column_1_Template, 3, 6, "ngx-datatable-column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExtensibleTableComponent_ng_container_2_Template, 4, 6, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.data)("count", ctx.recordsTotal)("list", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionsTemplate || ctx.actionList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.propList)("ngForTrackBy", ctx.trackByFn);
    } }, directives: function () { return [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["DatatableComponent"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableDefaultDirective"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableListDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["DataTableColumnCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], GridActionsComponent, _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["PermissionDirective"]]; }, pipes: function () { return [_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["LocalizationPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]]; }, encapsulation: 2, changeDetection: 0 });
ExtensibleTableComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] },
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["ConfigStateService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
ExtensibleTableComponent.propDecorators = {
    actionsText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    recordsTotal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    actionsColumnWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    actionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtensibleTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                exportAs: 'abpExtensibleTable',
                selector: 'abp-extensible-table',
                template: "<ngx-datatable default [rows]=\"data\" [count]=\"recordsTotal\" [list]=\"list\">\n  <ngx-datatable-column\n    *ngIf=\"actionsTemplate || actionList.length\"\n    [name]=\"actionsText | abpLocalization\"\n    [maxWidth]=\"columnWidths[0]\"\n    [width]=\"columnWidths[0]\"\n    [sortable]=\"false\"\n  >\n    <ng-template let-row=\"row\" let-i=\"rowIndex\" ngx-datatable-cell-template>\n      <ng-container\n        *ngTemplateOutlet=\"actionsTemplate || gridActions; context: { $implicit: row, index: i }\"\n      ></ng-container>\n      <ng-template #gridActions>\n        <abp-grid-actions [index]=\"i\" [record]=\"row\" text=\"AbpUi::Actions\"></abp-grid-actions>\n      </ng-template>\n    </ng-template>\n  </ngx-datatable-column>\n\n  <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">\n    <ngx-datatable-column\n      [width]=\"columnWidths[i + 1] || 200\"\n      [name]=\"prop.displayName | abpLocalization\"\n      [prop]=\"prop.name\"\n      [sortable]=\"prop.sortable\"\n    >\n      <ng-template let-row=\"row\" let-i=\"index\" ngx-datatable-cell-template>\n        <ng-container *abpPermission=\"prop.permission\">\n          <div\n            *ngIf=\"row['_' + prop.name].visible\"\n            [innerHTML]=\"row['_' + prop.name].value | async\"\n            (click)=\"\n              prop.action && prop.action({ getInjected: getInjected, record: row, index: i })\n            \"\n            [class.pointer]=\"prop.action\"\n          ></div>\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n  </ng-container>\n</ngx-datatable>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }, { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["ConfigStateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { actionsText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], actionsColumnWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], recordsTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], actionsTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

// tslint:disable: directive-class-suffix
// Fix for https://github.com/angular/angular/issues/23904
// @dynamic
class AbstractActionsComponent extends ActionData {
    constructor(injector) {
        super();
        // tslint:disable-next-line
        this.getInjected = injector.get.bind(injector);
        const extensions = injector.get(ExtensionsService);
        const name = injector.get(EXTENSIONS_IDENTIFIER);
        const type = injector.get(EXTENSIONS_ACTION_TYPE);
        this.actionList = extensions[type].get(name).actions;
    }
}
AbstractActionsComponent.ɵfac = function AbstractActionsComponent_Factory(t) { return new (t || AbstractActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
AbstractActionsComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AbstractActionsComponent, inputs: { record: "record" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
AbstractActionsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
AbstractActionsComponent.propDecorators = {
    record: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractActionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { record: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class GridActionsComponent extends AbstractActionsComponent {
    constructor(injector) {
        super(injector);
        this.icon = 'fa fa-cog';
        this.text = '';
        this.trackByFn = (_, item) => item.text;
    }
}
GridActionsComponent.ɵfac = function GridActionsComponent_Factory(t) { return new (t || GridActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
GridActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridActionsComponent, selectors: [["abp-grid-actions"]], inputs: { icon: "icon", text: "text", index: "index" }, exportAs: ["abpGridActions"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: EXTENSIONS_ACTION_TYPE,
                useValue: 'entityActions'
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [["ngbDropdown", "", "container", "body", "class", "d-inline-block", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["btnItem", ""], ["ngbDropdown", "", "container", "body", 1, "d-inline-block"], ["data-toggle", "dropdown", "aria-haspopup", "true", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "btn-sm", "dropdown-toggle"], [3, "ngClass"], ["ngbDropdownMenu", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], ["ngbDropdownItem", "", "type", "button", 3, "class", "text-center", "click", 4, "abpPermission"], ["ngbDropdownItem", "", "type", "button", 3, "click"], [4, "ngIf", "ngIfElse"], ["ellipsis", ""], ["abpEllipsis", ""]], template: function GridActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GridActionsComponent_div_0_Template, 7, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridActionsComponent_ng_container_1_Template, 1, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridActionsComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionList.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionList.length === 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["PermissionDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__["EllipsisDirective"]], pipes: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["LocalizationPipe"]], encapsulation: 2, changeDetection: 0 });
GridActionsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
GridActionsComponent.propDecorators = {
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridActionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                exportAs: 'abpGridActions',
                selector: 'abp-grid-actions',
                template: "<div *ngIf=\"actionList.length > 1\" ngbDropdown container=\"body\" class=\"d-inline-block\">\n  <button\n    class=\"btn btn-primary btn-sm dropdown-toggle\"\n    data-toggle=\"dropdown\"\n    aria-haspopup=\"true\"\n    ngbDropdownToggle\n  >\n    <i [ngClass]=\"icon\" [class.mr-1]=\"icon\"></i>{{ text | abpLocalization }}\n  </button>\n  <div ngbDropdownMenu>\n    <ng-container\n      *ngFor=\"let action of actionList; trackBy: trackByFn\"\n      [ngTemplateOutlet]=\"btnItem\"\n      [ngTemplateOutletContext]=\"{ $implicit: action }\"\n    >\n    </ng-container>\n  </div>\n</div>\n\n<ng-container\n  *ngIf=\"actionList.length === 1\"\n  [ngTemplateOutlet]=\"btnItem\"\n  [ngTemplateOutletContext]=\"{ $implicit: actionList.get(0).value }\"\n></ng-container>\n\n<ng-template #btnItem let-action>\n  <ng-container *ngIf=\"action.visible(data)\">\n    <button\n      ngbDropdownItem\n      *abpPermission=\"action.permission\"\n      (click)=\"action.action(data)\"\n      type=\"button\"\n      class=\"{{ actionList.length === 1 ? 'btn btn-primary' : '' }}\"\n      [class.text-center]=\"actionList.length === 1\"\n    >\n      <i [ngClass]=\"action.icon\" [class.mr-1]=\"action.icon\"></i>\n      <span *ngIf=\"action.icon; else ellipsis\">{{ action.text | abpLocalization }}</span>\n      <ng-template #ellipsis>\n        <div abpEllipsis>{{ action.text | abpLocalization }}</div>\n      </ng-template>\n    </button>\n  </ng-container>\n</ng-template>\n",
                providers: [
                    {
                        provide: EXTENSIONS_ACTION_TYPE,
                        useValue: 'entityActions'
                    },
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class PageToolbarComponent extends AbstractActionsComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.trackByFn = (_, item) => item.action || item.component;
    }
    createInjector(action) {
        const get = (token, notFoundValue, flags) => {
            return token === EXTENSIONS_ACTION_DATA
                ? this.data
                : token === EXTENSIONS_ACTION_CALLBACK
                    ? (data = this.data) => action.action(data)
                    : this.getInjected.call(this.injector, token, notFoundValue, flags);
        };
        return { get };
    }
}
PageToolbarComponent.ɵfac = function PageToolbarComponent_Factory(t) { return new (t || PageToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
PageToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageToolbarComponent, selectors: [["abp-page-toolbar"]], exportAs: ["abpPageToolbar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: EXTENSIONS_ACTION_TYPE,
                useValue: 'toolbarActions'
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["id", "AbpContentToolbar", 1, "row", "justify-content-end", "mx-n1"], ["class", "col-auto px-1 pt-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-auto", "px-1", "pt-2"], [4, "ngIf"], [4, "abpPermission"], [4, "ngIf", "ngIfElse"], ["button", ""], [4, "ngComponentOutlet", "ngComponentOutletInjector"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [3, "ngClass"]], template: function PageToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageToolbarComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.actionList)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["PermissionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["LocalizationPipe"]], encapsulation: 2, changeDetection: 0 });
PageToolbarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                exportAs: 'abpPageToolbar',
                selector: 'abp-page-toolbar',
                template: "<div class=\"row justify-content-end mx-n1\" id=\"AbpContentToolbar\">\n  <div class=\"col-auto px-1 pt-2\" *ngFor=\"let action of actionList; trackBy: trackByFn\">\n    <ng-container *ngIf=\"action.visible(data)\">\n      <ng-container *abpPermission=\"action.permission\">\n        <ng-container *ngIf=\"action.component as component; else button\">\n          <ng-container\n            *ngComponentOutlet=\"component; injector: createInjector(action)\"\n          ></ng-container>\n        </ng-container>\n\n        <ng-template #button>\n          <button (click)=\"action.action(data)\" type=\"button\" class=\"btn btn-primary btn-sm\">\n            <i [ngClass]=\"action.icon\" [class.mr-1]=\"action.icon\"></i>\n            {{ action.text | abpLocalization }}\n          </button>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </div>\n</div>\n",
                providers: [
                    {
                        provide: EXTENSIONS_ACTION_TYPE,
                        useValue: 'toolbarActions'
                    },
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();

class DisabledDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
    }
    // Related issue: https://github.com/angular/angular/issues/35330
    ngOnChanges({ abpDisabled }) {
        if (this.ngControl.control && abpDisabled) {
            this.ngControl.control[abpDisabled.currentValue ? 'disable' : 'enable']();
        }
    }
}
DisabledDirective.ɵfac = function DisabledDirective_Factory(t) { return new (t || DisabledDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], 1)); };
DisabledDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DisabledDirective, selectors: [["", "abpDisabled", ""]], inputs: { abpDisabled: "abpDisabled" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
DisabledDirective.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
];
DisabledDirective.propDecorators = {
    abpDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisabledDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[abpDisabled]'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }] }]; }, { abpDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class PropDataDirective extends PropData {
    constructor(tempRef, vcRef, injector) {
        super();
        this.tempRef = tempRef;
        this.vcRef = vcRef;
        // tslint:disable-next-line
        this.getInjected = injector.get.bind(injector);
    }
    ngOnChanges() {
        this.vcRef.clear();
        this.vcRef.createEmbeddedView(this.tempRef, {
            $implicit: this.data,
            index: 0,
        });
    }
    ngOnDestroy() {
        this.vcRef.clear();
    }
}
PropDataDirective.ɵfac = function PropDataDirective_Factory(t) { return new (t || PropDataDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
PropDataDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PropDataDirective, selectors: [["", "abpPropData", ""]], inputs: { propList: ["abpPropDataFromList", "propList"], record: ["abpPropDataWithRecord", "record"], index: ["abpPropDataAtIndex", "index"] }, exportAs: ["abpPropData"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
PropDataDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
PropDataDirective.propDecorators = {
    propList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpPropDataFromList',] }],
    record: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpPropDataWithRecord',] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpPropDataAtIndex',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropDataDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                exportAs: 'abpPropData',
                selector: '[abpPropData]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { propList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['abpPropDataFromList']
        }], record: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['abpPropDataWithRecord']
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['abpPropDataAtIndex']
        }] }); })();

var objectExtensions = /*#__PURE__*/Object.freeze({
    __proto__: null
});

class BaseUiExtensionsModule {
}
BaseUiExtensionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BaseUiExtensionsModule });
BaseUiExtensionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BaseUiExtensionsModule_Factory(t) { return new (t || BaseUiExtensionsModule)(); }, imports: [[
            _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__["ThemeSharedModule"],
            _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["NgxValidateCoreModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepickerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeaheadModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BaseUiExtensionsModule, { declarations: function () { return [DateTimePickerComponent, PageToolbarComponent, GridActionsComponent, ExtensibleFormPropComponent, ExtensibleFormComponent, ExtensibleTableComponent, PropDataDirective, DisabledDirective]; }, imports: function () { return [_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__["ThemeSharedModule"],
        _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["NgxValidateCoreModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepickerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeaheadModule"]]; }, exports: function () { return [DateTimePickerComponent, PageToolbarComponent, GridActionsComponent, ExtensibleFormComponent, ExtensibleTableComponent, PropDataDirective, DisabledDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseUiExtensionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    DateTimePickerComponent,
                    PageToolbarComponent,
                    GridActionsComponent,
                    ExtensibleFormComponent,
                    ExtensibleTableComponent,
                    PropDataDirective,
                    DisabledDirective,
                ],
                declarations: [
                    DateTimePickerComponent,
                    PageToolbarComponent,
                    GridActionsComponent,
                    ExtensibleFormPropComponent,
                    ExtensibleFormComponent,
                    ExtensibleTableComponent,
                    PropDataDirective,
                    DisabledDirective,
                ],
                imports: [
                    _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__["ThemeSharedModule"],
                    _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["NgxValidateCoreModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepickerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeaheadModule"],
                ]
            }]
    }], null, null); })();
class UiExtensionsModule {
}
UiExtensionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UiExtensionsModule });
UiExtensionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UiExtensionsModule_Factory(t) { return new (t || UiExtensionsModule)(); }, imports: [[BaseUiExtensionsModule], BaseUiExtensionsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiExtensionsModule, { imports: [BaseUiExtensionsModule], exports: [BaseUiExtensionsModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiExtensionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [BaseUiExtensionsModule],
                imports: [BaseUiExtensionsModule]
            }]
    }], null, null); })();

function mergeWithDefaultActions(extension, defaultActions, ...contributors) {
    Object.keys(defaultActions).forEach((name) => {
        const actions = extension.get(name);
        actions.clearContributors();
        actions.addContributor((actionList) => actionList.addManyTail(defaultActions[name]));
        contributors.forEach(contributor => (contributor[name] || []).forEach((callback) => actions.addContributor(callback)));
    });
}

function generateFormFromProps(data) {
    const extensions = data.getInjected(ExtensionsService);
    const identifier = data.getInjected(EXTENSIONS_IDENTIFIER);
    const form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
    const extraForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
    form.addControl(EXTRA_PROPERTIES_KEY, extraForm);
    const record = data.record || {};
    const type = JSON.stringify(record) === '{}' ? 'create' : 'edit';
    const props = extensions[`${type}FormProps`].get(identifier).props;
    const extraProperties = record[EXTRA_PROPERTIES_KEY] || {};
    props.forEach(({ value: prop }) => {
        const name = prop.name;
        const isExtraProperty = prop.isExtra || name in extraProperties;
        let value = isExtraProperty ? extraProperties[name] : name in record ? record[name] : undefined;
        if (typeof value === 'undefined')
            value = prop.defaultValue;
        if (value) {
            let adapter;
            switch (prop.type) {
                case "date" /* Date */:
                    adapter = new DateAdapter();
                    value = adapter.toModel(adapter.fromModel(value));
                    break;
                case "time" /* Time */:
                    adapter = new TimeAdapter();
                    value = adapter.toModel(adapter.fromModel(value));
                    break;
                case "dateTime" /* DateTime */:
                    adapter = new DateTimeAdapter();
                    value = adapter.toModel(adapter.fromModel(value));
                    break;
                default:
                    break;
            }
        }
        const formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](value, {
            asyncValidators: prop.asyncValidators(data),
            validators: prop.validators(data),
        });
        (isExtraProperty ? extraForm : form).addControl(name, formControl);
    });
    return form;
}

function createExtraPropertyValueResolver(name) {
    return (data) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(data.record[EXTRA_PROPERTIES_KEY][name]);
}
function mergeWithDefaultProps(extension, defaultProps, ...contributors) {
    Object.keys(defaultProps).forEach((name) => {
        const props = extension.get(name);
        props.clearContributors();
        props.addContributor((propList) => propList.addManyTail(defaultProps[name]));
        contributors.forEach(contributor => (contributor[name] || []).forEach((callback) => props.addContributor(callback)));
    });
}

function createEnum(members) {
    const enumObject = {};
    members.forEach(({ name, value }) => {
        enumObject[(enumObject[name] = value)] = name;
    });
    return enumObject;
}
function createEnumValueResolver(enumType, lookupEnum, propName) {
    return data => {
        const value = data.record[EXTRA_PROPERTIES_KEY][propName];
        const key = lookupEnum.transformed[value];
        const l10n = data.getInjected(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["LocalizationService"]);
        const localizeEnum = createEnumLocalizer(l10n, enumType, lookupEnum);
        return createLocalizationStream(l10n, localizeEnum(key));
    };
}
function createEnumOptions(enumType, lookupEnum) {
    return data => {
        const l10n = data.getInjected(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["LocalizationService"]);
        const localizeEnum = createEnumLocalizer(l10n, enumType, lookupEnum);
        return createLocalizationStream(l10n, lookupEnum.fields.map(({ name, value }) => ({
            key: localizeEnum(name),
            value,
        })));
    };
}
function createLocalizationStream(l10n, mapTarget) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null), l10n.languageChange$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => mapTarget));
}
function createEnumLocalizer(l10n, enumType, lookupEnum) {
    const resource = lookupEnum.localizationResource;
    const shortType = getShortEnumType(enumType);
    return key => l10n.localizeWithFallbackSync([resource], ['Enum:' + shortType + '.' + key, shortType + '.' + key, key], key);
}
function getShortEnumType(enumType) {
    return enumType.split('.').pop();
}

function createDisplayNameLocalizationPipeKeyGenerator(localization) {
    const generateLocalizationPipeKey = Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["createLocalizationPipeKeyGenerator"])(localization);
    return (displayName, fallback) => {
        if (displayName && displayName.name)
            return generateLocalizationPipeKey([displayName.resource], [displayName.name], displayName.name);
        const key = generateLocalizationPipeKey([fallback.resource], ['DisplayName:' + fallback.name], undefined);
        if (key)
            return key;
        return generateLocalizationPipeKey([fallback.resource], [fallback.name], fallback.name);
    };
}

function getValidatorsFromProperty(property) {
    const validators = [];
    property.attributes.forEach(attr => {
        if (attr.typeSimple in _abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["AbpValidators"])
            validators.push(_abp_ng_core__WEBPACK_IMPORTED_MODULE_4__["AbpValidators"][attr.typeSimple](attr.config));
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
    return selectObjectExtensions(configState).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((extensions) => Object.keys(extensions.enums).reduce((acc, key) => {
        const { fields, localizationResource } = extensions.enums[key];
        acc[key] = {
            fields,
            localizationResource,
            transformed: createEnum(fields),
        };
        return acc;
    }, {})));
}
function getObjectExtensionEntitiesFromStore(configState, moduleKey) {
    return selectObjectExtensions(configState).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(extensions => {
        if (!extensions)
            return null;
        return (extensions.modules[moduleKey] || {})
            .entities;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(entities => (isUndefined(entities) ? {} : entities)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
}
function mapEntitiesToContributors(configState, resource) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(entities => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["zip"])(selectLocalization(configState), selectEnums(configState)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([localization, enums]) => {
        const generateDisplayName = createDisplayNameLocalizationPipeKeyGenerator(localization);
        return Object.keys(entities).reduce((acc, key) => {
            acc.prop[key] = [];
            acc.createForm[key] = [];
            acc.editForm[key] = [];
            const entity = entities[key];
            if (!entity)
                return acc;
            const properties = entity.properties;
            if (!properties)
                return acc;
            const mapPropertiesToContributors = createPropertiesToContributorsMapper(generateDisplayName, resource, enums);
            return mapPropertiesToContributors(properties, acc, key);
        }, {
            prop: {},
            createForm: {},
            editForm: {},
        });
    }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
}
function createPropertiesToContributorsMapper(generateDisplayName, resource, enums) {
    return (properties, contributors, key) => {
        const isExtra = true;
        const generateTypeaheadDisplayName = createTypeaheadDisplayNameGenerator(generateDisplayName, properties);
        Object.keys(properties).forEach((name) => {
            const property = properties[name];
            const propName = name;
            const lookup = property.ui.lookup || {};
            const type = getTypeaheadType(lookup, name) || getTypeFromProperty(property);
            const generateDN = hasTypeaheadTextSuffix(name)
                ? generateTypeaheadDisplayName
                : generateDisplayName;
            const displayName = generateDN(property.displayName, { name, resource });
            if (property.ui.onTable.isVisible) {
                const sortable = Boolean(property.ui.onTable.isSortable);
                const columnWidth = type === "boolean" /* Boolean */ ? 150 : 250;
                const valueResolver = type === "enum" /* Enum */
                    ? createEnumValueResolver(property.type, enums[property.type], propName)
                    : createExtraPropertyValueResolver(propName);
                const entityProp = new EntityProp({
                    type,
                    name: propName,
                    displayName,
                    sortable,
                    columnWidth,
                    valueResolver,
                    isExtra,
                });
                const contributor = (propList) => propList.addTail(entityProp);
                contributors.prop[key].push(contributor);
            }
            const isOnCreateForm = property.ui.onCreateForm.isVisible;
            const isOnEditForm = property.ui.onEditForm.isVisible;
            if (isOnCreateForm || isOnEditForm) {
                const defaultValue = property.defaultValue;
                const validators = () => getValidatorsFromProperty(property);
                let options;
                if (type === "enum" /* Enum */)
                    options = createEnumOptions(propName, enums[property.type]);
                else if (type === "typeahead" /* Typeahead */)
                    options = createTypeaheadOptions(lookup);
                const formProp = new FormProp({
                    type,
                    name: propName,
                    displayName,
                    options,
                    defaultValue,
                    validators,
                    isExtra,
                });
                const formContributor = (propList) => propList.addTail(formProp);
                if (isOnCreateForm)
                    contributors.createForm[key].push(formContributor);
                if (isOnEditForm)
                    contributors.editForm[key].push(formContributor);
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

/***/ }),

/***/ "ZFcX":
/*!************************************************************!*\
  !*** ./node_modules/@abp/utils/dist/fesm2015/abp-utils.js ***!
  \************************************************************/
/*! exports provided: LinkedList, ListNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return LinkedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNode", function() { return ListNode; });
/* harmony import */ var just_compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! just-compare */ "lSrJ");
/* harmony import */ var just_compare__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(just_compare__WEBPACK_IMPORTED_MODULE_0__);


/* tslint:disable:no-non-null-assertion */
class ListNode {
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    constructor() {
        this.size = 0;
    }
    get head() {
        return this.first;
    }
    get tail() {
        return this.last;
    }
    get length() {
        return this.size;
    }
    attach(value, previousNode, nextNode) {
        if (!previousNode)
            return this.addHead(value);
        if (!nextNode)
            return this.addTail(value);
        const node = new ListNode(value);
        node.previous = previousNode;
        previousNode.next = node;
        node.next = nextNode;
        nextNode.previous = node;
        this.size++;
        return node;
    }
    attachMany(values, previousNode, nextNode) {
        if (!values.length)
            return [];
        if (!previousNode)
            return this.addManyHead(values);
        if (!nextNode)
            return this.addManyTail(values);
        const list = new LinkedList();
        list.addManyTail(values);
        list.first.previous = previousNode;
        previousNode.next = list.first;
        list.last.next = nextNode;
        nextNode.previous = list.last;
        this.size += values.length;
        return list.toNodeArray();
    }
    detach(node) {
        if (!node.previous)
            return this.dropHead();
        if (!node.next)
            return this.dropTail();
        node.previous.next = node.next;
        node.next.previous = node.previous;
        this.size--;
        return node;
    }
    add(value) {
        return {
            after: (...params) => this.addAfter.call(this, value, ...params),
            before: (...params) => this.addBefore.call(this, value, ...params),
            byIndex: (position) => this.addByIndex(value, position),
            head: () => this.addHead(value),
            tail: () => this.addTail(value),
        };
    }
    addMany(values) {
        return {
            after: (...params) => this.addManyAfter.call(this, values, ...params),
            before: (...params) => this.addManyBefore.call(this, values, ...params),
            byIndex: (position) => this.addManyByIndex(values, position),
            head: () => this.addManyHead(values),
            tail: () => this.addManyTail(values),
        };
    }
    addAfter(value, previousValue, compareFn = just_compare__WEBPACK_IMPORTED_MODULE_0___default.a) {
        const previous = this.find(node => compareFn(node.value, previousValue));
        return previous ? this.attach(value, previous, previous.next) : this.addTail(value);
    }
    addBefore(value, nextValue, compareFn = just_compare__WEBPACK_IMPORTED_MODULE_0___default.a) {
        const next = this.find(node => compareFn(node.value, nextValue));
        return next ? this.attach(value, next.previous, next) : this.addHead(value);
    }
    addByIndex(value, position) {
        if (position < 0)
            position += this.size;
        else if (position >= this.size)
            return this.addTail(value);
        if (position <= 0)
            return this.addHead(value);
        const next = this.get(position);
        return this.attach(value, next.previous, next);
    }
    addHead(value) {
        const node = new ListNode(value);
        node.next = this.first;
        if (this.first)
            this.first.previous = node;
        else
            this.last = node;
        this.first = node;
        this.size++;
        return node;
    }
    addTail(value) {
        const node = new ListNode(value);
        if (this.first) {
            node.previous = this.last;
            this.last.next = node;
            this.last = node;
        }
        else {
            this.first = node;
            this.last = node;
        }
        this.size++;
        return node;
    }
    addManyAfter(values, previousValue, compareFn = just_compare__WEBPACK_IMPORTED_MODULE_0___default.a) {
        const previous = this.find(node => compareFn(node.value, previousValue));
        return previous ? this.attachMany(values, previous, previous.next) : this.addManyTail(values);
    }
    addManyBefore(values, nextValue, compareFn = just_compare__WEBPACK_IMPORTED_MODULE_0___default.a) {
        const next = this.find(node => compareFn(node.value, nextValue));
        return next ? this.attachMany(values, next.previous, next) : this.addManyHead(values);
    }
    addManyByIndex(values, position) {
        if (position < 0)
            position += this.size;
        if (position <= 0)
            return this.addManyHead(values);
        if (position >= this.size)
            return this.addManyTail(values);
        const next = this.get(position);
        return this.attachMany(values, next.previous, next);
    }
    addManyHead(values) {
        return values.reduceRight((nodes, value) => {
            nodes.unshift(this.addHead(value));
            return nodes;
        }, []);
    }
    addManyTail(values) {
        return values.map(value => this.addTail(value));
    }
    drop() {
        return {
            byIndex: (position) => this.dropByIndex(position),
            byValue: (...params) => this.dropByValue.apply(this, params),
            byValueAll: (...params) => this.dropByValueAll.apply(this, params),
            head: () => this.dropHead(),
            tail: () => this.dropTail(),
        };
    }
    dropMany(count) {
        return {
            byIndex: (position) => this.dropManyByIndex(count, position),
            head: () => this.dropManyHead(count),
            tail: () => this.dropManyTail(count),
        };
    }
    dropByIndex(position) {
        if (position < 0)
            position += this.size;
        const current = this.get(position);
        return current ? this.detach(current) : undefined;
    }
    dropByValue(value, compareFn = just_compare__WEBPACK_IMPORTED_MODULE_0___default.a) {
        const position = this.findIndex(node => compareFn(node.value, value));
        return position < 0 ? undefined : this.dropByIndex(position);
    }
    dropByValueAll(value, compareFn = just_compare__WEBPACK_IMPORTED_MODULE_0___default.a) {
        const dropped = [];
        for (let current = this.first, position = 0; current; position++, current = current.next) {
            if (compareFn(current.value, value)) {
                dropped.push(this.dropByIndex(position - dropped.length));
            }
        }
        return dropped;
    }
    dropHead() {
        const head = this.first;
        if (head) {
            this.first = head.next;
            if (this.first)
                this.first.previous = undefined;
            else
                this.last = undefined;
            this.size--;
            return head;
        }
        return undefined;
    }
    dropTail() {
        const tail = this.last;
        if (tail) {
            this.last = tail.previous;
            if (this.last)
                this.last.next = undefined;
            else
                this.first = undefined;
            this.size--;
            return tail;
        }
        return undefined;
    }
    dropManyByIndex(count, position) {
        if (count <= 0)
            return [];
        if (position < 0)
            position = Math.max(position + this.size, 0);
        else if (position >= this.size)
            return [];
        count = Math.min(count, this.size - position);
        const dropped = [];
        while (count--) {
            const current = this.get(position);
            dropped.push(this.detach(current));
        }
        return dropped;
    }
    dropManyHead(count) {
        if (count <= 0)
            return [];
        count = Math.min(count, this.size);
        const dropped = [];
        while (count--)
            dropped.unshift(this.dropHead());
        return dropped;
    }
    dropManyTail(count) {
        if (count <= 0)
            return [];
        count = Math.min(count, this.size);
        const dropped = [];
        while (count--)
            dropped.push(this.dropTail());
        return dropped;
    }
    find(predicate) {
        for (let current = this.first, position = 0; current; position++, current = current.next) {
            if (predicate(current, position, this))
                return current;
        }
        return undefined;
    }
    findIndex(predicate) {
        for (let current = this.first, position = 0; current; position++, current = current.next) {
            if (predicate(current, position, this))
                return position;
        }
        return -1;
    }
    forEach(iteratorFn) {
        for (let node = this.first, position = 0; node; position++, node = node.next) {
            iteratorFn(node, position, this);
        }
    }
    get(position) {
        return this.find((_, index) => position === index);
    }
    indexOf(value, compareFn = just_compare__WEBPACK_IMPORTED_MODULE_0___default.a) {
        return this.findIndex(node => compareFn(node.value, value));
    }
    toArray() {
        const array = new Array(this.size);
        this.forEach((node, index) => (array[index] = node.value));
        return array;
    }
    toNodeArray() {
        const array = new Array(this.size);
        this.forEach((node, index) => (array[index] = node));
        return array;
    }
    toString(mapperFn = JSON.stringify) {
        return this.toArray()
            .map(value => mapperFn(value))
            .join(' <-> ');
    }
    // Cannot use Generator type because of ng-packagr
    *[Symbol.iterator]() {
        for (let node = this.first, position = 0; node; position++, node = node.next) {
            yield node.value;
        }
    }
}

/*
 * Public API Surface of utils
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=abp-utils.js.map


/***/ })

}]);
//# sourceMappingURL=default~abp-ng-identity~abp-ng-setting-management~abp-ng-tenant-management-es2015.js.map