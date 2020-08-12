(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700&display=swap);"]);
// Module
exports.push([module.i, "/* Adelle Sans Sage */\n\n@font-face {\n  font-family: 'Adelle Sans Sage';\n  src: url('AdelleSansSage.eot');\n  src: url('AdelleSansSage.eot?#iefix') format('embedded-opentype'),\n    url('AdelleSansSage.woff2') format('woff2'), url('AdelleSansSage.woff') format('woff'),\n    url('AdelleSansSage.ttf') format('truetype'), url('AdelleSansSage.svg#AdelleSansSage') format('svg');\n  font-style: normal;\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: 'Adelle Sans Sage';\n  src: url('AdelleSansSage-Bold.eot');\n  src: url('AdelleSansSage-Bold.eot?#iefix') format('embedded-opentype'),\n    url('AdelleSansSage-Bold.woff2') format('woff2'), url('AdelleSansSage-Bold.woff') format('woff'),\n    url('AdelleSansSage-Bold.ttf') format('truetype'),\n    url('AdelleSansSage-Bold.svg#AdelleSansSageBold') format('svg');\n  font-style: normal;\n  font-weight: 600;\n}\n\n@font-face {\n  font-family: 'Adelle Sans Sage';\n  src: url('AdelleSansSage-Bold.eot');\n  src: url('AdelleSansSage-Bold.eot?#iefix') format('embedded-opentype'),\n    url('AdelleSansSage-Bold.woff2') format('woff2'), url('AdelleSansSage-Bold.woff') format('woff'),\n    url('AdelleSansSage-Bold.ttf') format('truetype'),\n    url('AdelleSansSage-Bold.svg#AdelleSansSageBold') format('svg');\n  font-style: normal;\n  font-weight: 700;\n}\n\n/* Adelle Sage */\n\n@font-face {\n  font-family: 'Adelle Sage';\n  src: url('AdelleSage.eot');\n  src: url('AdelleSage.eot?#iefix') format('embedded-opentype'), url('adellesage-webfont.woff2') format('woff2'),\n    url('adellesage-webfont.woff') format('woff'), url('AdelleSage.ttf') format('truetype'),\n    url('AdelleSage.svg#AdelleSage') format('svg');\n  font-style: normal;\n  font-weight: 200;\n}\n\n@font-face {\n  font-family: 'Adelle Sage';\n  src: url('AdelleSage.eot');\n  src: url('AdelleSage.eot?#iefix') format('embedded-opentype'), url('adellesage-webfont.woff2') format('woff2'),\n    url('adellesage-webfont.woff') format('woff'), url('AdelleSage.ttf') format('truetype'),\n    url('AdelleSage.svg#AdelleSage') format('svg');\n  font-style: normal;\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: 'Adelle Sage';\n  src: url('AdelleSage.eot');\n  src: url('AdelleSage.eot?#iefix') format('embedded-opentype'), url('adellesage-webfont.woff2') format('woff2'),\n    url('adellesage-webfont.woff') format('woff'), url('AdelleSage.ttf') format('truetype'),\n    url('AdelleSage.svg#AdelleSage') format('svg');\n  font-style: normal;\n  font-weight: 600;\n}\n\n@font-face {\n  font-family: 'Adelle Sage';\n  src: url('AdelleSage.eot');\n  src: url('AdelleSage.eot?#iefix') format('embedded-opentype'), url('adellesage-webfont.woff2') format('woff2'),\n    url('adellesage-webfont.woff') format('woff'), url('AdelleSage.ttf') format('truetype'),\n    url('AdelleSage.svg#AdelleSage') format('svg');\n  font-style: normal;\n  font-weight: 700;\n}\n\n@font-face {\n  font-family: 'Adelle Sage Bold';\n  src: url('AdelleSage-Bold.eot');\n  src: url('AdelleSage-Bold.eot?#iefix') format('embedded-opentype'), url('AdelleSage-Bold.woff2') format('woff2'),\n    url('AdelleSage-Bold.woff') format('woff'), url('AdelleSage-Bold.ttf') format('truetype'),\n    url('AdelleSage-Bold.svg#AdelleSageBold') format('svg');\n  font-style: normal;\n  font-weight: bold;\n}\n\n/* Carbon Icons */\n\n@font-face {\n  font-family: 'CarbonIcons';\n  src: url('carbon-icons-webfont.eot');\n  src: url('carbon-icons-webfont.eot?#iefix') format('embedded-opentype'),\n    url('carbon-icons-webfont.woff2') format('woff2'), url('carbon-icons-webfont.woff') format('woff'),\n    url('carbon-icons-webfont.ttf') format('truetype');\n  font-style: normal;\n  font-weight: normal;\n}\n\n:root {\n  /* Fonts */\n  --font-default-body: 'Open Sans', sans-serif;\n  --font-default-heading: 'Adelle Sans Sage', sans-serif;\n  --font-default-icon: 'CarbonIcons';\n\n  /* Default Colors */\n  --color-green: #00b000;\n  --color-green-shade-50: #006e00;\n  --color-green-shade-60: #005800;\n\n  --color-red: #c7384f;\n  --color-red-shade-10: #b33247;\n  --color-red-shade-20: #9f2d3f;\n  --color-red-shade-30: #8b2737;\n\n  --color-gold: #ffb500;\n  --color-gold-50: #ffda80;\n\n  --color-carrot: #e96400;\n  --color-carrot-20: #ed8333;\n  --color-carrot-shade-16: #c45400;\n  --color-carrot-shade-20: #ba5000;\n\n  --color-aegean: #0073c2;\n  --color-aegean-shade-20: #005fa0;\n\n  --color-white: #ffffff;\n\n  --color-slate-95: #f2f5f6;\n  --color-slate-90: #e6ebed;\n  --color-slate-80: #ccd6db;\n  --color-slate-60: #99adb6;\n  --color-slate-40: #668592;\n  --color-slate-30: #4d7080;\n  --color-slate-20: #335c6d;\n\n  --color-black-90: rgba(0, 0, 0, 0.9);\n  --color-black-60: rgba(0, 0, 0, 0.65);\n  --color-black-55: rgba(0, 0, 0, 0.55);\n  --color-black-30: rgba(0, 0, 0, 0.3);\n  --color-black-20: rgba(0, 0, 0, 0.2);\n\n  /* Accent colours */\n  --color-primary: #009900;\n  --color-secondary: #008200;\n  --color-hover: #006300;\n  --color-hover-2: #004500;\n\n  /* State colours */\n  --color-neutral: var(--color-slate-30);\n  --color-neutral--hover: var(--color-slate-30);\n\n  --color-info: var(--color-aegean);\n  --color-info--hover: var(--color-aegean-shade-20);\n\n  --color-success: var(--color-green-shade-50);\n  --color-success--hover: var(--color-green-shade-60);\n\n  --color-warning: var(--color-carrot);\n  --color-warning--hover: var(--color-carrot-shade-20);\n  --color-warning--text: var(--color-carrot-shade-16);\n\n  --color-error: var(--color-red);\n  --color-error--hover: var(--color-red-shade-20);\n\n  --color-focus: var(--color-gold);\n\n  /* Button styles */\n  --button-color: #008200;\n  --button-color--hover: #006300;\n  --button-color--hover-2: #004500;\n\n  --button-color-destructive: var(--color-red);\n  --button-color-destructive--hover: var(--color-red-shade-20);\n  --button-color-destructive--hover-2: var(--color-red-shade-30);\n\n  /* Inputs */\n  --input-color-text: var(--color-black);\n  --input-color-border: var(--color-slate-40);\n  --input-color-background: var(--color-white);\n\n  --input-color-disabled-text: var(--color-black-55);\n  --input-color-disabled-border: var(--color-slate-80);\n  --input-color-disabled-background: var(--color-slate-95);\n\n  --input-color-readonly-text: rgba(0, 0, 0, 0.74);\n  --input-color-readonly-border: var(--color-slate-80);\n  --input-color-readonly-background: #fafbfb;\n\n  /* Dialogs */\n  --dialog-z-index: 1000;\n\n  /* Tooltips */\n  --tooltip-z-index: 1000;\n}\n\n/* You can add global styles to this file, and also import other style files */\n\nhtml, body {\n  margin: 0;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n}\n\n*:focus {\n  outline: 3px solid #ffb500;\n}\n\ninput {\n  padding: 0px 11px;\n  line-height: 2.5em;\n  background-color: #fff;\n  border: 1px solid #668592;\n  box-sizing: border-box;\n}\n\nbutton {\n  margin: 0 8px;\n}", "",{"version":3,"sources":["../node_modules/@sage/ng-carbon/assets/fonts.css","../node_modules/@sage/ng-carbon/assets/themes/default.css","C:\\Users\\alex.rayner\\Development\\layout-builder/src\\styles.scss","styles.scss"],"names":[],"mappings":"AAEA,qBAAqB;;AACrB;EACE,+BAA+B;EAC/B,8BAAmD;EACnD;;wGAEgJ;EAChJ,kBAAkB;EAClB,gBAAgB;AAClB;;AACA;EACE,+BAA+B;EAC/B,mCAAwD;EACxD;;;mEAGsF;EACtF,kBAAkB;EAClB,gBAAgB;AAClB;;AACA;EACE,+BAA+B;EAC/B,mCAAwD;EACxD;;;mEAGsF;EACtF,kBAAkB;EAClB,gBAAgB;AAClB;;AACA,gBAAgB;;AAChB;EACE,0BAA0B;EAC1B,0BAA2C;EAC3C;;kDAEiE;EACjE,kBAAkB;EAClB,gBAAgB;AAClB;;AACA;EACE,0BAA0B;EAC1B,0BAA2C;EAC3C;;kDAEiE;EACjE,kBAAkB;EAClB,gBAAgB;AAClB;;AACA;EACE,0BAA0B;EAC1B,0BAA2C;EAC3C;;kDAEiE;EACjE,kBAAkB;EAClB,gBAAgB;AAClB;;AACA;EACE,0BAA0B;EAC1B,0BAA2C;EAC3C;;kDAEiE;EACjE,kBAAkB;EAClB,gBAAgB;AAClB;;AACA;EACE,+BAA+B;EAC/B,+BAAgD;EAChD;;2DAE0E;EAC1E,kBAAkB;EAClB,iBAAiB;AACnB;;AACA,iBAAiB;;AACjB;EACE,0BAA0B;EAC1B,oCAAmD;EACnD;;sDAEmE;EACnE,kBAAkB;EAClB,mBAAmB;AACrB;;ACvFA;EACE,UAAU;EACV,4CAA4C;EAC5C,sDAAsD;EACtD,kCAAkC;;EAElC,mBAAmB;EACnB,sBAAsB;EACtB,+BAA+B;EAC/B,+BAA+B;;EAE/B,oBAAoB;EACpB,6BAA6B;EAC7B,6BAA6B;EAC7B,6BAA6B;;EAE7B,qBAAqB;EACrB,wBAAwB;;EAExB,uBAAuB;EACvB,0BAA0B;EAC1B,gCAAgC;EAChC,gCAAgC;;EAEhC,uBAAuB;EACvB,gCAAgC;;EAEhC,sBAAsB;;EAEtB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;;EAEzB,oCAAoC;EACpC,qCAAqC;EACrC,qCAAqC;EACrC,oCAAoC;EACpC,oCAAoC;;EAEpC,mBAAmB;EACnB,wBAAwB;EACxB,0BAA0B;EAC1B,sBAAsB;EACtB,wBAAwB;;EAExB,kBAAkB;EAClB,sCAAsC;EACtC,6CAA6C;;EAE7C,iCAAiC;EACjC,iDAAiD;;EAEjD,4CAA4C;EAC5C,mDAAmD;;EAEnD,oCAAoC;EACpC,oDAAoD;EACpD,mDAAmD;;EAEnD,+BAA+B;EAC/B,+CAA+C;;EAE/C,gCAAgC;;EAEhC,kBAAkB;EAClB,uBAAuB;EACvB,8BAA8B;EAC9B,gCAAgC;;EAEhC,4CAA4C;EAC5C,4DAA4D;EAC5D,8DAA8D;;EAE9D,WAAW;EACX,sCAAsC;EACtC,2CAA2C;EAC3C,4CAA4C;;EAE5C,kDAAkD;EAClD,oDAAoD;EACpD,wDAAwD;;EAExD,gDAAgD;EAChD,oDAAoD;EACpD,0CAA0C;;EAE1C,YAAY;EACZ,sBAAsB;;EAEtB,aAAa;EACb,uBAAuB;AACzB;;AC5FA,8EAAA;;AACA;EACE,SAAA;EACA,oCAAA;EACA,eAAA;ACAF;;ADGA;EACE,0BAAA;ACAF;;ADGA;EACE,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,sBAAA;ACAF;;ADGA;EACE,aAAA;ACAF","file":"styles.scss","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700&display=swap');\n\n/* Adelle Sans Sage */\n@font-face {\n  font-family: 'Adelle Sans Sage';\n  src: url('fonts/AdelleSansSage/AdelleSansSage.eot');\n  src: url('fonts/AdelleSansSage/AdelleSansSage.eot?#iefix') format('embedded-opentype'),\n    url('fonts/AdelleSansSage/AdelleSansSage.woff2') format('woff2'), url('fonts/AdelleSansSage/AdelleSansSage.woff') format('woff'),\n    url('fonts/AdelleSansSage/AdelleSansSage.ttf') format('truetype'), url('fonts/AdelleSansSage/AdelleSansSage.svg#AdelleSansSage') format('svg');\n  font-style: normal;\n  font-weight: 400;\n}\n@font-face {\n  font-family: 'Adelle Sans Sage';\n  src: url('fonts/AdelleSansSage/AdelleSansSage-Bold.eot');\n  src: url('fonts/AdelleSansSage/AdelleSansSage-Bold.eot?#iefix') format('embedded-opentype'),\n    url('fonts/AdelleSansSage/AdelleSansSage-Bold.woff2') format('woff2'), url('fonts/AdelleSansSage/AdelleSansSage-Bold.woff') format('woff'),\n    url('fonts/AdelleSansSage/AdelleSansSage-Bold.ttf') format('truetype'),\n    url('fonts/AdelleSansSage/AdelleSansSage-Bold.svg#AdelleSansSageBold') format('svg');\n  font-style: normal;\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'Adelle Sans Sage';\n  src: url('fonts/AdelleSansSage/AdelleSansSage-Bold.eot');\n  src: url('fonts/AdelleSansSage/AdelleSansSage-Bold.eot?#iefix') format('embedded-opentype'),\n    url('fonts/AdelleSansSage/AdelleSansSage-Bold.woff2') format('woff2'), url('fonts/AdelleSansSage/AdelleSansSage-Bold.woff') format('woff'),\n    url('fonts/AdelleSansSage/AdelleSansSage-Bold.ttf') format('truetype'),\n    url('fonts/AdelleSansSage/AdelleSansSage-Bold.svg#AdelleSansSageBold') format('svg');\n  font-style: normal;\n  font-weight: 700;\n}\n/* Adelle Sage */\n@font-face {\n  font-family: 'Adelle Sage';\n  src: url('fonts/AdelleSage/AdelleSage.eot');\n  src: url('fonts/AdelleSage/AdelleSage.eot?#iefix') format('embedded-opentype'), url('fonts/AdelleSage/adellesage-webfont.woff2') format('woff2'),\n    url('fonts/AdelleSage/adellesage-webfont.woff') format('woff'), url('fonts/AdelleSage/AdelleSage.ttf') format('truetype'),\n    url('fonts/AdelleSage/AdelleSage.svg#AdelleSage') format('svg');\n  font-style: normal;\n  font-weight: 200;\n}\n@font-face {\n  font-family: 'Adelle Sage';\n  src: url('fonts/AdelleSage/AdelleSage.eot');\n  src: url('fonts/AdelleSage/AdelleSage.eot?#iefix') format('embedded-opentype'), url('fonts/AdelleSage/adellesage-webfont.woff2') format('woff2'),\n    url('fonts/AdelleSage/adellesage-webfont.woff') format('woff'), url('fonts/AdelleSage/AdelleSage.ttf') format('truetype'),\n    url('fonts/AdelleSage/AdelleSage.svg#AdelleSage') format('svg');\n  font-style: normal;\n  font-weight: 400;\n}\n@font-face {\n  font-family: 'Adelle Sage';\n  src: url('fonts/AdelleSage/AdelleSage.eot');\n  src: url('fonts/AdelleSage/AdelleSage.eot?#iefix') format('embedded-opentype'), url('fonts/AdelleSage/adellesage-webfont.woff2') format('woff2'),\n    url('fonts/AdelleSage/adellesage-webfont.woff') format('woff'), url('fonts/AdelleSage/AdelleSage.ttf') format('truetype'),\n    url('fonts/AdelleSage/AdelleSage.svg#AdelleSage') format('svg');\n  font-style: normal;\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'Adelle Sage';\n  src: url('fonts/AdelleSage/AdelleSage.eot');\n  src: url('fonts/AdelleSage/AdelleSage.eot?#iefix') format('embedded-opentype'), url('fonts/AdelleSage/adellesage-webfont.woff2') format('woff2'),\n    url('fonts/AdelleSage/adellesage-webfont.woff') format('woff'), url('fonts/AdelleSage/AdelleSage.ttf') format('truetype'),\n    url('fonts/AdelleSage/AdelleSage.svg#AdelleSage') format('svg');\n  font-style: normal;\n  font-weight: 700;\n}\n@font-face {\n  font-family: 'Adelle Sage Bold';\n  src: url('fonts/AdelleSage/AdelleSage-Bold.eot');\n  src: url('fonts/AdelleSage/AdelleSage-Bold.eot?#iefix') format('embedded-opentype'), url('fonts/AdelleSage/AdelleSage-Bold.woff2') format('woff2'),\n    url('fonts/AdelleSage/AdelleSage-Bold.woff') format('woff'), url('fonts/AdelleSage/AdelleSage-Bold.ttf') format('truetype'),\n    url('fonts/AdelleSage/AdelleSage-Bold.svg#AdelleSageBold') format('svg');\n  font-style: normal;\n  font-weight: bold;\n}\n/* Carbon Icons */\n@font-face {\n  font-family: 'CarbonIcons';\n  src: url('fonts/IconFont/carbon-icons-webfont.eot');\n  src: url('fonts/IconFont/carbon-icons-webfont.eot?#iefix') format('embedded-opentype'),\n    url('fonts/IconFont/carbon-icons-webfont.woff2') format('woff2'), url('fonts/IconFont/carbon-icons-webfont.woff') format('woff'),\n    url('fonts/IconFont/carbon-icons-webfont.ttf') format('truetype');\n  font-style: normal;\n  font-weight: normal;\n}\n",":root {\n  /* Fonts */\n  --font-default-body: 'Open Sans', sans-serif;\n  --font-default-heading: 'Adelle Sans Sage', sans-serif;\n  --font-default-icon: 'CarbonIcons';\n\n  /* Default Colors */\n  --color-green: #00b000;\n  --color-green-shade-50: #006e00;\n  --color-green-shade-60: #005800;\n\n  --color-red: #c7384f;\n  --color-red-shade-10: #b33247;\n  --color-red-shade-20: #9f2d3f;\n  --color-red-shade-30: #8b2737;\n\n  --color-gold: #ffb500;\n  --color-gold-50: #ffda80;\n\n  --color-carrot: #e96400;\n  --color-carrot-20: #ed8333;\n  --color-carrot-shade-16: #c45400;\n  --color-carrot-shade-20: #ba5000;\n\n  --color-aegean: #0073c2;\n  --color-aegean-shade-20: #005fa0;\n\n  --color-white: #ffffff;\n\n  --color-slate-95: #f2f5f6;\n  --color-slate-90: #e6ebed;\n  --color-slate-80: #ccd6db;\n  --color-slate-60: #99adb6;\n  --color-slate-40: #668592;\n  --color-slate-30: #4d7080;\n  --color-slate-20: #335c6d;\n\n  --color-black-90: rgba(0, 0, 0, 0.9);\n  --color-black-60: rgba(0, 0, 0, 0.65);\n  --color-black-55: rgba(0, 0, 0, 0.55);\n  --color-black-30: rgba(0, 0, 0, 0.3);\n  --color-black-20: rgba(0, 0, 0, 0.2);\n\n  /* Accent colours */\n  --color-primary: #009900;\n  --color-secondary: #008200;\n  --color-hover: #006300;\n  --color-hover-2: #004500;\n\n  /* State colours */\n  --color-neutral: var(--color-slate-30);\n  --color-neutral--hover: var(--color-slate-30);\n\n  --color-info: var(--color-aegean);\n  --color-info--hover: var(--color-aegean-shade-20);\n\n  --color-success: var(--color-green-shade-50);\n  --color-success--hover: var(--color-green-shade-60);\n\n  --color-warning: var(--color-carrot);\n  --color-warning--hover: var(--color-carrot-shade-20);\n  --color-warning--text: var(--color-carrot-shade-16);\n\n  --color-error: var(--color-red);\n  --color-error--hover: var(--color-red-shade-20);\n\n  --color-focus: var(--color-gold);\n\n  /* Button styles */\n  --button-color: #008200;\n  --button-color--hover: #006300;\n  --button-color--hover-2: #004500;\n\n  --button-color-destructive: var(--color-red);\n  --button-color-destructive--hover: var(--color-red-shade-20);\n  --button-color-destructive--hover-2: var(--color-red-shade-30);\n\n  /* Inputs */\n  --input-color-text: var(--color-black);\n  --input-color-border: var(--color-slate-40);\n  --input-color-background: var(--color-white);\n\n  --input-color-disabled-text: var(--color-black-55);\n  --input-color-disabled-border: var(--color-slate-80);\n  --input-color-disabled-background: var(--color-slate-95);\n\n  --input-color-readonly-text: rgba(0, 0, 0, 0.74);\n  --input-color-readonly-border: var(--color-slate-80);\n  --input-color-readonly-background: #fafbfb;\n\n  /* Dialogs */\n  --dialog-z-index: 1000;\n\n  /* Tooltips */\n  --tooltip-z-index: 1000;\n}\n","@import '~@sage/ng-carbon/assets/fonts.css';\n@import '~@sage/ng-carbon/assets/themes/default.css';\n\n/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  margin: 0;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n}\n\n*:focus {\n  outline: 3px solid #ffb500;\n}\n\ninput {\n  padding: 0px 11px;\n  line-height: 2.5em;\n  background-color: #fff;\n  border: 1px solid #668592;\n  box-sizing: border-box;\n}\n\nbutton {\n  margin: 0 8px;\n}\n","@import '~@sage/ng-carbon/assets/fonts.css';\n@import '~@sage/ng-carbon/assets/themes/default.css';\n/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  margin: 0;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n}\n\n*:focus {\n  outline: 3px solid #ffb500;\n}\n\ninput {\n  padding: 0px 11px;\n  line-height: 2.5em;\n  background-color: #fff;\n  border: 1px solid #668592;\n  box-sizing: border-box;\n}\n\nbutton {\n  margin: 0 8px;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alex.rayner\Development\layout-builder\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map