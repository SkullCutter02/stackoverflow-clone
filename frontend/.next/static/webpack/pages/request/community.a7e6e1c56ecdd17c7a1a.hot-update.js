webpackHotUpdate_N_E("pages/request/community",{

/***/ "./pages/request/community.tsx":
/*!*************************************!*\
  !*** ./pages/request/community.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/functions */ \"./utils/functions.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/request/community.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar RequestCommunityPage = function RequestCommunityPage() {\n  var requestCommunity = function requestCommunity(e) {\n    e.preventDefault();\n    var name = document.getElementById(\"id\");\n    var link = document.getElementById(\"link\");\n    var errMsg = document.getElementById(\"err-msg\");\n    fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_4__[\"default\"], \"/requests\"), {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        Authorization: \"Bearer \".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_5__[\"getCookie\"])(\"token\"))\n      }\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: requestCommunity,\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3535869890\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]]]]) + \" \" + \"request-community-form\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3535869890\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]]]]),\n        children: \"Request a Community: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        id: \"name\",\n        placeholder: \"Name of Community: \",\n        required: true,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3535869890\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]]]])\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        id: \"link\",\n        placeholder: \"Link to documentation: \",\n        required: true,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3535869890\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]]]])\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3535869890\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]]]]),\n        children: \"Request Community\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        id: \"err-msg\",\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3535869890\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]]]]) + \" \" + \"err-msg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3535869890\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"]],\n      children: \".request-community-form.__jsx-style-dynamic-selector{height:250px;width:40%;margin:200px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transform:translateY(-40px);-ms-transform:translateY(-40px);transform:translateY(-40px);}h2.__jsx-style-dynamic-selector{margin-bottom:20px;}input.__jsx-style-dynamic-selector{width:100%;height:40px;margin:10px 0;text-indent:15px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBackground\"], \";color:#ffffff;border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"inputBorder\"], \";font-size:0.8rem;}button.__jsx-style-dynamic-selector{border:none;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButton\"], \";color:#cbcbcb;padding:8px 15px;border-radius:4px;cursor:pointer;margin:10px 0;}button.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"mainButtonHover\"], \";color:#dbdbdb;}.err-msg.__jsx-style-dynamic-selector{margin:10px auto;color:#ff3f3f;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvcmVxdWVzdC9jb21tdW5pdHkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDa0IsQUFHd0IsQUFXTSxBQUlSLEFBV0MsQUFVNEIsQUFLdkIsV0F6QkwsQ0FXNEIsQ0ExQjlCLElBeUNJLEVBOUJoQixJQVZvQixBQWVKLFFBMEJoQixNQXpCbUIsR0FtQkgsQ0FsQ0QsV0F5QkMsRUFUMEIsQUFtQjFDLFlBVG1CLGlCQUNDLFdBVkosT0FXQyxPQVYrQixPQWpCeEIsQ0E0QlIsY0FDaEIsd0JBWG1CLGlCQUNuQixzQkFsQnFCLDZGQUNJLG1HQUNLLGdHQUM5QiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL3BhZ2VzL3JlcXVlc3QvY29tbXVuaXR5LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi8uLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi8uLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZnVuY3Rpb25zXCI7XG5cbmNvbnN0IFJlcXVlc3RDb21tdW5pdHlQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgcmVxdWVzdENvbW11bml0eSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZXJyTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnItbXNnXCIpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xuXG4gICAgZmV0Y2goYCR7aG9zdH0vcmVxdWVzdHNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicmVxdWVzdC1jb21tdW5pdHktZm9ybVwiIG9uU3VibWl0PXtyZXF1ZXN0Q29tbXVuaXR5fT5cbiAgICAgICAgPGgyPlJlcXVlc3QgYSBDb21tdW5pdHk6IDwvaDI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZSBvZiBDb21tdW5pdHk6IFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwibGlua1wiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaW5rIHRvIGRvY3VtZW50YXRpb246IFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPXtcInN1Ym1pdFwifT5SZXF1ZXN0IENvbW11bml0eTwvYnV0dG9uPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnItbXNnXCIgaWQ9XCJlcnItbXNnXCIgLz5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmVxdWVzdC1jb21tdW5pdHktZm9ybSB7XG4gICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIG1hcmdpbjogMjAwcHggYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgIHRleHQtaW5kZW50OiAxNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgICAgY29sb3I6ICNjYmNiY2I7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbkhvdmVyfTtcbiAgICAgICAgICBjb2xvcjogI2RiZGJkYjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnItbXNnIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgICBjb2xvcjogI2ZmM2YzZjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Q29tbXVuaXR5UGFnZTtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/request/community.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = RequestCommunityPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestCommunityPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"RequestCommunityPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVxdWVzdC9jb21tdW5pdHkudHN4PzY5NDkiXSwibmFtZXMiOlsiUmVxdWVzdENvbW11bml0eVBhZ2UiLCJyZXF1ZXN0Q29tbXVuaXR5IiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsaW5rIiwiZXJyTXNnIiwiZmV0Y2giLCJob3N0IiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRDb29raWUiLCJjc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxvQkFBOEIsR0FBRyxTQUFqQ0Esb0JBQWlDLEdBQU07QUFDM0MsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDOUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBLFFBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLElBQXhCLENBQWI7QUFDQSxRQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0EsUUFBTUUsTUFBTSxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZjtBQUVBRyxTQUFLLFdBQUlDLG1EQUFKLGdCQUFxQjtBQUN4QkMsWUFBTSxFQUFFLE1BRGdCO0FBRXhCQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0Isa0JBRFQ7QUFFUEMscUJBQWEsbUJBQVlDLGtFQUFTLENBQUMsT0FBRCxDQUFyQjtBQUZOO0FBRmUsS0FBckIsQ0FBTDtBQU9ELEdBZEQ7O0FBZ0JBLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFO0FBQXlDLGNBQVEsRUFBRWIsZ0JBQW5EO0FBQUEsa0dBdUNrQmMsbUVBdkNsQixFQXlDd0JBLCtEQXpDeEIsRUErQ2tCQSw4REEvQ2xCLEVBd0RrQkEsbUVBeERsQixhQUFnQix3QkFBaEI7QUFBQSw4QkFDRTtBQUFBLG9HQXNDZ0JBLG1FQXRDaEIsRUF3Q3NCQSwrREF4Q3RCLEVBOENnQkEsOERBOUNoQixFQXVEZ0JBLG1FQXZEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxVQUFFLEVBQUMsTUFGTDtBQUdFLG1CQUFXLEVBQUMscUJBSGQ7QUFJRSxnQkFBUSxNQUpWO0FBQUEsb0dBcUNnQkEsbUVBckNoQixFQXVDc0JBLCtEQXZDdEIsRUE2Q2dCQSw4REE3Q2hCLEVBc0RnQkEsbUVBdERoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQVFFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxVQUFFLEVBQUMsTUFGTDtBQUdFLG1CQUFXLEVBQUMseUJBSGQ7QUFJRSxnQkFBUSxNQUpWO0FBQUEsb0dBK0JnQkEsbUVBL0JoQixFQWlDc0JBLCtEQWpDdEIsRUF1Q2dCQSw4REF2Q2hCLEVBZ0RnQkEsbUVBaERoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQWNFO0FBQVEsWUFBSSxFQUFFLFFBQWQ7QUFBQSxvR0F5QmdCQSxtRUF6QmhCLEVBMkJzQkEsK0RBM0J0QixFQWlDZ0JBLDhEQWpDaEIsRUEwQ2dCQSxtRUExQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEYsZUFlRTtBQUF1QixVQUFFLEVBQUMsU0FBMUI7QUFBQSxvR0F3QmdCQSxtRUF4QmhCLEVBMEJzQkEsK0RBMUJ0QixFQWdDZ0JBLDhEQWhDaEIsRUF5Q2dCQSxtRUF6Q2hCLGFBQWE7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBLGdCQXdDb0JBLG1FQXhDcEIsRUEwQzBCQSwrREExQzFCLEVBZ0RvQkEsOERBaERwQixFQXlEb0JBLG1FQXpEcEI7QUFBQSx5c0JBd0NvQkEsbUVBeENwQiw2Q0EwQzBCQSwrREExQzFCLDJGQWdEb0JBLDhEQWhEcEIsa0pBeURvQkEsbUVBekRwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUVELENBdEZEOztLQUFNZixvQjtBQXdGU0EsbUZBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZXF1ZXN0L2NvbW11bml0eS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuXG5jb25zdCBSZXF1ZXN0Q29tbXVuaXR5UGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3RDb21tdW5pdHkgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlua1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGVyck1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyLW1zZ1wiKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcblxuICAgIGZldGNoKGAke2hvc3R9L3JlcXVlc3RzYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInJlcXVlc3QtY29tbXVuaXR5LWZvcm1cIiBvblN1Ym1pdD17cmVxdWVzdENvbW11bml0eX0+XG4gICAgICAgIDxoMj5SZXF1ZXN0IGEgQ29tbXVuaXR5OiA8L2gyPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWUgb2YgQ29tbXVuaXR5OiBcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cImxpbmtcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGluayB0byBkb2N1bWVudGF0aW9uOiBcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0+UmVxdWVzdCBDb21tdW5pdHk8L2J1dHRvbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyLW1zZ1wiIGlkPVwiZXJyLW1zZ1wiIC8+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJlcXVlc3QtY29tbXVuaXR5LWZvcm0ge1xuICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBtYXJnaW46IDIwMHB4IGF1dG87XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b259O1xuICAgICAgICAgIGNvbG9yOiAjY2JjYmNiO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b25Ib3Zlcn07XG4gICAgICAgICAgY29sb3I6ICNkYmRiZGI7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyLW1zZyB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgICAgY29sb3I6ICNmZjNmM2Y7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdENvbW11bml0eVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/request/community.tsx\n");

/***/ })

})