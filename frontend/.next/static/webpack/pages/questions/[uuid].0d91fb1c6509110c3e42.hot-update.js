webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/EditPost.tsx":
false,

/***/ "./components/EditQuestion.tsx":
/*!*************************************!*\
  !*** ./components/EditQuestion.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/EditQuestion.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar EditQuestion = function EditQuestion(_ref) {\n  _s();\n\n  var setEditMode = _ref.setEditMode,\n      question = _ref.question;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(question.body),\n      body = _useState[0],\n      setBody = _useState[1];\n\n  var editForm = function editForm(e) {\n    e.preventDefault();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: editForm,\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3586319948\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"]]]]) + \" \" + \"edit-post-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n        id: \"edit-form-body\",\n        cols: 30,\n        rows: 10,\n        value: body,\n        onChange: function onChange(e) {\n          return setBody(e.target.value);\n        },\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3586319948\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"]]]])\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        className: \"preview edit-post-preview\",\n        source: body\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3586319948\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"]],\n      children: \".edit-post-container.__jsx-style-dynamic-selector{width:92%;margin:20px auto;border:1px solid red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#edit-form-body.__jsx-style-dynamic-selector{width:90%;resize:none;height:400px;margin-bottom:20px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBackground\"], \";border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"inputBorder\"], \";color:#fff;padding:15px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9FZGl0UXVlc3Rpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDa0IsQUFHcUIsQUFTQSxVQVJPLEFBU0wsWUFDQyxLQVRRLFFBVUYsYUFUTixNQVUyQix3Q0FDTSw0QkFWeEIsa0JBV1gsV0FDRSxhQUNmLG9DQVpxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9jb21wb25lbnRzL0VkaXRRdWVzdGlvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuXG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2V0RWRpdE1vZGU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgRWRpdFF1ZXN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBzZXRFZGl0TW9kZSwgcXVlc3Rpb24gfSkgPT4ge1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZTxzdHJpbmc+KHF1ZXN0aW9uLmJvZHkpO1xuXG4gIGNvbnN0IGVkaXRGb3JtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJlZGl0LXBvc3QtY29udGFpbmVyXCIgb25TdWJtaXQ9e2VkaXRGb3JtfT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9XCJlZGl0LWZvcm0tYm9keVwiXG4gICAgICAgICAgY29scz17MzB9XG4gICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCb2R5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPFJlYWN0TWFya2Rvd24gY2xhc3NOYW1lPVwicHJldmlldyBlZGl0LXBvc3QtcHJldmlld1wiIHNvdXJjZT17Ym9keX0gLz5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZWRpdC1wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAjZWRpdC1mb3JtLWJvZHkge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRRdWVzdGlvbjtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/EditQuestion.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EditQuestion, \"FM1n9wNrJtbxCQPFPFI6421/1wQ=\");\n\n_c = EditQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditQuestion);\n\nvar _c;\n\n$RefreshReg$(_c, \"EditQuestion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0UXVlc3Rpb24udHN4PzE2MDEiXSwibmFtZXMiOlsiRWRpdFF1ZXN0aW9uIiwic2V0RWRpdE1vZGUiLCJxdWVzdGlvbiIsInVzZVN0YXRlIiwiYm9keSIsInNldEJvZHkiLCJlZGl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNzcyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTs7QUFPQSxJQUFNQSxZQUE2QixHQUFHLFNBQWhDQSxZQUFnQyxPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxXQUE0QixRQUE1QkEsV0FBNEI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQzNDQyxzREFBUSxDQUFTRCxRQUFRLENBQUNFLElBQWxCLENBRG1DO0FBQUEsTUFDNURBLElBRDREO0FBQUEsTUFDdERDLE9BRHNEOztBQUduRSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBc0MsY0FBUSxFQUFFRixRQUFoRDtBQUFBLGtHQTBCa0JHLG1FQTFCbEIsRUEyQndCQSwrREEzQnhCLGFBQWdCLHFCQUFoQjtBQUFBLDhCQUNFO0FBQ0UsVUFBRSxFQUFDLGdCQURMO0FBRUUsWUFBSSxFQUFFLEVBRlI7QUFHRSxZQUFJLEVBQUUsRUFIUjtBQUlFLGFBQUssRUFBRUwsSUFKVDtBQUtFLGdCQUFRLEVBQUUsa0JBQUNHLENBQUQ7QUFBQSxpQkFBT0YsT0FBTyxDQUFDRSxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUEsU0FMWjtBQUFBLG9HQXlCZ0JGLG1FQXpCaEIsRUEwQnNCQSwrREExQnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBUUUscUVBQUMscURBQUQ7QUFBZSxpQkFBUyxFQUFDLDJCQUF6QjtBQUFxRCxjQUFNLEVBQUVMO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUEsZ0JBMkJvQkssbUVBM0JwQixFQTRCMEJBLCtEQTVCMUI7QUFBQSxnZUEyQm9CQSxtRUEzQnBCLCtCQTRCMEJBLCtEQTVCMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9DRCxDQTNDRDs7R0FBTVQsWTs7S0FBQUEsWTtBQTZDU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0VkaXRRdWVzdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuXG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2V0RWRpdE1vZGU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgRWRpdFF1ZXN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBzZXRFZGl0TW9kZSwgcXVlc3Rpb24gfSkgPT4ge1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZTxzdHJpbmc+KHF1ZXN0aW9uLmJvZHkpO1xuXG4gIGNvbnN0IGVkaXRGb3JtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJlZGl0LXBvc3QtY29udGFpbmVyXCIgb25TdWJtaXQ9e2VkaXRGb3JtfT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9XCJlZGl0LWZvcm0tYm9keVwiXG4gICAgICAgICAgY29scz17MzB9XG4gICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCb2R5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPFJlYWN0TWFya2Rvd24gY2xhc3NOYW1lPVwicHJldmlldyBlZGl0LXBvc3QtcHJldmlld1wiIHNvdXJjZT17Ym9keX0gLz5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZWRpdC1wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAjZWRpdC1mb3JtLWJvZHkge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRRdWVzdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/EditQuestion.tsx\n");

/***/ }),

