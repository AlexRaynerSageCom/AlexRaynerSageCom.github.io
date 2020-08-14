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
/* harmony import */ var _components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/grid-view/grid-view.component */ "./src/app/components/grid-view/grid-view.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "content"], [1, "title"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Grid Layout Builder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-grid-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sidebar");
    } }, directives: [_components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_1__["GridViewComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 2em;\n  line-height: 60px;\n  font-weight: bold;\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhbGV4LnJheW5lclxcRGV2ZWxvcG1lbnRcXGxheW91dC1idWlsZGVyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
    <div class="content">
      <div class="title">
        Grid Layout Builder
      </div>

      <app-grid-view>
      </app-grid-view>
    </div>

    <app-sidebar>
    </app-sidebar>
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/app.reducer */ "./src/app/store/app.reducer.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
/* harmony import */ var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sage/ng-carbon/button */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js");
/* harmony import */ var _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sage/ng-carbon/dropdown */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-dropdown.js");
/* harmony import */ var _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @sage/ng-carbon/input-text */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-input-text.js");
/* harmony import */ var _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @sage/ng-carbon/checkbox */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-checkbox.js");
/* harmony import */ var _sage_ng_carbon_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @sage/ng-carbon/icon */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-icon.js");
/* harmony import */ var _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @sage/ng-carbon/tabs */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-tabs.js");
/* harmony import */ var _sage_ng_carbon_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @sage/ng-carbon/dialog */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-dialog.js");
// Angular





// Modules

// ngrx



// Services

// Components


// NG-Carbon










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services__WEBPACK_IMPORTED_MODULE_9__["FormsService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_7__["appReducers"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({ maxAge: 20 }),
            _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"],
            _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_13__["DropdownModule"],
            _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
            _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_15__["CheckboxModule"],
            _sage_ng_carbon_icon__WEBPACK_IMPORTED_MODULE_16__["IconModule"],
            _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_17__["TabsModule"],
            _sage_ng_carbon_dialog__WEBPACK_IMPORTED_MODULE_18__["DialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _components__WEBPACK_IMPORTED_MODULE_11__["AxisFormComponent"],
        _components__WEBPACK_IMPORTED_MODULE_11__["EditAxisDialogComponent"],
        _components__WEBPACK_IMPORTED_MODULE_11__["GridFormComponent"],
        _components__WEBPACK_IMPORTED_MODULE_11__["GridViewComponent"],
        _components__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"], _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"],
        _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_13__["DropdownModule"],
        _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
        _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_15__["CheckboxModule"],
        _sage_ng_carbon_icon__WEBPACK_IMPORTED_MODULE_16__["IconModule"],
        _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_17__["TabsModule"],
        _sage_ng_carbon_dialog__WEBPACK_IMPORTED_MODULE_18__["DialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_7__["appReducers"]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({ maxAge: 20 }),
                    _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"],
                    _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_13__["DropdownModule"],
                    _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
                    _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_15__["CheckboxModule"],
                    _sage_ng_carbon_icon__WEBPACK_IMPORTED_MODULE_16__["IconModule"],
                    _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_17__["TabsModule"],
                    _sage_ng_carbon_dialog__WEBPACK_IMPORTED_MODULE_18__["DialogModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_11__["AxisFormComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_11__["EditAxisDialogComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_11__["GridFormComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_11__["GridViewComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"]
                ],
                providers: [
                    _services__WEBPACK_IMPORTED_MODULE_9__["FormsService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/axis-form/axis-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/axis-form/axis-form.component.ts ***!
  \*************************************************************/
/*! exports provided: AxisFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisFormComponent", function() { return AxisFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sage/ng-carbon/input-text */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-input-text.js");
/* harmony import */ var _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sage/ng-carbon/dropdown */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-dropdown.js");
/* harmony import */ var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sage/ng-carbon/button */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js");
// Angular







function AxisFormComponent_form_0_sds_dropdown_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sds-dropdown-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3, " ");
} }
function AxisFormComponent_form_0_sds_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sds-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function AxisFormComponent_form_0_sds_button_6_Template_sds_button_clickEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("destructive", true);
} }
function AxisFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AxisFormComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addAxis(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "sds-input-text", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "sds-dropdown", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AxisFormComponent_form_0_sds_dropdown_option_5_Template, 2, 2, "sds-dropdown-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AxisFormComponent_form_0_sds_button_6_Template, 2, 1, "sds-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "sds-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.axisForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.isFieldInvalid(ctx_r0.axisForm, "size"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.isFieldInvalid(ctx_r0.axisForm, "unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.axisUnits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.showDeleteButton ? "Update" : "Add", " ");
} }
class AxisFormComponent {
    constructor() {
        this.showDeleteButton = false;
        this.axisAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.axisRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.axisUnits = [
            'fr',
            '%',
            'px',
            'auto'
        ];
    }
    addAxis() {
        this.axisForm.markAllAsTouched();
        if (!this.axisForm.valid) {
            return;
        }
        this.axisAdded.emit();
    }
    remove() {
        this.axisRemoved.emit();
    }
    isFieldInvalid(form, field) {
        return form.get(field).touched && form.get(field).errors
            ? 'This field is required.'
            : null;
    }
}
AxisFormComponent.ɵfac = function AxisFormComponent_Factory(t) { return new (t || AxisFormComponent)(); };
AxisFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AxisFormComponent, selectors: [["app-axis-form"]], inputs: { axisForm: "axisForm", showDeleteButton: "showDeleteButton" }, outputs: { axisAdded: "axisAdded", axisRemoved: "axisRemoved" }, decls: 1, vars: 1, consts: [[3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "input-field"], ["formControlName", "size", "placeholderText", "size..", "errorType", "error", 3, "errors"], ["formControlName", "unit", "placeholder", "unit..", "errorType", "error", 3, "errors"], [3, "value", 4, "ngFor", "ngForOf"], ["buttonType", "tertiary", 3, "destructive", "clickEvent", 4, "ngIf"], ["type", "submit"], [3, "value"], ["buttonType", "tertiary", 3, "destructive", "clickEvent"]], template: function AxisFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AxisFormComponent_form_0_Template, 9, 6, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.axisForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownOptionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXhpcy1mb3JtL2F4aXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AxisFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-axis-form',
                template: `
    <form
      *ngIf="axisForm"
      [formGroup]="axisForm"
      (ngSubmit)="addAxis()"
    >
      <div class="input-field">
        <sds-input-text
          formControlName="size"
          placeholderText="size.."
          errorType="error"
          [errors]="isFieldInvalid(axisForm, 'size')"
        >
        </sds-input-text>
      </div>

      <div class="input-field">
        <sds-dropdown
          formControlName="unit"
          placeholder="unit.."
          errorType="error"
          [errors]="isFieldInvalid(axisForm, 'unit')"
        >
          <sds-dropdown-option
            *ngFor="let option of axisUnits"
            [value]="option"
          >
            {{ option }}
          </sds-dropdown-option>
        </sds-dropdown>
      </div>

      <sds-button
        *ngIf="showDeleteButton"
        buttonType="tertiary"
        [destructive]="true"
        (clickEvent)="remove()"
      >
        Remove
      </sds-button>

      <sds-button type="submit">
        {{ showDeleteButton ? 'Update' : 'Add' }}
      </sds-button>
    </form>
  `,
                styleUrls: ['./axis-form.component.scss']
            }]
    }], null, { axisForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showDeleteButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], axisAdded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], axisRemoved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/edit-axis-dialog/edit-axis-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/edit-axis-dialog/edit-axis-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditAxisDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAxisDialogComponent", function() { return EditAxisDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_store_app_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/app.action */ "./src/app/store/app.action.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _sage_ng_carbon_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sage/ng-carbon/dialog */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-dialog.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _axis_form_axis_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../axis-form/axis-form.component */ "./src/app/components/axis-form/axis-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
