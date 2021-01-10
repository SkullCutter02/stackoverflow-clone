webpackHotUpdate_N_E("pages/auth/resetpassword",{

/***/ "./pages/auth/resetpassword/index.tsx":
/*!********************************************!*\
  !*** ./pages/auth/resetpassword/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/source/index.js\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Spinner */ \"./components/Spinner.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/auth/resetpassword/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar ResetPasswordEmailPage = function ResetPasswordEmailPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isSent = _useState[0],\n      setIsSent = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"Send Email\"),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var errMsgRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var spinnerRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    emailjs_com__WEBPACK_IMPORTED_MODULE_5__[\"init\"](\"user_T4JvjEK9hRkJhuh75F1iy\");\n  }, []);\n\n  var sendEmail = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var res, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              _context.next = 3;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_7__[\"default\"], \"/auth/email/password/reset/send\"), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                  email: inputRef.current.value\n                })\n              });\n\n            case 3:\n              res = _context.sent;\n              _context.next = 6;\n              return res.json();\n\n            case 6:\n              data = _context.sent;\n\n              if (data.msg !== undefined) {\n                errMsgRef.current.innerText = data.msg;\n              } else {\n                errMsgRef.current.innerText = \"\";\n                setText(\"\");\n                spinnerRef.current.style.display = \"block\";\n                emailjs_com__WEBPACK_IMPORTED_MODULE_5__[\"send\"](\"service_i431z9z\", \"template_6nvm25b\", {\n                  email: inputRef.current.value,\n                  reset_link: data.link\n                }).then(function (res) {\n                  if (res.status >= 200 && res.status < 300) {\n                    setIsSent(true);\n                  }\n                })[\"catch\"](function (err) {\n                  return console.log(err);\n                });\n              }\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function sendEmail(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"563459247\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"]]]]) + \" \" + \"resetpassword-container\",\n      children: !isSent ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n        onSubmit: sendEmail,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"563459247\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"]]]]) + \" \" + \"input-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"563459247\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"]]]]),\n          children: \"Reset Password:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          placeholder: \"Enter your email address: \",\n          required: true,\n          ref: inputRef,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"563459247\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"]]]]) + \" \" + \"email-input\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"563459247\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"]]]]) + \" \" + \"submit\",\n          children: [text, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            spinner: spinnerRef\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n          ref: errMsgRef,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"563459247\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"]]]]) + \" \" + \"err-msg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"563459247\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"]]]]),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"563459247\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"]]]]),\n          children: \"Email Sent!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"563459247\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"]],\n      children: \".resetpassword-container.__jsx-style-dynamic-selector{width:100%;height:80vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.input-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:70%;width:30%;}.email-input.__jsx-style-dynamic-selector{border:1px solid \".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], \";background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], \";color:#fff;min-height:40px;width:100%;text-indent:15px;font-size:0.8rem;}.submit.__jsx-style-dynamic-selector{border:none;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], \";color:white;width:90px;height:25px;border-radius:4px;cursor:pointer;}.submit.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"], \";}h2.__jsx-style-dynamic-selector,.submit.__jsx-style-dynamic-selector,.email-input.__jsx-style-dynamic-selector{margin:15px 0;}.err-msg.__jsx-style-dynamic-selector{color:#ff0000;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvYXV0aC9yZXNldHBhc3N3b3JkL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRmtCLEFBR3NCLEFBUUUsQUFTaUMsQUFVbEMsQUFVNEIsQUFNMUIsQUFJQSxXQTlDRixDQTJCNEIsRUFnQjFDLEFBSUEsU0E5Q2UsaUJBb0NmLE1BcEIwQyxNQVc1QixZQUNELFVBckJZLENBc0JYLFdBWkQsQ0FhTyxVQTdCSyxBQWlCUCxRQWFELFFBWkosT0FhYixJQVptQixpQkFDQSxpQkFDbkIsZUFkcUIsdUJBTkEsc0VBT0csdUJBTnhCLHVEQU9hLFdBQ0QsVUFDWiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL3BhZ2VzL2F1dGgvcmVzZXRwYXNzd29yZC9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBlbWFpbGpzIGZyb20gXCJlbWFpbGpzLWNvbVwiO1xuXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcblxuY29uc3QgUmVzZXRQYXNzd29yZEVtYWlsUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2lzU2VudCwgc2V0SXNTZW50XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlNlbmQgRW1haWxcIik7XG5cbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGVyck1zZ1JlZiA9IHVzZVJlZjxIVE1MUGFyYWdyYXBoRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHNwaW5uZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZW1haWxqcy5pbml0KFwidXNlcl9UNEp2akVLOWhSa0podWg3NUYxaXlcIik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZW5kRW1haWwgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2hvc3R9L2F1dGgvZW1haWwvcGFzc3dvcmQvcmVzZXQvc2VuZGAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWw6IGlucHV0UmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGlmIChkYXRhLm1zZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJNc2dSZWYuY3VycmVudC5pbm5lclRleHQgPSBkYXRhLm1zZztcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyTXNnUmVmLmN1cnJlbnQuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICAgIHNldFRleHQoXCJcIik7XG4gICAgICBzcGlubmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgZW1haWxqc1xuICAgICAgICAuc2VuZChcInNlcnZpY2VfaTQzMXo5elwiLCBcInRlbXBsYXRlXzZudm0yNWJcIiwge1xuICAgICAgICAgIGVtYWlsOiBpbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICAgIHJlc2V0X2xpbms6IGRhdGEubGluayxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICBzZXRJc1NlbnQodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNldHBhc3N3b3JkLWNvbnRhaW5lclwiPlxuICAgICAgICB7IWlzU2VudCA/IChcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIiBvblN1Ym1pdD17c2VuZEVtYWlsfT5cbiAgICAgICAgICAgIDxoMj5SZXNldCBQYXNzd29yZDo8L2gyPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVtYWlsLWlucHV0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3M6IFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICA8U3Bpbm5lciBzcGlubmVyPXtzcGlubmVyUmVmfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnItbXNnXCIgcmVmPXtlcnJNc2dSZWZ9IC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+RW1haWwgU2VudCE8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJlc2V0cGFzc3dvcmQtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lbWFpbC1pbnB1dCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJtaXQge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5tYWluQnV0dG9ufTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc3VibWl0OmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5tYWluQnV0dG9uSG92ZXJ9O1xuICAgICAgICB9XG5cbiAgICAgICAgaDIsXG4gICAgICAgIC5zdWJtaXQsXG4gICAgICAgIC5lbWFpbC1pbnB1dCB7XG4gICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyLW1zZyB7XG4gICAgICAgICAgY29sb3I6ICNmZjAwMDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRQYXNzd29yZEVtYWlsUGFnZTtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/auth/resetpassword/index.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ResetPasswordEmailPage, \"vKNfocyyUqWoXRVHXEIFq0SzaIY=\");\n\n_c = ResetPasswordEmailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResetPasswordEmailPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ResetPasswordEmailPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZXNldHBhc3N3b3JkL2luZGV4LnRzeD83M2QyIl0sIm5hbWVzIjpbIlJlc2V0UGFzc3dvcmRFbWFpbFBhZ2UiLCJ1c2VTdGF0ZSIsImlzU2VudCIsInNldElzU2VudCIsInRleHQiLCJzZXRUZXh0IiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJlcnJNc2dSZWYiLCJzcGlubmVyUmVmIiwidXNlRWZmZWN0IiwiZW1haWxqcyIsInNlbmRFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwiaG9zdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVtYWlsIiwiY3VycmVudCIsInZhbHVlIiwicmVzIiwianNvbiIsImRhdGEiLCJtc2ciLCJ1bmRlZmluZWQiLCJpbm5lclRleHQiLCJzdHlsZSIsImRpc3BsYXkiLCJyZXNldF9saW5rIiwibGluayIsInRoZW4iLCJzdGF0dXMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY3NzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBTTtBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFVLEtBQVYsQ0FERDtBQUFBLE1BQzVCQyxNQUQ0QjtBQUFBLE1BQ3BCQyxTQURvQjs7QUFBQSxtQkFFWEYsc0RBQVEsQ0FBUyxZQUFULENBRkc7QUFBQSxNQUU1QkcsSUFGNEI7QUFBQSxNQUV0QkMsT0FGc0I7O0FBSW5DLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBbUIsSUFBbkIsQ0FBdkI7QUFDQSxNQUFNQyxTQUFTLEdBQUdELG9EQUFNLENBQXVCLElBQXZCLENBQXhCO0FBQ0EsTUFBTUUsVUFBVSxHQUFHRixvREFBTSxDQUFpQixJQUFqQixDQUF6QjtBQUVBRyx5REFBUyxDQUFDLFlBQU07QUFD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LHFCQUNHcEMsSUFESCxlQUVFLHFFQUFDLDJEQUFEO0FBQVMsbUJBQU8sRUFBRUs7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFhRTtBQUF1QixhQUFHLEVBQUVELFNBQTVCO0FBQUEscUdBNEJrQmdDLCtEQTVCbEIsRUE2QllBLG1FQTdCWixFQXVDWUEsOERBdkNaLEVBZ0RZQSxtRUFoRFosYUFBYTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZ0JBaUJDO0FBQUEsbUdBeUJvQkEsK0RBekJwQixFQTBCY0EsbUVBMUJkLEVBb0NjQSw4REFwQ2QsRUE2Q2NBLG1FQTdDZDtBQUFBLCtCQUNFO0FBQUEscUdBd0JrQkEsK0RBeEJsQixFQXlCWUEsbUVBekJaLEVBbUNZQSw4REFuQ1osRUE0Q1lBLG1FQTVDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQSxnQkE0QzBCQSwrREE1QzFCLEVBNkNvQkEsbUVBN0NwQixFQXVEb0JBLDhEQXZEcEIsRUFnRW9CQSxtRUFoRXBCO0FBQUEseTBCQTRDMEJBLCtEQTVDMUIseUJBNkNvQkEsbUVBN0NwQixtSkF1RG9CQSw4REF2RHBCLHlJQWdFb0JBLG1FQWhFcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdGRCxDQS9IRDs7R0FBTXhDLHNCOztLQUFBQSxzQjtBQWlJU0EscUZBQWYiLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3Jlc2V0cGFzc3dvcmQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgZW1haWxqcyBmcm9tIFwiZW1haWxqcy1jb21cIjtcblxuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi8uLi8uLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi8uLi8uLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XG5cbmNvbnN0IFJlc2V0UGFzc3dvcmRFbWFpbFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc1NlbnQsIHNldElzU2VudF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJTZW5kIEVtYWlsXCIpO1xuXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBlcnJNc2dSZWYgPSB1c2VSZWY8SFRNTFBhcmFncmFwaEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBzcGlubmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGVtYWlsanMuaW5pdChcInVzZXJfVDRKdmpFSzloUmtKaHVoNzVGMWl5XCIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2VuZEVtYWlsID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtob3N0fS9hdXRoL2VtYWlsL3Bhc3N3b3JkL3Jlc2V0L3NlbmRgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsOiBpbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBpZiAoZGF0YS5tc2cgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyTXNnUmVmLmN1cnJlbnQuaW5uZXJUZXh0ID0gZGF0YS5tc2c7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVyck1zZ1JlZi5jdXJyZW50LmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICBzZXRUZXh0KFwiXCIpO1xuICAgICAgc3Bpbm5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgIGVtYWlsanNcbiAgICAgICAgLnNlbmQoXCJzZXJ2aWNlX2k0MzF6OXpcIiwgXCJ0ZW1wbGF0ZV82bnZtMjViXCIsIHtcbiAgICAgICAgICBlbWFpbDogaW5wdXRSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgICByZXNldF9saW5rOiBkYXRhLmxpbmssXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgc2V0SXNTZW50KHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzZXRwYXNzd29yZC1jb250YWluZXJcIj5cbiAgICAgICAgeyFpc1NlbnQgPyAoXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCIgb25TdWJtaXQ9e3NlbmRFbWFpbH0+XG4gICAgICAgICAgICA8aDI+UmVzZXQgUGFzc3dvcmQ6PC9oMj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbWFpbC1pbnB1dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzOiBcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgPFNwaW5uZXIgc3Bpbm5lcj17c3Bpbm5lclJlZn0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyLW1zZ1wiIHJlZj17ZXJyTXNnUmVmfSAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkVtYWlsIFNlbnQhPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yZXNldHBhc3N3b3JkLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dC1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZW1haWwtaW5wdXQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc3VibWl0IHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Ym1pdDpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbkhvdmVyfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyLFxuICAgICAgICAuc3VibWl0LFxuICAgICAgICAuZW1haWwtaW5wdXQge1xuICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVyci1tc2cge1xuICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2V0UGFzc3dvcmRFbWFpbFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/resetpassword/index.tsx\n");

/***/ })

})