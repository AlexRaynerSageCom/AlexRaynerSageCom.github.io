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





// TODO: remove routing
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
/* harmony import */ var _store_app_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/app.selector */ "./src/app/store/app.selector.ts");
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/app.action */ "./src/app/store/app.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models */ "./src/app/models/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_grid_form_grid_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/grid-form/grid-form.component */ "./src/app/components/grid-form/grid-form.component.ts");
/* harmony import */ var _components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/grid-view/grid-view.component */ "./src/app/components/grid-view/grid-view.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sage/ng-carbon/button */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js");
/* harmony import */ var _pipes_camel_to_kebab_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/camel-to-kebab.pipe */ "./src/app/pipes/camel-to-kebab.pipe.ts");
// Angular



// rxjs











function AppComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "camelToKebab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const style_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("  ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, style_r2.key), ": ", style_r2.value, ";\n");
} }
function AppComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemStyle_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n  .item-", i_r4, " {\n    grid-area: ", itemStyle_r3.gridArea, ";\n  }\n");
} }
class AppComponent {
    constructor(store, formsService) {
        this.store = store;
        this.formsService = formsService;
        this.styles$ = this.store.select(_store_app_selector__WEBPACK_IMPORTED_MODULE_1__["selectGridStyle"]);
        this.itemStyles$ = this.store.select(_store_app_selector__WEBPACK_IMPORTED_MODULE_1__["selectGridItemStyles"]);
        this.html$ = this.store.select(_store_app_selector__WEBPACK_IMPORTED_MODULE_1__["selectHTML"]);
    }
    ngOnInit() {
        this.store.select(_store_app_selector__WEBPACK_IMPORTED_MODULE_1__["selectGrid"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(grid => {
            this.gridForm = this.formsService.createGridForm(grid);
            this.gridForm.valueChanges.subscribe(updatedGrid => {
                this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_2__["UpdateGrid"](updatedGrid));
            });
        });
    }
    createGridForm(grid) {
        this.gridForm = this.formsService.createGridForm(grid);
        this.gridForm.valueChanges.subscribe(updatedGrid => {
            this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_2__["UpdateGrid"](updatedGrid));
        });
    }
    addColumn() {
        const columnForms = this.gridForm.get('columns');
        columnForms.push(this.formsService.createAxisForm({ size: '1', unit: 'fr' }));
    }
    addRow() {
        const rowForms = this.gridForm.get('rows');
        rowForms.push(this.formsService.createAxisForm({ size: '1', unit: 'fr' }));
    }
    resetForm() {
        const defaultGrid = Object(_models__WEBPACK_IMPORTED_MODULE_4__["getInitialGrid"])();
        this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_2__["ResetGrid"](defaultGrid));
        this.createGridForm(defaultGrid);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["FormsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 30, vars: 12, consts: [[1, "title"], [3, "gridForm", "columnAdded", "rowAdded"], [1, "content"], [1, "heading"], [1, "generated-styles"], [4, "ngFor", "ngForOf"], [3, "clickEvent"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Grid Layout Builder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-grid-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("columnAdded", function AppComponent_Template_app_grid_form_columnAdded_3_listener() { return ctx.addColumn(); })("rowAdded", function AppComponent_Template_app_grid_form_rowAdded_3_listener() { return ctx.addRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-grid-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CSS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ".grid-container {\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_span_13_Template, 3, 4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_span_16_Template, 2, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "HTML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "sds-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function AppComponent_Template_sds_button_clickEvent_28_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridForm", ctx.gridForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 6, ctx.styles$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 8, ctx.itemStyles$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 10, ctx.html$));
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_grid_form_grid_form_component__WEBPACK_IMPORTED_MODULE_8__["GridFormComponent"], _components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_9__["GridViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _pipes_camel_to_kebab_pipe__WEBPACK_IMPORTED_MODULE_12__["CamelToKebabPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n\n.generated-styles[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  padding: 8px;\n  width: 100%;\n  background-color: var(--color-slate-90);\n  font-family: monospace;\n  word-break: break-all;\n  word-break: break-word;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhbGV4LnJheW5lclxcRGV2ZWxvcG1lbnRcXGxheW91dC1idWlsZGVyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uZ2VuZXJhdGVkLXN0eWxlcyB7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2xhdGUtOTApO1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmdlbmVyYXRlZC1zdHlsZXMge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBwYWRkaW5nOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zbGF0ZS05MCk7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
    <app-sidebar>
      <div class="title">
        Grid Layout Builder
      </div>

      <app-grid-form
        [gridForm]="gridForm"
        (columnAdded)="addColumn()"
        (rowAdded)="addRow()"
      >
      </app-grid-form>
    </app-sidebar>

    <div class="content">
      <app-grid-view>
      </app-grid-view>
    </div>

    <app-sidebar>
      <div class="heading">CSS:</div>

      <pre>
        <div class="generated-styles">.grid-container &#123;
<span
  *ngFor="let style of (styles$ | async) | keyvalue"
>  {{ style.key | camelToKebab }}: {{ style.value }};
</span><span
  *ngFor="let itemStyle of (itemStyles$ | async); let i = index"
>
  .item-{{ i }} &#123;
    grid-area: {{ itemStyle.gridArea }};
  &#125;
</span>&#125;</div>
      </pre>

      <div class="heading">HTML:</div>

      <pre>
        <div class="generated-styles">{{ html$ | async }}</div>
      </pre>

      <sds-button (clickEvent)="resetForm()">
        Reset
      </sds-button>
    </app-sidebar>
  `,
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _services__WEBPACK_IMPORTED_MODULE_6__["FormsService"] }]; }, null); })();


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
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes */ "./src/app/pipes/index.ts");
// Angular





// Modules

// ngrx



// Services

// Components


// NG-Carbon







// Pipes




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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [
        // Components
        _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _components__WEBPACK_IMPORTED_MODULE_11__["AxisFormComponent"],
        _components__WEBPACK_IMPORTED_MODULE_11__["AxisGapFormComponent"],
        _components__WEBPACK_IMPORTED_MODULE_11__["GridFormComponent"],
        _components__WEBPACK_IMPORTED_MODULE_11__["GridViewComponent"],
        _components__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
        // Pipes
        _pipes__WEBPACK_IMPORTED_MODULE_19__["CamelToKebabPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
                    // Components
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_11__["AxisFormComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_11__["AxisGapFormComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_11__["GridFormComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_11__["GridViewComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                    // Pipes
                    _pipes__WEBPACK_IMPORTED_MODULE_19__["CamelToKebabPipe"]
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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sage/ng-carbon/dropdown */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-dropdown.js");
/* harmony import */ var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sage/ng-carbon/button */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js");
/* harmony import */ var _sage_ng_carbon_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sage/ng-carbon/icon */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-icon.js");
/* harmony import */ var _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sage/ng-carbon/input-text */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-input-text.js");
// Angular

// Models








function AxisFormComponent_form_0_ng_container_1_sds_input_text_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sds-input-text", 9);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r3.isFieldInvalid(ctx_r3.axisForm, "size"));
} }
function AxisFormComponent_form_0_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 10);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("input-error", ctx_r5.isFieldInvalid(ctx_r5.axisForm, "size"));
} }
function AxisFormComponent_form_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AxisFormComponent_form_0_ng_container_1_sds_input_text_1_Template, 1, 1, "sds-input-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AxisFormComponent_form_0_ng_container_1_ng_template_2_Template, 1, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.axisForm.get("unit").value === "minmax")("ngIfElse", _r4);
} }
function AxisFormComponent_form_0_sds_dropdown_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sds-dropdown-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r6, " ");
} }
function AxisFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AxisFormComponent_form_0_ng_container_1_Template, 4, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sds-dropdown", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AxisFormComponent_form_0_sds_dropdown_option_3_Template, 2, 2, "sds-dropdown-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "sds-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function AxisFormComponent_form_0_Template_sds_button_clickEvent_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "sds-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.axisForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showSizeInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("axis-form__unit--stretch", !ctx_r0.showSizeInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.isFieldInvalid(ctx_r0.axisForm, "unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.axisUnits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("destructive", true);
} }
// TODO: need to set a default minmax when selected
class AxisFormComponent {
    constructor() {
        this.axisRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.axisUnits = _models__WEBPACK_IMPORTED_MODULE_1__["Units"];
    }
    get showSizeInput() {
        return !['auto', 'min-content', 'max-content'].includes(this.axisForm.get('unit').value);
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
AxisFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AxisFormComponent, selectors: [["app-axis-form"]], inputs: { axisForm: "axisForm" }, outputs: { axisRemoved: "axisRemoved" }, decls: 1, vars: 1, consts: [["class", "axis-form", 3, "formGroup", 4, "ngIf"], [1, "axis-form", 3, "formGroup"], [4, "ngIf"], ["formControlName", "unit", "placeholder", "unit", "errorType", "error", 1, "axis-form__unit", 3, "errors"], [3, "value", 4, "ngFor", "ngForOf"], ["buttonType", "tertiary", 1, "axis-form__delete", 3, "destructive", "clickEvent"], ["iconType", "close"], ["class", "axis-form__size", "formControlName", "size", "placeholderText", "min, max", "errorType", "error", 3, "errors", 4, "ngIf", "ngIfElse"], ["numberInput", ""], ["formControlName", "size", "placeholderText", "min, max", "errorType", "error", 1, "axis-form__size", 3, "errors"], ["type", "number", "placeholder", "size", "min", "0", "formControlName", "size", 1, "axis-form__size"], [3, "value"]], template: function AxisFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AxisFormComponent_form_0_Template, 6, 7, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.axisForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _sage_ng_carbon_icon__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_7__["InputTextComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownOptionComponent"]], styles: [".axis-form[_ngcontent-%COMP%] {\n  display: grid;\n  margin-bottom: 8px;\n  grid-template-columns: 85px auto 34px;\n  grid-column-gap: 8px;\n}\n.axis-form__size[_ngcontent-%COMP%] {\n  grid-column: 1;\n}\n.axis-form__unit[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n.axis-form__unit--stretch[_ngcontent-%COMP%] {\n  grid-column: 1/span 2;\n}\n.axis-form__delete[_ngcontent-%COMP%] {\n  grid-column: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9heGlzLWZvcm0vQzpcXFVzZXJzXFxhbGV4LnJheW5lclxcRGV2ZWxvcG1lbnRcXGxheW91dC1idWlsZGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxheGlzLWZvcm1cXGF4aXMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9heGlzLWZvcm0vYXhpcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQkFBQTtBQ0NGO0FEQ0U7RUFDRSxjQUFBO0FDQ0o7QURFRTtFQUNFLGNBQUE7QUNBSjtBREVJO0VBQ0UscUJBQUE7QUNBTjtBRElFO0VBQ0UsY0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9heGlzLWZvcm0vYXhpcy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF4aXMtZm9ybSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4NXB4IGF1dG8gMzRweDtcclxuICBncmlkLWNvbHVtbi1nYXA6IDhweDtcclxuXHJcbiAgJl9fc2l6ZSB7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICB9XHJcblxyXG4gICZfX3VuaXQge1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcblxyXG4gICAgJi0tc3RyZXRjaCB7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fZGVsZXRlIHtcclxuICAgIGdyaWQtY29sdW1uOiAzO1xyXG4gIH1cclxufSIsIi5heGlzLWZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODVweCBhdXRvIDM0cHg7XG4gIGdyaWQtY29sdW1uLWdhcDogOHB4O1xufVxuLmF4aXMtZm9ybV9fc2l6ZSB7XG4gIGdyaWQtY29sdW1uOiAxO1xufVxuLmF4aXMtZm9ybV9fdW5pdCB7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuLmF4aXMtZm9ybV9fdW5pdC0tc3RyZXRjaCB7XG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcbn1cbi5heGlzLWZvcm1fX2RlbGV0ZSB7XG4gIGdyaWQtY29sdW1uOiAzO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AxisFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-axis-form',
                template: `
    <form
      *ngIf="axisForm"
      class="axis-form"
      [formGroup]="axisForm"
    >
      <ng-container *ngIf="showSizeInput">
        <sds-input-text
          *ngIf="axisForm.get('unit').value === 'minmax'; else numberInput"
          class="axis-form__size"
          formControlName="size"
          placeholderText="min, max"
          errorType="error"
          [errors]="isFieldInvalid(axisForm, 'size')"
        >
        </sds-input-text>

        <ng-template #numberInput>
          <input
            class="axis-form__size"
            [class.input-error]="isFieldInvalid(axisForm, 'size')"
            type="number"
            placeholder="size"
            min="0"
            formControlName="size"
          />
        </ng-template>
      </ng-container>

      <sds-dropdown
        class="axis-form__unit"
        [class.axis-form__unit--stretch]="!showSizeInput"
        formControlName="unit"
        placeholder="unit"
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

      <sds-button
        class="axis-form__delete"
        buttonType="tertiary"
        [destructive]="true"
        (clickEvent)="remove()"
      >
        <sds-icon iconType="close"></sds-icon>
      </sds-button>
    </form>
  `,
                styleUrls: ['./axis-form.component.scss']
            }]
    }], null, { axisForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], axisRemoved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/axis-gap-form/axis-gap-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/axis-gap-form/axis-gap-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: AxisGapFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisGapFormComponent", function() { return AxisGapFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sage/ng-carbon/dropdown */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-dropdown.js");
// Angular

// Models





function AxisGapFormComponent_form_0_sds_dropdown_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sds-dropdown-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2, " ");
} }
function AxisGapFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sds-dropdown", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AxisGapFormComponent_form_0_sds_dropdown_option_3_Template, 2, 2, "sds-dropdown-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.axisGapForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("input-error", ctx_r0.isFieldInvalid(ctx_r0.axisGapForm, "size"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.gapOptions);
} }
class AxisGapFormComponent {
    constructor() {
        this.gapOptions = _models__WEBPACK_IMPORTED_MODULE_1__["GapUnits"];
    }
    isFieldInvalid(form, field) {
        return form.get(field).touched && form.get(field).errors
            ? 'This field is required.'
            : null;
    }
}
AxisGapFormComponent.ɵfac = function AxisGapFormComponent_Factory(t) { return new (t || AxisGapFormComponent)(); };
AxisGapFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AxisGapFormComponent, selectors: [["app-axis-gap-form"]], inputs: { axisGapForm: "axisGapForm" }, decls: 1, vars: 1, consts: [["class", "axis-gap-form", 3, "formGroup", 4, "ngIf"], [1, "axis-gap-form", 3, "formGroup"], ["type", "number", "placeholder", "size", "min", "0", "formControlName", "size"], ["formControlName", "unit", "placeholder", "unit"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AxisGapFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AxisGapFormComponent_form_0_Template, 4, 4, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.axisGapForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownOptionComponent"]], styles: [".axis-gap-form[_ngcontent-%COMP%] {\n  display: grid;\n  margin-bottom: 8px;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9heGlzLWdhcC1mb3JtL0M6XFxVc2Vyc1xcYWxleC5yYXluZXJcXERldmVsb3BtZW50XFxsYXlvdXQtYnVpbGRlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcYXhpcy1nYXAtZm9ybVxcYXhpcy1nYXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9heGlzLWdhcC1mb3JtL2F4aXMtZ2FwLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F4aXMtZ2FwLWZvcm0vYXhpcy1nYXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5heGlzLWdhcC1mb3JtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA4cHg7XHJcbn0iLCIuYXhpcy1nYXAtZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDhweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AxisGapFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-axis-gap-form',
                template: `
    <form
      *ngIf="axisGapForm"
      class="axis-gap-form"
      [formGroup]="axisGapForm"
    >
      <input
        [class.input-error]="isFieldInvalid(axisGapForm, 'size')"
        type="number"
        placeholder="size"
        min="0"
        formControlName="size"
      />

      <sds-dropdown
        formControlName="unit"
        placeholder="unit"
      >
        <sds-dropdown-option
          *ngFor="let option of gapOptions"
          [value]="option"
        >
          {{ option }}
        </sds-dropdown-option>
      </sds-dropdown>
    </form>
  `,
                styleUrls: ['./axis-gap-form.component.scss']
            }]
    }], null, { axisGapForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sage/ng-carbon/button */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js");
/* harmony import */ var _axis_gap_form_axis_gap_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../axis-gap-form/axis-gap-form.component */ "./src/app/components/axis-gap-form/axis-gap-form.component.ts");
/* harmony import */ var _axis_form_axis_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../axis-form/axis-form.component */ "./src/app/components/axis-form/axis-form.component.ts");
// Angular







function GridFormComponent_form_0_app_axis_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-axis-form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("axisRemoved", function GridFormComponent_form_0_app_axis_form_5_Template_app_axis_form_axisRemoved_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.removeColumn(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const axisForm_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("axisForm", axisForm_r3);
} }
function GridFormComponent_form_0_app_axis_form_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-axis-form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("axisRemoved", function GridFormComponent_form_0_app_axis_form_10_Template_app_axis_form_axisRemoved_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.removeRow(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const axisForm_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("axisForm", axisForm_r7);
} }
function GridFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Columns:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "sds-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function GridFormComponent_form_0_Template_sds_button_clickEvent_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.addColumn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GridFormComponent_form_0_app_axis_form_5_Template, 1, 1, "app-axis-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Rows:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "sds-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function GridFormComponent_form_0_Template_sds_button_clickEvent_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.addRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GridFormComponent_form_0_app_axis_form_10_Template, 1, 1, "app-axis-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Column Gap:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-axis-gap-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Row Gap:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-axis-gap-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.gridForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.columnForms.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.rowForms.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("axisGapForm", ctx_r0.gridForm.get("columnGap"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("axisGapForm", ctx_r0.gridForm.get("rowGap"));
} }
class GridFormComponent {
    constructor() {
        this.columnAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get columnForms() {
        return this.gridForm.get('columns');
    }
    get rowForms() {
        return this.gridForm.get('rows');
    }
    addColumn() {
        this.columnAdded.emit();
    }
    addRow() {
        this.rowAdded.emit();
    }
    removeColumn(index) {
        const columnForms = this.gridForm.get('columns');
        columnForms.removeAt(index);
    }
    removeRow(index) {
        const rowForms = this.gridForm.get('rows');
        rowForms.removeAt(index);
    }
}
GridFormComponent.ɵfac = function GridFormComponent_Factory(t) { return new (t || GridFormComponent)(); };
GridFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridFormComponent, selectors: [["app-grid-form"]], inputs: { gridForm: "gridForm" }, outputs: { columnAdded: "columnAdded", rowAdded: "rowAdded" }, decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "sub-heading"], ["type", "button", 1, "add-button", 3, "clickEvent"], [3, "axisForm", "axisRemoved", 4, "ngFor", "ngForOf"], [3, "axisGapForm"], [3, "axisForm", "axisRemoved"]], template: function GridFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GridFormComponent_form_0_Template, 17, 5, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gridForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _axis_gap_form_axis_gap_form_component__WEBPACK_IMPORTED_MODULE_4__["AxisGapFormComponent"], _axis_form_axis_form_component__WEBPACK_IMPORTED_MODULE_5__["AxisFormComponent"]], styles: [".add-button[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLWZvcm0vQzpcXFVzZXJzXFxhbGV4LnJheW5lclxcRGV2ZWxvcG1lbnRcXGxheW91dC1idWlsZGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxncmlkLWZvcm1cXGdyaWQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLWZvcm0vZ3JpZC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyaWQtZm9ybS9ncmlkLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcbiIsIi5hZGQtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-form',
                template: `
    <form
      *ngIf="gridForm"
      [formGroup]="gridForm"
    >
      <div class="sub-heading">Columns:</div>

      <sds-button
        class="add-button"
        type="button"
        (clickEvent)="addColumn()"
      >
        Add
      </sds-button>
      <app-axis-form
        *ngFor="let axisForm of columnForms.controls; let i = index"
        [axisForm]="axisForm"
        (axisRemoved)="removeColumn(i)"
      >
      </app-axis-form>

      <div class="sub-heading">Rows:</div>
      <sds-button
        class="add-button"
        type="button"
        (clickEvent)="addRow()"
      >
        Add
      </sds-button>
      <app-axis-form
        *ngFor="let axisForm of rowForms.controls; let i = index"
        [axisForm]="axisForm"
        (axisRemoved)="removeRow(i)"
      >
      </app-axis-form>

      <div class="sub-heading">Column Gap:</div>
      <app-axis-gap-form [axisGapForm]="gridForm.get('columnGap')">
      </app-axis-gap-form>

      <div class="sub-heading">Row Gap:</div>
      <app-axis-gap-form [axisGapForm]="gridForm.get('rowGap')">
      </app-axis-gap-form>
    </form>
  `,
                styleUrls: ['./grid-form.component.scss']
            }]
    }], null, { gridForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columnAdded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rowAdded: [{
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
/* harmony import */ var _store_app_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/app.selector */ "./src/app/store/app.selector.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_store_app_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/app.action */ "./src/app/store/app.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sage_ng_carbon_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sage/ng-carbon/icon */ "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-icon.js");
// Angular


// libs







function GridViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const itemStyle_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](itemStyle_r2);
} }
function GridViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridViewComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.addItem(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sds-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GridViewComponent {
    constructor(store) {
        this.store = store;
        this.styles$ = this.store.select(_store_app_selector__WEBPACK_IMPORTED_MODULE_1__["selectGridStyle"]);
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.store.select(_store_app_selector__WEBPACK_IMPORTED_MODULE_1__["selectGrid"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe(grid => {
            this.grid = grid;
        });
        this.store.select(_store_app_selector__WEBPACK_IMPORTED_MODULE_1__["selectGridItemStyles"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe(gridItemStyles => {
            this.itemStyles = gridItemStyles;
        });
    }
    get count() {
        return new Array(this.grid.columns.length * Math.max(1, this.grid.rows.length) - this.itemStyles.length);
    }
    addItem(index) {
        const column = (index % this.grid.columns.length) + 1;
        const row = Math.floor(index / this.grid.columns.length) + 1;
        const item = {
            columnStart: column,
            columnEnd: column + 1,
            rowStart: row,
            rowEnd: row + 1
        };
        this.store.dispatch(new src_app_store_app_action__WEBPACK_IMPORTED_MODULE_4__["AddGridItem"](item));
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
GridViewComponent.ɵfac = function GridViewComponent_Factory(t) { return new (t || GridViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
GridViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridViewComponent, selectors: [["app-grid-view"]], decls: 4, vars: 6, consts: [["id", "grid", 1, "grid"], [3, "style", 4, "ngFor", "ngForOf"], ["class", "grid__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "grid__item", 3, "click"], ["iconType", "plus", 1, "grid__item--add"]], template: function GridViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridViewComponent_div_2_Template, 1, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GridViewComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx.styles$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemStyles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.count);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _sage_ng_carbon_icon__WEBPACK_IMPORTED_MODULE_7__["IconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  flex: 1;\n}\n\n.grid[_ngcontent-%COMP%] {\n  height: calc(100% - 32px);\n  padding: 16px;\n}\n\n.grid__item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.grid__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  display: block;\n  pointer-events: none;\n  outline: 1px dashed #fff;\n}\n\n.grid__item[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-slate-95);\n}\n\n.grid__item[_ngcontent-%COMP%]:hover   .grid__item--add[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.grid__item--add[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvQzpcXFVzZXJzXFxhbGV4LnJheW5lclxcRGV2ZWxvcG1lbnRcXGxheW91dC1idWlsZGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxncmlkLXZpZXdcXGdyaWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLE9BQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtBQ0NOOztBREVJO0VBQ0UsdUNBQUE7QUNBTjs7QURFTTtFQUNFLGNBQUE7QUNBUjs7QURJSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXg6IDFcclxufVxyXG5cclxuLmdyaWQge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgJl9faXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgb3V0bGluZTogMXB4IGRhc2hlZCAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zbGF0ZS05NSk7XHJcblxyXG4gICAgICAuZ3JpZF9faXRlbS0tYWRkIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtLWFkZCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDE7XG59XG5cbi5ncmlkIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5ncmlkX19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ncmlkX19pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvdXRsaW5lOiAxcHggZGFzaGVkICNmZmY7XG59XG4uZ3JpZF9faXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNsYXRlLTk1KTtcbn1cbi5ncmlkX19pdGVtOmhvdmVyIC5ncmlkX19pdGVtLS1hZGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5ncmlkX19pdGVtLS1hZGQge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-view',
                template: `
    <div
      id="grid"
      class="grid"
      [style]="styles$ | async"
    >
      <div
        *ngFor="let itemStyle of itemStyles"
        [style]="itemStyle"
      ></div>

      <div
        *ngFor="let item of count; let i = index"
        class="grid__item"
        (click)="addItem(i)"
      >
        <sds-icon
          class="grid__item--add"
          iconType="plus"
        >
        </sds-icon>
      </div>
    </div>
  `,
                styleUrls: ['./grid-view.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: AxisFormComponent, AxisGapFormComponent, GridFormComponent, GridViewComponent, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axis_form_axis_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axis-form/axis-form.component */ "./src/app/components/axis-form/axis-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AxisFormComponent", function() { return _axis_form_axis_form_component__WEBPACK_IMPORTED_MODULE_0__["AxisFormComponent"]; });

/* harmony import */ var _axis_gap_form_axis_gap_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axis-gap-form/axis-gap-form.component */ "./src/app/components/axis-gap-form/axis-gap-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AxisGapFormComponent", function() { return _axis_gap_form_axis_gap_form_component__WEBPACK_IMPORTED_MODULE_1__["AxisGapFormComponent"]; });

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
// Angular


const _c0 = ["*"];
class SidebarComponent {
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "sidebar"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 16px;\n  height: calc(100% - 32px);\n  width: 250px;\n  overflow: auto;\n  background-color: #fff;\n  box-shadow: 0 10px 20px 0 rgba(0, 20, 29, 0.2), 0 20px 40px 0 rgba(0, 20, 29, 0.1);\n}\n.sidebar__toggle[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 100%;\n  font-size: 1.5em;\n  cursor: pointer;\n  background-color: var(--color-primary);\n}\n.sidebar__toggle[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-hover);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0M6XFxVc2Vyc1xcYWxleC5yYXluZXJcXERldmVsb3BtZW50XFxsYXlvdXQtYnVpbGRlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrRkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUNDSjtBRENJO0VBQ0Usb0NBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggMCByZ2JhKDAsMjAsMjksMC4yKSwgMCAyMHB4IDQwcHggMCByZ2JhKDAsMjAsMjksMC4xKTtcclxuXHJcbiAgJl9fdG9nZ2xlIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhvdmVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnNpZGViYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XG4gIHdpZHRoOiAyNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiYSgwLCAyMCwgMjksIDAuMiksIDAgMjBweCA0MHB4IDAgcmdiYSgwLCAyMCwgMjksIDAuMSk7XG59XG4uc2lkZWJhcl9fdG9nZ2xlIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi5zaWRlYmFyX190b2dnbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ob3Zlcik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                template: `
    <div class="sidebar">
      <ng-content></ng-content>
    </div>
  `,
                styleUrls: ['./sidebar.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/models/axis-gap.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/axis-gap.model.ts ***!
  \******************************************/
/*! exports provided: GapUnits, getInitialAxisGap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GapUnits", function() { return GapUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialAxisGap", function() { return getInitialAxisGap; });
const GapUnits = ['%', 'px', 'em'];
const getInitialAxisGap = () => {
    return { size: 1, unit: 'px' };
};


/***/ }),

/***/ "./src/app/models/axis.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/axis.model.ts ***!
  \**************************************/
/*! exports provided: Units, getInitialAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Units", function() { return Units; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialAxis", function() { return getInitialAxis; });
const Units = ['fr', '%', 'px', 'em', 'auto', 'min-content', 'max-content', 'minmax'];
const getInitialAxis = () => {
    return { size: '1', unit: 'fr' };
};


/***/ }),

/***/ "./src/app/models/grid-item.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/grid-item.model.ts ***!
  \*******************************************/
/*! exports provided: getInitialGridItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialGridItem", function() { return getInitialGridItem; });
const getInitialGridItem = () => {
    return {
        columnStart: 1,
        columnEnd: 1,
        rowStart: 1,
        rowEnd: 1
    };
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
/* harmony import */ var _axis_gap_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axis-gap.model */ "./src/app/models/axis-gap.model.ts");


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
        columnGap: Object(_axis_gap_model__WEBPACK_IMPORTED_MODULE_1__["getInitialAxisGap"])(),
        rowGap: Object(_axis_gap_model__WEBPACK_IMPORTED_MODULE_1__["getInitialAxisGap"])(),
        items: []
    };
};


/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Units, getInitialAxis, GapUnits, getInitialAxisGap, getInitialGrid, getInitialGridItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axis_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axis.model */ "./src/app/models/axis.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Units", function() { return _axis_model__WEBPACK_IMPORTED_MODULE_0__["Units"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialAxis", function() { return _axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"]; });

/* harmony import */ var _axis_gap_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axis-gap.model */ "./src/app/models/axis-gap.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GapUnits", function() { return _axis_gap_model__WEBPACK_IMPORTED_MODULE_1__["GapUnits"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialAxisGap", function() { return _axis_gap_model__WEBPACK_IMPORTED_MODULE_1__["getInitialAxisGap"]; });

/* harmony import */ var _grid_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.model */ "./src/app/models/grid.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialGrid", function() { return _grid_model__WEBPACK_IMPORTED_MODULE_2__["getInitialGrid"]; });

/* harmony import */ var _grid_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-item.model */ "./src/app/models/grid-item.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialGridItem", function() { return _grid_item_model__WEBPACK_IMPORTED_MODULE_3__["getInitialGridItem"]; });







/***/ }),

/***/ "./src/app/pipes/camel-to-kebab.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/camel-to-kebab.pipe.ts ***!
  \**********************************************/
/*! exports provided: CamelToKebabPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelToKebabPipe", function() { return CamelToKebabPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CamelToKebabPipe {
    transform(camelCaseString) {
        return camelCaseString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }
}
CamelToKebabPipe.ɵfac = function CamelToKebabPipe_Factory(t) { return new (t || CamelToKebabPipe)(); };
CamelToKebabPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "camelToKebab", type: CamelToKebabPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CamelToKebabPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'camelToKebab'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/index.ts":
/*!********************************!*\
  !*** ./src/app/pipes/index.ts ***!
  \********************************/
/*! exports provided: CamelToKebabPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _camel_to_kebab_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camel-to-kebab.pipe */ "./src/app/pipes/camel-to-kebab.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CamelToKebabPipe", function() { return _camel_to_kebab_pipe__WEBPACK_IMPORTED_MODULE_0__["CamelToKebabPipe"]; });




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
            columnGap: this.formBuilder.group({
                size: grid.columnGap.size,
                unit: grid.columnGap.unit
            }),
            rowGap: this.formBuilder.group({
                size: grid.rowGap.size,
                unit: grid.rowGap.unit
            }),
            columns: this.formBuilder.array([
                ...grid.columns.map(column => this.createAxisForm(column))
            ]),
            rows: this.formBuilder.array([
                ...grid.rows.map(row => this.createAxisForm(row))
            ])
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
/*! exports provided: UPDATE_GRID, UpdateGrid, RESET_GRID, ResetGrid, ADD_GRID_ITEM, AddGridItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_GRID", function() { return UPDATE_GRID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateGrid", function() { return UpdateGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_GRID", function() { return RESET_GRID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetGrid", function() { return ResetGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_GRID_ITEM", function() { return ADD_GRID_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGridItem", function() { return AddGridItem; });
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
// Reset Grid
////////////////////////////////////////////////////////////////////////////////
const RESET_GRID = '[Builder] RESET_GRID';
class ResetGrid {
    constructor(grid) {
        this.grid = grid;
        this.type = RESET_GRID;
    }
}
////////////////////////////////////////////////////////////////////////////////
// Add Grid Item
////////////////////////////////////////////////////////////////////////////////
const ADD_GRID_ITEM = '[Builder] ADD_GRID_ITEM';
class AddGridItem {
    constructor(gridItem) {
        this.gridItem = gridItem;
        this.type = ADD_GRID_ITEM;
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
        // Reset Grid
        ////////////////////////////////////////////////////////////////////////////////
        case _app_action__WEBPACK_IMPORTED_MODULE_0__["RESET_GRID"]: {
            return Object.assign(Object.assign({}, state), { grid: action.grid });
        }
        ////////////////////////////////////////////////////////////////////////////////
        // Add Grid Item
        ////////////////////////////////////////////////////////////////////////////////
        case _app_action__WEBPACK_IMPORTED_MODULE_0__["ADD_GRID_ITEM"]: {
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), { items: [
                        ...state.grid.items,
                        action.gridItem
                    ] }) });
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
/*! exports provided: selectBuilder, selectGrid, selectGridItems, selectGridStyle, selectHTML, selectGridItemStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBuilder", function() { return selectBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectGrid", function() { return selectGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectGridItems", function() { return selectGridItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectGridStyle", function() { return selectGridStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHTML", function() { return selectHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectGridItemStyles", function() { return selectGridItemStyles; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
// ngrx

const selectBuilder = (state) => state.app;
const selectGrid = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBuilder, (state) => state.grid);
const selectGridItems = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGrid, (grid) => grid.items);
const createAxisTemplateStyle = (axis) => {
    switch (axis.unit) {
        case 'auto':
        case 'min-content':
        case 'max-content': {
            return `${axis.unit}`;
        }
        case 'minmax': {
            return `${axis.unit}(${axis.size})`;
        }
        default: {
            return `${axis.size}${axis.unit}`;
        }
    }
};
// TODO: make this a service/utils of some type
const selectGridStyle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGrid, (grid) => {
    return Object.assign(Object.assign(Object.assign(Object.assign({ display: 'grid' }, (grid.columns.length > 0
        ? { gridTemplateColumns: grid.columns.map(column => createAxisTemplateStyle(column)).join(' ') }
        : {})), (grid.columnGap.size > 0
        ? { gridColumnGap: `${grid.columnGap.size}${grid.columnGap.unit}` }
        : {})), (grid.rows.length > 0
        ? { gridTemplateRows: grid.rows.map(row => createAxisTemplateStyle(row)).join(' ') }
        : {})), (grid.rowGap.size > 0
        ? { gridRowGap: `${grid.rowGap.size}${grid.rowGap.unit}` }
        : {}));
});
const selectHTML = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGrid, selectGridItems, (grid, items) => {
    let html = `<div class="grid-container">`;
    items.forEach((item, index) => {
        html += `\n  <div class="item-${index}"></div>`;
    });
    return html += `\n</div>`;
});
const selectGridItemStyles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGridItems, (gridItems) => {
    return gridItems.map(item => {
        return {
            gridArea: `${item.rowStart} / ${item.columnStart} / ${item.rowEnd} / ${item.columnEnd}`
        };
    });
});


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