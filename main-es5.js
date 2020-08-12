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


    var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./models */
    "./src/app/models/index.ts");
    /* harmony import */


    var _components_builder_form_builder_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/builder-form/builder-form.component */
    "./src/app/components/builder-form/builder-form.component.ts");
    /* harmony import */


    var _components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/grid-view/grid-view.component */
    "./src/app/components/grid-view/grid-view.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.grid = Object(_models__WEBPACK_IMPORTED_MODULE_1__["getInitialGrid"])();
        }
      }, {
        key: "updateGrid",
        value: function updateGrid(grid) {
          this.grid = grid;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 2,
      consts: [[1, "text"], [3, "grid", "gridChanged"], [3, "grid"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Grid Layout Builder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-builder-form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridChanged", function AppComponent_Template_app_builder_form_gridChanged_3_listener($event) {
            return ctx.updateGrid($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-grid-view", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("grid", ctx.grid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("grid", ctx.grid);
        }
      },
      directives: [_components_builder_form_builder_form_component__WEBPACK_IMPORTED_MODULE_2__["BuilderFormComponent"], _components_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_3__["GridViewComponent"]],
      styles: [".text[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhbGV4LnJheW5lclxcRGV2ZWxvcG1lbnRcXGxheW91dC1idWlsZGVyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0IHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuIiwiLnRleHQge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDhweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n    <div>\n      <div class=\"text\">Grid Layout Builder</div>\n      <app-builder-form\n        [grid]=\"grid\"\n        (gridChanged)=\"updateGrid($event)\"\n      >\n      </app-builder-form>\n\n      <app-grid-view [grid]=\"grid\">\n      </app-grid-view>\n    </div>\n  ",
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components */
    "./src/app/components/index.ts");
    /* harmony import */


    var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sage/ng-carbon/button */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js");
    /* harmony import */


    var _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sage/ng-carbon/dropdown */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-dropdown.js");
    /* harmony import */


    var _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @sage/ng-carbon/input-text */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-input-text.js");
    /* harmony import */


    var _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @sage/ng-carbon/checkbox */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-checkbox.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"], _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"], _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_9__["CheckboxModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["BuilderFormComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["GridViewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"], _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"], _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_9__["CheckboxModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"], _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"], _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_9__["CheckboxModule"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["BuilderFormComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["GridViewComponent"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/builder-form/builder-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/builder-form/builder-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: BuilderFormComponent */

  /***/
  function srcAppComponentsBuilderFormBuilderFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuilderFormComponent", function () {
      return BuilderFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @sage/ng-carbon/button */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js");
    /* harmony import */


    var _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @sage/ng-carbon/checkbox */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-checkbox.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @sage/ng-carbon/input-text */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-input-text.js");
    /* harmony import */


    var _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sage/ng-carbon/dropdown */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-dropdown.js");

    function BuilderFormComponent_form_15_sds_dropdown_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sds-dropdown-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3, " ");
      }
    }

    function BuilderFormComponent_form_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BuilderFormComponent_form_15_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.addColumn();
        });

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
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.columnForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.isFieldInvalid(ctx_r0.columnForm, "size"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.isFieldInvalid(ctx_r0.columnForm, "unit"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.axisUnits);
      }
    }

    function BuilderFormComponent_form_16_sds_dropdown_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sds-dropdown-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r7, " ");
      }
    }

    function BuilderFormComponent_form_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BuilderFormComponent_form_16_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.addRow();
        });

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
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.rowForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.isFieldInvalid(ctx_r1.rowForm, "size"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.isFieldInvalid(ctx_r1.rowForm, "unit"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.axisUnits);
      }
    }

    var BuilderFormComponent = /*#__PURE__*/function () {
      function BuilderFormComponent(fb) {
        _classCallCheck(this, BuilderFormComponent);

        this.fb = fb;
        this.gridChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showColumnForm = false;
        this.showRowForm = false;
        this.axisUnits = ['fr', '%', 'px', 'auto'];
      }

      _createClass(BuilderFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

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
          this.form.valueChanges.subscribe(function (value) {
            var newGrid = Object.assign(Object.assign({}, _this.grid), value);

            _this.gridChanged.emit(newGrid);

            console.log(newGrid);
          });
        }
      }, {
        key: "isFieldInvalid",
        value: function isFieldInvalid(form, field) {
          return form.get(field).touched && form.get(field).errors ? 'This field is required.' : null;
        }
      }, {
        key: "addColumn",
        value: function addColumn() {
          this.columnForm.markAllAsTouched();

          if (!this.columnForm.valid) {
            return;
          }

          var newColumn = {
            size: this.columnForm.get('size').value,
            unit: this.columnForm.get('unit').value
          };
          var newGrid = Object.assign(Object.assign({}, this.grid), {
            columns: [].concat(_toConsumableArray(this.grid.columns), [newColumn])
          });
          this.gridChanged.emit(newGrid);
          this.columnForm.reset();
          this.showColumnForm = false;
        }
      }, {
        key: "addRow",
        value: function addRow() {
          this.rowForm.markAllAsTouched();

          if (!this.rowForm.valid) {
            return;
          }

          var newRow = {
            size: this.rowForm.get('size').value,
            unit: this.rowForm.get('unit').value
          };
          var newGrid = Object.assign(Object.assign({}, this.grid), {
            rows: [].concat(_toConsumableArray(this.grid.rows), [newRow])
          });
          this.gridChanged.emit(newGrid);
          this.rowForm.reset();
          this.showRowForm = false;
        }
      }]);

      return BuilderFormComponent;
    }();

    BuilderFormComponent.ɵfac = function BuilderFormComponent_Factory(t) {
      return new (t || BuilderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    BuilderFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BuilderFormComponent,
      selectors: [["app-builder-form"]],
      inputs: {
        grid: "grid"
      },
      outputs: {
        gridChanged: "gridChanged"
      },
      decls: 17,
      vars: 3,
      consts: [[1, "builder-form", 3, "formGroup"], ["type", "button", 3, "clickEvent"], [1, "input-field"], ["type", "number", "min", "0", "formControlName", "columnGap"], ["type", "number", "min", "0", "formControlName", "rowGap"], ["formControlName", "fillGrid", "size", "large"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["formControlName", "size", "placeholderText", "size..", "errorType", "error", 3, "errors"], ["formControlName", "unit", "placeholder", "unit..", "errorType", "error", 3, "errors"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit"], [3, "value"]],
      template: function BuilderFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "sds-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function BuilderFormComponent_Template_sds_button_clickEvent_1_listener() {
            return ctx.showColumnForm = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Column ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "sds-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function BuilderFormComponent_Template_sds_button_clickEvent_3_listener() {
            return ctx.showRowForm = true;
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showColumnForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRowForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _sage_ng_carbon_checkbox__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _sage_ng_carbon_input_text__WEBPACK_IMPORTED_MODULE_5__["InputTextComponent"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _sage_ng_carbon_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownOptionComponent"]],
      styles: [".builder-form[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.input-field[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px;\n}\n\n.input-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idWlsZGVyLWZvcm0vQzpcXFVzZXJzXFxhbGV4LnJheW5lclxcRGV2ZWxvcG1lbnRcXGxheW91dC1idWlsZGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxidWlsZGVyLWZvcm1cXGJ1aWxkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9idWlsZGVyLWZvcm0vYnVpbGRlci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENFO0VBQ0UscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVpbGRlci1mb3JtL2J1aWxkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idWlsZGVyLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogOHB4O1xyXG5cclxuICBsYWJlbCA+ICoge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG4iLCIuYnVpbGRlci1mb3JtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaW5wdXQtZmllbGQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5pbnB1dC1maWVsZCBsYWJlbCA+ICoge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuilderFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-builder-form',
          template: "\n    <form class=\"builder-form\" [formGroup]=\"form\">\n      <sds-button\n        type=\"button\"\n        (clickEvent)=\"showColumnForm = true\"\n      >\n        Add Column\n      </sds-button>\n\n      <sds-button\n        type=\"button\"\n        (clickEvent)=\"showRowForm = true\"\n      >\n        Add Row\n      </sds-button>\n\n      <div class=\"input-field\">\n        <label>\n          Column Gap (px):\n          <input type=\"number\" min=\"0\" formControlName=\"columnGap\"/>\n        </label>\n      </div>\n\n      <div class=\"input-field\">\n        <label>\n          Row Gap (px):\n          <input type=\"number\" min=\"0\" formControlName=\"rowGap\"/>\n        </label>\n      </div>\n\n      <sds-checkbox\n        formControlName=\"fillGrid\"\n        size=\"large\"\n      >\n        Fill grid?\n      </sds-checkbox>\n    </form>\n\n    <form\n      *ngIf=\"showColumnForm\"\n      [formGroup]=\"columnForm\"\n      (ngSubmit)=\"addColumn()\"\n    >\n      <div class=\"input-field\">\n        <label>\n          New Column:\n          <sds-input-text\n            formControlName=\"size\"\n            placeholderText=\"size..\"\n            errorType=\"error\"\n            [errors]=\"isFieldInvalid(columnForm, 'size')\"\n          >\n          </sds-input-text>\n          <sds-dropdown\n            formControlName=\"unit\"\n            placeholder=\"unit..\"\n            errorType=\"error\"\n            [errors]=\"isFieldInvalid(columnForm, 'unit')\"\n          >\n            <sds-dropdown-option\n              *ngFor=\"let option of axisUnits\"\n              [value]=\"option\"\n            >\n              {{ option }}\n            </sds-dropdown-option>\n          </sds-dropdown>\n        </label>\n      </div>\n\n      <sds-button type=\"submit\">Add</sds-button>\n    </form>\n\n    <form\n      *ngIf=\"showRowForm\"\n      [formGroup]=\"rowForm\"\n      (ngSubmit)=\"addRow()\"\n    >\n      <div class=\"input-field\">\n        <label>\n          New Row:\n          <sds-input-text\n            formControlName=\"size\"\n            placeholderText=\"size..\"\n            errorType=\"error\"\n            [errors]=\"isFieldInvalid(rowForm, 'size')\"\n          >\n          </sds-input-text>\n          <sds-dropdown\n            formControlName=\"unit\"\n            placeholder=\"unit..\"\n            errorType=\"error\"\n            [errors]=\"isFieldInvalid(rowForm, 'unit')\"\n          >\n            <sds-dropdown-option\n              *ngFor=\"let option of axisUnits\"\n              [value]=\"option\"\n            >\n              {{ option }}\n            </sds-dropdown-option>\n          </sds-dropdown>\n        </label>\n      </div>\n\n      <sds-button type=\"submit\">Add</sds-button>\n    </form>\n  ",
          styleUrls: ['./builder-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gridChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
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


    var _sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @sage/ng-carbon/button */
    "./node_modules/@sage/ng-carbon/__ivy_ngcc__/fesm2015/sage-ng-carbon-button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["gridElem"];

    function GridViewComponent_pre_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](".grid {\n    ", ctx_r0.generatedStyles, "\n}\n");
      }
    }

    function GridViewComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridViewComponent_div_4_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var i_r7 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.removeColumn(i_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DELETE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GridViewComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridViewComponent_div_4_div_1_Template, 2, 0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.columnStyles);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.columnCount);
      }
    }

    function GridViewComponent_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridViewComponent_div_5_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var i_r12 = ctx.index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.removeRow(i_r12);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DELETE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GridViewComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridViewComponent_div_5_div_1_Template, 2, 0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r2.rowStyles);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.rowCount);
      }
    }

    function GridViewComponent_ng_container_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ITEM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GridViewComponent_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridViewComponent_ng_container_8_div_1_Template, 2, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.count);
      }
    }

    var GridViewComponent = /*#__PURE__*/function () {
      function GridViewComponent() {
        _classCallCheck(this, GridViewComponent);
      }

      _createClass(GridViewComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.gridElem.nativeElement.style.display = 'grid';
        }
      }, {
        key: "getStyles",
        value: function getStyles() {
          var styles = this.gridElem.nativeElement.style.cssText;
          this.generatedStyles = styles.replace(/; /g, ';\n    ');
        }
      }, {
        key: "removeColumn",
        value: function removeColumn(index) {
          this.grid.columns.splice(index, 1);
        }
      }, {
        key: "removeRow",
        value: function removeRow(index) {
          this.grid.rows.splice(index, 1);
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
          return Object.assign(Object.assign({}, this.columnStyles), this.rowStyles);
        }
      }]);

      return GridViewComponent;
    }();

    GridViewComponent.ɵfac = function GridViewComponent_Factory(t) {
      return new (t || GridViewComponent)();
    };

    GridViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GridViewComponent,
      selectors: [["app-grid-view"]],
      viewQuery: function GridViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridElem = _t.first);
        }
      },
      inputs: {
        grid: "grid"
      },
      decls: 9,
      vars: 6,
      consts: [[3, "clickEvent"], ["class", "output-styles", 4, "ngIf"], [1, "grid-view"], ["class", "columns", 3, "style", 4, "ngIf"], ["class", "rows", 3, "style", 4, "ngIf"], [1, "grid"], ["gridElem", ""], [4, "ngIf"], [1, "output-styles"], [1, "columns"], ["tabIndex", "0", 3, "click", 4, "ngFor", "ngForOf"], ["tabIndex", "0", 3, "click"], [1, "rows"], ["class", "grid__item", 4, "ngFor", "ngForOf"], [1, "grid__item"]],
      template: function GridViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sds-button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function GridViewComponent_Template_sds_button_clickEvent_0_listener() {
            return ctx.getStyles();
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_sage_ng_carbon_button__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.grid-view[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr;\n  gap: 10px;\n}\n\n.columns[_ngcontent-%COMP%], .rows[_ngcontent-%COMP%] {\n  display: grid;\n  font-weight: bold;\n  color: #C7384F;\n  text-align: center;\n  cursor: pointer;\n}\n\n.columns[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.rows[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-min-content;\n  grid-template-columns: min-content;\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.rows[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  writing-mode: vertical-lr;\n  transform: rotate(-180deg);\n}\n\n.grid[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 2;\n  height: 550px;\n}\n\n.grid__item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #008200;\n  color: #fff;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.output-styles[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #F2F5F6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvQzpcXFVzZXJzXFxhbGV4LnJheW5lclxcRGV2ZWxvcG1lbnRcXGxheW91dC1idWlsZGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxncmlkLXZpZXdcXGdyaWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0VBQUEsa0NBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQUY7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURJQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZ3JpZC12aWV3IHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLmNvbHVtbnMsIC5yb3dzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjQzczODRGO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb2x1bW5zIHtcclxuICBncmlkLWNvbHVtbjogMjtcclxuICBncmlkLXJvdzogMTtcclxufVxyXG5cclxuLnJvd3Mge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQ7XHJcbiAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgZ3JpZC1yb3c6IDI7XHJcbiAgXHJcbiAgPiAqIHtcclxuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICBncmlkLWNvbHVtbjogMjtcclxuICBncmlkLXJvdzogMjtcclxuICBoZWlnaHQ6IDU1MHB4O1xyXG5cclxuICAmX19pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODIwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLm91dHB1dC1zdHlsZXMge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjVGNjtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZ3JpZC12aWV3IHtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uY29sdW1ucywgLnJvd3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNDNzM4NEY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29sdW1ucyB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBncmlkLXJvdzogMTtcbn1cblxuLnJvd3Mge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50O1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDI7XG59XG4ucm93cyA+ICoge1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbn1cblxuLmdyaWQge1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3c6IDI7XG4gIGhlaWdodDogNTUwcHg7XG59XG4uZ3JpZF9faXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgyMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5vdXRwdXQtc3R5bGVzIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjVGNjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-grid-view',
          template: "\n    <sds-button (clickEvent)=\"getStyles()\">\n      Get Styles\n    </sds-button>\n\n    <pre\n      *ngIf=\"generatedStyles\"\n      class=\"output-styles\"\n    >\n.grid &#123;\n    {{ generatedStyles }}\n&#125;\n</pre>\n\n    <div class=\"grid-view\">\n\n      <div\n        *ngIf=\"grid.columns.length > 0\"\n        class=\"columns\"\n        [style]=\"columnStyles\"\n      >\n        <div\n          *ngFor=\"let col of columnCount; let i = index\"\n          tabIndex=\"0\"\n          (click)=\"removeColumn(i)\"\n        >\n          DELETE\n        </div>\n      </div>\n\n      <div\n        *ngIf=\"grid.rows.length > 0\"\n        class=\"rows\"\n        [style]=\"rowStyles\"\n      >\n        <div\n          *ngFor=\"let row of rowCount; let i = index\"\n          tabIndex=\"0\"\n          (click)=\"removeRow(i)\"\n        >\n          DELETE\n        </div>\n      </div>\n\n      <div\n        #gridElem\n        class=\"grid\"\n        [style]=\"styles\"\n      >\n        <ng-container *ngIf=\"grid?.fillGrid\">\n          <div\n            *ngFor=\"let item of count\"\n            class=\"grid__item\"\n          >ITEM</div>\n        </ng-container>\n      </div>\n    </div>\n  ",
          styleUrls: ['./grid-view.component.scss']
        }]
      }], null, {
        gridElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gridElem']
        }],
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/index.ts":
  /*!*************************************!*\
    !*** ./src/app/components/index.ts ***!
    \*************************************/

  /*! exports provided: BuilderFormComponent, GridViewComponent */

  /***/
  function srcAppComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _builder_form_builder_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./builder-form/builder-form.component */
    "./src/app/components/builder-form/builder-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BuilderFormComponent", function () {
      return _builder_form_builder_form_component__WEBPACK_IMPORTED_MODULE_0__["BuilderFormComponent"];
    });
    /* harmony import */


    var _grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./grid-view/grid-view.component */
    "./src/app/components/grid-view/grid-view.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GridViewComponent", function () {
      return _grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_1__["GridViewComponent"];
    });
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

    var getInitialGrid = function getInitialGrid() {
      return {
        columns: [{
          size: '1',
          unit: 'fr'
        }, {
          size: '1',
          unit: 'fr'
        }],
        rows: [{
          size: '1',
          unit: 'fr'
        }, {
          size: '1',
          unit: 'fr'
        }],
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

  /*! exports provided: getInitialGrid */

  /***/
  function srcAppModelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _grid_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./grid.model */
    "./src/app/models/grid.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getInitialGrid", function () {
      return _grid_model__WEBPACK_IMPORTED_MODULE_0__["getInitialGrid"];
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