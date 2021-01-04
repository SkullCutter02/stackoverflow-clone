webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Reply.tsx":
/*!******************************!*\
  !*** ./components/Reply.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Reply.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Reply = function Reply() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var postAnswer = function postAnswer(e) {\n    e.preventDefault();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3347303640\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"]]]]) + \" \" + \"reply-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: postAnswer,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3347303640\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"]]]]),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"reply\",\n          required: true,\n          placeholder: \"Reply to this question\",\n          value: text,\n          onChange: function onChange(e) {\n            setText(e.target.value);\n            window.scrollBy(0, 100);\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3347303640\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"]]]]) + \" \" + \"reply-form-textarea\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3347303640\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"]]]]),\n          children: \"Post your Answer\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          className: \"preview reply-preview\",\n          source: text,\n          plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_4___default.a]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3347303640\",\n      dynamic: [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"]],\n      children: \".reply-form-textarea.__jsx-style-dynamic-selector{width:82%;resize:none;display:block;height:\".concat(text.length === 0 ? \"120px\" : \"200px\", \";margin:30px auto;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], \";color:#ffffff;border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], \";padding:15px;}.reply-form-textarea.__jsx-style-dynamic-selector:focus{height:200px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9SZXBseS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNrQixBQUdxQixBQVlHLFVBWEQsR0FZZCxTQVhnQixjQUNzQixvQ0FDbkIsaUJBQ3VCLHdDQUMxQixjQUNnQyw4Q0FDakMsYUFDZiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvUmVwbHkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcblxuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcblxuY29uc3QgUmVwbHk6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIGNvbnN0IHBvc3RBbnN3ZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwbHktY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtwb3N0QW5zd2VyfT5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPVwicmVwbHlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVwbHktZm9ybS10ZXh0YXJlYVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiUmVwbHkgdG8gdGhpcyBxdWVzdGlvblwifVxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAxMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0+UG9zdCB5b3VyIEFuc3dlcjwvYnV0dG9uPlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3IHJlcGx5LXByZXZpZXdcIlxuICAgICAgICAgICAgc291cmNlPXt0ZXh0fVxuICAgICAgICAgICAgcGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJlcGx5LWZvcm0tdGV4dGFyZWEge1xuICAgICAgICAgIHdpZHRoOiA4MiU7XG4gICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogJHt0ZXh0Lmxlbmd0aCA9PT0gMCA/IFwiMTIwcHhcIiA6IFwiMjAwcHhcIn07XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaW5wdXRCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2Nzcy5pbnB1dEJvcmRlcn07XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBseS1mb3JtLXRleHRhcmVhOmZvY3VzIHtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGx5O1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Reply.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Reply, \"3t0DFnMi16eB/7p7iIKtjG5r68g=\");\n\n_c = Reply;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reply);\n\nvar _c;\n\n$RefreshReg$(_c, \"Reply\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXBseS50c3g/MmZiYiJdLCJuYW1lcyI6WyJSZXBseSIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJwb3N0QW5zd2VyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiY3NzIiwidGFyZ2V0IiwidmFsdWUiLCJ3aW5kb3ciLCJzY3JvbGxCeSIsInJlbWFya0dmbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQWUsR0FBRyxTQUFsQkEsS0FBa0IsR0FBTTtBQUFBOztBQUFBLGtCQUNKQyxzREFBUSxDQUFTLEVBQVQsQ0FESjtBQUFBLE1BQ3JCQyxJQURxQjtBQUFBLE1BQ2ZDLE9BRGU7O0FBRzVCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBTztBQUN4QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBLGtHQTJCY0osSUFBSSxDQUFDSyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLE9BQXBCLEdBQThCLE9BM0I1QyxFQTZCa0JDLG1FQTdCbEIsRUErQndCQSwrREEvQnhCLGFBQWUsaUJBQWY7QUFBQSw2QkFDRTtBQUFNLGdCQUFRLEVBQUVKLFVBQWhCO0FBQUEsb0dBMEJZRixJQUFJLENBQUNLLE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsT0FBcEIsR0FBOEIsT0ExQjFDLEVBNEJnQkMsbUVBNUJoQixFQThCc0JBLCtEQTlCdEI7QUFBQSxnQ0FDRTtBQUNFLFlBQUUsRUFBQyxPQURMO0FBR0Usa0JBQVEsTUFIVjtBQUlFLHFCQUFXLEVBQUUsd0JBSmY7QUFLRSxlQUFLLEVBQUVOLElBTFQ7QUFNRSxrQkFBUSxFQUFFLGtCQUFDRyxDQUFELEVBQU87QUFDZkYsbUJBQU8sQ0FBQ0UsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNBQyxrQkFBTSxDQUFDQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLEdBQW5CO0FBQ0QsV0FUSDtBQUFBLHNHQXlCVVYsSUFBSSxDQUFDSyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLE9BQXBCLEdBQThCLE9BekJ4QyxFQTJCY0MsbUVBM0JkLEVBNkJvQkEsK0RBN0JwQixhQUVZO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFO0FBQVEsY0FBSSxFQUFFLFFBQWQ7QUFBQSxzR0FjVU4sSUFBSSxDQUFDSyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLE9BQXBCLEdBQThCLE9BZHhDLEVBZ0JjQyxtRUFoQmQsRUFrQm9CQSwrREFsQnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBYUUscUVBQUMscURBQUQ7QUFDRSxtQkFBUyxFQUFDLHVCQURaO0FBRUUsZ0JBQU0sRUFBRU4sSUFGVjtBQUdFLGlCQUFPLEVBQUUsQ0FBQ1csaURBQUQ7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUEsZ0JBNEJnQlgsSUFBSSxDQUFDSyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLE9BQXBCLEdBQThCLE9BNUI5QyxFQThCb0JDLG1FQTlCcEIsRUFnQzBCQSwrREFoQzFCO0FBQUEsdUhBNEJnQk4sSUFBSSxDQUFDSyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLE9BQXBCLEdBQThCLE9BNUI5QywwQ0E4Qm9CQyxtRUE5QnBCLDZDQWdDMEJBLCtEQWhDMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJDRCxDQWxERDs7R0FBTVIsSzs7S0FBQUEsSztBQW9EU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcGx5LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5cbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5cbmNvbnN0IFJlcGx5OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCBwb3N0QW5zd2VyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGx5LWNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17cG9zdEFuc3dlcn0+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBpZD1cInJlcGx5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlcGx5LWZvcm0tdGV4dGFyZWFcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlJlcGx5IHRvIHRoaXMgcXVlc3Rpb25cIn1cbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgMTAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9PlBvc3QgeW91ciBBbnN3ZXI8L2J1dHRvbj5cbiAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlldyByZXBseS1wcmV2aWV3XCJcbiAgICAgICAgICAgIHNvdXJjZT17dGV4dH1cbiAgICAgICAgICAgIHBsdWdpbnM9e1tyZW1hcmtHZm1dfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yZXBseS1mb3JtLXRleHRhcmVhIHtcbiAgICAgICAgICB3aWR0aDogODIlO1xuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBoZWlnaHQ6ICR7dGV4dC5sZW5ndGggPT09IDAgPyBcIjEyMHB4XCIgOiBcIjIwMHB4XCJ9O1xuICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwbHktZm9ybS10ZXh0YXJlYTpmb2N1cyB7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBseTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Reply.tsx\n");

/***/ })

})