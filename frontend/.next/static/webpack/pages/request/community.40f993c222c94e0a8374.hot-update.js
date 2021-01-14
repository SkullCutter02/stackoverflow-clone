webpackHotUpdate_N_E("pages/request/community",{

/***/ "./pages/request/community.tsx":
/*!*************************************!*\
  !*** ./pages/request/community.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/functions */ \"./utils/functions.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/request/community.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar RequestCommunityPage = function RequestCommunityPage() {\n  var requestCommunity = function requestCommunity(e) {\n    e.preventDefault();\n    var name = document.getElementById(\"id\");\n    var link = document.getElementById(\"link\");\n    var errMsg = document.getElementById(\"err-msg\");\n    fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_4__[\"default\"], \"/requests\"), {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        Authorization: \"Bearer \".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_5__[\"getCookie\"])(\"token\"))\n      },\n      body: JSON.stringify({\n        name: name.value,\n        link: link.value\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.msg) {\n        errMsg.innerText = data.msg;\n      } else {}\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3609852515\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]]]]),\n      children: \"Request Sent!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: requestCommunity,\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3609852515\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]]]]) + \" \" + \"request-community-form\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3609852515\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]]]]),\n        children: \"Request a Community: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        id: \"name\",\n        placeholder: \"Name of Community: \",\n        required: true,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3609852515\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]]]])\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        id: \"link\",\n        placeholder: \"Link to documentation: \",\n        required: true,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3609852515\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]]]])\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3609852515\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]]]]),\n        children: \"Request Community\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        id: \"err-msg\",\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3609852515\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]]]]) + \" \" + \"err-msg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3609852515\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]],\n      children: \".request-community-form.__jsx-style-dynamic-selector{height:250px;width:40%;margin:200px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transform:translateY(-40px);-ms-transform:translateY(-40px);transform:translateY(-40px);}h3.__jsx-style-dynamic-selector{text-align:center;margin:200px 0;}h2.__jsx-style-dynamic-selector{margin-bottom:20px;}input.__jsx-style-dynamic-selector{width:100%;height:40px;margin:10px 0;text-indent:15px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], \";color:#ffffff;border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], \";font-size:0.8rem;}button.__jsx-style-dynamic-selector{border:none;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], \";color:#cbcbcb;padding:8px 15px;border-radius:4px;cursor:pointer;margin:10px 0;}button.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"], \";color:#dbdbdb;}.err-msg.__jsx-style-dynamic-selector{margin:10px auto;color:#ff3f3f;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvcmVxdWVzdC9jb21tdW5pdHkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEa0IsQUFHd0IsQUFXSyxBQUtDLEFBSVIsQUFXQyxBQVU0QixBQUt2QixXQXpCTCxDQVc0QixDQS9COUIsSUE4Q0ksQ0FuQ0MsQ0FLakIsSUFmb0IsQUFvQkosUUEwQmhCLEVBbkNBLElBVW1CLEdBbUJILENBdkNELFdBOEJDLEVBVDBCLEFBbUIxQyxZQVRtQixpQkFDQyxXQVZKLE9BV0MsT0FWK0IsT0F0QnhCLENBaUNSLGNBQ2hCLHdCQVhtQixpQkFDbkIsc0JBdkJxQiw2RkFDSSxtR0FDSyxnR0FDOUIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9wYWdlcy9yZXF1ZXN0L2NvbW11bml0eS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuXG5jb25zdCBSZXF1ZXN0Q29tbXVuaXR5UGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3RDb21tdW5pdHkgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlua1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGVyck1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyLW1zZ1wiKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcblxuICAgIGZldGNoKGAke2hvc3R9L3JlcXVlc3RzYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZTogbmFtZS52YWx1ZSxcbiAgICAgICAgbGluazogbGluay52YWx1ZSxcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEubXNnKSB7XG4gICAgICAgICAgZXJyTXNnLmlubmVyVGV4dCA9IGRhdGEubXNnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxoMz5SZXF1ZXN0IFNlbnQhPC9oMz5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInJlcXVlc3QtY29tbXVuaXR5LWZvcm1cIiBvblN1Ym1pdD17cmVxdWVzdENvbW11bml0eX0+XG4gICAgICAgIDxoMj5SZXF1ZXN0IGEgQ29tbXVuaXR5OiA8L2gyPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWUgb2YgQ29tbXVuaXR5OiBcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cImxpbmtcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGluayB0byBkb2N1bWVudGF0aW9uOiBcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0+UmVxdWVzdCBDb21tdW5pdHk8L2J1dHRvbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyLW1zZ1wiIGlkPVwiZXJyLW1zZ1wiIC8+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJlcXVlc3QtY29tbXVuaXR5LWZvcm0ge1xuICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBtYXJnaW46IDIwMHB4IGF1dG87XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAyMDBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgIHRleHQtaW5kZW50OiAxNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgICAgY29sb3I6ICNjYmNiY2I7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbkhvdmVyfTtcbiAgICAgICAgICBjb2xvcjogI2RiZGJkYjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnItbXNnIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgICBjb2xvcjogI2ZmM2YzZjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Q29tbXVuaXR5UGFnZTtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/request/community.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = RequestCommunityPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestCommunityPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"RequestCommunityPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVxdWVzdC9jb21tdW5pdHkudHN4PzY5NDkiXSwibmFtZXMiOlsiUmVxdWVzdENvbW11bml0eVBhZ2UiLCJyZXF1ZXN0Q29tbXVuaXR5IiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsaW5rIiwiZXJyTXNnIiwiZmV0Y2giLCJob3N0IiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRDb29raWUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInZhbHVlIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwibXNnIiwiaW5uZXJUZXh0IiwiY3NzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsb0JBQThCLEdBQUcsU0FBakNBLG9CQUFpQyxHQUFNO0FBQzNDLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixDQUFiO0FBQ0EsUUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBLFFBQU1FLE1BQU0sR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWY7QUFFQUcsU0FBSyxXQUFJQyxtREFBSixnQkFBcUI7QUFDeEJDLFlBQU0sRUFBRSxNQURnQjtBQUV4QkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCLGtCQURUO0FBRVBDLHFCQUFhLG1CQUFZQyxrRUFBUyxDQUFDLE9BQUQsQ0FBckI7QUFGTixPQUZlO0FBTXhCQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CYixZQUFJLEVBQUVBLElBQUksQ0FBQ2MsS0FEUTtBQUVuQlgsWUFBSSxFQUFFQSxJQUFJLENBQUNXO0FBRlEsT0FBZjtBQU5rQixLQUFyQixDQUFMLENBV0dDLElBWEgsQ0FXUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQVhSLEVBWUdGLElBWkgsQ0FZUSxVQUFDRyxJQUFELEVBQVU7QUFDZCxVQUFJQSxJQUFJLENBQUNDLEdBQVQsRUFBYztBQUNaZixjQUFNLENBQUNnQixTQUFQLEdBQW1CRixJQUFJLENBQUNDLEdBQXhCO0FBQ0QsT0FGRCxNQUVPLENBQ047QUFDRixLQWpCSDtBQWtCRCxHQXpCRDs7QUEyQkEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBQSxrR0E2Q2tCRSxtRUE3Q2xCLEVBK0N3QkEsK0RBL0N4QixFQXFEa0JBLDhEQXJEbEIsRUE4RGtCQSxtRUE5RGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUF5QyxjQUFRLEVBQUV4QixnQkFBbkQ7QUFBQSxrR0E0Q2tCd0IsbUVBNUNsQixFQThDd0JBLCtEQTlDeEIsRUFvRGtCQSw4REFwRGxCLEVBNkRrQkEsbUVBN0RsQixhQUFnQix3QkFBaEI7QUFBQSw4QkFDRTtBQUFBLG9HQTJDZ0JBLG1FQTNDaEIsRUE2Q3NCQSwrREE3Q3RCLEVBbURnQkEsOERBbkRoQixFQTREZ0JBLG1FQTVEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxVQUFFLEVBQUMsTUFGTDtBQUdFLG1CQUFXLEVBQUMscUJBSGQ7QUFJRSxnQkFBUSxNQUpWO0FBQUEsb0dBMENnQkEsbUVBMUNoQixFQTRDc0JBLCtEQTVDdEIsRUFrRGdCQSw4REFsRGhCLEVBMkRnQkEsbUVBM0RoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQVFFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxVQUFFLEVBQUMsTUFGTDtBQUdFLG1CQUFXLEVBQUMseUJBSGQ7QUFJRSxnQkFBUSxNQUpWO0FBQUEsb0dBb0NnQkEsbUVBcENoQixFQXNDc0JBLCtEQXRDdEIsRUE0Q2dCQSw4REE1Q2hCLEVBcURnQkEsbUVBckRoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQWNFO0FBQVEsWUFBSSxFQUFFLFFBQWQ7QUFBQSxvR0E4QmdCQSxtRUE5QmhCLEVBZ0NzQkEsK0RBaEN0QixFQXNDZ0JBLDhEQXRDaEIsRUErQ2dCQSxtRUEvQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEYsZUFlRTtBQUF1QixVQUFFLEVBQUMsU0FBMUI7QUFBQSxvR0E2QmdCQSxtRUE3QmhCLEVBK0JzQkEsK0RBL0J0QixFQXFDZ0JBLDhEQXJDaEIsRUE4Q2dCQSxtRUE5Q2hCLGFBQWE7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBLGdCQThDb0JBLG1FQTlDcEIsRUFnRDBCQSwrREFoRDFCLEVBc0RvQkEsOERBdERwQixFQStEb0JBLG1FQS9EcEI7QUFBQSwyd0JBOENvQkEsbUVBOUNwQiw2Q0FnRDBCQSwrREFoRDFCLDJGQXNEb0JBLDhEQXREcEIsa0pBK0RvQkEsbUVBL0RwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkVELENBdkdEOztLQUFNekIsb0I7QUF5R1NBLG1GQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcmVxdWVzdC9jb21tdW5pdHkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uLy4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCIuLi8uLi91dGlscy9mdW5jdGlvbnNcIjtcblxuY29uc3QgUmVxdWVzdENvbW11bml0eVBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCByZXF1ZXN0Q29tbXVuaXR5ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmtcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBlcnJNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVyci1tc2dcIikgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG5cbiAgICBmZXRjaChgJHtob3N0fS9yZXF1ZXN0c2AsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKFwidG9rZW5cIil9YCxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWU6IG5hbWUudmFsdWUsXG4gICAgICAgIGxpbms6IGxpbmsudmFsdWUsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLm1zZykge1xuICAgICAgICAgIGVyck1zZy5pbm5lclRleHQgPSBkYXRhLm1zZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8aDM+UmVxdWVzdCBTZW50ITwvaDM+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyZXF1ZXN0LWNvbW11bml0eS1mb3JtXCIgb25TdWJtaXQ9e3JlcXVlc3RDb21tdW5pdHl9PlxuICAgICAgICA8aDI+UmVxdWVzdCBhIENvbW11bml0eTogPC9oMj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lIG9mIENvbW11bml0eTogXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJsaW5rXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxpbmsgdG8gZG9jdW1lbnRhdGlvbjogXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9PlJlcXVlc3QgQ29tbXVuaXR5PC9idXR0b24+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVyci1tc2dcIiBpZD1cImVyci1tc2dcIiAvPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yZXF1ZXN0LWNvbW11bml0eS1mb3JtIHtcbiAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgbWFyZ2luOiAyMDBweCBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMjAwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b259O1xuICAgICAgICAgIGNvbG9yOiAjY2JjYmNiO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b25Ib3Zlcn07XG4gICAgICAgICAgY29sb3I6ICNkYmRiZGI7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyLW1zZyB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgICAgY29sb3I6ICNmZjNmM2Y7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdENvbW11bml0eVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/request/community.tsx\n");

/***/ })

})