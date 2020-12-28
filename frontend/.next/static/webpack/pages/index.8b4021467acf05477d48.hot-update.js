webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Communities.tsx":
/*!************************************!*\
  !*** ./components/Communities.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Communities.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Communities = function Communities() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchCommunities = function fetchCommunities() {\n    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \"/communities?page=\").concat(page, \"&limit=5\")).then(function (res) {\n      return res.json();\n    });\n  };\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])([\"communities\", page], function () {\n    return fetchCommunities(page);\n  }, {\n    keepPreviousData: true\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isFetching = _useQuery.isFetching,\n      isPreviousData = _useQuery.isPreviousData; // testing\n\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    console.log(data);\n  }, [data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"communities-container\",\n      children: [isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"Error: \", error.message]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n        children: [data.map(function (community) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"community-container\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: community.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: community.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 17\n            }, _this)]\n          }, community.uuid, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [\"Current Page: \", page]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return setPage(function (old) {\n              return Math.max(old - 1, 0);\n            });\n          },\n          disabled: page === 1,\n          children: \"Previous Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            if (!isPreviousData && data.hasMore()) {\n              setPage(function (old) {\n                return old + 1;\n              });\n            }\n          },\n          disabled: isPreviousData || !data.hasMore(),\n          children: \"Next Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }, _this), isFetching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 23\n      }, _this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Communities, \"DXHwwwTGbC4SB33zQr67Gl/jibQ=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = Communities;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Communities);\n\nvar _c;\n\n$RefreshReg$(_c, \"Communities\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tdW5pdGllcy50c3g/YjhjNSJdLCJuYW1lcyI6WyJDb21tdW5pdGllcyIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJmZXRjaENvbW11bml0aWVzIiwiZmV0Y2giLCJob3N0IiwidGhlbiIsInJlcyIsImpzb24iLCJ1c2VRdWVyeSIsImtlZXBQcmV2aW91c0RhdGEiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiZXJyb3IiLCJkYXRhIiwiaXNGZXRjaGluZyIsImlzUHJldmlvdXNEYXRhIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIm1hcCIsImNvbW11bml0eSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInV1aWQiLCJvbGQiLCJNYXRoIiwibWF4IiwiaGFzTW9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFVQSxJQUFNQSxXQUFxQixHQUFHLFNBQXhCQSxXQUF3QixHQUFNO0FBQUE7O0FBQUEsa0JBQ1ZDLHNEQUFRLENBQVMsQ0FBVCxDQURFO0FBQUEsTUFDM0JDLElBRDJCO0FBQUEsTUFDckJDLE9BRHFCOztBQUdsQyxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsUUFBQ0YsSUFBRCx1RUFBZ0IsQ0FBaEI7QUFBQSxXQUN2QkcsS0FBSyxXQUFJQyxtREFBSiwrQkFBNkJKLElBQTdCLGNBQUwsQ0FBa0RLLElBQWxELENBQXVELFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBQXZELENBRHVCO0FBQUEsR0FBekI7O0FBSGtDLGtCQWE5QkMsNERBQVEsQ0FDVixDQUFDLGFBQUQsRUFBZ0JSLElBQWhCLENBRFUsRUFFVjtBQUFBLFdBQU1FLGdCQUFnQixDQUFDRixJQUFELENBQXRCO0FBQUEsR0FGVSxFQUdWO0FBQ0VTLG9CQUFnQixFQUFFO0FBRHBCLEdBSFUsQ0Fic0I7QUFBQSxNQU9oQ0MsU0FQZ0MsYUFPaENBLFNBUGdDO0FBQUEsTUFRaENDLE9BUmdDLGFBUWhDQSxPQVJnQztBQUFBLE1BU2hDQyxLQVRnQyxhQVNoQ0EsS0FUZ0M7QUFBQSxNQVVoQ0MsSUFWZ0MsYUFVaENBLElBVmdDO0FBQUEsTUFXaENDLFVBWGdDLGFBV2hDQSxVQVhnQztBQUFBLE1BWWhDQyxjQVpnQyxhQVloQ0EsY0FaZ0MsRUFxQmxDOzs7QUFDQUMsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWjtBQUNELEdBRkQsRUFFRyxDQUFDQSxJQUFELENBRkg7QUFJQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUFBLGlCQUNHSCxTQUFTLGdCQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFEsR0FFTkMsT0FBTyxnQkFDVDtBQUFBLDhCQUFhQyxLQUFLLENBQUNRLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURTLGdCQUdULHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLG1CQUNHUCxJQUFJLENBQUNRLEdBQUwsQ0FBUyxVQUFDQyxTQUFEO0FBQUEsOEJBQ1I7QUFBSyxxQkFBUyxFQUFDLHFCQUFmO0FBQUEsb0NBQ0U7QUFBQSx3QkFBSUEsU0FBUyxDQUFDQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLHdCQUFJRCxTQUFTLENBQUNFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBLGFBQTBDRixTQUFTLENBQUNHLElBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFULENBREgsZUFPRTtBQUFBLHVDQUFxQnpCLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVFFO0FBQ0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNQyxPQUFPLENBQUMsVUFBQ3lCLEdBQUQ7QUFBQSxxQkFBU0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQUcsR0FBRyxDQUFmLEVBQWtCLENBQWxCLENBQVQ7QUFBQSxhQUFELENBQWI7QUFBQSxXQURYO0FBRUUsa0JBQVEsRUFBRTFCLElBQUksS0FBSyxDQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixlQWNFO0FBQ0UsaUJBQU8sRUFBRSxtQkFBTTtBQUNiLGdCQUFJLENBQUNlLGNBQUQsSUFBbUJGLElBQUksQ0FBQ2dCLE9BQUwsRUFBdkIsRUFBdUM7QUFDckM1QixxQkFBTyxDQUFDLFVBQUN5QixHQUFEO0FBQUEsdUJBQVNBLEdBQUcsR0FBRyxDQUFmO0FBQUEsZUFBRCxDQUFQO0FBQ0Q7QUFDRixXQUxIO0FBTUUsa0JBQVEsRUFBRVgsY0FBYyxJQUFJLENBQUNGLElBQUksQ0FBQ2dCLE9BQUwsRUFOL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosRUFnQ0dmLFVBQVUsZ0JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUE2QixJQWhDMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0NELENBaEVEOztHQUFNaEIsVztVQWFBVSxvRDs7O0tBYkFWLFc7QUFrRVNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tdW5pdGllcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5cbnR5cGUgQ29tbXVuaXR5VHlwZSA9IHtcbiAgdXVpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbn07XG5cbmNvbnN0IENvbW11bml0aWVzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBmZXRjaENvbW11bml0aWVzID0gKHBhZ2U6IG51bWJlciA9IDEpID0+XG4gICAgZmV0Y2goYCR7aG9zdH0vY29tbXVuaXRpZXM/cGFnZT0ke3BhZ2V9JmxpbWl0PTVgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIGNvbnN0IHtcbiAgICBpc0xvYWRpbmcsXG4gICAgaXNFcnJvcixcbiAgICBlcnJvcixcbiAgICBkYXRhLFxuICAgIGlzRmV0Y2hpbmcsXG4gICAgaXNQcmV2aW91c0RhdGEsXG4gIH0gPSB1c2VRdWVyeTxDb21tdW5pdHlUeXBlW10sIEVycm9yPihcbiAgICBbXCJjb21tdW5pdGllc1wiLCBwYWdlXSxcbiAgICAoKSA9PiBmZXRjaENvbW11bml0aWVzKHBhZ2UpLFxuICAgIHtcbiAgICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gICAgfVxuICApO1xuXG4gIC8vIHRlc3RpbmdcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXRpZXMtY29udGFpbmVyXCI+XG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICkgOiBpc0Vycm9yID8gKFxuICAgICAgICAgIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoY29tbXVuaXR5KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXR5LWNvbnRhaW5lclwiIGtleT17Y29tbXVuaXR5LnV1aWR9PlxuICAgICAgICAgICAgICAgIDxwPntjb21tdW5pdHkubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e2NvbW11bml0eS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8c3Bhbj5DdXJyZW50IFBhZ2U6IHtwYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZSgob2xkKSA9PiBNYXRoLm1heChvbGQgLSAxLCAwKSl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmV2aW91cyBQYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXNQcmV2aW91c0RhdGEgJiYgZGF0YS5oYXNNb3JlKCkpIHtcbiAgICAgICAgICAgICAgICAgIHNldFBhZ2UoKG9sZCkgPT4gb2xkICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNQcmV2aW91c0RhdGEgfHwgIWRhdGEuaGFzTW9yZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOZXh0IFBhZ2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHtpc0ZldGNoaW5nID8gPHNwYW4+TG9hZGluZy4uLjwvc3Bhbj4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW11bml0aWVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Communities.tsx\n");

/***/ })

})