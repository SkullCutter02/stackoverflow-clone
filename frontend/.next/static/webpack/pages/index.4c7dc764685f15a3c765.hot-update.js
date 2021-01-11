webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Communities.tsx":
/*!************************************!*\
  !*** ./components/Communities.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _Community__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Community */ \"./components/Community.tsx\");\n/* harmony import */ var _PageHandlers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PageHandlers */ \"./components/PageHandlers.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Communities.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Communities = function Communities(_ref) {\n  _s();\n\n  var filter = _ref.filter;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchCommunities = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var page,\n          filter,\n          res,\n          data,\n          _args = arguments;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;\n              filter = _args.length > 1 && _args[1] !== undefined ? _args[1] : \"\";\n              _context.next = 4;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/communities?page=\").concat(page, \"&limit=20&filter=\").concat(filter));\n\n            case 4:\n              res = _context.sent;\n              _context.next = 7;\n              return res.json();\n\n            case 7:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchCommunities() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])([\"communities\", page, filter], function () {\n    return fetchCommunities(page, filter);\n  }, {\n    keepPreviousData: true\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isPreviousData = _useQuery.isPreviousData;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    setPage(1);\n  }, [filter]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1563327456\" + \" \" + \"communities-container\",\n      children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1563327456\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1563327456\",\n        children: [\"Error: \", error.message]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n        children: [data.communities.map(function (community) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Community__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            uuid: community.uuid,\n            name: community.name,\n            description: community.description,\n            count: community.posts.length\n          }, community.uuid, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 15\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_PageHandlers__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          page: page,\n          setPage: setPage,\n          isPreviousData: isPreviousData,\n          hasMore: data.hasMore\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1563327456\",\n      children: \".communities-container.jsx-1563327456{position:relative;margin-bottom:40px;min-height:20px;}.page-handlers.jsx-1563327456{position:absolute;bottom:-20px;right:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:28px;width:calc(100% - 30px);-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}button.jsx-1563327456{height:70%;width:90px;margin:0 5px;font-size:0.6rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9Db21tdW5pdGllcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZrQixBQUc2QixBQU1BLEFBV1AsV0FDQSxPQWpCUSxBQU1OLElBWUEsU0FYRixJQVlNLEVBbEJELEtBT0gsVUFZZixDQWxCQSwrREFPYyxZQUNZLHdCQUNDLGlHQUNKLHFHQUN2QiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvQ29tbXVuaXRpZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgQ29tbXVuaXR5IGZyb20gXCIuL0NvbW11bml0eVwiO1xuaW1wb3J0IHsgQ29tbXVuaXRpZXNUeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL2NvbW11bml0eVR5cGVcIjtcbmltcG9ydCBQYWdlSGFuZGxlcnMgZnJvbSBcIi4vUGFnZUhhbmRsZXJzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZpbHRlcjogc3RyaW5nO1xufVxuXG5jb25zdCBDb21tdW5pdGllczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZmlsdGVyIH0pID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBmZXRjaENvbW11bml0aWVzID0gYXN5bmMgKHBhZ2U6IG51bWJlciA9IDEsIGZpbHRlcjogc3RyaW5nID0gXCJcIikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7aG9zdH0vY29tbXVuaXRpZXM/cGFnZT0ke3BhZ2V9JmxpbWl0PTIwJmZpbHRlcj0ke2ZpbHRlcn1gXG4gICAgKTtcbiAgICBjb25zdCBkYXRhOiBDb21tdW5pdGllc1R5cGUgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yLCBlcnJvciwgZGF0YSwgaXNQcmV2aW91c0RhdGEgfSA9IHVzZVF1ZXJ5PFxuICAgIENvbW11bml0aWVzVHlwZSxcbiAgICBFcnJvclxuICA+KFtcImNvbW11bml0aWVzXCIsIHBhZ2UsIGZpbHRlcl0sICgpID0+IGZldGNoQ29tbXVuaXRpZXMocGFnZSwgZmlsdGVyKSwge1xuICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGFnZSgxKTtcbiAgfSwgW2ZpbHRlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tdW5pdGllcy1jb250YWluZXJcIj5cbiAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgICAgPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2RhdGEuY29tbXVuaXRpZXMubWFwKChjb21tdW5pdHkpID0+IChcbiAgICAgICAgICAgICAgPENvbW11bml0eVxuICAgICAgICAgICAgICAgIHV1aWQ9e2NvbW11bml0eS51dWlkfVxuICAgICAgICAgICAgICAgIG5hbWU9e2NvbW11bml0eS5uYW1lfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtjb21tdW5pdHkuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgY291bnQ9e2NvbW11bml0eS5wb3N0cy5sZW5ndGh9XG4gICAgICAgICAgICAgICAga2V5PXtjb21tdW5pdHkudXVpZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhhbmRsZXJzXCI+Ki99XG4gICAgICAgICAgICB7LyogIDxwIGNsYXNzTmFtZT1cImN1cnJlbnQtcGFnZVwiPkN1cnJlbnQgUGFnZToge3BhZ2V9PC9wPiovfVxuICAgICAgICAgICAgey8qICA8YnV0dG9uKi99XG4gICAgICAgICAgICB7LyogICAgb25DbGljaz17KCkgPT4geyovfVxuICAgICAgICAgICAgey8qICAgICAgc2V0UGFnZSgob2xkKSA9PiBNYXRoLm1heChvbGQgLSAxLCAwKSk7Ki99XG4gICAgICAgICAgICB7LyogICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgLTUwMCk7Ki99XG4gICAgICAgICAgICB7LyogICAgfX0qL31cbiAgICAgICAgICAgIHsvKiAgICBkaXNhYmxlZD17cGFnZSA9PT0gMX0qL31cbiAgICAgICAgICAgIHsvKiAgPiovfVxuICAgICAgICAgICAgey8qICAgIFByZXZpb3VzIFBhZ2UqL31cbiAgICAgICAgICAgIHsvKiAgPC9idXR0b24+Ki99XG4gICAgICAgICAgICB7LyogIDxidXR0b24qL31cbiAgICAgICAgICAgIHsvKiAgICBvbkNsaWNrPXsoKSA9PiB7Ki99XG4gICAgICAgICAgICB7LyogICAgICBpZiAoIWlzUHJldmlvdXNEYXRhICYmIGRhdGEuaGFzTW9yZSkgeyovfVxuICAgICAgICAgICAgey8qICAgICAgICBzZXRQYWdlKChvbGQpID0+IG9sZCArIDEpOyovfVxuICAgICAgICAgICAgey8qICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgLTUwMCk7Ki99XG4gICAgICAgICAgICB7LyogICAgICB9Ki99XG4gICAgICAgICAgICB7LyogICAgfX0qL31cbiAgICAgICAgICAgIHsvKiAgICBkaXNhYmxlZD17aXNQcmV2aW91c0RhdGEgfHwgIWRhdGEuaGFzTW9yZX0qL31cbiAgICAgICAgICAgIHsvKiAgPiovfVxuICAgICAgICAgICAgey8qICAgIE5leHQgUGFnZSovfVxuICAgICAgICAgICAgey8qICA8L2J1dHRvbj4qL31cbiAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgPFBhZ2VIYW5kbGVyc1xuICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgICAgICBzZXRQYWdlPXtzZXRQYWdlfVxuICAgICAgICAgICAgICBpc1ByZXZpb3VzRGF0YT17aXNQcmV2aW91c0RhdGF9XG4gICAgICAgICAgICAgIGhhc01vcmU9e2RhdGEuaGFzTW9yZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb21tdW5pdGllcy1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFnZS1oYW5kbGVycyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLTIwcHg7XG4gICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW11bml0aWVzO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Communities.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Communities, \"JIXqf+qRPVJG0tB4dvpPsxOSKo8=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = Communities;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Communities);\n\nvar _c;\n\n$RefreshReg$(_c, \"Communities\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tdW5pdGllcy50c3g/YjhjNSJdLCJuYW1lcyI6WyJDb21tdW5pdGllcyIsImZpbHRlciIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJmZXRjaENvbW11bml0aWVzIiwiZmV0Y2giLCJob3N0IiwicmVzIiwianNvbiIsImRhdGEiLCJ1c2VRdWVyeSIsImtlZXBQcmV2aW91c0RhdGEiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiZXJyb3IiLCJpc1ByZXZpb3VzRGF0YSIsInVzZUVmZmVjdCIsIm1lc3NhZ2UiLCJjb21tdW5pdGllcyIsIm1hcCIsImNvbW11bml0eSIsInV1aWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwb3N0cyIsImxlbmd0aCIsImhhc01vcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFNQSxJQUFNQSxXQUE0QixHQUFHLFNBQS9CQSxXQUErQixPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDM0JDLHNEQUFRLENBQVMsQ0FBVCxDQURtQjtBQUFBLE1BQzVDQyxJQUQ0QztBQUFBLE1BQ3RDQyxPQURzQzs7QUFHbkQsTUFBTUMsZ0JBQWdCO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBT0Ysa0JBQVAsMkRBQXNCLENBQXRCO0FBQXlCRixvQkFBekIsMkRBQTBDLEVBQTFDO0FBQUE7QUFBQSxxQkFDTEssS0FBSyxXQUNsQkMsbURBRGtCLCtCQUNPSixJQURQLDhCQUMrQkYsTUFEL0IsRUFEQTs7QUFBQTtBQUNqQk8saUJBRGlCO0FBQUE7QUFBQSxxQkFJYUEsR0FBRyxDQUFDQyxJQUFKLEVBSmI7O0FBQUE7QUFJakJDLGtCQUppQjtBQUFBLCtDQUtoQkEsSUFMZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJMLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFIbUQsa0JBV1NNLDREQUFRLENBR2xFLENBQUMsYUFBRCxFQUFnQlIsSUFBaEIsRUFBc0JGLE1BQXRCLENBSGtFLEVBR25DO0FBQUEsV0FBTUksZ0JBQWdCLENBQUNGLElBQUQsRUFBT0YsTUFBUCxDQUF0QjtBQUFBLEdBSG1DLEVBR0c7QUFDckVXLG9CQUFnQixFQUFFO0FBRG1ELEdBSEgsQ0FYakI7QUFBQSxNQVczQ0MsU0FYMkMsYUFXM0NBLFNBWDJDO0FBQUEsTUFXaENDLE9BWGdDLGFBV2hDQSxPQVhnQztBQUFBLE1BV3ZCQyxLQVh1QixhQVd2QkEsS0FYdUI7QUFBQSxNQVdoQkwsSUFYZ0IsYUFXaEJBLElBWGdCO0FBQUEsTUFXVk0sY0FYVSxhQVdWQSxjQVhVOztBQWtCbkRDLHlEQUFTLENBQUMsWUFBTTtBQUNkYixXQUFPLENBQUMsQ0FBRCxDQUFQO0FBQ0QsR0FGUSxFQUVOLENBQUNILE1BQUQsQ0FGTSxDQUFUO0FBSUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSx1QkFBZjtBQUFBLGdCQUNHWSxTQUFTLGdCQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUSxHQUVOQyxPQUFPLGdCQUNUO0FBQUE7QUFBQSw4QkFBYUMsS0FBSyxDQUFDRyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUyxnQkFHVCxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxtQkFDR1IsSUFBSSxDQUFDUyxXQUFMLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxTQUFEO0FBQUEsOEJBQ3BCLHFFQUFDLGtEQUFEO0FBQ0UsZ0JBQUksRUFBRUEsU0FBUyxDQUFDQyxJQURsQjtBQUVFLGdCQUFJLEVBQUVELFNBQVMsQ0FBQ0UsSUFGbEI7QUFHRSx1QkFBVyxFQUFFRixTQUFTLENBQUNHLFdBSHpCO0FBSUUsaUJBQUssRUFBRUgsU0FBUyxDQUFDSSxLQUFWLENBQWdCQztBQUp6QixhQUtPTCxTQUFTLENBQUNDLElBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRG9CO0FBQUEsU0FBckIsQ0FESCxlQWlDRSxxRUFBQyxxREFBRDtBQUNFLGNBQUksRUFBRW5CLElBRFI7QUFFRSxpQkFBTyxFQUFFQyxPQUZYO0FBR0Usd0JBQWMsRUFBRVksY0FIbEI7QUFJRSxpQkFBTyxFQUFFTixJQUFJLENBQUNpQjtBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4RUQsQ0FwR0Q7O0dBQU0zQixXO1VBV3dEVyxvRDs7O0tBWHhEWCxXO0FBc0dTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbXVuaXRpZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgQ29tbXVuaXR5IGZyb20gXCIuL0NvbW11bml0eVwiO1xuaW1wb3J0IHsgQ29tbXVuaXRpZXNUeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL2NvbW11bml0eVR5cGVcIjtcbmltcG9ydCBQYWdlSGFuZGxlcnMgZnJvbSBcIi4vUGFnZUhhbmRsZXJzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZpbHRlcjogc3RyaW5nO1xufVxuXG5jb25zdCBDb21tdW5pdGllczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZmlsdGVyIH0pID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBmZXRjaENvbW11bml0aWVzID0gYXN5bmMgKHBhZ2U6IG51bWJlciA9IDEsIGZpbHRlcjogc3RyaW5nID0gXCJcIikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7aG9zdH0vY29tbXVuaXRpZXM/cGFnZT0ke3BhZ2V9JmxpbWl0PTIwJmZpbHRlcj0ke2ZpbHRlcn1gXG4gICAgKTtcbiAgICBjb25zdCBkYXRhOiBDb21tdW5pdGllc1R5cGUgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yLCBlcnJvciwgZGF0YSwgaXNQcmV2aW91c0RhdGEgfSA9IHVzZVF1ZXJ5PFxuICAgIENvbW11bml0aWVzVHlwZSxcbiAgICBFcnJvclxuICA+KFtcImNvbW11bml0aWVzXCIsIHBhZ2UsIGZpbHRlcl0sICgpID0+IGZldGNoQ29tbXVuaXRpZXMocGFnZSwgZmlsdGVyKSwge1xuICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGFnZSgxKTtcbiAgfSwgW2ZpbHRlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tdW5pdGllcy1jb250YWluZXJcIj5cbiAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgICAgPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2RhdGEuY29tbXVuaXRpZXMubWFwKChjb21tdW5pdHkpID0+IChcbiAgICAgICAgICAgICAgPENvbW11bml0eVxuICAgICAgICAgICAgICAgIHV1aWQ9e2NvbW11bml0eS51dWlkfVxuICAgICAgICAgICAgICAgIG5hbWU9e2NvbW11bml0eS5uYW1lfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtjb21tdW5pdHkuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgY291bnQ9e2NvbW11bml0eS5wb3N0cy5sZW5ndGh9XG4gICAgICAgICAgICAgICAga2V5PXtjb21tdW5pdHkudXVpZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhhbmRsZXJzXCI+Ki99XG4gICAgICAgICAgICB7LyogIDxwIGNsYXNzTmFtZT1cImN1cnJlbnQtcGFnZVwiPkN1cnJlbnQgUGFnZToge3BhZ2V9PC9wPiovfVxuICAgICAgICAgICAgey8qICA8YnV0dG9uKi99XG4gICAgICAgICAgICB7LyogICAgb25DbGljaz17KCkgPT4geyovfVxuICAgICAgICAgICAgey8qICAgICAgc2V0UGFnZSgob2xkKSA9PiBNYXRoLm1heChvbGQgLSAxLCAwKSk7Ki99XG4gICAgICAgICAgICB7LyogICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgLTUwMCk7Ki99XG4gICAgICAgICAgICB7LyogICAgfX0qL31cbiAgICAgICAgICAgIHsvKiAgICBkaXNhYmxlZD17cGFnZSA9PT0gMX0qL31cbiAgICAgICAgICAgIHsvKiAgPiovfVxuICAgICAgICAgICAgey8qICAgIFByZXZpb3VzIFBhZ2UqL31cbiAgICAgICAgICAgIHsvKiAgPC9idXR0b24+Ki99XG4gICAgICAgICAgICB7LyogIDxidXR0b24qL31cbiAgICAgICAgICAgIHsvKiAgICBvbkNsaWNrPXsoKSA9PiB7Ki99XG4gICAgICAgICAgICB7LyogICAgICBpZiAoIWlzUHJldmlvdXNEYXRhICYmIGRhdGEuaGFzTW9yZSkgeyovfVxuICAgICAgICAgICAgey8qICAgICAgICBzZXRQYWdlKChvbGQpID0+IG9sZCArIDEpOyovfVxuICAgICAgICAgICAgey8qICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgLTUwMCk7Ki99XG4gICAgICAgICAgICB7LyogICAgICB9Ki99XG4gICAgICAgICAgICB7LyogICAgfX0qL31cbiAgICAgICAgICAgIHsvKiAgICBkaXNhYmxlZD17aXNQcmV2aW91c0RhdGEgfHwgIWRhdGEuaGFzTW9yZX0qL31cbiAgICAgICAgICAgIHsvKiAgPiovfVxuICAgICAgICAgICAgey8qICAgIE5leHQgUGFnZSovfVxuICAgICAgICAgICAgey8qICA8L2J1dHRvbj4qL31cbiAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgPFBhZ2VIYW5kbGVyc1xuICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgICAgICBzZXRQYWdlPXtzZXRQYWdlfVxuICAgICAgICAgICAgICBpc1ByZXZpb3VzRGF0YT17aXNQcmV2aW91c0RhdGF9XG4gICAgICAgICAgICAgIGhhc01vcmU9e2RhdGEuaGFzTW9yZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb21tdW5pdGllcy1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFnZS1oYW5kbGVycyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLTIwcHg7XG4gICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW11bml0aWVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Communities.tsx\n");

/***/ })

})