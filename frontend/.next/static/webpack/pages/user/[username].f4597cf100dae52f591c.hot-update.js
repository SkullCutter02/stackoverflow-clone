webpackHotUpdate_N_E("pages/user/[username]",{

/***/ "./components/UserAnswers.tsx":
/*!************************************!*\
  !*** ./components/UserAnswers.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _PageHandlers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PageHandlers */ \"./components/PageHandlers.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/UserAnswers.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar UserAnswers = function UserAnswers(_ref) {\n  _s();\n\n  var uuid = _ref.uuid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchUserAnswers = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/users/\").concat(uuid, \"/comments?page=\").concat(page, \"&limit=20\"));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchUserAnswers(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])([\"user-answers\", page], function () {\n    return fetchUserAnswers(page);\n  }, {\n    keepPreviousData: true,\n    cacheTime: 0\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isPreviousData = _useQuery.isPreviousData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"691126729\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]),\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"691126729\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]),\n      children: error.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n      children: data.comments.length !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"691126729\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"691126729\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]) + \" \" + \"user-answers-container\",\n          children: data.comments.map(function (answer) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"691126729\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]) + \" \" + \"user-answer-container\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"691126729\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]) + \" \" + \"left\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"691126729\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]),\n                  children: answer.votes\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 45,\n                  columnNumber: 23\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"691126729\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]),\n                  children: \"Votes\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 46,\n                  columnNumber: 23\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 19\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_PageHandlers__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          page: page,\n          setPage: setPage,\n          isPreviousData: isPreviousData,\n          hasMore: data.hasMore,\n          width: 97\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"691126729\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]) + \" \" + \"empty\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"691126729\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]),\n          children: \"This user doesn't have any answers...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 15\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"691126729\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]],\n      children: \".user-answer-container.__jsx-style-dynamic-selector{margin:30px 20px;padding:15px 20px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"], \";border-radius:10px;}.empty.__jsx-style-dynamic-selector{height:300px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9Vc2VyQW5zd2Vycy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VrQixBQUc0QixBQU9KLGFBQ0EsSUFQSyxrQkFDc0Isd0NBQ3JCLFlBTUksT0FMekIsNEZBTXFCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvVXNlckFuc3dlcnMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCB7IFVzZXJBbnN3ZXJzVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy91c2VyQW5zd2Vyc1R5cGVcIjtcbmltcG9ydCBQYWdlSGFuZGxlcnMgZnJvbSBcIi4vUGFnZUhhbmRsZXJzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHV1aWQ6IHN0cmluZztcbn1cblxuY29uc3QgVXNlckFuc3dlcnM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHV1aWQgfSkgPT4ge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuXG4gIGNvbnN0IGZldGNoVXNlckFuc3dlcnMgPSBhc3luYyAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtob3N0fS91c2Vycy8ke3V1aWR9L2NvbW1lbnRzP3BhZ2U9JHtwYWdlfSZsaW1pdD0yMGBcbiAgICApO1xuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9O1xuXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yLCBlcnJvciwgZGF0YSwgaXNQcmV2aW91c0RhdGEgfSA9IHVzZVF1ZXJ5PFxuICAgIFVzZXJBbnN3ZXJzVHlwZSxcbiAgICBFcnJvclxuICA+KFtcInVzZXItYW5zd2Vyc1wiLCBwYWdlXSwgKCkgPT4gZmV0Y2hVc2VyQW5zd2VycyhwYWdlKSwge1xuICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gICAgY2FjaGVUaW1lOiAwLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAge2RhdGEuY29tbWVudHMubGVuZ3RoICE9PSAwID8gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWFuc3dlcnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuY29tbWVudHMubWFwKChhbnN3ZXIpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1hbnN3ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPnthbnN3ZXIudm90ZXN9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPlZvdGVzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFBhZ2VIYW5kbGVyc1xuICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICAgICAgc2V0UGFnZT17c2V0UGFnZX1cbiAgICAgICAgICAgICAgICBpc1ByZXZpb3VzRGF0YT17aXNQcmV2aW91c0RhdGF9XG4gICAgICAgICAgICAgICAgaGFzTW9yZT17ZGF0YS5oYXNNb3JlfVxuICAgICAgICAgICAgICAgIHdpZHRoPXs5N31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5XCI+XG4gICAgICAgICAgICAgIDxoMT5UaGlzIHVzZXIgZG9lc24ndCBoYXZlIGFueSBhbnN3ZXJzLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC51c2VyLWFuc3dlci1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMzBweCAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5mbG9hdGluZ1Bvc3RCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVtcHR5IHtcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyQW5zd2VycztcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/UserAnswers.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(UserAnswers, \"B8AHcuIhDtcfT64L9EclU84Jm5E=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = UserAnswers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserAnswers);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserAnswers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyQW5zd2Vycy50c3g/MTA3MCJdLCJuYW1lcyI6WyJVc2VyQW5zd2VycyIsInV1aWQiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiZmV0Y2hVc2VyQW5zd2VycyIsImZldGNoIiwiaG9zdCIsInJlcyIsImpzb24iLCJ1c2VRdWVyeSIsImtlZXBQcmV2aW91c0RhdGEiLCJjYWNoZVRpbWUiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiZXJyb3IiLCJkYXRhIiwiaXNQcmV2aW91c0RhdGEiLCJjc3MiLCJtZXNzYWdlIiwiY29tbWVudHMiLCJsZW5ndGgiLCJtYXAiLCJhbnN3ZXIiLCJ2b3RlcyIsImhhc01vcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFNQSxJQUFNQSxXQUE0QixHQUFHLFNBQS9CQSxXQUErQixPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUN6QkMsc0RBQVEsQ0FBUyxDQUFULENBRGlCO0FBQUEsTUFDMUNDLElBRDBDO0FBQUEsTUFDcENDLE9BRG9DOztBQUdqRCxNQUFNQyxnQkFBZ0I7QUFBQSxpTUFBRyxpQkFBT0YsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNMRyxLQUFLLFdBQ2xCQyxtREFEa0Isb0JBQ0pOLElBREksNEJBQ2tCRSxJQURsQixlQURBOztBQUFBO0FBQ2pCSyxpQkFEaUI7QUFBQTtBQUFBLHFCQUlWQSxHQUFHLENBQUNDLElBQUosRUFKVTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCSixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBSGlELGtCQVVXSyw0REFBUSxDQUdsRSxDQUFDLGNBQUQsRUFBaUJQLElBQWpCLENBSGtFLEVBRzFDO0FBQUEsV0FBTUUsZ0JBQWdCLENBQUNGLElBQUQsQ0FBdEI7QUFBQSxHQUgwQyxFQUdaO0FBQ3REUSxvQkFBZ0IsRUFBRSxJQURvQztBQUV0REMsYUFBUyxFQUFFO0FBRjJDLEdBSFksQ0FWbkI7QUFBQSxNQVV6Q0MsU0FWeUMsYUFVekNBLFNBVnlDO0FBQUEsTUFVOUJDLE9BVjhCLGFBVTlCQSxPQVY4QjtBQUFBLE1BVXJCQyxLQVZxQixhQVVyQkEsS0FWcUI7QUFBQSxNQVVkQyxJQVZjLGFBVWRBLElBVmM7QUFBQSxNQVVSQyxjQVZRLGFBVVJBLGNBVlE7O0FBa0JqRCxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxlQUNHSixTQUFTLGdCQUNSO0FBQUEsaUdBcUNnQkssMEVBckNoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURRLEdBRU5KLE9BQU8sZ0JBQ1Q7QUFBQSxpR0FtQ2dCSSwwRUFuQ2hCO0FBQUEsZ0JBQU1ILEtBQUssQ0FBQ0k7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFMsZ0JBR1QscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZ0JBQ0dILElBQUksQ0FBQ0ksUUFBTCxDQUFjQyxNQUFkLEtBQXlCLENBQXpCLGdCQUNDO0FBQUEsbUdBK0JZSCwwRUEvQlo7QUFBQSxnQ0FDRTtBQUFBLHFHQThCVUEsMEVBOUJWLGFBQWUsd0JBQWY7QUFBQSxvQkFDR0YsSUFBSSxDQUFDSSxRQUFMLENBQWNFLEdBQWQsQ0FBa0IsVUFBQ0MsTUFBRDtBQUFBLGdDQUNqQjtBQUFBLHlHQTRCTUwsMEVBNUJOLGFBQWUsdUJBQWY7QUFBQSxxQ0FDRTtBQUFBLDJHQTJCSUEsMEVBM0JKLGFBQWUsTUFBZjtBQUFBLHdDQUNFO0FBQUEsNkdBMEJFQSwwRUExQkY7QUFBQSw0QkFBSUssTUFBTSxDQUFDQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFBLDZHQXlCRU4sMEVBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGlCO0FBQUEsV0FBbEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBV0UscUVBQUMscURBQUQ7QUFDRSxjQUFJLEVBQUVmLElBRFI7QUFFRSxpQkFBTyxFQUFFQyxPQUZYO0FBR0Usd0JBQWMsRUFBRWEsY0FIbEI7QUFJRSxpQkFBTyxFQUFFRCxJQUFJLENBQUNTLE9BSmhCO0FBS0UsZUFBSyxFQUFFO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxnQkFxQkM7QUFBQSxtR0FXWVAsMEVBWFosYUFBZSxPQUFmO0FBQUEsK0JBQ0U7QUFBQSxxR0FVVUEsMEVBVlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUEsZ0JBdUNvQkEsMEVBdkNwQjtBQUFBLDRIQXVDb0JBLDBFQXZDcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFERCxDQXZFRDs7R0FBTWxCLFc7VUFVd0RVLG9EOzs7S0FWeERWLFc7QUF5RVNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Vc2VyQW5zd2Vycy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IHsgVXNlckFuc3dlcnNUeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL3VzZXJBbnN3ZXJzVHlwZVwiO1xuaW1wb3J0IFBhZ2VIYW5kbGVycyBmcm9tIFwiLi9QYWdlSGFuZGxlcnNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXVpZDogc3RyaW5nO1xufVxuXG5jb25zdCBVc2VyQW5zd2VyczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdXVpZCB9KSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG5cbiAgY29uc3QgZmV0Y2hVc2VyQW5zd2VycyA9IGFzeW5jIChwYWdlOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke2hvc3R9L3VzZXJzLyR7dXVpZH0vY29tbWVudHM/cGFnZT0ke3BhZ2V9JmxpbWl0PTIwYFxuICAgICk7XG4gICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG4gIH07XG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yLCBkYXRhLCBpc1ByZXZpb3VzRGF0YSB9ID0gdXNlUXVlcnk8XG4gICAgVXNlckFuc3dlcnNUeXBlLFxuICAgIEVycm9yXG4gID4oW1widXNlci1hbnN3ZXJzXCIsIHBhZ2VdLCAoKSA9PiBmZXRjaFVzZXJBbnN3ZXJzKHBhZ2UpLCB7XG4gICAga2VlcFByZXZpb3VzRGF0YTogdHJ1ZSxcbiAgICBjYWNoZVRpbWU6IDAsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICApIDogaXNFcnJvciA/IChcbiAgICAgICAgPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICB7ZGF0YS5jb21tZW50cy5sZW5ndGggIT09IDAgPyAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYW5zd2Vycy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5jb21tZW50cy5tYXAoKGFuc3dlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWFuc3dlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+e2Fuc3dlci52b3Rlc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+Vm90ZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8UGFnZUhhbmRsZXJzXG4gICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgICAgICAgICBzZXRQYWdlPXtzZXRQYWdlfVxuICAgICAgICAgICAgICAgIGlzUHJldmlvdXNEYXRhPXtpc1ByZXZpb3VzRGF0YX1cbiAgICAgICAgICAgICAgICBoYXNNb3JlPXtkYXRhLmhhc01vcmV9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezk3fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlcIj5cbiAgICAgICAgICAgICAgPGgxPlRoaXMgdXNlciBkb2Vzbid0IGhhdmUgYW55IGFuc3dlcnMuLi48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnVzZXItYW5zd2VyLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmZsb2F0aW5nUG9zdEJhY2tncm91bmR9O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZW1wdHkge1xuICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJBbnN3ZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserAnswers.tsx\n");

/***/ })

})