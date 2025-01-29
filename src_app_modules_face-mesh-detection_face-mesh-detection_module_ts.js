(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_face-mesh-detection_face-mesh-detection_module_ts"],{

/***/ 7734:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/face-mesh-detection/face-mesh-detection-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceMeshDetectionRoutingModule: () => (/* binding */ FaceMeshDetectionRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _face_mesh_detection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./face-mesh-detection.page */ 7225);




const routes = [{
  path: '',
  component: _face_mesh_detection_page__WEBPACK_IMPORTED_MODULE_0__.FaceMeshDetectionPage
}];
let FaceMeshDetectionRoutingModule = class FaceMeshDetectionRoutingModule {};
FaceMeshDetectionRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], FaceMeshDetectionRoutingModule);


/***/ }),

/***/ 7998:
/*!***************************************************************************!*\
  !*** ./src/app/modules/face-mesh-detection/face-mesh-detection.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceMeshDetectionModule: () => (/* binding */ FaceMeshDetectionModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 5629);
/* harmony import */ var _face_mesh_detection_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./face-mesh-detection-routing.module */ 7734);
/* harmony import */ var _face_mesh_detection_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./face-mesh-detection.page */ 7225);
/* harmony import */ var _face_mesh_detection_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./face-mesh-detection.pipe */ 1101);






let FaceMeshDetectionModule = class FaceMeshDetectionModule {};
FaceMeshDetectionModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _face_mesh_detection_routing_module__WEBPACK_IMPORTED_MODULE_1__.FaceMeshDetectionRoutingModule],
  declarations: [_face_mesh_detection_page__WEBPACK_IMPORTED_MODULE_2__.FaceMeshDetectionPage, _face_mesh_detection_pipe__WEBPACK_IMPORTED_MODULE_3__.KeysPipe, _face_mesh_detection_pipe__WEBPACK_IMPORTED_MODULE_3__.ContourTitlePipe, _face_mesh_detection_pipe__WEBPACK_IMPORTED_MODULE_3__.ContourDescriptionPipe, _face_mesh_detection_pipe__WEBPACK_IMPORTED_MODULE_3__.ContourPipe]
})], FaceMeshDetectionModule);


/***/ }),

/***/ 7225:
/*!*************************************************************************!*\
  !*** ./src/app/modules/face-mesh-detection/face-mesh-detection.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceMeshDetectionPage: () => (/* binding */ FaceMeshDetectionPage)
/* harmony export */ });
/* harmony import */ var D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _face_mesh_detection_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./face-mesh-detection.page.html?ngResource */ 472);
/* harmony import */ var _face_mesh_detection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./face-mesh-detection.page.scss?ngResource */ 1923);
/* harmony import */ var _face_mesh_detection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_face_mesh_detection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _capacitor_mlkit_face_mesh_detection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-mlkit/face-mesh-detection */ 3468);
/* harmony import */ var _capawesome_capacitor_file_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capawesome/capacitor-file-picker */ 5307);








let FaceMeshDetectionPage = class FaceMeshDetectionPage {
  constructor() {
    this.useCase = _capacitor_mlkit_face_mesh_detection__WEBPACK_IMPORTED_MODULE_3__.UseCase;
    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      useCase: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(_capacitor_mlkit_face_mesh_detection__WEBPACK_IMPORTED_MODULE_3__.UseCase.FaceMesh)
    });
    this.faceMeshs = [];
    this.githubUrl = 'https://github.com/capawesome-team/capacitor-mlkit';
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
      const useCase = _this.formGroup.get('useCase')?.value;
      const {
        faceMeshs
      } = yield _capacitor_mlkit_face_mesh_detection__WEBPACK_IMPORTED_MODULE_3__.FaceMeshDetection.processImage({
        path,
        useCase: useCase
      });
      _this.faceMeshs = faceMeshs;
    })();
  }
  getPoint(point) {
    return `(${point.x}, ${point.y}, ${point.z})`;
  }
  getPoints(points) {
    const results = [];
    for (const point of points) {
      results.push(this.getPoint(point));
    }
    return results.join(', ');
  }
  static {
    this.ctorParameters = () => [];
  }
};
FaceMeshDetectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-face-mesh-detection',
  template: _face_mesh_detection_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_face_mesh_detection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], FaceMeshDetectionPage);


/***/ }),

/***/ 1101:
/*!*************************************************************************!*\
  !*** ./src/app/modules/face-mesh-detection/face-mesh-detection.pipe.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContourDescriptionPipe: () => (/* binding */ ContourDescriptionPipe),
