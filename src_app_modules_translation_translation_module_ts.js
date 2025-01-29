(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_translation_translation_module_ts"],{

/***/ 3747:
/*!*******************************************************************!*\
  !*** ./src/app/modules/translation/translation-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslationRoutingModule: () => (/* binding */ TranslationRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _translation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translation.page */ 1374);




const routes = [{
  path: '',
  component: _translation_page__WEBPACK_IMPORTED_MODULE_0__.TranslationPage
}];
let TranslationRoutingModule = class TranslationRoutingModule {};
TranslationRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TranslationRoutingModule);


/***/ }),

/***/ 8694:
/*!***********************************************************!*\
  !*** ./src/app/modules/translation/translation.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslationModule: () => (/* binding */ TranslationModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 5629);
/* harmony import */ var _translation_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translation-routing.module */ 3747);
/* harmony import */ var _translation_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translation.page */ 1374);





let TranslationModule = class TranslationModule {};
TranslationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _translation_routing_module__WEBPACK_IMPORTED_MODULE_1__.TranslationRoutingModule],
  declarations: [_translation_page__WEBPACK_IMPORTED_MODULE_2__.TranslationPage]
})], TranslationModule);


/***/ }),

/***/ 1374:
/*!*********************************************************!*\
  !*** ./src/app/modules/translation/translation.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslationPage: () => (/* binding */ TranslationPage)
/* harmony export */ });
/* harmony import */ var D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _translation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translation.page.html?ngResource */ 4546);
/* harmony import */ var _translation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translation.page.scss?ngResource */ 4034);
/* harmony import */ var _translation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_translation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _capacitor_mlkit_translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-mlkit/translation */ 1140);







let TranslationPage = class TranslationPage {
  constructor() {
    this.language = _capacitor_mlkit_translation__WEBPACK_IMPORTED_MODULE_3__.Language;
    this.translateFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
      text: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(''),
      sourceLanguage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(_capacitor_mlkit_translation__WEBPACK_IMPORTED_MODULE_3__.Language.English),
      targetLanguage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(_capacitor_mlkit_translation__WEBPACK_IMPORTED_MODULE_3__.Language.German),
      translatedText: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('')
    });
    this.manageModelsFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
      languages: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl([])
    });
    this.disableSaveModelsButton = false;
    this.githubUrl = 'https://github.com/capawesome-team/capacitor-mlkit';
  }
  ngOnInit() {
    this.getDownloadedModels();
  }
  openOnGithub() {
    window.open(this.githubUrl, '_blank');
  }
  saveModels() {
    var _this = this;
    return (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.disableSaveModelsButton = true;
      const languages = _this.manageModelsFormGroup.get('languages')?.value;
      if (!languages) {
        return;
      }
      for (const availableLanguage of Object.values(_capacitor_mlkit_translation__WEBPACK_IMPORTED_MODULE_3__.Language)) {
        if (languages.includes(availableLanguage)) {
          yield _capacitor_mlkit_translation__WEBPACK_IMPORTED_MODULE_3__.Translation.downloadModel({
            language: availableLanguage
          });
        } else {
          yield _capacitor_mlkit_translation__WEBPACK_IMPORTED_MODULE_3__.Translation.deleteDownloadedModel({
            language: availableLanguage
          });
        }
      }
      _this.disableSaveModelsButton = false;
    })();
  }
  getDownloadedModels() {
    var _this2 = this;
    return (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        languages
      } = yield _capacitor_mlkit_translation__WEBPACK_IMPORTED_MODULE_3__.Translation.getDownloadedModels();
      _this2.manageModelsFormGroup.patchValue({
        languages
      });
    })();
  }
  translate() {
    var _this3 = this;
    return (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const text = _this3.translateFormGroup.get('text')?.value;
      const sourceLanguage = _this3.translateFormGroup.get('sourceLanguage')?.value;
      const targetLanguage = _this3.translateFormGroup.get('targetLanguage')?.value;
      if (!text || !sourceLanguage || !targetLanguage) {
        return;
      }
      const result = yield _capacitor_mlkit_translation__WEBPACK_IMPORTED_MODULE_3__.Translation.translate({
        text,
        sourceLanguage,
        targetLanguage
      });
      _this3.translateFormGroup.patchValue({
        translatedText: result.text
      });
    })();
  }
  static {
    this.ctorParameters = () => [];
  }
};
TranslationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-translation',
  template: _translation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_translation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], TranslationPage);


