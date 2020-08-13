function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var routes = [{
      path: '',
      component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/grid-view/grid-view.component */
    "./src/app/components/grid-view/grid-view.component.ts");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/components/sidebar/sidebar.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "content"], [1, "title"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Grid Layout Builder ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-grid-view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sidebar");
        }
      },
      directives: [_components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_1__["GridViewComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 2em;\n  line-height: 60px;\n  font-weight: bold;\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhbGV4LnJheW5lclxcRGV2ZWxvcG1lbnRcXGxheW91dC1idWlsZGVyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n    <div class=\"content\">\n      <div class=\"title\">\n        Grid Layout Builder\n      </div>\n\n      <app-grid-view>\n      </app-grid-view>\n    </div>\n\n    <app-sidebar>\n    </app-sidebar>\n  ",
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _store_app_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store/app.reducer */
    "./src/app/store/app.reducer.ts");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components */
    "./src/app/components/index.ts");
    /* harmony import */


    var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @sage/ng-carbon/button */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js");
    /* harmony import */


    var _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @sage/ng-carbon/dropdown */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-dropdown.js");
    /* harmony import */


    var _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @sage/ng-carbon/input-text */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-input-text.js");
    /* harmony import */


    var _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @sage/ng-carbon/checkbox */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-checkbox.js");
    /* harmony import */


    var _sage_ng_carbon_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @sage/ng-carbon/icon */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-icon.js");
    /* harmony import */


    var _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @sage/ng-carbon/tabs */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-tabs.js"); // Angular
    // Modules
    // ngrx
    // Services
    // Components
    // NG-Carbon


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services__WEBPACK_IMPORTED_MODULE_8__["FormsService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_6__["appReducers"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
        maxAge: 20
      }), _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"], _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_13__["InputTextModule"], _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxModule"], _sage_ng_carbon_icon__WEBPACK_IMPORTED_MODULE_15__["IconModule"], _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components__WEBPACK_IMPORTED_MODULE_10__["AxisFormComponent"], _components__WEBPACK_IMPORTED_MODULE_10__["GridFormComponent"], _components__WEBPACK_IMPORTED_MODULE_10__["GridViewComponent"], _components__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"], _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"], _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_13__["InputTextModule"], _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxModule"], _sage_ng_carbon_icon__WEBPACK_IMPORTED_MODULE_15__["IconModule"], _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_6__["appReducers"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
            maxAge: 20
          }), _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"], _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_13__["InputTextModule"], _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxModule"], _sage_ng_carbon_icon__WEBPACK_IMPORTED_MODULE_15__["IconModule"], _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components__WEBPACK_IMPORTED_MODULE_10__["AxisFormComponent"], _components__WEBPACK_IMPORTED_MODULE_10__["GridFormComponent"], _components__WEBPACK_IMPORTED_MODULE_10__["GridViewComponent"], _components__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"]],
          providers: [_services__WEBPACK_IMPORTED_MODULE_8__["FormsService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/axis-form/axis-form.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/axis-form/axis-form.component.ts ***!
    \*************************************************************/

  /*! exports provided: AxisFormComponent */

  /***/
  function srcAppComponentsAxisFormAxisFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AxisFormComponent", function () {
      return AxisFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @sage/ng-carbon/input-text */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-input-text.js");
    /* harmony import */


    var _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @sage/ng-carbon/dropdown */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-dropdown.js");
    /* harmony import */


    var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sage/ng-carbon/button */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js"); // Angular


    function AxisFormComponent_form_0_sds_dropdown_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sds-dropdown-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2, " ");
      }
    }

    function AxisFormComponent_form_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AxisFormComponent_form_0_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.addAxis();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "sds-input-text", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "sds-dropdown", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AxisFormComponent_form_0_sds_dropdown_option_5_Template, 2, 2, "sds-dropdown-option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "sds-button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.axisForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.isFieldInvalid(ctx_r0.axisForm, "size"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.isFieldInvalid(ctx_r0.axisForm, "unit"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.axisUnits);
      }
    }

    var AxisFormComponent = /*#__PURE__*/function () {
      function AxisFormComponent() {
        _classCallCheck(this, AxisFormComponent);

        this.axisAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.axisUnits = ['fr', '%', 'px', 'auto'];
      }

      _createClass(AxisFormComponent, [{
        key: "addAxis",
        value: function addAxis() {
          this.axisForm.markAllAsTouched();

          if (!this.axisForm.valid) {
            return;
          }

          this.axisAdded.emit();
        }
      }, {
        key: "isFieldInvalid",
        value: function isFieldInvalid(form, field) {
          return form.get(field).touched && form.get(field).errors ? 'This field is required.' : null;
        }
      }]);

      return AxisFormComponent;
    }();

    AxisFormComponent.ɵfac = function AxisFormComponent_Factory(t) {
      return new (t || AxisFormComponent)();
    };

    AxisFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AxisFormComponent,
      selectors: [["app-axis-form"]],
      inputs: {
        axisForm: "axisForm"
      },
      outputs: {
        axisAdded: "axisAdded"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "input-field"], ["formControlName", "size", "placeholderText", "size..", "errorType", "error", 3, "errors"], ["formControlName", "unit", "placeholder", "unit..", "errorType", "error", 3, "errors"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit"], [3, "value"]],
      template: function AxisFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AxisFormComponent_form_0_Template, 8, 4, "form", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.axisForm);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownOptionComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXhpcy1mb3JtL2F4aXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AxisFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-axis-form',
          template: "\n    <form\n      *ngIf=\"axisForm\"\n      [formGroup]=\"axisForm\"\n      (ngSubmit)=\"addAxis()\"\n    >\n      <div class=\"input-field\">\n        <sds-input-text\n          formControlName=\"size\"\n          placeholderText=\"size..\"\n          errorType=\"error\"\n          [errors]=\"isFieldInvalid(axisForm, 'size')\"\n        >\n        </sds-input-text>\n      </div>\n\n      <div class=\"input-field\">\n        <sds-dropdown\n          formControlName=\"unit\"\n          placeholder=\"unit..\"\n          errorType=\"error\"\n          [errors]=\"isFieldInvalid(axisForm, 'unit')\"\n        >\n          <sds-dropdown-option\n            *ngFor=\"let option of axisUnits\"\n            [value]=\"option\"\n          >\n            {{ option }}\n          </sds-dropdown-option>\n        </sds-dropdown>\n      </div>\n\n      <sds-button type=\"submit\">Add</sds-button>\n    </form>\n  ",
          styleUrls: ['./axis-form.component.scss']
        }]
      }], null, {
        axisForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        axisAdded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/grid-form/grid-form.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/grid-form/grid-form.component.ts ***!
    \*************************************************************/

  /*! exports provided: GridFormComponent */

  /***/
  function srcAppComponentsGridFormGridFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridFormComponent", function () {
      return GridFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @sage/ng-carbon/checkbox */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-checkbox.js"); // Angular


    function GridFormComponent_form_0_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.gridForm);
      }
    }

    var GridFormComponent = function GridFormComponent() {
      _classCallCheck(this, GridFormComponent);
    };

    GridFormComponent.ɵfac = function GridFormComponent_Factory(t) {
      return new (t || GridFormComponent)();
    };

    GridFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GridFormComponent,
      selectors: [["app-grid-form"]],
      inputs: {
        gridForm: "gridForm"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "input-field"], ["type", "number", "min", "0", "formControlName", "columnGap"], ["type", "number", "min", "0", "formControlName", "rowGap"], ["formControlName", "fillGrid", "size", "large"]],
      template: function GridFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GridFormComponent_form_0_Template, 12, 1, "form", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gridForm);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC1mb3JtL2dyaWQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-grid-form',
          template: "\n    <form\n      *ngIf=\"gridForm\"\n      [formGroup]=\"gridForm\"\n    >\n      <div class=\"input-field\">\n        <label>\n          Column Gap (px):\n          <input type=\"number\" min=\"0\" formControlName=\"columnGap\"/>\n        </label>\n      </div>\n\n      <div class=\"input-field\">\n        <label>\n          Row Gap (px):\n          <input type=\"number\" min=\"0\" formControlName=\"rowGap\"/>\n        </label>\n      </div>\n\n      <div class=\"input-field\">\n        <sds-checkbox\n          formControlName=\"fillGrid\"\n          size=\"large\"\n        >\n          Fill grid?\n        </sds-checkbox>\n      </div>\n    </form>\n  ",
          styleUrls: ['./grid-form.component.scss']
        }]
      }], null, {
        gridForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/grid-view/grid-view.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/grid-view/grid-view.component.ts ***!
    \*************************************************************/

  /*! exports provided: GridViewComponent */

  /***/
  function srcAppComponentsGridViewGridViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridViewComponent", function () {
      return GridViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_app_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/app.selector */
    "./src/app/store/app.selector.ts");
    /* harmony import */


    var src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/store/app.action */
    "./src/app/store/app.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // Angular
    // libs


    function GridViewComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridViewComponent_div_1_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var i_r5 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.removeColumn(i_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DELETE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GridViewComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridViewComponent_div_1_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.columnStyles);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.columnCount);
      }
    }

    function GridViewComponent_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridViewComponent_div_2_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var i_r10 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.removeRow(i_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DELETE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GridViewComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridViewComponent_div_2_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.rowStyles);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.rowCount);
      }
    }

    function GridViewComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ITEM ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GridViewComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridViewComponent_ng_container_4_div_1_Template, 2, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.count);
      }
    }

    var GridViewComponent = /*#__PURE__*/function () {
      function GridViewComponent(store) {
        _classCallCheck(this, GridViewComponent);

        this.store = store;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(GridViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.store.select(_store_app_selector__WEBPACK_IMPORTED_MODULE_1__["selectGrid"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function (grid) {
            _this.grid = grid;
          });
        }
      }, {
        key: "removeColumn",
        value: function removeColumn(index) {
          this.store.dispatch(new src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__["DeleteColumn"](index));
        }
      }, {
        key: "removeRow",
        value: function removeRow(index) {
          this.store.dispatch(new src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__["DeleteRow"](index));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "columnCount",
        get: function get() {
          return new Array(this.grid.columns.length);
        }
      }, {
        key: "rowCount",
        get: function get() {
          return new Array(this.grid.rows.length);
        }
      }, {
        key: "count",
        get: function get() {
          return new Array(this.grid.columns.length * Math.max(1, this.grid.rows.length));
        }
      }, {
        key: "columnStyles",
        get: function get() {
          return {
            gridTemplateColumns: this.grid.columns.map(function (column) {
              return "".concat(column.size).concat(column.unit);
            }).join(' '),
            gridColumnGap: this.grid.columnGap + 'px'
          };
        }
      }, {
        key: "rowStyles",
        get: function get() {
          return {
            gridTemplateRows: this.grid.rows.map(function (row) {
              return "".concat(row.size).concat(row.unit);
            }).join(' '),
            gridRowGap: this.grid.rowGap + 'px'
          };
        }
      }, {
        key: "styles",
        get: function get() {
          return Object.assign(Object.assign({
            display: 'grid'
          }, this.columnStyles), this.rowStyles);
        }
      }]);

      return GridViewComponent;
    }();

    GridViewComponent.ɵfac = function GridViewComponent_Factory(t) {
      return new (t || GridViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
    };

    GridViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GridViewComponent,
      selectors: [["app-grid-view"]],
      decls: 5,
      vars: 5,
      consts: [[1, "grid-view"], ["class", "columns", 3, "style", 4, "ngIf"], ["class", "rows", 3, "style", 4, "ngIf"], ["id", "grid", 1, "grid"], [4, "ngIf"], [1, "columns"], ["tabIndex", "0", 3, "click", 4, "ngFor", "ngForOf"], ["tabIndex", "0", 3, "click"], [1, "rows"], ["class", "grid__item", 4, "ngFor", "ngForOf"], [1, "grid__item"]],
      template: function GridViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridViewComponent_div_1_Template, 2, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridViewComponent_div_2_Template, 2, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GridViewComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.grid.columns.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.grid.rows.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.styles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.grid == null ? null : ctx.grid.fillGrid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  flex: 1;\n}\n\n.grid-view[_ngcontent-%COMP%] {\n  height: calc(100% - 32px);\n  padding: 16px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr;\n  gap: 10px;\n}\n\n.columns[_ngcontent-%COMP%], .rows[_ngcontent-%COMP%] {\n  display: grid;\n  font-weight: bold;\n  color: var(--color-error);\n  text-align: center;\n  cursor: pointer;\n}\n\n.columns[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.rows[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-min-content;\n  grid-template-columns: min-content;\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.rows[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  writing-mode: vertical-lr;\n  transform: rotate(-180deg);\n}\n\n.grid[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 2;\n}\n\n.grid__item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-primary);\n  color: #fff;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvQzpcXFVzZXJzXFxhbGV4LnJheW5lclxcRGV2ZWxvcG1lbnRcXGxheW91dC1idWlsZGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxncmlkLXZpZXdcXGdyaWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLE9BQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQ0FBQTtFQUFBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDRjs7QURDRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQUY7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4OiAxXHJcbn1cclxuXHJcbi5ncmlkLXZpZXcge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5jb2x1bW5zLCAucm93cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItZXJyb3IpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb2x1bW5zIHtcclxuICBncmlkLWNvbHVtbjogMjtcclxuICBncmlkLXJvdzogMTtcclxufVxyXG5cclxuLnJvd3Mge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQ7XHJcbiAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgZ3JpZC1yb3c6IDI7XHJcbiAgXHJcbiAgPiAqIHtcclxuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICBncmlkLWNvbHVtbjogMjtcclxuICBncmlkLXJvdzogMjtcclxuXHJcbiAgJl9faXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDE7XG59XG5cbi5ncmlkLXZpZXcge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5jb2x1bW5zLCAucm93cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZXJyb3IpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbHVtbnMge1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3c6IDE7XG59XG5cbi5yb3dzIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudDtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAyO1xufVxuLnJvd3MgPiAqIHtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG59XG5cbi5ncmlkIHtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGdyaWQtcm93OiAyO1xufVxuLmdyaWRfX2l0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-grid-view',
          template: "\n    <div class=\"grid-view\">\n      <div\n        *ngIf=\"grid.columns.length > 0\"\n        class=\"columns\"\n        [style]=\"columnStyles\"\n      >\n        <div\n          *ngFor=\"let col of columnCount; let i = index\"\n          tabIndex=\"0\"\n          (click)=\"removeColumn(i)\"\n        >\n          DELETE\n        </div>\n      </div>\n\n      <div\n        *ngIf=\"grid.rows.length > 0\"\n        class=\"rows\"\n        [style]=\"rowStyles\"\n      >\n        <div\n          *ngFor=\"let row of rowCount; let i = index\"\n          tabIndex=\"0\"\n          (click)=\"removeRow(i)\"\n        >\n          DELETE\n        </div>\n      </div>\n\n      <div\n        id=\"grid\"\n        class=\"grid\"\n        [style]=\"styles\"\n      >\n        <ng-container *ngIf=\"grid?.fillGrid\">\n          <div\n            *ngFor=\"let item of count\"\n            class=\"grid__item\"\n          >\n            ITEM\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  ",
          styleUrls: ['./grid-view.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/index.ts":
  /*!*************************************!*\
    !*** ./src/app/components/index.ts ***!
    \*************************************/

  /*! exports provided: AxisFormComponent, GridFormComponent, GridViewComponent, SidebarComponent */

  /***/
  function srcAppComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _axis_form_axis_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./axis-form/axis-form.component */
    "./src/app/components/axis-form/axis-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AxisFormComponent", function () {
      return _axis_form_axis_form_component__WEBPACK_IMPORTED_MODULE_0__["AxisFormComponent"];
    });
    /* harmony import */


    var _grid_form_grid_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./grid-form/grid-form.component */
    "./src/app/components/grid-form/grid-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GridFormComponent", function () {
      return _grid_form_grid_form_component__WEBPACK_IMPORTED_MODULE_1__["GridFormComponent"];
    });
    /* harmony import */


    var _grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./grid-view/grid-view.component */
    "./src/app/components/grid-view/grid-view.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GridViewComponent", function () {
      return _grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_2__["GridViewComponent"];
    });
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/components/sidebar/sidebar.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"];
    });
    /***/

  },

  /***/
  "./src/app/components/sidebar/sidebar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/sidebar/sidebar.component.ts ***!
    \*********************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_app_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/app.selector */
    "./src/app/store/app.selector.ts");
    /* harmony import */


    var src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/store/app.action */
    "./src/app/store/app.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _grid_form_grid_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../grid-form/grid-form.component */
    "./src/app/components/grid-form/grid-form.component.ts");
    /* harmony import */


    var _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sage/ng-carbon/tabs */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-tabs.js");
    /* harmony import */


    var _axis_form_axis_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../axis-form/axis-form.component */
    "./src/app/components/axis-form/axis-form.component.ts");
    /* harmony import */


    var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @sage/ng-carbon/button */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // Angular
    // rxjs


    function SidebarComponent_pre_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#grid {\n    ", ctx_r0.generatedStyles, "\n}\n");
      }
    }

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(store, formsService) {
        _classCallCheck(this, SidebarComponent);

        this.store = store;
        this.formsService = formsService;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.store.select(_store_app_selector__WEBPACK_IMPORTED_MODULE_1__["selectGrid"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (grid) {
            _this2.gridForm = _this2.formsService.createGridForm(grid);

            _this2.gridForm.valueChanges.subscribe(function (updatedGrid) {
              _this2.store.dispatch(new src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__["UpdateGrid"](updatedGrid));
            });
          });
          this.columnForm = this.formsService.createAxisForm();
          this.rowForm = this.formsService.createAxisForm();
        }
      }, {
        key: "addColumn",
        value: function addColumn() {
          this.store.dispatch(new src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__["AddColumn"](this.columnForm.value));
          this.columnForm.reset();
        }
      }, {
        key: "addRow",
        value: function addRow() {
          this.store.dispatch(new src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__["AddRow"](this.rowForm.value));
          this.rowForm.reset();
        }
      }, {
        key: "getStyles",
        value: function getStyles() {
          var styles = document.getElementById('grid').style.cssText;
          this.generatedStyles = styles.replace(/; /g, ';\n    ');
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_5__["FormsService"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 20,
      vars: 4,
      consts: [[1, "sidebar"], [1, "heading"], [3, "gridForm"], [3, "tabSelected"], [3, "axisForm", "axisAdded"], [3, "clickEvent"], ["class", "output-styles", 4, "ngIf"], [1, "output-styles"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-grid-form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "sds-tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "sds-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "sds-tab-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabSelected", function SidebarComponent_Template_sds_tab_header_tabSelected_7_listener() {
            return ctx.columnForm.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add Column ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "sds-tab-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-axis-form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("axisAdded", function SidebarComponent_Template_app_axis_form_axisAdded_10_listener() {
            return ctx.addColumn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "sds-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "sds-tab-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabSelected", function SidebarComponent_Template_sds_tab_header_tabSelected_12_listener() {
            return ctx.rowForm.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Add Row ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "sds-tab-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-axis-form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("axisAdded", function SidebarComponent_Template_app_axis_form_axisAdded_15_listener() {
            return ctx.addRow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "sds-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function SidebarComponent_Template_sds_button_clickEvent_17_listener() {
            return ctx.getStyles();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Get Styles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SidebarComponent_pre_19_Template, 2, 1, "pre", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridForm", ctx.gridForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("axisForm", ctx.columnForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("axisForm", ctx.rowForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.generatedStyles);
        }
      },
      directives: [_grid_form_grid_form_component__WEBPACK_IMPORTED_MODULE_6__["GridFormComponent"], _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_7__["ɵb"], _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_7__["ɵc"], _sage_ng_carbon_tabs__WEBPACK_IMPORTED_MODULE_7__["ɵd"], _axis_form_axis_form_component__WEBPACK_IMPORTED_MODULE_8__["AxisFormComponent"], _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
      styles: [".sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 16px;\n  height: calc(100% - 32px);\n  width: 350px;\n  overflow: auto;\n  background-color: #fff;\n  box-shadow: 0 10px 20px 0 rgba(0, 20, 29, 0.2), 0 20px 40px 0 rgba(0, 20, 29, 0.1);\n}\n.sidebar__toggle[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 100%;\n  font-size: 1.5em;\n  cursor: pointer;\n  background-color: var(--color-primary);\n}\n.sidebar__toggle[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-hover);\n}\n.output-styles[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  padding: 16px;\n  background-color: var(--color-slate-90);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0M6XFxVc2Vyc1xcYWxleC5yYXluZXJcXERldmVsb3BtZW50XFxsYXlvdXQtYnVpbGRlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrRkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUNDSjtBRENJO0VBQ0Usb0NBQUE7QUNDTjtBRElBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggMCByZ2JhKDAsMjAsMjksMC4yKSwgMCAyMHB4IDQwcHggMCByZ2JhKDAsMjAsMjksMC4xKTtcclxuXHJcbiAgJl9fdG9nZ2xlIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhvdmVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5vdXRwdXQtc3R5bGVzIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zbGF0ZS05MCk7XHJcbn1cclxuIiwiLnNpZGViYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XG4gIHdpZHRoOiAzNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiYSgwLCAyMCwgMjksIDAuMiksIDAgMjBweCA0MHB4IDAgcmdiYSgwLCAyMCwgMjksIDAuMSk7XG59XG4uc2lkZWJhcl9fdG9nZ2xlIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi5zaWRlYmFyX190b2dnbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ob3Zlcik7XG59XG5cbi5vdXRwdXQtc3R5bGVzIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zbGF0ZS05MCk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          template: "\n    <div class=\"sidebar\">\n      <!-- <div\n        class=\"sidebar__toggle\"\n        (click)=\"toggleSidebar()\"\n      >\n        <sds-icon\n          type=\"dark-background\"\n          [iconType]=\"open ? 'arrow_left' : 'arrow_right'\"\n        >\n        </sds-icon>\n      </div> -->\n\n      <div class=\"heading\">Configuration</div>\n\n      <app-grid-form [gridForm]=\"gridForm\">\n      </app-grid-form>\n\n      <hr/>\n\n      <sds-tabs>\n        <sds-tab>\n          <sds-tab-header (tabSelected)=\"columnForm.reset()\">\n            Add Column\n          </sds-tab-header>\n          <sds-tab-content>\n            <app-axis-form\n              [axisForm]=\"columnForm\"\n              (axisAdded)=\"addColumn()\"\n            >\n            </app-axis-form>\n          </sds-tab-content>\n        </sds-tab>\n\n        <sds-tab>\n          <sds-tab-header (tabSelected)=\"rowForm.reset()\">\n            Add Row\n          </sds-tab-header>\n          <sds-tab-content>\n            <app-axis-form\n              [axisForm]=\"rowForm\"\n              (axisAdded)=\"addRow()\"\n            >\n            </app-axis-form>\n          </sds-tab-content>\n        </sds-tab>\n      </sds-tabs>\n\n      <hr/>\n\n      <sds-button (clickEvent)=\"getStyles()\">\n        Get Styles\n      </sds-button>\n\n      <pre\n        *ngIf=\"generatedStyles\"\n        class=\"output-styles\"\n      >\n#grid &#123;\n    {{ generatedStyles }}\n&#125;\n</pre>\n\n    </div>\n  ",
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["FormsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/axis.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/axis.model.ts ***!
    \**************************************/

  /*! exports provided: getInitialAxis */

  /***/
  function srcAppModelsAxisModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getInitialAxis", function () {
      return getInitialAxis;
    });

    var getInitialAxis = function getInitialAxis() {
      return {
        size: '1',
        unit: 'fr'
      };
    };
    /***/

  },

  /***/
  "./src/app/models/grid.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/grid.model.ts ***!
    \**************************************/

  /*! exports provided: getInitialGrid */

  /***/
  function srcAppModelsGridModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getInitialGrid", function () {
      return getInitialGrid;
    });
    /* harmony import */


    var _axis_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./axis.model */
    "./src/app/models/axis.model.ts");

    var getInitialGrid = function getInitialGrid() {
      return {
        columns: [Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])(), Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])(), Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])(), Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])()],
        rows: [Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])(), Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])(), Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])(), Object(_axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"])()],
        columnGap: 10,
        rowGap: 10,
        fillGrid: true
      };
    };
    /***/

  },

  /***/
  "./src/app/models/index.ts":
  /*!*********************************!*\
    !*** ./src/app/models/index.ts ***!
    \*********************************/

  /*! exports provided: getInitialAxis, getInitialGrid */

  /***/
  function srcAppModelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _axis_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./axis.model */
    "./src/app/models/axis.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getInitialAxis", function () {
      return _axis_model__WEBPACK_IMPORTED_MODULE_0__["getInitialAxis"];
    });
    /* harmony import */


    var _grid_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./grid.model */
    "./src/app/models/grid.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getInitialGrid", function () {
      return _grid_model__WEBPACK_IMPORTED_MODULE_1__["getInitialGrid"];
    });
    /***/

  },

  /***/
  "./src/app/services/forms.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/forms.service.ts ***!
    \*******************************************/

  /*! exports provided: FormsService */

  /***/
  function srcAppServicesFormsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsService", function () {
      return FormsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var FormsService = /*#__PURE__*/function () {
      function FormsService(formBuilder) {
        _classCallCheck(this, FormsService);

        this.formBuilder = formBuilder;
      }

      _createClass(FormsService, [{
        key: "createGridForm",
        value: function createGridForm(grid) {
          return this.formBuilder.group({
            columnGap: grid.columnGap,
            rowGap: grid.rowGap,
            fillGrid: grid.fillGrid
          });
        }
      }, {
        key: "createAxisForm",
        value: function createAxisForm(axis) {
          var _a, _b;

          return this.formBuilder.group({
            size: [(_a = axis === null || axis === void 0 ? void 0 : axis.size) !== null && _a !== void 0 ? _a : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            unit: [(_b = axis === null || axis === void 0 ? void 0 : axis.unit) !== null && _b !== void 0 ? _b : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }]);

      return FormsService;
    }();

    FormsService.ɵfac = function FormsService_Factory(t) {
      return new (t || FormsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    FormsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FormsService,
      factory: FormsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/index.ts":
  /*!***********************************!*\
    !*** ./src/app/services/index.ts ***!
    \***********************************/

  /*! exports provided: FormsService */

  /***/
  function srcAppServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _forms_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./forms.service */
    "./src/app/services/forms.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormsService", function () {
      return _forms_service__WEBPACK_IMPORTED_MODULE_0__["FormsService"];
    });
    /***/

  },

  /***/
  "./src/app/store/app.action.ts":
  /*!*************************************!*\
    !*** ./src/app/store/app.action.ts ***!
    \*************************************/

  /*! exports provided: UPDATE_GRID, UpdateGrid, ADD_COLUMN, AddColumn, ADD_ROW, AddRow, DELETE_COLUMN, DeleteColumn, DELETE_ROW, DeleteRow */

  /***/
  function srcAppStoreAppActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_GRID", function () {
      return UPDATE_GRID;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateGrid", function () {
      return UpdateGrid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_COLUMN", function () {
      return ADD_COLUMN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddColumn", function () {
      return AddColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_ROW", function () {
      return ADD_ROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRow", function () {
      return AddRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETE_COLUMN", function () {
      return DELETE_COLUMN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteColumn", function () {
      return DeleteColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETE_ROW", function () {
      return DELETE_ROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteRow", function () {
      return DeleteRow;
    }); ////////////////////////////////////////////////////////////////////////////////
    // Update Grid
    ////////////////////////////////////////////////////////////////////////////////


    var UPDATE_GRID = '[Builder] UPDATE_GRID';

    var UpdateGrid = function UpdateGrid(grid) {
      _classCallCheck(this, UpdateGrid);

      this.grid = grid;
      this.type = UPDATE_GRID;
    }; ////////////////////////////////////////////////////////////////////////////////
    // Add Column
    ////////////////////////////////////////////////////////////////////////////////


    var ADD_COLUMN = '[Builder] ADD_COLUMN';

    var AddColumn = function AddColumn(column) {
      _classCallCheck(this, AddColumn);

      this.column = column;
      this.type = ADD_COLUMN;
    }; ////////////////////////////////////////////////////////////////////////////////
    // Add Row
    ////////////////////////////////////////////////////////////////////////////////


    var ADD_ROW = '[Builder] ADD_ROW';

    var AddRow = function AddRow(row) {
      _classCallCheck(this, AddRow);

      this.row = row;
      this.type = ADD_ROW;
    }; ////////////////////////////////////////////////////////////////////////////////
    // Delete Column
    ////////////////////////////////////////////////////////////////////////////////


    var DELETE_COLUMN = '[Builder] DELETE_COLUMN';

    var DeleteColumn = function DeleteColumn(position) {
      _classCallCheck(this, DeleteColumn);

      this.position = position;
      this.type = DELETE_COLUMN;
    }; ////////////////////////////////////////////////////////////////////////////////
    // Delete Row
    ////////////////////////////////////////////////////////////////////////////////


    var DELETE_ROW = '[Builder] DELETE_ROW';

    var DeleteRow = function DeleteRow(position) {
      _classCallCheck(this, DeleteRow);

      this.position = position;
      this.type = DELETE_ROW;
    };
    /***/

  },

  /***/
  "./src/app/store/app.reducer.ts":
  /*!**************************************!*\
    !*** ./src/app/store/app.reducer.ts ***!
    \**************************************/

  /*! exports provided: builderReducer, appReducers */

  /***/
  function srcAppStoreAppReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "builderReducer", function () {
      return builderReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appReducers", function () {
      return appReducers;
    });
    /* harmony import */


    var _app_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.action */
    "./src/app/store/app.action.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models */
    "./src/app/models/index.ts");

    var defaultBuilderState = {
      grid: Object(_models__WEBPACK_IMPORTED_MODULE_1__["getInitialGrid"])()
    };

    function builderReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBuilderState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        ////////////////////////////////////////////////////////////////////////////////
        // Update Grid
        ////////////////////////////////////////////////////////////////////////////////
        case _app_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_GRID"]:
          {
            return Object.assign(Object.assign({}, state), {
              grid: Object.assign(Object.assign({}, state.grid), action.grid)
            });
          }
        ////////////////////////////////////////////////////////////////////////////////
        // Add Column
        ////////////////////////////////////////////////////////////////////////////////

        case _app_action__WEBPACK_IMPORTED_MODULE_0__["ADD_COLUMN"]:
          {
            return Object.assign(Object.assign({}, state), {
              grid: Object.assign(Object.assign({}, state.grid), {
                columns: [].concat(_toConsumableArray(state.grid.columns), [action.column])
              })
            });
          }
        ////////////////////////////////////////////////////////////////////////////////
        // Add Row
        ////////////////////////////////////////////////////////////////////////////////

        case _app_action__WEBPACK_IMPORTED_MODULE_0__["ADD_ROW"]:
          {
            return Object.assign(Object.assign({}, state), {
              grid: Object.assign(Object.assign({}, state.grid), {
                rows: [].concat(_toConsumableArray(state.grid.rows), [action.row])
              })
            });
          }
        ////////////////////////////////////////////////////////////////////////////////
        // Delete Column
        ////////////////////////////////////////////////////////////////////////////////

        case _app_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_COLUMN"]:
          {
            return Object.assign(Object.assign({}, state), {
              grid: Object.assign(Object.assign({}, state.grid), {
                columns: state.grid.columns.filter(function (column, index) {
                  return action.position !== index;
                })
              })
            });
          }
        ////////////////////////////////////////////////////////////////////////////////
        // Delete Row
        ////////////////////////////////////////////////////////////////////////////////

        case _app_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_ROW"]:
          {
            return Object.assign(Object.assign({}, state), {
              grid: Object.assign(Object.assign({}, state.grid), {
                rows: state.grid.rows.filter(function (row, index) {
                  return action.position !== index;
                })
              })
            });
          }

        default:
          {
            return state;
          }
      }
    }

    var appReducers = {
      app: builderReducer
    };
    /***/
  },

  /***/
  "./src/app/store/app.selector.ts":
  /*!***************************************!*\
    !*** ./src/app/store/app.selector.ts ***!
    \***************************************/

  /*! exports provided: selectBuilder, selectGrid */

  /***/
  function srcAppStoreAppSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectBuilder", function () {
      return selectBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectGrid", function () {
      return selectGrid;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js"); // ngrx


    var selectBuilder = function selectBuilder(state) {
      return state.app;
    };

    var selectGrid = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBuilder, function (state) {
      return state.grid;
    });
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\alex.rayner\Development\layout-builder\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map