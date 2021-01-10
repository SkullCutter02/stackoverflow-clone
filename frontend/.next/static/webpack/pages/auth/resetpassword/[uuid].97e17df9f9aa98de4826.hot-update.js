webpackHotUpdate_N_E("pages/auth/resetpassword/[uuid]",{

/***/ "./pages/auth/resetpassword/[uuid]/index.tsx":
/*!***************************************************!*\
  !*** ./pages/auth/resetpassword/[uuid]/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Spinner */ \"./components/Spinner.tsx\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/auth/resetpassword/[uuid]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar ResetPasswordPage = function ResetPasswordPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isChangedPassword = _useState[0],\n      setIsChangedPassword = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"Change password\"),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var uuid = router.query.uuid;\n  var passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var confirmPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var errMsgRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var spinnerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var changePassword = function changePassword(e) {\n    e.preventDefault();\n\n    if (passwordRef.current.value === confirmPasswordRef.current.value) {\n      setText(\"\");\n      spinnerRef.current.style.display = \"block\";\n      fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/auth/email/password/reset\"), {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          newPassword: passwordRef.current.value,\n          token: uuid\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        if (!data.status.ok) {\n          errMsgRef.current.innerText = data.msg;\n          setText(\"Change password\");\n          spinnerRef.current.style.display = \"none\";\n        } else {\n          setIsChangedPassword(true);\n        }\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    } else {\n      errMsgRef.current.innerText = \"Passwords don't match\";\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365882503\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]),\n      children: !isChangedPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: changePassword,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365882503\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]) + \" \" + \"input-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365882503\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]),\n          children: \"Reset Password:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          ref: passwordRef,\n          placeholder: \"Enter new password:\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365882503\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          ref: confirmPasswordRef,\n          placeholder: \"Confirm password:\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365882503\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365882503\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]),\n          children: [text, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            spinner: spinnerRef\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          ref: errMsgRef,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365882503\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]) + \" \" + \"err-msg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365882503\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]) + \" \" + \"changed-password-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365882503\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]) + \" \" + \"header\",\n          children: \"Password Changed!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/auth/login\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365882503\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]) + \" \" + \"return\",\n            children: \"Return to Login page\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"365882503\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]],\n      children: \"main.__jsx-style-dynamic-selector{width:100%;height:80vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.input-container.__jsx-style-dynamic-selector{width:30%;height:55%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}input.__jsx-style-dynamic-selector{border:1px solid \".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], \";background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], \";color:#fff;min-height:40px;width:100%;text-indent:15px;font-size:0.8rem;margin:10px 0;}button.__jsx-style-dynamic-selector{border:none;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], \";color:white;width:150px;min-height:30px;border-radius:4px;cursor:pointer;margin:20px 0;}button.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"], \";}.err-msg.__jsx-style-dynamic-selector{color:#ff0000;text-align:center;width:90%;}h2.__jsx-style-dynamic-selector{margin:20px 0;}.changed-password-container.__jsx-style-dynamic-selector{width:40%;height:60%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header.__jsx-style-dynamic-selector,.return.__jsx-style-dynamic-selector{margin:10px 0;}.return.__jsx-style-dynamic-selector{-webkit-text-decoration:underline;text-decoration:underline;color:#929292;font-size:0.9rem;cursor:pointer;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvYXV0aC9yZXNldHBhc3N3b3JkL1t1dWlkXS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZrQixBQUdzQixBQVFELEFBU29DLEFBV2xDLEFBVzRCLEFBSTFCLEFBTUEsQUFJSixBQVVJLEFBSVksVUExRGYsQUE2Q0EsQ0FyREMsQ0E0QjRCLEVBZXRCLEFBTXBCLEFBY0EsT0F0RGUsQUE2Q0EsRUFyREEsU0EyQ0gsUUFMWixFQU1BLElBNUIwQyxNQVk1QixRQXNDRSxJQXJDRixVQXNDSyxFQXJDRCxVQWJMLEtBbURJLENBckNHLEdBdEJJLEFBNkNBLEVBckRDLEFBaUJQLFNBbURsQixJQXJDaUIsR0FiSixXQUNNLENBYUgsY0FDaEIsRUFibUIsaUJBQ0gsY0FDaEIsQ0FieUIsQUE2Q0EsdUJBckRKLDRFQVNBLEFBNkNBLGlCQXJEckIsNEVBU0EsQUE2Q0EiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9wYWdlcy9hdXRoL3Jlc2V0cGFzc3dvcmQvW3V1aWRdL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XG5cbmNvbnN0IFJlc2V0UGFzc3dvcmRQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2lzQ2hhbmdlZFBhc3N3b3JkLCBzZXRJc0NoYW5nZWRQYXNzd29yZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJDaGFuZ2UgcGFzc3dvcmRcIik7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdXVpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IHBhc3N3b3JkUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjb25maXJtUGFzc3dvcmRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGVyck1zZ1JlZiA9IHVzZVJlZjxIVE1MUGFyYWdyYXBoRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHNwaW5uZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGNoYW5nZVBhc3N3b3JkID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAocGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZSA9PT0gY29uZmlybVBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUpIHtcbiAgICAgIHNldFRleHQoXCJcIik7XG4gICAgICBzcGlubmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgZmV0Y2goYCR7aG9zdH0vYXV0aC9lbWFpbC9wYXNzd29yZC9yZXNldGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbmV3UGFzc3dvcmQ6IHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgICAgdG9rZW46IHV1aWQsXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoIWRhdGEuc3RhdHVzLm9rKSB7XG4gICAgICAgICAgICBlcnJNc2dSZWYuY3VycmVudC5pbm5lclRleHQgPSBkYXRhLm1zZztcbiAgICAgICAgICAgIHNldFRleHQoXCJDaGFuZ2UgcGFzc3dvcmRcIik7XG4gICAgICAgICAgICBzcGlubmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRJc0NoYW5nZWRQYXNzd29yZCh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyTXNnUmVmLmN1cnJlbnQuaW5uZXJUZXh0ID0gXCJQYXNzd29yZHMgZG9uJ3QgbWF0Y2hcIjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgeyFpc0NoYW5nZWRQYXNzd29yZCA/IChcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIiBvblN1Ym1pdD17Y2hhbmdlUGFzc3dvcmR9PlxuICAgICAgICAgICAgPGgyPlJlc2V0IFBhc3N3b3JkOjwvaDI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcmVmPXtwYXNzd29yZFJlZn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBuZXcgcGFzc3dvcmQ6XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcmVmPXtjb25maXJtUGFzc3dvcmRSZWZ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBwYXNzd29yZDpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgPFNwaW5uZXIgc3Bpbm5lcj17c3Bpbm5lclJlZn0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyLW1zZ1wiIHJlZj17ZXJyTXNnUmVmfSAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5nZWQtcGFzc3dvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCI+UGFzc3dvcmQgQ2hhbmdlZCE8L2gxPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvYXV0aC9sb2dpblwifT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmV0dXJuXCI+UmV0dXJuIHRvIExvZ2luIHBhZ2U8L3A+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1NSU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b259O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5tYWluQnV0dG9uSG92ZXJ9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVyci1tc2cge1xuICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoYW5nZWQtcGFzc3dvcmQtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlcixcbiAgICAgICAgLnJldHVybiB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAucmV0dXJuIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICBjb2xvcjogIzkyOTI5MjtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRQYXNzd29yZFBhZ2U7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/auth/resetpassword/[uuid]/index.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ResetPasswordPage, \"6ZlNHzqNk0+KHgorIDBrCZMj+Ag=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = ResetPasswordPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResetPasswordPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ResetPasswordPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZXNldHBhc3N3b3JkL1t1dWlkXS9pbmRleC50c3g/ZWNjMyJdLCJuYW1lcyI6WyJSZXNldFBhc3N3b3JkUGFnZSIsInVzZVN0YXRlIiwiaXNDaGFuZ2VkUGFzc3dvcmQiLCJzZXRJc0NoYW5nZWRQYXNzd29yZCIsInRleHQiLCJzZXRUZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXVpZCIsInF1ZXJ5IiwicGFzc3dvcmRSZWYiLCJ1c2VSZWYiLCJjb25maXJtUGFzc3dvcmRSZWYiLCJlcnJNc2dSZWYiLCJzcGlubmVyUmVmIiwiY2hhbmdlUGFzc3dvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiLCJmZXRjaCIsImhvc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdQYXNzd29yZCIsInRva2VuIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwib2siLCJpbm5lclRleHQiLCJtc2ciLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY3NzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQTJCLEdBQUcsU0FBOUJBLGlCQUE4QixHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQVUsS0FBVixDQURsQjtBQUFBLE1BQ2pDQyxpQkFEaUM7QUFBQSxNQUNkQyxvQkFEYzs7QUFBQSxtQkFFaEJGLHNEQUFRLENBQVMsaUJBQVQsQ0FGUTtBQUFBLE1BRWpDRyxJQUZpQztBQUFBLE1BRTNCQyxPQUYyQjs7QUFJeEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUp3QyxNQUtoQ0MsSUFMZ0MsR0FLdkJGLE1BQU0sQ0FBQ0csS0FMZ0IsQ0FLaENELElBTGdDO0FBT3hDLE1BQU1FLFdB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LG1FQW5EcEIsRUE4RG9CQSw4REE5RHBCLEVBd0VvQkEsbUVBeEVwQjtBQUFBLDh5QkFrRDBCQSwrREFsRDFCLHlCQW1Eb0JBLG1FQW5EcEIsZ0tBOERvQkEsOERBOURwQiwySkF3RW9CQSxtRUF4RXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2R0QsQ0ExSkQ7O0dBQU0xQyxpQjtVQUlXTyxxRDs7O0tBSlhQLGlCO0FBNEpTQSxnRkFBZiIsImZpbGUiOiIuL3BhZ2VzL2F1dGgvcmVzZXRwYXNzd29yZC9bdXVpZF0vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcblxuY29uc3QgUmVzZXRQYXNzd29yZFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbaXNDaGFuZ2VkUGFzc3dvcmQsIHNldElzQ2hhbmdlZFBhc3N3b3JkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIkNoYW5nZSBwYXNzd29yZFwiKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB1dWlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgcGFzc3dvcmRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgZXJyTXNnUmVmID0gdXNlUmVmPEhUTUxQYXJhZ3JhcGhFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgc3Bpbm5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlID09PSBjb25maXJtUGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZSkge1xuICAgICAgc2V0VGV4dChcIlwiKTtcbiAgICAgIHNwaW5uZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICBmZXRjaChgJHtob3N0fS9hdXRoL2VtYWlsL3Bhc3N3b3JkL3Jlc2V0YCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBuZXdQYXNzd29yZDogcGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgICB0b2tlbjogdXVpZCxcbiAgICAgICAgfSksXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmICghZGF0YS5zdGF0dXMub2spIHtcbiAgICAgICAgICAgIGVyck1zZ1JlZi5jdXJyZW50LmlubmVyVGV4dCA9IGRhdGEubXNnO1xuICAgICAgICAgICAgc2V0VGV4dChcIkNoYW5nZSBwYXNzd29yZFwiKTtcbiAgICAgICAgICAgIHNwaW5uZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldElzQ2hhbmdlZFBhc3N3b3JkKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJNc2dSZWYuY3VycmVudC5pbm5lclRleHQgPSBcIlBhc3N3b3JkcyBkb24ndCBtYXRjaFwiO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxtYWluPlxuICAgICAgICB7IWlzQ2hhbmdlZFBhc3N3b3JkID8gKFxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiIG9uU3VibWl0PXtjaGFuZ2VQYXNzd29yZH0+XG4gICAgICAgICAgICA8aDI+UmVzZXQgUGFzc3dvcmQ6PC9oMj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICByZWY9e3Bhc3N3b3JkUmVmfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5ldyBwYXNzd29yZDpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICByZWY9e2NvbmZpcm1QYXNzd29yZFJlZn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIHBhc3N3b3JkOlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICA8U3Bpbm5lciBzcGlubmVyPXtzcGlubmVyUmVmfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnItbXNnXCIgcmVmPXtlcnJNc2dSZWZ9IC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbmdlZC1wYXNzd29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJcIj5QYXNzd29yZCBDaGFuZ2VkITwvaDE+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9hdXRoL2xvZ2luXCJ9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXR1cm5cIj5SZXR1cm4gdG8gTG9naW4gcGFnZTwvcD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBoZWlnaHQ6IDU1JTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2Nzcy5pbnB1dEJvcmRlcn07XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaW5wdXRCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtaW5kZW50OiAxNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b25Ib3Zlcn07XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyLW1zZyB7XG4gICAgICAgICAgY29sb3I6ICNmZjAwMDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhbmdlZC1wYXNzd29yZC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLFxuICAgICAgICAucmV0dXJuIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXR1cm4ge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIGNvbG9yOiAjOTI5MjkyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXNldFBhc3N3b3JkUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/resetpassword/[uuid]/index.tsx\n");

/***/ })

})