/***/ }),

/***/ 2829:
/*!***************************************************************************!*\
  !*** ./node_modules/@capacitor-mlkit/translation/dist/esm/definitions.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Language: () => (/* binding */ Language)
/* harmony export */ });
/**
 * The language to translate to or from.
 *
 * @since 0.0.1
 */
var Language;
(function (Language) {
  /**
   * @since 0.0.1
   */
  Language["Afrikaans"] = "af";
  /**
   * @since 0.0.1
   */
  Language["Arabic"] = "ar";
  /**
   * @since 0.0.1
   */
  Language["Belarusian"] = "be";
  /**
   * @since 0.0.1
   */
  Language["Bulgarian"] = "bg";
  /**
   * @since 0.0.1
   */
  Language["Bengali"] = "bn";
  /**
   * @since 0.0.1
   */
  Language["Catalan"] = "ca";
  /**
   * @since 0.0.1
   */
  Language["Czech"] = "cs";
  /**
   * @since 0.0.1
   */
  Language["Welsh"] = "cy";
  /**
   * @since 0.0.1
   */
  Language["Danish"] = "da";
  /**
   * @since 0.0.1
   */
  Language["German"] = "de";
  /**
   * @since 0.0.1
   */
  Language["Greek"] = "el";
  /**
   * @since 0.0.1
   */
  Language["English"] = "en";
  /**
   * @since 0.0.1
   */
  Language["Esperanto"] = "eo";
  /**
   * @since 0.0.1
   */
  Language["Spanish"] = "es";
  /**
   * @since 0.0.1
   */
  Language["Estonian"] = "et";
  /**
   * @since 0.0.1
   */
  Language["Persian"] = "fa";
  /**
   * @since 0.0.1
   */
  Language["Finnish"] = "fi";
  /**
   * @since 0.0.1
   */
  Language["French"] = "fr";
  /**
   * @since 0.0.1
   */
  Language["Irish"] = "ga";
  /**
   * @since 0.0.1
   */
  Language["Galician"] = "gl";
  /**
   * @since 0.0.1
   */
  Language["Gujarati"] = "gu";
  /**
   * @since 0.0.1
   */
  Language["Hebrew"] = "he";
  /**
   * @since 0.0.1
   */
  Language["Hindi"] = "hi";
  /**
   * @since 0.0.1
   */
  Language["Croatian"] = "hr";
  /**
   * @since 0.0.1
   */
  Language["Haitian"] = "ht";
  /**
   * @since 0.0.1
   */
  Language["Hungarian"] = "hu";
  /**
   * @since 0.0.1
   */
  Language["Indonesian"] = "id";
  /**
   * @since 0.0.1
   */
  Language["Icelandic"] = "is";
  /**
   * @since 0.0.1
   */
  Language["Italian"] = "it";
  /**
   * @since 0.0.1
   */
  Language["Japanese"] = "ja";
  /**
   * @since 0.0.1
   */
  Language["Georgian"] = "ka";
  /**
   * @since 0.0.1
   */
  Language["Kannada"] = "kn";
  /**
   * @since 0.0.1
   */
  Language["Korean"] = "ko";
  /**
   * @since 0.0.1
   */
  Language["Lithuanian"] = "lt";
  /**
   * @since 0.0.1
   */
  Language["Latvian"] = "lv";
  /**
   * @since 0.0.1
   */
  Language["Macedonian"] = "mk";
  /**
   * @since 0.0.1
   */
  Language["Marathi"] = "mr";
  /**
   * @since 0.0.1
   */
  Language["Malay"] = "ms";
  /**
   * @since 0.0.1
   */
  Language["Maltese"] = "mt";
  /**
   * @since 0.0.1
   */
  Language["Dutch"] = "nl";
  /**
   * @since 0.0.1
   */
  Language["Norwegian"] = "no";
  /**
   * @since 0.0.1
   */
  Language["Polish"] = "pl";
  /**
   * @since 0.0.1
   */
  Language["Portuguese"] = "pt";
  /**
   * @since 0.0.1
   */
  Language["Romanian"] = "ro";
  /**
   * @since 0.0.1
   */
  Language["Russian"] = "ru";
  /**
   * @since 0.0.1
   */
  Language["Slovak"] = "sk";
  /**
   * @since 0.0.1
   */
  Language["Slovenian"] = "sl";
  /**
   * @since 0.0.1
   */
  Language["Albanian"] = "sq";
  /**
   * @since 0.0.1
   */
  Language["Swedish"] = "sv";
  /**
   * @since 0.0.1
   */
  Language["Swahili"] = "sw";
  /**
   * @since 0.0.1
   */
  Language["Tamil"] = "ta";
  /**
   * @since 0.0.1
   */
  Language["Telugu"] = "te";
  /**
   * @since 0.0.1
   */
  Language["Thai"] = "th";
  /**
   * @since 0.0.1
   */
  Language["Tagalog"] = "tl";
  /**
   * @since 0.0.1
   */
  Language["Turkish"] = "tr";
  /**
   * @since 0.0.1
   */
  Language["Ukrainian"] = "uk";
  /**
   * @since 0.0.1
   */
  Language["Urdu"] = "ur";
  /**
   * @since 0.0.1
   */
  Language["Vietnamese"] = "vi";
  /**
   * @since 0.0.1
   */
  Language["Chinese"] = "zh";
})(Language || (Language = {}));

