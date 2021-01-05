webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Answers.tsx":
/*!********************************!*\
  !*** ./components/Answers.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _AskedBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AskedBy */ \"./components/AskedBy.tsx\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Answers.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Answers = function Answers(_ref) {\n  _s();\n\n  var question = _ref.question;\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_10__[\"UserContext\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var pres = document.querySelectorAll(\"pre\");\n\n    for (var i = 0; i < pres.length; i++) {\n      highlight_js__WEBPACK_IMPORTED_MODULE_5___default.a.highlightBlock(pres[i]);\n    }\n  }, []);\n\n  var vote = function vote(voteType) {};\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4042473474\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"answers-container\",\n      children: question.comments.map(function (comment) {\n        var _userContext$user;\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4042473474\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"answer-container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4042473474\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"votes\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faSortUp\"],\n              color: upvoteColor,\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"upvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              style: {\n                color: \"#c6c6c6\",\n                margin: \"-8px 0\"\n              },\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4042473474\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"vote-count\",\n              children: votes\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faSortDown\"],\n              color: downvoteColor,\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"downvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              width: \"95%\"\n            },\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4042473474\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              className: \"preview answer-pre\",\n              source: comment.body,\n              plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_4___default.a]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4042473474\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"user\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_AskedBy__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                type: \"answered\",\n                username: comment.user.username,\n                createdAt: comment.createdAt,\n                postUuid: comment.user.uuid,\n                userUuid: userContext === null || userContext === void 0 ? void 0 : (_userContext$user = userContext.user) === null || _userContext$user === void 0 ? void 0 : _userContext$user.uuid,\n                reputation: comment.user.reputation\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this)]\n        }, comment.uuid, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"4042473474\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]],\n      children: \".answers-container.__jsx-style-dynamic-selector{width:85%;margin:0 auto 70px;}.answer-container.__jsx-style-dynamic-selector{width:100%;margin-bottom:30px;padding:5px 5px 20px;border-radius:10px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"], \";position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.user.__jsx-style-dynamic-selector{position:absolute;bottom:10px;right:5px;}.votes.__jsx-style-dynamic-selector{width:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-top:14px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9BbnN3ZXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RWtCLEFBR3FCLEFBS0MsQUFVTyxBQU1ULFNBQ0ksQ0FyQk0sQ0FLQSxPQVVQLFdBZGQsQ0FLdUIsQUFVWCxVQUNaLFdBVnFCLG1CQUNxQixhQWNsQiwyQkFiSixrQkFDTCxpQ0FhTSx5Q0FackIsb0RBYTZCLHlHQUNYLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvQW5zd2Vycy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCBobGpzIGZyb20gXCJoaWdobGlnaHQuanNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhU29ydFVwLCBmYVNvcnREb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBBc2tlZEJ5IGZyb20gXCIuL0Fza2VkQnlcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgQW5zd2VyczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcXVlc3Rpb24gfSkgPT4ge1xuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwcmVcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2socHJlc1tpXSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgdm90ZSA9ICh2b3RlVHlwZTogXCJ1cHZvdGVcIiB8IFwiZG93bnZvdGVcIikgPT4ge307XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlcnMtY29udGFpbmVyXCI+XG4gICAgICAgIHtxdWVzdGlvbi5jb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlci1jb250YWluZXJcIiBrZXk9e2NvbW1lbnQudXVpZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGVzXCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYVNvcnRVcH1cbiAgICAgICAgICAgICAgICBjb2xvcj17dXB2b3RlQ29sb3J9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIHNpemU9e1wiMnhcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b3RlKFwidXB2b3RlXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZvdGUtY291bnRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiNjNmM2YzZcIiwgbWFyZ2luOiBcIi04cHggMFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dm90ZXN9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhU29ydERvd259XG4gICAgICAgICAgICAgICAgY29sb3I9e2Rvd252b3RlQ29sb3J9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIHNpemU9e1wiMnhcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b3RlKFwiZG93bnZvdGVcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiOTUlXCIgfX0+XG4gICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlldyBhbnN3ZXItcHJlXCJcbiAgICAgICAgICAgICAgICBzb3VyY2U9e2NvbW1lbnQuYm9keX1cbiAgICAgICAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgICAgICAgPEFza2VkQnlcbiAgICAgICAgICAgICAgICAgIHR5cGU9e1wiYW5zd2VyZWRcIn1cbiAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtjb21tZW50LnVzZXIudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e2NvbW1lbnQuY3JlYXRlZEF0fVxuICAgICAgICAgICAgICAgICAgcG9zdFV1aWQ9e2NvbW1lbnQudXNlci51dWlkfVxuICAgICAgICAgICAgICAgICAgdXNlclV1aWQ9e3VzZXJDb250ZXh0Py51c2VyPy51dWlkfVxuICAgICAgICAgICAgICAgICAgcmVwdXRhdGlvbj17Y29tbWVudC51c2VyLnJlcHV0YXRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYW5zd2Vycy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gNzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hbnN3ZXItY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmZsb2F0aW5nUG9zdEJhY2tncm91bmR9O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3RlcyB7XG4gICAgICAgICAgd2lkdGg6IDUlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuc3dlcnM7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Answers.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Answers, \"99OIpNaJHwvZRpBnaYl6uFs7h2s=\");\n\n_c = Answers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Answers);\n\nvar _c;\n\n$RefreshReg$(_c, \"Answers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbnN3ZXJzLnRzeD9lZmIzIl0sIm5hbWVzIjpbIkFuc3dlcnMiLCJxdWVzdGlvbiIsInVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwidXNlRWZmZWN0IiwicHJlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJobGpzIiwiaGlnaGxpZ2h0QmxvY2siLCJ2b3RlIiwidm90ZVR5cGUiLCJjc3MiLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiLCJmYVNvcnRVcCIsInVwdm90ZUNvbG9yIiwic3R5bGUiLCJjb2xvciIsIm1hcmdpbiIsInZvdGVzIiwiZmFTb3J0RG93biIsImRvd252b3RlQ29sb3IiLCJ3aWR0aCIsImJvZHkiLCJyZW1hcmtHZm0iLCJ1c2VyIiwidXNlcm5hbWUiLCJjcmVhdGVkQXQiLCJ1dWlkIiwicmVwdXRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxPQUF3QixHQUFHLFNBQTNCQSxPQUEyQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNqRCxNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQTlCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixLQUExQixDQUFiOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsSUFBSSxDQUFDSSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNwQ0UseURBQUksQ0FBQ0MsY0FBTCxDQUFvQk4sSUFBSSxDQUFDRyxDQUFELENBQXhCO0FBQ0Q7QUFDRixHQU5RLEVBTU4sRUFOTSxDQUFUOztBQVFBLE1BQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLFFBQUQsRUFBcUMsQ0FBRSxDQUFwRDs7QUFFQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBLGtHQXlEa0JDLDBFQXpEbEIsYUFBZSxtQkFBZjtBQUFBLGdCQUNHZCxRQUFRLENBQUNlLFFBQVQsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLE9BQUQ7QUFBQTs7QUFBQSw0QkFDckI7QUFBQSxzR0F1RGNILDBFQXZEZCxhQUFlLGtCQUFmO0FBQUEsa0NBQ0U7QUFBQSx3R0FzRFlBLDBFQXREWixhQUFlLE9BQWY7QUFBQSxvQ0FDRSxxRUFBQyw4RUFBRDtBQUNFLGtCQUFJLEVBQUVJLDBFQURSO0FBRUUsbUJBQUssRUFBRUMsV0FGVDtBQUdFLG1CQUFLLEVBQUVDLEtBSFQ7QUFJRSxrQkFBSSxFQUFFLElBSlI7QUFLRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1SLElBQUksQ0FBQyxRQUFELENBQVY7QUFBQTtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFRRTtBQUVFLG1CQUFLLEVBQUU7QUFBRVMscUJBQUssRUFBRSxTQUFUO0FBQW9CQyxzQkFBTSxFQUFFO0FBQTVCLGVBRlQ7QUFBQSwwR0E4Q1VSLDBFQTlDVixhQUNZLFlBRFo7QUFBQSx3QkFJR1M7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBY0UscUVBQUMsOEVBQUQ7QUFDRSxrQkFBSSxFQUFFQyw0RUFEUjtBQUVFLG1CQUFLLEVBQUVDLGFBRlQ7QUFHRSxtQkFBSyxFQUFFTCxLQUhUO0FBSUUsa0JBQUksRUFBRSxJQUpSO0FBS0UscUJBQU8sRUFBRTtBQUFBLHVCQUFNUixJQUFJLENBQUMsVUFBRCxDQUFWO0FBQUE7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQXVCRTtBQUFLLGlCQUFLLEVBQUU7QUFBRWMsbUJBQUssRUFBRTtBQUFULGFBQVo7QUFBQSx3R0FnQ1laLDBFQWhDWjtBQUFBLG9DQUNFLHFFQUFDLHFEQUFEO0FBQ0UsdUJBQVMsRUFBQyxvQkFEWjtBQUVFLG9CQUFNLEVBQUVHLE9BQU8sQ0FBQ1UsSUFGbEI7QUFHRSxxQkFBTyxFQUFFLENBQUNDLGlEQUFEO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU1FO0FBQUEsMEdBMEJVZCwwRUExQlYsYUFBZSxNQUFmO0FBQUEscUNBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxvQkFBSSxFQUFFLFVBRFI7QUFFRSx3QkFBUSxFQUFFRyxPQUFPLENBQUNZLElBQVIsQ0FBYUMsUUFGekI7QUFHRSx5QkFBUyxFQUFFYixPQUFPLENBQUNjLFNBSHJCO0FBSUUsd0JBQVEsRUFBRWQsT0FBTyxDQUFDWSxJQUFSLENBQWFHLElBSnpCO0FBS0Usd0JBQVEsRUFBRS9CLFdBQUYsYUFBRUEsV0FBRiw0Q0FBRUEsV0FBVyxDQUFFNEIsSUFBZixzREFBRSxrQkFBbUJHLElBTC9CO0FBTUUsMEJBQVUsRUFBRWYsT0FBTyxDQUFDWSxJQUFSLENBQWFJO0FBTjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2QkY7QUFBQSxXQUF1Q2hCLE9BQU8sQ0FBQ2UsSUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEcUI7QUFBQSxPQUF0QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUEsZ0JBMERvQmxCLDBFQTFEcEI7QUFBQSx3T0EwRG9CQSwwRUExRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpRkQsQ0E5RkQ7O0dBQU1mLE87O0tBQUFBLE87QUFnR1NBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BbnN3ZXJzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuaW1wb3J0IGhsanMgZnJvbSBcImhpZ2hsaWdodC5qc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFTb3J0VXAsIGZhU29ydERvd24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmltcG9ydCB7IFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IEFza2VkQnkgZnJvbSBcIi4vQXNrZWRCeVwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBxdWVzdGlvbjogUXVlc3Rpb25UeXBlO1xufVxuXG5jb25zdCBBbnN3ZXJzOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBxdWVzdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInByZVwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayhwcmVzW2ldKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCB2b3RlID0gKHZvdGVUeXBlOiBcInVwdm90ZVwiIHwgXCJkb3dudm90ZVwiKSA9PiB7fTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2Vycy1jb250YWluZXJcIj5cbiAgICAgICAge3F1ZXN0aW9uLmNvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyLWNvbnRhaW5lclwiIGtleT17Y29tbWVudC51dWlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZXNcIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhU29ydFVwfVxuICAgICAgICAgICAgICAgIGNvbG9yPXt1cHZvdGVDb2xvcn1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgc2l6ZT17XCIyeFwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJ1cHZvdGVcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidm90ZS1jb3VudFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2M2YzZjNlwiLCBtYXJnaW46IFwiLThweCAwXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt2b3Rlc31cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTb3J0RG93bn1cbiAgICAgICAgICAgICAgICBjb2xvcj17ZG93bnZvdGVDb2xvcn1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgc2l6ZT17XCIyeFwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJkb3dudm90ZVwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI5NSVcIiB9fT5cbiAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3IGFuc3dlci1wcmVcIlxuICAgICAgICAgICAgICAgIHNvdXJjZT17Y29tbWVudC5ib2R5fVxuICAgICAgICAgICAgICAgIHBsdWdpbnM9e1tyZW1hcmtHZm1dfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICAgICAgICA8QXNrZWRCeVxuICAgICAgICAgICAgICAgICAgdHlwZT17XCJhbnN3ZXJlZFwifVxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e2NvbW1lbnQudXNlci51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdD17Y29tbWVudC5jcmVhdGVkQXR9XG4gICAgICAgICAgICAgICAgICBwb3N0VXVpZD17Y29tbWVudC51c2VyLnV1aWR9XG4gICAgICAgICAgICAgICAgICB1c2VyVXVpZD17dXNlckNvbnRleHQ/LnVzZXI/LnV1aWR9XG4gICAgICAgICAgICAgICAgICByZXB1dGF0aW9uPXtjb21tZW50LnVzZXIucmVwdXRhdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hbnN3ZXJzLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0byA3MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFuc3dlci1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDVweCAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuZmxvYXRpbmdQb3N0QmFja2dyb3VuZH07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAudXNlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnZvdGVzIHtcbiAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5zd2VycztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Answers.tsx\n");

/***/ })

})