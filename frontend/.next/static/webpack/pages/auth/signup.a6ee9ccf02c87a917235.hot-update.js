webpackHotUpdate_N_E("pages/auth/signup",{

/***/ "./components/AuthForm.tsx":
/*!*********************************!*\
  !*** ./components/AuthForm.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/AuthForm.tsx\",\n    _this = undefined;\n\n\n\n\nvar AuthForm = function AuthForm(_ref) {\n  var formType = _ref.formType;\n\n  var submitForm = function submitForm(e) {\n    e.preventDefault();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-879449213\" + \" \" + \"auth-form-page-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitForm,\n        className: \"jsx-879449213\" + \" \" + \"auth-form-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-879449213\" + \" \" + \"auth-form-heading\",\n          children: formType === \"signup\" ? \"Signup\" : \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, _this), formType === \"signup\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-879449213\" + \" \" + \"auth-form auth-form-signup\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"username\",\n            placeholder: \"Username: \",\n            required: true,\n            className: \"jsx-879449213\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"email\",\n            placeholder: \"Email: \",\n            required: true,\n            className: \"jsx-879449213\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"password\",\n            placeholder: \"Password: \",\n            required: true,\n            className: \"jsx-879449213\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"confirmPassword\",\n            placeholder: \"Confirm Password: \",\n            required: true,\n            className: \"jsx-879449213\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-879449213\" + \" \" + \"auth-form-checkbox-container\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"checkbox\",\n              id: \"rememberMe\",\n              className: \"jsx-879449213\" + \" \" + \"auth-form-checkbox\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"rememberMe\",\n              className: \"jsx-879449213\" + \" \" + \"auth-form-checkbox-label\",\n              children: \"Remember Me\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"jsx-879449213\" + \" \" + \"auth-form-submit-btn\",\n            children: \"Signup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-879449213\",\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"879449213\",\n      children: \".auth-form-page-container.jsx-879449213{width:100%;height:calc(100vh - 40px - 4px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.auth-form-container.jsx-879449213{height:80%;width:30%;min-width:310px;-webkit-transform:translateY(-30px);-ms-transform:translateY(-30px);transform:translateY(-30px);}.auth-form-heading.jsx-879449213{text-align:center;-webkit-transform:translateY(70px);-ms-transform:translateY(70px);transform:translateY(70px);}.auth-form.jsx-879449213{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;}.auth-form-input.jsx-879449213{display:block;width:100%;height:40px;margin:11px 0;text-indent:5px;background:#454545;color:white;border:2px solid #dedede;}.auth-form-input.jsx-879449213::-webkit-input-placeholder{font-size:0.8rem;color:white;}.auth-form-input.jsx-879449213::-moz-placeholder{font-size:0.8rem;color:white;}.auth-form-input.jsx-879449213:-ms-input-placeholder{font-size:0.8rem;color:white;}.auth-form-input.jsx-879449213::placeholder{font-size:0.8rem;color:white;}#username.jsx-879449213{margin-top:90px;}.auth-form-checkbox-container.jsx-879449213{margin:10px 0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.auth-form-checkbox-label.jsx-879449213{margin-left:15px;font-size:1rem;-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px);}.auth-form-checkbox.jsx-879449213{margin-left:10px;}.auth-form-submit-btn.jsx-879449213{background:#3580c2;border:1.5px solid #4f6f87;border-radius:2px;color:#bebebe;width:70px;height:30px;margin-top:10px;cursor:pointer;}.auth-form-submit-btn.jsx-879449213:hover{background:#076bb8;color:#e2e2e2;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9BdXRoRm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVrQixBQUdzQixBQVFBLEFBT08sQUFLTCxBQVNDLEFBV0csQUFLRCxBQUlGLEFBT0csQUFNQSxBQUlFLEFBV0EsV0E1RWEsQUFRdEIsR0FxQkMsQUFvQkEsRUFKYixDQUxjLEFBZ0JHLEFBTWpCLENBL0M2QixDQW1EQSxBQVdiLEVBcEVFLElBcUJKLEFBb0JDLElBVGYsR0FnQjRCLENBcUI1QixJQXBFOEIsQUFxQmQsTUE5QkQsR0FrRUssS0FuQ0YsYUFvQ0YsR0FuQ0ssT0FiRyxJQWlEWCxRQW5DQyxHQW9DQSxTQW5DYSxDQWdCRSxFQW9CWCxVQXZEbEIsTUFkeUIsQUFzRVIsS0FkakIsQ0F0QkEsU0FxQ0EsQ0E5REEsbUJBVTZCLG9EQStCN0IsWUFqRHFCLHlDQW1CQSxvREFsQnJCLHlDQW1CYSxXQUNDLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9jb21wb25lbnRzL0F1dGhGb3JtLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZm9ybVR5cGU6IFwic2lnbnVwXCIgfCBcImxvZ2luXCI7XG59XG5cbmNvbnN0IEF1dGhGb3JtOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBmb3JtVHlwZSB9KSA9PiB7XG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jb250YWluZXJcIiBvblN1Ym1pdD17c3VibWl0Rm9ybX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1oZWFkaW5nXCI+XG4gICAgICAgICAgICB7Zm9ybVR5cGUgPT09IFwic2lnbnVwXCIgPyBcIlNpZ251cFwiIDogXCJMb2dpblwifVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAge2Zvcm1UeXBlID09PSBcInNpZ251cFwiID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0gYXV0aC1mb3JtLXNpZ251cFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lOiBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWw6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZDogXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkOiBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWNoZWNrYm94LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBpZD1cInJlbWVtYmVyTWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwicmVtZW1iZXJNZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0tY2hlY2tib3gtbGFiZWxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJlbWVtYmVyIE1lXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1zdWJtaXQtYnRuXCI+XG4gICAgICAgICAgICAgICAgU2lnbnVwXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmF1dGgtZm9ybS1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCAtIDRweCk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgbWluLXdpZHRoOiAzMTBweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1oZWFkaW5nIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0taW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW46IDExcHggMDtcbiAgICAgICAgICB0ZXh0LWluZGVudDogNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM0NTQ1NDU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZWRlZGU7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgI3VzZXJuYW1lIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1jaGVja2JveC1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1jaGVja2JveC1sYWJlbCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLXN1Ym1pdC1idG4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzNTgwYzI7XG4gICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNGY2Zjg3O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBjb2xvcjogI2JlYmViZTtcbiAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLXN1Ym1pdC1idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwNzZiYjg7XG4gICAgICAgICAgY29sb3I6ICNlMmUyZTI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/AuthForm.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoRm9ybS50c3g/MDY5MyJdLCJuYW1lcyI6WyJBdXRoRm9ybSIsImZvcm1UeXBlIiwic3VibWl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BLElBQU1BLFFBQXlCLEdBQUcsU0FBNUJBLFFBQTRCLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNsRCxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBQSx5Q0FBZSwwQkFBZjtBQUFBLDZCQUNFO0FBQXNDLGdCQUFRLEVBQUVGLFVBQWhEO0FBQUEsMkNBQWdCLHFCQUFoQjtBQUFBLGdDQUNFO0FBQUEsNkNBQWMsbUJBQWQ7QUFBQSxvQkFDR0QsUUFBUSxLQUFLLFFBQWIsR0FBd0IsUUFBeEIsR0FBbUM7QUFEdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlHQSxRQUFRLEtBQUssUUFBYixnQkFDQztBQUFBLDZDQUFlLDRCQUFmO0FBQUEsa0NBQ0U7QUFDRSxnQkFBSSxFQUFDLE1BRFA7QUFHRSxjQUFFLEVBQUMsVUFITDtBQUlFLHVCQUFXLEVBQUMsWUFKZDtBQUtFLG9CQUFRLE1BTFY7QUFBQSwrQ0FFWTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFRRTtBQUNFLGdCQUFJLEVBQUMsTUFEUDtBQUdFLGNBQUUsRUFBQyxPQUhMO0FBSUUsdUJBQVcsRUFBQyxTQUpkO0FBS0Usb0JBQVEsTUFMVjtBQUFBLCtDQUVZO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQWVFO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBR0UsY0FBRSxFQUFDLFVBSEw7QUFJRSx1QkFBVyxFQUFDLFlBSmQ7QUFLRSxvQkFBUSxNQUxWO0FBQUEsK0NBRVk7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGLGVBc0JFO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBR0UsY0FBRSxFQUFDLGlCQUhMO0FBSUUsdUJBQVcsRUFBQyxvQkFKZDtBQUtFLG9CQUFRLE1BTFY7QUFBQSwrQ0FFWTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdEJGLGVBNkJFO0FBQUEsK0NBQWUsOEJBQWY7QUFBQSxvQ0FDRTtBQUNFLGtCQUFJLEVBQUMsVUFEUDtBQUdFLGdCQUFFLEVBQUMsWUFITDtBQUFBLGlEQUVZO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU1FO0FBQ0UscUJBQU8sRUFBQyxZQURWO0FBQUEsaURBRVksMEJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdCRixlQTBDRTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFBLCtDQUFnQyxzQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxnQkFnREM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUpELENBdEpEOztLQUFNRCxRO0FBd0pTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXV0aEZvcm0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBmb3JtVHlwZTogXCJzaWdudXBcIiB8IFwibG9naW5cIjtcbn1cblxuY29uc3QgQXV0aEZvcm06IFJlYWN0LkZDPFByb3BzPiA9ICh7IGZvcm1UeXBlIH0pID0+IHtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0tcGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWNvbnRhaW5lclwiIG9uU3VibWl0PXtzdWJtaXRGb3JtfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIHtmb3JtVHlwZSA9PT0gXCJzaWdudXBcIiA/IFwiU2lnbnVwXCIgOiBcIkxvZ2luXCJ9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICB7Zm9ybVR5cGUgPT09IFwic2lnbnVwXCIgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZm9ybSBhdXRoLWZvcm0tc2lnbnVwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWU6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbDogXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkOiBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmQ6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0tY2hlY2tib3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwicmVtZW1iZXJNZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJyZW1lbWJlck1lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jaGVja2JveC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUmVtZW1iZXIgTWVcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLXN1Ym1pdC1idG5cIj5cbiAgICAgICAgICAgICAgICBTaWdudXBcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYXV0aC1mb3JtLXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4IC0gNHB4KTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBtaW4td2lkdGg6IDMxMHB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWhlYWRpbmcge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzBweCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1pbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMTFweCAwO1xuICAgICAgICAgIHRleHQtaW5kZW50OiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzQ1NDU0NTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAjdXNlcm5hbWUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWNoZWNrYm94LWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tc3VibWl0LWJ0biB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzM1ODBjMjtcbiAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM0ZjZmODc7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIGNvbG9yOiAjYmViZWJlO1xuICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tc3VibWl0LWJ0bjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzA3NmJiODtcbiAgICAgICAgICBjb2xvcjogI2UyZTJlMjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AuthForm.tsx\n");

/***/ })

})