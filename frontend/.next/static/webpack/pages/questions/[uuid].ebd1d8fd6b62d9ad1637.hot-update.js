webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./pages/questions/[uuid]/index.tsx":
/*!******************************************!*\
  !*** ./pages/questions/[uuid]/index.tsx ***!
  \******************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Question */ \"./components/Question.tsx\");\n/* harmony import */ var _components_PostAnswer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/PostAnswer */ \"./components/PostAnswer.tsx\");\n/* harmony import */ var _components_Aside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Aside */ \"./components/Aside.tsx\");\n/* harmony import */ var _components_Answers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Answers */ \"./components/Answers.tsx\");\n/* harmony import */ var _components_EditQuestion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/EditQuestion */ \"./components/EditQuestion.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/questions/[uuid]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar QuestionPage = function QuestionPage(_ref) {\n  _s();\n\n  var uuid = _ref.uuid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      editMode = _useState[0],\n      setEditMode = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      questionBody = _useState2[0],\n      setQuestionBody = _useState2[1];\n\n  var fetchQuestions = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/posts/\").concat(uuid));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchQuestions() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])([\"individual-question\"], function () {\n    return fetchQuestions();\n  }, {\n    cacheTime: 0\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-4228215692\",\n      children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-4228215692\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-4228215692\",\n        children: error.message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-4228215692\",\n          children: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-4228215692\" + \" \" + \"h1-border-btm\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n          className: \"jsx-4228215692\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-4228215692\" + \" \" + \"left\",\n            children: [!editMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Question__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n              question: data,\n              setEditMode: setEditMode,\n              editMode: editMode\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 19\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_EditQuestion__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              setEditMode: setEditMode,\n              question: data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_PostAnswer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n              question: data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n              className: \"jsx-4228215692\",\n              children: \"Answers:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Answers__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n              question: data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Aside__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            borderSide: \"left\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"4228215692\",\n      children: \"h1.jsx-4228215692{font-size:1.3rem;line-height:1.4em;margin:20px auto;width:88%;}.h1-border-btm.jsx-4228215692{width:96%;margin:0 auto;border-bottom:1px solid #fff;}main.jsx-4228215692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.left.jsx-4228215692{width:80%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvcXVlc3Rpb25zL1t1dWlkXS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RrQixBQUc0QixBQU9QLEFBTUcsQUFLSCxVQVZJLEFBV2hCLE9BbEJvQixPQVFXLFdBUFosaUJBQ1AsQ0FPWixTQU5BLFlBVWdDLG1IQUNoQyIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL3BhZ2VzL3F1ZXN0aW9ucy9bdXVpZF0vaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IGhvc3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbmltcG9ydCBQb3N0QW5zd2VyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Bvc3RBbnN3ZXJcIjtcbmltcG9ydCBBc2lkZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Bc2lkZVwiO1xuaW1wb3J0IEFuc3dlcnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQW5zd2Vyc1wiO1xuaW1wb3J0IEVkaXRRdWVzdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9FZGl0UXVlc3Rpb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXVpZDogc3RyaW5nO1xufVxuXG5jb25zdCBRdWVzdGlvblBhZ2U6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHV1aWQgfSkgPT4ge1xuICBjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3F1ZXN0aW9uQm9keSwgc2V0UXVlc3Rpb25Cb2R5XSA9IHVzZVN0YXRlPFF1ZXN0aW9uVHlwZSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGZldGNoUXVlc3Rpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7dXVpZH1gKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgfTtcblxuICBjb25zdCB7IGlzTG9hZGluZywgaXNFcnJvciwgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5PFF1ZXN0aW9uVHlwZSwgRXJyb3I+KFxuICAgIFtcImluZGl2aWR1YWwtcXVlc3Rpb25cIl0sXG4gICAgKCkgPT4gZmV0Y2hRdWVzdGlvbnMoKSxcbiAgICB7IGNhY2hlVGltZTogMCB9XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2PlxuICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApIDogaXNFcnJvciA/IChcbiAgICAgICAgICA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMS1ib3JkZXItYnRtXCIgLz5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICB7IWVkaXRNb2RlID8gKFxuICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICBzZXRFZGl0TW9kZT17c2V0RWRpdE1vZGV9XG4gICAgICAgICAgICAgICAgICAgIGVkaXRNb2RlPXtlZGl0TW9kZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxFZGl0UXVlc3Rpb24gc2V0RWRpdE1vZGU9e3NldEVkaXRNb2RlfSBxdWVzdGlvbj17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxQb3N0QW5zd2VyIHF1ZXN0aW9uPXtkYXRhfSAvPlxuICAgICAgICAgICAgICAgIDxoMT5BbnN3ZXJzOjwvaDE+XG4gICAgICAgICAgICAgICAgPEFuc3dlcnMgcXVlc3Rpb249e2RhdGF9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8QXNpZGUgYm9yZGVyU2lkZT17XCJsZWZ0XCJ9IC8+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDg4JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oMS1ib3JkZXItYnRtIHtcbiAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAubGVmdCB7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB1dWlkOiBjb250ZXh0LnBhcmFtcy51dWlkLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvblBhZ2U7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/questions/[uuid]/index.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(QuestionPage, \"tIGMqfY+80V7+Cp0D7e/h4toaMg=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = QuestionPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"QuestionPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVlc3Rpb25zL1t1dWlkXS9pbmRleC50c3g/ZDkxYyJdLCJuYW1lcyI6WyJRdWVzdGlvblBhZ2UiLCJ1dWlkIiwidXNlU3RhdGUiLCJlZGl0TW9kZSIsInNldEVkaXRNb2RlIiwicXVlc3Rpb25Cb2R5Iiwic2V0UXVlc3Rpb25Cb2R5IiwiZmV0Y2hRdWVzdGlvbnMiLCJmZXRjaCIsImhvc3QiLCJyZXMiLCJqc29uIiwidXNlUXVlcnkiLCJjYWNoZVRpbWUiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1BLFlBQTZCLEdBQUcsU0FBaENBLFlBQWdDLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ2xCQyxzREFBUSxDQUFVLEtBQVYsQ0FEVTtBQUFBLE1BQzNDQyxRQUQyQztBQUFBLE1BQ2pDQyxXQURpQzs7QUFBQSxtQkFFVkYsc0RBQVEsQ0FBc0IsSUFBdEIsQ0FGRTtBQUFBLE1BRTNDRyxZQUYyQztBQUFBLE1BRTdCQyxlQUY2Qjs7QUFJbEQsTUFBTUMsY0FBYztBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0hDLEtBQUssV0FBSUMsbURBQUosb0JBQWtCUixJQUFsQixFQURGOztBQUFBO0FBQ2ZTLGlCQURlO0FBQUE7QUFBQSxxQkFFUkEsR0FBRyxDQUFDQyxJQUFKLEVBRlE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkSixjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQUprRCxrQkFTTkssNERBQVEsQ0FDbEQsQ0FBQyxxQkFBRCxDQURrRCxFQUVsRDtBQUFBLFdBQU1MLGNBQWMsRUFBcEI7QUFBQSxHQUZrRCxFQUdsRDtBQUFFTSxhQUFTLEVBQUU7QUFBYixHQUhrRCxDQVRGO0FBQUEsTUFTMUNDLFNBVDBDLGFBUzFDQSxTQVQwQztBQUFBLE1BUy9CQyxPQVQrQixhQVMvQkEsT0FUK0I7QUFBQSxNQVN0QkMsS0FUc0IsYUFTdEJBLEtBVHNCO0FBQUEsTUFTZkMsSUFUZSxhQVNmQSxJQVRlOztBQWVsRCxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBO0FBQUEsZ0JBQ0dILFNBQVMsZ0JBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRLEdBRU5DLE9BQU8sZ0JBQ1Q7QUFBQTtBQUFBLGtCQUFNQyxLQUFLLENBQUNFO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURTLGdCQUdULHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLGdDQUNFO0FBQUE7QUFBQSxvQkFBS0QsSUFBSSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLDhDQUFlO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUE7QUFBQSxrQ0FDRTtBQUFBLGdEQUFlLE1BQWY7QUFBQSx1QkFDRyxDQUFDaEIsUUFBRCxnQkFDQyxxRUFBQyw0REFBRDtBQUNFLHNCQUFRLEVBQUVjLElBRFo7QUFFRSx5QkFBVyxFQUFFYixXQUZmO0FBR0Usc0JBQVEsRUFBRUQ7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGdCQU9DLHFFQUFDLGlFQUFEO0FBQWMseUJBQVcsRUFBRUMsV0FBM0I7QUFBd0Msc0JBQVEsRUFBRWE7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSSixlQVVFLHFFQUFDLDhEQUFEO0FBQVksc0JBQVEsRUFBRUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRixlQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEYsZUFZRSxxRUFBQyw0REFBRDtBQUFTLHNCQUFRLEVBQUVBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBZUUscUVBQUMseURBQUQ7QUFBTyxzQkFBVSxFQUFFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlERCxDQXhFRDs7R0FBTWpCLFk7VUFTd0NZLG9EOzs7S0FUeENaLFk7O0FBa0ZTQSwyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3F1ZXN0aW9ucy9bdXVpZF0vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IGhvc3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbmltcG9ydCBQb3N0QW5zd2VyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Bvc3RBbnN3ZXJcIjtcbmltcG9ydCBBc2lkZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Bc2lkZVwiO1xuaW1wb3J0IEFuc3dlcnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQW5zd2Vyc1wiO1xuaW1wb3J0IEVkaXRRdWVzdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9FZGl0UXVlc3Rpb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXVpZDogc3RyaW5nO1xufVxuXG5jb25zdCBRdWVzdGlvblBhZ2U6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHV1aWQgfSkgPT4ge1xuICBjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3F1ZXN0aW9uQm9keSwgc2V0UXVlc3Rpb25Cb2R5XSA9IHVzZVN0YXRlPFF1ZXN0aW9uVHlwZSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGZldGNoUXVlc3Rpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7dXVpZH1gKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgfTtcblxuICBjb25zdCB7IGlzTG9hZGluZywgaXNFcnJvciwgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5PFF1ZXN0aW9uVHlwZSwgRXJyb3I+KFxuICAgIFtcImluZGl2aWR1YWwtcXVlc3Rpb25cIl0sXG4gICAgKCkgPT4gZmV0Y2hRdWVzdGlvbnMoKSxcbiAgICB7IGNhY2hlVGltZTogMCB9XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2PlxuICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApIDogaXNFcnJvciA/IChcbiAgICAgICAgICA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMS1ib3JkZXItYnRtXCIgLz5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICB7IWVkaXRNb2RlID8gKFxuICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICBzZXRFZGl0TW9kZT17c2V0RWRpdE1vZGV9XG4gICAgICAgICAgICAgICAgICAgIGVkaXRNb2RlPXtlZGl0TW9kZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxFZGl0UXVlc3Rpb24gc2V0RWRpdE1vZGU9e3NldEVkaXRNb2RlfSBxdWVzdGlvbj17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxQb3N0QW5zd2VyIHF1ZXN0aW9uPXtkYXRhfSAvPlxuICAgICAgICAgICAgICAgIDxoMT5BbnN3ZXJzOjwvaDE+XG4gICAgICAgICAgICAgICAgPEFuc3dlcnMgcXVlc3Rpb249e2RhdGF9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8QXNpZGUgYm9yZGVyU2lkZT17XCJsZWZ0XCJ9IC8+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDg4JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oMS1ib3JkZXItYnRtIHtcbiAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAubGVmdCB7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB1dWlkOiBjb250ZXh0LnBhcmFtcy51dWlkLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvblBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/questions/[uuid]/index.tsx\n");

/***/ })

})