webpackHotUpdate_N_E("pages/user/[username]",{

/***/ "./components/UserQuestions.tsx":
/*!**************************************!*\
  !*** ./components/UserQuestions.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/UserQuestions.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar UserQuestions = function UserQuestions(_ref) {\n  _s();\n\n  var uuid = _ref.uuid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchUserPosts = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/users/\").concat(uuid, \"/posts?page=\").concat(page, \"&limit=20\"));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchUserPosts(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])([\"user-posts\", page], function () {\n    return fetchUserPosts(page);\n  }, {\n    keepPreviousData: true,\n    cacheTime: 0\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isPreviousData = _useQuery.isPreviousData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]),\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]),\n      children: error.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]) + \" \" + \"user-posts-container\",\n      children: [data.posts.map(function (post) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]) + \" \" + \"user-post-container\",\n          children: post.uuid\n        }, post.uuid, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]) + \" \" + \"page-handlers\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return setPage(function (old) {\n              return Math.max(old - 1, 0);\n            });\n          },\n          disabled: page === 1,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]),\n          children: \"Previous Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            if (!isPreviousData && data.hasMore) {\n              setPage(function (old) {\n                return old + 1;\n              });\n            }\n          },\n          disabled: isPreviousData || !data.hasMore,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]),\n          children: \"Next Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"117212645\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]],\n      children: \".user-post-container.__jsx-style-dynamic-selector{height:100px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"], \";margin:30px 20px;border-radius:10px;padding:15px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9Vc2VyUXVlc3Rpb25zLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGtCLEFBR3dCLGFBQzJCLHdDQUN2QixpQkFDRSxtQkFDTixhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9Vc2VyUXVlc3Rpb25zLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IFVzZXJQb3N0c1R5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvdXNlclBvc3RzVHlwZVwiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXVpZDogc3RyaW5nO1xufVxuXG5jb25zdCBVc2VyUXVlc3Rpb25zOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB1dWlkIH0pID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBmZXRjaFVzZXJQb3N0cyA9IGFzeW5jIChwYWdlOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke2hvc3R9L3VzZXJzLyR7dXVpZH0vcG9zdHM/cGFnZT0ke3BhZ2V9JmxpbWl0PTIwYFxuICAgICk7XG4gICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG4gIH07XG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yLCBkYXRhLCBpc1ByZXZpb3VzRGF0YSB9ID0gdXNlUXVlcnk8XG4gICAgVXNlclBvc3RzVHlwZSxcbiAgICBFcnJvclxuICA+KFtcInVzZXItcG9zdHNcIiwgcGFnZV0sICgpID0+IGZldGNoVXNlclBvc3RzKHBhZ2UpLCB7XG4gICAga2VlcFByZXZpb3VzRGF0YTogdHJ1ZSxcbiAgICBjYWNoZVRpbWU6IDAsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICApIDogaXNFcnJvciA/IChcbiAgICAgICAgPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wb3N0cy1jb250YWluZXJcIj5cbiAgICAgICAgICB7ZGF0YS5wb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wb3N0LWNvbnRhaW5lclwiIGtleT17cG9zdC51dWlkfT5cbiAgICAgICAgICAgICAge3Bvc3QudXVpZH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oYW5kbGVyc1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChvbGQpID0+IE1hdGgubWF4KG9sZCAtIDEsIDApKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ByZXZpb3VzRGF0YSAmJiBkYXRhLmhhc01vcmUpIHtcbiAgICAgICAgICAgICAgICAgIHNldFBhZ2UoKG9sZCkgPT4gb2xkICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNQcmV2aW91c0RhdGEgfHwgIWRhdGEuaGFzTW9yZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmV4dCBQYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC51c2VyLXBvc3QtY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmZsb2F0aW5nUG9zdEJhY2tncm91bmR9O1xuICAgICAgICAgIG1hcmdpbjogMzBweCAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLXBvc3QtY29udGFpbmVyID4gZGl2IHtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUXVlc3Rpb25zO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/UserQuestions.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(UserQuestions, \"B8AHcuIhDtcfT64L9EclU84Jm5E=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = UserQuestions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserQuestions);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserQuestions\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUXVlc3Rpb25zLnRzeD8zODlhIl0sIm5hbWVzIjpbIlVzZXJRdWVzdGlvbnMiLCJ1dWlkIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsImZldGNoVXNlclBvc3RzIiwiZmV0Y2giLCJob3N0IiwicmVzIiwianNvbiIsInVzZVF1ZXJ5Iiwia2VlcFByZXZpb3VzRGF0YSIsImNhY2hlVGltZSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJlcnJvciIsImRhdGEiLCJpc1ByZXZpb3VzRGF0YSIsImNzcyIsIm1lc3NhZ2UiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJvbGQiLCJNYXRoIiwibWF4IiwiaGFzTW9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQU1BLElBQU1BLGFBQThCLEdBQUcsU0FBakNBLGFBQWlDLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQzNCQyxzREFBUSxDQUFTLENBQVQsQ0FEbUI7QUFBQSxNQUM1Q0MsSUFENEM7QUFBQSxNQUN0Q0MsT0FEc0M7O0FBR25ELE1BQU1DLGNBQWM7QUFBQSxpTUFBRyxpQkFBT0YsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNIRyxLQUFLLFdBQ2xCQyxtREFEa0Isb0JBQ0pOLElBREkseUJBQ2VFLElBRGYsZUFERjs7QUFBQTtBQUNmSyxpQkFEZTtBQUFBO0FBQUEscUJBSVJBLEdBQUcsQ0FBQ0MsSUFBSixFQUpROztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZEosY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFIbUQsa0JBVVNLLDREQUFRLENBR2xFLENBQUMsWUFBRCxFQUFlUCxJQUFmLENBSGtFLEVBRzVDO0FBQUEsV0FBTUUsY0FBYyxDQUFDRixJQUFELENBQXBCO0FBQUEsR0FINEMsRUFHaEI7QUFDbERRLG9CQUFnQixFQUFFLElBRGdDO0FBRWxEQyxhQUFTLEVBQUU7QUFGdUMsR0FIZ0IsQ0FWakI7QUFBQSxNQVUzQ0MsU0FWMkMsYUFVM0NBLFNBVjJDO0FBQUEsTUFVaENDLE9BVmdDLGFBVWhDQSxPQVZnQztBQUFBLE1BVXZCQyxLQVZ1QixhQVV2QkEsS0FWdUI7QUFBQSxNQVVoQkMsSUFWZ0IsYUFVaEJBLElBVmdCO0FBQUEsTUFVVkMsY0FWVSxhQVVWQSxjQVZVOztBQWtCbkQsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZUFDR0osU0FBUyxnQkFDUjtBQUFBLGlHQWtDZ0JLLDBFQWxDaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxHQUVOSixPQUFPLGdCQUNUO0FBQUEsaUdBZ0NnQkksMEVBaENoQjtBQUFBLGdCQUFNSCxLQUFLLENBQUNJO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURTLGdCQUdUO0FBQUEsaUdBOEJnQkQsMEVBOUJoQixhQUFlLHNCQUFmO0FBQUEsaUJBQ0dGLElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxHQUFYLENBQWUsVUFBQ0MsSUFBRDtBQUFBLDRCQUNkO0FBQUEscUdBNEJZSiwwRUE1QlosYUFBZSxxQkFBZjtBQUFBLG9CQUNHSSxJQUFJLENBQUNyQjtBQURSLFdBQTBDcUIsSUFBSSxDQUFDckIsSUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWYsQ0FESCxlQU1FO0FBQUEsbUdBd0JjaUIsMEVBeEJkLGFBQWUsZUFBZjtBQUFBLGdDQUNFO0FBQ0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNZCxPQUFPLENBQUMsVUFBQ21CLEdBQUQ7QUFBQSxxQkFBU0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQUcsR0FBRyxDQUFmLEVBQWtCLENBQWxCLENBQVQ7QUFBQSxhQUFELENBQWI7QUFBQSxXQURYO0FBRUUsa0JBQVEsRUFBRXBCLElBQUksS0FBSyxDQUZyQjtBQUFBLHFHQXVCWWUsMEVBdkJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFDRSxpQkFBTyxFQUFFLG1CQUFNO0FBQ2IsZ0JBQUksQ0FBQ0QsY0FBRCxJQUFtQkQsSUFBSSxDQUFDVSxPQUE1QixFQUFxQztBQUNuQ3RCLHFCQUFPLENBQUMsVUFBQ21CLEdBQUQ7QUFBQSx1QkFBU0EsR0FBRyxHQUFHLENBQWY7QUFBQSxlQUFELENBQVA7QUFDRDtBQUNGLFdBTEg7QUFNRSxrQkFBUSxFQUFFTixjQUFjLElBQUksQ0FBQ0QsSUFBSSxDQUFDVSxPQU5wQztBQUFBLHFHQWlCWVIsMEVBakJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQSxnQkFvQ29CQSwwRUFwQ3BCO0FBQUEsb0dBb0NvQkEsMEVBcENwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0RELENBbEVEOztHQUFNbEIsYTtVQVV3RFUsb0Q7OztLQVZ4RFYsYTtBQW9FU0EsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJRdWVzdGlvbnMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgVXNlclBvc3RzVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy91c2VyUG9zdHNUeXBlXCI7XG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB1dWlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IFVzZXJRdWVzdGlvbnM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHV1aWQgfSkgPT4ge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuXG4gIGNvbnN0IGZldGNoVXNlclBvc3RzID0gYXN5bmMgKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7aG9zdH0vdXNlcnMvJHt1dWlkfS9wb3N0cz9wYWdlPSR7cGFnZX0mbGltaXQ9MjBgXG4gICAgKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgfTtcblxuICBjb25zdCB7IGlzTG9hZGluZywgaXNFcnJvciwgZXJyb3IsIGRhdGEsIGlzUHJldmlvdXNEYXRhIH0gPSB1c2VRdWVyeTxcbiAgICBVc2VyUG9zdHNUeXBlLFxuICAgIEVycm9yXG4gID4oW1widXNlci1wb3N0c1wiLCBwYWdlXSwgKCkgPT4gZmV0Y2hVc2VyUG9zdHMocGFnZSksIHtcbiAgICBrZWVwUHJldmlvdXNEYXRhOiB0cnVlLFxuICAgIGNhY2hlVGltZTogMCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICkgOiBpc0Vycm9yID8gKFxuICAgICAgICA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXBvc3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtkYXRhLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXBvc3QtY29udGFpbmVyXCIga2V5PXtwb3N0LnV1aWR9PlxuICAgICAgICAgICAgICB7cG9zdC51dWlkfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhhbmRsZXJzXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKG9sZCkgPT4gTWF0aC5tYXgob2xkIC0gMSwgMCkpfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA9PT0gMX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHJldmlvdXMgUGFnZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUHJldmlvdXNEYXRhICYmIGRhdGEuaGFzTW9yZSkge1xuICAgICAgICAgICAgICAgICAgc2V0UGFnZSgob2xkKSA9PiBvbGQgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1ByZXZpb3VzRGF0YSB8fCAhZGF0YS5oYXNNb3JlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOZXh0IFBhZ2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnVzZXItcG9zdC1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuZmxvYXRpbmdQb3N0QmFja2dyb3VuZH07XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItcG9zdC1jb250YWluZXIgPiBkaXYge1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJRdWVzdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserQuestions.tsx\n");

/***/ })

})