/* harmony export */   ContourPipe: () => (/* binding */ ContourPipe),
/* harmony export */   ContourTitlePipe: () => (/* binding */ ContourTitlePipe),
/* harmony export */   KeysPipe: () => (/* binding */ KeysPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


const contourType = {
  faceOval: {
    title: 'Face Oval',
    description: "The outline of the subject's face."
  },
  leftEye: {
    title: 'Left Eye',
    description: "The outline of the subject's left eye cavity."
  },
  leftEyebrowBottom: {
    title: 'Left Eyebrow Bottom',
    description: "The bottom outline of the subject's left eyebrow."
  },
  leftEyebrowTop: {
    title: 'Left Eyebrow Top',
    description: "The top outline of the subject's left eyebrow."
  },
  lowerLipBottom: {
    title: 'Lower Lip Bottom',
    description: "The bottom outline of the subject's lower lip."
  },
  lowerLipTop: {
    title: 'Lower Lip Top',
    description: "The top outline of the subject's lower lip."
  },
  noseBridge: {
    title: 'Nose Bridge',
    description: "The outline of the subject's nose bridge."
  },
  rightEye: {
    title: 'Right Eye',
    description: "The outline of the subject's right eye cavity."
  },
  rightEyebrowBottom: {
    title: 'Right Eyebrow Bottom',
    description: "The bottom outline of the subject's right eyebrow."
  },
  rightEyebrowTop: {
    title: 'Right Eyebrow Top',
    description: "The top outline of the subject's right eyebrow."
  },
  upperLipBottom: {
    title: 'Upper Lip Bottom',
    description: "The bottom outline of the subject's upper lip."
  },
  upperLipTop: {
    title: 'Upper Lip Top',
    description: "The top outline of the subject's upper lip."
  }
};
let KeysPipe = class KeysPipe {
  transform(value) {
    return Object.keys(value);
  }
};
KeysPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'keys',
  pure: false
})], KeysPipe);

let ContourTitlePipe = class ContourTitlePipe {
  transform(contour) {
    return contourType[contour].title;
  }
};
ContourTitlePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'contourTitle',
  pure: false
})], ContourTitlePipe);

let ContourDescriptionPipe = class ContourDescriptionPipe {
  transform(contour) {
    return contourType[contour].description;
  }
};
ContourDescriptionPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'contourDescription',
  pure: false
})], ContourDescriptionPipe);

let ContourPipe = class ContourPipe {
  transform(contours, contour) {
    return contours[contour];
  }
};
ContourPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'contour',
  pure: false
})], ContourPipe);


/***/ }),

/***/ 3897:
/*!***********************************************************************************!*\
  !*** ./node_modules/@capacitor-mlkit/face-mesh-detection/dist/esm/definitions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UseCase: () => (/* binding */ UseCase)
/* harmony export */ });
/**
 * Defines options for main use case.
 *
 * @since 5.3.0
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/facemesh/FaceMeshDetectorOptions.UseCase
 */
var UseCase;
(function (UseCase) {
  /**
   * Return bounding box for detected face.
   *
   * @since 5.3.0
   * @see https://developers.google.com/android/reference/com/google/mlkit/vision/facemesh/FaceMeshDetectorOptions#public-static-final-int-bounding_box_only
   */
  UseCase[UseCase["BoundingBoxOnly"] = 0] = "BoundingBoxOnly";
  /**
   * Return face mesh info for detected face.
   * It detects at most 2 faces in this use case.
   *
   * @since 5.3.0
   * @see https://developers.google.com/android/reference/com/google/mlkit/vision/facemesh/FaceMeshDetectorOptions#public-static-final-int-face_mesh
   */
  UseCase[UseCase["FaceMesh"] = 1] = "FaceMesh";
})(UseCase || (UseCase = {}));

/***/ }),

/***/ 3468:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor-mlkit/face-mesh-detection/dist/esm/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceMeshDetection: () => (/* binding */ FaceMeshDetection),
/* harmony export */   UseCase: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.UseCase)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 3897);

const FaceMeshDetection = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('FaceMeshDetection', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-mlkit_face-mesh-detection_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1010)).then(m => new m.FaceMeshDetectionWeb())
});



/***/ }),

/***/ 1923:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/face-mesh-detection/face-mesh-detection.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-list ion-list-header {
  height: 0;
}

ion-list ion-card#face-mesh-points {
  width: 100%;
}

ion-list ion-card#face-mesh-points ion-item {
  --padding-start: 0px;
  --inner-padding-end: 0px;
  --min-height: auto;
}

ion-list ion-card#face-mesh-points ion-item ion-label {
  width: 40px;
  min-width: auto;
  flex: revert;
  margin: 0;
  margin-right: 10px;
  text-align: right;
}

ion-list ion-card#face-mesh-points ion-card-content {
  padding-top: 0;
  padding-bottom: 0;
}

ion-list ion-card#face-mesh-points ion-item ion-input {
  --padding-top: 0;
  --padding-bottom: 0;
  text-overflow: ellipsis;
}

ion-list ion-card#contours {
  width: 100%;
}

ion-list ion-card#contours ion-card-content {
  padding-left: 0;
  padding-right: 0;
}

