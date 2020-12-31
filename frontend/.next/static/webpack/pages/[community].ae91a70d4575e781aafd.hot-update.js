webpackHotUpdate_N_E("pages/[community]",{

/***/ "./pages/[community]/index.tsx":
/*!*************************************!*\
  !*** ./pages/[community]/index.tsx ***!
  \*************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _components_Aside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Aside */ \"./components/Aside.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/[community]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar CommunityPostPage = function CommunityPostPage(_ref) {\n  _s();\n\n  var community = _ref.community;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchPosts = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {\n      var res, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/communities/\").concat(community, \"/posts?page=\").concat(page, \"&limit=10\"));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchPosts(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])([\"community-posts\", page], function () {\n    return fetchPosts(page);\n  }, {\n    keepPreviousData: true\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isPreviousData = _useQuery.isPreviousData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-2198628292\" + \" \" + \"community-post-page-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-2198628292\" + \" \" + \"posts-container\",\n        children: [isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2198628292\",\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 13\n        }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2198628292\",\n          children: error.message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n          children: data.posts.map(function (post) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-2198628292\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-2198628292\",\n                children: post.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-2198628292\",\n                children: post.body\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-2198628292\",\n                children: post.user.username\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 19\n              }, _this)]\n            }, post.uuid, true, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2198628292\" + \" \" + \"page-handlers\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-2198628292\" + \" \" + \"current-page\",\n            children: [\"Current Page: \", page]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return setPage(function (old) {\n                return Math.max(old - 1, 0);\n              });\n            },\n            disabled: page === 1,\n            className: \"jsx-2198628292\",\n            children: \"Previous Page\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              if (!isPreviousData && data.hasMore) {\n                setPage(function (old) {\n                  return old + 1;\n                });\n              }\n            },\n            disabled: isPreviousData || !data.hasMore,\n            className: \"jsx-2198628292\",\n            children: \"Next Page\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Aside__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"2198628292\",\n      children: \".community-post-page-container.jsx-2198628292{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.posts-container.jsx-2198628292{width:80%;border:1px solid red;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvW2NvbW11bml0eV0vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFa0IsQUFHd0IsQUFLSCxVQUNXLHFCQUN2QiwyQ0FOYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvW2NvbW11bml0eV0vaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IGhvc3QgZnJvbSBcIi4uLy4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IENvbW11bml0eVBvc3RzVHlwZSB9IGZyb20gXCIuLi8uLi91dGlscy90eXBlcy9wb3N0VHlwZVwiO1xuaW1wb3J0IEFzaWRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FzaWRlXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbW11bml0eTogc3RyaW5nO1xufVxuXG5jb25zdCBDb21tdW5pdHlQb3N0UGFnZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY29tbXVuaXR5IH0pID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7aG9zdH0vY29tbXVuaXRpZXMvJHtjb21tdW5pdHl9L3Bvc3RzP3BhZ2U9JHtwYWdlfSZsaW1pdD0xMGBcbiAgICApO1xuICAgIGNvbnN0IGRhdGE6IENvbW11bml0eVBvc3RzVHlwZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yLCBkYXRhLCBpc1ByZXZpb3VzRGF0YSB9ID0gdXNlUXVlcnk8XG4gICAgQ29tbXVuaXR5UG9zdHNUeXBlLFxuICAgIEVycm9yXG4gID4oW1wiY29tbXVuaXR5LXBvc3RzXCIsIHBhZ2VdLCAoKSA9PiBmZXRjaFBvc3RzKHBhZ2UpLCB7XG4gICAga2VlcFByZXZpb3VzRGF0YTogdHJ1ZSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0eS1wb3N0LXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICkgOiBpc0Vycm9yID8gKFxuICAgICAgICAgICAgPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7ZGF0YS5wb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC51dWlkfT5cbiAgICAgICAgICAgICAgICAgIDxwPntwb3N0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPntwb3N0LmJvZHl9PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QudXNlci51c2VybmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oYW5kbGVyc1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3VycmVudC1wYWdlXCI+Q3VycmVudCBQYWdlOiB7cGFnZX08L3A+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKG9sZCkgPT4gTWF0aC5tYXgob2xkIC0gMSwgMCkpfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA9PT0gMX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHJldmlvdXMgUGFnZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUHJldmlvdXNEYXRhICYmIGRhdGEuaGFzTW9yZSkge1xuICAgICAgICAgICAgICAgICAgc2V0UGFnZSgob2xkKSA9PiBvbGQgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1ByZXZpb3VzRGF0YSB8fCAhZGF0YS5oYXNNb3JlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOZXh0IFBhZ2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFzaWRlIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29tbXVuaXR5LXBvc3QtcGFnZS1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdHMtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb21tdW5pdHk6IGNvbnRleHQucGFyYW1zLmNvbW11bml0eSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbXVuaXR5UG9zdFBhZ2U7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/[community]/index.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CommunityPostPage, \"B8AHcuIhDtcfT64L9EclU84Jm5E=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = CommunityPostPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommunityPostPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommunityPostPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2NvbW11bml0eV0vaW5kZXgudHN4Pzg4NTciXSwibmFtZXMiOlsiQ29tbXVuaXR5UG9zdFBhZ2UiLCJjb21tdW5pdHkiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwiaG9zdCIsInJlcyIsImpzb24iLCJkYXRhIiwidXNlUXVlcnkiLCJrZWVwUHJldmlvdXNEYXRhIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsImVycm9yIiwiaXNQcmV2aW91c0RhdGEiLCJtZXNzYWdlIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwidGl0bGUiLCJib2R5IiwidXNlciIsInVzZXJuYW1lIiwidXVpZCIsIm9sZCIsIk1hdGgiLCJtYXgiLCJoYXNNb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUVBOztBQU1BLElBQU1BLGlCQUFrQyxHQUFHLFNBQXJDQSxpQkFBcUMsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLGtCQUNwQ0Msc0RBQVEsQ0FBUyxDQUFULENBRDRCO0FBQUEsTUFDckRDLElBRHFEO0FBQUEsTUFDL0NDLE9BRCtDOztBQUc1RCxNQUFNQyxVQUFVO0FBQUEsaU1BQUcsaUJBQU9GLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQ0csS0FBSyxXQUNsQkMsbURBRGtCLDBCQUNFTixTQURGLHlCQUMwQkUsSUFEMUIsZUFETjs7QUFBQTtBQUNYSyxpQkFEVztBQUFBO0FBQUEscUJBSXNCQSxHQUFHLENBQUNDLElBQUosRUFKdEI7O0FBQUE7QUFJWEMsa0JBSlc7QUFBQSwrQ0FLVkEsSUFMVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWTCxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQUg0RCxrQkFXQU0s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dCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgQ29tbXVuaXR5UG9zdHNUeXBlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3R5cGVzL3Bvc3RUeXBlXCI7XG5pbXBvcnQgQXNpZGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXNpZGVcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY29tbXVuaXR5OiBzdHJpbmc7XG59XG5cbmNvbnN0IENvbW11bml0eVBvc3RQYWdlOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjb21tdW5pdHkgfSkgPT4ge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuXG4gIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtob3N0fS9jb21tdW5pdGllcy8ke2NvbW11bml0eX0vcG9zdHM/cGFnZT0ke3BhZ2V9JmxpbWl0PTEwYFxuICAgICk7XG4gICAgY29uc3QgZGF0YTogQ29tbXVuaXR5UG9zdHNUeXBlID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBjb25zdCB7IGlzTG9hZGluZywgaXNFcnJvciwgZXJyb3IsIGRhdGEsIGlzUHJldmlvdXNEYXRhIH0gPSB1c2VRdWVyeTxcbiAgICBDb21tdW5pdHlQb3N0c1R5cGUsXG4gICAgRXJyb3JcbiAgPihbXCJjb21tdW5pdHktcG9zdHNcIiwgcGFnZV0sICgpID0+IGZldGNoUG9zdHMocGFnZSksIHtcbiAgICBrZWVwUHJldmlvdXNEYXRhOiB0cnVlLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXR5LXBvc3QtcGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0cy1jb250YWluZXJcIj5cbiAgICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgICAgICA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtkYXRhLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0LnV1aWR9PlxuICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XG4gICAgICAgICAgICAgICAgICA8cD57cG9zdC51c2VyLnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhhbmRsZXJzXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJyZW50LXBhZ2VcIj5DdXJyZW50IFBhZ2U6IHtwYWdlfTwvcD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZSgob2xkKSA9PiBNYXRoLm1heChvbGQgLSAxLCAwKSl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmV2aW91cyBQYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXNQcmV2aW91c0RhdGEgJiYgZGF0YS5oYXNNb3JlKSB7XG4gICAgICAgICAgICAgICAgICBzZXRQYWdlKChvbGQpID0+IG9sZCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJldmlvdXNEYXRhIHx8ICFkYXRhLmhhc01vcmV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QXNpZGUgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb21tdW5pdHktcG9zdC1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0cy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNvbW11bml0eTogY29udGV4dC5wYXJhbXMuY29tbXVuaXR5LFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tdW5pdHlQb3N0UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[community]/index.tsx\n");

/***/ })

})