webpackHotUpdate_N_E("pages/user/[username]",{

/***/ "./components/PageHandlers.tsx":
/*!*************************************!*\
  !*** ./components/PageHandlers.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/PageHandlers.tsx\",\n    _this = undefined;\n\n\n\n\nvar PageHandlers = function PageHandlers(_ref) {\n  var page = _ref.page,\n      setPage = _ref.setPage,\n      isPreviousData = _ref.isPreviousData,\n      hasMore = _ref.hasMore,\n      width = _ref.width;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3591853896\", [width]]]) + \" \" + \"page-handlers\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3591853896\", [width]]]) + \" \" + \"current-page\",\n        children: [\"Current Page: \", page]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          setPage(function (old) {\n            return Math.max(old - 1, 0);\n          });\n          window.scrollTo(0, -500);\n        },\n        disabled: page === 1,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3591853896\", [width]]]),\n        children: \"Previous Page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          if (!isPreviousData && hasMore) {\n            setPage(function (old) {\n              return old + 1;\n            });\n            window.scrollTo(0, -500);\n          }\n        },\n        disabled: isPreviousData || !hasMore,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3591853896\", [width]]]),\n        children: \"Next Page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3591853896\",\n      dynamic: [width],\n      children: \".page-handlers.__jsx-style-dynamic-selector{width:\".concat(width, \"%;margin:20px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}button.__jsx-style-dynamic-selector{width:90px;margin:0 5px;font-size:0.6rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9QYWdlSGFuZGxlcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDa0IsQUFHK0MsQUFPekIsV0FDRSxhQUNJLFlBUkEsS0FTbkIsWUFSZSwwRUFDWSxpR0FDM0IiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9jb21wb25lbnRzL1BhZ2VIYW5kbGVycy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgc2V0UGFnZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG4gIGlzUHJldmlvdXNEYXRhOiBib29sZWFuO1xuICBoYXNNb3JlOiBib29sZWFuO1xuICB3aWR0aDogbnVtYmVyO1xufVxuXG5jb25zdCBQYWdlSGFuZGxlcnM6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIHBhZ2UsXG4gIHNldFBhZ2UsXG4gIGlzUHJldmlvdXNEYXRhLFxuICBoYXNNb3JlLFxuICB3aWR0aCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGFuZGxlcnNcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3VycmVudC1wYWdlXCI+Q3VycmVudCBQYWdlOiB7cGFnZX08L3A+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRQYWdlKChvbGQpID0+IE1hdGgubWF4KG9sZCAtIDEsIDApKTtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAtNTAwKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICA+XG4gICAgICAgICAgUHJldmlvdXMgUGFnZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNQcmV2aW91c0RhdGEgJiYgaGFzTW9yZSkge1xuICAgICAgICAgICAgICBzZXRQYWdlKChvbGQpID0+IG9sZCArIDEpO1xuICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgLTUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBkaXNhYmxlZD17aXNQcmV2aW91c0RhdGEgfHwgIWhhc01vcmV9XG4gICAgICAgID5cbiAgICAgICAgICBOZXh0IFBhZ2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucGFnZS1oYW5kbGVycyB7XG4gICAgICAgICAgd2lkdGg6ICR7d2lkdGh9JTtcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUhhbmRsZXJzO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/PageHandlers.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = PageHandlers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageHandlers);\n\nvar _c;\n\n$RefreshReg$(_c, \"PageHandlers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlSGFuZGxlcnMudHN4P2I4NzciXSwibmFtZXMiOlsiUGFnZUhhbmRsZXJzIiwicGFnZSIsInNldFBhZ2UiLCJpc1ByZXZpb3VzRGF0YSIsImhhc01vcmUiLCJ3aWR0aCIsIm9sZCIsIk1hdGgiLCJtYXgiLCJ3aW5kb3ciLCJzY3JvbGxUbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQVVBLElBQU1BLFlBQTZCLEdBQUcsU0FBaENBLFlBQWdDLE9BTWhDO0FBQUEsTUFMSkMsSUFLSSxRQUxKQSxJQUtJO0FBQUEsTUFKSkMsT0FJSSxRQUpKQSxPQUlJO0FBQUEsTUFISkMsY0FHSSxRQUhKQSxjQUdJO0FBQUEsTUFGSkMsT0FFSSxRQUZKQSxPQUVJO0FBQUEsTUFESkMsS0FDSSxRQURKQSxLQUNJO0FBQ0osc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBQSxrR0EwQmFBLEtBMUJiLGFBQWUsZUFBZjtBQUFBLDhCQUNFO0FBQUEsb0dBeUJXQSxLQXpCWCxhQUFhLGNBQWI7QUFBQSxxQ0FBMkNKLElBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFDRSxlQUFPLEVBQUUsbUJBQU07QUFDYkMsaUJBQU8sQ0FBQyxVQUFDSSxHQUFEO0FBQUEsbUJBQVNDLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixHQUFHLEdBQUcsQ0FBZixFQUFrQixDQUFsQixDQUFUO0FBQUEsV0FBRCxDQUFQO0FBQ0FHLGdCQUFNLENBQUNDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBQyxHQUFwQjtBQUNELFNBSkg7QUFLRSxnQkFBUSxFQUFFVCxJQUFJLEtBQUssQ0FMckI7QUFBQSxvR0F3QldJLEtBeEJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFXRTtBQUNFLGVBQU8sRUFBRSxtQkFBTTtBQUNiLGNBQUksQ0FBQ0YsY0FBRCxJQUFtQkMsT0FBdkIsRUFBZ0M7QUFDOUJGLG1CQUFPLENBQUMsVUFBQ0ksR0FBRDtBQUFBLHFCQUFTQSxHQUFHLEdBQUcsQ0FBZjtBQUFBLGFBQUQsQ0FBUDtBQUNBRyxrQkFBTSxDQUFDQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQUMsR0FBcEI7QUFDRDtBQUNGLFNBTkg7QUFPRSxnQkFBUSxFQUFFUCxjQUFjLElBQUksQ0FBQ0MsT0FQL0I7QUFBQSxvR0FlV0MsS0FmWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQSxnQkEyQmVBLEtBM0JmO0FBQUEsNEVBMkJlQSxLQTNCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMENELENBakREOztLQUFNTCxZO0FBbURTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnZUhhbmRsZXJzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFnZTogbnVtYmVyO1xuICBzZXRQYWdlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcbiAgaXNQcmV2aW91c0RhdGE6IGJvb2xlYW47XG4gIGhhc01vcmU6IGJvb2xlYW47XG4gIHdpZHRoOiBudW1iZXI7XG59XG5cbmNvbnN0IFBhZ2VIYW5kbGVyczogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgcGFnZSxcbiAgc2V0UGFnZSxcbiAgaXNQcmV2aW91c0RhdGEsXG4gIGhhc01vcmUsXG4gIHdpZHRoLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oYW5kbGVyc1wiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJyZW50LXBhZ2VcIj5DdXJyZW50IFBhZ2U6IHtwYWdlfTwvcD5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldFBhZ2UoKG9sZCkgPT4gTWF0aC5tYXgob2xkIC0gMSwgMCkpO1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIC01MDApO1xuICAgICAgICAgIH19XG4gICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgID5cbiAgICAgICAgICBQcmV2aW91cyBQYWdlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc1ByZXZpb3VzRGF0YSAmJiBoYXNNb3JlKSB7XG4gICAgICAgICAgICAgIHNldFBhZ2UoKG9sZCkgPT4gb2xkICsgMSk7XG4gICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAtNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIGRpc2FibGVkPXtpc1ByZXZpb3VzRGF0YSB8fCAhaGFzTW9yZX1cbiAgICAgICAgPlxuICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wYWdlLWhhbmRsZXJzIHtcbiAgICAgICAgICB3aWR0aDogJHt3aWR0aH0lO1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlSGFuZGxlcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PageHandlers.tsx\n");

/***/ })

})