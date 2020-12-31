webpackHotUpdate_N_E("pages/[community]",{

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

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
false,

/***/ "./node_modules/next/dist/client/route-loader.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
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

/***/ "./node_modules/next/router.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./pages/[community]/index.tsx":
/*!*************************************!*\
  !*** ./pages/[community]/index.tsx ***!
  \*************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/host */ \"./utils/host.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/[community]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar CommunityPostPage = function CommunityPostPage(_ref) {\n  _s();\n\n  var community = _ref.community;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchPosts = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {\n      var res, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_5__[\"default\"], \"/communities/\").concat(community, \"/posts?page=\").concat(page, \"&limit=10\"));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchPosts(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])([\"community-posts\", page], function () {\n    return fetchPosts(page);\n  }, {\n    keepPreviousData: true\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isFetching = _useQuery.isFetching,\n      isPreviousData = _useQuery.isPreviousData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        children: error.message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this) : data.posts.map(function (post) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            children: post.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            children: post.body\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            children: post.user.username\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, _this)]\n        }, post.uuid, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CommunityPostPage, \"ROZZXDCpSyTccMsQYEDldIx7+gA=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c = CommunityPostPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommunityPostPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommunityPostPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2NvbW11bml0eV0vaW5kZXgudHN4Pzg4NTciXSwibmFtZXMiOlsiQ29tbXVuaXR5UG9zdFBhZ2UiLCJjb21tdW5pdHkiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwiaG9zdCIsInJlcyIsImpzb24iLCJkYXRhIiwidXNlUXVlcnkiLCJrZWVwUHJldmlvdXNEYXRhIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsImVycm9yIiwiaXNGZXRjaGluZyIsImlzUHJldmlvdXNEYXRhIiwibWVzc2FnZSIsInBvc3RzIiwibWFwIiwicG9zdCIsInRpdGxlIiwiYm9keSIsInVzZXIiLCJ1c2VybmFtZSIsInV1aWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7O0FBT0EsSUFBTUEsaUJBQWtDLEdBQUcsU0FBckNBLGlCQUFxQyxPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsa0JBQ3BDQyxzREFBUSxDQUFTLENBQVQsQ0FENEI7QUFBQSxNQUNyREMsSUFEcUQ7QUFBQSxNQUMvQ0MsT0FEK0M7O0FBRzVELE1BQU1DLFVBQVU7QUFBQSxpTUFBRyxpQkFBT0YsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNDRyxLQUFLLFdBQ2xCQyxtREFEa0IsMEJBQ0VOLFNBREYseUJBQzBCRSxJQUQxQixlQUROOztBQUFBO0FBQ1hLLGlCQURXO0FBQUE7QUFBQSxxQkFJc0JBLEdBQUcsQ0FBQ0MsSUFBSixFQUp0Qjs7QUFBQTtBQUlYQyxrQkFKVztBQUFBLCtDQUtWQSxJQUxVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZMLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBSDRELGtCQWtCeERNLDREQUFRLENBQ1YsQ0FBQyxpQkFBRCxFQUFvQlIsSUFBcEIsQ0FEVSxFQUVWO0FBQUEsV0FBTUUsVUFBVSxDQUFDRixJQUFELENBQWhCO0FBQUEsR0FGVSxFQUdWO0FBQ0VTLG9CQUFnQixFQUFFO0FBRHBCLEdBSFUsQ0FsQmdEO0FBQUEsTUFZMURDLFNBWjBELGFBWTFEQSxTQVowRDtBQUFBLE1BYTFEQyxPQWIwRCxhQWExREEsT0FiMEQ7QUFBQSxNQWMxREMsS0FkMEQsYUFjMURBLEtBZDBEO0FBQUEsTUFlMURMLElBZjBELGFBZTFEQSxJQWYwRDtBQUFBLE1BZ0IxRE0sVUFoQjBELGFBZ0IxREEsVUFoQjBEO0FBQUEsTUFpQjFEQyxjQWpCMEQsYUFpQjFEQSxjQWpCMEQ7O0FBMEI1RCxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwyQkFDRTtBQUFBLGdCQUNHSixTQUFTLGdCQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFEsR0FFTkMsT0FBTyxnQkFDVDtBQUFBLGtCQUFNQyxLQUFLLENBQUNHO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURTLEdBR1RSLElBQUksQ0FBQ1MsS0FBTCxDQUFXQyxHQUFYLENBQWUsVUFBQ0MsSUFBRDtBQUFBLDRCQUNiO0FBQUEsa0NBQ0U7QUFBQSxzQkFBSUEsSUFBSSxDQUFDQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLHNCQUFJRCxJQUFJLENBQUNFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUEsc0JBQUlGLElBQUksQ0FBQ0csSUFBTCxDQUFVQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQSxXQUFVSixJQUFJLENBQUNLLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWY7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBN0NEOztHQUFNMUIsaUI7VUFrQkFXLG9EOzs7S0FsQkFYLGlCOztBQXVEU0EsZ0ZBQWYiLCJmaWxlIjoiLi9wYWdlcy9bY29tbXVuaXR5XS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgQ29tbXVuaXR5UG9zdHNUeXBlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3R5cGVzL3Bvc3RUeXBlXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbW11bml0eTogc3RyaW5nO1xufVxuXG5jb25zdCBDb21tdW5pdHlQb3N0UGFnZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY29tbXVuaXR5IH0pID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7aG9zdH0vY29tbXVuaXRpZXMvJHtjb21tdW5pdHl9L3Bvc3RzP3BhZ2U9JHtwYWdlfSZsaW1pdD0xMGBcbiAgICApO1xuICAgIGNvbnN0IGRhdGE6IENvbW11bml0eVBvc3RzVHlwZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgY29uc3Qge1xuICAgIGlzTG9hZGluZyxcbiAgICBpc0Vycm9yLFxuICAgIGVycm9yLFxuICAgIGRhdGEsXG4gICAgaXNGZXRjaGluZyxcbiAgICBpc1ByZXZpb3VzRGF0YSxcbiAgfSA9IHVzZVF1ZXJ5PENvbW11bml0eVBvc3RzVHlwZSwgRXJyb3I+KFxuICAgIFtcImNvbW11bml0eS1wb3N0c1wiLCBwYWdlXSxcbiAgICAoKSA9PiBmZXRjaFBvc3RzKHBhZ2UpLFxuICAgIHtcbiAgICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gICAgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdj5cbiAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgICAgPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBkYXRhLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QudXVpZH0+XG4gICAgICAgICAgICAgIDxwPntwb3N0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XG4gICAgICAgICAgICAgIDxwPntwb3N0LnVzZXIudXNlcm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb21tdW5pdHk6IGNvbnRleHQucGFyYW1zLmNvbW11bml0eSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbXVuaXR5UG9zdFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[community]/index.tsx\n");

/***/ })

})