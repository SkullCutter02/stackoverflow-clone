webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Communities.tsx":
/*!************************************!*\
  !*** ./components/Communities.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _Community__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Community */ \"./components/Community.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Communities.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Communities = function Communities() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchCommunities = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var page,\n          res,\n          data,\n          _args = arguments;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;\n              _context.next = 3;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/communities?page=\").concat(page, \"&limit=10\"));\n\n            case 3:\n              res = _context.sent;\n              _context.next = 6;\n              return res.json();\n\n            case 6:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchCommunities() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])([\"communities\", page], function () {\n    return fetchCommunities(page);\n  }, {\n    keepPreviousData: true\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isFetching = _useQuery.isFetching,\n      isPreviousData = _useQuery.isPreviousData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3727471883\" + \" \" + \"communities-container\",\n      children: [isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3727471883\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3727471883\",\n        children: [\"Error: \", error.message]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n        children: [data.communities.map(function (community) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Community__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            uuid: community.uuid,\n            name: community.name,\n            description: community.description,\n            count: community.posts.length\n          }, community.uuid, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 15\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-3727471883\" + \" \" + \"page-handlers\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-3727471883\",\n            children: [\"Current Page: \", page]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return setPage(function (old) {\n                return Math.max(old - 1, 0);\n              });\n            },\n            disabled: page === 1,\n            className: \"jsx-3727471883\",\n            children: \"Previous Page\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              if (!isPreviousData && data.hasMore) {\n                setPage(function (old) {\n                  return old + 1;\n                });\n              }\n            },\n            disabled: isPreviousData || !data.hasMore,\n            className: \"jsx-3727471883\",\n            children: \"Next Page\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, _this), isFetching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-3727471883\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 23\n      }, _this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"3727471883\",\n      children: \".communities-container.jsx-3727471883{position:relative;margin-bottom:10px;}.page-handlers.jsx-3727471883{position:absolute;bottom:-5px;right:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:28px;border:1px solid red;width:calc(100% - 30px);-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}button.jsx-3727471883{height:70%;width:10%;margin:0 5px;font-size:0.6rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9Db21tdW5pdGllcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEZrQixBQUc2QixBQUtBLEFBWVAsV0FDRCxPQWpCUyxBQUtQLEdBYUMsU0FaRixJQWFNLEdBbEJuQixJQU1lLFVBYWYsZ0VBWmMsWUFDUyxxQkFDRyx3QkFDQyxpR0FDSixxR0FDdkIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9jb21wb25lbnRzL0NvbW11bml0aWVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCBDb21tdW5pdHkgZnJvbSBcIi4vQ29tbXVuaXR5XCI7XG5cbnR5cGUgUG9zdFR5cGUgPSB7XG4gIHV1aWQ6IHN0cmluZztcbn07XG5cbnR5cGUgQ29tbXVuaXR5VHlwZSA9IHtcbiAgdXVpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgcG9zdHM6IFBvc3RUeXBlW107XG59O1xuXG50eXBlIERhdGFUeXBlID0ge1xuICBjb21tdW5pdGllczogQ29tbXVuaXR5VHlwZVtdO1xuICBoYXNNb3JlOiBib29sZWFuO1xufTtcblxuY29uc3QgQ29tbXVuaXRpZXM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuXG4gIGNvbnN0IGZldGNoQ29tbXVuaXRpZXMgPSBhc3luYyAocGFnZTogbnVtYmVyID0gMSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2hvc3R9L2NvbW11bml0aWVzP3BhZ2U9JHtwYWdlfSZsaW1pdD0xMGApO1xuICAgIGNvbnN0IGRhdGE6IERhdGFUeXBlID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBjb25zdCB7XG4gICAgaXNMb2FkaW5nLFxuICAgIGlzRXJyb3IsXG4gICAgZXJyb3IsXG4gICAgZGF0YSxcbiAgICBpc0ZldGNoaW5nLFxuICAgIGlzUHJldmlvdXNEYXRhLFxuICB9ID0gdXNlUXVlcnk8RGF0YVR5cGUsIEVycm9yPihcbiAgICBbXCJjb21tdW5pdGllc1wiLCBwYWdlXSxcbiAgICAoKSA9PiBmZXRjaENvbW11bml0aWVzKHBhZ2UpLFxuICAgIHtcbiAgICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gICAgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tdW5pdGllcy1jb250YWluZXJcIj5cbiAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgICAgPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2RhdGEuY29tbXVuaXRpZXMubWFwKChjb21tdW5pdHkpID0+IChcbiAgICAgICAgICAgICAgPENvbW11bml0eVxuICAgICAgICAgICAgICAgIHV1aWQ9e2NvbW11bml0eS51dWlkfVxuICAgICAgICAgICAgICAgIG5hbWU9e2NvbW11bml0eS5uYW1lfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtjb21tdW5pdHkuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgY291bnQ9e2NvbW11bml0eS5wb3N0cy5sZW5ndGh9XG4gICAgICAgICAgICAgICAga2V5PXtjb21tdW5pdHkudXVpZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhhbmRsZXJzXCI+XG4gICAgICAgICAgICAgIDxwPkN1cnJlbnQgUGFnZToge3BhZ2V9PC9wPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZSgob2xkKSA9PiBNYXRoLm1heChvbGQgLSAxLCAwKSl9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQcmV2aW91cyBQYWdlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCFpc1ByZXZpb3VzRGF0YSAmJiBkYXRhLmhhc01vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFnZSgob2xkKSA9PiBvbGQgKyAxKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1ByZXZpb3VzRGF0YSB8fCAhZGF0YS5oYXNNb3JlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTmV4dCBQYWdlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAge2lzRmV0Y2hpbmcgPyA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29tbXVuaXRpZXMtY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYWdlLWhhbmRsZXJzIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tdW5pdGllcztcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Communities.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Communities, \"ROZZXDCpSyTccMsQYEDldIx7+gA=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = Communities;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Communities);\n\nvar _c;\n\n$RefreshReg$(_c, \"Communities\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tdW5pdGllcy50c3g/YjhjNSJdLCJuYW1lcyI6WyJDb21tdW5pdGllcyIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJmZXRjaENvbW11bml0aWVzIiwiZmV0Y2giLCJob3N0IiwicmVzIiwianNvbiIsImRhdGEiLCJ1c2VRdWVyeSIsImtlZXBQcmV2aW91c0RhdGEiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiZXJyb3IiLCJpc0ZldGNoaW5nIiwiaXNQcmV2aW91c0RhdGEiLCJtZXNzYWdlIiwiY29tbXVuaXRpZXMiLCJtYXAiLCJjb21tdW5pdHkiLCJ1dWlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicG9zdHMiLCJsZW5ndGgiLCJvbGQiLCJNYXRoIiwibWF4IiwiaGFzTW9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQW9CQSxJQUFNQSxXQUFxQixHQUFHLFNBQXhCQSxXQUF3QixHQUFNO0FBQUE7O0FBQUEsa0JBQ1ZDLHNEQUFRLENBQVMsQ0FBVCxDQURFO0FBQUEsTUFDM0JDLElBRDJCO0FBQUEsTUFDckJDLE9BRHFCOztBQUdsQyxNQUFNQyxnQkFBZ0I7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBT0Ysa0JBQVAsMkRBQXNCLENBQXRCO0FBQUE7QUFBQSxxQkFDTEcsS0FBSyxXQUFJQyxtREFBSiwrQkFBNkJKLElBQTdCLGVBREE7O0FBQUE7QUFDakJLLGlCQURpQjtBQUFBO0FBQUEscUJBRU1BLEdBQUcsQ0FBQ0MsSUFBSixFQUZOOztBQUFBO0FBRWpCQyxrQkFGaUI7QUFBQSwrQ0FHaEJBLElBSGdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCTCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBSGtDLGtCQWdCOUJNLDREQUFRLENBQ1YsQ0FBQyxhQUFELEVBQWdCUixJQUFoQixDQURVLEVBRVY7QUFBQSxXQUFNRSxnQkFBZ0IsQ0FBQ0YsSUFBRCxDQUF0QjtBQUFBLEdBRlUsRUFHVjtBQUNFUyxvQkFBZ0IsRUFBRTtBQURwQixHQUhVLENBaEJzQjtBQUFBLE1BVWhDQyxTQVZnQyxhQVVoQ0EsU0FWZ0M7QUFBQSxNQVdoQ0MsT0FYZ0MsYUFXaENBLE9BWGdDO0FBQUEsTUFZaENDLEtBWmdDLGFBWWhDQSxLQVpnQztBQUFBLE1BYWhDTCxJQWJnQyxhQWFoQ0EsSUFiZ0M7QUFBQSxNQWNoQ00sVUFkZ0MsYUFjaENBLFVBZGdDO0FBQUEsTUFlaENDLGNBZmdDLGFBZWhDQSxjQWZnQzs7QUF3QmxDLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFO0FBQUEsMENBQWUsdUJBQWY7QUFBQSxpQkFDR0osU0FBUyxnQkFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFEsR0FFTkMsT0FBTyxnQkFDVDtBQUFBO0FBQUEsOEJBQWFDLEtBQUssQ0FBQ0csT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFMsZ0JBR1QscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsbUJBQ0dSLElBQUksQ0FBQ1MsV0FBTCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsU0FBRDtBQUFBLDhCQUNwQixxRUFBQyxrREFBRDtBQUNFLGdCQUFJLEVBQUVBLFNBQVMsQ0FBQ0MsSUFEbEI7QUFFRSxnQkFBSSxFQUFFRCxTQUFTLENBQUNFLElBRmxCO0FBR0UsdUJBQVcsRUFBRUYsU0FBUyxDQUFDRyxXQUh6QjtBQUlFLGlCQUFLLEVBQUVILFNBQVMsQ0FBQ0ksS0FBVixDQUFnQkM7QUFKekIsYUFLT0wsU0FBUyxDQUFDQyxJQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURvQjtBQUFBLFNBQXJCLENBREgsZUFVRTtBQUFBLDhDQUFlLGVBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUEseUNBQWtCbkIsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1DLE9BQU8sQ0FBQyxVQUFDdUIsR0FBRDtBQUFBLHVCQUFTQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0YsR0FBRyxHQUFHLENBQWYsRUFBa0IsQ0FBbEIsQ0FBVDtBQUFBLGVBQUQsQ0FBYjtBQUFBLGFBRFg7QUFFRSxvQkFBUSxFQUFFeEIsSUFBSSxLQUFLLENBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFRRTtBQUNFLG1CQUFPLEVBQUUsbUJBQU07QUFDYixrQkFBSSxDQUFDYyxjQUFELElBQW1CUCxJQUFJLENBQUNvQixPQUE1QixFQUFxQztBQUNuQzFCLHVCQUFPLENBQUMsVUFBQ3VCLEdBQUQ7QUFBQSx5QkFBU0EsR0FBRyxHQUFHLENBQWY7QUFBQSxpQkFBRCxDQUFQO0FBQ0Q7QUFDRixhQUxIO0FBTUUsb0JBQVEsRUFBRVYsY0FBYyxJQUFJLENBQUNQLElBQUksQ0FBQ29CLE9BTnBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLEVBcUNHZCxVQUFVLGdCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUE2QixJQXJDMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxRUQsQ0E3RkQ7O0dBQU1mLFc7VUFnQkFVLG9EOzs7S0FoQkFWLFc7QUErRlNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tdW5pdGllcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgQ29tbXVuaXR5IGZyb20gXCIuL0NvbW11bml0eVwiO1xuXG50eXBlIFBvc3RUeXBlID0ge1xuICB1dWlkOiBzdHJpbmc7XG59O1xuXG50eXBlIENvbW11bml0eVR5cGUgPSB7XG4gIHV1aWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG4gIHBvc3RzOiBQb3N0VHlwZVtdO1xufTtcblxudHlwZSBEYXRhVHlwZSA9IHtcbiAgY29tbXVuaXRpZXM6IENvbW11bml0eVR5cGVbXTtcbiAgaGFzTW9yZTogYm9vbGVhbjtcbn07XG5cbmNvbnN0IENvbW11bml0aWVzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBmZXRjaENvbW11bml0aWVzID0gYXN5bmMgKHBhZ2U6IG51bWJlciA9IDEpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtob3N0fS9jb21tdW5pdGllcz9wYWdlPSR7cGFnZX0mbGltaXQ9MTBgKTtcbiAgICBjb25zdCBkYXRhOiBEYXRhVHlwZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgY29uc3Qge1xuICAgIGlzTG9hZGluZyxcbiAgICBpc0Vycm9yLFxuICAgIGVycm9yLFxuICAgIGRhdGEsXG4gICAgaXNGZXRjaGluZyxcbiAgICBpc1ByZXZpb3VzRGF0YSxcbiAgfSA9IHVzZVF1ZXJ5PERhdGFUeXBlLCBFcnJvcj4oXG4gICAgW1wiY29tbXVuaXRpZXNcIiwgcGFnZV0sXG4gICAgKCkgPT4gZmV0Y2hDb21tdW5pdGllcyhwYWdlKSxcbiAgICB7XG4gICAgICBrZWVwUHJldmlvdXNEYXRhOiB0cnVlLFxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXRpZXMtY29udGFpbmVyXCI+XG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICkgOiBpc0Vycm9yID8gKFxuICAgICAgICAgIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtkYXRhLmNvbW11bml0aWVzLm1hcCgoY29tbXVuaXR5KSA9PiAoXG4gICAgICAgICAgICAgIDxDb21tdW5pdHlcbiAgICAgICAgICAgICAgICB1dWlkPXtjb21tdW5pdHkudXVpZH1cbiAgICAgICAgICAgICAgICBuYW1lPXtjb21tdW5pdHkubmFtZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17Y29tbXVuaXR5LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGNvdW50PXtjb21tdW5pdHkucG9zdHMubGVuZ3RofVxuICAgICAgICAgICAgICAgIGtleT17Y29tbXVuaXR5LnV1aWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oYW5kbGVyc1wiPlxuICAgICAgICAgICAgICA8cD5DdXJyZW50IFBhZ2U6IHtwYWdlfTwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKG9sZCkgPT4gTWF0aC5tYXgob2xkIC0gMSwgMCkpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUHJldmlvdXMgUGFnZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICghaXNQcmV2aW91c0RhdGEgJiYgZGF0YS5oYXNNb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoKG9sZCkgPT4gb2xkICsgMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNQcmV2aW91c0RhdGEgfHwgIWRhdGEuaGFzTW9yZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHtpc0ZldGNoaW5nID8gPHNwYW4+TG9hZGluZy4uLjwvc3Bhbj4gOiBudWxsfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbW11bml0aWVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFnZS1oYW5kbGVycyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLTVweDtcbiAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbXVuaXRpZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Communities.tsx\n");

/***/ })

})