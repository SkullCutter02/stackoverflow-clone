webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Reply.tsx":
/*!******************************!*\
  !*** ./components/Reply.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Reply.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Reply = function Reply() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var postAnswer = function postAnswer(e) {\n    e.preventDefault();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3443155980\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]) + \" \" + \"reply-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: postAnswer,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3443155980\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"reply\",\n          required: true,\n          placeholder: \"Reply to this question\",\n          value: text,\n          onChange: function onChange(e) {\n            setText(e.target.value);\n            window.scrollBy(0, 100);\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3443155980\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]) + \" \" + \"reply-form-textarea\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3443155980\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]]]]) + \" \" + \"reply-btn\",\n          children: \"Post your Answer\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          className: \"preview reply-preview\",\n          source: text,\n          plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_4___default.a]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3443155980\",\n      dynamic: [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"]],\n      children: \".reply-container.__jsx-style-dynamic-selector{width:82%;margin:40px auto;}.reply-form-textarea.__jsx-style-dynamic-selector{width:100%;resize:none;display:block;height:\".concat(text.length === 0 ? \"120px\" : \"200px\", \";background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], \";color:#ffffff;border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], \";padding:15px;}.reply-form-textarea.__jsx-style-dynamic-selector:focus{height:200px;}.reply-btn.__jsx-style-dynamic-selector{margin:20px 10px;float:right;border:none;color:#fff;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], \";border-radius:3px;padding:7px 10px;cursor:pointer;}.reply-btn.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"], \";}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9SZXBseS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NrQixBQUdxQixBQUtDLEFBV0UsQUFJSSxBQVd1QixVQTlCdkIsQ0FLTCxFQVdkLElBSWMsTUFkRSxJQUxoQixFQW9CYyxRQWR3QixHQXdCdEMsQ0FUYSxXQUM2QixxQkFmQSxtQkFnQnRCLGtCQUNELEdBaEJILGNBQ2dDLEFBZ0IvQixlQUNqQiwrQkFoQmUsYUFDZiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvUmVwbHkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcblxuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5cbmNvbnN0IFJlcGx5OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCBwb3N0QW5zd2VyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGx5LWNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17cG9zdEFuc3dlcn0+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBpZD1cInJlcGx5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlcGx5LWZvcm0tdGV4dGFyZWFcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlJlcGx5IHRvIHRoaXMgcXVlc3Rpb25cIn1cbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgMTAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlcGx5LWJ0blwiIHR5cGU9e1wic3VibWl0XCJ9PlxuICAgICAgICAgICAgUG9zdCB5b3VyIEFuc3dlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3IHJlcGx5LXByZXZpZXdcIlxuICAgICAgICAgICAgc291cmNlPXt0ZXh0fVxuICAgICAgICAgICAgcGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJlcGx5LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDgyJTtcbiAgICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBseS1mb3JtLXRleHRhcmVhIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAke3RleHQubGVuZ3RoID09PSAwID8gXCIxMjBweFwiIDogXCIyMDBweFwifTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcGx5LWZvcm0tdGV4dGFyZWE6Zm9jdXMge1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwbHktYnRuIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b259O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwbHktYnRuOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5tYWluQnV0dG9uSG92ZXJ9O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGx5O1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Reply.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Reply, \"3t0DFnMi16eB/7p7iIKtjG5r68g=\");\n\n_c = Reply;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reply);\n\nvar _c;\n\n$RefreshReg$(_c, \"Reply\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXBseS50c3g/MmZiYiJdLCJuYW1lcyI6WyJSZXBseSIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJwb3N0QW5zd2VyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiY3NzIiwidGFyZ2V0IiwidmFsdWUiLCJ3aW5kb3ciLCJzY3JvbGxCeSIsInJlbWFya0dmbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLElBQU1BLEtBQWUsR0FBRyxTQUFsQkEsS0FBa0IsR0FBTTtBQUFBOztBQUFBLGtCQUNKQyxzREFBUSxDQUFTLEVBQVQsQ0FESjtBQUFBLE1BQ3JCQyxJQURxQjtBQUFBLE1BQ2ZDLE9BRGU7O0FBRzVCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBTztBQUN4QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBLGtHQWtDY0osSUFBSSxDQUFDSyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLE9BQXBCLEdBQThCLE9BbEM1QyxFQW1Da0JDLG1FQW5DbEIsRUFxQ3dCQSwrREFyQ3hCLEVBa0RrQkEsOERBbERsQixFQXlEa0JBLG1FQXpEbEIsYUFBZSxpQkFBZjtBQUFBLDZCQUNFO0FBQU0sZ0JBQVEsRUFBRUosVUFBaEI7QUFBQSxvR0FpQ1lGLElBQUksQ0FBQ0ssTUFBTCxLQUFnQixDQUFoQixHQUFvQixPQUFwQixHQUE4QixPQWpDMUMsRUFrQ2dCQyxtRUFsQ2hCLEVBb0NzQkEsK0RBcEN0QixFQWlEZ0JBLDhEQWpEaEIsRUF3RGdCQSxtRUF4RGhCO0FBQUEsZ0NBQ0U7QUFDRSxZQUFFLEVBQUMsT0FETDtBQUdFLGtCQUFRLE1BSFY7QUFJRSxxQkFBVyxFQUFFLHdCQUpmO0FBS0UsZUFBSyxFQUFFTixJQUxUO0FBTUUsa0JBQVEsRUFBRSxrQkFBQ0csQ0FBRCxFQUFPO0FBQ2ZGLG1CQUFPLENBQUNFLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFWLENBQVA7QUFDQUMsa0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixHQUFuQjtBQUNELFdBVEg7QUFBQSxzR0FnQ1VWLElBQUksQ0FBQ0ssTUFBTCxLQUFnQixDQUFoQixHQUFvQixPQUFwQixHQUE4QixPQWhDeEMsRUFpQ2NDLG1FQWpDZCxFQW1Db0JBLCtEQW5DcEIsRUFnRGNBLDhEQWhEZCxFQXVEY0EsbUVBdkRkLGFBRVk7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBWUU7QUFBOEIsY0FBSSxFQUFFLFFBQXBDO0FBQUEsc0dBcUJVTixJQUFJLENBQUNLLE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsT0FBcEIsR0FBOEIsT0FyQnhDLEVBc0JjQyxtRUF0QmQsRUF3Qm9CQSwrREF4QnBCLEVBcUNjQSw4REFyQ2QsRUE0Q2NBLG1FQTVDZCxhQUFrQixXQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixlQWVFLHFFQUFDLHFEQUFEO0FBQ0UsbUJBQVMsRUFBQyx1QkFEWjtBQUVFLGdCQUFNLEVBQUVOLElBRlY7QUFHRSxpQkFBTyxFQUFFLENBQUNXLGlEQUFEO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBLGdCQW1DZ0JYLElBQUksQ0FBQ0ssTUFBTCxLQUFnQixDQUFoQixHQUFvQixPQUFwQixHQUE4QixPQW5DOUMsRUFvQ29CQyxtRUFwQ3BCLEVBc0MwQkEsK0RBdEMxQixFQW1Eb0JBLDhEQW5EcEIsRUEwRG9CQSxtRUExRHBCO0FBQUEsa01BbUNnQk4sSUFBSSxDQUFDSyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLE9BQXBCLEdBQThCLE9BbkM5Qyx5QkFvQ29CQyxtRUFwQ3BCLDZDQXNDMEJBLCtEQXRDMUIseU1BbURvQkEsOERBbkRwQiwwSEEwRG9CQSxtRUExRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnRUQsQ0F2RUQ7O0dBQU1SLEs7O0tBQUFBLEs7QUF5RVNBLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXBseS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcblxuY29uc3QgUmVwbHk6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIGNvbnN0IHBvc3RBbnN3ZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwbHktY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtwb3N0QW5zd2VyfT5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPVwicmVwbHlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVwbHktZm9ybS10ZXh0YXJlYVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiUmVwbHkgdG8gdGhpcyBxdWVzdGlvblwifVxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAxMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVwbHktYnRuXCIgdHlwZT17XCJzdWJtaXRcIn0+XG4gICAgICAgICAgICBQb3N0IHlvdXIgQW5zd2VyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXcgcmVwbHktcHJldmlld1wiXG4gICAgICAgICAgICBzb3VyY2U9e3RleHR9XG4gICAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmVwbHktY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogODIlO1xuICAgICAgICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcGx5LWZvcm0tdGV4dGFyZWEge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBoZWlnaHQ6ICR7dGV4dC5sZW5ndGggPT09IDAgPyBcIjEyMHB4XCIgOiBcIjIwMHB4XCJ9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwbHktZm9ybS10ZXh0YXJlYTpmb2N1cyB7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBseS1idG4ge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBseS1idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b25Ib3Zlcn07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwbHk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Reply.tsx\n");

/***/ })

})