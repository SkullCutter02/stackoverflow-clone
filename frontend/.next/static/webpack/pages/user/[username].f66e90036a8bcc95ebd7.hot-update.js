webpackHotUpdate_N_E("pages/user/[username]",{

/***/ "./components/PageHandlers.tsx":
/*!*************************************!*\
  !*** ./components/PageHandlers.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/PageHandlers.tsx\",\n    _this = undefined;\n\n\n\n\nvar PageHandlers = function PageHandlers(_ref) {\n  var page = _ref.page,\n      setPage = _ref.setPage,\n      isPreviousData = _ref.isPreviousData,\n      hasMore = _ref.hasMore;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-2460451562\" + \" \" + \"page-handlers\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"jsx-2460451562\" + \" \" + \"current-page\",\n        children: [\"Current Page: \", page]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          setPage(function (old) {\n            return Math.max(old - 1, 0);\n          });\n          window.scrollTo(0, -500);\n        },\n        disabled: page === 1,\n        className: \"jsx-2460451562\",\n        children: \"Previous Page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          if (!isPreviousData && hasMore) {\n            setPage(function (old) {\n              return old + 1;\n            });\n            window.scrollTo(0, -500);\n          }\n        },\n        disabled: isPreviousData || !hasMore,\n        className: \"jsx-2460451562\",\n        children: \"Next Page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2460451562\",\n      children: \".page-handlers.jsx-2460451562{width:97%;margin:20px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}button.jsx-2460451562{width:90px;margin:0 5px;font-size:0.6rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9QYWdlSGFuZGxlcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDa0IsQUFHcUIsQUFPQyxVQU5NLENBT0osYUFDSSxHQVBKLGNBUWYsNERBUDJCLGlHQUMzQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvUGFnZUhhbmRsZXJzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFnZTogbnVtYmVyO1xuICBzZXRQYWdlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcbiAgaXNQcmV2aW91c0RhdGE6IGJvb2xlYW47XG4gIGhhc01vcmU6IGJvb2xlYW47XG59XG5cbmNvbnN0IFBhZ2VIYW5kbGVyczogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgcGFnZSxcbiAgc2V0UGFnZSxcbiAgaXNQcmV2aW91c0RhdGEsXG4gIGhhc01vcmUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhhbmRsZXJzXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImN1cnJlbnQtcGFnZVwiPkN1cnJlbnQgUGFnZToge3BhZ2V9PC9wPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0UGFnZSgob2xkKSA9PiBNYXRoLm1heChvbGQgLSAxLCAwKSk7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgLTUwMCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBkaXNhYmxlZD17cGFnZSA9PT0gMX1cbiAgICAgICAgPlxuICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzUHJldmlvdXNEYXRhICYmIGhhc01vcmUpIHtcbiAgICAgICAgICAgICAgc2V0UGFnZSgob2xkKSA9PiBvbGQgKyAxKTtcbiAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIC01MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgZGlzYWJsZWQ9e2lzUHJldmlvdXNEYXRhIHx8ICFoYXNNb3JlfVxuICAgICAgICA+XG4gICAgICAgICAgTmV4dCBQYWdlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhZ2UtaGFuZGxlcnMge1xuICAgICAgICAgIHdpZHRoOiA5NyU7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VIYW5kbGVycztcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/PageHandlers.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = PageHandlers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageHandlers);\n\nvar _c;\n\n$RefreshReg$(_c, \"PageHandlers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlSGFuZGxlcnMudHN4P2I4NzciXSwibmFtZXMiOlsiUGFnZUhhbmRsZXJzIiwicGFnZSIsInNldFBhZ2UiLCJpc1ByZXZpb3VzRGF0YSIsImhhc01vcmUiLCJvbGQiLCJNYXRoIiwibWF4Iiwid2luZG93Iiwic2Nyb2xsVG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFTQSxJQUFNQSxZQUE2QixHQUFHLFNBQWhDQSxZQUFnQyxPQUtoQztBQUFBLE1BSkpDLElBSUksUUFKSkEsSUFJSTtBQUFBLE1BSEpDLE9BR0ksUUFISkEsT0FHSTtBQUFBLE1BRkpDLGNBRUksUUFGSkEsY0FFSTtBQUFBLE1BREpDLE9BQ0ksUUFESkEsT0FDSTtBQUNKLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFO0FBQUEsMENBQWUsZUFBZjtBQUFBLDhCQUNFO0FBQUEsNENBQWEsY0FBYjtBQUFBLHFDQUEyQ0gsSUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUNFLGVBQU8sRUFBRSxtQkFBTTtBQUNiQyxpQkFBTyxDQUFDLFVBQUNHLEdBQUQ7QUFBQSxtQkFBU0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQUcsR0FBRyxDQUFmLEVBQWtCLENBQWxCLENBQVQ7QUFBQSxXQUFELENBQVA7QUFDQUcsZ0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFDLEdBQXBCO0FBQ0QsU0FKSDtBQUtFLGdCQUFRLEVBQUVSLElBQUksS0FBSyxDQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFXRTtBQUNFLGVBQU8sRUFBRSxtQkFBTTtBQUNiLGNBQUksQ0FBQ0UsY0FBRCxJQUFtQkMsT0FBdkIsRUFBZ0M7QUFDOUJGLG1CQUFPLENBQUMsVUFBQ0csR0FBRDtBQUFBLHFCQUFTQSxHQUFHLEdBQUcsQ0FBZjtBQUFBLGFBQUQsQ0FBUDtBQUNBRyxrQkFBTSxDQUFDQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQUMsR0FBcEI7QUFDRDtBQUNGLFNBTkg7QUFPRSxnQkFBUSxFQUFFTixjQUFjLElBQUksQ0FBQ0MsT0FQL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMENELENBaEREOztLQUFNSixZO0FBa0RTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnZUhhbmRsZXJzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFnZTogbnVtYmVyO1xuICBzZXRQYWdlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcbiAgaXNQcmV2aW91c0RhdGE6IGJvb2xlYW47XG4gIGhhc01vcmU6IGJvb2xlYW47XG59XG5cbmNvbnN0IFBhZ2VIYW5kbGVyczogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgcGFnZSxcbiAgc2V0UGFnZSxcbiAgaXNQcmV2aW91c0RhdGEsXG4gIGhhc01vcmUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhhbmRsZXJzXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImN1cnJlbnQtcGFnZVwiPkN1cnJlbnQgUGFnZToge3BhZ2V9PC9wPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0UGFnZSgob2xkKSA9PiBNYXRoLm1heChvbGQgLSAxLCAwKSk7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgLTUwMCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBkaXNhYmxlZD17cGFnZSA9PT0gMX1cbiAgICAgICAgPlxuICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzUHJldmlvdXNEYXRhICYmIGhhc01vcmUpIHtcbiAgICAgICAgICAgICAgc2V0UGFnZSgob2xkKSA9PiBvbGQgKyAxKTtcbiAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIC01MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgZGlzYWJsZWQ9e2lzUHJldmlvdXNEYXRhIHx8ICFoYXNNb3JlfVxuICAgICAgICA+XG4gICAgICAgICAgTmV4dCBQYWdlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhZ2UtaGFuZGxlcnMge1xuICAgICAgICAgIHdpZHRoOiA5NyU7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VIYW5kbGVycztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PageHandlers.tsx\n");

/***/ })

})