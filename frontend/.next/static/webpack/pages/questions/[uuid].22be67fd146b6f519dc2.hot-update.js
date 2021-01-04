webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Reply.tsx":
/*!******************************!*\
  !*** ./components/Reply.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Reply.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Reply = function Reply(_ref) {\n  _s();\n\n  var question = _ref.question;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_8__[\"UserContext\"]);\n\n  var postAnswer = function postAnswer(e) {\n    e.preventDefault();\n    fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/posts/\").concat(question.uuid, \"/comments\"), {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        Authorization: \"Bearer \".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_7__[\"getCookie\"])(\"token\"))\n      },\n      body: JSON.stringify({})\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]) + \" \" + \"reply-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: postAnswer,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"reply\",\n          required: true,\n          placeholder: \"Reply to this question\",\n          value: text,\n          onChange: function onChange(e) {\n            setText(e.target.value);\n            window.scrollBy(0, 100);\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]) + \" \" + \"reply-form-textarea\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]) + \" \" + \"reply-btn\",\n          children: \"Post your Answer\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]) + \" \" + \"err-msg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          className: \"preview reply-preview\",\n          source: text,\n          plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_4___default.a]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1671903266\",\n      dynamic: [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]],\n      children: \".reply-container.__jsx-style-dynamic-selector{width:82%;margin:40px auto;}.reply-form-textarea.__jsx-style-dynamic-selector{width:100%;resize:none;display:block;height:\".concat(text.length === 0 ? \"120px\" : \"200px\", \";background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], \";color:#ffffff;border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], \";padding:15px;}.reply-form-textarea.__jsx-style-dynamic-selector:focus{height:200px;}.reply-btn.__jsx-style-dynamic-selector{margin:20px 10px;float:right;border:none;color:#fff;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], \";border-radius:3px;padding:7px 10px;cursor:pointer;}.reply-btn.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"], \";}.err-msg.__jsx-style-dynamic-selector{color:red;margin:20px 0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9SZXBseS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERrQixBQUdxQixBQUtDLEFBV0UsQUFJSSxBQVd1QixBQUk5QixVQWxDTyxBQW1DSCxDQTlCRixFQVdkLElBSWMsTUFkRSxDQThCaEIsR0FuQ0EsRUFvQmMsUUFkd0IsR0F3QnRDLENBVGEsV0FDNkIscUJBZkEsbUJBZ0J0QixrQkFDRCxHQWhCSCxjQUNnQyxBQWdCL0IsZUFDakIsK0JBaEJlLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9jb21wb25lbnRzL1JlcGx5LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5cbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgUXVlc3Rpb25UeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL2luZGl2aWR1YWxRdWVzdGlvblR5cGVcIjtcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCIuLi91dGlscy9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgUmVwbHk6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHF1ZXN0aW9uIH0pID0+IHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcblxuICBjb25zdCBwb3N0QW5zd2VyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBmZXRjaChgJHtob3N0fS9wb3N0cy8ke3F1ZXN0aW9uLnV1aWR9L2NvbW1lbnRzYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt9KSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwbHktY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtwb3N0QW5zd2VyfT5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPVwicmVwbHlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVwbHktZm9ybS10ZXh0YXJlYVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiUmVwbHkgdG8gdGhpcyBxdWVzdGlvblwifVxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAxMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVwbHktYnRuXCIgdHlwZT17XCJzdWJtaXRcIn0+XG4gICAgICAgICAgICBQb3N0IHlvdXIgQW5zd2VyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnItbXNnXCIgLz5cbiAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlldyByZXBseS1wcmV2aWV3XCJcbiAgICAgICAgICAgIHNvdXJjZT17dGV4dH1cbiAgICAgICAgICAgIHBsdWdpbnM9e1tyZW1hcmtHZm1dfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yZXBseS1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA4MiU7XG4gICAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAucmVwbHktZm9ybS10ZXh0YXJlYSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogJHt0ZXh0Lmxlbmd0aCA9PT0gMCA/IFwiMTIwcHhcIiA6IFwiMjAwcHhcIn07XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaW5wdXRCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2Nzcy5pbnB1dEJvcmRlcn07XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBseS1mb3JtLXRleHRhcmVhOmZvY3VzIHtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcGx5LWJ0biB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5tYWluQnV0dG9ufTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcGx5LWJ0bjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbkhvdmVyfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnItbXNnIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGx5O1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Reply.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Reply, \"P2q4SRWC09SPCD69Bo7cOWWy/zM=\");\n\n_c = Reply;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reply);\n\nvar _c;\n\n$RefreshReg$(_c, \"Reply\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXBseS50c3g/MmZiYiJdLCJuYW1lcyI6WyJSZXBseSIsInF1ZXN0aW9uIiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwicG9zdEFuc3dlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwiaG9zdCIsInV1aWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldENvb2tpZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibGVuZ3RoIiwiY3NzIiwidGFyZ2V0IiwidmFsdWUiLCJ3aW5kb3ciLCJzY3JvbGxCeSIsInJlbWFya0dmbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQU1BLElBQU1BLEtBQXNCLEdBQUcsU0FBekJBLEtBQXlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUN2QkMsc0RBQVEsQ0FBUyxFQUFULENBRGU7QUFBQSxNQUN4Q0MsSUFEd0M7QUFBQSxNQUNsQ0MsT0FEa0M7O0FBRS9DLE1BQU1DLFdBQVcsR0FBR0Msd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FBOUI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCQSxLQUFDLENBQUNDLGNBQUY7QUFFQUMsU0FBSyxXQUFJQyxtREFBSixvQkFBa0JYLFFBQVEsQ0FBQ1ksSUFBM0IsZ0JBQTRDO0FBQy9DQyxZQUFNLEVBQUUsTUFEdUM7QUFFL0NDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQixrQkFEVDtBQUVQQyxxQkFBYSxtQkFBWUMsa0VBQVMsQ0FBQyxPQUFELENBQXJCO0FBRk4sT0FGc0M7QUFNL0NDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWUsRUFBZjtBQU55QyxLQUE1QyxDQUFMO0FBUUQsR0FYRDs7QUFhQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBLGtHQW1DY2pCLElBQUksQ0FBQ2tCLE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsT0FBcEIsR0FBOEIsT0FuQzVDLEVBb0NrQkMsbUVBcENsQixFQXNDd0JBLCtEQXRDeEIsRUFtRGtCQSw4REFuRGxCLEVBMERrQkEsbUVBMURsQixhQUFlLGlCQUFmO0FBQUEsNkJBQ0U7QUFBTSxnQkFBUSxFQUFFZCxVQUFoQjtBQUFBLG9HQWtDWUwsSUFBSSxDQUFDa0IsTUFBTCxLQUFnQixDQUFoQixHQUFvQixPQUFwQixHQUE4QixPQWxDMUMsRUFtQ2dCQyxtRUFuQ2hCLEVBcUNzQkEsK0RBckN0QixFQWtEZ0JBLDhEQWxEaEIsRUF5RGdCQSxtRUF6RGhCO0FBQUEsZ0NBQ0U7QUFDRSxZQUFFLEVBQUMsT0FETDtBQUdFLGtCQUFRLE1BSFY7QUFJRSxxQkFBVyxFQUFFLHdCQUpmO0FBS0UsZUFBSyxFQUFFbkIsSUFMVDtBQU1FLGtCQUFRLEVBQUUsa0JBQUNNLENBQUQsRUFBTztBQUNmTCxtQkFBTyxDQUFDSyxDQUFDLENBQUNjLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0FDLGtCQUFNLENBQUNDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsR0FBbkI7QUFDRCxXQVRIO0FBQUEsc0dBaUNVdkIsSUFBSSxDQUFDa0IsTUFBTCxLQUFnQixDQUFoQixHQUFvQixPQUFwQixHQUE4QixPQWpDeEMsRUFrQ2NDLG1FQWxDZCxFQW9Db0JBLCtEQXBDcEIsRUFpRGNBLDhEQWpEZCxFQXdEY0EsbUVBeERkLGFBRVk7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBWUU7QUFBOEIsY0FBSSxFQUFFLFFBQXBDO0FBQUEsc0dBc0JVbkIsSUFBSSxDQUFDa0IsTUFBTCxLQUFnQixDQUFoQixHQUFvQixPQUFwQixHQUE4QixPQXRCeEMsRUF1QmNDLG1FQXZCZCxFQXlCb0JBLCtEQXpCcEIsRUFzQ2NBLDhEQXRDZCxFQTZDY0EsbUVBN0NkLGFBQWtCLFdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBZUU7QUFBQSxzR0FtQlVuQixJQUFJLENBQUNrQixNQUFMLEtBQWdCLENBQWhCLEdBQW9CLE9BQXBCLEdBQThCLE9BbkJ4QyxFQW9CY0MsbUVBcEJkLEVBc0JvQkEsK0RBdEJwQixFQW1DY0EsOERBbkNkLEVBMENjQSxtRUExQ2QsYUFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUFnQkUscUVBQUMscURBQUQ7QUFDRSxtQkFBUyxFQUFDLHVCQURaO0FBRUUsZ0JBQU0sRUFBRW5CLElBRlY7QUFHRSxpQkFBTyxFQUFFLENBQUN3QixpREFBRDtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUEsZ0JBb0NnQnhCLElBQUksQ0FBQ2tCLE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsT0FBcEIsR0FBOEIsT0FwQzlDLEVBcUNvQkMsbUVBckNwQixFQXVDMEJBLCtEQXZDMUIsRUFvRG9CQSw4REFwRHBCLEVBMkRvQkEsbUVBM0RwQjtBQUFBLGtNQW9DZ0JuQixJQUFJLENBQUNrQixNQUFMLEtBQWdCLENBQWhCLEdBQW9CLE9BQXBCLEdBQThCLE9BcEM5Qyx5QkFxQ29CQyxtRUFyQ3BCLDZDQXVDMEJBLCtEQXZDMUIseU1Bb0RvQkEsOERBcERwQiwwSEEyRG9CQSxtRUEzRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzRUQsQ0F2RkQ7O0dBQU10QixLOztLQUFBQSxLO0FBeUZTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVwbHkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcblxuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBxdWVzdGlvbjogUXVlc3Rpb25UeXBlO1xufVxuXG5jb25zdCBSZXBseTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcXVlc3Rpb24gfSkgPT4ge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIGNvbnN0IHBvc3RBbnN3ZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7cXVlc3Rpb24udXVpZH0vY29tbWVudHNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe30pLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBseS1jb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3Bvc3RBbnN3ZXJ9PlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgaWQ9XCJyZXBseVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZXBseS1mb3JtLXRleHRhcmVhXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJSZXBseSB0byB0aGlzIHF1ZXN0aW9uXCJ9XG4gICAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIDEwMCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZXBseS1idG5cIiB0eXBlPXtcInN1Ym1pdFwifT5cbiAgICAgICAgICAgIFBvc3QgeW91ciBBbnN3ZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVyci1tc2dcIiAvPlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3IHJlcGx5LXByZXZpZXdcIlxuICAgICAgICAgICAgc291cmNlPXt0ZXh0fVxuICAgICAgICAgICAgcGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJlcGx5LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDgyJTtcbiAgICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBseS1mb3JtLXRleHRhcmVhIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAke3RleHQubGVuZ3RoID09PSAwID8gXCIxMjBweFwiIDogXCIyMDBweFwifTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcGx5LWZvcm0tdGV4dGFyZWE6Zm9jdXMge1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwbHktYnRuIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b259O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwbHktYnRuOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5tYWluQnV0dG9uSG92ZXJ9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVyci1tc2cge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwbHk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Reply.tsx\n");

/***/ })

})