/***/ "./pages/questions/[uuid]/index.tsx":
/*!******************************************!*\
  !*** ./pages/questions/[uuid]/index.tsx ***!
  \******************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Question */ \"./components/Question.tsx\");\n/* harmony import */ var _components_PostAnswer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/PostAnswer */ \"./components/PostAnswer.tsx\");\n/* harmony import */ var _components_Aside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Aside */ \"./components/Aside.tsx\");\n/* harmony import */ var _components_Answers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Answers */ \"./components/Answers.tsx\");\n/* harmony import */ var _components_EditQuestion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/EditQuestion */ \"./components/EditQuestion.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/questions/[uuid]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar QuestionPage = function QuestionPage(_ref) {\n  _s();\n\n  var uuid = _ref.uuid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      editMode = _useState[0],\n      setEditMode = _useState[1];\n\n  var fetchQuestions = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/posts/\").concat(uuid));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchQuestions() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])([\"individual-question\"], function () {\n    return fetchQuestions();\n  }, {\n    cacheTime: 0\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-4228215692\",\n      children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-4228215692\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-4228215692\",\n        children: error.message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-4228215692\",\n          children: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-4228215692\" + \" \" + \"h1-border-btm\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n          className: \"jsx-4228215692\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-4228215692\" + \" \" + \"left\",\n            children: [!editMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Question__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n              question: data,\n              setEditMode: setEditMode\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 19\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_EditQuestion__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              setEditMode: setEditMode,\n              question: data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_PostAnswer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n              question: data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n              className: \"jsx-4228215692\",\n              children: \"Answers:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Answers__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n              question: data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Aside__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            borderSide: \"left\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"4228215692\",\n      children: \"h1.jsx-4228215692{font-size:1.3rem;line-height:1.4em;margin:20px auto;width:88%;}.h1-border-btm.jsx-4228215692{width:96%;margin:0 auto;border-bottom:1px solid #fff;}main.jsx-4228215692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.left.jsx-4228215692{width:80%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvcXVlc3Rpb25zL1t1dWlkXS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERrQixBQUc0QixBQU9QLEFBTUcsQUFLSCxVQVZJLEFBV2hCLE9BbEJvQixPQVFXLFdBUFosaUJBQ1AsQ0FPWixTQU5BLFlBVWdDLG1IQUNoQyIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL3BhZ2VzL3F1ZXN0aW9ucy9bdXVpZF0vaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IGhvc3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbmltcG9ydCBQb3N0QW5zd2VyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Bvc3RBbnN3ZXJcIjtcbmltcG9ydCBBc2lkZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Bc2lkZVwiO1xuaW1wb3J0IEFuc3dlcnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQW5zd2Vyc1wiO1xuaW1wb3J0IEVkaXRRdWVzdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9FZGl0UXVlc3Rpb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXVpZDogc3RyaW5nO1xufVxuXG5jb25zdCBRdWVzdGlvblBhZ2U6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHV1aWQgfSkgPT4ge1xuICBjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBmZXRjaFF1ZXN0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtob3N0fS9wb3N0cy8ke3V1aWR9YCk7XG4gICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG4gIH07XG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeTxRdWVzdGlvblR5cGUsIEVycm9yPihcbiAgICBbXCJpbmRpdmlkdWFsLXF1ZXN0aW9uXCJdLFxuICAgICgpID0+IGZldGNoUXVlc3Rpb25zKCksXG4gICAgeyBjYWNoZVRpbWU6IDAgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdj5cbiAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgICAgPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8aDE+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDEtYm9yZGVyLWJ0bVwiIC8+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgeyFlZGl0TW9kZSA/IChcbiAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbiBxdWVzdGlvbj17ZGF0YX0gc2V0RWRpdE1vZGU9e3NldEVkaXRNb2RlfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8RWRpdFF1ZXN0aW9uIHNldEVkaXRNb2RlPXtzZXRFZGl0TW9kZX0gcXVlc3Rpb249e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8UG9zdEFuc3dlciBxdWVzdGlvbj17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICA8aDE+QW5zd2Vyczo8L2gxPlxuICAgICAgICAgICAgICAgIDxBbnN3ZXJzIHF1ZXN0aW9uPXtkYXRhfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEFzaWRlIGJvcmRlclNpZGU9e1wibGVmdFwifSAvPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA4OCU7XG4gICAgICAgIH1cblxuICAgICAgICAuaDEtYm9yZGVyLWJ0bSB7XG4gICAgICAgICAgd2lkdGg6IDk2JTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxlZnQge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdXVpZDogY29udGV4dC5wYXJhbXMudXVpZCxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25QYWdlO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/questions/[uuid]/index.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(QuestionPage, \"KlVRZPpOOYrFRgvU/gGdDXO7BPc=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = QuestionPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"QuestionPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVlc3Rpb25zL1t1dWlkXS9pbmRleC50c3g/ZDkxYyJdLCJuYW1lcyI6WyJRdWVzdGlvblBhZ2UiLCJ1dWlkIiwidXNlU3RhdGUiLCJlZGl0TW9kZSIsInNldEVkaXRNb2RlIiwiZmV0Y2hRdWVzdGlvbnMiLCJmZXRjaCIsImhvc3QiLCJyZXMiLCJqc29uIiwidXNlUXVlcnkiLCJjYWNoZVRpbWUiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1BLFlBQTZCLEdBQUcsU0FBaENBLFlBQWdDLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ2xCQyxzREFBUSxDQUFVLEtBQVYsQ0FEVTtBQUFBLE1BQzNDQyxRQUQyQztBQUFBLE1BQ2pDQyxXQURpQzs7QUFHbEQsTUFBTUMsY0FBYztBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0hDLEtBQUssV0FBSUMsbURBQUosb0JBQWtCTixJQUFsQixFQURGOztBQUFBO0FBQ2ZPLGlCQURlO0FBQUE7QUFBQSxxQkFFUkEsR0FBRyxDQUFDQyxJQUFKLEVBRlE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkSixjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQUhrRCxrQkFRTkssNERBQVEsQ0FDbEQsQ0FBQyxxQkFBRCxDQURrRCxFQUVsRDtBQUFBLFdBQU1MLGNBQWMsRUFBcEI7QUFBQSxHQUZrRCxFQUdsRDtBQUFFTSxhQUFTLEVBQUU7QUFBYixHQUhrRCxDQVJGO0FBQUEsTUFRMUNDLFNBUjBDLGFBUTFDQSxTQVIwQztBQUFBLE1BUS9CQyxPQVIrQixhQVEvQkEsT0FSK0I7QUFBQSxNQVF0QkMsS0FSc0IsYUFRdEJBLEtBUnNCO0FBQUEsTUFRZkMsSUFSZSxhQVFmQSxJQVJlOztBQWNsRCxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBO0FBQUEsZ0JBQ0dILFNBQVMsZ0JBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRLEdBRU5DLE9BQU8sZ0JBQ1Q7QUFBQTtBQUFBLGtCQUFNQyxLQUFLLENBQUNFO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURTLGdCQUdULHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLGdDQUNFO0FBQUE7QUFBQSxvQkFBS0QsSUFBSSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLDhDQUFlO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUE7QUFBQSxrQ0FDRTtBQUFBLGdEQUFlLE1BQWY7QUFBQSx1QkFDRyxDQUFDZCxRQUFELGdCQUNDLHFFQUFDLDREQUFEO0FBQVUsc0JBQVEsRUFBRVksSUFBcEI7QUFBMEIseUJBQVcsRUFBRVg7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxnQkFHQyxxRUFBQyxpRUFBRDtBQUFjLHlCQUFXLEVBQUVBLFdBQTNCO0FBQXdDLHNCQUFRLEVBQUVXO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosZUFNRSxxRUFBQyw4REFBRDtBQUFZLHNCQUFRLEVBQUVBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsZUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLGVBUUUscUVBQUMsNERBQUQ7QUFBUyxzQkFBUSxFQUFFQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVdFLHFFQUFDLHlEQUFEO0FBQU8sc0JBQVUsRUFBRTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxREQsQ0FuRUQ7O0dBQU1mLFk7VUFRd0NVLG9EOzs7S0FSeENWLFk7O0FBNkVTQSwyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3F1ZXN0aW9ucy9bdXVpZF0vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IGhvc3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbmltcG9ydCBQb3N0QW5zd2VyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Bvc3RBbnN3ZXJcIjtcbmltcG9ydCBBc2lkZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Bc2lkZVwiO1xuaW1wb3J0IEFuc3dlcnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQW5zd2Vyc1wiO1xuaW1wb3J0IEVkaXRRdWVzdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9FZGl0UXVlc3Rpb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXVpZDogc3RyaW5nO1xufVxuXG5jb25zdCBRdWVzdGlvblBhZ2U6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHV1aWQgfSkgPT4ge1xuICBjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBmZXRjaFF1ZXN0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtob3N0fS9wb3N0cy8ke3V1aWR9YCk7XG4gICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG4gIH07XG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeTxRdWVzdGlvblR5cGUsIEVycm9yPihcbiAgICBbXCJpbmRpdmlkdWFsLXF1ZXN0aW9uXCJdLFxuICAgICgpID0+IGZldGNoUXVlc3Rpb25zKCksXG4gICAgeyBjYWNoZVRpbWU6IDAgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdj5cbiAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgICAgPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8aDE+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDEtYm9yZGVyLWJ0bVwiIC8+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgeyFlZGl0TW9kZSA/IChcbiAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbiBxdWVzdGlvbj17ZGF0YX0gc2V0RWRpdE1vZGU9e3NldEVkaXRNb2RlfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8RWRpdFF1ZXN0aW9uIHNldEVkaXRNb2RlPXtzZXRFZGl0TW9kZX0gcXVlc3Rpb249e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8UG9zdEFuc3dlciBxdWVzdGlvbj17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICA8aDE+QW5zd2Vyczo8L2gxPlxuICAgICAgICAgICAgICAgIDxBbnN3ZXJzIHF1ZXN0aW9uPXtkYXRhfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEFzaWRlIGJvcmRlclNpZGU9e1wibGVmdFwifSAvPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA4OCU7XG4gICAgICAgIH1cblxuICAgICAgICAuaDEtYm9yZGVyLWJ0bSB7XG4gICAgICAgICAgd2lkdGg6IDk2JTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxlZnQge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdXVpZDogY29udGV4dC5wYXJhbXMudXVpZCxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25QYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/questions/[uuid]/index.tsx\n");

/***/ })

})