(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_selfie-segmentation_selfie-segmentation_module_ts"],{

/***/ 2047:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/selfie-segmentation/selfie-segmentation-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelfieSegmentationRoutingModule: () => (/* binding */ SelfieSegmentationRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _selfie_segmentation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selfie-segmentation.page */ 289);




const routes = [{
  path: '',
  component: _selfie_segmentation_page__WEBPACK_IMPORTED_MODULE_0__.SelfieSegmentationPage
}];
let SelfieSegmentationRoutingModule = class SelfieSegmentationRoutingModule {};
SelfieSegmentationRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SelfieSegmentationRoutingModule);


/***/ }),

/***/ 1642:
/*!***************************************************************************!*\
  !*** ./src/app/modules/selfie-segmentation/selfie-segmentation.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelfieSegmentationModule: () => (/* binding */ SelfieSegmentationModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 5629);
/* harmony import */ var _selfie_segmentation_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selfie-segmentation-routing.module */ 2047);
/* harmony import */ var _selfie_segmentation_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selfie-segmentation.page */ 289);





let SelfieSegmentationModule = class SelfieSegmentationModule {};
SelfieSegmentationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _selfie_segmentation_routing_module__WEBPACK_IMPORTED_MODULE_1__.SelfieSegmentationRoutingModule],
  declarations: [_selfie_segmentation_page__WEBPACK_IMPORTED_MODULE_2__.SelfieSegmentationPage]
})], SelfieSegmentationModule);


/***/ }),

/***/ 289:
/*!*************************************************************************!*\
  !*** ./src/app/modules/selfie-segmentation/selfie-segmentation.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelfieSegmentationPage: () => (/* binding */ SelfieSegmentationPage)
/* harmony export */ });
/* harmony import */ var D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _selfie_segmentation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selfie-segmentation.page.html?ngResource */ 6564);
/* harmony import */ var _selfie_segmentation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selfie-segmentation.page.scss?ngResource */ 5854);
/* harmony import */ var _selfie_segmentation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_selfie_segmentation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _capacitor_mlkit_selfie_segmentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-mlkit/selfie-segmentation */ 8785);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var _capawesome_capacitor_file_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capawesome/capacitor-file-picker */ 5307);










let SelfieSegmentationPage = class SelfieSegmentationPage {
  constructor(domSanitizer) {
    this.domSanitizer = domSanitizer;
    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({
      width: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(512),
      height: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      confidence: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(9)
    });
    this.githubUrl = 'https://github.com/capawesome-team/capacitor-mlkit';
  }
  openOnGithub() {
    window.open(this.githubUrl, '_blank');
  }
  pinFormatter(value) {
    return `${value / 10.0}`;
  }
  processImage() {
    var _this = this;
    return (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        files
      } = yield _capawesome_capacitor_file_picker__WEBPACK_IMPORTED_MODULE_5__.FilePicker.pickImages({
        limit: 1
      });
      const path = files[0]?.path;
      if (!path) {
        return;
      }
      const width = _this.formGroup.get('width')?.value;
      const height = _this.formGroup.get('height')?.value;
      const confidence = _this.formGroup.get('confidence')?.value;
      const result = yield _capacitor_mlkit_selfie_segmentation__WEBPACK_IMPORTED_MODULE_3__.SelfieSegmentation.processImage({
        path,
        width: width,
        height: height,
        confidence: confidence / 10.0
      });
      _this.result = result;
    })();
  }
  convertPathToWebPath(path) {
    const fileSrc = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.convertFileSrc(path);
    return this.domSanitizer.bypassSecurityTrustUrl(fileSrc);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer
    }];
  }
};
SelfieSegmentationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-selfie-segmentation',
  template: _selfie_segmentation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_selfie_segmentation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SelfieSegmentationPage);


/***/ }),

/***/ 8690:
/*!***********************************************************************************!*\
  !*** ./node_modules/@capacitor-mlkit/selfie-segmentation/dist/esm/definitions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8785:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor-mlkit/selfie-segmentation/dist/esm/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelfieSegmentation: () => (/* binding */ SelfieSegmentation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 8690);

const SelfieSegmentation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('SelfieSegmentation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-mlkit_selfie-segmentation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8929)).then(m => new m.SelfieSegmentationWeb())
});



