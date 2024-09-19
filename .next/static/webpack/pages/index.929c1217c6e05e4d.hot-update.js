"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/LanguageContext */ \"./contexts/LanguageContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    const [isDarkMode, setIsDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { language, setLanguage } = (0,_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_3__.useLanguage)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedTheme = localStorage.getItem(\"theme\");\n        setIsDarkMode(savedTheme === \"dark\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.body.classList.toggle(\"dark-mode\", isDarkMode);\n        localStorage.setItem(\"theme\", isDarkMode ? \"dark\" : \"light\");\n    }, [\n        isDarkMode\n    ]);\n    const toggleTheme = ()=>{\n        setIsDarkMode(!isDarkMode);\n    };\n    const toggleLanguage = ()=>{\n        setLanguage(language === \"zh\" ? \"en\" : \"zh\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header flex justify-between items-center p-4 bg-gray-800 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex space-x-50\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        className: \"text-white hover:text-gray-300\",\n                        children: language === \"zh\" ? \"首页\" : \"Home\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/about\",\n                        className: \"text-white hover:text-gray-300\",\n                        children: language === \"zh\" ? \"关于\" : \"About\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/friends\",\n                        className: \"text-white hover:text-gray-300\",\n                        children: language === \"zh\" ? \"友链\" : \"Friends\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header-buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleLanguage,\n                        className: \"language-toggle\",\n                        children: language === \"zh\" ? \"EN\" : \"中文\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleTheme,\n                        className: \"theme-toggle\",\n                        children: isDarkMode ? \"\\uD83C\\uDF1E\" : \"\\uD83C\\uDF19\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Personal_website\\\\my_site\\\\components\\\\Header.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"HyZMA7UCD+Ox5A8+1ohqC34xX6g=\", false, function() {\n    return [\n        _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_3__.useLanguage\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNmO0FBQzZCO0FBRTNDLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxFQUFFTyxRQUFRLEVBQUVDLFdBQVcsRUFBRSxHQUFHTCxzRUFBV0E7SUFFN0NGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsYUFBYUMsYUFBYUMsT0FBTyxDQUFDO1FBQ3hDTCxjQUFjRyxlQUFlO0lBQy9CLEdBQUcsRUFBRTtJQUVMUixnREFBU0EsQ0FBQztRQUNSVyxTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGFBQWFWO1FBQzVDSyxhQUFhTSxPQUFPLENBQUMsU0FBU1gsYUFBYSxTQUFTO0lBQ3RELEdBQUc7UUFBQ0E7S0FBVztJQUVmLE1BQU1ZLGNBQWM7UUFDbEJYLGNBQWMsQ0FBQ0Q7SUFDakI7SUFFQSxNQUFNYSxpQkFBaUI7UUFDckJWLFlBQVlELGFBQWEsT0FBTyxPQUFPO0lBQ3pDO0lBRUEscUJBQ0UsOERBQUNZO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ0M7Z0JBQUlELFdBQVU7O29CQUFrQjtrQ0FDL0IsOERBQUNsQixrREFBSUE7d0JBQUNvQixNQUFLO3dCQUFJRixXQUFVO2tDQUN0QmIsYUFBYSxPQUFPLE9BQU87Ozs7OztrQ0FFOUIsOERBQUNMLGtEQUFJQTt3QkFBQ29CLE1BQUs7d0JBQVNGLFdBQVU7a0NBQzNCYixhQUFhLE9BQU8sT0FBTzs7Ozs7O2tDQUU5Qiw4REFBQ0wsa0RBQUlBO3dCQUFDb0IsTUFBSzt3QkFBV0YsV0FBVTtrQ0FDN0JiLGFBQWEsT0FBTyxPQUFPOzs7Ozs7Ozs7Ozs7MEJBR2hDLDhEQUFDZ0I7Z0JBQUlILFdBQVU7O2tDQUNiLDhEQUFDSTt3QkFBT0MsU0FBU1A7d0JBQWdCRSxXQUFVO2tDQUN4Q2IsYUFBYSxPQUFPLE9BQU87Ozs7OztrQ0FFOUIsOERBQUNpQjt3QkFBT0MsU0FBU1I7d0JBQWFHLFdBQVU7a0NBQ3JDZixhQUFhLGlCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0I7R0E3Q3dCRDs7UUFFWUQsa0VBQVdBOzs7S0FGdkJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeD8wMzY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlIH0gZnJvbSAnLi4vY29udGV4dHMvTGFuZ3VhZ2VDb250ZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbaXNEYXJrTW9kZSwgc2V0SXNEYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBsYW5ndWFnZSwgc2V0TGFuZ3VhZ2UgfSA9IHVzZUxhbmd1YWdlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzYXZlZFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XHJcbiAgICBzZXRJc0RhcmtNb2RlKHNhdmVkVGhlbWUgPT09ICdkYXJrJyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLW1vZGUnLCBpc0RhcmtNb2RlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIGlzRGFya01vZGUgPyAnZGFyaycgOiAnbGlnaHQnKTtcclxuICB9LCBbaXNEYXJrTW9kZV0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcclxuICAgIHNldElzRGFya01vZGUoIWlzRGFya01vZGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUxhbmd1YWdlID0gKCkgPT4ge1xyXG4gICAgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UgPT09ICd6aCcgPyAnZW4nIDogJ3poJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTQgYmctZ3JheS04MDAgdGV4dC13aGl0ZVwiPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC01MFwiPiB7Lyog5bCG6Ze06Led5aKe5Yqg5YiwIHNwYWNlLXgtNTAgKi99XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3poJyA/ICfpppbpobUnIDogJ0hvbWUnfVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICd6aCcgPyAn5YWz5LqOJyA6ICdBYm91dCd9XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZnJpZW5kc1wiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAge2xhbmd1YWdlID09PSAnemgnID8gJ+WPi+mTvicgOiAnRnJpZW5kcyd9XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnV0dG9uc1wiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTGFuZ3VhZ2V9IGNsYXNzTmFtZT1cImxhbmd1YWdlLXRvZ2dsZVwiPlxyXG4gICAgICAgICAge2xhbmd1YWdlID09PSAnemgnID8gJ0VOJyA6ICfkuK3mlocnfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlVGhlbWV9IGNsYXNzTmFtZT1cInRoZW1lLXRvZ2dsZVwiPlxyXG4gICAgICAgICAge2lzRGFya01vZGUgPyAn8J+MnicgOiAn8J+MmSd9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJ1c2VMYW5ndWFnZSIsIkhlYWRlciIsImlzRGFya01vZGUiLCJzZXRJc0RhcmtNb2RlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInNhdmVkVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2V0SXRlbSIsInRvZ2dsZVRoZW1lIiwidG9nZ2xlTGFuZ3VhZ2UiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJuYXYiLCJocmVmIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});