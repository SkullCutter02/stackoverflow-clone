webpackHotUpdate_N_E("pages/user/[username]",{

/***/ "./components/AskedBy.tsx":
false,

/***/ "./components/CommunityQuestion.tsx":
false,

/***/ "./components/Tag.tsx":
false,

/***/ "./components/UserQuestions.tsx":
/*!**************************************!*\
  !*** ./components/UserQuestions.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/UserQuestions.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar UserQuestions = function UserQuestions(_ref) {\n  _s();\n\n  var uuid = _ref.uuid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchUserPosts = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_5__[\"default\"], \"/users/\").concat(uuid, \"/posts?page=\").concat(page, \"&limit=20\"));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchUserPosts(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])([\"user-posts\", page], function () {\n    return fetchUserPosts(page);\n  }, {\n    keepPreviousData: true,\n    cacheTime: 0\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isPreviousData = _useQuery.isPreviousData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {\n    children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      children: error.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"user-posts-container\",\n      children: [data.posts.map(function (post) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          children: post.uuid\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"page-handlers\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return setPage(function (old) {\n              return Math.max(old - 1, 0);\n            });\n          },\n          disabled: page === 1,\n          children: \"Previous Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            if (!isPreviousData && data.hasMore) {\n              setPage(function (old) {\n                return old + 1;\n              });\n            }\n          },\n          disabled: isPreviousData || !data.hasMore,\n          children: \"Next Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(UserQuestions, \"B8AHcuIhDtcfT64L9EclU84Jm5E=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c = UserQuestions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserQuestions);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserQuestions\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUXVlc3Rpb25zLnRzeD8zODlhIl0sIm5hbWVzIjpbIlVzZXJRdWVzdGlvbnMiLCJ1dWlkIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsImZldGNoVXNlclBvc3RzIiwiZmV0Y2giLCJob3N0IiwicmVzIiwianNvbiIsInVzZVF1ZXJ5Iiwia2VlcFByZXZpb3VzRGF0YSIsImNhY2hlVGltZSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJlcnJvciIsImRhdGEiLCJpc1ByZXZpb3VzRGF0YSIsIm1lc3NhZ2UiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJvbGQiLCJNYXRoIiwibWF4IiwiaGFzTW9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQU9BLElBQU1BLGFBQThCLEdBQUcsU0FBakNBLGFBQWlDLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQzNCQyxzREFBUSxDQUFTLENBQVQsQ0FEbUI7QUFBQSxNQUM1Q0MsSUFENEM7QUFBQSxNQUN0Q0MsT0FEc0M7O0FBR25ELE1BQU1DLGNBQWM7QUFBQSxpTUFBRyxpQkFBT0YsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNIRyxLQUFLLFdBQ2xCQyxtREFEa0Isb0JBQ0pOLElBREkseUJBQ2VFLElBRGYsZUFERjs7QUFBQTtBQUNmSyxpQkFEZTtBQUFBO0FBQUEscUJBSVJBLEdBQUcsQ0FBQ0MsSUFBSixFQUpROztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZEosY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFIbUQsa0JBVVNLLDREQUFRLENBR2xFLENBQUMsWUFBRCxFQUFlUCxJQUFmLENBSGtFLEVBRzVDO0FBQUEsV0FBTUUsY0FBYyxDQUFDRixJQUFELENBQXBCO0FBQUEsR0FINEMsRUFHaEI7QUFDbERRLG9CQUFnQixFQUFFLElBRGdDO0FBRWxEQyxhQUFTLEVBQUU7QUFGdUMsR0FIZ0IsQ0FWakI7QUFBQSxNQVUzQ0MsU0FWMkMsYUFVM0NBLFNBVjJDO0FBQUEsTUFVaENDLE9BVmdDLGFBVWhDQSxPQVZnQztBQUFBLE1BVXZCQyxLQVZ1QixhQVV2QkEsS0FWdUI7QUFBQSxNQVVoQkMsSUFWZ0IsYUFVaEJBLElBVmdCO0FBQUEsTUFVVkMsY0FWVSxhQVVWQSxjQVZVOztBQWtCbkQsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsY0FDR0osU0FBUyxnQkFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURRLEdBRU5DLE9BQU8sZ0JBQ1Q7QUFBQSxnQkFBTUMsS0FBSyxDQUFDRztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUyxnQkFHVDtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBLGlCQUNHRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFVBQUNDLElBQUQ7QUFBQSw0QkFDZDtBQUFBLG9CQUFNQSxJQUFJLENBQUNwQjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFmLENBREgsZUFJRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNFO0FBQ0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNRyxPQUFPLENBQUMsVUFBQ2tCLEdBQUQ7QUFBQSxxQkFBU0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQUcsR0FBRyxDQUFmLEVBQWtCLENBQWxCLENBQVQ7QUFBQSxhQUFELENBQWI7QUFBQSxXQURYO0FBRUUsa0JBQVEsRUFBRW5CLElBQUksS0FBSyxDQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQ0UsaUJBQU8sRUFBRSxtQkFBTTtBQUNiLGdCQUFJLENBQUNjLGNBQUQsSUFBbUJELElBQUksQ0FBQ1MsT0FBNUIsRUFBcUM7QUFDbkNyQixxQkFBTyxDQUFDLFVBQUNrQixHQUFEO0FBQUEsdUJBQVNBLEdBQUcsR0FBRyxDQUFmO0FBQUEsZUFBRCxDQUFQO0FBQ0Q7QUFDRixXQUxIO0FBTUUsa0JBQVEsRUFBRUwsY0FBYyxJQUFJLENBQUNELElBQUksQ0FBQ1MsT0FOcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUNELENBbkREOztHQUFNekIsYTtVQVV3RFUsb0Q7OztLQVZ4RFYsYTtBQXFEU0EsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJRdWVzdGlvbnMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgVXNlclBvc3RzVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy91c2VyUG9zdHNUeXBlXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHV1aWQ6IHN0cmluZztcbn1cblxuY29uc3QgVXNlclF1ZXN0aW9uczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdXVpZCB9KSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG5cbiAgY29uc3QgZmV0Y2hVc2VyUG9zdHMgPSBhc3luYyAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtob3N0fS91c2Vycy8ke3V1aWR9L3Bvc3RzP3BhZ2U9JHtwYWdlfSZsaW1pdD0yMGBcbiAgICApO1xuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9O1xuXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yLCBlcnJvciwgZGF0YSwgaXNQcmV2aW91c0RhdGEgfSA9IHVzZVF1ZXJ5PFxuICAgIFVzZXJQb3N0c1R5cGUsXG4gICAgRXJyb3JcbiAgPihbXCJ1c2VyLXBvc3RzXCIsIHBhZ2VdLCAoKSA9PiBmZXRjaFVzZXJQb3N0cyhwYWdlKSwge1xuICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gICAgY2FjaGVUaW1lOiAwLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcG9zdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAge2RhdGEucG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2Pntwb3N0LnV1aWR9PC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhhbmRsZXJzXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKG9sZCkgPT4gTWF0aC5tYXgob2xkIC0gMSwgMCkpfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA9PT0gMX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHJldmlvdXMgUGFnZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUHJldmlvdXNEYXRhICYmIGRhdGEuaGFzTW9yZSkge1xuICAgICAgICAgICAgICAgICAgc2V0UGFnZSgob2xkKSA9PiBvbGQgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1ByZXZpb3VzRGF0YSB8fCAhZGF0YS5oYXNNb3JlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOZXh0IFBhZ2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJRdWVzdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserQuestions.tsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
false,

/***/ "./node_modules/next/dist/client/route-loader.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/use-intersection.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/next/router.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./utils/cssVariables.ts":
false

})