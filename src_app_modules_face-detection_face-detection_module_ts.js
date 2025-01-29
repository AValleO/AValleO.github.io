(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_face-detection_face-detection_module_ts"],{

/***/ 1778:
/*!*************************************************************************!*\
  !*** ./src/app/modules/face-detection/face-detection-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceDetectionRoutingModule: () => (/* binding */ FaceDetectionRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _face_detection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./face-detection.page */ 2914);




const routes = [{
  path: '',
  component: _face_detection_page__WEBPACK_IMPORTED_MODULE_0__.FaceDetectionPage
}];
let FaceDetectionRoutingModule = class FaceDetectionRoutingModule {};
FaceDetectionRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], FaceDetectionRoutingModule);


/***/ }),

/***/ 5499:
/*!*****************************************************************!*\
  !*** ./src/app/modules/face-detection/face-detection.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceDetectionModule: () => (/* binding */ FaceDetectionModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 5629);
/* harmony import */ var _face_detection_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./face-detection-routing.module */ 1778);
/* harmony import */ var _face_detection_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./face-detection.page */ 2914);





let FaceDetectionModule = class FaceDetectionModule {};
FaceDetectionModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _face_detection_routing_module__WEBPACK_IMPORTED_MODULE_1__.FaceDetectionRoutingModule],
  declarations: [_face_detection_page__WEBPACK_IMPORTED_MODULE_2__.FaceDetectionPage]
})], FaceDetectionModule);


/***/ }),

/***/ 2914:
/*!***************************************************************!*\
  !*** ./src/app/modules/face-detection/face-detection.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceDetectionPage: () => (/* binding */ FaceDetectionPage)
/* harmony export */ });
/* harmony import */ var D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _face_detection_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./face-detection.page.html?ngResource */ 6992);
/* harmony import */ var _face_detection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./face-detection.page.scss?ngResource */ 9140);
/* harmony import */ var _face_detection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_face_detection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _capacitor_mlkit_face_detection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-mlkit/face-detection */ 2892);
/* harmony import */ var _capawesome_capacitor_file_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capawesome/capacitor-file-picker */ 5307);








let FaceDetectionPage = class FaceDetectionPage {
  pinFormatter(value) {
    return `${value / 10.0}`;
  }
  constructor() {
    this.performanceMode = _capacitor_mlkit_face_detection__WEBPACK_IMPORTED_MODULE_3__.PerformanceMode;
    this.contourMode = _capacitor_mlkit_face_detection__WEBPACK_IMPORTED_MODULE_3__.ContourMode;
    this.landmarkMode = _capacitor_mlkit_face_detection__WEBPACK_IMPORTED_MODULE_3__.LandmarkMode;
    this.classificationMode = _capacitor_mlkit_face_detection__WEBPACK_IMPORTED_MODULE_3__.ClassificationMode;
    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      performanceMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(_capacitor_mlkit_face_detection__WEBPACK_IMPORTED_MODULE_3__.PerformanceMode.Fast),
      contourMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(_capacitor_mlkit_face_detection__WEBPACK_IMPORTED_MODULE_3__.ContourMode.None),
      landmarkMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(_capacitor_mlkit_face_detection__WEBPACK_IMPORTED_MODULE_3__.LandmarkMode.None),
      classificationMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(_capacitor_mlkit_face_detection__WEBPACK_IMPORTED_MODULE_3__.ClassificationMode.None),
      minFaceSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(1),
      enableTracking: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(false)
    });
    this.faces = [];
    this.githubUrl = 'https://github.com/capawesome-team/capacitor-mlkit';
  }
  ngOnInit() {
    return;
  }
  openOnGithub() {
    window.open(this.githubUrl, '_blank');
  }
  processImage() {
    var _this = this;
    return (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        files
      } = yield _capawesome_capacitor_file_picker__WEBPACK_IMPORTED_MODULE_4__.FilePicker.pickImages({
        limit: 1
      });
      const path = files[0]?.path;
      if (!path) {
        return;
      }
      const performanceMode = _this.formGroup.get('performanceMode')?.value;
      const contourMode = _this.formGroup.get('contourMode')?.value;
      const landmarkMode = _this.formGroup.get('landmarkMode')?.value;
      const classificationMode = _this.formGroup.get('classificationMode')?.value;
      const minFaceSize = _this.formGroup.get('minFaceSize')?.value;
      const enableTracking = _this.formGroup.get('enableTracking')?.value;
      const {
        faces
      } = yield _capacitor_mlkit_face_detection__WEBPACK_IMPORTED_MODULE_3__.FaceDetection.processImage({
        path,
        performanceMode: performanceMode,
        contourMode: contourMode,
        landmarkMode: landmarkMode,
        classificationMode: classificationMode,
        minFaceSize: minFaceSize / 10.0,
        enableTracking: enableTracking
      });
      _this.faces = faces;
    })();
  }
  getLandmarkType(type) {
    return _capacitor_mlkit_face_detection__WEBPACK_IMPORTED_MODULE_3__.LandmarkType[type];
  }
  getContourType(type) {
    return _capacitor_mlkit_face_detection__WEBPACK_IMPORTED_MODULE_3__.ContourType[type];
  }
  getPoint(point) {
    return `(${point.x}, ${point.y})`;
  }
  getPoints(points) {
    const $ = [];
    for (const point of points) {
      $.push(this.getPoint(point));
    }
    return $.join(', ');
  }
  static {
    this.ctorParameters = () => [];
  }
};
FaceDetectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-face-detection',
  template: _face_detection_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_face_detection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], FaceDetectionPage);


