webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Reply.tsx":
/*!******************************!*\
  !*** ./components/Reply.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Reply.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Reply = function Reply(_ref) {\n  _s();\n\n  var question = _ref.question;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_11__[\"UserContext\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n\n  var postAnswer = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var errMsg;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              errMsg = document.getElementById(\"err-msg\");\n\n              if (!userContext.user) {\n                _context.next = 6;\n                break;\n              }\n\n              fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_9__[\"default\"], \"/posts/\").concat(question.uuid, \"/comments\"), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\",\n                  Authorization: \"Bearer \".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_10__[\"getCookie\"])(\"token\"))\n                },\n                body: JSON.stringify({\n                  userUuid: userContext.user.uuid,\n                  body: text\n                })\n              });\n              _context.next = 8;\n              break;\n\n            case 6:\n              _context.next = 8;\n              return router.push(\"/auth/signup\");\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function postAnswer(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButtonHover\"]]]]) + \" \" + \"reply-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n        onSubmit: postAnswer,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButtonHover\"]]]]),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"textarea\", {\n          id: \"reply\",\n          required: true,\n          placeholder: \"Reply to this question\",\n          value: text,\n          onChange: function onChange(e) {\n            setText(e.target.value);\n            window.scrollBy(0, 100);\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButtonHover\"]]]]) + \" \" + \"reply-form-textarea\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButtonHover\"]]]]) + \" \" + \"reply-btn\",\n          children: \"Post your Answer\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          id: \"err-msg\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButtonHover\"]]]]) + \" \" + \"err-msg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          className: \"preview reply-preview\",\n          source: text,\n          plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1671903266\",\n      dynamic: [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButtonHover\"]],\n      children: \".reply-container.__jsx-style-dynamic-selector{width:82%;margin:40px auto;}.reply-form-textarea.__jsx-style-dynamic-selector{width:100%;resize:none;display:block;height:\".concat(text.length === 0 ? \"120px\" : \"200px\", \";background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], \";color:#ffffff;border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], \";padding:15px;}.reply-form-textarea.__jsx-style-dynamic-selector:focus{height:200px;}.reply-btn.__jsx-style-dynamic-selector{margin:20px 10px;float:right;border:none;color:#fff;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButton\"], \";border-radius:3px;padding:7px 10px;cursor:pointer;}.reply-btn.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButtonHover\"], \";}.err-msg.__jsx-style-dynamic-selector{color:red;margin:20px 0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9SZXBseS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVrQixBQUdxQixBQUtDLEFBV0UsQUFJSSxBQVd1QixBQUk5QixVQWxDTyxBQW1DSCxDQTlCRixFQVdkLElBSWMsTUFkRSxDQThCaEIsR0FuQ0EsRUFvQmMsUUFkd0IsR0F3QnRDLENBVGEsV0FDNkIscUJBZkEsbUJBZ0J0QixrQkFDRCxHQWhCSCxjQUNnQyxBQWdCL0IsZUFDakIsK0JBaEJlLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9jb21wb25lbnRzL1JlcGx5LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBxdWVzdGlvbjogUXVlc3Rpb25UeXBlO1xufVxuXG5jb25zdCBSZXBseTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcXVlc3Rpb24gfSkgPT4ge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBwb3N0QW5zd2VyID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlcnJNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVyci1tc2dcIikgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgZmV0Y2goYCR7aG9zdH0vcG9zdHMvJHtxdWVzdGlvbi51dWlkfS9jb21tZW50c2AsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdXNlclV1aWQ6IHVzZXJDb250ZXh0LnVzZXIudXVpZCxcbiAgICAgICAgICBib2R5OiB0ZXh0LFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCByb3V0ZXIucHVzaChcIi9hdXRoL3NpZ251cFwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGx5LWNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17cG9zdEFuc3dlcn0+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBpZD1cInJlcGx5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlcGx5LWZvcm0tdGV4dGFyZWFcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlJlcGx5IHRvIHRoaXMgcXVlc3Rpb25cIn1cbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgMTAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlcGx5LWJ0blwiIHR5cGU9e1wic3VibWl0XCJ9PlxuICAgICAgICAgICAgUG9zdCB5b3VyIEFuc3dlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyLW1zZ1wiIGlkPVwiZXJyLW1zZ1wiIC8+XG4gICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXcgcmVwbHktcHJldmlld1wiXG4gICAgICAgICAgICBzb3VyY2U9e3RleHR9XG4gICAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmVwbHktY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogODIlO1xuICAgICAgICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcGx5LWZvcm0tdGV4dGFyZWEge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBoZWlnaHQ6ICR7dGV4dC5sZW5ndGggPT09IDAgPyBcIjEyMHB4XCIgOiBcIjIwMHB4XCJ9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwbHktZm9ybS10ZXh0YXJlYTpmb2N1cyB7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBseS1idG4ge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBseS1idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b25Ib3Zlcn07XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyLW1zZyB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBseTtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Reply.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Reply, \"5txUqqiZ38LgqrTQp34pIFZRoNk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"]];\n});\n\n_c = Reply;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reply);\n\nvar _c;\n\n$RefreshReg$(_c, \"Reply\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXBseS50c3g/MmZiYiJdLCJuYW1lcyI6WyJSZXBseSIsInF1ZXN0aW9uIiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdEFuc3dlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVyck1zZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VyIiwiZmV0Y2giLCJob3N0IiwidXVpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0Q29va2llIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyVXVpZCIsInB1c2giLCJsZW5ndGgiLCJjc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpbmRvdyIsInNjcm9sbEJ5IiwicmVtYXJrR2ZtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBTUEsSUFBTUEsS0FBc0IsR0FBRyxTQUF6QkEsS0FBeUIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ3ZCQyxzREFBUSxDQUFTLEVBQVQsQ0FEZTtBQUFBLE1BQ3hDQyxJQUR3QztBQUFBLE1BQ2xDQyxPQURrQzs7QUFFL0MsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE5QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsVUFBVTtBQUFBLGlNQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQkEsZUFBQyxDQUFDQyxjQUFGO0FBRU1DLG9CQUhXLEdBR0ZDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUhFOztBQUFBLG1C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QUFBLGFBREY7QUFBQTtBQUFBLGdCQW9DZ0JoQyxJQUFJLENBQUMwQixNQUFMLEtBQWdCLENBQWhCLEdBQW9CLE9BQXBCLEdBQThCLE9BcEM5QyxFQXFDb0JDLG1FQXJDcEIsRUF1QzBCQSwrREF2QzFCLEVBb0RvQkEsOERBcERwQixFQTJEb0JBLG1FQTNEcEI7QUFBQSxrTUFvQ2dCM0IsSUFBSSxDQUFDMEIsTUFBTCxLQUFnQixDQUFoQixHQUFvQixPQUFwQixHQUE4QixPQXBDOUMseUJBcUNvQkMsbUVBckNwQiw2Q0F1QzBCQSwrREF2QzFCLHlNQW9Eb0JBLDhEQXBEcEIsMEhBMkRvQkEsbUVBM0RwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0VELENBakdEOztHQUFNOUIsSztVQUdXUyxxRDs7O0tBSFhULEs7QUFtR1NBLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXBseS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgUXVlc3Rpb25UeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL2luZGl2aWR1YWxRdWVzdGlvblR5cGVcIjtcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCIuLi91dGlscy9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgUmVwbHk6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHF1ZXN0aW9uIH0pID0+IHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgcG9zdEFuc3dlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZXJyTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnItbXNnXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgaWYgKHVzZXJDb250ZXh0LnVzZXIpIHtcbiAgICAgIGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7cXVlc3Rpb24udXVpZH0vY29tbWVudHNgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKFwidG9rZW5cIil9YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgICAgYm9keTogdGV4dCxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgcm91dGVyLnB1c2goXCIvYXV0aC9zaWdudXBcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBseS1jb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3Bvc3RBbnN3ZXJ9PlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgaWQ9XCJyZXBseVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZXBseS1mb3JtLXRleHRhcmVhXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJSZXBseSB0byB0aGlzIHF1ZXN0aW9uXCJ9XG4gICAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIDEwMCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZXBseS1idG5cIiB0eXBlPXtcInN1Ym1pdFwifT5cbiAgICAgICAgICAgIFBvc3QgeW91ciBBbnN3ZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVyci1tc2dcIiBpZD1cImVyci1tc2dcIiAvPlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3IHJlcGx5LXByZXZpZXdcIlxuICAgICAgICAgICAgc291cmNlPXt0ZXh0fVxuICAgICAgICAgICAgcGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJlcGx5LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDgyJTtcbiAgICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBseS1mb3JtLXRleHRhcmVhIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAke3RleHQubGVuZ3RoID09PSAwID8gXCIxMjBweFwiIDogXCIyMDBweFwifTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcGx5LWZvcm0tdGV4dGFyZWE6Zm9jdXMge1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwbHktYnRuIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b259O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwbHktYnRuOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5tYWluQnV0dG9uSG92ZXJ9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVyci1tc2cge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwbHk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Reply.tsx\n");

/***/ })

})