// Angular








class EditAxisDialogComponent {
    constructor(formsService, config, dialogRef, store) {
        this.formsService = formsService;
        this.config = config;
        this.dialogRef = dialogRef;
        this.store = store;
        this.axisForm = this.formsService.createAxisForm(config.data.axis);
        this.axisType = config.data.axisType;
        this.position = config.data.position;
    }
    update() {
        const action = this.axisType === 'column'
            ? new src_app_store_app_action__WEBPACK_IMPORTED_MODULE_1__["UpdateColumn"]({ index: this.position, axis: this.axisForm.value })
            : new src_app_store_app_action__WEBPACK_IMPORTED_MODULE_1__["UpdateRow"]({ index: this.position, axis: this.axisForm.value });
        this.store.dispatch(action);
        this.dialogRef.close();
    }
    remove() {
        this.dialogRef.close('Delete');
    }
}
EditAxisDialogComponent.ɵfac = function EditAxisDialogComponent_Factory(t) { return new (t || EditAxisDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["FormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sage_ng_carbon_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sage_ng_carbon_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
EditAxisDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditAxisDialogComponent, selectors: [["ng-component"]], decls: 5, vars: 6, consts: [[3, "showDeleteButton", "axisForm", "axisAdded", "axisRemoved"]], template: function EditAxisDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sds-dialog-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "sds-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-axis-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("axisAdded", function EditAxisDialogComponent_Template_app_axis_form_axisAdded_4_listener() { return ctx.update(); })("axisRemoved", function EditAxisDialogComponent_Template_app_axis_form_axisRemoved_4_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Edit ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.axisType), " ", ctx.position + 1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showDeleteButton", true)("axisForm", ctx.axisForm);
    } }, directives: [_sage_ng_carbon_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogHeaderComponent"], _sage_ng_carbon_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogContentComponent"], _axis_form_axis_form_component__WEBPACK_IMPORTED_MODULE_5__["AxisFormComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditAxisDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
    <sds-dialog-header>
      Edit {{ axisType | titlecase }} {{ position + 1  }}
    </sds-dialog-header>

    <sds-dialog-content>
      <app-axis-form
        [showDeleteButton]="true"
        [axisForm]="axisForm"
        (axisAdded)="update()"
        (axisRemoved)="remove()"
      >
      </app-axis-form>
    </sds-dialog-content>
  `
            }]
    }], function () { return [{ type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["FormsService"] }, { type: _sage_ng_carbon_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogConfig"] }, { type: _sage_ng_carbon_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogRef"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/grid-form/grid-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/grid-form/grid-form.component.ts ***!
  \*************************************************************/
/*! exports provided: GridFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFormComponent", function() { return GridFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sage/ng-carbon/checkbox */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-checkbox.js");
// Angular





function GridFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Column Gap (px): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Row Gap (px): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "sds-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Fill grid? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.gridForm);
} }
class GridFormComponent {
}
GridFormComponent.ɵfac = function GridFormComponent_Factory(t) { return new (t || GridFormComponent)(); };
GridFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridFormComponent, selectors: [["app-grid-form"]], inputs: { gridForm: "gridForm" }, decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "input-field"], ["type", "number", "min", "0", "formControlName", "columnGap"], ["type", "number", "min", "0", "formControlName", "rowGap"], ["formControlName", "fillGrid", "size", "large"]], template: function GridFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GridFormComponent_form_0_Template, 12, 1, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gridForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC1mb3JtL2dyaWQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-form',
                template: `
    <form
      *ngIf="gridForm"
      [formGroup]="gridForm"
    >
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

      <div class="input-field">
        <sds-checkbox
          formControlName="fillGrid"
          size="large"
        >
          Fill grid?
        </sds-checkbox>
      </div>
    </form>
  `,
                styleUrls: ['./grid-form.component.scss']
            }]
    }], null, { gridForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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
/* harmony import */ var _store_app_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/app.selector */ "./src/app/store/app.selector.ts");
/* harmony import */ var src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/app.action */ "./src/app/store/app.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _edit_axis_dialog_edit_axis_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-axis-dialog/edit-axis-dialog.component */ "./src/app/components/edit-axis-dialog/edit-axis-dialog.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _sage_ng_carbon_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sage/ng-carbon/dialog */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
// Angular



// libs


// Components





function GridViewComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridViewComponent_div_1_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.editAxis(i_r5, "column"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " EDIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GridViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridViewComponent_div_1_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.columnStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.columnCount);
} }
function GridViewComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridViewComponent_div_2_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.editAxis(i_r10, "row"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " EDIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GridViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridViewComponent_div_2_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.rowStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.rowCount);
} }
function GridViewComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ITEM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GridViewComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridViewComponent_ng_container_4_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.count);
} }
class GridViewComponent {
    constructor(store, dialogService) {
        this.store = store;
        this.dialogService = dialogService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.store.select(_store_app_selector__WEBPACK_IMPORTED_MODULE_1__["selectGrid"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe(grid => {
            this.grid = grid;
        });
    }
    editAxis(index, axisType) {
        this.dialogService.open(_edit_axis_dialog_edit_axis_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditAxisDialogComponent"], {
            size: 'medium-small',
            showCloseIcon: true,
            data: {
                axis: this.grid[`${axisType}s`][index],
                axisType,
                position: index
            }
        }).onClosed.subscribe(result => {
            if (result === 'Delete') {
                if (axisType === 'column') {
                    this.removeColumn(index);
                }
                else {
                    this.removeRow(index);
                }
            }
        });
    }
    removeColumn(index) {
        this.store.dispatch(new src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__["DeleteColumn"](index));
    }
    removeRow(index) {
        this.store.dispatch(new src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__["DeleteRow"](index));
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
        return Object.assign(Object.assign({ display: 'grid' }, this.columnStyles), this.rowStyles);
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
GridViewComponent.ɵfac = function GridViewComponent_Factory(t) { return new (t || GridViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sage_ng_carbon_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogService"])); };
GridViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridViewComponent, selectors: [["app-grid-view"]], decls: 5, vars: 5, consts: [[1, "grid-view"], ["class", "columns", 3, "style", 4, "ngIf"], ["class", "rows", 3, "style", 4, "ngIf"], ["id", "grid", 1, "grid"], [4, "ngIf"], [1, "columns"], ["tabIndex", "0", 3, "click", 4, "ngFor", "ngForOf"], ["tabIndex", "0", 3, "click"], [1, "rows"], ["class", "grid__item", 4, "ngFor", "ngForOf"], [1, "grid__item"]], template: function GridViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridViewComponent_div_1_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridViewComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GridViewComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.grid.columns.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.grid.rows.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.styles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.grid == null ? null : ctx.grid.fillGrid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  flex: 1;\n}\n\n.grid-view[_ngcontent-%COMP%] {\n  height: calc(100% - 32px);\n  padding: 16px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr;\n  gap: 10px;\n}\n\n.columns[_ngcontent-%COMP%], .rows[_ngcontent-%COMP%] {\n  display: grid;\n  font-weight: bold;\n  color: var(--color-primary);\n  text-align: center;\n  cursor: pointer;\n}\n\n.columns[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.rows[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-min-content;\n  grid-template-columns: min-content;\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.rows[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  writing-mode: vertical-lr;\n  transform: rotate(-180deg);\n}\n\n.grid[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 2;\n}\n\n.grid__item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-primary);\n  color: #fff;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvQzpcXFVzZXJzXFxhbGV4LnJheW5lclxcRGV2ZWxvcG1lbnRcXGxheW91dC1idWlsZGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxncmlkLXZpZXdcXGdyaWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLE9BQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQ0FBQTtFQUFBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDRjs7QURDRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQUY7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4OiAxXHJcbn1cclxuXHJcbi5ncmlkLXZpZXcge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5jb2x1bW5zLCAucm93cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbHVtbnMge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIGdyaWQtcm93OiAxO1xyXG59XHJcblxyXG4ucm93cyB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudDtcclxuICBncmlkLWNvbHVtbjogMTtcclxuICBncmlkLXJvdzogMjtcclxuICBcclxuICA+ICoge1xyXG4gICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmdyaWQge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIGdyaWQtcm93OiAyO1xyXG5cclxuICAmX19pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleDogMTtcbn1cblxuLmdyaWQtdmlldyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIGdhcDogMTBweDtcbn1cblxuLmNvbHVtbnMsIC5yb3dzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb2x1bW5zIHtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGdyaWQtcm93OiAxO1xufVxuXG4ucm93cyB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQ7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMjtcbn1cbi5yb3dzID4gKiB7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuXG4uZ3JpZCB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBncmlkLXJvdzogMjtcbn1cbi5ncmlkX19pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-view',
                template: `
    <div class="grid-view">
      <div
        *ngIf="grid.columns.length > 0"
        class="columns"
        [style]="columnStyles"
      >
        <div
          *ngFor="let col of columnCount; let i = index"
          tabIndex="0"
          (click)="editAxis(i, 'column')"
        >
          EDIT
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
          (click)="editAxis(i, 'row')"
        >
          EDIT
        </div>
      </div>

      <div
        id="grid"
        class="grid"
        [style]="styles"
      >
        <ng-container *ngIf="grid?.fillGrid">
          <div
            *ngFor="let item of count"
            class="grid__item"
          >
            ITEM
          </div>
        </ng-container>
      </div>
    </div>
  `,
                styleUrls: ['./grid-view.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: _sage_ng_carbon_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: AxisFormComponent, EditAxisDialogComponent, GridFormComponent, GridViewComponent, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axis_form_axis_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axis-form/axis-form.component */ "./src/app/components/axis-form/axis-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AxisFormComponent", function() { return _axis_form_axis_form_component__WEBPACK_IMPORTED_MODULE_0__["AxisFormComponent"]; });

/* harmony import */ var _edit_axis_dialog_edit_axis_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-axis-dialog/edit-axis-dialog.component */ "./src/app/components/edit-axis-dialog/edit-axis-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditAxisDialogComponent", function() { return _edit_axis_dialog_edit_axis_dialog_component__WEBPACK_IMPORTED_MODULE_1__["EditAxisDialogComponent"]; });

/* harmony import */ var _grid_form_grid_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-form/grid-form.component */ "./src/app/components/grid-form/grid-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridFormComponent", function() { return _grid_form_grid_form_component__WEBPACK_IMPORTED_MODULE_2__["GridFormComponent"]; });

/* harmony import */ var _grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-view/grid-view.component */ "./src/app/components/grid-view/grid-view.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridViewComponent", function() { return _grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_3__["GridViewComponent"]; });

/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]; });








/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_app_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/app.selector */ "./src/app/store/app.selector.ts");
/* harmony import */ var src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/app.action */ "./src/app/store/app.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _grid_form_grid_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../grid-form/grid-form.component */ "./src/app/components/grid-form/grid-form.component.ts");
/* harmony import */ var _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sage/ng-carbon/tabs */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-tabs.js");
/* harmony import */ var _axis_form_axis_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../axis-form/axis-form.component */ "./src/app/components/axis-form/axis-form.component.ts");
/* harmony import */ var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sage/ng-carbon/button */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
// Angular



// rxjs









function SidebarComponent_pre_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#grid {\n    ", ctx_r0.generatedStyles, "\n}\n");
} }
class SidebarComponent {
    constructor(store, formsService) {
        this.store = store;
        this.formsService = formsService;
    }
    ngOnInit() {
        this.store.select(_store_app_selector__WEBPACK_IMPORTED_MODULE_1__["selectGrid"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(grid => {
            this.gridForm = this.formsService.createGridForm(grid);
            this.gridForm.valueChanges.subscribe(updatedGrid => {
                this.store.dispatch(new src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__["UpdateGrid"](updatedGrid));
            });
        });
        this.columnForm = this.formsService.createAxisForm();
        this.rowForm = this.formsService.createAxisForm();
    }
    addColumn() {
        this.store.dispatch(new src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__["AddColumn"](this.columnForm.value));
        this.columnForm.reset();
    }
    addRow() {
        this.store.dispatch(new src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__["AddRow"](this.rowForm.value));
        this.rowForm.reset();
    }
    getStyles() {
        const styles = document.getElementById('grid').style.cssText;
        this.generatedStyles = styles.replace(/; /g, ';\n    ');
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_5__["FormsService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 20, vars: 4, consts: [[1, "sidebar"], [1, "heading"], [3, "gridForm"], [3, "tabSelected"], [3, "axisForm", "axisAdded"], [3, "clickEvent"], ["class", "output-styles", 4, "ngIf"], [1, "output-styles"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-grid-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "sds-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "sds-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "sds-tab-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabSelected", function SidebarComponent_Template_sds_tab_header_tabSelected_7_listener() { return ctx.columnForm.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add Column ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "sds-tab-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-axis-form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("axisAdded", function SidebarComponent_Template_app_axis_form_axisAdded_10_listener() { return ctx.addColumn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "sds-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "sds-tab-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabSelected", function SidebarComponent_Template_sds_tab_header_tabSelected_12_listener() { return ctx.rowForm.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Add Row ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "sds-tab-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-axis-form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("axisAdded", function SidebarComponent_Template_app_axis_form_axisAdded_15_listener() { return ctx.addRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "sds-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function SidebarComponent_Template_sds_button_clickEvent_17_listener() { return ctx.getStyles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Get Styles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SidebarComponent_pre_19_Template, 2, 1, "pre", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridForm", ctx.gridForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("axisForm", ctx.columnForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("axisForm", ctx.rowForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.generatedStyles);
    } }, directives: [_grid_form_grid_form_component__WEBPACK_IMPORTED_MODULE_6__["GridFormComponent"], _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_7__["ɵb"], _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_7__["ɵc"], _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_7__["ɵd"], _axis_form_axis_form_component__WEBPACK_IMPORTED_MODULE_8__["AxisFormComponent"], _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: [".sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 16px;\n  height: calc(100% - 32px);\n  width: 350px;\n  overflow: auto;\n  background-color: #fff;\n  box-shadow: 0 10px 20px 0 rgba(0, 20, 29, 0.2), 0 20px 40px 0 rgba(0, 20, 29, 0.1);\n}\n.sidebar__toggle[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 100%;\n  font-size: 1.5em;\n  cursor: pointer;\n  background-color: var(--color-primary);\n}\n.sidebar__toggle[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-hover);\n}\n.output-styles[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  padding: 16px;\n  background-color: var(--color-slate-90);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0M6XFxVc2Vyc1xcYWxleC5yYXluZXJcXERldmVsb3BtZW50XFxsYXlvdXQtYnVpbGRlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrRkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUNDSjtBRENJO0VBQ0Usb0NBQUE7QUNDTjtBRElBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggMCByZ2JhKDAsMjAsMjksMC4yKSwgMCAyMHB4IDQwcHggMCByZ2JhKDAsMjAsMjksMC4xKTtcclxuXHJcbiAgJl9fdG9nZ2xlIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhvdmVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5vdXRwdXQtc3R5bGVzIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zbGF0ZS05MCk7XHJcbn1cclxuIiwiLnNpZGViYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XG4gIHdpZHRoOiAzNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiYSgwLCAyMCwgMjksIDAuMiksIDAgMjBweCA0MHB4IDAgcmdiYSgwLCAyMCwgMjksIDAuMSk7XG59XG4uc2lkZWJhcl9fdG9nZ2xlIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi5zaWRlYmFyX190b2dnbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ob3Zlcik7XG59XG5cbi5vdXRwdXQtc3R5bGVzIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zbGF0ZS05MCk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                template: `
    <div class="sidebar">
      <!-- <div
        class="sidebar__toggle"
        (click)="toggleSidebar()"
      >
        <sds-icon
          type="dark-background"
          [iconType]="open ? 'arrow_left' : 'arrow_right'"
        >
        </sds-icon>
      </div> -->

      <div class="heading">Configuration</div>

      <app-grid-form [gridForm]="gridForm">
      </app-grid-form>

      <hr/>

      <sds-tabs>
        <sds-tab>
          <sds-tab-header (tabSelected)="columnForm.reset()">
            Add Column
          </sds-tab-header>
          <sds-tab-content>
            <app-axis-form
              [axisForm]="columnForm"
              (axisAdded)="addColumn()"
            >
            </app-axis-form>
          </sds-tab-content>
        </sds-tab>

        <sds-tab>
          <sds-tab-header (tabSelected)="rowForm.reset()">
            Add Row
          </sds-tab-header>
          <sds-tab-content>
            <app-axis-form
              [axisForm]="rowForm"
              (axisAdded)="addRow()"
            >
            </app-axis-form>
          </sds-tab-content>
        </sds-tab>
      </sds-tabs>

      <hr/>

      <sds-button (clickEvent)="getStyles()">
        Get Styles
      </sds-button>

      <pre
        *ngIf="generatedStyles"
        class="output-styles"
      >
#grid &#123;
    {{ generatedStyles }}
&#125;
</pre>

    </div>
  `,
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["FormsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/axis.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/axis.model.ts ***!
  \**************************************/
/*! exports provided: getInitialAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialAxis", function() { return getInitialAxis; });
const getInitialAxis = () => {
    return { size: '1', unit: 'fr' };
};


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
/* harmony import */ var _axis_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axis.model */ "./src/app/models/axis.model.ts");

const getInitialGrid = () => {
    return {
        columns: [
            Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])(),
            Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])(),
            Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])(),
            Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])()
        ],
        rows: [
            Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])(),
            Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])(),
            Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])(),
            Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])()
        ],
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
/*! exports provided: getInitialAxis, getInitialGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axis_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axis.model */ "./src/app/models/axis.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialAxis", function() { return _axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"]; });

/* harmony import */ var _grid_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.model */ "./src/app/models/grid.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialGrid", function() { return _grid_model__WEBPACK_IMPORTED_MODULE_1__["getInitialGrid"]; });





/***/ }),

/***/ "./src/app/services/forms.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/forms.service.ts ***!
  \*******************************************/
/*! exports provided: FormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsService", function() { return FormsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class FormsService {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    createGridForm(grid) {
        return this.formBuilder.group({
            columnGap: grid.columnGap,
            rowGap: grid.rowGap,
            fillGrid: grid.fillGrid,
        });
    }
    createAxisForm(axis) {
        var _a, _b;
        return this.formBuilder.group({
            size: [(_a = axis === null || axis === void 0 ? void 0 : axis.size) !== null && _a !== void 0 ? _a : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            unit: [(_b = axis === null || axis === void 0 ? void 0 : axis.unit) !== null && _b !== void 0 ? _b : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
}
FormsService.ɵfac = function FormsService_Factory(t) { return new (t || FormsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
FormsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormsService, factory: FormsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: FormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.service */ "./src/app/services/forms.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormsService", function() { return _forms_service__WEBPACK_IMPORTED_MODULE_0__["FormsService"]; });




/***/ }),

/***/ "./src/app/store/app.action.ts":
/*!*************************************!*\
  !*** ./src/app/store/app.action.ts ***!
  \*************************************/
/*! exports provided: UPDATE_GRID, UpdateGrid, ADD_COLUMN, AddColumn, ADD_ROW, AddRow, UPDATE_COLUMN, UpdateColumn, UPDATE_ROW, UpdateRow, DELETE_COLUMN, DeleteColumn, DELETE_ROW, DeleteRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_GRID", function() { return UPDATE_GRID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateGrid", function() { return UpdateGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COLUMN", function() { return ADD_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddColumn", function() { return AddColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ROW", function() { return ADD_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRow", function() { return AddRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COLUMN", function() { return UPDATE_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateColumn", function() { return UpdateColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ROW", function() { return UPDATE_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRow", function() { return UpdateRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COLUMN", function() { return DELETE_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteColumn", function() { return DeleteColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ROW", function() { return DELETE_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRow", function() { return DeleteRow; });
////////////////////////////////////////////////////////////////////////////////
// Update Grid
////////////////////////////////////////////////////////////////////////////////
const UPDATE_GRID = '[Builder] UPDATE_GRID';
class UpdateGrid {
    constructor(grid) {
        this.grid = grid;
        this.type = UPDATE_GRID;
    }
}
////////////////////////////////////////////////////////////////////////////////
// Add Column
////////////////////////////////////////////////////////////////////////////////
const ADD_COLUMN = '[Builder] ADD_COLUMN';
class AddColumn {
    constructor(column) {
        this.column = column;
        this.type = ADD_COLUMN;
    }
}
////////////////////////////////////////////////////////////////////////////////
// Add Row
////////////////////////////////////////////////////////////////////////////////
const ADD_ROW = '[Builder] ADD_ROW';
class AddRow {
    constructor(row) {
        this.row = row;
        this.type = ADD_ROW;
    }
}
////////////////////////////////////////////////////////////////////////////////
// Update Column
////////////////////////////////////////////////////////////////////////////////
const UPDATE_COLUMN = '[Builder] UPDATE_COLUMN';
class UpdateColumn {
    constructor(column) {
        this.column = column;
        this.type = UPDATE_COLUMN;
    }
}
////////////////////////////////////////////////////////////////////////////////
// Update Column
////////////////////////////////////////////////////////////////////////////////
const UPDATE_ROW = '[Builder] UPDATE_ROW';
class UpdateRow {
    constructor(row) {
        this.row = row;
        this.type = UPDATE_ROW;
    }
}
////////////////////////////////////////////////////////////////////////////////
// Delete Column
////////////////////////////////////////////////////////////////////////////////
const DELETE_COLUMN = '[Builder] DELETE_COLUMN';
class DeleteColumn {
    constructor(position) {
        this.position = position;
        this.type = DELETE_COLUMN;
    }
}
////////////////////////////////////////////////////////////////////////////////
// Delete Row
////////////////////////////////////////////////////////////////////////////////
const DELETE_ROW = '[Builder] DELETE_ROW';
class DeleteRow {
    constructor(position) {
        this.position = position;
        this.type = DELETE_ROW;
    }
}


/***/ }),

/***/ "./src/app/store/app.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: builderReducer, appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "builderReducer", function() { return builderReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _app_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.action */ "./src/app/store/app.action.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");


const defaultBuilderState = {
    grid: Object(_models__WEBPACK_IMPORTED_MODULE_1__["getInitialGrid"])()
};
function builderReducer(state = defaultBuilderState, action) {
    switch (action.type) {
        ////////////////////////////////////////////////////////////////////////////////
        // Update Grid
        ////////////////////////////////////////////////////////////////////////////////
        case _app_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_GRID"]: {
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), action.grid) });
        }
        ////////////////////////////////////////////////////////////////////////////////
        // Add Column
        ////////////////////////////////////////////////////////////////////////////////
        case _app_action__WEBPACK_IMPORTED_MODULE_0__["ADD_COLUMN"]: {
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), { columns: [
                        ...state.grid.columns,
                        action.column
                    ] }) });
        }
        ////////////////////////////////////////////////////////////////////////////////
        // Add Row
        ////////////////////////////////////////////////////////////////////////////////
        case _app_action__WEBPACK_IMPORTED_MODULE_0__["ADD_ROW"]: {
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), { rows: [
                        ...state.grid.rows,
                        action.row
                    ] }) });
        }
        ////////////////////////////////////////////////////////////////////////////////
        // Update Column
        ////////////////////////////////////////////////////////////////////////////////
        case _app_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_COLUMN"]: {
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), { columns: state.grid.columns.map((column, index) => {
                        return action.column.index === index
                            ? action.column.axis
                            : column;
                    }) }) });
        }
        ////////////////////////////////////////////////////////////////////////////////
        // Update Row
        ////////////////////////////////////////////////////////////////////////////////
        case _app_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ROW"]: {
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), { rows: state.grid.rows.map((row, index) => {
                        return action.row.index === index
                            ? action.row.axis
                            : row;
                    }) }) });
        }
        ////////////////////////////////////////////////////////////////////////////////
        // Delete Column
        ////////////////////////////////////////////////////////////////////////////////
        case _app_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_COLUMN"]: {
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), { columns: state.grid.columns
                        .filter((column, index) => action.position !== index) }) });
        }
        ////////////////////////////////////////////////////////////////////////////////
        // Delete Row
        ////////////////////////////////////////////////////////////////////////////////
        case _app_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_ROW"]: {
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), { rows: state.grid.rows
                        .filter((row, index) => action.position !== index) }) });
        }
        default: {
            return state;
        }
    }
}
const appReducers = {
    app: builderReducer
};


/***/ }),

/***/ "./src/app/store/app.selector.ts":
/*!***************************************!*\
  !*** ./src/app/store/app.selector.ts ***!
  \***************************************/
/*! exports provided: selectBuilder, selectGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBuilder", function() { return selectBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectGrid", function() { return selectGrid; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
// ngrx

const selectBuilder = (state) => state.app;
const selectGrid = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBuilder, (state) => state.grid);


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