"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@tailwind base;\\r\\n@tailwind components;\\r\\n@tailwind utilities;\\r\\n\\r\\nbody {\\r\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\r\\n  line-height: 1.6;\\r\\n  color: #333;\\r\\n  background-color: #fff;\\r\\n  transition: background-color 0.3s, color 0.3s;\\r\\n}\\r\\n\\r\\nbody.dark-mode {\\r\\n  color: #f0f0f0;\\r\\n  background-color: #222;\\r\\n}\\r\\n\\r\\n.layout {\\r\\n  max-width: 800px;\\r\\n  margin: 0 auto;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\nh1, h2 {\\r\\n  color: #2c3e50;\\r\\n}\\r\\n\\r\\nbody.dark-mode h1, body.dark-mode h2 {\\r\\n  color: #ecf0f1;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #3498db;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbody.dark-mode a {\\r\\n  color: #5dade2;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 1rem 0;\\r\\n}\\r\\n\\r\\n.theme-toggle {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  font-size: 1.5rem;\\r\\n  cursor: pointer;\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\nbody.dark-mode .theme-toggle {\\r\\n  color: #f0f0f0;\\r\\n}\\r\\n\\r\\n.content-wrapper {\\r\\n  display: flex;\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  flex: 1 1;\\r\\n}\\r\\n\\r\\n.sidebar {\\r\\n  width: 250px;\\r\\n  flex-shrink: 0;\\r\\n}\\r\\n\\r\\n.profile-card {\\r\\n  background-color: #f0f0f0;\\r\\n  border-radius: 10px;\\r\\n  padding: 1rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nbody.dark-mode .profile-card {\\r\\n  background-color: #333;\\r\\n}\\r\\n\\r\\n.profile-image {\\r\\n  border-radius: 50%;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.profile-card h2 {\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n.profile-card p {\\r\\n  font-size: 0.9rem;\\r\\n  color: #666;\\r\\n  white-space: pre-line;  /* 这将保留换行符 */\\r\\n  line-height: 1.4;  /* 调整行高以适应更多文本 */\\r\\n}\\r\\n\\r\\nbody.dark-mode .profile-card p {\\r\\n  color: #bbb;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .content-wrapper {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .sidebar {\\r\\n    width: 100%;\\r\\n    margin-top: 2rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n.header-buttons {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.language-toggle,\\r\\n.theme-toggle {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  font-size: 1rem;\\r\\n  cursor: pointer;\\r\\n  padding: 0.5rem;\\r\\n  margin-left: 0.5rem;\\r\\n}\\r\\n\\r\\n.language-toggle {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nbody.dark-mode .language-toggle,\\r\\nbody.dark-mode .theme-toggle {\\r\\n  color: #f0f0f0;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  @apply mr-6 hover:text-gray-300;\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,cAAc;AACd,oBAAoB;AACpB,mBAAmB;;AAEnB;EACE,wIAAwI;EACxI,gBAAgB;EAChB,WAAW;EACX,sBAAsB;EACtB,6CAA6C;AAC/C;;AAEA;EACE,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,SAAO;AACT;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,qBAAqB,GAAG,YAAY;EACpC,gBAAgB,GAAG,gBAAgB;AACrC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,gBAAgB;EAClB;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,+BAA+B;AACjC\",\"sourcesContent\":[\"@tailwind base;\\r\\n@tailwind components;\\r\\n@tailwind utilities;\\r\\n\\r\\nbody {\\r\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\r\\n  line-height: 1.6;\\r\\n  color: #333;\\r\\n  background-color: #fff;\\r\\n  transition: background-color 0.3s, color 0.3s;\\r\\n}\\r\\n\\r\\nbody.dark-mode {\\r\\n  color: #f0f0f0;\\r\\n  background-color: #222;\\r\\n}\\r\\n\\r\\n.layout {\\r\\n  max-width: 800px;\\r\\n  margin: 0 auto;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\nh1, h2 {\\r\\n  color: #2c3e50;\\r\\n}\\r\\n\\r\\nbody.dark-mode h1, body.dark-mode h2 {\\r\\n  color: #ecf0f1;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #3498db;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbody.dark-mode a {\\r\\n  color: #5dade2;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 1rem 0;\\r\\n}\\r\\n\\r\\n.theme-toggle {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  font-size: 1.5rem;\\r\\n  cursor: pointer;\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\nbody.dark-mode .theme-toggle {\\r\\n  color: #f0f0f0;\\r\\n}\\r\\n\\r\\n.content-wrapper {\\r\\n  display: flex;\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.sidebar {\\r\\n  width: 250px;\\r\\n  flex-shrink: 0;\\r\\n}\\r\\n\\r\\n.profile-card {\\r\\n  background-color: #f0f0f0;\\r\\n  border-radius: 10px;\\r\\n  padding: 1rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nbody.dark-mode .profile-card {\\r\\n  background-color: #333;\\r\\n}\\r\\n\\r\\n.profile-image {\\r\\n  border-radius: 50%;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.profile-card h2 {\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n.profile-card p {\\r\\n  font-size: 0.9rem;\\r\\n  color: #666;\\r\\n  white-space: pre-line;  /* 这将保留换行符 */\\r\\n  line-height: 1.4;  /* 调整行高以适应更多文本 */\\r\\n}\\r\\n\\r\\nbody.dark-mode .profile-card p {\\r\\n  color: #bbb;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .content-wrapper {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .sidebar {\\r\\n    width: 100%;\\r\\n    margin-top: 2rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n.header-buttons {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.language-toggle,\\r\\n.theme-toggle {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  font-size: 1rem;\\r\\n  cursor: pointer;\\r\\n  padding: 0.5rem;\\r\\n  margin-left: 0.5rem;\\r\\n}\\r\\n\\r\\n.language-toggle {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nbody.dark-mode .language-toggle,\\r\\nbody.dark-mode .theme-toggle {\\r\\n  color: #f0f0f0;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  @apply mr-6 hover:text-gray-300;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHlEQUF5RCx5QkFBeUIsd0JBQXdCLGNBQWMsK0lBQStJLHVCQUF1QixrQkFBa0IsNkJBQTZCLG9EQUFvRCxLQUFLLHdCQUF3QixxQkFBcUIsNkJBQTZCLEtBQUssaUJBQWlCLHVCQUF1QixxQkFBcUIsb0JBQW9CLEtBQUssZ0JBQWdCLHFCQUFxQixLQUFLLDhDQUE4QyxxQkFBcUIsS0FBSyxXQUFXLHFCQUFxQiw0QkFBNEIsS0FBSywwQkFBMEIscUJBQXFCLEtBQUssaUJBQWlCLGlDQUFpQyxLQUFLLGlCQUFpQixvQkFBb0IscUNBQXFDLDBCQUEwQixzQkFBc0IsS0FBSyx1QkFBdUIsdUJBQXVCLG1CQUFtQix3QkFBd0Isc0JBQXNCLHNCQUFzQixLQUFLLHNDQUFzQyxxQkFBcUIsS0FBSywwQkFBMEIsb0JBQW9CLGdCQUFnQixLQUFLLGNBQWMsZ0JBQWdCLEtBQUssa0JBQWtCLG1CQUFtQixxQkFBcUIsS0FBSyx1QkFBdUIsZ0NBQWdDLDBCQUEwQixvQkFBb0IseUJBQXlCLEtBQUssc0NBQXNDLDZCQUE2QixLQUFLLHdCQUF3Qix5QkFBeUIsMEJBQTBCLEtBQUssMEJBQTBCLDRCQUE0QixLQUFLLHlCQUF5Qix3QkFBd0Isa0JBQWtCLDhCQUE4QixzQ0FBc0Msc0JBQXNCLHdDQUF3QyxrQkFBa0IsS0FBSyxtQ0FBbUMsd0JBQXdCLCtCQUErQixPQUFPLG9CQUFvQixvQkFBb0IseUJBQXlCLE9BQU8sS0FBSyx5QkFBeUIsb0JBQW9CLDBCQUEwQixLQUFLLDRDQUE0Qyx1QkFBdUIsbUJBQW1CLHNCQUFzQixzQkFBc0Isc0JBQXNCLDBCQUEwQixLQUFLLDBCQUEwQix3QkFBd0IsS0FBSywwRUFBMEUscUJBQXFCLEtBQUssbUJBQW1CLHNDQUFzQyxLQUFLLE9BQU8sd0ZBQXdGLFlBQVksY0FBYyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxzQkFBc0IseUJBQXlCLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLHlDQUF5Qyx5QkFBeUIsd0JBQXdCLGNBQWMsK0lBQStJLHVCQUF1QixrQkFBa0IsNkJBQTZCLG9EQUFvRCxLQUFLLHdCQUF3QixxQkFBcUIsNkJBQTZCLEtBQUssaUJBQWlCLHVCQUF1QixxQkFBcUIsb0JBQW9CLEtBQUssZ0JBQWdCLHFCQUFxQixLQUFLLDhDQUE4QyxxQkFBcUIsS0FBSyxXQUFXLHFCQUFxQiw0QkFBNEIsS0FBSywwQkFBMEIscUJBQXFCLEtBQUssaUJBQWlCLGlDQUFpQyxLQUFLLGlCQUFpQixvQkFBb0IscUNBQXFDLDBCQUEwQixzQkFBc0IsS0FBSyx1QkFBdUIsdUJBQXVCLG1CQUFtQix3QkFBd0Isc0JBQXNCLHNCQUFzQixLQUFLLHNDQUFzQyxxQkFBcUIsS0FBSywwQkFBMEIsb0JBQW9CLGdCQUFnQixLQUFLLGNBQWMsY0FBYyxLQUFLLGtCQUFrQixtQkFBbUIscUJBQXFCLEtBQUssdUJBQXVCLGdDQUFnQywwQkFBMEIsb0JBQW9CLHlCQUF5QixLQUFLLHNDQUFzQyw2QkFBNkIsS0FBSyx3QkFBd0IseUJBQXlCLDBCQUEwQixLQUFLLDBCQUEwQiw0QkFBNEIsS0FBSyx5QkFBeUIsd0JBQXdCLGtCQUFrQiw4QkFBOEIsc0NBQXNDLHNCQUFzQix3Q0FBd0Msa0JBQWtCLEtBQUssbUNBQW1DLHdCQUF3QiwrQkFBK0IsT0FBTyxvQkFBb0Isb0JBQW9CLHlCQUF5QixPQUFPLEtBQUsseUJBQXlCLG9CQUFvQiwwQkFBMEIsS0FBSyw0Q0FBNEMsdUJBQXVCLG1CQUFtQixzQkFBc0Isc0JBQXNCLHNCQUFzQiwwQkFBMEIsS0FBSywwQkFBMEIsd0JBQXdCLEtBQUssMEVBQTBFLHFCQUFxQixLQUFLLG1CQUFtQixzQ0FBc0MsS0FBSyxtQkFBbUI7QUFDeGtNO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2E2M2MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkB0YWlsd2luZCBiYXNlO1xcclxcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcclxcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgY29sb3IgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLW1vZGUge1xcclxcbiAgY29sb3I6ICNmMGYwZjA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF5b3V0IHtcXHJcXG4gIG1heC13aWR0aDogODAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmgxLCBoMiB7XFxyXFxuICBjb2xvcjogIzJjM2U1MDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLW1vZGUgaDEsIGJvZHkuZGFyay1tb2RlIGgyIHtcXHJcXG4gIGNvbG9yOiAjZWNmMGYxO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiAjMzQ5OGRiO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmRhcmstbW9kZSBhIHtcXHJcXG4gIGNvbG9yOiAjNWRhZGUyO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGhlbWUtdG9nZ2xlIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLW1vZGUgLnRoZW1lLXRvZ2dsZSB7XFxyXFxuICBjb2xvcjogI2YwZjBmMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGZsZXg6IDEgMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLWNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmRhcmstbW9kZSAucHJvZmlsZS1jYXJkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLWltYWdlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLWNhcmQgaDIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1jYXJkIHAge1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBjb2xvcjogIzY2NjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTsgIC8qIOi/meWwhuS/neeVmeaNouihjOespiAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNDsgIC8qIOiwg+aVtOihjOmrmOS7pemAguW6lOabtOWkmuaWh+acrCAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmRhcmstbW9kZSAucHJvZmlsZS1jYXJkIHAge1xcclxcbiAgY29sb3I6ICNiYmI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmNvbnRlbnQtd3JhcHBlciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2lkZWJhciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sYW5ndWFnZS10b2dnbGUsXFxyXFxuLnRoZW1lLXRvZ2dsZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmd1YWdlLXRvZ2dsZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLW1vZGUgLmxhbmd1YWdlLXRvZ2dsZSxcXHJcXG5ib2R5LmRhcmstbW9kZSAudGhlbWUtdG9nZ2xlIHtcXHJcXG4gIGNvbG9yOiAjZjBmMGYwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgQGFwcGx5IG1yLTYgaG92ZXI6dGV4dC1ncmF5LTMwMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBQ2Qsb0JBQW9CO0FBQ3BCLG1CQUFtQjs7QUFFbkI7RUFDRSx3SUFBd0k7RUFDeEksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBTztBQUNUOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxxQkFBcUIsR0FBRyxZQUFZO0VBQ3BDLGdCQUFnQixHQUFHLGdCQUFnQjtBQUNyQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcclxcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcclxcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgY29sb3IgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLW1vZGUge1xcclxcbiAgY29sb3I6ICNmMGYwZjA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF5b3V0IHtcXHJcXG4gIG1heC13aWR0aDogODAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmgxLCBoMiB7XFxyXFxuICBjb2xvcjogIzJjM2U1MDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLW1vZGUgaDEsIGJvZHkuZGFyay1tb2RlIGgyIHtcXHJcXG4gIGNvbG9yOiAjZWNmMGYxO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiAjMzQ5OGRiO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmRhcmstbW9kZSBhIHtcXHJcXG4gIGNvbG9yOiAjNWRhZGUyO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGhlbWUtdG9nZ2xlIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLW1vZGUgLnRoZW1lLXRvZ2dsZSB7XFxyXFxuICBjb2xvcjogI2YwZjBmMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1jYXJkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLW1vZGUgLnByb2ZpbGUtY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1pbWFnZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1jYXJkIGgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtY2FyZCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY29sb3I6ICM2NjY7XFxyXFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7ICAvKiDov5nlsIbkv53nlZnmjaLooYznrKYgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7ICAvKiDosIPmlbTooYzpq5jku6XpgILlupTmm7TlpJrmlofmnKwgKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLW1vZGUgLnByb2ZpbGUtY2FyZCBwIHtcXHJcXG4gIGNvbG9yOiAjYmJiO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5jb250ZW50LXdyYXBwZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNpZGViYXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZ3VhZ2UtdG9nZ2xlLFxcclxcbi50aGVtZS10b2dnbGUge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sYW5ndWFnZS10b2dnbGUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkuZGFyay1tb2RlIC5sYW5ndWFnZS10b2dnbGUsXFxyXFxuYm9keS5kYXJrLW1vZGUgLnRoZW1lLXRvZ2dsZSB7XFxyXFxuICBjb2xvcjogI2YwZjBmMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIEBhcHBseSBtci02IGhvdmVyOnRleHQtZ3JheS0zMDA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});