/***/ }),

/***/ 4504:
/*!******************************************************************************!*\
  !*** ./node_modules/@capacitor-mlkit/face-detection/dist/esm/definitions.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassificationMode: () => (/* binding */ ClassificationMode),
/* harmony export */   ContourMode: () => (/* binding */ ContourMode),
/* harmony export */   ContourType: () => (/* binding */ ContourType),
/* harmony export */   LandmarkMode: () => (/* binding */ LandmarkMode),
/* harmony export */   LandmarkType: () => (/* binding */ LandmarkType),
/* harmony export */   PerformanceMode: () => (/* binding */ PerformanceMode)
/* harmony export */ });
/**
 * Defines options to control accuracy / speed trade-offs in performing face detection.
 * In general, choosing the more accurate mode will generally result in longer runtime, whereas choosing the faster mode will generally result in detecting fewer faces.
 *
 * @since 5.1.0
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions.PerformanceMode
 */
var PerformanceMode;
(function (PerformanceMode) {
  /**
   * Indicates a preference for speed in the options that may make an accuracy vs. speed trade-off.
   * This will tend to detect fewer faces and may be less precise in determining values such as position, but will run faster.
   *
   * @since 5.1.0
   * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#PERFORMANCE_MODE_FAST
   */
  PerformanceMode[PerformanceMode["Fast"] = 1] = "Fast";
  /**
   * Indicates a preference for accuracy in the options that may make an accuracy vs. speed trade-off.
   * This will tend to detect more faces and may be more precise in determining values such as position, at the cost of speed.
   *
   * @since 5.1.0
   * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#public-static-final-int-performance_mode_accurate
   */
  PerformanceMode[PerformanceMode["Accurate"] = 2] = "Accurate";
})(PerformanceMode || (PerformanceMode = {}));
/**
 * Defines options to enable face landmarks or not.
 * Processing time increases as the extra face landmark to search.
 *
 * @since 5.1.0
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions.LandmarkMode
 */
var LandmarkMode;
(function (LandmarkMode) {
  /**
   * Does not perform landmark detection.
   *
   * @since 5.1.0
   * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#public-static-final-int-landmark_mode_none
   */
  LandmarkMode[LandmarkMode["None"] = 1] = "None";
  /**
   * Detects FaceLandmark for a given face.
   *
   * @since 5.1.0
   * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#public-static-final-int-landmark_mode_all
   */
  LandmarkMode[LandmarkMode["All"] = 2] = "All";
})(LandmarkMode || (LandmarkMode = {}));
/**
 * Defines options to enable face contours or not.
 * Processing time increases as the number of contours to search.
 *
 * @since 5.1.0
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions.ContourMode
 */
