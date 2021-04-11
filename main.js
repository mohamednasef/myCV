(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.parent{\r\n    overflow-x: hidden ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhcmVudHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbiA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n  <app-header></app-header>\r\n  <app-biography></app-biography>\r\n  <app-skills></app-skills>\r\n  <app-education></app-education>\r\n  <app-portfolio></app-portfolio>\r\n  <app-service></app-service>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cv';
    }
    AppComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _biography_biography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./biography/biography.component */ "./src/app/biography/biography.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bar/bar.component */ "./src/app/bar/bar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _biography_biography_component__WEBPACK_IMPORTED_MODULE_4__["BiographyComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"],
                _service_service_component__WEBPACK_IMPORTED_MODULE_8__["ServiceComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _bar_bar_component__WEBPACK_IMPORTED_MODULE_10__["BarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar/bar.component.css":
/*!***************************************!*\
  !*** ./src/app/bar/bar.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* start bar */\r\n\r\n#bar {\r\n  position: fixed;\r\n  right: 10px;\r\n  top: 150px;\r\n   transition: all .2s ease-in-out;\r\n}\r\n\r\n#bar li {\r\n  margin-bottom: 15px;\r\n  position: relative;\r\n}\r\n\r\n#bar li:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 2px;\r\n  height: 15px;\r\n  margin: auto;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: -42px;\r\n  background: #777;\r\n}\r\n\r\n#bar li:last-child:before {\r\n  display: none;\r\n}\r\n\r\n#bar a {\r\n  text-decoration: none;\r\n}\r\n\r\n#bar li:focus {\r\n  color: #fff;\r\n}\r\n\r\n#bar .fa {\r\n  line-height: 30px;\r\n  width: 30px;\r\n  height: 30px;\r\n  color: #4f535f;\r\n  border: 1px solid #4f535f;\r\n  border-radius: 5px;\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\n#bar .fa:hover,\r\n#bar .fa:focus {\r\n  background: #4f535f;\r\n  color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFyL2Jhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWM7O0FBRWQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7R0FDVCwrQkFBK0I7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsK0JBQStCO0FBQ2pDOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9iYXIvYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdGFydCBiYXIgKi9cclxuXHJcbiNiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDE1MHB4O1xyXG4gICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jYmFyIGxpIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2JhciBsaTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IC00MnB4O1xyXG4gIGJhY2tncm91bmQ6ICM3Nzc7XHJcbn1cclxuXHJcbiNiYXIgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNiYXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jYmFyIGxpOmZvY3VzIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI2JhciAuZmEge1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBjb2xvcjogIzRmNTM1ZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNGY1MzVmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jYmFyIC5mYTpob3ZlcixcclxuI2JhciAuZmE6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICM0ZjUzNWY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/bar/bar.component.html":
/*!****************************************!*\
  !*** ./src/app/bar/bar.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start bar -->\r\n<ul id=\"bar\" class=\"list-unstyled bar text-center\">\r\n  <li class=\"active\">\r\n    <a data-value=\"\" href=\"#navbar\">\r\n      <i class=\"fa fa-home icon\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"biography\"></i>\r\n    </a>\r\n  </li>\r\n\r\n  <li>\r\n    <a href=\"#skills\" data-value=\"\">\r\n      <i class=\"fa fa-code\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"skills\"></i>\r\n    </a>\r\n  </li>\r\n\r\n  <li>\r\n    <a href=\"#experience\" data-value=\"\">\r\n      <i class=\"fa fa-briefcase\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"EXPERIENCE\"></i>\r\n    </a>\r\n  </li>\r\n\r\n  <li>\r\n    <a href=\"#portfolio\" data-value=\"\">\r\n      <i class=\"fa fa-picture-o\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"portfolio\"></i>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a href=\"#service\" data-value=\"\">\r\n      <i class=\"fa fa-cogs\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"service\"></i>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a href=\"#contact\" data-value=\"\">\r\n      <i class=\"fa fa-phone\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"contact\"></i>\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<!-- end bar -->\r\n"

/***/ }),

/***/ "./src/app/bar/bar.component.ts":
/*!**************************************!*\
  !*** ./src/app/bar/bar.component.ts ***!
  \**************************************/
/*! exports provided: BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarComponent = /** @class */ (function () {
    function BarComponent() {
    }
    BarComponent.prototype.ngOnInit = function () {
    };
    BarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar',
            template: __webpack_require__(/*! ./bar.component.html */ "./src/app/bar/bar.component.html"),
            styles: [__webpack_require__(/*! ./bar.component.css */ "./src/app/bar/bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BarComponent);
    return BarComponent;
}());



/***/ }),

