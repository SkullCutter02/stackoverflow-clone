webpackHotUpdate_N_E("pages/auth/resetpassword/[uuid]",{

/***/ "./pages/auth/resetpassword/[uuid]/index.tsx":
/*!***************************************************!*\
  !*** ./pages/auth/resetpassword/[uuid]/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Spinner */ \"./components/Spinner.tsx\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/auth/resetpassword/[uuid]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ResetPasswordPage = function ResetPasswordPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"Change password\"),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var uuid = router.query.uuid;\n  var passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var confirmPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var spinnerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var changePassword = function changePassword(e) {\n    e.preventDefault();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: changePassword,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]) + \" \" + \"input-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          ref: passwordRef,\n          placeholder: \"Enter new password:\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          ref: confirmPasswordRef,\n          placeholder: \"Confirm password:\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]),\n          children: [text, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            spinner: spinnerRef\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]) + \" \" + \"err-msg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2994438694\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]],\n      children: \"main.__jsx-style-dynamic-selector{width:100%;height:95vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.input-container.__jsx-style-dynamic-selector{width:30%;height:55%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}input.__jsx-style-dynamic-selector{border:1px solid \".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], \";background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], \";color:#fff;height:40px;width:100%;text-indent:15px;font-size:0.8rem;margin:10px 0;}button.__jsx-style-dynamic-selector{border:none;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], \";color:white;width:150px;height:30px;border-radius:4px;cursor:pointer;margin:20px 0;}button.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"], \";}.err-msg.__jsx-style-dynamic-selector{color:#ff0000;text-align:center;width:90%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvYXV0aC9yZXNldHBhc3N3b3JkL1t1dWlkXS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUdzQixBQVFELEFBU29DLEFBV2xDLEFBVzRCLEFBSTFCLFVBbENILENBUkMsQ0E0QjRCLEVBZXRCLE9BbENMLEVBUkEsU0EyQ0gsUUFMWixFQU1BLElBNUIwQyxNQVk1QixZQUNBLFlBQ0EsVUFiRCxFQWNPLE9BdEJJLEVBUkMsQUFpQlgsU0FjRyxHQWJKLFdBQ00sQ0FhSCxjQUNoQixFQWJtQixpQkFDSCxjQUNoQixLQWJ5Qix1QkFSSiw0RUFTQSxpQkFSckIsNEVBU0EiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9wYWdlcy9hdXRoL3Jlc2V0cGFzc3dvcmQvW3V1aWRdL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcblxuY29uc3QgUmVzZXRQYXNzd29yZFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiQ2hhbmdlIHBhc3N3b3JkXCIpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHV1aWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBwYXNzd29yZFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBzcGlubmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBjaGFuZ2VQYXNzd29yZCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPG1haW4+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiIG9uU3VibWl0PXtjaGFuZ2VQYXNzd29yZH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVmPXtwYXNzd29yZFJlZn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IHBhc3N3b3JkOlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICByZWY9e2NvbmZpcm1QYXNzd29yZFJlZn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBwYXNzd29yZDpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgIDxTcGlubmVyIHNwaW5uZXI9e3NwaW5uZXJSZWZ9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyLW1zZ1wiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDk1dmg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBoZWlnaHQ6IDU1JTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2Nzcy5pbnB1dEJvcmRlcn07XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaW5wdXRCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5tYWluQnV0dG9ufTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5tYWluQnV0dG9uSG92ZXJ9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVyci1tc2cge1xuICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2V0UGFzc3dvcmRQYWdlO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/auth/resetpassword/[uuid]/index.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ResetPasswordPage, \"0KdK/fOgHK2ycgkpvvtN7VU1sjI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = ResetPasswordPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResetPasswordPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ResetPasswordPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZXNldHBhc3N3b3JkL1t1dWlkXS9pbmRleC50c3g/ZWNjMyJdLCJuYW1lcyI6WyJSZXNldFBhc3N3b3JkUGFnZSIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1dWlkIiwicXVlcnkiLCJwYXNzd29yZFJlZiIsInVzZVJlZiIsImNvbmZpcm1QYXNzd29yZFJlZiIsInNwaW5uZXJSZWYiLCJjaGFuZ2VQYXNzd29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQTJCLEdBQUcsU0FBOUJBLGlCQUE4QixHQUFNO0FBQUE7O0FBQUEsa0JBQ2hCQyxzREFBUSxDQUFTLGlCQUFULENBRFE7QUFBQSxNQUNqQ0MsSUFEaUM7QUFBQSxNQUMzQkMsT0FEMkI7O0FBR3hDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFId0MsTUFJaENDLElBSmdDLEdBSXZCRixNQUFNLENBQUNHLEtBSmdCLENBSWhDRCxJQUpnQztBQU14QyxNQUFNRSxXQUFXLEdBQUdDLG9EQUFNLENBQW1CLElBQW5CLENBQTFCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdELG9EQUFNLENBQW1CLElBQW5CLENBQWpDO0FBQ0EsTUFBTUUsVUFBVSxHQUFHRixvREFBTSxDQUFpQixJQUFqQixDQUF6Qjs7QUFFQSxNQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUM1QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBLGtHQXVDd0JDLCtEQXZDeEIsRUF3Q2tCQSxtRUF4Q2xCLEVBbURrQkEsOERBbkRsQixFQTZEa0JBLG1FQTdEbEI7QUFBQSw2QkFDRTtBQUFrQyxnQkFBUSxFQUFFSCxjQUE1QztBQUFBLG9HQXNDc0JHLCtEQXRDdEIsRUF1Q2dCQSxtRUF2Q2hCLEVBa0RnQkEsOERBbERoQixFQTREZ0JBLG1FQTVEaEIsYUFBZ0IsaUJBQWhCO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGFBQUcsRUFBRVAsV0FGUDtBQUdFLHFCQUFXLEVBQUMscUJBSGQ7QUFBQSxzR0FxQ29CTywrREFyQ3BCLEVBc0NjQSxtRUF0Q2QsRUFpRGNBLDhEQWpEZCxFQTJEY0EsbUVBM0RkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxhQUFHLEVBQUVMLGtCQUZQO0FBR0UscUJBQVcsRUFBQyxtQkFIZDtBQUFBLHNHQWdDb0JLLCtEQWhDcEIsRUFpQ2NBLG1FQWpDZCxFQTRDY0EsOERBNUNkLEVBc0RjQSxtRUF0RGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBV0U7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBLHNHQTJCb0JBLCtEQTNCcEIsRUE0QmNBLG1FQTVCZCxFQXVDY0EsOERBdkNkLEVBaURjQSxtRUFqRGQ7QUFBQSxxQkFDR2IsSUFESCxlQUVFLHFFQUFDLDJEQUFEO0FBQVMsbUJBQU8sRUFBRVM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsZUFlRTtBQUFBLHNHQXVCb0JJLCtEQXZCcEIsRUF3QmNBLG1FQXhCZCxFQW1DY0EsOERBbkNkLEVBNkNjQSxtRUE3Q2QsYUFBYTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQSxnQkF3QzBCQSwrREF4QzFCLEVBeUNvQkEsbUVBekNwQixFQW9Eb0JBLDhEQXBEcEIsRUE4RG9CQSxtRUE5RHBCO0FBQUEsOHlCQXdDMEJBLCtEQXhDMUIseUJBeUNvQkEsbUVBekNwQiw0SkFvRG9CQSw4REFwRHBCLHVKQThEb0JBLG1FQTlEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBFRCxDQXhGRDs7R0FBTWYsaUI7VUFHV0sscUQ7OztLQUhYTCxpQjtBQTBGU0EsZ0ZBQWYiLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3Jlc2V0cGFzc3dvcmQvW3V1aWRdL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcblxuY29uc3QgUmVzZXRQYXNzd29yZFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiQ2hhbmdlIHBhc3N3b3JkXCIpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHV1aWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBwYXNzd29yZFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBzcGlubmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBjaGFuZ2VQYXNzd29yZCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPG1haW4+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiIG9uU3VibWl0PXtjaGFuZ2VQYXNzd29yZH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVmPXtwYXNzd29yZFJlZn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IHBhc3N3b3JkOlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICByZWY9e2NvbmZpcm1QYXNzd29yZFJlZn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBwYXNzd29yZDpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgIDxTcGlubmVyIHNwaW5uZXI9e3NwaW5uZXJSZWZ9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyLW1zZ1wiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDk1dmg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBoZWlnaHQ6IDU1JTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2Nzcy5pbnB1dEJvcmRlcn07XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaW5wdXRCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5tYWluQnV0dG9ufTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5tYWluQnV0dG9uSG92ZXJ9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVyci1tc2cge1xuICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2V0UGFzc3dvcmRQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/resetpassword/[uuid]/index.tsx\n");

/***/ })

})