webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Answers.tsx":
/*!********************************!*\
  !*** ./components/Answers.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _AskedBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AskedBy */ \"./components/AskedBy.tsx\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Answers.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Answers = function Answers(_ref) {\n  _s();\n\n  var question = _ref.question;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(question.votes),\n      votes = _useState[0],\n      setVotes = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"grey\"),\n      upvoteColor = _useState2[0],\n      setUpvoteColor = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"grey\"),\n      downvoteColor = _useState3[0],\n      setDownvoteColor = _useState3[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_9__[\"UserContext\"]);\n  var style = {\n    cursor: \"pointer\"\n  };\n\n  var vote = function vote(voteType) {};\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4042473474\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]) + \" \" + \"answers-container\",\n      children: question.comments.map(function (comment) {\n        var _userContext$user;\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4042473474\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]) + \" \" + \"answer-container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4042473474\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]) + \" \" + \"votes\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faSortUp\"],\n              color: upvoteColor,\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"upvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              style: {\n                color: \"#c6c6c6\",\n                margin: \"-8px 0\"\n              },\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4042473474\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]) + \" \" + \"vote-count\",\n              children: votes\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faSortDown\"],\n              color: downvoteColor,\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"downvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              width: \"95%\"\n            },\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4042473474\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              className: \"preview answer-pre\",\n              source: comment.body,\n              plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_4___default.a]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4042473474\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]]]]) + \" \" + \"user\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_AskedBy__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                type: \"answered\",\n                username: comment.user.username,\n                createdAt: comment.createdAt,\n                postUuid: comment.user.uuid,\n                userUuid: userContext === null || userContext === void 0 ? void 0 : (_userContext$user = userContext.user) === null || _userContext$user === void 0 ? void 0 : _userContext$user.uuid,\n                reputation: comment.user.reputation\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this)]\n        }, comment.uuid, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"4042473474\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"]],\n      children: \".answers-container.__jsx-style-dynamic-selector{width:85%;margin:0 auto 70px;}.answer-container.__jsx-style-dynamic-selector{width:100%;margin-bottom:30px;padding:5px 5px 20px;border-radius:10px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"floatingPostBackground\"], \";position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.user.__jsx-style-dynamic-selector{position:absolute;bottom:10px;right:5px;}.votes.__jsx-style-dynamic-selector{width:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-top:14px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9BbnN3ZXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRWtCLEFBR3FCLEFBS0MsQUFVTyxBQU1ULFNBQ0ksQ0FyQk0sQ0FLQSxPQVVQLFdBZGQsQ0FLdUIsQUFVWCxVQUNaLFdBVnFCLG1CQUNxQixhQWNsQiwyQkFiSixrQkFDTCxpQ0FhTSx5Q0FackIsb0RBYTZCLHlHQUNYLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvQW5zd2Vycy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5pbXBvcnQgaGxqcyBmcm9tIFwiaGlnaGxpZ2h0LmpzXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYVNvcnRVcCwgZmFTb3J0RG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxuaW1wb3J0IHsgUXVlc3Rpb25UeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL2luZGl2aWR1YWxRdWVzdGlvblR5cGVcIjtcbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgQXNrZWRCeSBmcm9tIFwiLi9Bc2tlZEJ5XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHF1ZXN0aW9uOiBRdWVzdGlvblR5cGU7XG59XG5cbmNvbnN0IEFuc3dlcnM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHF1ZXN0aW9uIH0pID0+IHtcbiAgY29uc3QgW3ZvdGVzLCBzZXRWb3Rlc10gPSB1c2VTdGF0ZTxudW1iZXI+KHF1ZXN0aW9uLnZvdGVzKTtcbiAgY29uc3QgW3Vwdm90ZUNvbG9yLCBzZXRVcHZvdGVDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiZ3JleVwiKTtcbiAgY29uc3QgW2Rvd252b3RlQ29sb3IsIHNldERvd252b3RlQ29sb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcImdyZXlcIik7XG5cbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcblxuICBjb25zdCBzdHlsZSA9IHsgY3Vyc29yOiBcInBvaW50ZXJcIiB9O1xuXG4gIGNvbnN0IHZvdGUgPSAodm90ZVR5cGU6IFwidXB2b3RlXCIgfCBcImRvd252b3RlXCIpID0+IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJzLWNvbnRhaW5lclwiPlxuICAgICAgICB7cXVlc3Rpb24uY29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItY29udGFpbmVyXCIga2V5PXtjb21tZW50LnV1aWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3Rlc1wiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTb3J0VXB9XG4gICAgICAgICAgICAgICAgY29sb3I9e3Vwdm90ZUNvbG9yfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBzaXplPXtcIjJ4XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcInVwdm90ZVwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2b3RlLWNvdW50XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjYzZjNmM2XCIsIG1hcmdpbjogXCItOHB4IDBcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3ZvdGVzfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYVNvcnREb3dufVxuICAgICAgICAgICAgICAgIGNvbG9yPXtkb3dudm90ZUNvbG9yfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBzaXplPXtcIjJ4XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcImRvd252b3RlXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjk1JVwiIH19PlxuICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXcgYW5zd2VyLXByZVwiXG4gICAgICAgICAgICAgICAgc291cmNlPXtjb21tZW50LmJvZHl9XG4gICAgICAgICAgICAgICAgcGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgICAgICAgIDxBc2tlZEJ5XG4gICAgICAgICAgICAgICAgICB0eXBlPXtcImFuc3dlcmVkXCJ9XG4gICAgICAgICAgICAgICAgICB1c2VybmFtZT17Y29tbWVudC51c2VyLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0PXtjb21tZW50LmNyZWF0ZWRBdH1cbiAgICAgICAgICAgICAgICAgIHBvc3RVdWlkPXtjb21tZW50LnVzZXIudXVpZH1cbiAgICAgICAgICAgICAgICAgIHVzZXJVdWlkPXt1c2VyQ29udGV4dD8udXNlcj8udXVpZH1cbiAgICAgICAgICAgICAgICAgIHJlcHV0YXRpb249e2NvbW1lbnQudXNlci5yZXB1dGF0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmFuc3dlcnMtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDcwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYW5zd2VyLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5mbG9hdGluZ1Bvc3RCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudm90ZXMge1xuICAgICAgICAgIHdpZHRoOiA1JTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbnN3ZXJzO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Answers.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Answers, \"Us79/i7lirewbzI3esfXHcV5xBc=\");\n\n_c = Answers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Answers);\n\nvar _c;\n\n$RefreshReg$(_c, \"Answers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbnN3ZXJzLnRzeD9lZmIzIl0sIm5hbWVzIjpbIkFuc3dlcnMiLCJxdWVzdGlvbiIsInVzZVN0YXRlIiwidm90ZXMiLCJzZXRWb3RlcyIsInVwdm90ZUNvbG9yIiwic2V0VXB2b3RlQ29sb3IiLCJkb3dudm90ZUNvbG9yIiwic2V0RG93bnZvdGVDb2xvciIsInVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0Iiwic3R5bGUiLCJjdXJzb3IiLCJ2b3RlIiwidm90ZVR5cGUiLCJjc3MiLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiLCJmYVNvcnRVcCIsImNvbG9yIiwibWFyZ2luIiwiZmFTb3J0RG93biIsIndpZHRoIiwiYm9keSIsInJlbWFya0dmbSIsInVzZXIiLCJ1c2VybmFtZSIsImNyZWF0ZWRBdCIsInV1aWQiLCJyZXB1dGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsT0FBd0IsR0FBRyxTQUEzQkEsT0FBMkIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ3ZCQyxzREFBUSxDQUFTRCxRQUFRLENBQUNFLEtBQWxCLENBRGU7QUFBQSxNQUMxQ0EsS0FEMEM7QUFBQSxNQUNuQ0MsUUFEbUM7O0FBQUEsbUJBRVhGLHNEQUFRLENBQVMsTUFBVCxDQUZHO0FBQUEsTUFFMUNHLFdBRjBDO0FBQUEsTUFFN0JDLGNBRjZCOztBQUFBLG1CQUdQSixzREFBUSxDQUFTLE1BQVQsQ0FIRDtBQUFBLE1BRzFDSyxhQUgwQztBQUFBLE1BRzNCQyxnQkFIMkI7O0FBS2pELE1BQU1DLFdBQVcsR0FBR0Msd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FBOUI7QUFFQSxNQUFNQyxLQUFLLEdBQUc7QUFBRUMsVUFBTSxFQUFFO0FBQVYsR0FBZDs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxRQUFELEVBQXFDLENBQUUsQ0FBcEQ7O0FBRUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBQSxrR0F5RGtCQywwRUF6RGxCLGFBQWUsbUJBQWY7QUFBQSxnQkFDR2YsUUFBUSxDQUFDZ0IsUUFBVCxDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsT0FBRDtBQUFBOztBQUFBLDRCQUNyQjtBQUFBLHNHQXVEY0gsMEVBdkRkLGFBQWUsa0JBQWY7QUFBQSxrQ0FDRTtBQUFBLHdHQXNEWUEsMEVBdERaLGFBQWUsT0FBZjtBQUFBLG9DQUNFLHFFQUFDLDhFQUFEO0FBQ0Usa0JBQUksRUFBRUksMEVBRFI7QUFFRSxtQkFBSyxFQUFFZixXQUZUO0FBR0UsbUJBQUssRUFBRU8sS0FIVDtBQUlFLGtCQUFJLEVBQUUsSUFKUjtBQUtFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUUsSUFBSSxDQUFDLFFBQUQsQ0FBVjtBQUFBO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVFFO0FBRUUsbUJBQUssRUFBRTtBQUFFTyxxQkFBSyxFQUFFLFNBQVQ7QUFBb0JDLHNCQUFNLEVBQUU7QUFBNUIsZUFGVDtBQUFBLDBHQThDVU4sMEVBOUNWLGFBQ1ksWUFEWjtBQUFBLHdCQUlHYjtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFjRSxxRUFBQyw4RUFBRDtBQUNFLGtCQUFJLEVBQUVvQiw0RUFEUjtBQUVFLG1CQUFLLEVBQUVoQixhQUZUO0FBR0UsbUJBQUssRUFBRUssS0FIVDtBQUlFLGtCQUFJLEVBQUUsSUFKUjtBQUtFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUUsSUFBSSxDQUFDLFVBQUQsQ0FBVjtBQUFBO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUF1QkU7QUFBSyxpQkFBSyxFQUFFO0FBQUVVLG1CQUFLLEVBQUU7QUFBVCxhQUFaO0FBQUEsd0dBZ0NZUiwwRUFoQ1o7QUFBQSxvQ0FDRSxxRUFBQyxxREFBRDtBQUNFLHVCQUFTLEVBQUMsb0JBRFo7QUFFRSxvQkFBTSxFQUFFRyxPQUFPLENBQUNNLElBRmxCO0FBR0UscUJBQU8sRUFBRSxDQUFDQyxpREFBRDtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFNRTtBQUFBLDBHQTBCVVYsMEVBMUJWLGFBQWUsTUFBZjtBQUFBLHFDQUNFLHFFQUFDLGdEQUFEO0FBQ0Usb0JBQUksRUFBRSxVQURSO0FBRUUsd0JBQVEsRUFBRUcsT0FBTyxDQUFDUSxJQUFSLENBQWFDLFFBRnpCO0FBR0UseUJBQVMsRUFBRVQsT0FBTyxDQUFDVSxTQUhyQjtBQUlFLHdCQUFRLEVBQUVWLE9BQU8sQ0FBQ1EsSUFBUixDQUFhRyxJQUp6QjtBQUtFLHdCQUFRLEVBQUVyQixXQUFGLGFBQUVBLFdBQUYsNENBQUVBLFdBQVcsQ0FBRWtCLElBQWYsc0RBQUUsa0JBQW1CRyxJQUwvQjtBQU1FLDBCQUFVLEVBQUVYLE9BQU8sQ0FBQ1EsSUFBUixDQUFhSTtBQU4zQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJGO0FBQUEsV0FBdUNaLE9BQU8sQ0FBQ1csSUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEcUI7QUFBQSxPQUF0QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUEsZ0JBMERvQmQsMEVBMURwQjtBQUFBLHdPQTBEb0JBLDBFQTFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlGRCxDQTVGRDs7R0FBTWhCLE87O0tBQUFBLE87QUE4RlNBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BbnN3ZXJzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCBobGpzIGZyb20gXCJoaWdobGlnaHQuanNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhU29ydFVwLCBmYVNvcnREb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBBc2tlZEJ5IGZyb20gXCIuL0Fza2VkQnlcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgQW5zd2VyczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcXVlc3Rpb24gfSkgPT4ge1xuICBjb25zdCBbdm90ZXMsIHNldFZvdGVzXSA9IHVzZVN0YXRlPG51bWJlcj4ocXVlc3Rpb24udm90ZXMpO1xuICBjb25zdCBbdXB2b3RlQ29sb3IsIHNldFVwdm90ZUNvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJncmV5XCIpO1xuICBjb25zdCBbZG93bnZvdGVDb2xvciwgc2V0RG93bnZvdGVDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiZ3JleVwiKTtcblxuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIGNvbnN0IHN0eWxlID0geyBjdXJzb3I6IFwicG9pbnRlclwiIH07XG5cbiAgY29uc3Qgdm90ZSA9ICh2b3RlVHlwZTogXCJ1cHZvdGVcIiB8IFwiZG93bnZvdGVcIikgPT4ge307XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlcnMtY29udGFpbmVyXCI+XG4gICAgICAgIHtxdWVzdGlvbi5jb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlci1jb250YWluZXJcIiBrZXk9e2NvbW1lbnQudXVpZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGVzXCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYVNvcnRVcH1cbiAgICAgICAgICAgICAgICBjb2xvcj17dXB2b3RlQ29sb3J9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIHNpemU9e1wiMnhcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b3RlKFwidXB2b3RlXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZvdGUtY291bnRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiNjNmM2YzZcIiwgbWFyZ2luOiBcIi04cHggMFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dm90ZXN9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhU29ydERvd259XG4gICAgICAgICAgICAgICAgY29sb3I9e2Rvd252b3RlQ29sb3J9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIHNpemU9e1wiMnhcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b3RlKFwiZG93bnZvdGVcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiOTUlXCIgfX0+XG4gICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlldyBhbnN3ZXItcHJlXCJcbiAgICAgICAgICAgICAgICBzb3VyY2U9e2NvbW1lbnQuYm9keX1cbiAgICAgICAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgICAgICAgPEFza2VkQnlcbiAgICAgICAgICAgICAgICAgIHR5cGU9e1wiYW5zd2VyZWRcIn1cbiAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtjb21tZW50LnVzZXIudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e2NvbW1lbnQuY3JlYXRlZEF0fVxuICAgICAgICAgICAgICAgICAgcG9zdFV1aWQ9e2NvbW1lbnQudXNlci51dWlkfVxuICAgICAgICAgICAgICAgICAgdXNlclV1aWQ9e3VzZXJDb250ZXh0Py51c2VyPy51dWlkfVxuICAgICAgICAgICAgICAgICAgcmVwdXRhdGlvbj17Y29tbWVudC51c2VyLnJlcHV0YXRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYW5zd2Vycy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gNzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hbnN3ZXItY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmZsb2F0aW5nUG9zdEJhY2tncm91bmR9O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3RlcyB7XG4gICAgICAgICAgd2lkdGg6IDUlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuc3dlcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Answers.tsx\n");

/***/ })

})