(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_barcode-scanning_barcode-scanning_module_ts"],{

/***/ 8795:
/*!******************************************************************************!*\
  !*** ./src/app/modules/barcode-scanning/barcode-scanning-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarcodeScanningModalComponent: () => (/* binding */ BarcodeScanningModalComponent)
/* harmony export */ });
/* harmony import */ var D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_src_app_modules_barcode_scanning_barcode_scanning_modal_component_ts_css_ngResource_D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGlvbi1jb250ZW50IHsKICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogICAgICB9CgogICAgICAuc3F1YXJlIHsKICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgbGVmdDogNTAlOwogICAgICAgIHRvcDogNTAlOwogICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7CiAgICAgICAgd2lkdGg6IDIwMHB4OwogICAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7CiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNDAwMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTsKICAgICAgfQoKICAgICAgLnpvb20tcmF0aW8td3JhcHBlciB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIGxlZnQ6IDUwJTsKICAgICAgICBib3R0b206IDE2cHg7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOwogICAgICAgIHdpZHRoOiA1MCU7CiAgICAgIH0KICAgIA_3D_3D_D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_src_app_modules_barcode_scanning_barcode_scanning_modal_component_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app/modules/barcode-scanning/barcode-scanning-modal.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIGlvbi1jb250ZW50IHsKICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogICAgICB9CgogICAgICAuc3F1YXJlIHsKICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgbGVmdDogNTAlOwogICAgICAgIHRvcDogNTAlOwogICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7CiAgICAgICAgd2lkdGg6IDIwMHB4OwogICAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7CiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNDAwMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTsKICAgICAgfQoKICAgICAgLnpvb20tcmF0aW8td3JhcHBlciB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIGxlZnQ6IDUwJTsKICAgICAgICBib3R0b206IDE2cHg7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOwogICAgICAgIHdpZHRoOiA1MCU7CiAgICAgIH0KICAgIA%3D%3D!./src/app/modules/barcode-scanning/barcode-scanning-modal.component.ts */ 6504);
/* harmony import */ var D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_src_app_modules_barcode_scanning_barcode_scanning_modal_component_ts_css_ngResource_D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGlvbi1jb250ZW50IHsKICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogICAgICB9CgogICAgICAuc3F1YXJlIHsKICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgbGVmdDogNTAlOwogICAgICAgIHRvcDogNTAlOwogICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7CiAgICAgICAgd2lkdGg6IDIwMHB4OwogICAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7CiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNDAwMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTsKICAgICAgfQoKICAgICAgLnpvb20tcmF0aW8td3JhcHBlciB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIGxlZnQ6IDUwJTsKICAgICAgICBib3R0b206IDE2cHg7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOwogICAgICAgIHdpZHRoOiA1MCU7CiAgICAgIH0KICAgIA_3D_3D_D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_src_app_modules_barcode_scanning_barcode_scanning_modal_component_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_src_app_modules_barcode_scanning_barcode_scanning_modal_component_ts_css_ngResource_D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGlvbi1jb250ZW50IHsKICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogICAgICB9CgogICAgICAuc3F1YXJlIHsKICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgbGVmdDogNTAlOwogICAgICAgIHRvcDogNTAlOwogICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7CiAgICAgICAgd2lkdGg6IDIwMHB4OwogICAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7CiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNDAwMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTsKICAgICAgfQoKICAgICAgLnpvb20tcmF0aW8td3JhcHBlciB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIGxlZnQ6IDUwJTsKICAgICAgICBib3R0b206IDE2cHg7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOwogICAgICAgIHdpZHRoOiA1MCU7CiAgICAgIH0KICAgIA_3D_3D_D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_src_app_modules_barcode_scanning_barcode_scanning_modal_component_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ 9076);
/* harmony import */ var _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-mlkit/barcode-scanning */ 9641);
/* harmony import */ var _capawesome_capacitor_torch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capawesome/capacitor-torch */ 3864);