/***/ "./src/app/biography/biography.component.css":
/*!***************************************************!*\
  !*** ./src/app/biography/biography.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".biogrphy {\r\npadding-top: 100px;\r\n}\r\n\r\n.biogrphy .up {\r\n  position: relative;\r\n\r\n}\r\n\r\n.biogrphy .up .cv {\r\n  background:#00BFA6;\r\n  padding: .5rem 1rem;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  transition: all .3s ease-in-out;\r\n  border: 1px solid #00BFA6;\r\n}\r\n\r\n.biogrphy .up .cv:hover {\r\n  background: transparent;\r\n  color: #00BFA6;\r\n  border: 1px solid #00BFA6;\r\n}\r\n\r\n.biogrphy .about h3 {\r\n  text-transform: uppercase;\r\n  margin-bottom: 15px;\r\n  color: #4f535f;\r\n  font-size: 22px;\r\n}\r\n\r\n.biogrphy .about p {\r\n  line-height: 1.7rem;\r\n  color: #777;\r\n  position: relative;\r\n  font-size: 14px;\r\n}\r\n\r\n.biogrphy .about p:after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: -20px;\r\n  left: 0;\r\n  background: #ddd;\r\n  height: 1px;\r\n  width: 50%;\r\n}\r\n\r\n.biogrphy .contact-us{\r\n  margin-top: 40px;\r\n}\r\n\r\n.biogrphy img {\r\n  width: 100%;\r\n  height: 400px;\r\n}\r\n\r\n.biogrphy .about .fa {\r\n  color: #4f535f;\r\n    width: 35px;\r\n    height: 35px;\r\n    margin-right: 15px;\r\n    text-align: center;\r\n    margin-bottom: 1rem;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 5px rgba(121, 121, 121, 0.3);\r\n    border: 1px solid #ddd;\r\n    line-height: 2;\r\n}\r\n\r\n.biogrphy .about span{\r\n  color: #4f535f;\r\n}\r\n\r\n.biogrphy .about a {\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  color: #4f535f;\r\n}\r\n\r\n.biogrphy .about span {\r\n\r\n  font-size: 14px;\r\n\r\n}\r\n\r\n/* end biography */\r\n\r\n@media (max-width: 768px) {\r\n  .biogrphy .Image {\r\n    order: 1;\r\n  }\r\n\r\n  .biogrphy .up {\r\n    order: 2;\r\n  }\r\n\r\n  .biogrphy .up .cv {\r\n    bottom: -30px;\r\n    margin: auto;\r\n    left: 0;\r\n    right: 0;\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlvZ3JhcGh5L2Jpb2dyYXBoeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxlQUFlOztBQUVqQjs7QUFFQSxrQkFBa0I7O0FBQ2xCO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9iaW9ncmFwaHkvYmlvZ3JhcGh5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlvZ3JwaHkge1xyXG5wYWRkaW5nLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5iaW9ncnBoeSAudXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcbi5iaW9ncnBoeSAudXAgLmN2IHtcclxuICBiYWNrZ3JvdW5kOiMwMEJGQTY7XHJcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCRkE2O1xyXG59XHJcblxyXG4uYmlvZ3JwaHkgLnVwIC5jdjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICMwMEJGQTY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQkZBNjtcclxufVxyXG5cclxuLmJpb2dycGh5IC5hYm91dCBoMyB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGNvbG9yOiAjNGY1MzVmO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmJpb2dycGh5IC5hYm91dCBwIHtcclxuICBsaW5lLWhlaWdodDogMS43cmVtO1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5iaW9ncnBoeSAuYWJvdXQgcDphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTIwcHg7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5iaW9ncnBoeSAuY29udGFjdC11c3tcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uYmlvZ3JwaHkgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcbiBcclxuLmJpb2dycGh5IC5hYm91dCAuZmEge1xyXG4gIGNvbG9yOiAjNGY1MzVmO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuMyk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbn1cclxuLmJpb2dycGh5IC5hYm91dCBzcGFue1xyXG4gIGNvbG9yOiAjNGY1MzVmO1xyXG59XHJcbi5iaW9ncnBoeSAuYWJvdXQgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzRmNTM1ZjtcclxufVxyXG4uYmlvZ3JwaHkgLmFib3V0IHNwYW4ge1xyXG5cclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG59XHJcblxyXG4vKiBlbmQgYmlvZ3JhcGh5ICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5iaW9ncnBoeSAuSW1hZ2Uge1xyXG4gICAgb3JkZXI6IDE7XHJcbiAgfVxyXG5cclxuICAuYmlvZ3JwaHkgLnVwIHtcclxuICAgIG9yZGVyOiAyO1xyXG4gIH1cclxuXHJcbiAgLmJpb2dycGh5IC51cCAuY3Yge1xyXG4gICAgYm90dG9tOiAtMzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/biography/biography.component.html":
/*!****************************************************!*\
  !*** ./src/app/biography/biography.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"biography\" class=\"biogrphy\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 up\"  data-aos-duration=\"500\" data-aos=\"fade-down\">\r\n        <div class=\"about\">\r\n          <h3>About Me</h3>\r\n          <p>\r\n            I am an ambitious person looking for challenges in a creative environment to learn new things and to upgrade my skills. I can work in large teams and do my best in addition to i can work under pressure , My goal is work creatively . Experienced Frontend Developer with a demonstrated history of working in the information technology and services industry 4 years  \r\n          </p>\r\n          <h3 class=\"contact-us\">Contact Us</h3>\r\n          <ul class='list-unstyled'>\r\n   \r\n              <li><i class=\"fa fa-map-marker\"></i>\r\n                <span>Cairo , Egypt</span></li>\r\n              <li><i class=\"fa fa-phone\"></i>\r\n                <a href=\"tel:+20 100 4388 279\"><span>+20 100 4388 279</span></a></li>\r\n   \r\n              <li><i class=\"fa fa-envelope-o\"></i>\r\n                <a href=\"mailto:mohamednasef2041@gmail.com\"><span>mohamednasef2041@gmail.com</span></a></li>\r\n              <li><i class=\"fa fa-user\"></i>\r\n                <span>Finished Military Service</span></li>\r\n     \r\n          </ul>\r\n        </div>\r\n        <a href='assets/img/mohamednasefcv-frontend.pdf' class='cv'>Download CV</a>\r\n      </div>\r\n      <div class=\"col-md-6 text-center Image\"  data-aos-duration=\"500\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-center\">\r\n        <img src=\"assets/img/about.svg\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/biography/biography.component.ts":
/*!**************************************************!*\
  !*** ./src/app/biography/biography.component.ts ***!
  \**************************************************/
/*! exports provided: BiographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiographyComponent", function() { return BiographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BiographyComponent = /** @class */ (function () {
    function BiographyComponent() {
    }
    BiographyComponent.prototype.ngOnInit = function () {
    };
    BiographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-biography',
            template: __webpack_require__(/*! ./biography.component.html */ "./src/app/biography/biography.component.html"),
            styles: [__webpack_require__(/*! ./biography.component.css */ "./src/app/biography/biography.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BiographyComponent);
    return BiographyComponent;
}());



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".experience{\r\n  padding-top: 100px;\r\n}\r\n.company {\r\n  position: relative;\r\n  box-shadow: 0 0 1rem rgba(121, 121, 121, 0.1);\r\n  padding: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n.company--title, .company--name, .company--date {\r\n  margin-bottom: .75rem;\r\n}\r\n.company--title {\r\n  font-size: 1.5rem;\r\n}\r\n.company--name, .company--date, .company--description {\r\n  font-size: 13px;\r\n  /* line-height: 1.7; */\r\n}\r\n.company--name {\r\n  color: #00BFA6;\r\n}\r\n.company--name a {\r\n  text-decoration: none;\r\n  color: #00BFA6;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsNkNBQTZDO0VBQzdDLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBlcmllbmNle1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG4uY29tcGFueSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcmVtIHJnYmEoMTIxLCAxMjEsIDEyMSwgMC4xKTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5jb21wYW55LS10aXRsZSwgLmNvbXBhbnktLW5hbWUsIC5jb21wYW55LS1kYXRlIHtcclxuICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XHJcbn1cclxuXHJcbi5jb21wYW55LS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jb21wYW55LS1uYW1lLCAuY29tcGFueS0tZGF0ZSwgLmNvbXBhbnktLWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgLyogbGluZS1oZWlnaHQ6IDEuNzsgKi9cclxufVxyXG5cclxuLmNvbXBhbnktLW5hbWUge1xyXG4gIGNvbG9yOiAjMDBCRkE2O1xyXG59XHJcblxyXG4uY29tcGFueS0tbmFtZSBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwMEJGQTY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"experience\" class=\"experience\">\r\n  <div class=\"container\">\r\n    <h2 class=\"text-center\"  data-aos-duration=\"1000\" data-aos=\"fade-down\">experience</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\"  data-aos-duration=\"1000\" data-aos=\"fade-up\">\r\n        <div class=\"company\">\r\n          <h3 class=\"company--title\">Front end developer</h3>\r\n          <h5 class=\"company--name\">\r\n            <a href=\"https://jdeed.info/\" target='_blank'>Jdeed Elnozom </a>\r\n          </h5>\r\n          <h5 class=\"company--date\">October 2017 - Dec 2018</h5>\r\n          <ul class=\"company--description  pl-3\">\r\n           <li>Determining the structure and design of web pages. And web design is optimized for smartphones.</li>\r\n            <li>user experience determines design choices.\r\n            </li>\r\n            <li>Performance And Usability Testing</li>\r\n            <li>Convert PSD || ProtoType To PugJS & SCSS</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- col -->\r\n       <div class=\"col-md-6\"  data-aos-duration=\"1000\" data-aos=\"fade-up\">\r\n         <div class=\"company\">\r\n           <h3 class=\"company--title\">Front end developer</h3>\r\n           <h5 class=\"company--name\">\r\n             <a href=\"http://www.penta-b.com/\" target='_blank'>Penta-b</a>\r\n           </h5>\r\n           <h5 class=\"company--date\">January 2019 - Present</h5>\r\n          \r\n           <ul class=\"company--description pl-3\">\r\n    \r\n            <li>Develop new user-facing features and web design is optimized for smartphones.\r\n            </li>\r\n            <li>user experience determines design choices.\r\n            </li>\r\n            <li>Developing features to enhance the user experience.\r\n            </li>\r\n            <li>Convert PSD || ProtoType To PugJS & SCSS</li>\r\n           </ul>\r\n         </div>\r\n       </div>\r\n       <!-- col -->\r\n   \r\n      \r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n  padding: 1rem 0;\r\n}\r\n\r\n.footer ul li {\r\n  margin-right: 1rem;\r\n  display: inline-block;\r\n}\r\n\r\n.footer ul li a {\r\n  text-decoration: none;\r\n  font-size: 1.2rem;\r\n  color: inherit;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5mb290ZXIgdWwgbGkge1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5mb290ZXIgdWwgbGkgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"footer text-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <ul class=\"list-unstyled share\">\r\n          <li class=\"nav-item\" *ngFor=\"let icon of icons\">\r\n            <a target=\"_blank\" href={{icon.url}} ><i ngClass={{icon.font}} id=\"{{icon.id}}\"></i></a>\r\n          </li>\r\n        </ul>\r\n        Copyright &copy; {{year | date: 'yyyy'}} Cairo, Egypt\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date();
        this.icons = [
            {
                font: 'fa fa-linkedin',
                url: 'https://www.linkedin.com/in/mohamed-nasef-b59a62106//'
            },
            {
                font: 'fa fa-github',
                url: 'https://github.com/mohamednasef'
            },
            {
                font: 'fa fa-facebook',
                url: 'https://www.facebook.com/profile.php?id=100008606767482'
            },
            {
                font: 'fa fa-twitter',
                url: 'https://twitter.com/mohamed1nasef1'
            },
        ];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.header {\r\n  background-color: #fff;\r\n  box-shadow: 0 0 5px rgba(121, 121, 121, 0.1);\r\n  z-index: 9999;\r\n}\r\n\r\n.navbar {\r\n  padding: .5rem 0;\r\n}\r\n\r\n.navbar-light .navbar-toggler,\r\n.navbar-light .navbar-toggler:focus,\r\n.navbar-light .navbar-toggler:active,\r\n.navbar-light .navbar-toggler:hover {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.navbar .navbar-brand {\r\n  position: relative;\r\n  top: 0;\r\n  color: #777;\r\n\r\n}\r\n\r\n.navbar .navbar-brand img {\r\n  width: 50px;\r\n  border-radius: 50%;\r\n  height: 50px;\r\n\r\n\r\n}\r\n\r\n.navbar .navbar-nav {\r\n  margin: auto;\r\n}\r\n\r\n.navbar .navbar-nav li {\r\n  margin-right: 20px;\r\n  color: #777;\r\n}\r\n\r\n.navbar .navbar-nav .nav-link {\r\n  cursor: pointer;\r\n  color: #777;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.header .social {\r\n  margin-top: 1rem;\r\n  display: flex;\r\n}\r\n\r\n.header .social li {\r\n  margin-right: .75rem;\r\n}\r\n\r\n.header .social li a {\r\n  text-decoration: none;\r\n}\r\n\r\n.header .social li .fa {\r\n  transition: all .2s ease-in-out;\r\n  font-size: 16px;\r\n  color: #777;\r\n}\r\n\r\n.header .social li .fa:hover {\r\n  color: #4f535f;\r\n}\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 45px;\r\n  height: 21px;\r\n}\r\n\r\n.switch input { \r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #777;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height:13px;\r\n  width: 13px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: #00BFA6;\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #00BFA6;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  transform: translateX(24px);\r\n}\r\n\r\n/* Rounded sliders */\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7OztFQUlFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7OztBQUdkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBRXRCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFFdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUdFLDJCQUEyQjtBQUM3Qjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgxMjEsIDEyMSwgMTIxLCAwLjEpO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IC41cmVtIDA7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLFxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlcjpmb2N1cyxcclxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXI6YWN0aXZlLFxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlcjpob3ZlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBjb2xvcjogIzc3NztcclxuXHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1icmFuZCBpbWcge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcblxyXG5cclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLW5hdiB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IGxpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyIC5zb2NpYWwge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmhlYWRlciAuc29jaWFsIGxpIHtcclxuICBtYXJnaW4tcmlnaHQ6IC43NXJlbTtcclxufVxyXG5cclxuLmhlYWRlciAuc29jaWFsIGxpIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlciAuc29jaWFsIGxpIC5mYSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5oZWFkZXIgLnNvY2lhbCBsaSAuZmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjNGY1MzVmO1xyXG59XHJcblxyXG5cclxuLnN3aXRjaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNDVweDtcclxuICBoZWlnaHQ6IDIxcHg7XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQgeyBcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6MTNweDtcclxuICB3aWR0aDogMTNweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQkZBNjtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMwMEJGQTY7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjRweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNHB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjRweCk7XHJcbn1cclxuXHJcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4uc2xpZGVyLnJvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG59XHJcblxyXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"header\" class=\"header fixed-top\">\r\n  <div class=\"container\">\r\n    <nav id=\"navbar\" class=\"navbar navbar-expand-lg navbar-light\">\r\n      <a class=\"navbar-brand\">\r\n        <img src=\"assets/img/profile.jpg\" alt=\"profile-image\">\r\n      </a>\r\n      <button class=\"navbar-toggler pull-right\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#navbarSupportedContent\"\r\n              aria-controls=\"navbarSupportedContent\"\r\n              aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav\">\r\n          <li class='nav-item' *ngFor='let item of items'>\r\n            <a class='nav-link' href={{item.id}} >{{item.name}}</a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"list-unstyled social\">\r\n          <li class='nav-item' *ngFor='let icon of social'>\r\n            <a target=\"_blank\" href={{icon.url}}>\r\n              <i ngClass={{icon.font}} ></i>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <label class=\"switch\">\r\n              <input type=\"checkbox\" (click)='darkTheme($event.target.checked)'>\r\n              <span class=\"slider round\"></span>\r\n            </label>\r\n       \r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.show = false;
        this.items = [
            {
                name: "home",
                id: "#biography",
            },
            {
                name: "skills",
                id: "#skills",
            },
            {
                name: "experience",
                id: "#experience",
            },
            {
                name: "portfolio",
                id: "#portfolio",
            },
            {
                name: "service",
                id: "#service",
            },
            {
                name: "contact",
                id: "#contact",
            },
        ];
        this.social = [
            {
                font: "fa fa-linkedin",
                url: 'https://www.linkedin.com/in/mohamed-nasef-b59a62106//'
            },
            {
                font: "fa fa-github",
                url: 'https://github.com/mohamednasef'
            },
            {
                font: "fa fa-facebook",
                url: 'https://www.facebook.com/profile.php?id=100008606767482'
            },
            {
                font: "fa fa-twitter",
                url: 'https://twitter.com/mohamed1nasef1'
            },
        ];
        JSON.stringify(localStorage.setItem("darkMode", "false"));
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.darkTheme = function (val) {
        if (val) {
            var x = void 0, i = void 0, a = void 0, b = void 0;
            JSON.stringify(localStorage.setItem("darkMode", "true"));
            document.body.style.backgroundColor = "#18191a";
            document.body.style.transition = ".3s";
            document.getElementById("header").style.backgroundColor = "#18191a";
            document.getElementById("header").style.transition = ".3s";
            x = document.querySelectorAll(".card");
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = "#18191a";
                x[i].style.transition = ".3s";
            }
            a = document.querySelectorAll(".modal-content");
            for (b = 0; b < a.length; b++) {
                a[b].style.backgroundColor = "#18191a";
                a[b].style.transition = ".3s";
            }
        }
        else {
            var x = void 0, i = void 0, a = void 0, b = void 0;
            JSON.stringify(localStorage.setItem("darkMode", "false"));
            document.body.style.backgroundColor = "#fff";
            document.body.style.transition = ".3s";
            document.getElementById("header").style.backgroundColor = "#fff";
            document.getElementById("header").style.transition = ".3s";
            x = document.querySelectorAll(".card");
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = "#fff";
                x[i].style.transition = ".3s";
            }
            a = document.querySelectorAll(".modal-content");
            for (b = 0; b < a.length; b++) {
                a[b].style.backgroundColor = "#fff";
                a[b].style.transition = ".3s";
            }
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio{\r\n  padding-top: 100px;\r\n}\r\n.portfolio .card {\r\n  width: 100%;\r\n  margin: auto;\r\n  position: relative;\r\n  margin-bottom: 3.5rem;\r\n \r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);\r\n  transition: all .2s ease-in-out;\r\n}\r\n.portfolio .card .project-img {\r\nmargin: auto;\r\nmargin-top: -1.25rem;\r\n  width: 85%;\r\n  height: 200px;\r\n  background: #000;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);\r\n}\r\n.portfolio .card .project-img img {\r\n  width: 100%;\r\n  height: 100%;\r\n \r\n}\r\n.portfolio .card .img-brand {\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  padding: 0 20px;\r\n  /* margin-left: 25px; */\r\n}\r\n.portfolio .card a{\r\n  text-decoration: none;\r\n}\r\n.portfolio .card .card-body h5{\r\n  font-size: 16px;\r\n  color: #707070;\r\n  text-transform: capitalize;\r\n}\r\n.portfolio .card .card-body ul li{\r\n  font-size: 14px;\r\n  color: #707070;\r\n  text-transform: capitalize;\r\n \r\n}\r\n.portfolio .card .more-details{\r\n  background: #00BFA6;\r\n  padding: .5rem 1rem;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  transition: all .3s ease-in-out;\r\n  border: 1px solid #00BFA6;\r\n  font-size: 14px;\r\n}\r\n.card-fot{\r\n  padding: 0 10px;\r\n  \r\n  \r\n}\r\n.card-fot h4{\r\n  font-size: 15px;\r\n  color: #5b5959;\r\n  font-weight: 500;\r\n  padding-top: 5px;\r\n  text-transform: capitalize;\r\n  text-align: start;\r\n}\r\n.card-lift--hover:hover {\r\n  transform: translateY(-20px);\r\n  transition: all 0.15s ease;}\r\n.portfolio .card .more-details:hover{\r\n  background: transparent;\r\n  color: #00BFA6;\r\n  border: 1px solid #00BFA6;\r\n}\r\n.portfolio .card .more-details:focus{\r\nbox-shadow: none;\r\n}\r\n.portfolio .modal .modal-body p{\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7O0VBRXJCLHVFQUF1RTtFQUN2RSwrQkFBK0I7QUFDakM7QUFLQTtBQUNBLFlBQVk7QUFDWixvQkFBb0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVFQUF1RTtBQUN6RTtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0FBRWQ7QUFHQTtFQUNFLHNCQUFtQjtLQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QjtBQUdBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBR0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCwwQkFBMEI7O0FBRTVCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlOzs7QUFHakI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsMEJBQTBCLENBQUM7QUFDN0I7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBR0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcnRmb2xpb3tcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbn1cclxuLnBvcnRmb2xpbyAuY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XHJcbiBcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjEyKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5cclxuIFxyXG5cclxuLnBvcnRmb2xpbyAuY2FyZCAucHJvamVjdC1pbWcge1xyXG5tYXJnaW46IGF1dG87XHJcbm1hcmdpbi10b3A6IC0xLjI1cmVtO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjEyKTtcclxufVxyXG4ucG9ydGZvbGlvIC5jYXJkIC5wcm9qZWN0LWltZyBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuIFxyXG59XHJcblxyXG5cclxuLnBvcnRmb2xpbyAuY2FyZCAuaW1nLWJyYW5kIHtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICAvKiBtYXJnaW4tbGVmdDogMjVweDsgKi9cclxufVxyXG5cclxuXHJcbi5wb3J0Zm9saW8gLmNhcmQgYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG4ucG9ydGZvbGlvIC5jYXJkIC5jYXJkLWJvZHkgaDV7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvIC5jYXJkIC5jYXJkLWJvZHkgdWwgbGl7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gXHJcbn1cclxuXHJcbi5wb3J0Zm9saW8gLmNhcmQgLm1vcmUtZGV0YWlsc3tcclxuICBiYWNrZ3JvdW5kOiAjMDBCRkE2O1xyXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQkZBNjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNhcmQtZm90e1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBcclxuICBcclxufVxyXG4uY2FyZC1mb3QgaDR7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjNWI1OTU5O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG4uY2FyZC1saWZ0LS1ob3Zlcjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTt9XHJcbi5wb3J0Zm9saW8gLmNhcmQgLm1vcmUtZGV0YWlsczpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzAwQkZBNjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCRkE2O1xyXG59XHJcbi5wb3J0Zm9saW8gLmNhcmQgLm1vcmUtZGV0YWlsczpmb2N1c3tcclxuYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuXHJcbi5wb3J0Zm9saW8gLm1vZGFsIC5tb2RhbC1ib2R5IHB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"portfolio\" class=\"portfolio text-center\">\r\n  <div class=\"container\">\r\n    <h2 data-aos-duration=\"1000\" data-aos=\"fade-down\">projects</h2>\r\n    <div class=\"row\">\r\n \r\n          <div class=\"col-md-4 mb-5 \" *ngFor=\"let item of portfolio; let i = index\">\r\n            <div class=\"card card-lift--hover shadow border-0\" *ngIf=\"item.type == '1'\" >\r\n              <a [href]=\"item.url\" target=\"_blank\" title=\"Landing Page\">\r\n               \r\n                <img class=\"card-img\" [src]=\"'assets/img/' + item.image\" [alt]=\"item.title\">\r\n                <div class=\"card-fot\">\r\n                  <h4>{{item.title}}\r\n                  </h4>\r\n                </div>\r\n              </a>\r\n              \r\n            </div>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.portfolio = [
            {
                url: "http://nasef.eb2a.com/rest4rest/",
                image: "webstie-tawred.png",
                tools: ["React js", "React Hooks", "Reactstrap", "axios", "sass"],
                title: "landing page  rest4rest ",
                type: '1',
            },
            {
                url: "http://nasef.eb2a.com/tawreed/",
                image: "taw.png",
                tools: ["React js", "React Hooks", "Reactstrap", "axios", "sass"],
                title: "landing page  tawreed",
                type: '1',
            },
            {
                url: "http://nasef.eb2a.com/deoms/zodiack.html",
                image: "zod.png",
                tools: ["React js", "React Hooks", "Reactstrap", "axios", "sass"],
                title: "zodiack restaurant",
                type: '1',
            },
            {
                url: "http://nasef.eb2a.com/deoms/docegy.html",
                image: "doc.png",
                tools: ["React js", "React Hooks", "Reactstrap", "axios", "sass"],
                title: " medical doctors DocEgy ",
                type: '1',
            },
            {
                url: "http://nasef.eb2a.com/deoms/admin-tawred.html",
                image: "ataw.png",
                tools: ["React js", "React Hooks", "Reactstrap", "axios", "sass"],
                title: "admin  tawreed",
                type: '1',
            },
            {
                url: "http://nasef.eb2a.com/deoms/sharqah.html",
                image: "qur.png",
                tools: ["React js", "React Hooks", "Reactstrap", "axios", "sass"],
                title: "quran academy sharqah",
                type: '1',
            },
            {
                url: "https://drathome.com.sa/",
                image: "dr.png",
                tools: ["React js", "React Hooks", "Reactstrap", "axios", "sass"],
                title: "medical doctor home ",
                type: '1',
            },
            {
                url: "http://nasef.eb2a.com/deoms/mahratna.html",
                image: "mah.png",
                tools: ["React js", "React Hooks", "Reactstrap", "axios", "sass"],
                title: "learning academy maharatona",
                type: '1',
            },
            {
                url: "http://nasef.eb2a.com/deoms/insta.html",
                image: "insta.png",
                tools: ["React js", "React Hooks", "Reactstrap", "axios", "sass"],
                title: "ecommerce instasales",
                type: '1',
            },
            {
                url: "http://nasef.eb2a.com/sheep/",
                image: "kar.png",
                tools: ["React js", "React Hooks", "Reactstrap", "axios", "sass"],
                title: "landing page lamb  ",
                type: '1',
            },
            {
                url: "http://nasef.eb2a.com/bainah/",
                image: "ba.png",
                title: "learning academy bainah  ",
                type: '1',
            },
            {
                url: "http://nasef.eb2a.com/news/",
                image: "Appo.png",
                title: "landing page",
                type: '1',
            },
            {
                url: "http://nasef.eb2a.com/jdeed/",
                image: "ja.png",
                title: "landing page company",
                type: '1',
            },
            {
                url: "http://nasef.eb2a.com/imev1/",
                image: "ma.png",
                title: "landing page company",
                type: '1',
            },
            {
                url: "http://nasef.eb2a.com/company/",
                image: "ca.png",
                title: "landing page company",
                type: '1',
            },
            {
                url: "http://nasef.eb2a.com/keplar/",
                image: "la.png",
                title: "landing page lap",
                type: '1',
            },
        ];
    }
    PortfolioComponent.prototype.ngOnInit = function () { };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-portfolio",
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.css":
/*!***********************************************!*\
  !*** ./src/app/service/service.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".service .all {\r\n  padding: 1rem;\r\n  transition: all .2s ease-in-out;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.service .all img {\r\n  width: 100%;\r\n  height: 300px;\r\n  margin-bottom: 1.2rem;\r\n  -o-object-fit: fill;\r\n     object-fit: fill;\r\npadding: 20px;\r\n}\r\n\r\n.service .all h6 {\r\n  color: #4f535f;\r\n \r\n  text-transform: capitalize;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFnQjtLQUFoQixnQkFBZ0I7QUFDbEIsYUFBYTtBQUNiOztBQUVBO0VBQ0UsY0FBYzs7RUFFZCwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlL3NlcnZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlIC5hbGwge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uc2VydmljZSAuYWxsIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XHJcbiAgb2JqZWN0LWZpdDogZmlsbDtcclxucGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnNlcnZpY2UgLmFsbCBoNiB7XHJcbiAgY29sb3I6ICM0ZjUzNWY7XHJcbiBcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"service\" class=\"service\">\r\n  <div class=\"container\">\r\n    <h2 class=\"text-center mb-1\"  data-aos-duration=\"1000\" data-aos=\"fade-down\">service</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-xs-12 text-center\" data-aos-duration=\"1000\" data-aos=\"fade-right\">\r\n        <div class=\"all\">\r\n          <img  src=\"assets/img/convert.svg\" alt=\"\">\r\n          <h6>convert PSD or XD to template</h6>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-xs-12 text-center \" data-aos-duration=\"1000\" data-aos=\"fade-up\">\r\n        <div class=\"all\">\r\n          <img  src=\"assets/img/responsive.svg\" alt=\"\">\r\n          <h6>responsive design</h6>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-xs-12 text-center \" data-aos-duration=\"1000\" data-aos=\"fade-left\">\r\n        <div class=\"all\">\r\n          <img src=\"assets/img/edit.svg\" alt=\"\">\r\n          <h6>edit templates</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.css */ "./src/app/service/service.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skills{\r\n  padding-top: 100px;\r\n}\r\n.skills .parent {\r\n  margin-bottom: 1rem;\r\n  padding: .75rem;\r\n  line-height: 2rem;\r\n  box-shadow: 0 0 5px rgba(121, 121, 121, 0.15);\r\n  transition: all .2s ease-in-out;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.skills .parent:hover {\r\n  transform: scale(1.1);\r\n}\r\n.skills .parent img {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n.skills .parent span {\r\n  text-transform: capitalize;\r\n  font-size: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsK0JBQStCO0VBQy9CLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxze1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG4uc2tpbGxzIC5wYXJlbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgcGFkZGluZzogLjc1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgxMjEsIDEyMSwgMTIxLCAwLjE1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2tpbGxzIC5wYXJlbnQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLnNraWxscyAucGFyZW50IGltZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uc2tpbGxzIC5wYXJlbnQgc3BhbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"skills\" class=\"skills\" #skillsRef>\r\n  <div class=\"container\">\r\n    <h2 class=\"text-center\" data-aos-duration=\"300\" data-aos=\"fade-down\">skills</h2>\r\n    <div class=\"row\" data-aos-duration=\"300\" data-aos=\"fade-up\">\r\n      \r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/6.png\" alt=\"\">\r\n          <span>HTML5</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/7.png\" alt=\"\">\r\n          <span>CSS3</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/13.png\" alt=\"\">\r\n          <span>Javascript</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/16.png\" alt=\"\">\r\n          <span>jquery</span>\r\n        </div>\r\n      </div>\r\n\r\n     \r\n    </div>\r\n    <!-- row -->\r\n \r\n\r\n    <div class=\"row\" data-aos-duration=\"900\" data-aos=\"fade-up\">\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/14.png\" alt=\"\">\r\n          <span>angular (bas)</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img\r\n            src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K\"\r\n            alt=\"\">\r\n          <span>ReactJS</span>\r\n        </div>\r\n      </div>\r\n      \r\n      <!-- col -->\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/redux.png\" alt=\"\">\r\n          <span>Redux</span>\r\n        </div>\r\n      </div>\r\n      <!-- col -->\r\n   \r\n  \r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/json.png\" alt=\"\">\r\n          <span>Json</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- row2 -->\r\n    <div class=\"row\" data-aos-duration=\"1200\" data-aos=\"fade-up\">\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/9.png\" alt=\"\">\r\n          <span>SCSS</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/3.png\" alt=\"\">\r\n          <span>pugJS</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/8.png\" alt=\"\">\r\n          <span>GulpJS</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/17.png\" alt=\"\">\r\n          <span>GIT</span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row\" data-aos-duration=\"1500\" data-aos=\"fade-up\">\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/15.png\" alt=\"\">\r\n          <span>bootstrap 4</span>\r\n        </div>\r\n      </div>\r\n    \r\n     \r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/xd.png\" alt=\"\">\r\n          <span>XD</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/Photoshop.png\" alt=\"\">\r\n          <span>Photoshop</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"parent\">\r\n          <img src=\"assets/img/ili.png\" alt=\"\">\r\n          <span>illustrator</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\beetleware\my-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map