var ContourMode;
(function (ContourMode) {
  /**
   * Does not perform contour detection.
   *
   * @since 5.1.0
   * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#public-static-final-int-contour_mode_none
   */
  ContourMode[ContourMode["None"] = 1] = "None";
  /**
   * Detects FaceContour for a given face.
   * Note that it would return contours for up to 5 faces
   *
   * @since 5.1.0
   * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#public-static-final-int-contour_mode_all
   */
  ContourMode[ContourMode["All"] = 2] = "All";
})(ContourMode || (ContourMode = {}));
/**
 * Defines options for characterizing attributes such as "smiling" and "eyes open".
 * Processing time increases as extra classification to search.
 *
 * @since 5.1.0
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions.ClassificationMode
 */
var ClassificationMode;
(function (ClassificationMode) {
  /**
   * Does not perform classification.
   *
   * @since 5.1.0
   * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#public-static-final-int-classification_mode_none
   */
  ClassificationMode[ClassificationMode["None"] = 1] = "None";
  /**
   * Performs "eyes open" and "smiling" classification.
   *
   * @since 5.1.0
   * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#public-static-final-int-classification_mode_all
   */
  ClassificationMode[ClassificationMode["All"] = 2] = "All";
})(ClassificationMode || (ClassificationMode = {}));
/**
 * Landmark types for face.
 *
 * @since 5.1.0
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceLandmark.LandmarkType
 */
var LandmarkType;
(function (LandmarkType) {
  /**
   * The center of the subject's bottom lip.
   *
   * @since 5.1.0
   */
  LandmarkType[LandmarkType["MouthBottom"] = 0] = "MouthBottom";
  /**
   * The midpoint between the subject's left mouth corner and the outer corner of the subject's left eye.
   * For full profile faces, this becomes the centroid of the nose base, nose tip, left ear lobe and left ear tip.
   *
   * @since 5.1.0
   */
  LandmarkType[LandmarkType["LeftCheek"] = 1] = "LeftCheek";
  /**
   * The midpoint of the subject's left ear tip and left ear lobe.
   *
   * @since 5.1.0
   */
  LandmarkType[LandmarkType["LeftEar"] = 3] = "LeftEar";
  /**
   * The center of the subject's left eye cavity.
   *
   * @since 5.1.0
   */
  LandmarkType[LandmarkType["LeftEye"] = 4] = "LeftEye";
  /**
   * The subject's left mouth corner where the lips meet.
   *
   * @since 5.1.0
   */
  LandmarkType[LandmarkType["MouthLeft"] = 5] = "MouthLeft";
  /**
   * The midpoint between the subject's nostrils where the nose meets the face.
   *
   * @since 5.1.0
   */
  LandmarkType[LandmarkType["NoseBase"] = 6] = "NoseBase";
  /**
   * The midpoint between the subject's right mouth corner and the outer corner of the subject's right eye.
   * For full profile faces, this becomes the centroid of the nose base, nose tip, right ear lobe and right ear tip.
   *
   * @since 5.1.0
   */
  LandmarkType[LandmarkType["RightCheek"] = 7] = "RightCheek";
  /**
   * The midpoint of the subject's right ear tip and right ear lobe.
   *
   * @since 5.1.0
   */
  LandmarkType[LandmarkType["RightEar"] = 9] = "RightEar";
  /**
   * The center of the subject's right eye cavity.
   *
   * @since 5.1.0
   */
  LandmarkType[LandmarkType["RightEye"] = 10] = "RightEye";
  /**
   * The subject's right mouth corner where the lips meet.
   *
   * @since 5.1.0
   */
  LandmarkType[LandmarkType["MouthRight"] = 11] = "MouthRight";
})(LandmarkType || (LandmarkType = {}));
/**
 * Contour types for face.
 *
 * @since 5.1.0
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceContour.ContourType
 */