/***/ }),

/***/ 5854:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/selfie-segmentation/selfie-segmentation.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `img {
  --backgroundColor: rgb(255, 255, 255);
  --squareColor: rgba(100, 100, 100, 0.5);
  --squareSize: 0.5em;
  background-color: var(--backgroundColor);
  background-image: linear-gradient(45deg, var(--squareColor) 25%, transparent 25%), linear-gradient(135deg, var(--squareColor) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--squareColor) 75%), linear-gradient(135deg, transparent 75%, var(--squareColor) 75%);
  background-position: 0 0, var(--squareSize) 0, var(--squareSize) calc(-1 * var(--squareSize)), 0 calc(-1 * var(--squareSize));
  background-size: calc(2 * var(--squareSize)) calc(2 * var(--squareSize));
}
@media (prefers-color-scheme: dark) {
  img {
    --backgroundColor: rgb(0, 0, 0);
  }
}`, "",{"version":3,"sources":["webpack://./src/app/modules/selfie-segmentation/selfie-segmentation.page.scss"],"names":[],"mappings":"AAAA;EACE,qCAAA;EACA,uCAAA;EACA,mBAAA;EAMA,wCAAA;EACA,sRAAA;EAQA,6HACE;EAIF,wEAAA;AAfF;AAHE;EALF;IAMI,+BAAA;EAMF;AACF","sourcesContent":["img {\r\n  --backgroundColor: rgb(255, 255, 255);\r\n  --squareColor: rgba(100, 100, 100, 0.5);\r\n  --squareSize: 0.5em;\r\n\r\n  @media (prefers-color-scheme: dark) {\r\n    --backgroundColor: rgb(0, 0, 0);\r\n  }\r\n\r\n  background-color: var(--backgroundColor);\r\n  background-image: linear-gradient(\r\n      45deg,\r\n      var(--squareColor) 25%,\r\n      transparent 25%\r\n    ),\r\n    linear-gradient(135deg, var(--squareColor) 25%, transparent 25%),\r\n    linear-gradient(45deg, transparent 75%, var(--squareColor) 75%),\r\n    linear-gradient(135deg, transparent 75%, var(--squareColor) 75%);\r\n  background-position:\r\n    0 0,\r\n    var(--squareSize) 0,\r\n    var(--squareSize) calc(-1 * var(--squareSize)),\r\n    0 calc(-1 * var(--squareSize));\r\n  background-size: calc(2 * var(--squareSize)) calc(2 * var(--squareSize));\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6564:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/selfie-segmentation/selfie-segmentation.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>ML Kit Selfie Segmentation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>About</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      ⚡️ Capacitor plugin for ML Kit Selfie Segmentation.\r\n    </ion-card-content>\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col>\r\n        <ion-button\r\n          fill=\"clear\"\r\n          (click)=\"openOnGithub()\"\r\n          class=\"ion-float-right\"\r\n          >GitHub</ion-button\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Demo</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <form [formGroup]=\"formGroup\">\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Width</ion-label>\r\n          <ion-input formControlName=\"width\" type=\"number\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Height</ion-label>\r\n          <ion-input formControlName=\"height\" type=\"number\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Confidence</ion-label>\r\n          <ion-range\r\n            aria-label=\"Confidence\"\r\n            [ticks]=\"true\"\r\n            [snaps]=\"true\"\r\n            [min]=\"0\"\r\n            [max]=\"10\"\r\n            [pin]=\"true\"\r\n            [pinFormatter]=\"pinFormatter\"\r\n            formControlName=\"confidence\"\r\n          ></ion-range>\r\n        </ion-item>\r\n        <ion-button (click)=\"processImage()\">Process Image</ion-button>\r\n      </form>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  @if (result) {\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <img [src]=\"convertPathToWebPath(result.path)\" />\r\n      <ion-item>\r\n        <ion-label position=\"fixed\">Width</ion-label>\r\n        <ion-input type=\"text\" readonly [value]=\"result.width\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"fixed\">Height</ion-label>\r\n        <ion-input type=\"text\" readonly [value]=\"result.height\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  }\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_selfie-segmentation_selfie-segmentation_module_ts.js.map