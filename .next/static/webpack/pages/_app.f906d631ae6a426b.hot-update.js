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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* 其他自定义样式 */\\r\\n\\r\\nbody {\\r\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\r\\n  line-height: 1.6;\\r\\n  color: #333;\\r\\n  background-color: #fff;\\r\\n  transition: background-color 0.3s, color 0.3s;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\nbody.dark-mode {\\r\\n  color: #f0f0f0;\\r\\n  background-color: #222;\\r\\n}\\r\\n\\r\\n.layout {\\r\\n  max-width: 800px;\\r\\n  margin: 0 auto;\\r\\n  padding: 20px;\\r\\n  flex: 1 1;\\r\\n}\\r\\n\\r\\nh1, h2 {\\r\\n  color: #2c3e50;\\r\\n}\\r\\n\\r\\nbody.dark-mode h1, body.dark-mode h2 {\\r\\n  color: #ecf0f1;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #3498db;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbody.dark-mode a {\\r\\n  color: #5dade2;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 1rem;\\r\\n  background-color: #000000; /* 将导航栏背景改为纯黑色 */\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.header-left {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: bold;\\r\\n  margin-right: 2rem; /* 在logo和导航之间添加一些间距 */\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n  gap: 2.5rem;  /* 将间距从 5rem 减少到 2.5rem */\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  color: white;\\r\\n  padding: 0.5rem 1rem;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.nav-link:hover {\\r\\n  color: #cbd5e0;\\r\\n}\\r\\n\\r\\n.content-wrapper {\\r\\n  display: flex;\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  flex: 1 1;\\r\\n}\\r\\n\\r\\n.sidebar {\\r\\n  width: 250px;\\r\\n  flex-shrink: 0;\\r\\n}\\r\\n\\r\\n.profile-card {\\r\\n  background-color: #000000; /* 将背景色改为黑色 */\\r\\n  border-radius: 10px;\\r\\n  padding: 1rem;\\r\\n  text-align: center;\\r\\n  color: #ffffff; /* 将文字颜色改为白色，以便在黑色背景上清晰可见 */\\r\\n}\\r\\n\\r\\nbody.dark-mode .profile-card {\\r\\n  background-color: #1a1a1a; /* 深色模式下稍微亮一点的黑色 */\\r\\n}\\r\\n\\r\\n.profile-image {\\r\\n  border-radius: 50%;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.profile-card h2 {\\r\\n  margin-bottom: 0.5rem;\\r\\n  color: #ffffff; /* 确保标题也是白色 */\\r\\n}\\r\\n\\r\\n.profile-card p {\\r\\n  font-size: 0.9rem;\\r\\n  color: #e0e0e0; /* 稍微柔和一点的白色，以增加可读性 */\\r\\n  white-space: pre-line;  /* 这将保留换行符 */\\r\\n  line-height: 1.4;  /* 调整行高以适应更多文本 */\\r\\n}\\r\\n\\r\\nbody.dark-mode .profile-card p {\\r\\n  color: #bbb; /* 深色模式下保持原来的颜色 */\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .content-wrapper {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .sidebar {\\r\\n    width: 100%;\\r\\n    margin-top: 2rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n.header-buttons {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.language-toggle,\\r\\n.theme-toggle {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  font-size: 1rem;\\r\\n  cursor: pointer;\\r\\n  padding: 0.5rem;\\r\\n  margin-left: 0.5rem;\\r\\n}\\r\\n\\r\\n.language-toggle {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nbody.dark-mode .language-toggle,\\r\\nbody.dark-mode .theme-toggle {\\r\\n  color: #f0f0f0;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: #f5f5f7; /* 类似苹果原生应用的浅灰色 */\\r\\n  padding: 1rem;\\r\\n  text-align: center;\\r\\n  margin-top: auto; /* 确保footer始终在底部 */\\r\\n}\\r\\n\\r\\nbody.dark-mode footer {\\r\\n  background-color: #1c1c1e; /* 深色模式下的深灰色 */\\r\\n  color: #f0f0f0;\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,YAAY;;AAEZ;EACE,wIAAwI;EACxI,gBAAgB;EAChB,WAAW;EACX,sBAAsB;EACtB,6CAA6C;EAC7C,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,aAAa;EACb,SAAO;AACT;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,yBAAyB,EAAE,gBAAgB;EAC3C,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB,EAAE,qBAAqB;AAC3C;;AAEA;EACE,aAAa;EACb,WAAW,GAAG,yBAAyB;AACzC;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,SAAO;AACT;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,yBAAyB,EAAE,aAAa;EACxC,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,cAAc,EAAE,2BAA2B;AAC7C;;AAEA;EACE,yBAAyB,EAAE,kBAAkB;AAC/C;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,cAAc,EAAE,aAAa;AAC/B;;AAEA;EACE,iBAAiB;EACjB,cAAc,EAAE,qBAAqB;EACrC,qBAAqB,GAAG,YAAY;EACpC,gBAAgB,GAAG,gBAAgB;AACrC;;AAEA;EACE,WAAW,EAAE,iBAAiB;AAChC;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,gBAAgB;EAClB;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,yBAAyB,EAAE,iBAAiB;EAC5C,aAAa;EACb,kBAAkB;EAClB,gBAAgB,EAAE,kBAAkB;AACtC;;AAEA;EACE,yBAAyB,EAAE,cAAc;EACzC,cAAc;AAChB\",\"sourcesContent\":[\"/* 其他自定义样式 */\\r\\n\\r\\nbody {\\r\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\r\\n  line-height: 1.6;\\r\\n  color: #333;\\r\\n  background-color: #fff;\\r\\n  transition: background-color 0.3s, color 0.3s;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\nbody.dark-mode {\\r\\n  color: #f0f0f0;\\r\\n  background-color: #222;\\r\\n}\\r\\n\\r\\n.layout {\\r\\n  max-width: 800px;\\r\\n  margin: 0 auto;\\r\\n  padding: 20px;\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\nh1, h2 {\\r\\n  color: #2c3e50;\\r\\n}\\r\\n\\r\\nbody.dark-mode h1, body.dark-mode h2 {\\r\\n  color: #ecf0f1;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #3498db;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbody.dark-mode a {\\r\\n  color: #5dade2;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 1rem;\\r\\n  background-color: #000000; /* 将导航栏背景改为纯黑色 */\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.header-left {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: bold;\\r\\n  margin-right: 2rem; /* 在logo和导航之间添加一些间距 */\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n  gap: 2.5rem;  /* 将间距从 5rem 减少到 2.5rem */\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  color: white;\\r\\n  padding: 0.5rem 1rem;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.nav-link:hover {\\r\\n  color: #cbd5e0;\\r\\n}\\r\\n\\r\\n.content-wrapper {\\r\\n  display: flex;\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.sidebar {\\r\\n  width: 250px;\\r\\n  flex-shrink: 0;\\r\\n}\\r\\n\\r\\n.profile-card {\\r\\n  background-color: #000000; /* 将背景色改为黑色 */\\r\\n  border-radius: 10px;\\r\\n  padding: 1rem;\\r\\n  text-align: center;\\r\\n  color: #ffffff; /* 将文字颜色改为白色，以便在黑色背景上清晰可见 */\\r\\n}\\r\\n\\r\\nbody.dark-mode .profile-card {\\r\\n  background-color: #1a1a1a; /* 深色模式下稍微亮一点的黑色 */\\r\\n}\\r\\n\\r\\n.profile-image {\\r\\n  border-radius: 50%;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.profile-card h2 {\\r\\n  margin-bottom: 0.5rem;\\r\\n  color: #ffffff; /* 确保标题也是白色 */\\r\\n}\\r\\n\\r\\n.profile-card p {\\r\\n  font-size: 0.9rem;\\r\\n  color: #e0e0e0; /* 稍微柔和一点的白色，以增加可读性 */\\r\\n  white-space: pre-line;  /* 这将保留换行符 */\\r\\n  line-height: 1.4;  /* 调整行高以适应更多文本 */\\r\\n}\\r\\n\\r\\nbody.dark-mode .profile-card p {\\r\\n  color: #bbb; /* 深色模式下保持原来的颜色 */\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .content-wrapper {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .sidebar {\\r\\n    width: 100%;\\r\\n    margin-top: 2rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n.header-buttons {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.language-toggle,\\r\\n.theme-toggle {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  font-size: 1rem;\\r\\n  cursor: pointer;\\r\\n  padding: 0.5rem;\\r\\n  margin-left: 0.5rem;\\r\\n}\\r\\n\\r\\n.language-toggle {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nbody.dark-mode .language-toggle,\\r\\nbody.dark-mode .theme-toggle {\\r\\n  color: #f0f0f0;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: #f5f5f7; /* 类似苹果原生应用的浅灰色 */\\r\\n  padding: 1rem;\\r\\n  text-align: center;\\r\\n  margin-top: auto; /* 确保footer始终在底部 */\\r\\n}\\r\\n\\r\\nbody.dark-mode footer {\\r\\n  background-color: #1c1c1e; /* 深色模式下的深灰色 */\\r\\n  color: #f0f0f0;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHFFQUFxRSwrSUFBK0ksdUJBQXVCLGtCQUFrQiw2QkFBNkIsb0RBQW9ELG9CQUFvQiw2QkFBNkIsd0JBQXdCLEtBQUssd0JBQXdCLHFCQUFxQiw2QkFBNkIsS0FBSyxpQkFBaUIsdUJBQXVCLHFCQUFxQixvQkFBb0IsZ0JBQWdCLEtBQUssZ0JBQWdCLHFCQUFxQixLQUFLLDhDQUE4QyxxQkFBcUIsS0FBSyxXQUFXLHFCQUFxQiw0QkFBNEIsS0FBSywwQkFBMEIscUJBQXFCLEtBQUssaUJBQWlCLGlDQUFpQyxLQUFLLGlCQUFpQixvQkFBb0IscUNBQXFDLDBCQUEwQixvQkFBb0IsaUNBQWlDLG9DQUFvQyxLQUFLLHNCQUFzQixvQkFBb0IsMEJBQTBCLEtBQUssZUFBZSx3QkFBd0Isd0JBQXdCLDBCQUEwQiwyQkFBMkIsY0FBYyxvQkFBb0Isb0JBQW9CLCtCQUErQixtQkFBbUIsbUJBQW1CLDJCQUEyQiw0QkFBNEIsS0FBSyx5QkFBeUIscUJBQXFCLEtBQUssMEJBQTBCLG9CQUFvQixnQkFBZ0IsS0FBSyxjQUFjLGdCQUFnQixLQUFLLGtCQUFrQixtQkFBbUIscUJBQXFCLEtBQUssdUJBQXVCLGlDQUFpQyx3Q0FBd0Msb0JBQW9CLHlCQUF5QixzQkFBc0IsaUNBQWlDLHNDQUFzQyxpQ0FBaUMsd0JBQXdCLHdCQUF3Qix5QkFBeUIs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QUF5QixPQUFPLEtBQUsseUJBQXlCLG9CQUFvQiwwQkFBMEIsS0FBSyw0Q0FBNEMsdUJBQXVCLG1CQUFtQixzQkFBc0Isc0JBQXNCLHNCQUFzQiwwQkFBMEIsS0FBSywwQkFBMEIsd0JBQXdCLEtBQUssMEVBQTBFLHFCQUFxQixLQUFLLGdCQUFnQixpQ0FBaUMsc0NBQXNDLHlCQUF5Qix3QkFBd0Isd0JBQXdCLCtCQUErQixpQ0FBaUMsb0NBQW9DLEtBQUssbUJBQW1CO0FBQzV5UDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz9hNjNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiDlhbbku5boh6rlrprkuYnmoLflvI8gKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBjb2xvciAwLjNzO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLW1vZGUge1xcclxcbiAgY29sb3I6ICNmMGYwZjA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF5b3V0IHtcXHJcXG4gIG1heC13aWR0aDogODAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBmbGV4OiAxIDE7XFxyXFxufVxcclxcblxcclxcbmgxLCBoMiB7XFxyXFxuICBjb2xvcjogIzJjM2U1MDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLW1vZGUgaDEsIGJvZHkuZGFyay1tb2RlIGgyIHtcXHJcXG4gIGNvbG9yOiAjZWNmMGYxO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiAjMzQ5OGRiO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmRhcmstbW9kZSBhIHtcXHJcXG4gIGNvbG9yOiAjNWRhZGUyO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7IC8qIOWwhuWvvOiIquagj+iDjOaZr+aUueS4uue6r+m7keiJsiAqL1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxlZnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07IC8qIOWcqGxvZ2/lkozlr7zoiKrkuYvpl7Tmt7vliqDkuIDkupvpl7Tot50gKi9cXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyLjVyZW07ICAvKiDlsIbpl7Tot53ku44gNXJlbSDlh4/lsJHliLAgMi41cmVtICovXFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjY2JkNWUwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZmxleDogMSAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyAvKiDlsIbog4zmma/oibLmlLnkuLrpu5HoibIgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7IC8qIOWwhuaWh+Wtl+minOiJsuaUueS4uueZveiJsu+8jOS7peS+v+WcqOm7keiJsuiDjOaZr+S4iua4heaZsOWPr+ingSAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmRhcmstbW9kZSAucHJvZmlsZS1jYXJkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7IC8qIOa3seiJsuaooeW8j+S4i+eojeW+ruS6ruS4gOeCueeahOm7keiJsiAqL1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1pbWFnZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1jYXJkIGgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmOyAvKiDnoa7kv53moIfpopjkuZ/mmK/nmb3oibIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtY2FyZCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY29sb3I6ICNlMGUwZTA7IC8qIOeojeW+ruaflOWSjOS4gOeCueeahOeZveiJsu+8jOS7peWinuWKoOWPr+ivu+aApyAqL1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lOyAgLyog6L+Z5bCG5L+d55WZ5o2i6KGM56ymICovXFxyXFxuICBsaW5lLWhlaWdodDogMS40OyAgLyog6LCD5pW06KGM6auY5Lul6YCC5bqU5pu05aSa5paH5pysICovXFxyXFxufVxcclxcblxcclxcbmJvZHkuZGFyay1tb2RlIC5wcm9maWxlLWNhcmQgcCB7XFxyXFxuICBjb2xvcjogI2JiYjsgLyog5rex6Imy5qih5byP5LiL5L+d5oyB5Y6f5p2l55qE6aKc6ImyICovXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmNvbnRlbnQtd3JhcHBlciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2lkZWJhciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sYW5ndWFnZS10b2dnbGUsXFxyXFxuLnRoZW1lLXRvZ2dsZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmd1YWdlLXRvZ2dsZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLW1vZGUgLmxhbmd1YWdlLXRvZ2dsZSxcXHJcXG5ib2R5LmRhcmstbW9kZSAudGhlbWUtdG9nZ2xlIHtcXHJcXG4gIGNvbG9yOiAjZjBmMGYwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNzsgLyog57G75Ly86Iu55p6c5Y6f55Sf5bqU55So55qE5rWF54Gw6ImyICovXFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bzsgLyog56Gu5L+dZm9vdGVy5aeL57uI5Zyo5bqV6YOoICovXFxyXFxufVxcclxcblxcclxcbmJvZHkuZGFyay1tb2RlIGZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxYzFlOyAvKiDmt7HoibLmqKHlvI/kuIvnmoTmt7HngbDoibIgKi9cXHJcXG4gIGNvbG9yOiAjZjBmMGYwO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFlBQVk7O0FBRVo7RUFDRSx3SUFBd0k7RUFDeEksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsNkNBQTZDO0VBQzdDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFNBQU87QUFDVDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IseUJBQXlCLEVBQUUsZ0JBQWdCO0VBQzNDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFFLHFCQUFxQjtBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXLEdBQUcseUJBQXlCO0FBQ3pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQU87QUFDVDs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsYUFBYTtFQUN4QyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjLEVBQUUsMkJBQTJCO0FBQzdDOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsa0JBQWtCO0FBQy9DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjLEVBQUUsYUFBYTtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjLEVBQUUscUJBQXFCO0VBQ3JDLHFCQUFxQixHQUFHLFlBQVk7RUFDcEMsZ0JBQWdCLEdBQUcsZ0JBQWdCO0FBQ3JDOztBQUVBO0VBQ0UsV0FBVyxFQUFFLGlCQUFpQjtBQUNoQzs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsaUJBQWlCO0VBQzVDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUUsa0JBQWtCO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsY0FBYztFQUN6QyxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIOWFtuS7luiHquWumuS5ieagt+W8jyAqL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmRhcmstbW9kZSB7XFxyXFxuICBjb2xvcjogI2YwZjBmMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxufVxcclxcblxcclxcbi5sYXlvdXQge1xcclxcbiAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbmgxLCBoMiB7XFxyXFxuICBjb2xvcjogIzJjM2U1MDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLW1vZGUgaDEsIGJvZHkuZGFyay1tb2RlIGgyIHtcXHJcXG4gIGNvbG9yOiAjZWNmMGYxO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiAjMzQ5OGRiO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmRhcmstbW9kZSBhIHtcXHJcXG4gIGNvbG9yOiAjNWRhZGUyO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7IC8qIOWwhuWvvOiIquagj+iDjOaZr+aUueS4uue6r+m7keiJsiAqL1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxlZnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07IC8qIOWcqGxvZ2/lkozlr7zoiKrkuYvpl7Tmt7vliqDkuIDkupvpl7Tot50gKi9cXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyLjVyZW07ICAvKiDlsIbpl7Tot53ku44gNXJlbSDlh4/lsJHliLAgMi41cmVtICovXFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjY2JkNWUwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLWNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgLyog5bCG6IOM5pmv6Imy5pS55Li66buR6ImyICovXFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmOyAvKiDlsIbmloflrZfpopzoibLmlLnkuLrnmb3oibLvvIzku6Xkvr/lnKjpu5HoibLog4zmma/kuIrmuIXmmbDlj6/op4EgKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLW1vZGUgLnByb2ZpbGUtY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhOyAvKiDmt7HoibLmqKHlvI/kuIvnqI3lvq7kuq7kuIDngrnnmoTpu5HoibIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtaW1hZ2Uge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtY2FyZCBoMiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZmZmZjsgLyog56Gu5L+d5qCH6aKY5Lmf5piv55m96ImyICovXFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLWNhcmQgcCB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGNvbG9yOiAjZTBlMGUwOyAvKiDnqI3lvq7mn5TlkozkuIDngrnnmoTnmb3oibLvvIzku6Xlop7liqDlj6/or7vmgKcgKi9cXHJcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTsgIC8qIOi/meWwhuS/neeVmeaNouihjOespiAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNDsgIC8qIOiwg+aVtOihjOmrmOS7pemAguW6lOabtOWkmuaWh+acrCAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmRhcmstbW9kZSAucHJvZmlsZS1jYXJkIHAge1xcclxcbiAgY29sb3I6ICNiYmI7IC8qIOa3seiJsuaooeW8j+S4i+S/neaMgeWOn+adpeeahOminOiJsiAqL1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5jb250ZW50LXdyYXBwZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNpZGViYXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZ3VhZ2UtdG9nZ2xlLFxcclxcbi50aGVtZS10b2dnbGUge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sYW5ndWFnZS10b2dnbGUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkuZGFyay1tb2RlIC5sYW5ndWFnZS10b2dnbGUsXFxyXFxuYm9keS5kYXJrLW1vZGUgLnRoZW1lLXRvZ2dsZSB7XFxyXFxuICBjb2xvcjogI2YwZjBmMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1Zjc7IC8qIOexu+S8vOiLueaenOWOn+eUn+W6lOeUqOeahOa1heeBsOiJsiAqL1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87IC8qIOehruS/nWZvb3RlcuWni+e7iOWcqOW6lemDqCAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmRhcmstbW9kZSBmb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxZTsgLyog5rex6Imy5qih5byP5LiL55qE5rex54Gw6ImyICovXFxyXFxuICBjb2xvcjogI2YwZjBmMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});