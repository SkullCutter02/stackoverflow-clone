webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./pages/questions/[uuid]/index.tsx":
/*!******************************************!*\
  !*** ./pages/questions/[uuid]/index.tsx ***!
  \******************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Question */ \"./components/Question.tsx\");\n/* harmony import */ var _components_PostAnswer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/PostAnswer */ \"./components/PostAnswer.tsx\");\n/* harmony import */ var _components_Aside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Aside */ \"./components/Aside.tsx\");\n/* harmony import */ var _components_Answers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Answers */ \"./components/Answers.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/questions/[uuid]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar QuestionPage = function QuestionPage(_ref) {\n  _s();\n\n  var uuid = _ref.uuid;\n\n  var fetchQuestions = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/posts/\").concat(uuid));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchQuestions() {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // const { isLoading, isError, error, data } = useQuery<QuestionType, Error>(\n  //   [\"individual-question\"],\n  //   () => fetchQuestions(),\n  //   { cacheTime: 0 }\n  // );\n\n\n  var mutation = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"])(function () {\n    return fetchQuestions();\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-4228215692\",\n      children: mutation.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-4228215692\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }, _this) : mutation.isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-4228215692\",\n        children: mutation.error.message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-4228215692\",\n          children: mutation.data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-4228215692\" + \" \" + \"h1-border-btm\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n          className: \"jsx-4228215692\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-4228215692\" + \" \" + \"left\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Question__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n              question: mutation.data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_PostAnswer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n              question: mutation.data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n              className: \"jsx-4228215692\",\n              children: \"Answers:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Answers__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n              question: mutation.data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Aside__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            borderSide: \"left\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"4228215692\",\n      children: \"h1.jsx-4228215692{font-size:1.3rem;line-height:1.4em;margin:20px auto;width:88%;}.h1-border-btm.jsx-4228215692{width:96%;margin:0 auto;border-bottom:1px solid #fff;}main.jsx-4228215692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.left.jsx-4228215692{width:80%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvcXVlc3Rpb25zL1t1dWlkXS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURrQixBQUc0QixBQU9QLEFBTUcsQUFLSCxVQVZJLEFBV2hCLE9BbEJvQixPQVFXLFdBUFosaUJBQ1AsQ0FPWixTQU5BLFlBVWdDLG1IQUNoQyIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL3BhZ2VzL3F1ZXN0aW9ucy9bdXVpZF0vaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgUXVlc3Rpb25UeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3R5cGVzL2luZGl2aWR1YWxRdWVzdGlvblR5cGVcIjtcbmltcG9ydCBRdWVzdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9RdWVzdGlvblwiO1xuaW1wb3J0IFBvc3RBbnN3ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUG9zdEFuc3dlclwiO1xuaW1wb3J0IEFzaWRlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0FzaWRlXCI7XG5pbXBvcnQgQW5zd2VycyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9BbnN3ZXJzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHV1aWQ6IHN0cmluZztcbn1cblxuY29uc3QgUXVlc3Rpb25QYWdlOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB1dWlkIH0pID0+IHtcbiAgY29uc3QgZmV0Y2hRdWVzdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7aG9zdH0vcG9zdHMvJHt1dWlkfWApO1xuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9O1xuXG4gIC8vIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnk8UXVlc3Rpb25UeXBlLCBFcnJvcj4oXG4gIC8vICAgW1wiaW5kaXZpZHVhbC1xdWVzdGlvblwiXSxcbiAgLy8gICAoKSA9PiBmZXRjaFF1ZXN0aW9ucygpLFxuICAvLyAgIHsgY2FjaGVUaW1lOiAwIH1cbiAgLy8gKTtcblxuICBjb25zdCBtdXRhdGlvbiA9IHVzZU11dGF0aW9uPFF1ZXN0aW9uVHlwZSwgRXJyb3I+KCgpID0+IGZldGNoUXVlc3Rpb25zKCkpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdj5cbiAgICAgICAge211dGF0aW9uLmlzTG9hZGluZyA/IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKSA6IG11dGF0aW9uLmlzRXJyb3IgPyAoXG4gICAgICAgICAgPGRpdj57bXV0YXRpb24uZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8aDE+e211dGF0aW9uLmRhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDEtYm9yZGVyLWJ0bVwiIC8+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPFF1ZXN0aW9uIHF1ZXN0aW9uPXttdXRhdGlvbi5kYXRhfSAvPlxuICAgICAgICAgICAgICAgIDxQb3N0QW5zd2VyIHF1ZXN0aW9uPXttdXRhdGlvbi5kYXRhfSAvPlxuICAgICAgICAgICAgICAgIDxoMT5BbnN3ZXJzOjwvaDE+XG4gICAgICAgICAgICAgICAgPEFuc3dlcnMgcXVlc3Rpb249e211dGF0aW9uLmRhdGF9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8QXNpZGUgYm9yZGVyU2lkZT17XCJsZWZ0XCJ9IC8+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDg4JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oMS1ib3JkZXItYnRtIHtcbiAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAubGVmdCB7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB1dWlkOiBjb250ZXh0LnBhcmFtcy51dWlkLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvblBhZ2U7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/questions/[uuid]/index.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(QuestionPage, \"Kvw+Q3+Z705KOo+cvu2gXTQDxwg=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"]];\n});\n\n_c = QuestionPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"QuestionPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVlc3Rpb25zL1t1dWlkXS9pbmRleC50c3g/ZDkxYyJdLCJuYW1lcyI6WyJRdWVzdGlvblBhZ2UiLCJ1dWlkIiwiZmV0Y2hRdWVzdGlvbnMiLCJmZXRjaCIsImhvc3QiLCJyZXMiLCJqc29uIiwibXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJlcnJvciIsIm1lc3NhZ2UiLCJkYXRhIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsWUFBNkIsR0FBRyxTQUFoQ0EsWUFBZ0MsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDbEQsTUFBTUMsY0FBYztBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0hDLEtBQUssV0FBSUMsbURBQUosb0JBQWtCSCxJQUFsQixFQURGOztBQUFBO0FBQ2ZJLGlCQURlO0FBQUE7QUFBQSxxQkFFUkEsR0FBRyxDQUFDQyxJQUFKLEVBRlE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkSixjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCLENBRGtELENBTWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1LLFFBQVEsR0FBR0MsK0RBQVcsQ0FBc0I7QUFBQSxXQUFNTixjQUFjLEVBQXBCO0FBQUEsR0FBdEIsQ0FBNUI7QUFFQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBO0FBQUEsZ0JBQ0dLLFFBQVEsQ0FBQ0UsU0FBVCxnQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsR0FFR0YsUUFBUSxDQUFDRyxPQUFULGdCQUNGO0FBQUE7QUFBQSxrQkFBTUgsUUFBUSxDQUFDSSxLQUFULENBQWVDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERSxnQkFHRixxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxnQ0FDRTtBQUFBO0FBQUEsb0JBQUtMLFFBQVEsQ0FBQ00sSUFBVCxDQUFjQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSw4Q0FBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBO0FBQUEsa0NBQ0U7QUFBQSxnREFBZSxNQUFmO0FBQUEsb0NBQ0UscUVBQUMsNERBQUQ7QUFBVSxzQkFBUSxFQUFFUCxRQUFRLENBQUNNO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQyw4REFBRDtBQUFZLHNCQUFRLEVBQUVOLFFBQVEsQ0FBQ007QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUFJRSxxRUFBQyw0REFBRDtBQUFTLHNCQUFRLEVBQUVOLFFBQVEsQ0FBQ007QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFPRSxxRUFBQyx5REFBRDtBQUFPLHNCQUFVLEVBQUU7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaURELENBL0REOztHQUFNYixZO1VBWWFRLHVEOzs7S0FaYlIsWTs7QUF5RVNBLDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcXVlc3Rpb25zL1t1dWlkXS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi8uLi8uLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1F1ZXN0aW9uXCI7XG5pbXBvcnQgUG9zdEFuc3dlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Qb3N0QW5zd2VyXCI7XG5pbXBvcnQgQXNpZGUgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQXNpZGVcIjtcbmltcG9ydCBBbnN3ZXJzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0Fuc3dlcnNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXVpZDogc3RyaW5nO1xufVxuXG5jb25zdCBRdWVzdGlvblBhZ2U6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHV1aWQgfSkgPT4ge1xuICBjb25zdCBmZXRjaFF1ZXN0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtob3N0fS9wb3N0cy8ke3V1aWR9YCk7XG4gICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG4gIH07XG5cbiAgLy8gY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeTxRdWVzdGlvblR5cGUsIEVycm9yPihcbiAgLy8gICBbXCJpbmRpdmlkdWFsLXF1ZXN0aW9uXCJdLFxuICAvLyAgICgpID0+IGZldGNoUXVlc3Rpb25zKCksXG4gIC8vICAgeyBjYWNoZVRpbWU6IDAgfVxuICAvLyApO1xuXG4gIGNvbnN0IG11dGF0aW9uID0gdXNlTXV0YXRpb248UXVlc3Rpb25UeXBlLCBFcnJvcj4oKCkgPT4gZmV0Y2hRdWVzdGlvbnMoKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2PlxuICAgICAgICB7bXV0YXRpb24uaXNMb2FkaW5nID8gKFxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApIDogbXV0YXRpb24uaXNFcnJvciA/IChcbiAgICAgICAgICA8ZGl2PnttdXRhdGlvbi5lcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxoMT57bXV0YXRpb24uZGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMS1ib3JkZXItYnRtXCIgLz5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8UXVlc3Rpb24gcXVlc3Rpb249e211dGF0aW9uLmRhdGF9IC8+XG4gICAgICAgICAgICAgICAgPFBvc3RBbnN3ZXIgcXVlc3Rpb249e211dGF0aW9uLmRhdGF9IC8+XG4gICAgICAgICAgICAgICAgPGgxPkFuc3dlcnM6PC9oMT5cbiAgICAgICAgICAgICAgICA8QW5zd2VycyBxdWVzdGlvbj17bXV0YXRpb24uZGF0YX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxBc2lkZSBib3JkZXJTaWRlPXtcImxlZnRcIn0gLz5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICB3aWR0aDogODglO1xuICAgICAgICB9XG5cbiAgICAgICAgLmgxLWJvcmRlci1idG0ge1xuICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHV1aWQ6IGNvbnRleHQucGFyYW1zLnV1aWQsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/questions/[uuid]/index.tsx\n");

/***/ })

})