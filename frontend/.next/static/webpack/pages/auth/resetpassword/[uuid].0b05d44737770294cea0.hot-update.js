webpackHotUpdate_N_E("pages/auth/resetpassword/[uuid]",{

/***/ "./pages/auth/resetpassword/[uuid]/index.tsx":
/*!***************************************************!*\
  !*** ./pages/auth/resetpassword/[uuid]/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Spinner */ \"./components/Spinner.tsx\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/host */ \"./utils/host.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/auth/resetpassword/[uuid]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar ResetPasswordPage = function ResetPasswordPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"Change password\"),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var uuid = router.query.uuid;\n  var passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var confirmPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var spinnerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var errMsgRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var changePassword = function changePassword(e) {\n    e.preventDefault();\n\n    if (passwordRef.current.value === confirmPasswordRef.current.value) {\n      fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/auth/email/password/reset\"), {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          newPassword: passwordRef.current.value\n        })\n      }).then(function (res) {\n        return res.json();\n      });\n    } else {\n      errMsgRef.current.innerText = \"Passwords don't match\";\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: changePassword,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]) + \" \" + \"input-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          ref: passwordRef,\n          placeholder: \"Enter new password:\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          ref: confirmPasswordRef,\n          placeholder: \"Confirm password:\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]),\n          children: [text, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            spinner: spinnerRef\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          ref: errMsgRef,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]) + \" \" + \"err-msg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2994438694\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]],\n      children: \"main.__jsx-style-dynamic-selector{width:100%;height:95vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.input-container.__jsx-style-dynamic-selector{width:30%;height:55%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}input.__jsx-style-dynamic-selector{border:1px solid \".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], \";background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], \";color:#fff;height:40px;width:100%;text-indent:15px;font-size:0.8rem;margin:10px 0;}button.__jsx-style-dynamic-selector{border:none;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], \";color:white;width:150px;height:30px;border-radius:4px;cursor:pointer;margin:20px 0;}button.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"], \";}.err-msg.__jsx-style-dynamic-selector{color:#ff0000;text-align:center;width:90%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvYXV0aC9yZXNldHBhc3N3b3JkL1t1dWlkXS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERrQixBQUdzQixBQVFELEFBU29DLEFBV2xDLEFBVzRCLEFBSTFCLFVBbENILENBUkMsQ0E0QjRCLEVBZXRCLE9BbENMLEVBUkEsU0EyQ0gsUUFMWixFQU1BLElBNUIwQyxNQVk1QixZQUNBLFlBQ0EsVUFiRCxFQWNPLE9BdEJJLEVBUkMsQUFpQlgsU0FjRyxHQWJKLFdBQ00sQ0FhSCxjQUNoQixFQWJtQixpQkFDSCxjQUNoQixLQWJ5Qix1QkFSSiw0RUFTQSxpQkFSckIsNEVBU0EiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9wYWdlcy9hdXRoL3Jlc2V0cGFzc3dvcmQvW3V1aWRdL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9ob3N0XCI7XG5cbmNvbnN0IFJlc2V0UGFzc3dvcmRQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIkNoYW5nZSBwYXNzd29yZFwiKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB1dWlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgcGFzc3dvcmRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgc3Bpbm5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGVyck1zZ1JlZiA9IHVzZVJlZjxIVE1MUGFyYWdyYXBoRWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlID09PSBjb25maXJtUGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZSkge1xuICAgICAgZmV0Y2goYCR7aG9zdH0vYXV0aC9lbWFpbC9wYXNzd29yZC9yZXNldGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbmV3UGFzc3dvcmQ6IHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgIH0pLFxuICAgICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyTXNnUmVmLmN1cnJlbnQuaW5uZXJUZXh0ID0gXCJQYXNzd29yZHMgZG9uJ3QgbWF0Y2hcIjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCIgb25TdWJtaXQ9e2NoYW5nZVBhc3N3b3JkfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICByZWY9e3Bhc3N3b3JkUmVmfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBuZXcgcGFzc3dvcmQ6XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHJlZj17Y29uZmlybVBhc3N3b3JkUmVmfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIHBhc3N3b3JkOlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgPFNwaW5uZXIgc3Bpbm5lcj17c3Bpbm5lclJlZn0gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnItbXNnXCIgcmVmPXtlcnJNc2dSZWZ9IC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDk1dmg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBoZWlnaHQ6IDU1JTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2Nzcy5pbnB1dEJvcmRlcn07XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaW5wdXRCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5tYWluQnV0dG9ufTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5tYWluQnV0dG9uSG92ZXJ9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVyci1tc2cge1xuICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2V0UGFzc3dvcmRQYWdlO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/auth/resetpassword/[uuid]/index.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ResetPasswordPage, \"QtIZQbn4XMgnBx8D+zCpOH5ISJI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = ResetPasswordPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResetPasswordPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ResetPasswordPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZXNldHBhc3N3b3JkL1t1dWlkXS9pbmRleC50c3g/ZWNjMyJdLCJuYW1lcyI6WyJSZXNldFBhc3N3b3JkUGFnZSIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1dWlkIiwicXVlcnkiLCJwYXNzd29yZFJlZiIsInVzZVJlZiIsImNvbmZpcm1QYXNzd29yZFJlZiIsInNwaW5uZXJSZWYiLCJlcnJNc2dSZWYiLCJjaGFuZ2VQYXNzd29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsImZldGNoIiwiaG9zdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld1Bhc3N3b3JkIiwidGhlbiIsInJlcyIsImpzb24iLCJpbm5lclRleHQiLCJjc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUEyQixHQUFHLFNBQTlCQSxpQkFBOEIsR0FBTTtBQUFBOztBQUFBLGtCQUNoQkMsc0RBQVEsQ0FBUyxpQkFBVCxDQURRO0FBQUEsTUFDakNDLElBRGlDO0FBQUEsTUFDM0JDLE9BRDJCOztBQUd4QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSHdDLE1BSWhDQyxJQUpnQyxHQUl2QkYsTUFBTSxDQUFDRyxLQUpnQixDQUloQ0QsSUFKZ0M7QUFNeEMsTUFBTUUsV0FBVyxHQUFHQyxvREFBTSxDQUFtQixJQUFuQixDQUExQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHRCxvREFBTSxDQUFtQixJQUFuQixDQUFqQztBQUNBLE1BQU1FLFVBQVUsR0FBR0Ysb0RBQU0sQ0FBaUIsSUFBakIsQ0FBekI7QUFDQSxNQUFNRyxTQUFTLEdBQUdILG9EQUFNLENBQXVCLElBQXZCLENBQXhCOztBQUVBLE1BQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzVCQSxLQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSVAsV0FBVyxDQUFDUSxPQUFaLENBQW9CQyxLQUFwQixLQUE4QlAsa0JBQWtCLENBQUNNLE9BQW5CLENBQTJCQyxLQUE3RCxFQUFvRTtBQUNsRUMsV0FBSyxXQUFJQyxtREFBSixpQ0FBc0M7QUFDekNDLGNBQU0sRUFBRSxNQURpQztBQUV6Q0MsZUFBTyxFQUFFO0FBQ1AsMEJBQWdCO0FBRFQsU0FGZ0M7QUFLekNDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLHFCQUFXLEVBQUVqQixXQUFXLENBQUNRLE9BQVosQ0FBb0JDO0FBRGQsU0FBZjtBQUxtQyxPQUF0QyxDQUFMLENBUUdTLElBUkgsQ0FRUSxVQUFDQyxHQUFEO0FBQUEsZUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxPQVJSO0FBU0QsS0FWRCxNQVVPO0FBQ0xoQixlQUFTLENBQUNJLE9BQVYsQ0FBa0JhLFNBQWxCLEdBQThCLHVCQUE5QjtBQUNEO0FBQ0YsR0FoQkQ7O0FBa0JBLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFO0FBQUEsa0dBdUN3QkMsK0RBdkN4QixFQXdDa0JBLG1FQXhDbEIsRUFtRGtCQSw4REFuRGxCLEVBNkRrQkEsbUVBN0RsQjtBQUFBLDZCQUNFO0FBQWtDLGdCQUFRLEVBQUVqQixjQUE1QztBQUFBLG9HQXNDc0JpQiwrREF0Q3RCLEVBdUNnQkEsbUVBdkNoQixFQWtEZ0JBLDhEQWxEaEIsRUE0RGdCQSxtRUE1RGhCLGFBQWdCLGlCQUFoQjtBQUFBLGdDQUNFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxhQUFHLEVBQUV0QixXQUZQO0FBR0UscUJBQVcsRUFBQyxxQkFIZDtBQUFBLHNHQXFDb0JzQiwrREFyQ3BCLEVBc0NjQSxtRUF0Q2QsRUFpRGNBLDhEQWpEZCxFQTJEY0EsbUVBM0RkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxhQUFHLEVBQUVwQixrQkFGUDtBQUdFLHFCQUFXLEVBQUMsbUJBSGQ7QUFBQSxzR0FnQ29Cb0IsK0RBaENwQixFQWlDY0EsbUVBakNkLEVBNENjQSw4REE1Q2QsRUFzRGNBLG1FQXREZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFXRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUEsc0dBMkJvQkEsK0RBM0JwQixFQTRCY0EsbUVBNUJkLEVBdUNjQSw4REF2Q2QsRUFpRGNBLG1FQWpEZDtBQUFBLHFCQUNHNUIsSUFESCxlQUVFLHFFQUFDLDJEQUFEO0FBQVMsbUJBQU8sRUFBRVM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsZUFlRTtBQUF1QixhQUFHLEVBQUVDLFNBQTVCO0FBQUEsc0dBdUJvQmtCLCtEQXZCcEIsRUF3QmNBLG1FQXhCZCxFQW1DY0EsOERBbkNkLEVBNkNjQSxtRUE3Q2QsYUFBYTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQSxnQkF3QzBCQSwrREF4QzFCLEVBeUNvQkEsbUVBekNwQixFQW9Eb0JBLDhEQXBEcEIsRUE4RG9CQSxtRUE5RHBCO0FBQUEsOHlCQXdDMEJBLCtEQXhDMUIseUJBeUNvQkEsbUVBekNwQiw0SkFvRG9CQSw4REFwRHBCLHVKQThEb0JBLG1FQTlEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBFRCxDQXZHRDs7R0FBTTlCLGlCO1VBR1dLLHFEOzs7S0FIWEwsaUI7QUF5R1NBLGdGQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aC9yZXNldHBhc3N3b3JkL1t1dWlkXS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvaG9zdFwiO1xuXG5jb25zdCBSZXNldFBhc3N3b3JkUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJDaGFuZ2UgcGFzc3dvcmRcIik7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdXVpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IHBhc3N3b3JkUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjb25maXJtUGFzc3dvcmRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHNwaW5uZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBlcnJNc2dSZWYgPSB1c2VSZWY8SFRNTFBhcmFncmFwaEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGNoYW5nZVBhc3N3b3JkID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAocGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZSA9PT0gY29uZmlybVBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUpIHtcbiAgICAgIGZldGNoKGAke2hvc3R9L2F1dGgvZW1haWwvcGFzc3dvcmQvcmVzZXRgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG5ld1Bhc3N3b3JkOiBwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICB9KSxcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVyck1zZ1JlZi5jdXJyZW50LmlubmVyVGV4dCA9IFwiUGFzc3dvcmRzIGRvbid0IG1hdGNoXCI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPG1haW4+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiIG9uU3VibWl0PXtjaGFuZ2VQYXNzd29yZH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVmPXtwYXNzd29yZFJlZn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IHBhc3N3b3JkOlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICByZWY9e2NvbmZpcm1QYXNzd29yZFJlZn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBwYXNzd29yZDpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgIDxTcGlubmVyIHNwaW5uZXI9e3NwaW5uZXJSZWZ9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyLW1zZ1wiIHJlZj17ZXJyTXNnUmVmfSAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA5NXZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1NSU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtaW5kZW50OiAxNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbkhvdmVyfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnItbXNnIHtcbiAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXNldFBhc3N3b3JkUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/resetpassword/[uuid]/index.tsx\n");

/***/ })

})