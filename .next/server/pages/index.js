"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/braulio-rodriguez/Documents/Freelance/projects/arod/automated-roof-damage-detector/pages/index.tsx\";\n\n\nconst HomePage = props => {\n  // console.log(props.images[\"0\"].filename);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Home\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\nconst getStaticProps = async context => {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\n  const images = await prisma.images.findMany();\n  return {\n    props: {\n      images\n    }\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsTUFBTUMsUUFBUSxHQUFJQyxLQUFELElBQWdCO0FBQy9CO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QsQ0FQRDs7QUFTTyxNQUFNQyxjQUE4QixHQUFHLE1BQU9DLE9BQVAsSUFBbUI7QUFDL0QsUUFBTUMsTUFBTSxHQUFHLElBQUlMLHdEQUFKLEVBQWY7QUFDQSxRQUFNTSxNQUFNLEdBQUcsTUFBTUQsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFFBQWQsRUFBckI7QUFFQSxTQUFPO0FBQ0xMLElBQUFBLEtBQUssRUFBRTtBQUFFSSxNQUFBQTtBQUFGO0FBREYsR0FBUDtBQUdELENBUE07QUFTUCxpRUFBZUwsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dG9tYXRlZC1yb29mLWRhbWFnZS1kZXRlY3Rvci8uL3BhZ2VzL2luZGV4LnRzeD9kYjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQYXRocywgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBIb21lUGFnZSA9IChwcm9wczogYW55KSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKHByb3BzLmltYWdlc1tcIjBcIl0uZmlsZW5hbWUpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+SG9tZTwvaDE+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICBjb25zdCBpbWFnZXMgPSBhd2FpdCBwcmlzbWEuaW1hZ2VzLmZpbmRNYW55KCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBpbWFnZXMgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsIkhvbWVQYWdlIiwicHJvcHMiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcmlzbWEiLCJpbWFnZXMiLCJmaW5kTWFueSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();