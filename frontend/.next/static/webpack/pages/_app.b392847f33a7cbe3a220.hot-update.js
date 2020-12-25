webpackHotUpdate_N_E("pages/_app",{

/***/ "./context/UserContext.tsx":
/*!*********************************!*\
  !*** ./context/UserContext.tsx ***!
  \*********************************/
/*! exports provided: UserContext, UserContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContextProvider\", function() { return UserContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/context/UserContext.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nfunction getCookie(cname) {\n  var name = cname + \"=\";\n  var decodedCookie = decodeURIComponent(document.cookie);\n  var ca = decodedCookie.split(\";\");\n\n  for (var i = 0; i < ca.length; i++) {\n    var c = ca[i];\n\n    while (c.charAt(0) == \" \") {\n      c = c.substring(1);\n    }\n\n    if (c.indexOf(name) == 0) {\n      return c.substring(name.length, c.length);\n    }\n  }\n\n  return \"\";\n}\n\nvar UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nvar UserContextProvider = function UserContextProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      state = _useState[0],\n      setState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    document.cookie = \"token=df215923-8a3c-44f0-80c2-9c331e1a58df\"; // testing\n\n    var token = getCookie(\"token\");\n\n    if (token !== \"\") {// fetch(`${host}/users/${token}`)\n      //   .then((res) => res.json())\n      //   .then((data) => setState(data))\n      //   .catch((err) => console.log(err));\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserContext.Provider, {\n    value: {\n      user: state,\n      setState: setState\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(UserContextProvider, \"3gZZgqrmxdIL2lkJNp8YWce6YNU=\");\n\n_c = UserContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"UserContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9Vc2VyQ29udGV4dC50c3g/MmZjNiJdLCJuYW1lcyI6WyJnZXRDb29raWUiLCJjbmFtZSIsIm5hbWUiLCJkZWNvZGVkQ29va2llIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJjb29raWUiLCJjYSIsInNwbGl0IiwiaSIsImxlbmd0aCIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVXNlckNvbnRleHRQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwidG9rZW4iLCJ1c2VyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFJQSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQztBQUN4QyxNQUFJQyxJQUFJLEdBQUdELEtBQUssR0FBRyxHQUFuQjtBQUNBLE1BQUlFLGFBQWEsR0FBR0Msa0JBQWtCLENBQUNDLFFBQVEsQ0FBQ0MsTUFBVixDQUF0QztBQUNBLE1BQUlDLEVBQUUsR0FBR0osYUFBYSxDQUFDSyxLQUFkLENBQW9CLEdBQXBCLENBQVQ7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixFQUFFLENBQUNHLE1BQXZCLEVBQStCRCxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDLFFBQUlFLENBQUMsR0FBR0osRUFBRSxDQUFDRSxDQUFELENBQVY7O0FBQ0EsV0FBT0UsQ0FBQyxDQUFDQyxNQUFGLENBQVMsQ0FBVCxLQUFlLEdBQXRCLEVBQTJCO0FBQ3pCRCxPQUFDLEdBQUdBLENBQUMsQ0FBQ0UsU0FBRixDQUFZLENBQVosQ0FBSjtBQUNEOztBQUNELFFBQUlGLENBQUMsQ0FBQ0csT0FBRixDQUFVWixJQUFWLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLGFBQU9TLENBQUMsQ0FBQ0UsU0FBRixDQUFZWCxJQUFJLENBQUNRLE1BQWpCLEVBQXlCQyxDQUFDLENBQUNELE1BQTNCLENBQVA7QUFDRDtBQUNGOztBQUNELFNBQU8sRUFBUDtBQUNEOztBQWlCTSxJQUFNSyxXQUFXLGdCQUFHQywyREFBYSxDQUF5QixJQUF6QixDQUFqQztBQUVBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2xCQyxzREFBUSxFQURVO0FBQUEsTUFDckNDLEtBRHFDO0FBQUEsTUFDOUJDLFFBRDhCOztBQUc1Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RqQixZQUFRLENBQUNDLE1BQVQsR0FBa0IsNENBQWxCLENBRGMsQ0FDa0Q7O0FBQ2hFLFFBQU1pQixLQUFLLEdBQUd2QixTQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFDQSxRQUFJdUIsS0FBSyxLQUFLLEVBQWQsRUFBa0IsQ0FDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNGLEdBVFEsRUFTTixFQVRNLENBQVQ7QUFXQSxzQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRUMsVUFBSSxFQUFFSixLQUFSO0FBQWVDLGNBQVEsRUFBUkE7QUFBZixLQUE3QjtBQUFBLGNBQ0dILEtBQUssQ0FBQ087QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQW5CTTs7R0FBTVIsbUI7O0tBQUFBLG1CIiwiZmlsZSI6Ii4vY29udGV4dC9Vc2VyQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vaG9zdFwiO1xuXG5mdW5jdGlvbiBnZXRDb29raWUoY25hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBuYW1lID0gY25hbWUgKyBcIj1cIjtcbiAgbGV0IGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcbiAgbGV0IGNhID0gZGVjb2RlZENvb2tpZS5zcGxpdChcIjtcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgYyA9IGNhW2ldO1xuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSBcIiBcIikge1xuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xuICAgIH1cbiAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcbiAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gXCJcIjtcbn1cblxudHlwZSBVc2VyQ29udGV4dFR5cGUgPSB7XG4gIHVzZXI6IFVzZXJUeXBlO1xuICBzZXRTdGF0ZTogKHVzZXI6IFVzZXJUeXBlKSA9PiB2b2lkO1xufTtcblxudHlwZSBVc2VyVHlwZSA9IHtcbiAgdXVpZDogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICB2ZXJpZmllZDogYm9vbGVhbjtcbiAgcmVwdXRhdGlvbjogbnVtYmVyO1xuICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFVzZXJDb250ZXh0VHlwZSB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPFVzZXJUeXBlIHwgbnVsbD4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IFwidG9rZW49ZGYyMTU5MjMtOGEzYy00NGYwLTgwYzItOWMzMzFlMWE1OGRmXCI7IC8vIHRlc3RpbmdcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpO1xuICAgIGlmICh0b2tlbiAhPT0gXCJcIikge1xuICAgICAgLy8gZmV0Y2goYCR7aG9zdH0vdXNlcnMvJHt0b2tlbn1gKVxuICAgICAgLy8gICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLy8gICAudGhlbigoZGF0YSkgPT4gc2V0U3RhdGUoZGF0YSkpXG4gICAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyOiBzdGF0ZSwgc2V0U3RhdGUgfX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/UserContext.tsx\n");

/***/ }),

/***/ "./host.ts":
false

})