var ContourType;
(function (ContourType) {
  /**
   * The outline of the subject's face.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["Face"] = 1] = "Face";
  /**
   * The top outline of the subject's left eyebrow.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["LeftEyebrowTop"] = 2] = "LeftEyebrowTop";
  /**
   * The bottom outline of the subject's left eyebrow.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["LeftEyebrowBottom"] = 3] = "LeftEyebrowBottom";
  /**
   * The top outline of the subject's right eyebrow.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["RightEyebrowTop"] = 4] = "RightEyebrowTop";
  /**
   * The bottom outline of the subject's right eyebrow.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["RightEyebrowBottom"] = 5] = "RightEyebrowBottom";
  /**
   * The outline of the subject's left eye cavity.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["LeftEye"] = 6] = "LeftEye";
  /**
   * The outline of the subject's right eye cavity.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["RightEye"] = 7] = "RightEye";
  /**
   * The top outline of the subject's upper lip.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["UpperLipTop"] = 8] = "UpperLipTop";
  /**
   * The bottom outline of the subject's upper lip.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["UpperLipBottom"] = 9] = "UpperLipBottom";
  /**
   * The top outline of the subject's lower lip.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["LowerLipTop"] = 10] = "LowerLipTop";
  /**
   * The bottom outline of the subject's lower lip.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["LowerLipBottom"] = 11] = "LowerLipBottom";
  /**
   * The outline of the subject's nose bridge.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["NoseBridge"] = 12] = "NoseBridge";
  /**
   * The outline of the subject's nose bridge.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["NoseBottom"] = 13] = "NoseBottom";
  /**
   * The center of the left cheek.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["LeftCheek"] = 14] = "LeftCheek";
  /**
   * The center of the right cheek.
   *
   * @since 5.1.0
   */
  ContourType[ContourType["RightCheek"] = 15] = "RightCheek";
})(ContourType || (ContourType = {}));

/***/ }),

/***/ 2892:
/*!************************************************************************!*\
  !*** ./node_modules/@capacitor-mlkit/face-detection/dist/esm/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassificationMode: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.ClassificationMode),
/* harmony export */   ContourMode: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.ContourMode),
/* harmony export */   ContourType: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.ContourType),
/* harmony export */   FaceDetection: () => (/* binding */ FaceDetection),
/* harmony export */   LandmarkMode: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.LandmarkMode),
/* harmony export */   LandmarkType: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.LandmarkType),
/* harmony export */   PerformanceMode: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.PerformanceMode)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4504);

const FaceDetection = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('FaceDetection', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-mlkit_face-detection_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 9978)).then(m => new m.FaceDetectionWeb())
});



/***/ }),

