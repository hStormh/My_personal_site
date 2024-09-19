"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/LanguageContext */ \"./contexts/LanguageContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    const [isDarkMode, setIsDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { language, setLanguage } = (0,_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_3__.useLanguage)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedTheme = localStorage.getItem(\"theme\");\n        setIsDarkMode(savedTheme === \"dark\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.body.classList.toggle(\"dark-mode\", isDarkMode);\n        localStorage.setItem(\"theme\", isDarkMode ? \"dark\" : \"light\");\n    }, [\n        isDarkMode\n    ]);\n    const toggleTheme = ()=>{\n        setIsDarkMode(!isDarkMode);\n    };\n    const toggleLanguage = ()=>{\n        setLanguage(language === \"zh\" ? \"en\" : \"zh\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header flex justify-between items-center p-4 bg-gray-800 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                style: {\n                    display: \"flex\",\n                    gap: \"5rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        style: {\n                            color: \"white\",\n                            padding: \"0.5rem 1rem\"\n                        },\n                        children: language === \"zh\" ? \"首页\" : \"Home\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/about\",\n                        style: {\n                            color: \"white\",\n                            padding: \"0.5rem 1rem\"\n                        },\n                        children: language === \"zh\" ? \"关于\" : \"About\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/friends\",\n                        style: {\n                            color: \"white\",\n                            padding: \"0.5rem 1rem\"\n                        },\n                        children: language === \"zh\" ? \"友链\" : \"Friends\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header-buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleLanguage,\n                        className: \"language-toggle\",\n                        children: language === \"zh\" ? \"EN\" : \"中文\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleTheme,\n                        className: \"theme-toggle\",\n                        children: isDarkMode ? \"\\uD83C\\uDF1E\" : \"\\uD83C\\uDF19\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"HyZMA7UCD+Ox5A8+1ohqC34xX6g=\", false, function() {\n    return [\n        _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_3__.useLanguage\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNmO0FBQzZCO0FBRTNDLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxFQUFFTyxRQUFRLEVBQUVDLFdBQVcsRUFBRSxHQUFHTCxzRUFBV0E7SUFFN0NGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsYUFBYUMsYUFBYUMsT0FBTyxDQUFDO1FBQ3hDTCxjQUFjRyxlQUFlO0lBQy9CLEdBQUcsRUFBRTtJQUVMUixnREFBU0EsQ0FBQztRQUNSVyxTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGFBQWFWO1FBQzVDSyxhQUFhTSxPQUFPLENBQUMsU0FBU1gsYUFBYSxTQUFTO0lBQ3RELEdBQUc7UUFBQ0E7S0FBVztJQUVmLE1BQU1ZLGNBQWM7UUFDbEJYLGNBQWMsQ0FBQ0Q7SUFDakI7SUFFQSxNQUFNYSxpQkFBaUI7UUFDckJWLFlBQVlELGFBQWEsT0FBTyxPQUFPO0lBQ3pDO0lBRUEscUJBQ0UsOERBQUNZO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ0M7Z0JBQUlDLE9BQU87b0JBQUVDLFNBQVM7b0JBQVFDLEtBQUs7Z0JBQU87O2tDQUN6Qyw4REFBQ3RCLGtEQUFJQTt3QkFBQ3VCLE1BQUs7d0JBQUlILE9BQU87NEJBQUVJLE9BQU87NEJBQVNDLFNBQVM7d0JBQWM7a0NBQzVEcEIsYUFBYSxPQUFPLE9BQU87Ozs7OztrQ0FFOUIsOERBQUNMLGtEQUFJQTt3QkFBQ3VCLE1BQUs7d0JBQVNILE9BQU87NEJBQUVJLE9BQU87NEJBQVNDLFNBQVM7d0JBQWM7a0NBQ2pFcEIsYUFBYSxPQUFPLE9BQU87Ozs7OztrQ0FFOUIsOERBQUNMLGtEQUFJQTt3QkFBQ3VCLE1BQUs7d0JBQVdILE9BQU87NEJBQUVJLE9BQU87NEJBQVNDLFNBQVM7d0JBQWM7a0NBQ25FcEIsYUFBYSxPQUFPLE9BQU87Ozs7Ozs7Ozs7OzswQkFHaEMsOERBQUNxQjtnQkFBSVIsV0FBVTs7a0NBQ2IsOERBQUNTO3dCQUFPQyxTQUFTWjt3QkFBZ0JFLFdBQVU7a0NBQ3hDYixhQUFhLE9BQU8sT0FBTzs7Ozs7O2tDQUU5Qiw4REFBQ3NCO3dCQUFPQyxTQUFTYjt3QkFBYUcsV0FBVTtrQ0FDckNmLGFBQWEsaUJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQjtHQTdDd0JEOztRQUVZRCxrRUFBV0E7OztLQUZ2QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4PzAzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2UgfSBmcm9tICcuLi9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtpc0RhcmtNb2RlLCBzZXRJc0RhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGxhbmd1YWdlLCBzZXRMYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2UoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcclxuICAgIHNldElzRGFya01vZGUoc2F2ZWRUaGVtZSA9PT0gJ2RhcmsnKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmstbW9kZScsIGlzRGFya01vZGUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgaXNEYXJrTW9kZSA/ICdkYXJrJyA6ICdsaWdodCcpO1xyXG4gIH0sIFtpc0RhcmtNb2RlXSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG4gICAgc2V0SXNEYXJrTW9kZSghaXNEYXJrTW9kZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTGFuZ3VhZ2UgPSAoKSA9PiB7XHJcbiAgICBzZXRMYW5ndWFnZShsYW5ndWFnZSA9PT0gJ3poJyA/ICdlbicgOiAnemgnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtNCBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIDxuYXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc1cmVtJyB9fT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBwYWRkaW5nOiAnMC41cmVtIDFyZW0nIH19PlxyXG4gICAgICAgICAge2xhbmd1YWdlID09PSAnemgnID8gJ+mmlumhtScgOiAnSG9tZSd9XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgcGFkZGluZzogJzAuNXJlbSAxcmVtJyB9fT5cclxuICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3poJyA/ICflhbPkuo4nIDogJ0Fib3V0J31cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9mcmllbmRzXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICcwLjVyZW0gMXJlbScgfX0+XHJcbiAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICd6aCcgPyAn5Y+L6ZO+JyA6ICdGcmllbmRzJ31cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1idXR0b25zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVMYW5ndWFnZX0gY2xhc3NOYW1lPVwibGFuZ3VhZ2UtdG9nZ2xlXCI+XHJcbiAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICd6aCcgPyAnRU4nIDogJ+S4reaWhyd9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVUaGVtZX0gY2xhc3NOYW1lPVwidGhlbWUtdG9nZ2xlXCI+XHJcbiAgICAgICAgICB7aXNEYXJrTW9kZSA/ICfwn4yeJyA6ICfwn4yZJ31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsInVzZUxhbmd1YWdlIiwiSGVhZGVyIiwiaXNEYXJrTW9kZSIsInNldElzRGFya01vZGUiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwic2F2ZWRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzZXRJdGVtIiwidG9nZ2xlVGhlbWUiLCJ0b2dnbGVMYW5ndWFnZSIsImhlYWRlciIsImNsYXNzTmFtZSIsIm5hdiIsInN0eWxlIiwiZGlzcGxheSIsImdhcCIsImhyZWYiLCJjb2xvciIsInBhZGRpbmciLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});