let BarcodeScanningModalComponent = class BarcodeScanningModalComponent {
  constructor(dialogService, ngZone) {
    this.dialogService = dialogService;
    this.ngZone = ngZone;
    this.formats = [];
    this.lensFacing = _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_3__.LensFacing.Back;
    this.isTorchAvailable = false;
  }
  ngOnInit() {
    _capawesome_capacitor_torch__WEBPACK_IMPORTED_MODULE_4__.Torch.isAvailable().then(result => {
      this.isTorchAvailable = result.available;
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.startScan();
    }, 500);
  }
  ngOnDestroy() {
    this.stopScan();
  }
  setZoomRatio(event) {
    if (!event.detail.value) {
      return;
    }
    _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.setZoomRatio({
      zoomRatio: parseInt(event.detail.value, 10)
    });
  }
  closeModal(barcode) {
    var _this = this;
    return (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.dialogService.dismissModal({
        barcode: barcode
      });
    })();
  }
  toggleTorch() {
    return (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capawesome_capacitor_torch__WEBPACK_IMPORTED_MODULE_4__.Torch.toggle();
    })();
  }
  startScan() {
    var _this2 = this;
    return (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Hide everything behind the modal (see `src/theme/variables.scss`)
      document.querySelector('body')?.classList.add('barcode-scanning-active');
      const options = {
        formats: _this2.formats,
        lensFacing: _this2.lensFacing
      };
      const squareElementBoundingClientRect = _this2.squareElement?.nativeElement.getBoundingClientRect();
      const scaledRect = squareElementBoundingClientRect ? {
        left: squareElementBoundingClientRect.left * window.devicePixelRatio,
        right: squareElementBoundingClientRect.right * window.devicePixelRatio,
        top: squareElementBoundingClientRect.top * window.devicePixelRatio,
        bottom: squareElementBoundingClientRect.bottom * window.devicePixelRatio,
        width: squareElementBoundingClientRect.width * window.devicePixelRatio,
        height: squareElementBoundingClientRect.height * window.devicePixelRatio
      } : undefined;
      const detectionCornerPoints = scaledRect ? [[scaledRect.left, scaledRect.top], [scaledRect.left + scaledRect.width, scaledRect.top], [scaledRect.left + scaledRect.width, scaledRect.top + scaledRect.height], [scaledRect.left, scaledRect.top + scaledRect.height]] : undefined;
      const listener = yield _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.addListener('barcodesScanned', /*#__PURE__*/function () {
        var _ref = (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
          _this2.ngZone.run(() => {
            const firstBarcode = event.barcodes[0];
            if (!firstBarcode) {
              return;
            }
            const cornerPoints = firstBarcode.cornerPoints;
            if (detectionCornerPoints && cornerPoints) {
              if (detectionCornerPoints[0][0] > cornerPoints[0][0] || detectionCornerPoints[0][1] > cornerPoints[0][1] || detectionCornerPoints[1][0] < cornerPoints[1][0] || detectionCornerPoints[1][1] > cornerPoints[1][1] || detectionCornerPoints[2][0] < cornerPoints[2][0] || detectionCornerPoints[2][1] < cornerPoints[2][1] || detectionCornerPoints[3][0] > cornerPoints[3][0] || detectionCornerPoints[3][1] < cornerPoints[3][1]) {
                return;
              }
            }
            listener.remove();
            _this2.closeModal(firstBarcode);
          });
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      yield _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.startScan(options);
      void _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.getMinZoomRatio().then(result => {
        _this2.minZoomRatio = result.zoomRatio;
      });
      void _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.getMaxZoomRatio().then(result => {
        _this2.maxZoomRatio = result.zoomRatio;
      });
    })();
  }
  stopScan() {
    return (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Show everything behind the modal again
      document.querySelector('body')?.classList.remove('barcode-scanning-active');
      yield _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.stopScan();
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _app_core__WEBPACK_IMPORTED_MODULE_2__.DialogService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone
    }];
  }
  static {
    this.propDecorators = {
      formats: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
      }],
      lensFacing: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
      }],
      squareElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
        args: ['square']
      }]
    };
  }
};
BarcodeScanningModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-barcode-scanning',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Scanning</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="closeModal()">
            <ion-icon name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div #square class="square"></div>
      <div class="zoom-ratio-wrapper">
        <ion-range
          [min]="minZoomRatio"
          [max]="maxZoomRatio"
          [disabled]="minZoomRatio === undefined || maxZoomRatio === undefined"
          (ionChange)="setZoomRatio($any($event))"
        ></ion-range>
      </div>
      @if (isTorchAvailable) {
        <ion-fab slot="fixed" horizontal="end" vertical="bottom">
          <ion-fab-button (click)="toggleTorch()">
            <ion-icon name="flashlight"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      }
    </ion-content>
  `,
  styles: [(D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_src_app_modules_barcode_scanning_barcode_scanning_modal_component_ts_css_ngResource_D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGlvbi1jb250ZW50IHsKICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogICAgICB9CgogICAgICAuc3F1YXJlIHsKICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgbGVmdDogNTAlOwogICAgICAgIHRvcDogNTAlOwogICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7CiAgICAgICAgd2lkdGg6IDIwMHB4OwogICAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7CiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNDAwMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTsKICAgICAgfQoKICAgICAgLnpvb20tcmF0aW8td3JhcHBlciB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIGxlZnQ6IDUwJTsKICAgICAgICBib3R0b206IDE2cHg7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOwogICAgICAgIHdpZHRoOiA1MCU7CiAgICAgIH0KICAgIA_3D_3D_D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_src_app_modules_barcode_scanning_barcode_scanning_modal_component_ts__WEBPACK_IMPORTED_MODULE_1___default())]
})], BarcodeScanningModalComponent);


/***/ }),

/***/ 483:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/barcode-scanning/barcode-scanning-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarcodeScanningRoutingModule: () => (/* binding */ BarcodeScanningRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _barcode_scanning_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barcode-scanning.page */ 9034);




const routes = [{
  path: '',
  component: _barcode_scanning_page__WEBPACK_IMPORTED_MODULE_0__.BarcodeScanningPage
}];
let BarcodeScanningRoutingModule = class BarcodeScanningRoutingModule {};
BarcodeScanningRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BarcodeScanningRoutingModule);


/***/ }),

/***/ 8730:
/*!*********************************************************************!*\
  !*** ./src/app/modules/barcode-scanning/barcode-scanning.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarcodeScanningModule: () => (/* binding */ BarcodeScanningModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _barcode_scanning_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barcode-scanning-routing.module */ 483);
/* harmony import */ var _tests_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tests/modules */ 703);
/* harmony import */ var _barcode_scanning_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./barcode-scanning-modal.component */ 8795);
/* harmony import */ var _barcode_scanning_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./barcode-scanning.page */ 9034);






let BarcodeScanningModule = class BarcodeScanningModule {};
BarcodeScanningModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_tests_modules__WEBPACK_IMPORTED_MODULE_1__.SharedTestingModule, _barcode_scanning_routing_module__WEBPACK_IMPORTED_MODULE_0__.BarcodeScanningRoutingModule],
  declarations: [_barcode_scanning_page__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanningPage, _barcode_scanning_modal_component__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanningModalComponent]
})], BarcodeScanningModule);


/***/ }),

/***/ 9034:
/*!*******************************************************************!*\
  !*** ./src/app/modules/barcode-scanning/barcode-scanning.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarcodeScanningPage: () => (/* binding */ BarcodeScanningPage)
/* harmony export */ });
/* harmony import */ var D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _barcode_scanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barcode-scanning.page.html?ngResource */ 910);
/* harmony import */ var _barcode_scanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./barcode-scanning.page.scss?ngResource */ 323);
/* harmony import */ var _barcode_scanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_barcode_scanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ 9076);
/* harmony import */ var _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor-mlkit/barcode-scanning */ 9641);
/* harmony import */ var _capawesome_capacitor_file_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capawesome/capacitor-file-picker */ 5307);
/* harmony import */ var _barcode_scanning_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barcode-scanning-modal.component */ 8795);










let BarcodeScanningPage = class BarcodeScanningPage {
  constructor(dialogService, ngZone) {
    this.dialogService = dialogService;
    this.ngZone = ngZone;
    this.barcodeFormat = _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_4__.BarcodeFormat;
    this.lensFacing = _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_4__.LensFacing;
    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
      formats: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl([]),
      lensFacing: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(_capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_4__.LensFacing.Back),
      googleBarcodeScannerModuleInstallState: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(0),
      googleBarcodeScannerModuleInstallProgress: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(0)
    });
    this.barcodes = [];
    this.isSupported = false;
    this.isPermissionGranted = false;
    this.GH_URL = 'https://github.com/capawesome-team/capacitor-barcode-scanning';
  }
  ngOnInit() {
    _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner.isSupported().then(result => {
      this.isSupported = result.supported;
    });
    _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner.checkPermissions().then(result => {
      this.isPermissionGranted = result.camera === 'granted';
    });
    _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner.removeAllListeners().then(() => {
      _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner.addListener('googleBarcodeScannerModuleInstallProgress', event => {
        this.ngZone.run(() => {
          console.log('googleBarcodeScannerModuleInstallProgress', event);
          const {
            state,
            progress
          } = event;
          this.formGroup.patchValue({
            googleBarcodeScannerModuleInstallState: state,
            googleBarcodeScannerModuleInstallProgress: progress
          });
        });
      });
    });
  }
  startScan() {
    var _this = this;
    return (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const formats = _this.formGroup.get('formats')?.value || [];
      const lensFacing = _this.formGroup.get('lensFacing')?.value || _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_4__.LensFacing.Back;
      const element = yield _this.dialogService.showModal({
        component: _barcode_scanning_modal_component__WEBPACK_IMPORTED_MODULE_6__.BarcodeScanningModalComponent,
        // Set `visibility` to `visible` to show the modal (see `src/theme/variables.scss`)
        cssClass: 'barcode-scanning-modal',
        showBackdrop: false,
        componentProps: {
          formats: formats,
          lensFacing: lensFacing
        }
      });
      element.onDidDismiss().then(result => {
        const barcode = result.data?.barcode;
        if (barcode) {
          _this.barcodes = [barcode];
        }
      });
    })();
  }
  readBarcodeFromImage() {
    var _this2 = this;
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
      const formats = _this2.formGroup.get('formats')?.value || [];
      const {
        barcodes
      } = yield _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner.readBarcodesFromImage({
        path,
        formats
      });
      _this2.barcodes = barcodes;
    })();
  }
  scan() {
    var _this3 = this;
    return (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const formats = _this3.formGroup.get('formats')?.value || [];
      const {
        barcodes
      } = yield _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner.scan({
        formats
      });
      _this3.barcodes = barcodes;
    })();
  }
  openSettings() {
    return (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner.openSettings();
    })();
  }
  installGoogleBarcodeScannerModule() {
    return (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner.installGoogleBarcodeScannerModule();
    })();
  }
  requestPermissions() {
    return (0,D_Expoflores_PruebaQR_capacitor_mlkit_plugin_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_mlkit_barcode_scanning__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner.requestPermissions();
    })();
  }
  openOnGithub() {
    window.open(this.GH_URL, '_blank');
  }
  static {
    this.ctorParameters = () => [{
      type: _app_core__WEBPACK_IMPORTED_MODULE_3__.DialogService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
    }];
  }
};
BarcodeScanningPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-barcode-scanning',
  template: _barcode_scanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_barcode_scanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], BarcodeScanningPage);


/***/ }),

/***/ 703:
/*!************************************!*\
  !*** ./src/tests/modules/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedTestingModule: () => (/* reexport safe */ _shared_testing_module__WEBPACK_IMPORTED_MODULE_0__.SharedTestingModule)
/* harmony export */ });
/* harmony import */ var _shared_testing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-testing.module */ 3202);


/***/ }),

/***/ 3202:
/*!****************************************************!*\
  !*** ./src/tests/modules/shared-testing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedTestingModule: () => (/* binding */ SharedTestingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 2288);






let SharedTestingModule = class SharedTestingModule {};
SharedTestingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule.forRoot()],
  declarations: [],
  providers: [{
    provide: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController,
    useValue: {}
  }, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router,
    useValue: {}
  }],
  exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule]
})], SharedTestingModule);


/***/ }),

/***/ 704:
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-mlkit/barcode-scanning/dist/esm/definitions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressType: () => (/* binding */ AddressType),
/* harmony export */   BarcodeFormat: () => (/* binding */ BarcodeFormat),
/* harmony export */   BarcodeValueType: () => (/* binding */ BarcodeValueType),
/* harmony export */   EmailFormatType: () => (/* binding */ EmailFormatType),
/* harmony export */   GoogleBarcodeScannerModuleInstallState: () => (/* binding */ GoogleBarcodeScannerModuleInstallState),
/* harmony export */   LensFacing: () => (/* binding */ LensFacing),
/* harmony export */   PhoneFormatType: () => (/* binding */ PhoneFormatType),
/* harmony export */   Resolution: () => (/* binding */ Resolution),
/* harmony export */   WifiEncryptionType: () => (/* binding */ WifiEncryptionType)
/* harmony export */ });
/**
 * @since 0.0.1
 */
var BarcodeFormat;
(function (BarcodeFormat) {
  /**
   * Only available on Android and iOS.
   *
   * @since 0.0.1
   */
  BarcodeFormat["Aztec"] = "AZTEC";
  /**
   * Only available on Android and iOS.
   *
   * @since 0.0.1
   */
  BarcodeFormat["Codabar"] = "CODABAR";
  /**
   * Only available on Android and iOS.
   *
   * @since 0.0.1
   */
  BarcodeFormat["Code39"] = "CODE_39";
  /**
   * Only available on Android and iOS.
   *
   * @since 0.0.1
   */
  BarcodeFormat["Code93"] = "CODE_93";
  /**
   * Only available on Android and iOS.
   *
   * @since 0.0.1
   */
  BarcodeFormat["Code128"] = "CODE_128";
  /**
   * Only available on Android and iOS.
   *
   * @since 0.0.1
   */
  BarcodeFormat["DataMatrix"] = "DATA_MATRIX";
  /**
   * Only available on Android and iOS.
   *
   * @since 0.0.1
   */
  BarcodeFormat["Ean8"] = "EAN_8";
  /**
   * Only available on Android and iOS.
   *
   * @since 0.0.1
   */
  BarcodeFormat["Ean13"] = "EAN_13";
  /**
   * Only available on Android and iOS.
   *
   * @since 0.0.1
   */
  BarcodeFormat["Itf"] = "ITF";
  /**
   * Only available on Android and iOS.
   *
   * @since 0.0.1
   */
  BarcodeFormat["Pdf417"] = "PDF_417";
  /**
   * Only available on Android and iOS.
   *
   * @since 0.0.1
   */
  BarcodeFormat["QrCode"] = "QR_CODE";
  /**
   * Only available on Android and iOS.
   *
   * @since 0.0.1
   */
  BarcodeFormat["UpcA"] = "UPC_A";
  /**
   * Only available on Android and iOS.
   *
   * @since 0.0.1
   */
  BarcodeFormat["UpcE"] = "UPC_E";
})(BarcodeFormat || (BarcodeFormat = {}));
/**
 * @since 0.0.1
 */
var BarcodeValueType;
(function (BarcodeValueType) {
  /**
   * @since 0.0.1
   */
  BarcodeValueType["CalendarEvent"] = "CALENDAR_EVENT";
  /**
   * @since 0.0.1
   */
  BarcodeValueType["ContactInfo"] = "CONTACT_INFO";
  /**
   * @since 0.0.1
   */
  BarcodeValueType["DriversLicense"] = "DRIVERS_LICENSE";
  /**
   * @since 0.0.1
   */
  BarcodeValueType["Email"] = "EMAIL";
  /**
   * @since 0.0.1
   */
  BarcodeValueType["Geo"] = "GEO";
  /**
   * @since 0.0.1
   */
  BarcodeValueType["Isbn"] = "ISBN";
  /**
   * @since 0.0.1
   */
  BarcodeValueType["Phone"] = "PHONE";
  /**
   * @since 0.0.1
   */
  BarcodeValueType["Product"] = "PRODUCT";
  /**
   * @since 0.0.1
   */
  BarcodeValueType["Sms"] = "SMS";
  /**
   * @since 0.0.1
   */
  BarcodeValueType["Text"] = "TEXT";
  /**
   * @since 0.0.1
   */
  BarcodeValueType["Url"] = "URL";
  /**
   * @since 0.0.1
   */
  BarcodeValueType["Wifi"] = "WIFI";
  /**
   * @since 0.0.1
   */
  BarcodeValueType["Unknown"] = "UNKNOWN";
})(BarcodeValueType || (BarcodeValueType = {}));
/**
 * @since 7.0.0
 */
var Resolution;
(function (Resolution) {
  /**
   * @since 7.0.0
   */
  Resolution[Resolution["640x480"] = 0] = "640x480";
  /**
   * @since 7.0.0
   */
  Resolution[Resolution["1280x720"] = 1] = "1280x720";
  /**
   * @since 7.0.0
   */
  Resolution[Resolution["1920x1080"] = 2] = "1920x1080";
})(Resolution || (Resolution = {}));
/**
 * @since 0.0.1
 */
var LensFacing;
(function (LensFacing) {
  /**
   * @since 0.0.1
   */
  LensFacing["Front"] = "FRONT";
  /**
   * @since 0.0.1
   */
  LensFacing["Back"] = "BACK";
})(LensFacing || (LensFacing = {}));
/**
 * @since 5.1.0
 */
var GoogleBarcodeScannerModuleInstallState;
(function (GoogleBarcodeScannerModuleInstallState) {
  /**
   * @since 5.1.0
   */
  GoogleBarcodeScannerModuleInstallState[GoogleBarcodeScannerModuleInstallState["UNKNOWN"] = 0] = "UNKNOWN";
  /**
   * @since 5.1.0
   */
  GoogleBarcodeScannerModuleInstallState[GoogleBarcodeScannerModuleInstallState["PENDING"] = 1] = "PENDING";
  /**
   * @since 5.1.0
   */
  GoogleBarcodeScannerModuleInstallState[GoogleBarcodeScannerModuleInstallState["DOWNLOADING"] = 2] = "DOWNLOADING";
  /**
   * @since 5.1.0
   */
  GoogleBarcodeScannerModuleInstallState[GoogleBarcodeScannerModuleInstallState["CANCELED"] = 3] = "CANCELED";
  /**
   * @since 5.1.0
   */
  GoogleBarcodeScannerModuleInstallState[GoogleBarcodeScannerModuleInstallState["COMPLETED"] = 4] = "COMPLETED";
  /**
   * @since 5.1.0
   */
  GoogleBarcodeScannerModuleInstallState[GoogleBarcodeScannerModuleInstallState["FAILED"] = 5] = "FAILED";
  /**
   * @since 5.1.0
   */
  GoogleBarcodeScannerModuleInstallState[GoogleBarcodeScannerModuleInstallState["INSTALLING"] = 6] = "INSTALLING";
  /**
   * @since 5.1.0
   */
  GoogleBarcodeScannerModuleInstallState[GoogleBarcodeScannerModuleInstallState["DOWNLOAD_PAUSED"] = 7] = "DOWNLOAD_PAUSED";
})(GoogleBarcodeScannerModuleInstallState || (GoogleBarcodeScannerModuleInstallState = {}));
/**
 * @since 7.0.0
 */
var AddressType;
(function (AddressType) {
  /**
   * @since 7.0.0
   */
  AddressType[AddressType["HOME"] = 0] = "HOME";
  /**
   * @since 7.0.0
   */
  AddressType[AddressType["UNKNOWN"] = 1] = "UNKNOWN";
  /**
   * @since 7.0.0
   */
  AddressType[AddressType["WORK"] = 2] = "WORK";
})(AddressType || (AddressType = {}));
/**
 * @since 7.0.0
 */
var EmailFormatType;
(function (EmailFormatType) {
  /**
   * @since 7.0.0
   */
  EmailFormatType[EmailFormatType["HOME"] = 0] = "HOME";
  /**
   * @since 7.0.0
   */
  EmailFormatType[EmailFormatType["UNKNOWN"] = 1] = "UNKNOWN";
  /**
   * @since 7.0.0
   */
  EmailFormatType[EmailFormatType["WORK"] = 2] = "WORK";
})(EmailFormatType || (EmailFormatType = {}));
/**
 * @since 7.0.0
 */
var PhoneFormatType;
(function (PhoneFormatType) {
  /**
   * @since 7.0.0
   */
  PhoneFormatType[PhoneFormatType["FAX"] = 0] = "FAX";
  /**
   * @since 7.0.0
   */
  PhoneFormatType[PhoneFormatType["HOME"] = 1] = "HOME";
  /**
   * @since 7.0.0
   */
  PhoneFormatType[PhoneFormatType["MOBILE"] = 2] = "MOBILE";
  /**
   * @since 7.0.0
   */
  PhoneFormatType[PhoneFormatType["UNKNOWN"] = 3] = "UNKNOWN";
  /**
   * @since 7.0.0
   */
  PhoneFormatType[PhoneFormatType["WORK"] = 4] = "WORK";
})(PhoneFormatType || (PhoneFormatType = {}));
/**
 * @since 7.0.0
 */
var WifiEncryptionType;
(function (WifiEncryptionType) {
  /**
   * @since 7.0.0
   */
  WifiEncryptionType[WifiEncryptionType["OPEN"] = 1] = "OPEN";
  /**
   * @since 7.0.0
   */
  WifiEncryptionType[WifiEncryptionType["WEP"] = 2] = "WEP";
  /**
   * @since 7.0.0
   */
  WifiEncryptionType[WifiEncryptionType["WPA"] = 3] = "WPA";
})(WifiEncryptionType || (WifiEncryptionType = {}));

/***/ }),

/***/ 9641:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-mlkit/barcode-scanning/dist/esm/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressType: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.AddressType),
/* harmony export */   BarcodeFormat: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.BarcodeFormat),
/* harmony export */   BarcodeScanner: () => (/* binding */ BarcodeScanner),
/* harmony export */   BarcodeValueType: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.BarcodeValueType),
/* harmony export */   EmailFormatType: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.EmailFormatType),
/* harmony export */   GoogleBarcodeScannerModuleInstallState: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.GoogleBarcodeScannerModuleInstallState),
/* harmony export */   LensFacing: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.LensFacing),
/* harmony export */   PhoneFormatType: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.PhoneFormatType),
/* harmony export */   Resolution: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Resolution),
/* harmony export */   WifiEncryptionType: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.WifiEncryptionType)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 704);

const BarcodeScanner = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('BarcodeScanner', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-mlkit_barcode-scanning_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8192)).then(m => new m.BarcodeScannerWeb())
});



/***/ }),

/***/ 889:
/*!**************************************************************************!*\
  !*** ./node_modules/@capawesome/capacitor-torch/dist/esm/definitions.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3864:
/*!********************************************************************!*\
  !*** ./node_modules/@capawesome/capacitor-torch/dist/esm/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Torch: () => (/* binding */ Torch)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 889);

const Torch = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Torch', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capawesome_capacitor-torch_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 9868)).then(m => new m.TorchWeb())
});



/***/ }),

/***/ 6504:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/barcode-scanning/barcode-scanning-modal.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIGlvbi1jb250ZW50IHsKICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogICAgICB9CgogICAgICAuc3F1YXJlIHsKICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgbGVmdDogNTAlOwogICAgICAgIHRvcDogNTAlOwogICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7CiAgICAgICAgd2lkdGg6IDIwMHB4OwogICAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7CiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNDAwMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTsKICAgICAgfQoKICAgICAgLnpvb20tcmF0aW8td3JhcHBlciB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIGxlZnQ6IDUwJTsKICAgICAgICBib3R0b206IDE2cHg7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOwogICAgICAgIHdpZHRoOiA1MCU7CiAgICAgIH0KICAgIA%3D%3D!./src/app/modules/barcode-scanning/barcode-scanning-modal.component.ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
      ion-content {
        --background: transparent;
      }

      .square {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 16px;
        width: 200px;
        height: 200px;
        border: 6px solid white;
        box-shadow: 0 0 0 4000px rgba(0, 0, 0, 0.3);
      }

      .zoom-ratio-wrapper {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        width: 50%;
      }
    `, "",{"version":3,"sources":["webpack://./src/app/modules/barcode-scanning/barcode-scanning-modal.component.ts"],"names":[],"mappings":";MACM;QACE,yBAAyB;MAC3B;;MAEA;QACE,kBAAkB;QAClB,SAAS;QACT,QAAQ;QACR,gCAAgC;QAChC,mBAAmB;QACnB,YAAY;QACZ,aAAa;QACb,uBAAuB;QACvB,2CAA2C;MAC7C;;MAEA;QACE,kBAAkB;QAClB,SAAS;QACT,YAAY;QACZ,2BAA2B;QAC3B,UAAU;MACZ","sourcesContent":["\n      ion-content {\n        --background: transparent;\n      }\n\n      .square {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        border-radius: 16px;\n        width: 200px;\n        height: 200px;\n        border: 6px solid white;\n        box-shadow: 0 0 0 4000px rgba(0, 0, 0, 0.3);\n      }\n\n      .zoom-ratio-wrapper {\n        position: absolute;\n        left: 50%;\n        bottom: 16px;\n        transform: translateX(-50%);\n        width: 50%;\n      }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 323:
/*!********************************************************************************!*\
  !*** ./src/app/modules/barcode-scanning/barcode-scanning.page.scss?ngResource ***!
  \********************************************************************************/
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

/***/ 910:
/*!********************************************************************************!*\
  !*** ./src/app/modules/barcode-scanning/barcode-scanning.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Barcode Scanning</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>About</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      ⚡️ Capacitor plugin for scanning barcodes and QR codes.\r\n    </ion-card-content>\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col>\r\n        <ion-button\r\n          fill=\"clear\"\r\n          (click)=\"openOnGithub()\"\r\n          class=\"ion-float-right\"\r\n          >GitHub</ion-button\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Demo</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <form [formGroup]=\"formGroup\">\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Formats</ion-label>\r\n          <ion-select\r\n            multiple=\"true\"\r\n            placeholder=\"Formats\"\r\n            formControlName=\"formats\"\r\n          >\r\n            <ion-select-option [value]=\"barcodeFormat.Aztec\"\r\n              >Aztec</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"barcodeFormat.Codabar\"\r\n              >Codabar</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"barcodeFormat.Code39\"\r\n              >Code39</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"barcodeFormat.Code93\"\r\n              >Code93</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"barcodeFormat.Code128\"\r\n              >Code128</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"barcodeFormat.DataMatrix\"\r\n              >DataMatrix</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"barcodeFormat.Ean8\"\r\n              >Ean8</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"barcodeFormat.Ean13\"\r\n              >Ean13</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"barcodeFormat.Itf\"\r\n              >Itf</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"barcodeFormat.Pdf417\"\r\n              >Pdf417</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"barcodeFormat.QrCode\"\r\n              >QrCode</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"barcodeFormat.UpcA\"\r\n              >UpcA</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"barcodeFormat.UpcE\"\r\n              >UpcE</ion-select-option\r\n            >\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Lens Facing</ion-label>\r\n          <ion-select formControlName=\"lensFacing\">\r\n            <ion-select-option [value]=\"lensFacing.Front\"\r\n              >Front</ion-select-option\r\n            >\r\n            <ion-select-option [value]=\"lensFacing.Back\"\r\n              >Back</ion-select-option\r\n            >\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"fixed\"\r\n            >Google Barcode Scanner Module Install State</ion-label\r\n          >\r\n          <ion-input\r\n            formControlName=\"googleBarcodeScannerModuleInstallState\"\r\n            type=\"number\"\r\n            [readonly]=\"true\"\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"fixed\"\r\n            >Google Barcode Scanner Module Install Progress</ion-label\r\n          >\r\n          <ion-input\r\n            formControlName=\"googleBarcodeScannerModuleInstallProgress\"\r\n            type=\"number\"\r\n            [readonly]=\"true\"\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-button\r\n          expand=\"block\"\r\n          (click)=\"startScan()\"\r\n          [disabled]=\"!isSupported\"\r\n          >Start Scan</ion-button\r\n        >\r\n        <ion-button\r\n          expand=\"block\"\r\n          (click)=\"readBarcodeFromImage()\"\r\n          [disabled]=\"!isSupported\"\r\n          >Read Barcode From Image</ion-button\r\n        >\r\n        <ion-button expand=\"block\" (click)=\"scan()\" [disabled]=\"!isSupported\"\r\n          >Scan</ion-button\r\n        >\r\n        <ion-button\r\n          expand=\"block\"\r\n          (click)=\"openSettings()\"\r\n          [disabled]=\"!isSupported\"\r\n          >Open Settings</ion-button\r\n        >\r\n        <ion-button\r\n          expand=\"block\"\r\n          (click)=\"installGoogleBarcodeScannerModule()\"\r\n          [disabled]=\"!isSupported\"\r\n          >Install Google Barcode Scanner Module</ion-button\r\n        >\r\n        <ion-button\r\n          expand=\"block\"\r\n          (click)=\"requestPermissions()\"\r\n          [disabled]=\"isPermissionGranted\"\r\n          >Request Permissions</ion-button\r\n        >\r\n      </form>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  @for (barcode of barcodes; track barcode) {\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label position=\"fixed\">Bytes</ion-label>\r\n        <ion-input\r\n          type=\"text\"\r\n          readonly\r\n          [value]=\"barcode.bytes?.toString() || ''\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"fixed\">Corner Points</ion-label>\r\n        <ion-input\r\n          type=\"text\"\r\n          readonly\r\n          [value]=\"barcode.cornerPoints?.toString() || ''\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"fixed\">Display Value</ion-label>\r\n        <ion-input\r\n          type=\"text\"\r\n          readonly\r\n          [value]=\"barcode.displayValue\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"fixed\">Format</ion-label>\r\n        <ion-input type=\"text\" readonly [value]=\"barcode.format\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"fixed\">Raw Value</ion-label>\r\n        <ion-input type=\"text\" readonly [value]=\"barcode.rawValue\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"fixed\">Value Type</ion-label>\r\n        <ion-input type=\"text\" readonly [value]=\"barcode.valueType\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  }\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_barcode-scanning_barcode-scanning_module_ts.js.map