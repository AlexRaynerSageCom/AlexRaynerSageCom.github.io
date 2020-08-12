(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





const routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/app/models/index.ts");
/* harmony import */ var _components_builder_form_builder_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/builder-form/builder-form.component */ "./src/app/components/builder-form/builder-form.component.ts");
/* harmony import */ var _components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/grid-view/grid-view.component */ "./src/app/components/grid-view/grid-view.component.ts");





class AppComponent {
    ngOnInit() {
        this.grid = Object(_models__WEBPACK_IMPORTED_MODULE_1__["getInitialGrid"])();
    }
    updateGrid(grid) {
        this.grid = grid;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [[1, "text"], [3, "grid", "gridChanged"], [3, "grid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Grid Layout Builder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-builder-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridChanged", function AppComponent_Template_app_builder_form_gridChanged_3_listener($event) { return ctx.updateGrid($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-grid-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("grid", ctx.grid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("grid", ctx.grid);
    } }, directives: [_components_builder_form_builder_form_component__WEBPACK_IMPORTED_MODULE_2__["BuilderFormComponent"], _components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_3__["GridViewComponent"]], styles: [".text[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhbGV4LnJheW5lclxcRGV2ZWxvcG1lbnRcXGxheW91dC1idWlsZGVyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0IHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuIiwiLnRleHQge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDhweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
    <div>
      <div class="text">Grid Layout Builder</div>
      <app-builder-form
        [grid]="grid"
        (gridChanged)="updateGrid($event)"
      >
      </app-builder-form>

      <app-grid-view [grid]="grid">
      </app-grid-view>
    </div>
  `,
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
/* harmony import */ var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sage/ng-carbon/button */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js");
/* harmony import */ var _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sage/ng-carbon/dropdown */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-dropdown.js");
/* harmony import */ var _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sage/ng-carbon/input-text */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-input-text.js");
/* harmony import */ var _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sage/ng-carbon/checkbox */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-checkbox.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
            _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
            _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_9__["CheckboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components__WEBPACK_IMPORTED_MODULE_5__["BuilderFormComponent"],
        _components__WEBPACK_IMPORTED_MODULE_5__["GridViewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
        _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
        _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
        _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_9__["CheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                    _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
                    _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
                    _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_9__["CheckboxModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_5__["BuilderFormComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_5__["GridViewComponent"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/builder-form/builder-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/builder-form/builder-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: BuilderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderFormComponent", function() { return BuilderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sage/ng-carbon/button */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js");
/* harmony import */ var _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sage/ng-carbon/checkbox */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-checkbox.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sage/ng-carbon/input-text */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-input-text.js");
/* harmony import */ var _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sage/ng-carbon/dropdown */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-dropdown.js");









function BuilderFormComponent_form_15_sds_dropdown_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sds-dropdown-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3, " ");
} }
function BuilderFormComponent_form_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BuilderFormComponent_form_15_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addColumn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " New Column: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "sds-input-text", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "sds-dropdown", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BuilderFormComponent_form_15_sds_dropdown_option_6_Template, 2, 2, "sds-dropdown-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "sds-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.columnForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.isFieldInvalid(ctx_r0.columnForm, "size"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.isFieldInvalid(ctx_r0.columnForm, "unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.axisUnits);
} }
function BuilderFormComponent_form_16_sds_dropdown_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sds-dropdown-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r7, " ");
} }
function BuilderFormComponent_form_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BuilderFormComponent_form_16_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " New Row: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "sds-input-text", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "sds-dropdown", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BuilderFormComponent_form_16_sds_dropdown_option_6_Template, 2, 2, "sds-dropdown-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "sds-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.rowForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.isFieldInvalid(ctx_r1.rowForm, "size"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.isFieldInvalid(ctx_r1.rowForm, "unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.axisUnits);
} }
class BuilderFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.gridChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showColumnForm = false;
        this.showRowForm = false;
        this.axisUnits = [
            'fr',
            '%',
            'px',
            'auto'
        ];
    }
    ngOnInit() {
        this.form = this.fb.group({
            columnGap: this.grid.columnGap,
            rowGap: this.grid.rowGap,
            fillGrid: this.grid.fillGrid
        });
        this.columnForm = this.fb.group({
            size: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            unit: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.rowForm = this.fb.group({
            size: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            unit: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.form.valueChanges.subscribe(value => {
            const newGrid = Object.assign(Object.assign({}, this.grid), value);
            this.gridChanged.emit(newGrid);
            console.log(newGrid);
        });
    }
    isFieldInvalid(form, field) {
        return form.get(field).touched && form.get(field).errors
            ? 'This field is required.'
            : null;
    }
    addColumn() {
        this.columnForm.markAllAsTouched();
        if (!this.columnForm.valid) {
            return;
        }
        const newColumn = {
            size: this.columnForm.get('size').value,
            unit: this.columnForm.get('unit').value
        };
        const newGrid = Object.assign(Object.assign({}, this.grid), {
            columns: [
                ...this.grid.columns,
                newColumn
            ]
        });
        this.gridChanged.emit(newGrid);
        this.columnForm.reset();
        this.showColumnForm = false;
    }
    addRow() {
        this.rowForm.markAllAsTouched();
        if (!this.rowForm.valid) {
            return;
        }
        const newRow = {
            size: this.rowForm.get('size').value,
            unit: this.rowForm.get('unit').value
        };
        const newGrid = Object.assign(Object.assign({}, this.grid), {
            rows: [
                ...this.grid.rows,
                newRow
            ]
        });
        this.gridChanged.emit(newGrid);
        this.rowForm.reset();
        this.showRowForm = false;
    }
}
BuilderFormComponent.ɵfac = function BuilderFormComponent_Factory(t) { return new (t || BuilderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
BuilderFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuilderFormComponent, selectors: [["app-builder-form"]], inputs: { grid: "grid" }, outputs: { gridChanged: "gridChanged" }, decls: 17, vars: 3, consts: [[1, "builder-form", 3, "formGroup"], ["type", "button", 3, "clickEvent"], [1, "input-field"], ["type", "number", "min", "0", "formControlName", "columnGap"], ["type", "number", "min", "0", "formControlName", "rowGap"], ["formControlName", "fillGrid", "size", "large"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["formControlName", "size", "placeholderText", "size..", "errorType", "error", 3, "errors"], ["formControlName", "unit", "placeholder", "unit..", "errorType", "error", 3, "errors"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit"], [3, "value"]], template: function BuilderFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "sds-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function BuilderFormComponent_Template_sds_button_clickEvent_1_listener() { return ctx.showColumnForm = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Column ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "sds-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function BuilderFormComponent_Template_sds_button_clickEvent_3_listener() { return ctx.showRowForm = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add Row ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Column Gap (px): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Row Gap (px): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "sds-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Fill grid? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BuilderFormComponent_form_15_Template, 9, 4, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BuilderFormComponent_form_16_Template, 9, 4, "form", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showColumnForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRowForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_5__["InputTextComponent"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownOptionComponent"]], styles: [".builder-form[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.input-field[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px;\n}\n\n.input-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idWlsZGVyLWZvcm0vQzpcXFVzZXJzXFxhbGV4LnJheW5lclxcRGV2ZWxvcG1lbnRcXGxheW91dC1idWlsZGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxidWlsZGVyLWZvcm1cXGJ1aWxkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9idWlsZGVyLWZvcm0vYnVpbGRlci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENFO0VBQ0UscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVpbGRlci1mb3JtL2J1aWxkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idWlsZGVyLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogOHB4O1xyXG5cclxuICBsYWJlbCA+ICoge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG4iLCIuYnVpbGRlci1mb3JtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaW5wdXQtZmllbGQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5pbnB1dC1maWVsZCBsYWJlbCA+ICoge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuilderFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-builder-form',
                template: `
    <form class="builder-form" [formGroup]="form">
      <sds-button
        type="button"
        (clickEvent)="showColumnForm = true"
      >
        Add Column
      </sds-button>

      <sds-button
        type="button"
        (clickEvent)="showRowForm = true"
      >
        Add Row
      </sds-button>

      <div class="input-field">
        <label>
          Column Gap (px):
          <input type="number" min="0" formControlName="columnGap"/>
        </label>
      </div>

      <div class="input-field">
        <label>
          Row Gap (px):
          <input type="number" min="0" formControlName="rowGap"/>
        </label>
      </div>

      <sds-checkbox
        formControlName="fillGrid"
        size="large"
      >
        Fill grid?
      </sds-checkbox>
    </form>

    <form
      *ngIf="showColumnForm"
      [formGroup]="columnForm"
      (ngSubmit)="addColumn()"
    >
      <div class="input-field">
        <label>
          New Column:
          <sds-input-text
            formControlName="size"
            placeholderText="size.."
            errorType="error"
            [errors]="isFieldInvalid(columnForm, 'size')"
          >
          </sds-input-text>
          <sds-dropdown
            formControlName="unit"
            placeholder="unit.."
            errorType="error"
            [errors]="isFieldInvalid(columnForm, 'unit')"
          >
            <sds-dropdown-option
              *ngFor="let option of axisUnits"
              [value]="option"
            >
              {{ option }}
            </sds-dropdown-option>
          </sds-dropdown>
        </label>
      </div>

      <sds-button type="submit">Add</sds-button>
    </form>

    <form
      *ngIf="showRowForm"
      [formGroup]="rowForm"
      (ngSubmit)="addRow()"
    >
      <div class="input-field">
        <label>
          New Row:
          <sds-input-text
            formControlName="size"
            placeholderText="size.."
            errorType="error"
            [errors]="isFieldInvalid(rowForm, 'size')"
          >
          </sds-input-text>
          <sds-dropdown
            formControlName="unit"
            placeholder="unit.."
            errorType="error"
            [errors]="isFieldInvalid(rowForm, 'unit')"
          >
            <sds-dropdown-option
              *ngFor="let option of axisUnits"
              [value]="option"
            >
              {{ option }}
            </sds-dropdown-option>
          </sds-dropdown>
        </label>
      </div>

      <sds-button type="submit">Add</sds-button>
    </form>
  `,
                styleUrls: ['./builder-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gridChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/grid-view/grid-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/grid-view/grid-view.component.ts ***!
  \*************************************************************/
/*! exports provided: GridViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridViewComponent", function() { return GridViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sage/ng-carbon/button */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["gridElem"];
function GridViewComponent_pre_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](".grid {\n    ", ctx_r0.generatedStyles, "\n}\n");
} }
function GridViewComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridViewComponent_div_4_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.removeColumn(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DELETE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GridViewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridViewComponent_div_4_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.columnStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.columnCount);
} }
function GridViewComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridViewComponent_div_5_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const i_r12 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.removeRow(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DELETE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GridViewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridViewComponent_div_5_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r2.rowStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.rowCount);
} }
function GridViewComponent_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} }
function GridViewComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridViewComponent_ng_container_8_div_1_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.count);
} }
class GridViewComponent {
    ngAfterViewInit() {
        this.gridElem.nativeElement.style.display = 'grid';
    }
    getStyles() {
        const styles = this.gridElem.nativeElement.style.cssText;
        this.generatedStyles = styles.replace(/; /g, ';\n    ');
    }
    removeColumn(index) {
        this.grid.columns.splice(index, 1);
    }
    removeRow(index) {
        this.grid.rows.splice(index, 1);
    }
    get columnCount() {
        return new Array(this.grid.columns.length);
    }
    get rowCount() {
        return new Array(this.grid.rows.length);
    }
    get count() {
        return new Array(this.grid.columns.length * Math.max(1, this.grid.rows.length));
    }
    get columnStyles() {
        return {
            gridTemplateColumns: this.grid.columns.map(column => `${column.size}${column.unit}`).join(' '),
            gridColumnGap: this.grid.columnGap + 'px'
        };
    }
    get rowStyles() {
        return {
            gridTemplateRows: this.grid.rows.map(row => `${row.size}${row.unit}`).join(' '),
            gridRowGap: this.grid.rowGap + 'px'
        };
    }
    get styles() {
        return Object.assign(Object.assign({}, this.columnStyles), this.rowStyles);
    }
}
GridViewComponent.ɵfac = function GridViewComponent_Factory(t) { return new (t || GridViewComponent)(); };
GridViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridViewComponent, selectors: [["app-grid-view"]], viewQuery: function GridViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridElem = _t.first);
    } }, inputs: { grid: "grid" }, decls: 9, vars: 6, consts: [[3, "clickEvent"], ["class", "output-styles", 4, "ngIf"], [1, "grid-view"], ["class", "columns", 3, "style", 4, "ngIf"], ["class", "rows", 3, "style", 4, "ngIf"], [1, "grid"], ["gridElem", ""], [4, "ngIf"], [1, "output-styles"], [1, "columns"], ["tabIndex", "0", 3, "click", 4, "ngFor", "ngForOf"], ["tabIndex", "0", 3, "click"], [1, "rows"], ["class", "grid__item", 4, "ngFor", "ngForOf"], [1, "grid__item"]], template: function GridViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sds-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function GridViewComponent_Template_sds_button_clickEvent_0_listener() { return ctx.getStyles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Get Styles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridViewComponent_pre_2_Template, 2, 1, "pre", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GridViewComponent_div_4_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GridViewComponent_div_5_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GridViewComponent_ng_container_8_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.generatedStyles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.grid.columns.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.grid.rows.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.styles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.grid == null ? null : ctx.grid.fillGrid);
    } }, directives: [_sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.grid-view[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr;\n  gap: 10px;\n}\n\n.columns[_ngcontent-%COMP%], .rows[_ngcontent-%COMP%] {\n  display: grid;\n  font-weight: bold;\n  color: #C7384F;\n  text-align: center;\n  cursor: pointer;\n}\n\n.columns[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.rows[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-min-content;\n  grid-template-columns: min-content;\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.rows[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  writing-mode: vertical-lr;\n  transform: rotate(-180deg);\n}\n\n.grid[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 2;\n  height: 550px;\n}\n\n.grid__item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #008200;\n}\n\n.output-styles[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #F2F5F6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvQzpcXFVzZXJzXFxhbGV4LnJheW5lclxcRGV2ZWxvcG1lbnRcXGxheW91dC1idWlsZGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxncmlkLXZpZXdcXGdyaWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0VBQUEsa0NBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQUY7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQUo7O0FESUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmdyaWQtdmlldyB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5jb2x1bW5zLCAucm93cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI0M3Mzg0RjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29sdW1ucyB7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbn1cclxuXHJcbi5yb3dzIHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50O1xyXG4gIGdyaWQtY29sdW1uOiAxO1xyXG4gIGdyaWQtcm93OiAyO1xyXG4gIFxyXG4gID4gKiB7XHJcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgZ3JpZC1yb3c6IDI7XHJcbiAgaGVpZ2h0OiA1NTBweDtcclxuXHJcbiAgJl9faXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgyMDA7XHJcbiAgfVxyXG59XHJcblxyXG4ub3V0cHV0LXN0eWxlcyB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGNUY2O1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ncmlkLXZpZXcge1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5jb2x1bW5zLCAucm93cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0M3Mzg0RjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb2x1bW5zIHtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGdyaWQtcm93OiAxO1xufVxuXG4ucm93cyB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQ7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMjtcbn1cbi5yb3dzID4gKiB7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuXG4uZ3JpZCB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBncmlkLXJvdzogMjtcbiAgaGVpZ2h0OiA1NTBweDtcbn1cbi5ncmlkX19pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODIwMDtcbn1cblxuLm91dHB1dC1zdHlsZXMge1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGNUY2O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-view',
                template: `
    <sds-button (clickEvent)="getStyles()">
      Get Styles
    </sds-button>

    <pre
      *ngIf="generatedStyles"
      class="output-styles"
    >
.grid &#123;
    {{ generatedStyles }}
&#125;
</pre>

    <div class="grid-view">

      <div
        *ngIf="grid.columns.length > 0"
        class="columns"
        [style]="columnStyles"
      >
        <div
          *ngFor="let col of columnCount; let i = index"
          tabIndex="0"
          (click)="removeColumn(i)"
        >
          DELETE
        </div>
      </div>

      <div
        *ngIf="grid.rows.length > 0"
        class="rows"
        [style]="rowStyles"
      >
        <div
          *ngFor="let row of rowCount; let i = index"
          tabIndex="0"
          (click)="removeRow(i)"
        >
          DELETE
        </div>
      </div>

      <div
        #gridElem
        class="grid"
        [style]="styles"
      >
        <ng-container *ngIf="grid?.fillGrid">
          <div
            *ngFor="let item of count"
            class="grid__item"
          ></div>
        </ng-container>
      </div>
    </div>
  `,
                styleUrls: ['./grid-view.component.scss']
            }]
    }], null, { gridElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gridElem']
        }], grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: BuilderFormComponent, GridViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _builder_form_builder_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder-form/builder-form.component */ "./src/app/components/builder-form/builder-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuilderFormComponent", function() { return _builder_form_builder_form_component__WEBPACK_IMPORTED_MODULE_0__["BuilderFormComponent"]; });

/* harmony import */ var _grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-view/grid-view.component */ "./src/app/components/grid-view/grid-view.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridViewComponent", function() { return _grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_1__["GridViewComponent"]; });





/***/ }),

/***/ "./src/app/models/grid.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/grid.model.ts ***!
  \**************************************/
/*! exports provided: getInitialGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialGrid", function() { return getInitialGrid; });
const getInitialGrid = () => {
    return {
        columns: [{ size: '1', unit: 'fr' }, { size: '1', unit: 'fr' }],
        rows: [{ size: '1', unit: 'fr' }, { size: '1', unit: 'fr' }],
        columnGap: 10,
        rowGap: 10,
        fillGrid: true
    };
};


/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: getInitialGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.model */ "./src/app/models/grid.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialGrid", function() { return _grid_model__WEBPACK_IMPORTED_MODULE_0__["getInitialGrid"]; });




/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alex.rayner\Development\layout-builder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map