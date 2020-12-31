webpackHotUpdate_N_E("pages/[community]",{

/***/ "./pages/[community]/index.tsx":
/*!*************************************!*\
  !*** ./pages/[community]/index.tsx ***!
  \*************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _components_Aside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Aside */ \"./components/Aside.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/[community]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar CommunityPostPage = function CommunityPostPage(_ref) {\n  _s();\n\n  var community = _ref.community;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchPosts = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {\n      var res, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/communities/\").concat(community, \"/posts?page=\").concat(page, \"&limit=10\"));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchPosts(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])([\"community-posts\", page], function () {\n    return fetchPosts(page);\n  }, {\n    keepPreviousData: true\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isPreviousData = _useQuery.isPreviousData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3816065108\" + \" \" + \"community-post-header-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"jsx-3816065108\",\n        children: data === null || data === void 0 ? void 0 : data.community.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n        className: \"jsx-3816065108\",\n        children: data === null || data === void 0 ? void 0 : data.community.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3816065108\" + \" \" + \"community-post-page-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3816065108\" + \" \" + \"posts-container\",\n        children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-3816065108\",\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-3816065108\",\n          children: error.message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n          children: [data.posts.map(function (post) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-3816065108\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-3816065108\",\n                children: post.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-3816065108\",\n                children: post.body\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-3816065108\",\n                children: post.user.username\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 19\n              }, _this)]\n            }, post.uuid, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 17\n            }, _this);\n          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-3816065108\" + \" \" + \"page-handlers\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3816065108\" + \" \" + \"current-page\",\n              children: [\"Current Page: \", page]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              onClick: function onClick() {\n                return setPage(function (old) {\n                  return Math.max(old - 1, 0);\n                });\n              },\n              disabled: page === 1,\n              className: \"jsx-3816065108\",\n              children: \"Previous Page\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              onClick: function onClick() {\n                if (!isPreviousData && data.hasMore) {\n                  setPage(function (old) {\n                    return old + 1;\n                  });\n                }\n              },\n              disabled: isPreviousData || !data.hasMore,\n              className: \"jsx-3816065108\",\n              children: \"Next Page\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Aside__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        borderSide: \"left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"3816065108\",\n      children: \".community-post-page-container.jsx-3816065108{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.posts-container.jsx-3816065108{width:80%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvW2NvbW11bml0eV0vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFa0IsQUFHd0IsQUFLSCxVQUNaLGdFQUxhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9wYWdlcy9bY29tbXVuaXR5XS9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgQ29tbXVuaXR5UG9zdHNUeXBlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3R5cGVzL3Bvc3RUeXBlXCI7XG5pbXBvcnQgQXNpZGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXNpZGVcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY29tbXVuaXR5OiBzdHJpbmc7XG59XG5cbmNvbnN0IENvbW11bml0eVBvc3RQYWdlOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjb21tdW5pdHkgfSkgPT4ge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuXG4gIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtob3N0fS9jb21tdW5pdGllcy8ke2NvbW11bml0eX0vcG9zdHM/cGFnZT0ke3BhZ2V9JmxpbWl0PTEwYFxuICAgICk7XG4gICAgY29uc3QgZGF0YTogQ29tbXVuaXR5UG9zdHNUeXBlID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBjb25zdCB7IGlzTG9hZGluZywgaXNFcnJvciwgZXJyb3IsIGRhdGEsIGlzUHJldmlvdXNEYXRhIH0gPSB1c2VRdWVyeTxcbiAgICBDb21tdW5pdHlQb3N0c1R5cGUsXG4gICAgRXJyb3JcbiAgPihbXCJjb21tdW5pdHktcG9zdHNcIiwgcGFnZV0sICgpID0+IGZldGNoUG9zdHMocGFnZSksIHtcbiAgICBrZWVwUHJldmlvdXNEYXRhOiB0cnVlLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXR5LXBvc3QtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+e2RhdGE/LmNvbW11bml0eS5uYW1lfTwvaDE+XG4gICAgICAgIDxwPntkYXRhPy5jb21tdW5pdHkuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0eS1wb3N0LXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICkgOiBpc0Vycm9yID8gKFxuICAgICAgICAgICAgPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7ZGF0YS5wb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC51dWlkfT5cbiAgICAgICAgICAgICAgICAgIDxwPntwb3N0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPntwb3N0LmJvZHl9PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QudXNlci51c2VybmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGFuZGxlcnNcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJyZW50LXBhZ2VcIj5DdXJyZW50IFBhZ2U6IHtwYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChvbGQpID0+IE1hdGgubWF4KG9sZCAtIDEsIDApKX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNQcmV2aW91c0RhdGEgJiYgZGF0YS5oYXNNb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0UGFnZSgob2xkKSA9PiBvbGQgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1ByZXZpb3VzRGF0YSB8fCAhZGF0YS5oYXNNb3JlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBc2lkZSBib3JkZXJTaWRlPXtcImxlZnRcIn0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb21tdW5pdHktcG9zdC1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0cy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY29tbXVuaXR5OiBjb250ZXh0LnBhcmFtcy5jb21tdW5pdHksXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW11bml0eVBvc3RQYWdlO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/[community]/index.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CommunityPostPage, \"B8AHcuIhDtcfT64L9EclU84Jm5E=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = CommunityPostPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommunityPostPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommunityPostPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2NvbW11bml0eV0vaW5kZXgudHN4Pzg4NTciXSwibmFtZXMiOlsiQ29tbXVuaXR5UG9zdFBhZ2UiLCJjb21tdW5pdHkiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwiaG9zdCIsInJlcyIsImpzb24iLCJkYXRhIiwidXNlUXVlcnkiLCJrZWVwUHJldmlvdXNEYXRhIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsImVycm9yIiwiaXNQcmV2aW91c0RhdGEiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJtZXNzYWdlIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwidGl0bGUiLCJib2R5IiwidXNlciIsInVzZXJuYW1lIiwidXVpZCIsIm9sZCIsIk1hdGgiLCJtYXgiLCJoYXNNb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUVBOztBQU1BLElBQU1BLGlCQUFrQyxHQUFHLFNBQXJDQSxpQkFBcUMsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLGtCQUNwQ0Msc0RBQVEsQ0FBUyxDQUFULENBRDRCO0FBQUEsTUFDckRDLElBRHFEO0FBQUEsTUFDL0NDLE9BRCtDOztBQUc1RCxNQUFNQyxVQUFVO0FBQUEsaU1BQUcsaUJBQU9GLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQ0csS0FBSyxXQUNsQkMsbURBRGtCLDBCQUNFTixTQURGLHlCQUMwQkUsSUFEMUIsZUFETjs7QUFBQTtBQUNYSyxpQkFEVztBQUFBO0FBQUEscUJBSXNCQSxHQUFHLENBQUNDLElBQUosRUFKdEI7O0FBQUE7QUFJWEMsa0JBSlc7QUFBQSwrQ0FLVkEsSUFMVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWTCxVQUFVO0FBQUE7QUFBQTtBQUFB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QTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFxQ0UscUVBQUMseURBQUQ7QUFBTyxrQkFBVSxFQUFFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwREQsQ0E1RUQ7O0dBQU0vQixpQjtVQVd3RFcsb0Q7OztLQVh4RFgsaUI7O0FBc0ZTQSxnRkFBZiIsImZpbGUiOiIuL3BhZ2VzL1tjb21tdW5pdHldL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi8uLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBDb21tdW5pdHlQb3N0c1R5cGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdHlwZXMvcG9zdFR5cGVcIjtcbmltcG9ydCBBc2lkZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Bc2lkZVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb21tdW5pdHk6IHN0cmluZztcbn1cblxuY29uc3QgQ29tbXVuaXR5UG9zdFBhZ2U6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNvbW11bml0eSB9KSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG5cbiAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jIChwYWdlOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke2hvc3R9L2NvbW11bml0aWVzLyR7Y29tbXVuaXR5fS9wb3N0cz9wYWdlPSR7cGFnZX0mbGltaXQ9MTBgXG4gICAgKTtcbiAgICBjb25zdCBkYXRhOiBDb21tdW5pdHlQb3N0c1R5cGUgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yLCBlcnJvciwgZGF0YSwgaXNQcmV2aW91c0RhdGEgfSA9IHVzZVF1ZXJ5PFxuICAgIENvbW11bml0eVBvc3RzVHlwZSxcbiAgICBFcnJvclxuICA+KFtcImNvbW11bml0eS1wb3N0c1wiLCBwYWdlXSwgKCkgPT4gZmV0Y2hQb3N0cyhwYWdlKSwge1xuICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tdW5pdHktcG9zdC1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT57ZGF0YT8uY29tbXVuaXR5Lm5hbWV9PC9oMT5cbiAgICAgICAgPHA+e2RhdGE/LmNvbW11bml0eS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXR5LXBvc3QtcGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0cy1jb250YWluZXJcIj5cbiAgICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgICAgICA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtkYXRhLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0LnV1aWR9PlxuICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XG4gICAgICAgICAgICAgICAgICA8cD57cG9zdC51c2VyLnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oYW5kbGVyc1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN1cnJlbnQtcGFnZVwiPkN1cnJlbnQgUGFnZToge3BhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKG9sZCkgPT4gTWF0aC5tYXgob2xkIC0gMSwgMCkpfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUHJldmlvdXMgUGFnZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ByZXZpb3VzRGF0YSAmJiBkYXRhLmhhc01vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlKChvbGQpID0+IG9sZCArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJldmlvdXNEYXRhIHx8ICFkYXRhLmhhc01vcmV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTmV4dCBQYWdlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFzaWRlIGJvcmRlclNpZGU9e1wibGVmdFwifSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbW11bml0eS1wb3N0LXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RzLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb21tdW5pdHk6IGNvbnRleHQucGFyYW1zLmNvbW11bml0eSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbXVuaXR5UG9zdFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[community]/index.tsx\n");

/***/ })

})