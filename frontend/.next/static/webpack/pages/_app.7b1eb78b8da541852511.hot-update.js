webpackHotUpdate_N_E("pages/_app",{

/***/ "./context/UserContext.tsx":
/*!*********************************!*\
  !*** ./context/UserContext.tsx ***!
  \*********************************/
/*! exports provided: UserContext, UserContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContextProvider\", function() { return UserContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/context/UserContext.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nfunction getCookie(cname) {\n  var name = cname + \"=\";\n  var decodedCookie = decodeURIComponent(document.cookie);\n  var ca = decodedCookie.split(\";\");\n\n  for (var i = 0; i < ca.length; i++) {\n    var c = ca[i];\n\n    while (c.charAt(0) == \" \") {\n      c = c.substring(1);\n    }\n\n    if (c.indexOf(name) == 0) {\n      return c.substring(name.length, c.length);\n    }\n  }\n\n  return \"\";\n}\n\nvar UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nvar UserContextProvider = function UserContextProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      state = _useState[0],\n      setState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var token = getCookie(\"token\");\n\n    if (token !== \"\") {\n      setState(token);\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserContext.Provider, {\n    value: {\n      token: state\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(UserContextProvider, \"3gZZgqrmxdIL2lkJNp8YWce6YNU=\");\n\n_c = UserContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"UserContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9Vc2VyQ29udGV4dC50c3g/MmZjNiJdLCJuYW1lcyI6WyJnZXRDb29raWUiLCJjbmFtZSIsIm5hbWUiLCJkZWNvZGVkQ29va2llIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJjb29raWUiLCJjYSIsInNwbGl0IiwiaSIsImxlbmd0aCIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVXNlckNvbnRleHRQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwidG9rZW4iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBDO0FBQ3hDLE1BQUlDLElBQUksR0FBR0QsS0FBSyxHQUFHLEdBQW5CO0FBQ0EsTUFBSUUsYUFBYSxHQUFHQyxrQkFBa0IsQ0FBQ0MsUUFBUSxDQUFDQyxNQUFWLENBQXRDO0FBQ0EsTUFBSUMsRUFBRSxHQUFHSixhQUFhLENBQUNLLEtBQWQsQ0FBb0IsR0FBcEIsQ0FBVDs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLEVBQUUsQ0FBQ0csTUFBdkIsRUFBK0JELENBQUMsRUFBaEMsRUFBb0M7QUFDbEMsUUFBSUUsQ0FBQyxHQUFHSixFQUFFLENBQUNFLENBQUQsQ0FBVjs7QUFDQSxXQUFPRSxDQUFDLENBQUNDLE1BQUYsQ0FBUyxDQUFULEtBQWUsR0FBdEIsRUFBMkI7QUFDekJELE9BQUMsR0FBR0EsQ0FBQyxDQUFDRSxTQUFGLENBQVksQ0FBWixDQUFKO0FBQ0Q7O0FBQ0QsUUFBSUYsQ0FBQyxDQUFDRyxPQUFGLENBQVVaLElBQVYsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsYUFBT1MsQ0FBQyxDQUFDRSxTQUFGLENBQVlYLElBQUksQ0FBQ1EsTUFBakIsRUFBeUJDLENBQUMsQ0FBQ0QsTUFBM0IsQ0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxFQUFQO0FBQ0Q7O0FBT00sSUFBTUssV0FBVyxnQkFBR0MsMkRBQWEsQ0FBZ0IsSUFBaEIsQ0FBakM7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNsQkMsc0RBQVEsRUFEVTtBQUFBLE1BQ3JDQyxLQURxQztBQUFBLE1BQzlCQyxRQUQ4Qjs7QUFHNUNDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBR3ZCLFNBQVMsQ0FBQyxPQUFELENBQXZCOztBQUNBLFFBQUl1QixLQUFLLEtBQUssRUFBZCxFQUFrQjtBQUNoQkYsY0FBUSxDQUFDRSxLQUFELENBQVI7QUFDRDtBQUNGLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRUEsV0FBSyxFQUFFSDtBQUFULEtBQTdCO0FBQUEsY0FDR0YsS0FBSyxDQUFDTTtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBZk07O0dBQU1QLG1COztLQUFBQSxtQiIsImZpbGUiOiIuL2NvbnRleHQvVXNlckNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gZ2V0Q29va2llKGNuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgbmFtZSA9IGNuYW1lICsgXCI9XCI7XG4gIGxldCBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XG4gIGxldCBjYSA9IGRlY29kZWRDb29raWUuc3BsaXQoXCI7XCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGMgPSBjYVtpXTtcbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gXCIgXCIpIHtcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XG4gICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59XG5cbnR5cGUgVXNlckNvbnRleHRUeXBlID0ge1xuICB0b2tlbjogc3RyaW5nO1xuICBzZXRTdGF0ZTogKHRva2VuOiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpO1xuICAgIGlmICh0b2tlbiAhPT0gXCJcIikge1xuICAgICAgc2V0U3RhdGUodG9rZW4pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRva2VuOiBzdGF0ZSB9fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/UserContext.tsx\n");

/***/ })

})