ion-list ion-card#contours ion-card-content ion-card {
  margin: 0;
}`, "",{"version":3,"sources":["webpack://./src/app/modules/face-mesh-detection/face-mesh-detection.page.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;AACF;;AACA;EACE,WAAA;AAEF;;AAAA;EACE,oBAAA;EACA,wBAAA;EACA,kBAAA;AAGF;;AADA;EACE,WAAA;EACA,eAAA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;EACA,iBAAA;AAIF;;AAFA;EACE,cAAA;EACA,iBAAA;AAKF;;AAHA;EACE,gBAAA;EACA,mBAAA;EACA,uBAAA;AAMF;;AAJA;EACE,WAAA;AAOF;;AALA;EACE,eAAA;EACA,gBAAA;AAQF;;AANA;EACE,SAAA;AASF","sourcesContent":["ion-list ion-list-header {\r\n  height: 0;\r\n}\r\nion-list ion-card#face-mesh-points {\r\n  width: 100%;\r\n}\r\nion-list ion-card#face-mesh-points ion-item {\r\n  --padding-start: 0px;\r\n  --inner-padding-end: 0px;\r\n  --min-height: auto;\r\n}\r\nion-list ion-card#face-mesh-points ion-item ion-label {\r\n  width: 40px;\r\n  min-width: auto;\r\n  flex: revert;\r\n  margin: 0;\r\n  margin-right: 10px;\r\n  text-align: right;\r\n}\r\nion-list ion-card#face-mesh-points ion-card-content {\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\r\nion-list ion-card#face-mesh-points ion-item ion-input {\r\n  --padding-top: 0;\r\n  --padding-bottom: 0;\r\n  text-overflow: ellipsis;\r\n}\r\nion-list ion-card#contours {\r\n  width: 100%;\r\n}\r\nion-list ion-card#contours ion-card-content {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\nion-list ion-card#contours ion-card-content ion-card {\r\n  margin: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 472:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/face-mesh-detection/face-mesh-detection.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>ML Kit Face Mesh Detection</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>About</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      ⚡️ Capacitor plugin for ML Kit Face Mesh Detection.\r\n    </ion-card-content>\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col>\r\n        <ion-button\r\n          fill=\"clear\"\r\n          (click)=\"openOnGithub()\"\r\n          class=\"ion-float-right\"\r\n          >GitHub</ion-button\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Face Mesh Detection</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <form [formGroup]=\"formGroup\">\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Use Case</ion-label>\r\n          <ion-select placeholder=\"UseCase\" formControlName=\"useCase\">\r\n            <ion-select-option [value]=\"useCase.BoundingBoxOnly\"\r\n              >Bounding Box Only</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"useCase.FaceMesh\"\r\n              >Face Mesh</ion-select-option\r\n            >\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-button (click)=\"processImage()\">Process Image</ion-button>\r\n      </form>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  @for (faceMesh of faceMeshs; track faceMesh; let i = $index) {\r\n  <ion-list lines=\"none\">\r\n    <ion-list-header>\r\n      <ion-label>Face Mesh #{{ i+1 }}</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Bounds</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Top</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"faceMesh.bounds.top\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Left</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"faceMesh.bounds.left\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Bottom</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"faceMesh.bounds.bottom\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Right</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"faceMesh.bounds.right\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-item>\r\n    @if (faceMesh.contours) {\r\n    <ion-item>\r\n      <ion-card id=\"contours\">\r\n        <ion-card-header>\r\n          <ion-card-title>Contours</ion-card-title>\r\n          <ion-card-subtitle>\r\n            Represents a list of face mesh points for each specific contour\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          @for (contourType of faceMesh.contours | keys; track contourType) {\r\n          <ion-item>\r\n            <ion-card id=\"face-mesh-points\">\r\n              <ion-card-header>\r\n                <ion-card-title\r\n                  >{{ contourType | contourTitle }}</ion-card-title\r\n                >\r\n                <ion-card-subtitle>\r\n                  {{ contourType | contourDescription }}\r\n                </ion-card-subtitle>\r\n              </ion-card-header>\r\n              @for (faceMeshPoint of faceMesh.contours | contour:contourType;\r\n              track faceMeshPoint) {\r\n              <ion-card-content>\r\n                <ion-item>\r\n                  <ion-label position=\"fixed\"\r\n                    >#{{ faceMeshPoint.index }}</ion-label\r\n                  >\r\n                  <ion-input\r\n                    type=\"text\"\r\n                    readonly\r\n                    [value]=\"getPoint(faceMeshPoint.point)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-card-content>\r\n              }\r\n            </ion-card>\r\n          </ion-item>\r\n          }\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-item>\r\n    } @if (faceMesh.faceMeshPoints) {\r\n    <ion-item>\r\n      <ion-card id=\"face-mesh-points\">\r\n        <ion-card-header>\r\n          <ion-card-title>Face Mesh Points</ion-card-title>\r\n          <ion-card-subtitle>\r\n            Represents a 3D point in face mesh\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n        @for (faceMeshPoint of faceMesh.faceMeshPoints; track faceMeshPoint) {\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">#{{ faceMeshPoint.index }}</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              readonly\r\n              [value]=\"getPoint(faceMeshPoint.point)\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card-content>\r\n        }\r\n      </ion-card>\r\n    </ion-item>\r\n    }\r\n  </ion-list>\r\n  }\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_face-mesh-detection_face-mesh-detection_module_ts.js.map