webpackHotUpdate_N_E("pages/auth/login",{

/***/ "./components/AuthForm.tsx":
/*!*********************************!*\
  !*** ./components/AuthForm.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/AuthForm.tsx\",\n    _this = undefined;\n\n\n\n\nvar AuthForm = function AuthForm(_ref) {\n  var formType = _ref.formType;\n\n  var submitForm = function submitForm(e) {\n    e.preventDefault();\n    var username = document.getElementById(\"username\");\n    var email = document.getElementById(\"email\");\n    var password = document.getElementById(\"password\");\n    var confirmPassword = document.getElementById(\"confirmPassword\");\n    var rememberMe = document.getElementById(\"rememberMe\");\n    var identifier = document.getElementById(\"identifier\");\n\n    if (formType === \"signup\") {} else if (formType === \"login\") {}\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-4177381106\" + \" \" + \"auth-form-page-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitForm,\n        className: \"jsx-4177381106\" + \" \" + \"auth-form-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-4177381106\" + \" \" + \"auth-form-heading\",\n          children: formType === \"signup\" ? \"Signup\" : \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, _this), formType === \"signup\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-4177381106\" + \" \" + \"auth-form auth-form-signup\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"username\",\n            placeholder: \"Username: \",\n            required: true,\n            className: \"jsx-4177381106\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"email\",\n            placeholder: \"Email: \",\n            required: true,\n            className: \"jsx-4177381106\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"password\",\n            id: \"password\",\n            placeholder: \"Password: \",\n            required: true,\n            className: \"jsx-4177381106\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"password\",\n            id: \"confirmPassword\",\n            placeholder: \"Confirm Password: \",\n            required: true,\n            className: \"jsx-4177381106\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-4177381106\" + \" \" + \"auth-form-checkbox-container\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"checkbox\",\n              id: \"rememberMe\",\n              className: \"jsx-4177381106\" + \" \" + \"auth-form-checkbox\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"rememberMe\",\n              className: \"jsx-4177381106\" + \" \" + \"auth-form-checkbox-label\",\n              children: \"Remember Me\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"jsx-4177381106\" + \" \" + \"auth-form-submit-btn\",\n            children: \"Signup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-4177381106\" + \" \" + \"auth-form auth-form-login\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"identifier\",\n            placeholder: \"Username or Email: \",\n            required: true,\n            className: \"jsx-4177381106\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"password\",\n            id: \"password\",\n            placeholder: \"Password: \",\n            required: true,\n            className: \"jsx-4177381106\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-4177381106\" + \" \" + \"auth-form-checkbox-container\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"checkbox\",\n              id: \"rememberMe\",\n              className: \"jsx-4177381106\" + \" \" + \"auth-form-checkbox\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"rememberMe\",\n              className: \"jsx-4177381106\" + \" \" + \"auth-form-checkbox-label\",\n              children: \"Remember Me\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"jsx-4177381106\" + \" \" + \"auth-form-submit-btn\",\n            children: \"Login\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"4177381106\",\n      children: \".auth-form-page-container.jsx-4177381106{width:100%;height:650px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.auth-form-container.jsx-4177381106{height:500px;width:30%;min-width:310px;-webkit-transform:translateY(-30px);-ms-transform:translateY(-30px);transform:translateY(-30px);}.auth-form-heading.jsx-4177381106{text-align:center;-webkit-transform:translateY(70px);-ms-transform:translateY(70px);transform:translateY(70px);}.auth-form.jsx-4177381106{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;}.auth-form-input.jsx-4177381106{display:block;width:100%;height:40px;margin:11px 0;text-indent:15px;background:#454545;color:white;border:2px solid #dedede;font-size:0.8rem;}.auth-form-input.jsx-4177381106::-webkit-input-placeholder{font-size:0.8rem;color:white;}.auth-form-input.jsx-4177381106::-moz-placeholder{font-size:0.8rem;color:white;}.auth-form-input.jsx-4177381106:-ms-input-placeholder{font-size:0.8rem;color:white;}.auth-form-input.jsx-4177381106::placeholder{font-size:0.8rem;color:white;}#username.jsx-4177381106{margin-top:90px;}#identifier.jsx-4177381106{margin-top:140px;}.auth-form-checkbox-container.jsx-4177381106{margin:10px 0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.auth-form-checkbox-label.jsx-4177381106{margin-left:15px;font-size:1rem;-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px);}.auth-form-checkbox.jsx-4177381106{margin-left:10px;}.auth-form-submit-btn.jsx-4177381106{background:#3580c2;border:1.5px solid #4f6f87;border-radius:2px;color:#bebebe;width:70px;height:30px;margin-top:10px;cursor:pointer;font-size:0.8rem;}.auth-form-submit-btn.jsx-4177381106:hover{background:#076bb8;color:#e2e2e2;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9BdXRoRm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhrQixBQUdzQixBQVFFLEFBT0ssQUFLTCxBQVNDLEFBWUcsQUFLRCxBQUlDLEFBSUgsQUFPRyxBQU1BLEFBSUUsQUFZQSxXQWxGTixFQVFILENBcUJDLEFBeUJBLEVBUmIsQ0FMYyxBQVNkLEFBV2lCLEFBTWpCLENBcEQ2QixDQXdEQSxBQVliLElBMUVFLENBUkgsQ0E2QkQsQUF5QkMsSUFiZixHQW9CNEIsQ0FzQjVCLElBckRnQixFQXJCYyxPQThEVixLQXhDRCxhQXlDSCxJQXhDSyxNQWJHLElBc0RYLFNBeENDLEVBeUNBLFNBekVXLENBaUNFLEFBcUJFLEVBb0JYLFVBNURsQixNQTZEaUIsS0FkakIsRUEzQm1CLFFBMENBLEdBbkVuQixNQTBCQSxRQTBDQSxHQTFENkIsNkNBbEJSLE9Bc0RyQixxREFuQ3FCLGlDQWxCckIsNERBbUJhLFdBQ0MsWUFDZCIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvQXV0aEZvcm0udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBmb3JtVHlwZTogXCJzaWdudXBcIiB8IFwibG9naW5cIjtcbn1cblxuY29uc3QgQXV0aEZvcm06IFJlYWN0LkZDPFByb3BzPiA9ICh7IGZvcm1UeXBlIH0pID0+IHtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIik7XG4gICAgY29uc3QgY29uZmlybVBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25maXJtUGFzc3dvcmRcIik7XG4gICAgY29uc3QgcmVtZW1iZXJNZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVtZW1iZXJNZVwiKTtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZGVudGlmaWVyXCIpO1xuXG4gICAgaWYgKGZvcm1UeXBlID09PSBcInNpZ251cFwiKSB7XG4gICAgfSBlbHNlIGlmIChmb3JtVHlwZSA9PT0gXCJsb2dpblwiKSB7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0tcGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWNvbnRhaW5lclwiIG9uU3VibWl0PXtzdWJtaXRGb3JtfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIHtmb3JtVHlwZSA9PT0gXCJzaWdudXBcIiA/IFwiU2lnbnVwXCIgOiBcIkxvZ2luXCJ9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICB7Zm9ybVR5cGUgPT09IFwic2lnbnVwXCIgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZm9ybSBhdXRoLWZvcm0tc2lnbnVwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWU6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbDogXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZDogXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZDogXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jaGVja2JveC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0tY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJyZW1lbWJlck1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJlbWVtYmVyTWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWNoZWNrYm94LWxhYmVsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBSZW1lbWJlciBNZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhdXRoLWZvcm0tc3VibWl0LWJ0blwiPlxuICAgICAgICAgICAgICAgIFNpZ251cFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZm9ybSBhdXRoLWZvcm0tbG9naW5cIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJpZGVudGlmaWVyXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lIG9yIEVtYWlsOiBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkOiBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWNoZWNrYm94LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBpZD1cInJlbWVtYmVyTWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwicmVtZW1iZXJNZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0tY2hlY2tib3gtbGFiZWxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJlbWVtYmVyIE1lXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1zdWJtaXQtYnRuXCI+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYXV0aC1mb3JtLXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDY1MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgbWluLXdpZHRoOiAzMTBweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1oZWFkaW5nIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0taW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW46IDExcHggMDtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDU0NTQ1O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGVkZWRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICN1c2VybmFtZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNpZGVudGlmaWVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tY2hlY2tib3gtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tY2hlY2tib3gtbGFiZWwge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tY2hlY2tib3gge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1zdWJtaXQtYnRuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzU4MGMyO1xuICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzRmNmY4NztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgY29sb3I6ICNiZWJlYmU7XG4gICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1zdWJtaXQtYnRuOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDc2YmI4O1xuICAgICAgICAgIGNvbG9yOiAjZTJlMmUyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/AuthForm.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoRm9ybS50c3g/MDY5MyJdLCJuYW1lcyI6WyJBdXRoRm9ybSIsImZvcm1UeXBlIiwic3VibWl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJuYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJyZW1lbWJlck1lIiwiaWRlbnRpZmllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BLElBQU1BLFFBQXlCLEdBQUcsU0FBNUJBLFFBQTRCLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNsRCxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBLFFBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWpCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLFFBQU1FLFFBQVEsR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWpCO0FBQ0EsUUFBTUcsZUFBZSxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXhCO0FBQ0EsUUFBTUksVUFBVSxHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbkI7QUFDQSxRQUFNSyxVQUFVLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFuQjs7QUFFQSxRQUFJTixRQUFRLEtBQUssUUFBakIsRUFBMkIsQ0FDMUIsQ0FERCxNQUNPLElBQUlBLFFBQVEsS0FBSyxPQUFqQixFQUEwQixDQUNoQztBQUNGLEdBYkQ7O0FBZUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSww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TUQsUTtBQXdNU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhGb3JtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZm9ybVR5cGU6IFwic2lnbnVwXCIgfCBcImxvZ2luXCI7XG59XG5cbmNvbnN0IEF1dGhGb3JtOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBmb3JtVHlwZSB9KSA9PiB7XG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIik7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpO1xuICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybVBhc3N3b3JkXCIpO1xuICAgIGNvbnN0IHJlbWVtYmVyTWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbWVtYmVyTWVcIik7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRlbnRpZmllclwiKTtcblxuICAgIGlmIChmb3JtVHlwZSA9PT0gXCJzaWdudXBcIikge1xuICAgIH0gZWxzZSBpZiAoZm9ybVR5cGUgPT09IFwibG9naW5cIikge1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jb250YWluZXJcIiBvblN1Ym1pdD17c3VibWl0Rm9ybX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1oZWFkaW5nXCI+XG4gICAgICAgICAgICB7Zm9ybVR5cGUgPT09IFwic2lnbnVwXCIgPyBcIlNpZ251cFwiIDogXCJMb2dpblwifVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAge2Zvcm1UeXBlID09PSBcInNpZ251cFwiID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0gYXV0aC1mb3JtLXNpZ251cFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lOiBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWw6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQ6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmQ6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0tY2hlY2tib3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwicmVtZW1iZXJNZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJyZW1lbWJlck1lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jaGVja2JveC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUmVtZW1iZXIgTWVcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLXN1Ym1pdC1idG5cIj5cbiAgICAgICAgICAgICAgICBTaWdudXBcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0gYXV0aC1mb3JtLWxvZ2luXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiaWRlbnRpZmllclwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZSBvciBFbWFpbDogXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZDogXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jaGVja2JveC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0tY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJyZW1lbWJlck1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJlbWVtYmVyTWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWNoZWNrYm94LWxhYmVsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBSZW1lbWJlciBNZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhdXRoLWZvcm0tc3VibWl0LWJ0blwiPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmF1dGgtZm9ybS1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA2NTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgIG1pbi13aWR0aDogMzEwcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0taGVhZGluZyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMXB4IDA7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzQ1NDU0NTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAjdXNlcm5hbWUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAjaWRlbnRpZmllciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWNoZWNrYm94LWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tc3VibWl0LWJ0biB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzM1ODBjMjtcbiAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM0ZjZmODc7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIGNvbG9yOiAjYmViZWJlO1xuICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tc3VibWl0LWJ0bjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzA3NmJiODtcbiAgICAgICAgICBjb2xvcjogI2UyZTJlMjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AuthForm.tsx\n");

/***/ })

})