/***/ }),

/***/ 1140:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor-mlkit/translation/dist/esm/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Language: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Language),
/* harmony export */   Translation: () => (/* binding */ Translation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 2829);

const Translation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Translation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-mlkit_translation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1597)).then(m => new m.TranslationWeb())
});



/***/ }),

/***/ 4034:
/*!**********************************************************************!*\
  !*** ./src/app/modules/translation/translation.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4546:
/*!**********************************************************************!*\
  !*** ./src/app/modules/translation/translation.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>ML Kit Translation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>About</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      ⚡️ Capacitor plugin for ML Kit Translation.\r\n    </ion-card-content>\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col>\r\n        <ion-button\r\n          fill=\"clear\"\r\n          (click)=\"openOnGithub()\"\r\n          class=\"ion-float-right\"\r\n          >GitHub</ion-button\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Translate</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <form [formGroup]=\"translateFormGroup\">\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Text</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Source Language</ion-label>\r\n          <ion-select formControlName=\"sourceLanguage\">\r\n            @for (item of language | keyvalue; track item) {\r\n            <ion-select-option [value]=\"item.value\"\r\n              >{{ item.key }}</ion-select-option\r\n            >\r\n            }\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Target Language</ion-label>\r\n          <ion-select formControlName=\"targetLanguage\">\r\n            @for (item of language | keyvalue; track item) {\r\n            <ion-select-option [value]=\"item.value\"\r\n              >{{ item.key }}</ion-select-option\r\n            >\r\n            }\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Translation</ion-label>\r\n          <ion-input\r\n            type=\"text\"\r\n            readonly\r\n            formControlName=\"translatedText\"\r\n          ></ion-input>\r\n        </ion-item>\r\n      </form>\r\n      <ion-button (click)=\"translate()\">Translate</ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Manage Models</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <form [formGroup]=\"manageModelsFormGroup\">\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Language</ion-label>\r\n          <ion-select formControlName=\"languages\" [multiple]=\"true\">\r\n            @for (item of language | keyvalue; track item) {\r\n            <ion-select-option [value]=\"item.value\"\r\n              >{{ item.key }}</ion-select-option\r\n            >\r\n            }\r\n          </ion-select>\r\n        </ion-item>\r\n      </form>\r\n      <ion-button (click)=\"saveModels()\" [disabled]=\"disableSaveModelsButton\"\r\n        >Save</ion-button\r\n      >\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_translation_translation_module_ts.js.map