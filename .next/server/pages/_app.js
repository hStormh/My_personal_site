/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/LanguageContext.tsx":
/*!******************************************!*\
  !*** ./src/contexts/LanguageContext.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LanguageContext: () => (/* binding */ LanguageContext),\n/* harmony export */   LanguageProvider: () => (/* binding */ LanguageProvider),\n/* harmony export */   useLanguage: () => (/* binding */ useLanguage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    language: \"en\",\n    setLanguage: ()=>{},\n    blogName: \"DHStormh's Blog\"\n});\nconst LanguageProvider = ({ children })=>{\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"en\");\n    const blogName = language === \"en\" ? \"DHStormh's Blog\" : \"DHStormh的博客\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: {\n            language,\n            setLanguage,\n            blogName\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\my_site\\\\src\\\\contexts\\\\LanguageContext.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\nconst useLanguage = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvTGFuZ3VhZ2VDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRjtBQVEvRSxNQUFNRyxnQ0FBa0JILG9EQUFhQSxDQUFzQjtJQUFFSSxVQUFVO0lBQU1DLGFBQWEsS0FBTztJQUFHQyxVQUFVO0FBQW1CLEdBQUc7QUFFcEksTUFBTUMsbUJBQW1CLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQzNDLE1BQU0sQ0FBQ0osVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNSSxXQUFXRixhQUFhLE9BQU8sb0JBQXFCO0lBRTFELHFCQUNFLDhEQUFDRCxnQkFBZ0JNLFFBQVE7UUFBQ0MsT0FBTztZQUFFTjtZQUFVQztZQUFhQztRQUFTO2tCQUNoRUU7Ozs7OztBQUdQLEVBQUU7QUFFSyxNQUFNRyxjQUFjLElBQU1WLGlEQUFVQSxDQUFDRSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wZXJzb25hbC1ibG9nLy4vc3JjL2NvbnRleHRzL0xhbmd1YWdlQ29udGV4dC50c3g/NDE4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIExhbmd1YWdlQ29udGV4dFR5cGUge1xyXG4gIGxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgc2V0TGFuZ3VhZ2U6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+O1xyXG4gIGJsb2dOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMYW5ndWFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PExhbmd1YWdlQ29udGV4dFR5cGU+KHsgbGFuZ3VhZ2U6ICdlbicsIHNldExhbmd1YWdlOiAoKSA9PiB7fSwgYmxvZ05hbWU6ICdESFN0b3JtaFxcJ3MgQmxvZycgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKCdlbicpO1xyXG4gIGNvbnN0IGJsb2dOYW1lID0gbGFuZ3VhZ2UgPT09ICdlbicgPyAnREhTdG9ybWhcXCdzIEJsb2cnIDogJ0RIU3Rvcm1o55qE5Y2a5a6iJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYW5ndWFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbGFuZ3VhZ2UsIHNldExhbmd1YWdlLCBibG9nTmFtZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VMYW5ndWFnZSA9ICgpID0+IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJMYW5ndWFnZUNvbnRleHQiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiYmxvZ05hbWUiLCJMYW5ndWFnZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJQcm92aWRlciIsInZhbHVlIiwidXNlTGFuZ3VhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/LanguageContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/LanguageContext */ \"./src/contexts/LanguageContext.tsx\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_2__.LanguageProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"E:\\\\my_site\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\my_site\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUNnQztBQUcvRCxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQy9DLHFCQUNFLDhEQUFDSCx1RUFBZ0JBO2tCQUNmLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wZXJzb25hbC1ibG9nLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvTGFuZ3VhZ2VDb250ZXh0JztcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExhbmd1YWdlUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvTGFuZ3VhZ2VQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiTGFuZ3VhZ2VQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();