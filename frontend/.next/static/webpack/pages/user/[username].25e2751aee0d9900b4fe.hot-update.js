webpackHotUpdate_N_E("pages/user/[username]",{

/***/ "./components/UserQuestions.tsx":
/*!**************************************!*\
  !*** ./components/UserQuestions.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/UserQuestions.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar UserQuestions = function UserQuestions(_ref) {\n  _s();\n\n  var uuid = _ref.uuid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchUserPosts = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_5__[\"default\"], \"/users/\").concat(uuid, \"/posts?page=\").concat(page, \"&limit=20\"));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchUserPosts(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])([\"user-posts\", page], function () {\n    return fetchUserPosts(page);\n  }, {\n    keepPreviousData: true,\n    cacheTime: 0\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isPreviousData = _useQuery.isPreviousData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: uuid\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(UserQuestions, \"B8AHcuIhDtcfT64L9EclU84Jm5E=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c = UserQuestions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserQuestions);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserQuestions\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUXVlc3Rpb25zLnRzeD8zODlhIl0sIm5hbWVzIjpbIlVzZXJRdWVzdGlvbnMiLCJ1dWlkIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsImZldGNoVXNlclBvc3RzIiwiZmV0Y2giLCJob3N0IiwicmVzIiwianNvbiIsInVzZVF1ZXJ5Iiwia2VlcFByZXZpb3VzRGF0YSIsImNhY2hlVGltZSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJlcnJvciIsImRhdGEiLCJpc1ByZXZpb3VzRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQXFCQSxJQUFNQSxhQUE4QixHQUFHLFNBQWpDQSxhQUFpQyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUMzQkMsc0RBQVEsQ0FBUyxDQUFULENBRG1CO0FBQUEsTUFDNUNDLElBRDRDO0FBQUEsTUFDdENDLE9BRHNDOztBQUduRCxNQUFNQyxjQUFjO0FBQUEsaU1BQUcsaUJBQU9GLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDSEcsS0FBSyxXQUNsQkMsbURBRGtCLG9CQUNKTixJQURJLHlCQUNlRSxJQURmLGVBREY7O0FBQUE7QUFDZkssaUJBRGU7QUFBQTtBQUFBLHFCQUlSQSxHQUFHLENBQUNDLElBQUosRUFKUTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWRKLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBSG1ELGtCQVVTSyw0REFBUSxDQUNsRSxDQUFDLFlBQUQsRUFBZVAsSUFBZixDQURrRSxFQUVsRTtBQUFBLFdBQU1FLGNBQWMsQ0FBQ0YsSUFBRCxDQUFwQjtBQUFBLEdBRmtFLEVBR2xFO0FBQUVRLG9CQUFnQixFQUFFLElBQXBCO0FBQTBCQyxhQUFTLEVBQUU7QUFBckMsR0FIa0UsQ0FWakI7QUFBQSxNQVUzQ0MsU0FWMkMsYUFVM0NBLFNBVjJDO0FBQUEsTUFVaENDLE9BVmdDLGFBVWhDQSxPQVZnQztBQUFBLE1BVXZCQyxLQVZ1QixhQVV2QkEsS0FWdUI7QUFBQSxNQVVoQkMsSUFWZ0IsYUFVaEJBLElBVmdCO0FBQUEsTUFVVkMsY0FWVSxhQVVWQSxjQVZVOztBQWdCbkQsc0JBQU87QUFBQSxjQUFNaEI7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQWpCRDs7R0FBTUQsYTtVQVV3RFUsb0Q7OztLQVZ4RFYsYTtBQW1CU0EsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJRdWVzdGlvbnMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vdXRpbHMvaG9zdFwiO1xuXG50eXBlIFVzZXJUeXBlID0ge1xuICB1dWlkOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHZlcmlmaWVkOiBib29sZWFuO1xuICByZXB1dGF0aW9uOiBudW1iZXI7XG4gIHJvbGU6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufTtcblxudHlwZSBQb3N0VHlwZSA9IHtcbiAgdXVpZDogc3RyaW5nO1xufTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXVpZDogc3RyaW5nO1xufVxuXG5jb25zdCBVc2VyUXVlc3Rpb25zOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB1dWlkIH0pID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBmZXRjaFVzZXJQb3N0cyA9IGFzeW5jIChwYWdlOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke2hvc3R9L3VzZXJzLyR7dXVpZH0vcG9zdHM/cGFnZT0ke3BhZ2V9JmxpbWl0PTIwYFxuICAgICk7XG4gICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG4gIH07XG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yLCBkYXRhLCBpc1ByZXZpb3VzRGF0YSB9ID0gdXNlUXVlcnkoXG4gICAgW1widXNlci1wb3N0c1wiLCBwYWdlXSxcbiAgICAoKSA9PiBmZXRjaFVzZXJQb3N0cyhwYWdlKSxcbiAgICB7IGtlZXBQcmV2aW91c0RhdGE6IHRydWUsIGNhY2hlVGltZTogMCB9XG4gICk7XG5cbiAgcmV0dXJuIDxkaXY+e3V1aWR9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclF1ZXN0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UserQuestions.tsx\n");

/***/ })

})