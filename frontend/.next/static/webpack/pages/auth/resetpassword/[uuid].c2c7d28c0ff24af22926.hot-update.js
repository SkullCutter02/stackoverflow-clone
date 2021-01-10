webpackHotUpdate_N_E("pages/auth/resetpassword/[uuid]",{

/***/ "./pages/auth/resetpassword/[uuid]/index.tsx":
/*!***************************************************!*\
  !*** ./pages/auth/resetpassword/[uuid]/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/cssVariables */ \"./utils/cssVariables.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/auth/resetpassword/[uuid]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar ResetPasswordPage = function ResetPasswordPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"Change password\"),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var uuid = router.query.uuid;\n  var passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var confirmPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var spinnerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var changePassword = function changePassword(e) {\n    e.preventDefault();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1239488904\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: changePassword,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1239488904\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]) + \" \" + \"input-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          ref: passwordRef,\n          placeholder: \"Enter new password:\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1239488904\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          ref: passwordRef,\n          placeholder: \"Confirm password:\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1239488904\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1239488904\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]),\n          children: \"Change Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1239488904\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]],\n      children: \"main.__jsx-style-dynamic-selector{width:100%;height:95vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.input-container.__jsx-style-dynamic-selector{width:30%;height:55%;border:1px solid red;}input.__jsx-style-dynamic-selector{border:1px solid \".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], \";background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], \";color:#fff;height:40px;width:100%;text-indent:15px;font-size:0.8rem;}button.__jsx-style-dynamic-selector{border:none;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], \";color:white;width:150px;height:30px;border-radius:4px;cursor:pointer;}button.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"], \";}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvYXV0aC9yZXNldHBhc3N3b3JkL1t1dWlkXS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQixBQUdzQixBQVFELEFBTW9DLEFBVWxDLEFBVTRCLFVBekI3QixDQVJDLENBd0I0QixTQWZuQixFQVJSLGlCQWlDZixFQXhCQSxJQUkwQyxNQVc1QixZQUNBLFlBQ0EsVUFaRCxFQWFPLFNBMUJLLEFBY1gsU0FhRyxHQVpKLFdBQ00sQ0FZbkIsZ0JBWG1CLGlCQUNuQiwwQ0FqQnFCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL3BhZ2VzL2F1dGgvcmVzZXRwYXNzd29yZC9bdXVpZF0vaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xuXG5jb25zdCBSZXNldFBhc3N3b3JkUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJDaGFuZ2UgcGFzc3dvcmRcIik7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdXVpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IHBhc3N3b3JkUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjb25maXJtUGFzc3dvcmRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHNwaW5uZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGNoYW5nZVBhc3N3b3JkID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCIgb25TdWJtaXQ9e2NoYW5nZVBhc3N3b3JkfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICByZWY9e3Bhc3N3b3JkUmVmfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBuZXcgcGFzc3dvcmQ6XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHJlZj17cGFzc3dvcmRSZWZ9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmQ6XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNoYW5nZSBQYXNzd29yZDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA5NXZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1NSU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b259O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b25Ib3Zlcn07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRQYXNzd29yZFBhZ2U7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/auth/resetpassword/[uuid]/index.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ResetPasswordPage, \"0KdK/fOgHK2ycgkpvvtN7VU1sjI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = ResetPasswordPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResetPasswordPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ResetPasswordPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZXNldHBhc3N3b3JkL1t1dWlkXS9pbmRleC50c3g/ZWNjMyJdLCJuYW1lcyI6WyJSZXNldFBhc3N3b3JkUGFnZSIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1dWlkIiwicXVlcnkiLCJwYXNzd29yZFJlZiIsInVzZVJlZiIsImNvbmZpcm1QYXNzd29yZFJlZiIsInNwaW5uZXJSZWYiLCJjaGFuZ2VQYXNzd29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBR0EsSUFBTUEsaUJBQTJCLEdBQUcsU0FBOUJBLGlCQUE4QixHQUFNO0FBQUE7O0FBQUEsa0JBQ2hCQyxzREFBUSxDQUFTLGlCQUFULENBRFE7QUFBQSxNQUNqQ0MsSUFEaUM7QUFBQSxNQUMzQkMsT0FEMkI7O0FBR3hDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFId0MsTUFJaENDLElBSmdDLEdBSXZCRixNQUFNLENBQUNHLEtBSmdCLENBSWhDRCxJQUpnQztBQU14QyxNQUFNRSxXQUFXLEdBQUdDLG9EQUFNLENBQW1CLElBQW5CLENBQTFCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdELG9EQUFNLENBQW1CLElBQW5CLENBQWpDO0FBQ0EsTUFBTUUsVUFBVSxHQUFHRixvREFBTSxDQUFpQixJQUFqQixDQUF6Qjs7QUFFQSxNQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUM1QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBLGtHQWdDd0JDLCtEQWhDeEIsRUFpQ2tCQSxtRUFqQ2xCLEVBMkNrQkEsOERBM0NsQixFQW9Ea0JBLG1FQXBEbEI7QUFBQSw2QkFDRTtBQUFrQyxnQkFBUSxFQUFFSCxjQUE1QztBQUFBLG9HQStCc0JHLCtEQS9CdEIsRUFnQ2dCQSxtRUFoQ2hCLEVBMENnQkEsOERBMUNoQixFQW1EZ0JBLG1FQW5EaEIsYUFBZ0IsaUJBQWhCO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGFBQUcsRUFBRVAsV0FGUDtBQUdFLHFCQUFXLEVBQUMscUJBSGQ7QUFBQSxzR0E4Qm9CTywrREE5QnBCLEVBK0JjQSxtRUEvQmQsRUF5Q2NBLDhEQXpDZCxFQWtEY0EsbUVBbERkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxhQUFHLEVBQUVQLFdBRlA7QUFHRSxxQkFBVyxFQUFDLG1CQUhkO0FBQUEsc0dBeUJvQk8sK0RBekJwQixFQTBCY0EsbUVBMUJkLEVBb0NjQSw4REFwQ2QsRUE2Q2NBLG1FQTdDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFXRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUEsc0dBb0JvQkEsK0RBcEJwQixFQXFCY0EsbUVBckJkLEVBK0JjQSw4REEvQmQsRUF3Q2NBLG1FQXhDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBLGdCQWlDMEJBLCtEQWpDMUIsRUFrQ29CQSxtRUFsQ3BCLEVBNENvQkEsOERBNUNwQixFQXFEb0JBLG1FQXJEcEI7QUFBQSwyZUFpQzBCQSwrREFqQzFCLHlCQWtDb0JBLG1FQWxDcEIsOElBNENvQkEsOERBNUNwQix5SUFxRG9CQSxtRUFyRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyREQsQ0F6RUQ7O0dBQU1mLGlCO1VBR1dLLHFEOzs7S0FIWEwsaUI7QUEyRVNBLGdGQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aC9yZXNldHBhc3N3b3JkL1t1dWlkXS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XG5cbmNvbnN0IFJlc2V0UGFzc3dvcmRQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIkNoYW5nZSBwYXNzd29yZFwiKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB1dWlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgcGFzc3dvcmRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgc3Bpbm5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIiBvblN1Ym1pdD17Y2hhbmdlUGFzc3dvcmR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHJlZj17cGFzc3dvcmRSZWZ9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5ldyBwYXNzd29yZDpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVmPXtwYXNzd29yZFJlZn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBwYXNzd29yZDpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q2hhbmdlIFBhc3N3b3JkPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDk1dmg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBoZWlnaHQ6IDU1JTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtaW5kZW50OiAxNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbkhvdmVyfTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXNldFBhc3N3b3JkUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/resetpassword/[uuid]/index.tsx\n");

/***/ })

})