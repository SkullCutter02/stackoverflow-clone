webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/EditQuestion.tsx":
/*!*************************************!*\
  !*** ./components/EditQuestion.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/EditQuestion.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar EditQuestion = function EditQuestion(_ref) {\n  _s();\n\n  var setEditMode = _ref.setEditMode,\n      question = _ref.question;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(question.body),\n      body = _useState[0],\n      setBody = _useState[1];\n\n  var editForm = function editForm(e) {\n    e.preventDefault();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: editForm,\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4127662016\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"]]]]) + \" \" + \"edit-post-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n        id: \"edit-form-body\",\n        cols: 30,\n        rows: 10,\n        value: body,\n        onChange: function onChange(e) {\n          return setBody(e.target.value);\n        },\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4127662016\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"]]]])\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        className: \"preview edit-post-preview\",\n        source: body,\n        plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_4___default.a]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4127662016\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"]]]]) + \" \" + \"buttons-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            setEditMode(false);\n            window.scrollBy(0, -1000);\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4127662016\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"]]]]) + \" \" + \"save\",\n          children: \"Save\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            setEditMode(false);\n            window.scrollTo(0, -1000);\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4127662016\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"]]]]) + \" \" + \"cancel\",\n          children: \"Cancel\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"4127662016\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"]],\n      children: \".edit-post-container.__jsx-style-dynamic-selector{width:92%;margin:20px auto;border:1px solid red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#edit-form-body.__jsx-style-dynamic-selector{width:90%;resize:none;height:400px;margin-bottom:20px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], \";border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], \";color:#fff;padding:15px;}.buttons-container.__jsx-style-dynamic-selector{width:90%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}button.__jsx-style-dynamic-selector{margin-left:20px;border:none;border-radius:4px;padding:5px 30px;cursor:pointer;color:#fff;font-size:0.9rem;}.save.__jsx-style-dynamic-selector{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], \";}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9FZGl0UXVlc3Rpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEa0IsQUFHcUIsQUFTQSxBQVdBLEFBTU8sQUFVdUIsVUFuQ3ZCLEFBU0wsQUFXQyxPQU1ELEtBaEJDLEtBVFEsRUEwQkgsTUFoQkMsS0F5QnJCLE9BUm1CLENBMUJKLE1BVTJCLFVBaUJ6QixlQUNKLEtBVGMsTUFVUixJQWxCNkIsYUFtQmhELGVBN0J3QixrQkFXWCxXQUNFLGFBQ2YsaUJBTUEsbUJBbEJxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9jb21wb25lbnRzL0VkaXRRdWVzdGlvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuXG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2V0RWRpdE1vZGU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgRWRpdFF1ZXN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBzZXRFZGl0TW9kZSwgcXVlc3Rpb24gfSkgPT4ge1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZTxzdHJpbmc+KHF1ZXN0aW9uLmJvZHkpO1xuXG4gIGNvbnN0IGVkaXRGb3JtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJlZGl0LXBvc3QtY29udGFpbmVyXCIgb25TdWJtaXQ9e2VkaXRGb3JtfT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9XCJlZGl0LWZvcm0tYm9keVwiXG4gICAgICAgICAgY29scz17MzB9XG4gICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCb2R5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3IGVkaXQtcG9zdC1wcmV2aWV3XCJcbiAgICAgICAgICBzb3VyY2U9e2JvZHl9XG4gICAgICAgICAgcGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIC0xMDAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzYXZlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTYXZlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRFZGl0TW9kZShmYWxzZSk7XG4gICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAtMTAwMCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FuY2VsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmVkaXQtcG9zdC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA5MiU7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgI2VkaXQtZm9ybS1ib2R5IHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaW5wdXRCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2Nzcy5pbnB1dEJvcmRlcn07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDMwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNhdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b259O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRRdWVzdGlvbjtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/EditQuestion.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EditQuestion, \"FM1n9wNrJtbxCQPFPFI6421/1wQ=\");\n\n_c = EditQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditQuestion);\n\nvar _c;\n\n$RefreshReg$(_c, \"EditQuestion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0UXVlc3Rpb24udHN4PzE2MDEiXSwibmFtZXMiOlsiRWRpdFF1ZXN0aW9uIiwic2V0RWRpdE1vZGUiLCJxdWVzdGlvbiIsInVzZVN0YXRlIiwiYm9keSIsInNldEJvZHkiLCJlZGl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNzcyIsInRhcmdldCIsInZhbHVlIiwicmVtYXJrR2ZtIiwid2luZG93Iiwic2Nyb2xsQnkiLCJzY3JvbGxUbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBOztBQU9BLElBQU1BLFlBQTZCLEdBQUcsU0FBaENBLFlBQWdDLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLFdBQTRCLFFBQTVCQSxXQUE0QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDM0NDLHNEQUFRLENBQVNELFFBQVEsQ0FBQ0UsSUFBbEIsQ0FEbUM7QUFBQSxNQUM1REEsSUFENEQ7QUFBQSxNQUN0REMsT0FEc0Q7O0FBR25FLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFzQyxjQUFRLEVBQUVGLFFBQWhEO0FBQUEsa0dBa0RrQkcsbUVBbERsQixFQW1Ed0JBLCtEQW5EeEIsRUF5RWtCQSw4REF6RWxCLGFBQWdCLHFCQUFoQjtBQUFBLDhCQUNFO0FBQ0UsVUFBRSxFQUFDLGdCQURMO0FBRUUsWUFBSSxFQUFFLEVBRlI7QUFHRSxZQUFJLEVBQUUsRUFIUjtBQUlFLGFBQUssRUFBRUwsSUFKVDtBQUtFLGdCQUFRLEVBQUUsa0JBQUNHLENBQUQ7QUFBQSxpQkFBT0YsT0FBTyxDQUFDRSxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUEsU0FMWjtBQUFBLG9HQWlEZ0JGLG1FQWpEaEIsRUFrRHNCQSwrREFsRHRCLEVBd0VnQkEsOERBeEVoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVFFLHFFQUFDLHFEQUFEO0FBQ0UsaUJBQVMsRUFBQywyQkFEWjtBQUVFLGNBQU0sRUFBRUwsSUFGVjtBQUdFLGVBQU8sRUFBRSxDQUFDUSxpREFBRDtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQWFFO0FBQUEsb0dBcUNnQkgsbUVBckNoQixFQXNDc0JBLCtEQXRDdEIsRUE0RGdCQSw4REE1RGhCLGFBQWUsbUJBQWY7QUFBQSxnQ0FDRTtBQUNFLGlCQUFPLEVBQUUsbUJBQU07QUFDYlIsdUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQVksa0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFDLElBQXBCO0FBQ0QsV0FKSDtBQUFBLHNHQW9DY0wsbUVBcENkLEVBcUNvQkEsK0RBckNwQixFQTJEY0EsOERBM0RkLGFBS1ksTUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVVFO0FBQ0UsaUJBQU8sRUFBRSxtQkFBTTtBQUNiUix1QkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBWSxrQkFBTSxDQUFDRSxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQUMsSUFBcEI7QUFDRCxXQUpIO0FBQUEsc0dBMkJjTixtRUEzQmQsRUE0Qm9CQSwrREE1QnBCLEVBa0RjQSw4REFsRGQsYUFLWSxRQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQSxnQkFtRG9CQSxtRUFuRHBCLEVBb0QwQkEsK0RBcEQxQixFQTBFb0JBLDhEQTFFcEI7QUFBQSxnZUFtRG9CQSxtRUFuRHBCLCtCQW9EMEJBLCtEQXBEMUIsMmNBMEVvQkEsOERBMUVwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0ZELENBdkZEOztHQUFNVCxZOztLQUFBQSxZO0FBeUZTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRWRpdFF1ZXN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5cbmltcG9ydCB7IFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZXRFZGl0TW9kZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xuICBxdWVzdGlvbjogUXVlc3Rpb25UeXBlO1xufVxuXG5jb25zdCBFZGl0UXVlc3Rpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7IHNldEVkaXRNb2RlLCBxdWVzdGlvbiB9KSA9PiB7XG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlPHN0cmluZz4ocXVlc3Rpb24uYm9keSk7XG5cbiAgY29uc3QgZWRpdEZvcm0gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImVkaXQtcG9zdC1jb250YWluZXJcIiBvblN1Ym1pdD17ZWRpdEZvcm19PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cImVkaXQtZm9ybS1ib2R5XCJcbiAgICAgICAgICBjb2xzPXszMH1cbiAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICB2YWx1ZT17Ym9keX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJvZHkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXcgZWRpdC1wb3N0LXByZXZpZXdcIlxuICAgICAgICAgIHNvdXJjZT17Ym9keX1cbiAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xuICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgLTEwMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNhdmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIC0xMDAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYW5jZWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZWRpdC1wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAjZWRpdC1mb3JtLWJvZHkge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMzBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2F2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdFF1ZXN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/EditQuestion.tsx\n");

/***/ })

})