/***/ 9140:
/*!****************************************************************************!*\
  !*** ./src/app/modules/face-detection/face-detection.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-list ion-list-header {
  height: 0;
}

ion-list ion-card {
  margin-left: 0;
  margin-top: 0;
  margin-right: 6px;
}`, "",{"version":3,"sources":["webpack://./src/app/modules/face-detection/face-detection.page.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;AACF;;AACA;EACE,cAAA;EACA,aAAA;EACA,iBAAA;AAEF","sourcesContent":["ion-list ion-list-header {\r\n  height: 0;\r\n}\r\nion-list ion-card {\r\n  margin-left: 0;\r\n  margin-top: 0;\r\n  margin-right: 6px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6992:
/*!****************************************************************************!*\
  !*** ./src/app/modules/face-detection/face-detection.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>ML Kit Face Detection</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>About</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      ⚡️ Capacitor plugin for ML Kit Face Detection.\r\n    </ion-card-content>\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col>\r\n        <ion-button\r\n          fill=\"clear\"\r\n          (click)=\"openOnGithub()\"\r\n          class=\"ion-float-right\"\r\n          >GitHub</ion-button\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Face Detection</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <form [formGroup]=\"formGroup\">\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Performance Mode</ion-label>\r\n          <ion-select\r\n            placeholder=\"PerformanceMode\"\r\n            formControlName=\"performanceMode\"\r\n          >\r\n            <ion-select-option [value]=\"performanceMode.Fast\"\r\n              >Fast</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"performanceMode.Accurate\"\r\n              >Accurate</ion-select-option\r\n            >\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Contour Mode</ion-label>\r\n          <ion-select placeholder=\"ContourMode\" formControlName=\"contourMode\">\r\n            <ion-select-option [value]=\"contourMode.None\"\r\n              >None</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"contourMode.All\">All</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Landmark Mode</ion-label>\r\n          <ion-select placeholder=\"LandmarkMode\" formControlName=\"landmarkMode\">\r\n            <ion-select-option [value]=\"landmarkMode.None\"\r\n              >None</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"landmarkMode.All\"\r\n              >All</ion-select-option\r\n            >\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Classification Mode</ion-label>\r\n          <ion-select\r\n            placeholder=\"ClassificationMode\"\r\n            formControlName=\"classificationMode\"\r\n          >\r\n            <ion-select-option [value]=\"classificationMode.None\"\r\n              >None</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"classificationMode.All\"\r\n              >All</ion-select-option\r\n            >\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Minimum Face Size</ion-label>\r\n          <ion-range\r\n            aria-label=\"Minimum Face Size\"\r\n            [ticks]=\"true\"\r\n            [snaps]=\"true\"\r\n            [min]=\"0\"\r\n            [max]=\"10\"\r\n            [pin]=\"true\"\r\n            [pinFormatter]=\"pinFormatter\"\r\n            formControlName=\"minFaceSize\"\r\n          ></ion-range>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Face Tracking</ion-label>\r\n          <ion-checkbox formControlName=\"enableTracking\"></ion-checkbox>\r\n        </ion-item>\r\n        <ion-button (click)=\"processImage()\">Process Image</ion-button>\r\n      </form>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  @for (face of faces; track face; let i = $index) {\r\n  <ion-list lines=\"none\">\r\n    <ion-list-header>\r\n      <ion-label>Face #{{ i+1 }}</ion-label>\r\n      @if (face.trackingId !== undefined) {\r\n      <ion-label position=\"fixed\">ID #{{ face.trackingId }}</ion-label>\r\n      }\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Bounds</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Top</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"face.bounds.top\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Left</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"face.bounds.left\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Bottom</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"face.bounds.bottom\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Right</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"face.bounds.right\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Face Orientation</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Euler X</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"face.headEulerAngleX\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Euler Y</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"face.headEulerAngleY\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Euler Z</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"face.headEulerAngleZ\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-item>\r\n    @if (face.landmarks) {\r\n    <ion-item>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Landmarks</ion-card-title>\r\n          <ion-card-subtitle\r\n            >A landmark is a point of interest within a face</ion-card-subtitle\r\n          >\r\n        </ion-card-header>\r\n        @for (landmark of face.landmarks; track landmark) {\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\"\r\n              >{{ getLandmarkType(landmark.type) }}</ion-label\r\n            >\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"getPoint(landmark.position)\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card-content>\r\n        }\r\n      </ion-card>\r\n    </ion-item>\r\n    } @if (face.contours) {\r\n    <ion-item>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Contours</ion-card-title>\r\n          <ion-card-subtitle\r\n            >A contour is a set of points that represent the shape of a facial\r\n            feature</ion-card-subtitle\r\n          >\r\n        </ion-card-header>\r\n        @for (contour of face.contours; track contour) {\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\"\r\n              >{{ getContourType(contour.type) }}</ion-label\r\n            >\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"getPoints(contour.points)\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card-content>\r\n        }\r\n      </ion-card>\r\n    </ion-item>\r\n    } @if (face.smilingProbability || face.leftEyeOpenProbability ||\r\n    face.rightEyeOpenProbability) {\r\n    <ion-item>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Classification</ion-card-title>\r\n          <ion-card-subtitle>Feature probabilities</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Smiling</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"face.smilingProbability\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Left eye open</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"face.leftEyeOpenProbability\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Right eye open</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"face.rightEyeOpenProbability\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-item>\r\n    }\r\n  </ion-list>\r\n  }\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_face-detection_face-detection_module_ts.js.map