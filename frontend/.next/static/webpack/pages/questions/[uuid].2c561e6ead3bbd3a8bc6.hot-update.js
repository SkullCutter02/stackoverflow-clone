webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/EditAnswer.tsx":
/*!***********************************!*\
  !*** ./components/EditAnswer.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Spinner */ \"./components/Spinner.tsx\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/EditAnswer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar EditAnswer = function EditAnswer(_ref) {\n  _s();\n\n  var setEditMode = _ref.setEditMode,\n      comment = _ref.comment;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(comment.body),\n      body = _useState[0],\n      setBody = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"Save\"),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_8__[\"UserContext\"]);\n  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQueryClient\"])();\n  var spinner = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var editForm = function editForm(e) {\n    e.preventDefault();\n\n    if (userContext.user) {\n      spinner.current.style.display = \"block\";\n      setText(\"\");\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3034814656\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"cancelButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"cancelButtonHover\"]]]]) + \" \" + \"edit-answer-body\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n        id: \"edit-form-body\",\n        cols: 30,\n        rows: 10,\n        value: body,\n        onChange: function onChange(e) {\n          return setBody(e.target.value);\n        },\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3034814656\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"cancelButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"cancelButtonHover\"]]]])\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        className: \"preview edit-answer-preview\",\n        source: body,\n        plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_4___default.a]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3034814656\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"cancelButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"cancelButtonHover\"]]]]) + \" \" + \"buttons-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3034814656\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"cancelButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"cancelButtonHover\"]]]]) + \" \" + \"save\",\n          children: [text, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Spinner__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            spinner: spinner\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            var confirm = window.confirm(\"Are you sure to discard your changes?\");\n\n            if (confirm) {\n              setEditMode(false);\n              window.scrollTo(0, -1000);\n            }\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3034814656\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"cancelButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"cancelButtonHover\"]]]]) + \" \" + \"cancel\",\n          children: \"Cancel\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3034814656\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"cancelButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"cancelButtonHover\"]],\n      children: \".edit-answer-body.__jsx-style-dynamic-selector{margin:20px auto;width:90%;}#edit-form-body.__jsx-style-dynamic-selector{width:100%;resize:none;height:200px;margin-bottom:20px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBackground\"], \";border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"inputBorder\"], \";color:#fff;padding:15px;}.buttons-container.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:-10px;}button.__jsx-style-dynamic-selector{margin-left:20px;border:none;border-radius:4px;width:80px;height:25px;cursor:pointer;color:#fff;font-size:0.8rem;}.save.__jsx-style-dynamic-selector{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButton\"], \";}.save.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"mainButtonHover\"], \";}.cancel.__jsx-style-dynamic-selector{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"cancelButton\"], \";}.cancel.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_6__[\"cancelButtonHover\"], \";}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9FZGl0QW5zd2VyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRWtCLEFBRzRCLEFBS04sQUFXQSxBQU9NLEFBV3VCLEFBSUEsQUFJQSxBQUlBLFdBeEM1QixBQVdDLE1BaEJILEFBdUJFLE1BakJDLElBTGYsRUF1Qm9CLE9BakJDLElBMkJyQixBQUlBLEFBSUEsQUFJQSxPQXJCYSxRQWpCNkIsR0FrQjVCLFlBQ0csZUFWVSxBQVdkLFVBbkJtQyxDQW9CN0IsaUJBQ25CLDRCQXBCYSxXQUNFLGFBQ2YsaUJBTXNCLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvRWRpdEFuc3dlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IHsgQ29tbWVudFR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vU3Bpbm5lclwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZXRFZGl0TW9kZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xuICBjb21tZW50OiBDb21tZW50VHlwZTtcbn1cblxuY29uc3QgRWRpdEFuc3dlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgc2V0RWRpdE1vZGUsIGNvbW1lbnQgfSkgPT4ge1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZTxzdHJpbmc+KGNvbW1lbnQuYm9keSk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJTYXZlXCIpO1xuXG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgY29uc3Qgc3Bpbm5lciA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgZWRpdEZvcm0gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh1c2VyQ29udGV4dC51c2VyKSB7XG4gICAgICBzcGlubmVyLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHNldFRleHQoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZWRpdC1hbnN3ZXItYm9keVwiPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cImVkaXQtZm9ybS1ib2R5XCJcbiAgICAgICAgICBjb2xzPXszMH1cbiAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICB2YWx1ZT17Ym9keX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJvZHkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXcgZWRpdC1hbnN3ZXItcHJldmlld1wiXG4gICAgICAgICAgc291cmNlPXtib2R5fVxuICAgICAgICAgIHBsdWdpbnM9e1tyZW1hcmtHZm1dfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzYXZlXCI+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgIDxTcGlubmVyIHNwaW5uZXI9e3NwaW5uZXJ9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb25maXJtID0gd2luZG93LmNvbmZpcm0oXG4gICAgICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgdG8gZGlzY2FyZCB5b3VyIGNoYW5nZXM/XCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKGNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICBzZXRFZGl0TW9kZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIC0xMDAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbmNlbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5lZGl0LWFuc3dlci1ib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgI2VkaXQtZm9ybS1ib2R5IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9ucy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNhdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b259O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNhdmU6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b25Ib3Zlcn07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FuY2VsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5jYW5jZWxCdXR0b259O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhbmNlbDpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuY2FuY2VsQnV0dG9uSG92ZXJ9O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRBbnN3ZXI7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/EditAnswer.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EditAnswer, \"2zKKq6TXTfd6SDbyUFhx0TM/rts=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQueryClient\"]];\n});\n\n_c = EditAnswer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditAnswer);\n\nvar _c;\n\n$RefreshReg$(_c, \"EditAnswer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0QW5zd2VyLnRzeD9iNzJkIl0sIm5hbWVzIjpbIkVkaXRBbnN3ZXIiLCJzZXRFZGl0TW9kZSIsImNvbW1lbnQiLCJ1c2VTdGF0ZSIsImJvZHkiLCJzZXRCb2R5IiwidGV4dCIsInNldFRleHQiLCJ1c2VyQ29udGV4dCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInF1ZXJ5Q2xpZW50IiwidXNlUXVlcnlDbGllbnQiLCJzcGlubmVyIiwidXNlUmVmIiwiZWRpdEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwiY3VycmVudCIsInN0eWxlIiwiZGlzcGxheSIsImNzcyIsInRhcmdldCIsInZhbHVlIiwicmVtYXJrR2ZtIiwiY29uZmlybSIsIndpbmRvdyIsInNjcm9sbFRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBT0EsSUFBTUEsVUFBMkIsR0FBRyxTQUE5QkEsVUFBOEIsT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsV0FBMkIsUUFBM0JBLFdBQTJCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUN4Q0Msc0RBQVEsQ0FBU0QsT0FBTyxDQUFDRSxJQUFqQixDQURnQztBQUFBLE1BQ3pEQSxJQUR5RDtBQUFBLE1BQ25EQyxPQURtRDs7QUFBQSxtQkFFeENGLHNEQUFRLENBQVMsTUFBVCxDQUZnQztBQUFBLE1BRXpERyxJQUZ5RDtBQUFBLE1BRW5EQyxPQUZtRDs7QUFJaEUsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxnRUFBRCxDQUE5QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0Msa0VBQWMsRUFBbEM7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLG9EQUFNLENBQWlCLElBQWpCLENBQXRCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztB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R1NBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9FZGl0QW5zd2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgeyBDb21tZW50VHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9TcGlubmVyXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNldEVkaXRNb2RlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XG4gIGNvbW1lbnQ6IENvbW1lbnRUeXBlO1xufVxuXG5jb25zdCBFZGl0QW5zd2VyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBzZXRFZGl0TW9kZSwgY29tbWVudCB9KSA9PiB7XG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlPHN0cmluZz4oY29tbWVudC5ib2R5KTtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlNhdmVcIik7XG5cbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuICBjb25zdCBzcGlubmVyID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBlZGl0Rm9ybSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHVzZXJDb250ZXh0LnVzZXIpIHtcbiAgICAgIHNwaW5uZXIuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgc2V0VGV4dChcIlwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJlZGl0LWFuc3dlci1ib2R5XCI+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPVwiZWRpdC1mb3JtLWJvZHlcIlxuICAgICAgICAgIGNvbHM9ezMwfVxuICAgICAgICAgIHJvd3M9ezEwfVxuICAgICAgICAgIHZhbHVlPXtib2R5fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Qm9keShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlldyBlZGl0LWFuc3dlci1wcmV2aWV3XCJcbiAgICAgICAgICBzb3VyY2U9e2JvZHl9XG4gICAgICAgICAgcGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNhdmVcIj5cbiAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgPFNwaW5uZXIgc3Bpbm5lcj17c3Bpbm5lcn0gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm0gPSB3aW5kb3cuY29uZmlybShcbiAgICAgICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB0byBkaXNjYXJkIHlvdXIgY2hhbmdlcz9cIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoY29uZmlybSkge1xuICAgICAgICAgICAgICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgLTEwMDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FuY2VsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmVkaXQtYW5zd2VyLWJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cblxuICAgICAgICAjZWRpdC1mb3JtLWJvZHkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaW5wdXRCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2Nzcy5pbnB1dEJvcmRlcn07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2F2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgIH1cblxuICAgICAgICAuc2F2ZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbkhvdmVyfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYW5jZWwge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmNhbmNlbEJ1dHRvbn07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FuY2VsOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5jYW5jZWxCdXR0b25Ib3Zlcn07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdEFuc3dlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/EditAnswer.tsx\n");

/***/ })

})