webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Answers.tsx":
/*!********************************!*\
  !*** ./components/Answers.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _AskedBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AskedBy */ \"./components/AskedBy.tsx\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Answers.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Answers = function Answers(_ref) {\n  _s();\n\n  var question = _ref.question;\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_8__[\"UserContext\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var pres = document.querySelectorAll(\"pre\");\n\n    for (var i = 0; i < pres.length; i++) {\n      highlight_js__WEBPACK_IMPORTED_MODULE_5___default.a.highlightBlock(pres[i]);\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2656063688\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"floatingPostBackground\"]]]]) + \" \" + \"answers-container\",\n      children: question.comments.map(function (comment) {\n        var _userContext$user;\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2656063688\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"floatingPostBackground\"]]]]) + \" \" + \"answer-container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            className: \"preview answer-pre\",\n            source: comment.body,\n            plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_4___default.a]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2656063688\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"floatingPostBackground\"]]]]) + \" \" + \"user\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_AskedBy__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n              type: \"answered\",\n              username: comment.user.username,\n              createdAt: comment.createdAt,\n              postUuid: comment.user.uuid,\n              userUuid: userContext === null || userContext === void 0 ? void 0 : (_userContext$user = userContext.user) === null || _userContext$user === void 0 ? void 0 : _userContext$user.uuid,\n              reputation: comment.user.reputation\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this)]\n        }, comment.uuid, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2656063688\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"floatingPostBackground\"]],\n      children: \".answers-container.__jsx-style-dynamic-selector{width:85%;margin:0 auto;}.answer-container.__jsx-style-dynamic-selector{width:100%;margin-bottom:30px;padding:5px 5px 20px;border-radius:10px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"floatingPostBackground\"], \";position:relative;}.user.__jsx-style-dynamic-selector{position:absolute;bottom:10px;right:0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9BbnN3ZXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRGtCLEFBR3FCLEFBS0MsQUFTTyxVQWJKLENBS0ssT0FTUCxNQWJkLE1BS3VCLEFBU2IsUUFDVixhQVRxQixtQkFDcUIsd0NBQ3RCLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvQW5zd2Vycy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCBobGpzIGZyb20gXCJoaWdobGlnaHQuanNcIjtcblxuaW1wb3J0IHsgUXVlc3Rpb25UeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL2luZGl2aWR1YWxRdWVzdGlvblR5cGVcIjtcbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgQXNrZWRCeSBmcm9tIFwiLi9Bc2tlZEJ5XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHF1ZXN0aW9uOiBRdWVzdGlvblR5cGU7XG59XG5cbmNvbnN0IEFuc3dlcnM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHF1ZXN0aW9uIH0pID0+IHtcbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHByZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicHJlXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKHByZXNbaV0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJzLWNvbnRhaW5lclwiPlxuICAgICAgICB7cXVlc3Rpb24uY29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItY29udGFpbmVyXCIga2V5PXtjb21tZW50LnV1aWR9PlxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlldyBhbnN3ZXItcHJlXCJcbiAgICAgICAgICAgICAgc291cmNlPXtjb21tZW50LmJvZHl9XG4gICAgICAgICAgICAgIHBsdWdpbnM9e1tyZW1hcmtHZm1dfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgICAgICA8QXNrZWRCeVxuICAgICAgICAgICAgICAgIHR5cGU9e1wiYW5zd2VyZWRcIn1cbiAgICAgICAgICAgICAgICB1c2VybmFtZT17Y29tbWVudC51c2VyLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdD17Y29tbWVudC5jcmVhdGVkQXR9XG4gICAgICAgICAgICAgICAgcG9zdFV1aWQ9e2NvbW1lbnQudXNlci51dWlkfVxuICAgICAgICAgICAgICAgIHVzZXJVdWlkPXt1c2VyQ29udGV4dD8udXNlcj8udXVpZH1cbiAgICAgICAgICAgICAgICByZXB1dGF0aW9uPXtjb21tZW50LnVzZXIucmVwdXRhdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hbnN3ZXJzLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5hbnN3ZXItY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmZsb2F0aW5nUG9zdEJhY2tncm91bmR9O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuc3dlcnM7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Answers.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Answers, \"99OIpNaJHwvZRpBnaYl6uFs7h2s=\");\n\n_c = Answers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Answers);\n\nvar _c;\n\n$RefreshReg$(_c, \"Answers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbnN3ZXJzLnRzeD9lZmIzIl0sIm5hbWVzIjpbIkFuc3dlcnMiLCJxdWVzdGlvbiIsInVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwidXNlRWZmZWN0IiwicHJlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJobGpzIiwiaGlnaGxpZ2h0QmxvY2siLCJjc3MiLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiLCJib2R5IiwicmVtYXJrR2ZtIiwidXNlciIsInVzZXJuYW1lIiwiY3JlYXRlZEF0IiwidXVpZCIsInJlcHV0YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsT0FBd0IsR0FBRyxTQUEzQkEsT0FBMkIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDakQsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxnRUFBRCxDQUE5QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsS0FBMUIsQ0FBYjs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILElBQUksQ0FBQ0ksTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDcENFLHlEQUFJLENBQUNDLGNBQUwsQ0FBb0JOLElBQUksQ0FBQ0csQ0FBRCxDQUF4QjtBQUNEO0FBQ0YsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFO0FBQUEsa0dBaUNrQkksMEVBakNsQixhQUFlLG1CQUFmO0FBQUEsZ0JBQ0daLFFBQVEsQ0FBQ2EsUUFBVCxDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsT0FBRDtBQUFBOztBQUFBLDRCQUNyQjtBQUFBLHNHQStCY0gsMEVBL0JkLGFBQWUsa0JBQWY7QUFBQSxrQ0FDRSxxRUFBQyxxREFBRDtBQUNFLHFCQUFTLEVBQUMsb0JBRFo7QUFFRSxrQkFBTSxFQUFFRyxPQUFPLENBQUNDLElBRmxCO0FBR0UsbUJBQU8sRUFBRSxDQUFDQyxpREFBRDtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRTtBQUFBLHdHQXlCWUwsMEVBekJaLGFBQWUsTUFBZjtBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQ0Usa0JBQUksRUFBRSxVQURSO0FBRUUsc0JBQVEsRUFBRUcsT0FBTyxDQUFDRyxJQUFSLENBQWFDLFFBRnpCO0FBR0UsdUJBQVMsRUFBRUosT0FBTyxDQUFDSyxTQUhyQjtBQUlFLHNCQUFRLEVBQUVMLE9BQU8sQ0FBQ0csSUFBUixDQUFhRyxJQUp6QjtBQUtFLHNCQUFRLEVBQUVwQixXQUFGLGFBQUVBLFdBQUYsNENBQUVBLFdBQVcsQ0FBRWlCLElBQWYsc0RBQUUsa0JBQW1CRyxJQUwvQjtBQU1FLHdCQUFVLEVBQUVOLE9BQU8sQ0FBQ0csSUFBUixDQUFhSTtBQU4zQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBLFdBQXVDUCxPQUFPLENBQUNNLElBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHFCO0FBQUEsT0FBdEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBLGdCQWtDb0JULDBFQWxDcEI7QUFBQSxtT0FrQ29CQSwwRUFsQ3BCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQ0QsQ0ExREQ7O0dBQU1iLE87O0tBQUFBLE87QUE0RFNBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BbnN3ZXJzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuaW1wb3J0IGhsanMgZnJvbSBcImhpZ2hsaWdodC5qc1wiO1xuXG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBBc2tlZEJ5IGZyb20gXCIuL0Fza2VkQnlcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgQW5zd2VyczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcXVlc3Rpb24gfSkgPT4ge1xuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwcmVcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2socHJlc1tpXSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlcnMtY29udGFpbmVyXCI+XG4gICAgICAgIHtxdWVzdGlvbi5jb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlci1jb250YWluZXJcIiBrZXk9e2NvbW1lbnQudXVpZH0+XG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3IGFuc3dlci1wcmVcIlxuICAgICAgICAgICAgICBzb3VyY2U9e2NvbW1lbnQuYm9keX1cbiAgICAgICAgICAgICAgcGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgICAgIDxBc2tlZEJ5XG4gICAgICAgICAgICAgICAgdHlwZT17XCJhbnN3ZXJlZFwifVxuICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtjb21tZW50LnVzZXIudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0PXtjb21tZW50LmNyZWF0ZWRBdH1cbiAgICAgICAgICAgICAgICBwb3N0VXVpZD17Y29tbWVudC51c2VyLnV1aWR9XG4gICAgICAgICAgICAgICAgdXNlclV1aWQ9e3VzZXJDb250ZXh0Py51c2VyPy51dWlkfVxuICAgICAgICAgICAgICAgIHJlcHV0YXRpb249e2NvbW1lbnQudXNlci5yZXB1dGF0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmFuc3dlcnMtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFuc3dlci1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDVweCAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuZmxvYXRpbmdQb3N0QmFja2dyb3VuZH07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5zd2VycztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Answers.tsx\n");

/***/ })

})