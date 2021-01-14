webpackHotUpdate_N_E("pages/admin",{

/***/ "./pages/admin.tsx":
/*!*************************!*\
  !*** ./pages/admin.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _components_PageHandlers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PageHandlers */ \"./components/PageHandlers.tsx\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/admin.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar AdminPage = function AdminPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_8__[\"UserContext\"]);\n\n  var fetchRequests = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_7__[\"default\"], \"/requests?page=\").concat(page, \"&limit=20\"));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchRequests(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])([\"requests\", page], function () {\n    return fetchRequests(page);\n  }, {\n    keepPreviousData: true\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isPreviousData = _useQuery.isPreviousData;\n\n  if (userContext.user === undefined) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [userContext.user.role === \"god\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1494189576\" + \" \" + \"admin-area-container\",\n      children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1494189576\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1494189576\",\n        children: error.message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 13\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1494189576\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-1494189576\" + \" \" + \"requests-container\",\n          children: data.requests.map(function (request) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-1494189576\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-1494189576\",\n                children: request.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n                href: request.link,\n                style: {\n                  color: \"white\"\n                },\n                className: \"jsx-1494189576\",\n                children: request.link\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 19\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_PageHandlers__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          page: page,\n          setPage: setPage,\n          isPreviousData: isPreviousData,\n          hasMore: data.hasMore,\n          width: 100,\n          flex: \"flex-start\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n          className: \"jsx-1494189576\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            placeholder: \"Name: \",\n            className: \"jsx-1494189576\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"textarea\", {\n            cols: 30,\n            rows: 10,\n            placeholder: \"Description: \",\n            className: \"jsx-1494189576\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"jsx-1494189576\",\n            children: \"Submit\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1494189576\" + \" \" + \"rickroll\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n        src: \"/rick.gif\",\n        alt: \"rick\",\n        className: \"jsx-1494189576\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1494189576\",\n      children: \".rickroll.jsx-1494189576{margin:100px auto;}.rickroll.jsx-1494189576 img.jsx-1494189576{display:block;margin:0 auto;}form.jsx-1494189576 input.jsx-1494189576,form.jsx-1494189576 textarea.jsx-1494189576{display:block;resize:none;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvYWRtaW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGa0IsQUFHNkIsQUFJSixBQU1BLGNBTEEsQUFNRixJQVZkLFFBV0EsRUFOQSIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL3BhZ2VzL2FkbWluLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCBQYWdlSGFuZGxlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZUhhbmRsZXJzXCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5cbnR5cGUgUmVxdWVzdFR5cGUgPSB7XG4gIHJlcXVlc3RzOiB7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBsaW5rOiBzdHJpbmc7XG4gICAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gICAgdXBkYXRlZEF0OiBzdHJpbmc7XG4gIH1bXTtcbiAgaGFzTW9yZTogYm9vbGVhbjtcbn07XG5cbmNvbnN0IEFkbWluUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIGNvbnN0IGZldGNoUmVxdWVzdHMgPSBhc3luYyAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7aG9zdH0vcmVxdWVzdHM/cGFnZT0ke3BhZ2V9JmxpbWl0PTIwYCk7XG4gICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG4gIH07XG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yLCBkYXRhLCBpc1ByZXZpb3VzRGF0YSB9ID0gdXNlUXVlcnk8XG4gICAgUmVxdWVzdFR5cGUsXG4gICAgRXJyb3JcbiAgPihbXCJyZXF1ZXN0c1wiLCBwYWdlXSwgKCkgPT4gZmV0Y2hSZXF1ZXN0cyhwYWdlKSwge1xuICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gIH0pO1xuXG4gIGlmICh1c2VyQ29udGV4dC51c2VyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gPGRpdiAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge3VzZXJDb250ZXh0LnVzZXIucm9sZSA9PT0gXCJnb2RcIiA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1hcmVhLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICApIDogaXNFcnJvciA/IChcbiAgICAgICAgICAgIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWVzdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2RhdGEucmVxdWVzdHMubWFwKChyZXF1ZXN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57cmVxdWVzdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cmVxdWVzdC5saW5rfSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtyZXF1ZXN0Lmxpbmt9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFBhZ2VIYW5kbGVyc1xuICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICAgICAgc2V0UGFnZT17c2V0UGFnZX1cbiAgICAgICAgICAgICAgICBpc1ByZXZpb3VzRGF0YT17aXNQcmV2aW91c0RhdGF9XG4gICAgICAgICAgICAgICAgaGFzTW9yZT17ZGF0YS5oYXNNb3JlfVxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgZmxleD17XCJmbGV4LXN0YXJ0XCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZTogXCIgLz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY29scz17MzB9IHJvd3M9ezEwfSBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uOiBcIiAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlja3JvbGxcIj5cbiAgICAgICAgICA8aW1nIHNyYz17XCIvcmljay5naWZcIn0gYWx0PVwicmlja1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmlja3JvbGwge1xuICAgICAgICAgIG1hcmdpbjogMTAwcHggYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWNrcm9sbCBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybSBpbnB1dCxcbiAgICAgICAgZm9ybSB0ZXh0YXJlYSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluUGFnZTtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/admin.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AdminPage, \"rTbpwU1C6q8+aQEK8ONMiiuOYHw=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = AdminPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"AdminPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4udHN4P2NjZmUiXSwibmFtZXMiOlsiQWRtaW5QYWdlIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsInVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiZmV0Y2hSZXF1ZXN0cyIsImZldGNoIiwiaG9zdCIsInJlcyIsImpzb24iLCJ1c2VRdWVyeSIsImtlZXBQcmV2aW91c0RhdGEiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiZXJyb3IiLCJkYXRhIiwiaXNQcmV2aW91c0RhdGEiLCJ1c2VyIiwidW5kZWZpbmVkIiwicm9sZSIsIm1lc3NhZ2UiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJuYW1lIiwibGluayIsImNvbG9yIiwiaGFzTW9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQWFBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBUyxDQUFULENBRFY7QUFBQSxNQUNmQyxJQURlO0FBQUEsTUFDVEMsT0FEUzs7QUFHdEIsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxnRUFBRCxDQUE5Qjs7QUFFQSxNQUFNQyxhQUFhO0FBQUEsZ01BQUcsaUJBQU9MLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRk0sS0FBSyxXQUFJQyxtREFBSiw0QkFBMEJQLElBQTFCLGVBREg7O0FBQUE7QUFDZFEsaUJBRGM7QUFBQTtBQUFBLHFCQUVQQSxHQUFHLENBQUNDLElBQUosRUFGTzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWJKLGFBQWE7QUFBQTtBQUFBO0FBQUEsS0FBbkI7O0FBTHNCLGtCQVVzQ0ssNERBQVEsQ0FHbEUsQ0FBQyxVQUFELEVB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anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgUGFnZUhhbmRsZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VIYW5kbGVyc1wiO1xuXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuXG50eXBlIFJlcXVlc3RUeXBlID0ge1xuICByZXF1ZXN0czoge1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGluazogc3RyaW5nO1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nO1xuICAgIHVwZGF0ZWRBdDogc3RyaW5nO1xuICB9W107XG4gIGhhc01vcmU6IGJvb2xlYW47XG59O1xuXG5jb25zdCBBZG1pblBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG5cbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcblxuICBjb25zdCBmZXRjaFJlcXVlc3RzID0gYXN5bmMgKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2hvc3R9L3JlcXVlc3RzP3BhZ2U9JHtwYWdlfSZsaW1pdD0yMGApO1xuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9O1xuXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yLCBlcnJvciwgZGF0YSwgaXNQcmV2aW91c0RhdGEgfSA9IHVzZVF1ZXJ5PFxuICAgIFJlcXVlc3RUeXBlLFxuICAgIEVycm9yXG4gID4oW1wicmVxdWVzdHNcIiwgcGFnZV0sICgpID0+IGZldGNoUmVxdWVzdHMocGFnZSksIHtcbiAgICBrZWVwUHJldmlvdXNEYXRhOiB0cnVlLFxuICB9KTtcblxuICBpZiAodXNlckNvbnRleHQudXNlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDxkaXYgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHt1c2VyQ29udGV4dC51c2VyLnJvbGUgPT09IFwiZ29kXCIgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tYXJlYS1jb250YWluZXJcIj5cbiAgICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgICAgICA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVlc3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLnJlcXVlc3RzLm1hcCgocmVxdWVzdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3JlcXVlc3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3JlcXVlc3QubGlua30gc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7cmVxdWVzdC5saW5rfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxQYWdlSGFuZGxlcnNcbiAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgICAgICAgIHNldFBhZ2U9e3NldFBhZ2V9XG4gICAgICAgICAgICAgICAgaXNQcmV2aW91c0RhdGE9e2lzUHJldmlvdXNEYXRhfVxuICAgICAgICAgICAgICAgIGhhc01vcmU9e2RhdGEuaGFzTW9yZX1cbiAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgIGZsZXg9e1wiZmxleC1zdGFydFwifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWU6IFwiIC8+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9ezMwfSByb3dzPXsxMH0gcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbjogXCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpY2tyb2xsXCI+XG4gICAgICAgICAgPGltZyBzcmM9e1wiL3JpY2suZ2lmXCJ9IGFsdD1cInJpY2tcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJpY2tyb2xsIHtcbiAgICAgICAgICBtYXJnaW46IDEwMHB4IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAucmlja3JvbGwgaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0gaW5wdXQsXG4gICAgICAgIGZvcm0gdGV4dGFyZWEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZG1pblBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin.tsx\n");

/***/ })

})