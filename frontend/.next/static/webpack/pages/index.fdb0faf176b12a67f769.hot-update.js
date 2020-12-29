webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Communities.tsx":
/*!************************************!*\
  !*** ./components/Communities.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _Community__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Community */ \"./components/Community.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Communities.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar Communities = function Communities() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchCommunities = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var page,\n          res,\n          data,\n          _args = arguments;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;\n              _context.next = 3;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/communities?page=\").concat(page, \"&limit=5\"));\n\n            case 3:\n              res = _context.sent;\n              _context.next = 6;\n              return res.json();\n\n            case 6:\n              data = _context.sent;\n              data.communities.forEach(function (community) {\n                fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/communities/\").concat(community.uuid, \"/posts/count\")).then(function (res2) {\n                  return res2.json();\n                }).then(function (data2) {\n                  community = _objectSpread(_objectSpread({}, community), {}, {\n                    count: data2.count\n                  });\n                  console.log(community);\n                });\n              });\n              return _context.abrupt(\"return\", data);\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchCommunities() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])([\"communities\", page], function () {\n    return fetchCommunities(page);\n  }, {\n    keepPreviousData: true\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isFetching = _useQuery.isFetching,\n      isPreviousData = _useQuery.isPreviousData;\n\n  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {\n    console.log(data);\n  }, [data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      className: \"communities-container\",\n      children: [isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        children: [\"Error: \", error.message]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n        children: [data.communities.map(function (community) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_Community__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            uuid: community.uuid,\n            name: community.name,\n            description: community.description\n          }, community.uuid, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 15\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"span\", {\n          children: [\"Current Page: \", page]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return setPage(function (old) {\n              return Math.max(old - 1, 0);\n            });\n          },\n          disabled: page === 1,\n          children: \"Previous Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            if (!isPreviousData && data.hasMore) {\n              setPage(function (old) {\n                return old + 1;\n              });\n            }\n          },\n          disabled: isPreviousData || !data.hasMore,\n          children: \"Next Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 11\n      }, _this), isFetching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"span\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 23\n      }, _this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Communities, \"DXHwwwTGbC4SB33zQr67Gl/jibQ=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = Communities;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Communities);\n\nvar _c;\n\n$RefreshReg$(_c, \"Communities\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tdW5pdGllcy50c3g/YjhjNSJdLCJuYW1lcyI6WyJDb21tdW5pdGllcyIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJmZXRjaENvbW11bml0aWVzIiwiZmV0Y2giLCJob3N0IiwicmVzIiwianNvbiIsImRhdGEiLCJjb21tdW5pdGllcyIsImZvckVhY2giLCJjb21tdW5pdHkiLCJ1dWlkIiwidGhlbiIsInJlczIiLCJkYXRhMiIsImNvdW50IiwiY29uc29sZSIsImxvZyIsInVzZVF1ZXJ5Iiwia2VlcFByZXZpb3VzRGF0YSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJlcnJvciIsImlzRmV0Y2hpbmciLCJpc1ByZXZpb3VzRGF0YSIsIlJlYWN0IiwidXNlRWZmZWN0IiwibWVzc2FnZSIsIm1hcCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm9sZCIsIk1hdGgiLCJtYXgiLCJoYXNNb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBZ0JBLElBQU1BLFdBQXFCLEdBQUcsU0FBeEJBLFdBQXdCLEdBQU07QUFBQTs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBUyxDQUFULENBREU7QUFBQSxNQUMzQkMsSUFEMkI7QUFBQSxNQUNyQkMsT0FEcUI7O0FBR2xDLE1BQU1DLGdCQUFnQjtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPRixrQkFBUCwyREFBc0IsQ0FBdEI7QUFBQTtBQUFBLHFCQUNMRyxLQUFLLFdBQUlDLG1EQUFKLCtCQUE2QkosSUFBN0IsY0FEQTs7QUFBQTtBQUNqQkssaUJBRGlCO0FBQUE7QUFBQSxxQkFFSUEsR0FBRyxDQUFDQyxJQUFKLEVBRko7O0FBQUE7QUFFbkJDLGtCQUZtQjtBQUl2QkEsa0JBQUksQ0FBQ0MsV0FBTCxDQUFpQkMsT0FBakIsQ0FBeUIsVUFBQ0MsU0FB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SUFBSSxDQUFDakIsSUFBSSxDQUFDMkIsT0FOcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLEVBa0NHWCxVQUFVLGdCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsR0FBNkIsSUFsQzFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdDRCxDQTlFRDs7R0FBTXpCLFc7VUEwQkFvQixvRDs7O0tBMUJBcEIsVztBQWdGU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW11bml0aWVzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCBDb21tdW5pdHkgZnJvbSBcIi4vQ29tbXVuaXR5XCI7XG5cbnR5cGUgQ29tbXVuaXR5VHlwZSA9IHtcbiAgdXVpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgY291bnQ6IG51bWJlcjtcbn07XG5cbnR5cGUgRGF0YVR5cGUgPSB7XG4gIGNvbW11bml0aWVzOiBDb21tdW5pdHlUeXBlW107XG4gIGhhc01vcmU6IGJvb2xlYW47XG59O1xuXG5jb25zdCBDb21tdW5pdGllczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG5cbiAgY29uc3QgZmV0Y2hDb21tdW5pdGllcyA9IGFzeW5jIChwYWdlOiBudW1iZXIgPSAxKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7aG9zdH0vY29tbXVuaXRpZXM/cGFnZT0ke3BhZ2V9JmxpbWl0PTVgKTtcbiAgICBsZXQgZGF0YTogRGF0YVR5cGUgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgZGF0YS5jb21tdW5pdGllcy5mb3JFYWNoKChjb21tdW5pdHkpID0+IHtcbiAgICAgIGZldGNoKGAke2hvc3R9L2NvbW11bml0aWVzLyR7Y29tbXVuaXR5LnV1aWR9L3Bvc3RzL2NvdW50YClcbiAgICAgICAgLnRoZW4oKHJlczIpID0+IHJlczIuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YTIpID0+IHtcbiAgICAgICAgICBjb21tdW5pdHkgPSB7IC4uLmNvbW11bml0eSwgY291bnQ6IGRhdGEyLmNvdW50IH07XG4gICAgICAgICAgY29uc29sZS5sb2coY29tbXVuaXR5KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBjb25zdCB7XG4gICAgaXNMb2FkaW5nLFxuICAgIGlzRXJyb3IsXG4gICAgZXJyb3IsXG4gICAgZGF0YSxcbiAgICBpc0ZldGNoaW5nLFxuICAgIGlzUHJldmlvdXNEYXRhLFxuICB9ID0gdXNlUXVlcnk8RGF0YVR5cGUsIEVycm9yPihcbiAgICBbXCJjb21tdW5pdGllc1wiLCBwYWdlXSxcbiAgICAoKSA9PiBmZXRjaENvbW11bml0aWVzKHBhZ2UpLFxuICAgIHtcbiAgICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gICAgfVxuICApO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0aWVzLWNvbnRhaW5lclwiPlxuICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApIDogaXNFcnJvciA/IChcbiAgICAgICAgICA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7ZGF0YS5jb21tdW5pdGllcy5tYXAoKGNvbW11bml0eSkgPT4gKFxuICAgICAgICAgICAgICA8Q29tbXVuaXR5XG4gICAgICAgICAgICAgICAgdXVpZD17Y29tbXVuaXR5LnV1aWR9XG4gICAgICAgICAgICAgICAgbmFtZT17Y29tbXVuaXR5Lm5hbWV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2NvbW11bml0eS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBrZXk9e2NvbW11bml0eS51dWlkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8c3Bhbj5DdXJyZW50IFBhZ2U6IHtwYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZSgob2xkKSA9PiBNYXRoLm1heChvbGQgLSAxLCAwKSl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmV2aW91cyBQYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXNQcmV2aW91c0RhdGEgJiYgZGF0YS5oYXNNb3JlKSB7XG4gICAgICAgICAgICAgICAgICBzZXRQYWdlKChvbGQpID0+IG9sZCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJldmlvdXNEYXRhIHx8ICFkYXRhLmhhc01vcmV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAge2lzRmV0Y2hpbmcgPyA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbXVuaXRpZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Communities.tsx\n");

/***/ })

})