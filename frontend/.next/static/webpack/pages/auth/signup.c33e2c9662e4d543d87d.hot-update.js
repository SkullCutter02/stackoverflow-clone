webpackHotUpdate_N_E("pages/auth/signup",{

/***/ "./components/AuthForm.tsx":
/*!*********************************!*\
  !*** ./components/AuthForm.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/AuthForm.tsx\",\n    _this = undefined;\n\n\n\n\nvar AuthForm = function AuthForm(_ref) {\n  var formType = _ref.formType;\n\n  var submitForm = function submitForm(e) {\n    e.preventDefault();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-577249762\" + \" \" + \"auth-form-page-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitForm,\n        className: \"jsx-577249762\" + \" \" + \"auth-form-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-577249762\" + \" \" + \"auth-form-heading\",\n          children: formType === \"signup\" ? \"Signup\" : \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, _this), formType === \"signup\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-577249762\" + \" \" + \"auth-form auth-form-signup\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"username\",\n            placeholder: \"Username: \",\n            required: true,\n            className: \"jsx-577249762\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"email\",\n            placeholder: \"Email: \",\n            required: true,\n            className: \"jsx-577249762\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"password\",\n            placeholder: \"Password: \",\n            required: true,\n            className: \"jsx-577249762\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"confirmPassword\",\n            placeholder: \"Confirm Password: \",\n            required: true,\n            className: \"jsx-577249762\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-577249762\" + \" \" + \"auth-form-checkbox-container\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"checkbox\",\n              id: \"rememberMe\",\n              className: \"jsx-577249762\" + \" \" + \"auth-form-checkbox\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"rememberMe\",\n              className: \"jsx-577249762\",\n              children: \"Remember Me\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"jsx-577249762\" + \" \" + \"auth-form-submit-btn\",\n            children: \"Signup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-577249762\",\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"577249762\",\n      children: \".auth-form-page-container.jsx-577249762{width:100%;height:calc(100vh - 40px - 4px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.auth-form-container.jsx-577249762{height:80%;width:30%;min-width:310px;-webkit-transform:translateY(-30px);-ms-transform:translateY(-30px);transform:translateY(-30px);border:1px solid red;}.auth-form-heading.jsx-577249762{text-align:center;-webkit-transform:translateY(70px);-ms-transform:translateY(70px);transform:translateY(70px);}.auth-form.jsx-577249762{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;}.auth-form-input.jsx-577249762{display:block;width:100%;height:40px;margin:11px 0;text-indent:5px;background:#454545;color:white;border:2px solid #dedede;}.auth-form-input.jsx-577249762::-webkit-input-placeholder{font-size:0.8rem;color:white;}.auth-form-input.jsx-577249762::-moz-placeholder{font-size:0.8rem;color:white;}.auth-form-input.jsx-577249762:-ms-input-placeholder{font-size:0.8rem;color:white;}.auth-form-input.jsx-577249762::placeholder{font-size:0.8rem;color:white;}#username.jsx-577249762{margin-top:90px;}.auth-form-checkbox-container.jsx-577249762{margin-top:10px;border:1px solid red;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9BdXRoRm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VrQixBQUdzQixBQVFBLEFBUU8sQUFLTCxBQVNDLEFBV0csQUFLRCxBQUlBLFdBakRnQixBQVF0QixHQXNCQyxFQWdCYixBQUl1QixDQVRULENBekJlLEdBUFgsSUFzQkosSUFXZCxRQWhDOEIsQUFzQmQsQUFtQmhCLE1BbERlLFFBZ0NHLGdCQUNHLE9BYkcsWUFjVixZQUNhLGFBbkIzQixNQWZ5QixNQW1DekIsVUExQnVCLG1CQVdNLEVBVjdCLDhEQVRxQix5Q0FvQkEsb0RBbkJyQix5Q0FvQmEsV0FDQyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9BdXRoRm9ybS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZvcm1UeXBlOiBcInNpZ251cFwiIHwgXCJsb2dpblwiO1xufVxuXG5jb25zdCBBdXRoRm9ybTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZm9ybVR5cGUgfSkgPT4ge1xuICBjb25zdCBzdWJtaXRGb3JtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZm9ybS1wYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWZvcm0tY29udGFpbmVyXCIgb25TdWJtaXQ9e3N1Ym1pdEZvcm19PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhdXRoLWZvcm0taGVhZGluZ1wiPlxuICAgICAgICAgICAge2Zvcm1UeXBlID09PSBcInNpZ251cFwiID8gXCJTaWdudXBcIiA6IFwiTG9naW5cIn1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIHtmb3JtVHlwZSA9PT0gXCJzaWdudXBcIiA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1mb3JtIGF1dGgtZm9ybS1zaWdudXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZTogXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsOiBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQ6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZDogXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jaGVja2JveC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0tY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJyZW1lbWJlck1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVtZW1iZXJNZVwiPlJlbWVtYmVyIE1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1zdWJtaXQtYnRuXCI+XG4gICAgICAgICAgICAgICAgU2lnbnVwXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmF1dGgtZm9ybS1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCAtIDRweCk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgbWluLXdpZHRoOiAzMTBweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0taGVhZGluZyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMXB4IDA7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDU0NTQ1O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGVkZWRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICN1c2VybmFtZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tY2hlY2tib3gtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/AuthForm.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoRm9ybS50c3g/MDY5MyJdLCJuYW1lcyI6WyJBdXRoRm9ybSIsImZvcm1UeXBlIiwic3VibWl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BLElBQU1BLFFBQXlCLEdBQUcsU0FBNUJBLFFBQTRCLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNsRCxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBQSx5Q0FBZSwwQkFBZjtBQUFBLDZCQUNFO0FBQXNDLGdCQUFRLEVBQUVGLFVBQWhEO0FBQUEsMkNBQWdCLHFCQUFoQjtBQUFBLGdDQUNFO0FBQUEsNkNBQWMsbUJBQWQ7QUFBQSxvQkFDR0QsUUFBUSxLQUFLLFFBQWIsR0FBd0IsUUFBeEIsR0FBbUM7QUFEdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlHQSxRQUFRLEtBQUssUUFBYixnQkFDQztBQUFBLDZDQUFlLDRCQUFmO0FBQUEsa0NBQ0U7QUFDRSxnQkFBSSxFQUFDLE1BRFA7QUFHRSxjQUFFLEVBQUMsVUFITDtBQUlFLHVCQUFXLEVBQUMsWUFKZDtBQUtFLG9CQUFRLE1BTFY7QUFBQSwrQ0FFWTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFRRTtBQUNFLGdCQUFJLEVBQUMsTUFEUDtBQUdFLGNBQUUsRUFBQyxPQUhMO0FBSUUsdUJBQVcsRUFBQyxTQUpkO0FBS0Usb0JBQVEsTUFMVjtBQUFBLCtDQUVZO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQWVFO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBR0UsY0FBRSxFQUFDLFVBSEw7QUFJRSx1QkFBVyxFQUFDLFlBSmQ7QUFLRSxvQkFBUSxNQUxWO0FBQUEsK0NBRVk7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGLGVBc0JFO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBR0UsY0FBRSxFQUFDLGlCQUhMO0FBSUUsdUJBQVcsRUFBQyxvQkFKZDtBQUtFLG9CQUFRLE1BTFY7QUFBQSwrQ0FFWTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdEJGLGVBNkJFO0FBQUEsK0NBQWUsOEJBQWY7QUFBQSxvQ0FDRTtBQUNFLGtCQUFJLEVBQUMsVUFEUDtBQUdFLGdCQUFFLEVBQUMsWUFITDtBQUFBLGlEQUVZO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU1FO0FBQU8scUJBQU8sRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdCRixlQXFDRTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFBLCtDQUFnQyxzQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxnQkEyQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUhELENBdEhEOztLQUFNRCxRO0FBd0hTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXV0aEZvcm0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBmb3JtVHlwZTogXCJzaWdudXBcIiB8IFwibG9naW5cIjtcbn1cblxuY29uc3QgQXV0aEZvcm06IFJlYWN0LkZDPFByb3BzPiA9ICh7IGZvcm1UeXBlIH0pID0+IHtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0tcGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWNvbnRhaW5lclwiIG9uU3VibWl0PXtzdWJtaXRGb3JtfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIHtmb3JtVHlwZSA9PT0gXCJzaWdudXBcIiA/IFwiU2lnbnVwXCIgOiBcIkxvZ2luXCJ9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICB7Zm9ybVR5cGUgPT09IFwic2lnbnVwXCIgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZm9ybSBhdXRoLWZvcm0tc2lnbnVwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWU6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbDogXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkOiBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmQ6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0tY2hlY2tib3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwicmVtZW1iZXJNZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlbWVtYmVyTWVcIj5SZW1lbWJlciBNZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhdXRoLWZvcm0tc3VibWl0LWJ0blwiPlxuICAgICAgICAgICAgICAgIFNpZ251cFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aDE+TG9naW48L2gxPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hdXRoLWZvcm0tcGFnZS1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQwcHggLSA0cHgpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgIG1pbi13aWR0aDogMzEwcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWhlYWRpbmcge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzBweCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1pbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMTFweCAwO1xuICAgICAgICAgIHRleHQtaW5kZW50OiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzQ1NDU0NTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAjdXNlcm5hbWUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWNoZWNrYm94LWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AuthForm.tsx\n");

/***/ })

})