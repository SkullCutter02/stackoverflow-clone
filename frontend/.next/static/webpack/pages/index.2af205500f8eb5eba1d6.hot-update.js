webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Communities.tsx":
/*!************************************!*\
  !*** ./components/Communities.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Communities.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Communities = function Communities() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchCommunities = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var page,\n          res,\n          _args = arguments;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;\n              _context.next = 3;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_5__[\"default\"], \"/communities?page=\").concat(page, \"&limit=5\"));\n\n            case 3:\n              res = _context.sent;\n              _context.next = 6;\n              return res.json();\n\n            case 6:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchCommunities() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])([\"communities\", page], function () {\n    return fetchCommunities(page);\n  }, {\n    keepPreviousData: true\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isFetching = _useQuery.isFetching,\n      isPreviousData = _useQuery.isPreviousData; // // testing\n  // React.useEffect(() => {\n  //   console.log(data);\n  // }, [data]);\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"communities-container\",\n      children: [isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        children: [\"Error: \", error.message]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {\n        children: [data.map(function (community) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"community-container\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              children: community.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              children: community.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 17\n            }, _this)]\n          }, community.uuid, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 15\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          children: [\"Current Page: \", page]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return setPage(function (old) {\n              return Math.max(old - 1, 0);\n            });\n          },\n          disabled: page === 1,\n          children: \"Previous Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            if (!isPreviousData && data.hasMore) {\n              setPage(function (old) {\n                return old + 1;\n              });\n            }\n          },\n          disabled: isPreviousData || !data.hasMore,\n          children: \"Next Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 11\n      }, _this), isFetching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 23\n      }, _this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Communities, \"ROZZXDCpSyTccMsQYEDldIx7+gA=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c = Communities;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Communities);\n\nvar _c;\n\n$RefreshReg$(_c, \"Communities\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tdW5pdGllcy50c3g/YjhjNSJdLCJuYW1lcyI6WyJDb21tdW5pdGllcyIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJmZXRjaENvbW11bml0aWVzIiwiZmV0Y2giLCJob3N0IiwicmVzIiwianNvbiIsInVzZVF1ZXJ5Iiwia2VlcFByZXZpb3VzRGF0YSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJlcnJvciIsImRhdGEiLCJpc0ZldGNoaW5nIiwiaXNQcmV2aW91c0RhdGEiLCJtZXNzYWdlIiwibWFwIiwiY29tbXVuaXR5IiwibmFtZSIsImRlc2NyaXB0aW9uIiwidXVpZCIsIm9sZCIsIk1hdGgiLCJtYXgiLCJoYXNNb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBV0EsSUFBTUEsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsR0FBTTtBQUFBOztBQUFBLGtCQUNWQyxzREFBUSxDQUFTLENBQVQsQ0FERTtBQUFBLE1BQzNCQyxJQUQyQjtBQUFBLE1BQ3JCQyxPQURxQjs7QUFHbEMsTUFBTUMsZ0JBQWdCO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPRixrQkFBUCwyREFBc0IsQ0FBdEI7QUFBQTtBQUFBLHFCQUNMRyxLQUFLLFdBQUlDLG1EQUFKLCtCQUE2QkosSUFBN0IsY0FEQTs7QUFBQTtBQUNqQkssaUJBRGlCO0FBQUE7QUFBQSxxQkFFVkEsR0FBRyxDQUFDQyxJQUFKLEVBRlU7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFoQkosZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEtBQXRCOztBQUhrQyxrQkFlOUJLLDREQUFRLENBQ1YsQ0FBQyxhQUFELEVBQWdCUCxJQUFoQixDQURVLEVBRVY7QUFBQSxXQUFNRSxnQkFBZ0IsQ0FBQ0YsSUFBRCxDQUF0QjtBQUFBLEdBRlUsRUFHVjtBQUNFUSxvQkFBZ0IsRUFBRTtBQURwQixHQUhVLENBZnNCO0FBQUEsTUFTaENDLFNBVGdDLGFBU2hDQSxTQVRnQztBQUFBLE1BVWhDQyxPQVZnQyxhQVVoQ0EsT0FWZ0M7QUFBQSxNQVdoQ0MsS0FYZ0MsYUFXaENBLEtBWGdDO0FBQUEsTUFZaENDLElBWmdDLGFBWWhDQSxJQVpnQztBQUFBLE1BYWhDQyxVQWJnQyxhQWFoQ0EsVUFiZ0M7QUFBQSxNQWNoQ0MsY0FkZ0MsYUFjaENBLGNBZGdDLEVBdUJsQztBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSxpQkFDR0wsU0FBUyxnQkFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRLEdBRU5DLE9BQU8sZ0JBQ1Q7QUFBQSw4QkFBYUMsS0FBSyxDQUFDSSxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUyxnQkFHVCxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxtQkFDR0gsSUFBSSxDQUFDSSxHQUFMLENBQVMsVUFBQ0MsU0FBRDtBQUFBLDhCQUNSO0FBQUsscUJBQVMsRUFBQyxxQkFBZjtBQUFBLG9DQUNFO0FBQUEsd0JBQUlBLFNBQVMsQ0FBQ0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQSx3QkFBSUQsU0FBUyxDQUFDRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQSxhQUEwQ0YsU0FBUyxDQUFDRyxJQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVCxDQURILGVBT0U7QUFBQSx1Q0FBcUJwQixJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFRRTtBQUNFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUMsT0FBTyxDQUFDLFVBQUNvQixHQUFEO0FBQUEscUJBQVNDLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixHQUFHLEdBQUcsQ0FBZixFQUFrQixDQUFsQixDQUFUO0FBQUEsYUFBRCxDQUFiO0FBQUEsV0FEWDtBQUVFLGtCQUFRLEVBQUVyQixJQUFJLEtBQUssQ0FGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFjRTtBQUNFLGlCQUFPLEVBQUUsbUJBQU07QUFDYixnQkFBSSxDQUFDYyxjQUFELElBQW1CRixJQUFJLENBQUNZLE9BQTVCLEVBQXFDO0FBQ25DdkIscUJBQU8sQ0FBQyxVQUFDb0IsR0FBRDtBQUFBLHVCQUFTQSxHQUFHLEdBQUcsQ0FBZjtBQUFBLGVBQUQsQ0FBUDtBQUNEO0FBQ0YsV0FMSDtBQU1FLGtCQUFRLEVBQUVQLGNBQWMsSUFBSSxDQUFDRixJQUFJLENBQUNZLE9BTnBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLEVBZ0NHWCxVQUFVLGdCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsR0FBNkIsSUFoQzFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNDRCxDQWxFRDs7R0FBTWYsVztVQWVBUyxvRDs7O0tBZkFULFc7QUFvRVNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tdW5pdGllcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5cbnR5cGUgQ29tbXVuaXR5VHlwZSA9IHtcbiAgdXVpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgaGFzTW9yZTogYm9vbGVhbjtcbn07XG5cbmNvbnN0IENvbW11bml0aWVzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBmZXRjaENvbW11bml0aWVzID0gYXN5bmMgKHBhZ2U6IG51bWJlciA9IDEpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtob3N0fS9jb21tdW5pdGllcz9wYWdlPSR7cGFnZX0mbGltaXQ9NWApO1xuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9O1xuXG4gIGNvbnN0IHtcbiAgICBpc0xvYWRpbmcsXG4gICAgaXNFcnJvcixcbiAgICBlcnJvcixcbiAgICBkYXRhLFxuICAgIGlzRmV0Y2hpbmcsXG4gICAgaXNQcmV2aW91c0RhdGEsXG4gIH0gPSB1c2VRdWVyeTxDb21tdW5pdHlUeXBlW10sIEVycm9yPihcbiAgICBbXCJjb21tdW5pdGllc1wiLCBwYWdlXSxcbiAgICAoKSA9PiBmZXRjaENvbW11bml0aWVzKHBhZ2UpLFxuICAgIHtcbiAgICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gICAgfVxuICApO1xuXG4gIC8vIC8vIHRlc3RpbmdcbiAgLy8gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXRpZXMtY29udGFpbmVyXCI+XG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICkgOiBpc0Vycm9yID8gKFxuICAgICAgICAgIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoY29tbXVuaXR5KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXR5LWNvbnRhaW5lclwiIGtleT17Y29tbXVuaXR5LnV1aWR9PlxuICAgICAgICAgICAgICAgIDxwPntjb21tdW5pdHkubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e2NvbW11bml0eS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8c3Bhbj5DdXJyZW50IFBhZ2U6IHtwYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZSgob2xkKSA9PiBNYXRoLm1heChvbGQgLSAxLCAwKSl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmV2aW91cyBQYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXNQcmV2aW91c0RhdGEgJiYgZGF0YS5oYXNNb3JlKSB7XG4gICAgICAgICAgICAgICAgICBzZXRQYWdlKChvbGQpID0+IG9sZCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJldmlvdXNEYXRhIHx8ICFkYXRhLmhhc01vcmV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAge2lzRmV0Y2hpbmcgPyA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbXVuaXRpZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Communities.tsx\n");

/***/ })

})