webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Communities.tsx":
/*!************************************!*\
  !*** ./components/Communities.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _Community__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Community */ \"./components/Community.tsx\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Communities.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Communities = function Communities() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchCommunities = function fetchCommunities() {\n    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \"/communities?page=\").concat(page, \"&limit=5\")).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      for (var community in data) {}\n    });\n  };\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])([\"communities\", page], function () {\n    return fetchCommunities(page);\n  }, {\n    keepPreviousData: true\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isFetching = _useQuery.isFetching,\n      isPreviousData = _useQuery.isPreviousData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"communities-container\",\n      children: [isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 11\n      }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"Error: \", error.message]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n        children: [data.communities.map(function (community) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Community__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            uuid: community.uuid,\n            name: community.name,\n            description: community.description\n          }, community.uuid, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 15\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [\"Current Page: \", page]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return setPage(function (old) {\n              return Math.max(old - 1, 0);\n            });\n          },\n          disabled: page === 1,\n          children: \"Previous Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            if (!isPreviousData && data.hasMore) {\n              setPage(function (old) {\n                return old + 1;\n              });\n            }\n          },\n          disabled: isPreviousData || !data.hasMore,\n          children: \"Next Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }, _this), isFetching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 23\n      }, _this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Communities, \"ROZZXDCpSyTccMsQYEDldIx7+gA=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = Communities;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Communities);\n\nvar _c;\n\n$RefreshReg$(_c, \"Communities\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tdW5pdGllcy50c3g/YjhjNSJdLCJuYW1lcyI6WyJDb21tdW5pdGllcyIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJmZXRjaENvbW11bml0aWVzIiwiZmV0Y2giLCJob3N0IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29tbXVuaXR5IiwidXNlUXVlcnkiLCJrZWVwUHJldmlvdXNEYXRhIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsImVycm9yIiwiaXNGZXRjaGluZyIsImlzUHJldmlvdXNEYXRhIiwibWVzc2FnZSIsImNvbW11bml0aWVzIiwibWFwIiwidXVpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm9sZCIsIk1hdGgiLCJtYXgiLCJoYXNNb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQWVBLElBQU1BLFdBQXFCLEdBQUcsU0FBeEJBLFdBQXdCLEdBQU07QUFBQTs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBUyxDQUFULENBREU7QUFBQSxNQUMzQkMsSUFEMkI7QUFBQSxNQUNyQkMsT0FEcUI7O0FBR2xDLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBc0I7QUFBQSxRQUFyQkYsSUFBcUIsdUVBQU4sQ0FBTTtBQUM3Q0csU0FBSyxXQUFJQyxtREFBSiwrQkFBNkJKLElBQTdCLGNBQUwsQ0FDR0ssSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQsRUFBVTtBQUNkLFdBQUssSUFBTUMsU0FBWCxJQUF3QkQsSUFBeEIsRUFBOEIsQ0FDN0I7QUFDRixLQUxIO0FBTUQsR0FQRDs7QUFIa0Msa0JBbUI5QkUsNERBQVEsQ0FDVixDQUFDLGFBQUQsRUFBZ0JWLElBQWhCLENBRFUsRUFFVjtBQUFBLFdBQU1FLGdCQUFnQixDQUFDRixJQUFELENBQXRCO0FBQUEsR0FGVSxFQUdWO0FBQ0VXLG9CQUFnQixFQUFFO0FBRHBCLEdBSFUsQ0FuQnNCO0FBQUEsTUFhaENDLFNBYmdDLGFBYWhDQSxTQWJnQztBQUFBLE1BY2hDQyxPQWRnQyxhQWNoQ0EsT0FkZ0M7QUFBQSxNQWVoQ0MsS0FmZ0MsYUFlaENBLEtBZmdDO0FBQUEsTUFnQmhDTixJQWhCZ0MsYUFnQmhDQSxJQWhCZ0M7QUFBQSxNQWlCaENPLFVBakJnQyxhQWlCaENBLFVBakJnQztBQUFBLE1Ba0JoQ0MsY0FsQmdDLGFBa0JoQ0EsY0FsQmdDOztBQTJCbEMsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSxpQkFDR0osU0FBUyxnQkFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRLEdBRU5DLE9BQU8sZ0JBQ1Q7QUFBQSw4QkFBYUMsS0FBSyxDQUFDRyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUyxnQkFHVCxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxtQkFDR1QsSUFBSSxDQUFDVSxXQUFMLENBQWlCQyxHQUFqQixDQUFxQixVQUFDVixTQUFEO0FBQUEsOEJBQ3BCLHFFQUFDLGtEQUFEO0FBQ0UsZ0JBQUksRUFBRUEsU0FBUyxDQUFDVyxJQURsQjtBQUVFLGdCQUFJLEVBQUVYLFNBQVMsQ0FBQ1ksSUFGbEI7QUFHRSx1QkFBVyxFQUFFWixTQUFTLENBQUNhO0FBSHpCLGFBSU9iLFNBQVMsQ0FBQ1csSUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEb0I7QUFBQSxTQUFyQixDQURILGVBU0U7QUFBQSx1Q0FBcUJwQixJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFVRTtBQUNFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUMsT0FBTyxDQUFDLFVBQUNzQixHQUFEO0FBQUEscUJBQVNDLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixHQUFHLEdBQUcsQ0FBZixFQUFrQixDQUFsQixDQUFUO0FBQUEsYUFBRCxDQUFiO0FBQUEsV0FEWDtBQUVFLGtCQUFRLEVBQUV2QixJQUFJLEtBQUssQ0FGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsZUFnQkU7QUFDRSxpQkFBTyxFQUFFLG1CQUFNO0FBQ2IsZ0JBQUksQ0FBQ2dCLGNBQUQsSUFBbUJSLElBQUksQ0FBQ2tCLE9BQTVCLEVBQXFDO0FBQ25DekIscUJBQU8sQ0FBQyxVQUFDc0IsR0FBRDtBQUFBLHVCQUFTQSxHQUFHLEdBQUcsQ0FBZjtBQUFBLGVBQUQsQ0FBUDtBQUNEO0FBQ0YsV0FMSDtBQU1FLGtCQUFRLEVBQUVQLGNBQWMsSUFBSSxDQUFDUixJQUFJLENBQUNrQixPQU5wQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosRUFrQ0dYLFVBQVUsZ0JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUE2QixJQWxDMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0NELENBbkVEOztHQUFNakIsVztVQW1CQVksb0Q7OztLQW5CQVosVztBQXFFU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW11bml0aWVzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCBDb21tdW5pdHkgZnJvbSBcIi4vQ29tbXVuaXR5XCI7XG5cbnR5cGUgQ29tbXVuaXR5VHlwZSA9IHtcbiAgdXVpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbn07XG5cbnR5cGUgRGF0YVR5cGUgPSB7XG4gIGNvbW11bml0aWVzOiBDb21tdW5pdHlUeXBlW107XG4gIGhhc01vcmU6IGJvb2xlYW47XG59O1xuXG5jb25zdCBDb21tdW5pdGllczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG5cbiAgY29uc3QgZmV0Y2hDb21tdW5pdGllcyA9IChwYWdlOiBudW1iZXIgPSAxKSA9PiB7XG4gICAgZmV0Y2goYCR7aG9zdH0vY29tbXVuaXRpZXM/cGFnZT0ke3BhZ2V9JmxpbWl0PTVgKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgY29tbXVuaXR5IGluIGRhdGEpIHtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qge1xuICAgIGlzTG9hZGluZyxcbiAgICBpc0Vycm9yLFxuICAgIGVycm9yLFxuICAgIGRhdGEsXG4gICAgaXNGZXRjaGluZyxcbiAgICBpc1ByZXZpb3VzRGF0YSxcbiAgfSA9IHVzZVF1ZXJ5PERhdGFUeXBlLCBFcnJvcj4oXG4gICAgW1wiY29tbXVuaXRpZXNcIiwgcGFnZV0sXG4gICAgKCkgPT4gZmV0Y2hDb21tdW5pdGllcyhwYWdlKSxcbiAgICB7XG4gICAgICBrZWVwUHJldmlvdXNEYXRhOiB0cnVlLFxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXRpZXMtY29udGFpbmVyXCI+XG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICkgOiBpc0Vycm9yID8gKFxuICAgICAgICAgIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtkYXRhLmNvbW11bml0aWVzLm1hcCgoY29tbXVuaXR5KSA9PiAoXG4gICAgICAgICAgICAgIDxDb21tdW5pdHlcbiAgICAgICAgICAgICAgICB1dWlkPXtjb21tdW5pdHkudXVpZH1cbiAgICAgICAgICAgICAgICBuYW1lPXtjb21tdW5pdHkubmFtZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17Y29tbXVuaXR5LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGtleT17Y29tbXVuaXR5LnV1aWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxzcGFuPkN1cnJlbnQgUGFnZToge3BhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChvbGQpID0+IE1hdGgubWF4KG9sZCAtIDEsIDApKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ByZXZpb3VzRGF0YSAmJiBkYXRhLmhhc01vcmUpIHtcbiAgICAgICAgICAgICAgICAgIHNldFBhZ2UoKG9sZCkgPT4gb2xkICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNQcmV2aW91c0RhdGEgfHwgIWRhdGEuaGFzTW9yZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmV4dCBQYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB7aXNGZXRjaGluZyA/IDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tdW5pdGllcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Communities.tsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false

})