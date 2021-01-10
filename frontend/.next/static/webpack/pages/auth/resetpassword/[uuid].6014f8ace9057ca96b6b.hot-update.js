webpackHotUpdate_N_E("pages/auth/resetpassword/[uuid]",{

/***/ "./pages/auth/resetpassword/[uuid]/index.tsx":
/*!***************************************************!*\
  !*** ./pages/auth/resetpassword/[uuid]/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/host */ \"./utils/host.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/auth/resetpassword/[uuid]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ResetPasswordPage = function ResetPasswordPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isChangedPassword = _useState[0],\n      setIsChangedPassword = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var uuid = router.query.uuid;\n  var passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var confirmPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var errMsgRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var changePassword = function changePassword(e) {\n    e.preventDefault();\n\n    if (passwordRef.current.value === confirmPasswordRef.current.value) {\n      fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_5__[\"default\"], \"/auth/email/password/reset\"), {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          newPassword: passwordRef.current.value,\n          token: uuid\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        if (data.status < 200 && data.status >= 300) {\n          errMsgRef.current.innerText = data.msg;\n        } else {}\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    } else {\n      errMsgRef.current.innerText = \"Passwords don't match\";\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]),\n      children: !isChangedPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: changePassword,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]) + \" \" + \"input-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          ref: passwordRef,\n          placeholder: \"Enter new password:\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          ref: confirmPasswordRef,\n          placeholder: \"Confirm password:\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]),\n          children: \"Change password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          ref: errMsgRef,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]) + \" \" + \"err-msg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2994438694\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]]]]),\n        children: \"Hello\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2994438694\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"]],\n      children: \"main.__jsx-style-dynamic-selector{width:100%;height:95vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.input-container.__jsx-style-dynamic-selector{width:30%;height:55%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}input.__jsx-style-dynamic-selector{border:1px solid \".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], \";background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], \";color:#fff;height:40px;width:100%;text-indent:15px;font-size:0.8rem;margin:10px 0;}button.__jsx-style-dynamic-selector{border:none;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButton\"], \";color:white;width:150px;height:30px;border-radius:4px;cursor:pointer;margin:20px 0;}button.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"mainButtonHover\"], \";}.err-msg.__jsx-style-dynamic-selector{color:#ff0000;text-align:center;width:90%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvYXV0aC9yZXNldHBhc3N3b3JkL1t1dWlkXS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VrQixBQUdzQixBQVFELEFBU29DLEFBV2xDLEFBVzRCLEFBSTFCLFVBbENILENBUkMsQ0E0QjRCLEVBZXRCLE9BbENMLEVBUkEsU0EyQ0gsUUFMWixFQU1BLElBNUIwQyxNQVk1QixZQUNBLFlBQ0EsVUFiRCxFQWNPLE9BdEJJLEVBUkMsQUFpQlgsU0FjRyxHQWJKLFdBQ00sQ0FhSCxjQUNoQixFQWJtQixpQkFDSCxjQUNoQixLQWJ5Qix1QkFSSiw0RUFTQSxpQkFSckIsNEVBU0EiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9wYWdlcy9hdXRoL3Jlc2V0cGFzc3dvcmQvW3V1aWRdL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9ob3N0XCI7XG5cbmNvbnN0IFJlc2V0UGFzc3dvcmRQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2lzQ2hhbmdlZFBhc3N3b3JkLCBzZXRJc0NoYW5nZWRQYXNzd29yZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdXVpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IHBhc3N3b3JkUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjb25maXJtUGFzc3dvcmRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGVyck1zZ1JlZiA9IHVzZVJlZjxIVE1MUGFyYWdyYXBoRWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlID09PSBjb25maXJtUGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZSkge1xuICAgICAgZmV0Y2goYCR7aG9zdH0vYXV0aC9lbWFpbC9wYXNzd29yZC9yZXNldGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbmV3UGFzc3dvcmQ6IHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgICAgdG9rZW46IHV1aWQsXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPCAyMDAgJiYgZGF0YS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgICBlcnJNc2dSZWYuY3VycmVudC5pbm5lclRleHQgPSBkYXRhLm1zZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJNc2dSZWYuY3VycmVudC5pbm5lclRleHQgPSBcIlBhc3N3b3JkcyBkb24ndCBtYXRjaFwiO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxtYWluPlxuICAgICAgICB7IWlzQ2hhbmdlZFBhc3N3b3JkID8gKFxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiIG9uU3VibWl0PXtjaGFuZ2VQYXNzd29yZH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcmVmPXtwYXNzd29yZFJlZn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBuZXcgcGFzc3dvcmQ6XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcmVmPXtjb25maXJtUGFzc3dvcmRSZWZ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBwYXNzd29yZDpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNoYW5nZSBwYXNzd29yZDwvYnV0dG9uPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyLW1zZ1wiIHJlZj17ZXJyTXNnUmVmfSAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PkhlbGxvPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA5NXZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1NSU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtaW5kZW50OiAxNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbkhvdmVyfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnItbXNnIHtcbiAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXNldFBhc3N3b3JkUGFnZTtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/auth/resetpassword/[uuid]/index.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ResetPasswordPage, \"YVCqnv53cRgERX2+oJM0qT41gvI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = ResetPasswordPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResetPasswordPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ResetPasswordPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZXNldHBhc3N3b3JkL1t1dWlkXS9pbmRleC50c3g/ZWNjMyJdLCJuYW1lcyI6WyJSZXNldFBhc3N3b3JkUGFnZSIsInVzZVN0YXRlIiwiaXNDaGFuZ2VkUGFzc3dvcmQiLCJzZXRJc0NoYW5nZWRQYXNzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsInV1aWQiLCJxdWVyeSIsInBhc3N3b3JkUmVmIiwidXNlUmVmIiwiY29uZmlybVBhc3N3b3JkUmVmIiwiZXJyTXNnUmVmIiwiY2hhbmdlUGFzc3dvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJmZXRjaCIsImhvc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdQYXNzd29yZCIsInRva2VuIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwiaW5uZXJUZXh0IiwibXNnIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQTJCLEdBQUcsU0FBOUJBLGlCQUE4QixHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQVUsS0FBVixDQURsQjtBQUFBLE1BQ2pDQyxpQkFEaUM7QUFBQSxNQUNkQyxvQkFEYzs7QUFHeEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUh3QyxNQUloQ0MsSUFKZ0MsR0FJdkJGLE1BQU0sQ0FBQ0csS0FKZ0IsQ0FJaENELElBSmdDO0FBTXhDLE1BQU1FLFdBQVcsR0FBR0Msb0RBQU0sQ0FBbUIsSUFBbkIsQ0FBMUI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0Qsb0RBQU0sQ0FBbUIsSUFBbkIsQ0FBakM7QUFDQSxNQUFNRSxTQUFTLEdBQUdGLG9EQUFNLENBQXVCLElBQXZCLENBQXhCOztBQUVBLE1BQU1H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LGFBREY7QUFBQTtBQUFBLGdCQXlDMEJBLCtEQXpDMUIsRUEwQ29CQSxtRUExQ3BCLEVBcURvQkEsOERBckRwQixFQStEb0JBLG1FQS9EcEI7QUFBQSw4eUJBeUMwQkEsK0RBekMxQix5QkEwQ29CQSxtRUExQ3BCLDRKQXFEb0JBLDhEQXJEcEIsdUpBK0RvQkEsbUVBL0RwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkVELENBaEhEOztHQUFNcEMsaUI7VUFHV0sscUQ7OztLQUhYTCxpQjtBQWtIU0EsZ0ZBQWYiLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3Jlc2V0cGFzc3dvcmQvW3V1aWRdL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9ob3N0XCI7XG5cbmNvbnN0IFJlc2V0UGFzc3dvcmRQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2lzQ2hhbmdlZFBhc3N3b3JkLCBzZXRJc0NoYW5nZWRQYXNzd29yZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdXVpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IHBhc3N3b3JkUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjb25maXJtUGFzc3dvcmRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGVyck1zZ1JlZiA9IHVzZVJlZjxIVE1MUGFyYWdyYXBoRWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlID09PSBjb25maXJtUGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZSkge1xuICAgICAgZmV0Y2goYCR7aG9zdH0vYXV0aC9lbWFpbC9wYXNzd29yZC9yZXNldGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbmV3UGFzc3dvcmQ6IHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgICAgdG9rZW46IHV1aWQsXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPCAyMDAgJiYgZGF0YS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgICBlcnJNc2dSZWYuY3VycmVudC5pbm5lclRleHQgPSBkYXRhLm1zZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJNc2dSZWYuY3VycmVudC5pbm5lclRleHQgPSBcIlBhc3N3b3JkcyBkb24ndCBtYXRjaFwiO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxtYWluPlxuICAgICAgICB7IWlzQ2hhbmdlZFBhc3N3b3JkID8gKFxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiIG9uU3VibWl0PXtjaGFuZ2VQYXNzd29yZH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcmVmPXtwYXNzd29yZFJlZn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBuZXcgcGFzc3dvcmQ6XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcmVmPXtjb25maXJtUGFzc3dvcmRSZWZ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBwYXNzd29yZDpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNoYW5nZSBwYXNzd29yZDwvYnV0dG9uPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyLW1zZ1wiIHJlZj17ZXJyTXNnUmVmfSAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PkhlbGxvPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA5NXZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1NSU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtaW5kZW50OiAxNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbkhvdmVyfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnItbXNnIHtcbiAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXNldFBhc3N3b3JkUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/resetpassword/[uuid]/index.tsx\n");

/***/ })

})