"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./domain.tsx":
/*!********************!*\
  !*** ./domain.tsx ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domain\": () => (/* binding */ domain)\n/* harmony export */ });\nconst domain = \"https://lifenews247.com\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vZG9tYWluLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsU0FBUywwQkFBMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZG9tYWluLnRzeD81ZGFiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkb21haW4gPSBcImh0dHBzOi8vbGlmZW5ld3MyNDcuY29tXCI7XG4iXSwibmFtZXMiOlsiZG9tYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./domain.tsx\n");

/***/ }),

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain */ \"(middleware)/./domain.tsx\");\n\n\nfunction middleware(request) {\n    if (request.nextUrl.search.match(/fbclid/)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(_domain__WEBPACK_IMPORTED_MODULE_1__.domain + request.nextUrl.pathname + request.nextUrl.search);\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|favicon.ico).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUVUO0FBRTNCLFNBQVNFLFdBQVdDLE9BQW9CLEVBQUU7SUFDL0MsSUFDRUEsUUFBUUMsT0FBTyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxXQUM3QjtRQUNBLE9BQU9OLDhEQUFxQixDQUMxQkMsMkNBQU1BLEdBQUdFLFFBQVFDLE9BQU8sQ0FBQ0ksUUFBUSxHQUFHTCxRQUFRQyxPQUFPLENBQUNDLE1BQU07SUFFOUQsQ0FBQztJQUVELE9BQU9MLDBEQUFpQjtBQUMxQixDQUFDO0FBRU0sTUFBTVUsU0FBUztJQUNwQkMsU0FBUztRQUNMO0tBQ0g7QUFDSCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUudHM/NDIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGRvbWFpbiB9IGZyb20gXCIuL2RvbWFpblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBpZiAoXG4gICAgcmVxdWVzdC5uZXh0VXJsLnNlYXJjaC5tYXRjaCgvZmJjbGlkLylcbiAgKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChcbiAgICAgIGRvbWFpbiArIHJlcXVlc3QubmV4dFVybC5wYXRobmFtZSArIHJlcXVlc3QubmV4dFVybC5zZWFyY2hcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFtcbiAgICAgICcvKCg/IWFwaXxfbmV4dC9zdGF0aWN8X25leHQvaW1hZ2V8ZmF2aWNvbi5pY28pLiopJyxcbiAgXSxcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZG9tYWluIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJuZXh0VXJsIiwic2VhcmNoIiwibWF0Y2giLCJyZWRpcmVjdCIsInBhdGhuYW1lIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});