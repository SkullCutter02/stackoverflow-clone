webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Communities.tsx":
/*!************************************!*\
  !*** ./components/Communities.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Communities.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Communities = function Communities() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchCommunities = function fetchCommunities() {\n    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \"/communities?page=\").concat(page, \"&limit=20\"));\n  };\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])([\"communities\", page], function () {\n    return fetchCommunities(page);\n  }, {\n    keepPreviousData: true\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isFetching = _useQuery.isFetching,\n      isPreviousData = _useQuery.isPreviousData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"communities-container\",\n      children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"Error: \", error.message]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"Communities\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Communities, \"ROZZXDCpSyTccMsQYEDldIx7+gA=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = Communities;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Communities);\n\nvar _c;\n\n$RefreshReg$(_c, \"Communities\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tdW5pdGllcy50c3g/YjhjNSJdLCJuYW1lcyI6WyJDb21tdW5pdGllcyIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJmZXRjaENvbW11bml0aWVzIiwiZmV0Y2giLCJob3N0IiwidXNlUXVlcnkiLCJrZWVwUHJldmlvdXNEYXRhIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsImVycm9yIiwiZGF0YSIsImlzRmV0Y2hpbmciLCJpc1ByZXZpb3VzRGF0YSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBV0EsSUFBTUEsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsR0FBTTtBQUFBOztBQUFBLGtCQUNWQyxzREFBUSxDQUFTLENBQVQsQ0FERTtBQUFBLE1BQzNCQyxJQUQyQjtBQUFBLE1BQ3JCQyxPQURxQjs7QUFHbEMsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFFBQUNGLElBQUQsdUVBQWdCLENBQWhCO0FBQUEsV0FDdkJHLEtBQUssV0FBSUMsbURBQUosK0JBQTZCSixJQUE3QixlQURrQjtBQUFBLEdBQXpCOztBQUhrQyxrQkFhOUJLLDREQUFRLENBQ1YsQ0FBQyxhQUFELEVBQWdCTCxJQUFoQixDQURVLEVBRVY7QUFBQSxXQUFNRSxnQkFBZ0IsQ0FBQ0YsSUFBRCxDQUF0QjtBQUFBLEdBRlUsRUFHVjtBQUNFTSxvQkFBZ0IsRUFBRTtBQURwQixHQUhVLENBYnNCO0FBQUEsTUFPaENDLFNBUGdDLGFBT2hDQSxTQVBnQztBQUFBLE1BUWhDQyxPQVJnQyxhQVFoQ0EsT0FSZ0M7QUFBQSxNQVNoQ0MsS0FUZ0MsYUFTaENBLEtBVGdDO0FBQUEsTUFVaENDLElBVmdDLGFBVWhDQSxJQVZnQztBQUFBLE1BV2hDQyxVQVhnQyxhQVdoQ0EsVUFYZ0M7QUFBQSxNQVloQ0MsY0FaZ0MsYUFZaENBLGNBWmdDOztBQXFCbEMsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSxnQkFDR0wsU0FBUyxnQkFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRLEdBRU5DLE9BQU8sZ0JBQ1Q7QUFBQSw4QkFBYUMsS0FBSyxDQUFDSSxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUyxnQkFHVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQWxDRDs7R0FBTWYsVztVQWFBTyxvRDs7O0tBYkFQLFc7QUFvQ1NBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tdW5pdGllcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5cbnR5cGUgQ29tbXVuaXR5VHlwZSA9IHtcbiAgdXVpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgZmV0Y2hDb21tdW5pdGllczogKCkgPT4gUHJvbWlzZTxSZXNwb25zZT47XG59O1xuXG5jb25zdCBDb21tdW5pdGllczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG5cbiAgY29uc3QgZmV0Y2hDb21tdW5pdGllcyA9IChwYWdlOiBudW1iZXIgPSAxKSA9PlxuICAgIGZldGNoKGAke2hvc3R9L2NvbW11bml0aWVzP3BhZ2U9JHtwYWdlfSZsaW1pdD0yMGApO1xuXG4gIGNvbnN0IHtcbiAgICBpc0xvYWRpbmcsXG4gICAgaXNFcnJvcixcbiAgICBlcnJvcixcbiAgICBkYXRhLFxuICAgIGlzRmV0Y2hpbmcsXG4gICAgaXNQcmV2aW91c0RhdGEsXG4gIH0gPSB1c2VRdWVyeTxDb21tdW5pdHlUeXBlW10sICgpID0+IFByb21pc2U8UmVzcG9uc2U+LCBFcnJvcj4oXG4gICAgW1wiY29tbXVuaXRpZXNcIiwgcGFnZV0sXG4gICAgKCkgPT4gZmV0Y2hDb21tdW5pdGllcyhwYWdlKSxcbiAgICB7XG4gICAgICBrZWVwUHJldmlvdXNEYXRhOiB0cnVlLFxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXRpZXMtY29udGFpbmVyXCI+XG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICkgOiBpc0Vycm9yID8gKFxuICAgICAgICAgIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+Q29tbXVuaXRpZXM8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tdW5pdGllcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Communities.tsx\n");

/***/ })

})