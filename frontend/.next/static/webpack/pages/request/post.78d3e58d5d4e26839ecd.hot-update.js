webpackHotUpdate_N_E("pages/request/post",{

/***/ "./pages/request/post.tsx":
/*!********************************!*\
  !*** ./pages/request/post.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/host */ \"./utils/host.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/request/post.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar RequestPostPage = function RequestPostPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"**Hello World!**\"),\n      body = _useState[0],\n      setBody = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      tags = _useState2[0],\n      setTags = _useState2[1];\n\n  var fetchCommunities = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var page,\n          filter,\n          res,\n          data,\n          _args = arguments;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;\n              filter = _args.length > 1 && _args[1] !== undefined ? _args[1] : \"\";\n              _context.next = 4;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_8__[\"default\"], \"/communities?page=\").concat(page, \"&limit=5&filter=\").concat(filter));\n\n            case 4:\n              res = _context.sent;\n              _context.next = 7;\n              return res.json();\n\n            case 7:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchCommunities() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (tags !== \"\") {}\n  }, [tags]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"2411153611\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"]]]]) + \" \" + \"post-form-heading\",\n      children: \"Ask a Question\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"2411153611\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"]]]]) + \" \" + \"post-form-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        id: \"title\",\n        placeholder: \"Title\",\n        required: true,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"2411153611\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"]]]]) + \" \" + \"post-form-input\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"textarea\", {\n        id: \"body\",\n        cols: 30,\n        rows: 10,\n        placeholder: \"Body\",\n        required: true,\n        value: body,\n        onChange: function onChange(e) {\n          return setBody(e.target.value);\n        },\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"2411153611\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"]]]]) + \" \" + \"post-form-body\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        className: \"preview\",\n        plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a],\n        source: body\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"2411153611\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"]]]]) + \" \" + \"tags\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          placeholder: \"Tags: (maximum 5) \",\n          value: tags,\n          onChange: function onChange(e) {\n            return setTags(e.target.value);\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"2411153611\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"]]]]) + \" \" + \"post-form-input\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"2411153611\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"]],\n      children: \".post-form-heading.__jsx-style-dynamic-selector{text-align:center;margin:30px 0;}.post-form-container.__jsx-style-dynamic-selector{width:65%;min-height:500px;border-radius:20px;margin:0 auto 50px;background:#3b3b3b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}input.__jsx-style-dynamic-selector,textarea.__jsx-style-dynamic-selector{display:block;}.post-form-input.__jsx-style-dynamic-selector{display:block;width:80%;height:40px;margin:30px 0;text-indent:15px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], \";color:#ffffff;border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"], \";font-size:0.8rem;}.post-form-body.__jsx-style-dynamic-selector{width:80%;resize:none;height:400px;margin-bottom:40px;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBackground\"], \";color:#ffffff;border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_7__[\"inputBorder\"], \";padding:15px;}.tags.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:-40px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvcmVxdWVzdC9wb3N0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRWtCLEFBRzZCLEFBS1IsQUFZSSxBQUlBLEFBWUosQUFXQyxVQXRDTSxBQTRCTCxDQVdDLEdBM0JmLEFBSVksSUFyQkksSUFrQ0QsRUFaRCxHQWhCTyxLQUxyQixHQWtDcUIsQ0FaTCxVQWhCSyxJQWlCRixJQVl1QixXQTVCckIsRUFpQnFCLGlCQWhCM0IsQ0FvQ1UsU0FSVCxhQVhBLENBWWdDLGFBWEEsaUNBWWpDLElBN0JTLFNBa0JMLEFBWW5CLGlCQVhBLEFBaUJtQixpQkFDbkIsbUNBcENxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9wYWdlcy9yZXF1ZXN0L3Bvc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vLi4vdXRpbHMvaG9zdFwiO1xuXG5jb25zdCBSZXF1ZXN0UG9zdFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiKipIZWxsbyBXb3JsZCEqKlwiKTtcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCBmZXRjaENvbW11bml0aWVzID0gYXN5bmMgKHBhZ2U6IG51bWJlciA9IDEsIGZpbHRlcjogc3RyaW5nID0gXCJcIikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7aG9zdH0vY29tbXVuaXRpZXM/cGFnZT0ke3BhZ2V9JmxpbWl0PTUmZmlsdGVyPSR7ZmlsdGVyfWBcbiAgICApO1xuICAgIGNvbnN0IGRhdGE6IERhdGFUeXBlID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0YWdzICE9PSBcIlwiKSB7XG4gICAgfVxuICB9LCBbdGFnc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInBvc3QtZm9ybS1oZWFkaW5nXCI+QXNrIGEgUXVlc3Rpb248L2gxPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicG9zdC1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicG9zdC1mb3JtLWlucHV0XCJcbiAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cImJvZHlcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3QtZm9ybS1ib2R5XCJcbiAgICAgICAgICBjb2xzPXszMH1cbiAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJvZHlcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlOiBDaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT5cbiAgICAgICAgICAgIHNldEJvZHkoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXdcIlxuICAgICAgICAgIHBsdWdpbnM9e1tyZW1hcmtHZm1dfVxuICAgICAgICAgIHNvdXJjZT17Ym9keX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0LWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUYWdzOiAobWF4aW11bSA1KSBcIlxuICAgICAgICAgICAgdmFsdWU9e3RhZ3N9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICBzZXRUYWdzKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wb3N0LWZvcm0taGVhZGluZyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtZm9ybS1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzYjNiM2I7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCxcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtZm9ybS1pbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaW5wdXRCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2Nzcy5pbnB1dEJvcmRlcn07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC1mb3JtLWJvZHkge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhZ3Mge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFBvc3RQYWdlO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/request/post.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(RequestPostPage, \"GLtBT+KcG3CifW7eH2Fl9e3CzQg=\");\n\n_c = RequestPostPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestPostPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"RequestPostPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVxdWVzdC9wb3N0LnRzeD84ZGI2Il0sIm5hbWVzIjpbIlJlcXVlc3RQb3N0UGFnZSIsInVzZVN0YXRlIiwiYm9keSIsInNldEJvZHkiLCJ0YWdzIiwic2V0VGFncyIsImZldGNoQ29tbXVuaXRpZXMiLCJwYWdlIiwiZmlsdGVyIiwiZmV0Y2giLCJob3N0IiwicmVzIiwianNvbiIsImRhdGEiLCJ1c2VFZmZlY3QiLCJjc3MiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZW1hcmtHZm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBLElBQU1BLGVBQXlCLEdBQUcsU0FBNUJBLGVBQTRCLEdBQU07QUFBQTs7QUFBQSxrQkFDZEMsc0RBQVEsQ0FBUyxrQkFBVCxDQURNO0FBQUEsTUFDL0JDLElBRCtCO0FBQUEsTUFDekJDLE9BRHlCOztBQUFBLG1CQUVkRixzREFBUSxDQUFTLEVBQVQsQ0FGTTtBQUFBLE1BRS9CRyxJQUYrQjtBQUFBLE1BRXpCQyxPQUZ5Qjs7QUFJdEMsTUFBTUMsZ0JBQWdCO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBT0Msa0JBQVAsMkRBQXNCLENBQXRCO0FBQXlCQyxvQkFBekIsMkRBQTBDLEVBQTFDO0FBQUE7QUFBQSxxQkFDTEMsS0FBSyxXQUNsQkMsbURBRGtCLCtCQUNPSCxJQURQLDZCQUM4QkMsTUFEOUIsRUFEQTs7QUFBQTtBQUNqQkcsaUJBRGlCO0FBQUE7QUFBQSxxQkFJTUEsR0FBRyxDQUFDQyxJQUFKLEVBSk47O0FBQUE7QUFJakJDLGtCQUppQjtBQUFBLCtDQUtoQkEsSUFMZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJQLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFRQVEseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVYsSUFBSSxLQUFLLEVBQWIsRUFBaUIsQ0FDaEI7QUFDRixHQUhRLEVBR04sQ0FBQ0EsSUFBRCxDQUhNLENBQVQ7QUFLQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBLGtHQW1Fa0JXLG1FQW5FbEIsRUFxRXdCQSwrREFyRXhCLEVBOEVrQkEsbUVBOUVsQixFQWdGd0JBLCtEQWhGeEIsYUFBYyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxrR0FrRWtCQSxtRUFsRWxCLEVBb0V3QkEsK0RBcEV4QixFQTZFa0JBLG1FQTdFbEIsRUErRXdCQSwrREEvRXhCLGFBQWdCLHFCQUFoQjtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFHRSxVQUFFLEVBQUMsT0FITDtBQUlFLG1CQUFXLEVBQUMsT0FKZDtBQUtFLGdCQUFRLE1BTFY7QUFBQSxvR0FpRWdCQSxtRUFqRWhCLEVBbUVzQkEsK0RBbkV0QixFQTRFZ0JBLG1FQTVFaEIsRUE4RXNCQSwrREE5RXRCLGFBRVk7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRTtBQUNFLFVBQUUsRUFBQyxNQURMO0FBR0UsWUFBSSxFQUFFLEVBSFI7QUFJRSxZQUFJLEVBQUUsRUFKUjtBQUtFLG1CQUFXLEVBQUMsTUFMZDtBQU1FLGdCQUFRLE1BTlY7QUFPRSxhQUFLLEVBQUViLElBUFQ7QUFRRSxnQkFBUSxFQUFFLGtCQUFDYyxDQUFEO0FBQUEsaUJBQ1JiLE9BQU8sQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FEQztBQUFBLFNBUlo7QUFBQSxvR0EwRGdCSCxtRUExRGhCLEVBNERzQkEsK0RBNUR0QixFQXFFZ0JBLG1FQXJFaEIsRUF1RXNCQSwrREF2RXRCLGFBRVk7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUFvQkUscUVBQUMscURBQUQ7QUFDRSxpQkFBUyxFQUFDLFNBRFo7QUFFRSxlQUFPLEVBQUUsQ0FBQ0ksaURBQUQsQ0FGWDtBQUdFLGNBQU0sRUFBRWpCO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRixlQXlCRTtBQUFBLG9HQXlDZ0JhLG1FQXpDaEIsRUEyQ3NCQSwrREEzQ3RCLEVBb0RnQkEsbUVBcERoQixFQXNEc0JBLCtEQXREdEIsYUFBZSxNQUFmO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUdFLHFCQUFXLEVBQUMsb0JBSGQ7QUFJRSxlQUFLLEVBQUVYLElBSlQ7QUFLRSxrQkFBUSxFQUFFLGtCQUFDWSxDQUFEO0FBQUEsbUJBQ1JYLE9BQU8sQ0FBQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FEQztBQUFBLFdBTFo7QUFBQSxzR0F3Q2NILG1FQXhDZCxFQTBDb0JBLCtEQTFDcEIsRUFtRGNBLG1FQW5EZCxFQXFEb0JBLCtEQXJEcEIsYUFFWTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQSxnQkFvRW9CQSxtRUFwRXBCLEVBc0UwQkEsK0RBdEUxQixFQStFb0JBLG1FQS9FcEIsRUFpRjBCQSwrREFqRjFCO0FBQUEsMnJCQW9Fb0JBLG1FQXBFcEIsNkNBc0UwQkEsK0RBdEUxQiw4SUErRW9CQSxtRUEvRXBCLDZDQWlGMEJBLCtEQWpGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStGRCxDQWhIRDs7R0FBTWYsZTs7S0FBQUEsZTtBQWtIU0EsOEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZXF1ZXN0L3Bvc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vLi4vdXRpbHMvaG9zdFwiO1xuXG5jb25zdCBSZXF1ZXN0UG9zdFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiKipIZWxsbyBXb3JsZCEqKlwiKTtcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCBmZXRjaENvbW11bml0aWVzID0gYXN5bmMgKHBhZ2U6IG51bWJlciA9IDEsIGZpbHRlcjogc3RyaW5nID0gXCJcIikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7aG9zdH0vY29tbXVuaXRpZXM/cGFnZT0ke3BhZ2V9JmxpbWl0PTUmZmlsdGVyPSR7ZmlsdGVyfWBcbiAgICApO1xuICAgIGNvbnN0IGRhdGE6IERhdGFUeXBlID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0YWdzICE9PSBcIlwiKSB7XG4gICAgfVxuICB9LCBbdGFnc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInBvc3QtZm9ybS1oZWFkaW5nXCI+QXNrIGEgUXVlc3Rpb248L2gxPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicG9zdC1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicG9zdC1mb3JtLWlucHV0XCJcbiAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cImJvZHlcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3QtZm9ybS1ib2R5XCJcbiAgICAgICAgICBjb2xzPXszMH1cbiAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJvZHlcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlOiBDaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT5cbiAgICAgICAgICAgIHNldEJvZHkoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXdcIlxuICAgICAgICAgIHBsdWdpbnM9e1tyZW1hcmtHZm1dfVxuICAgICAgICAgIHNvdXJjZT17Ym9keX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0LWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUYWdzOiAobWF4aW11bSA1KSBcIlxuICAgICAgICAgICAgdmFsdWU9e3RhZ3N9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICBzZXRUYWdzKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wb3N0LWZvcm0taGVhZGluZyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtZm9ybS1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzYjNiM2I7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCxcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtZm9ybS1pbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaW5wdXRCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2Nzcy5pbnB1dEJvcmRlcn07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC1mb3JtLWJvZHkge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhZ3Mge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFBvc3RQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/request/post.tsx\n");

/***/ })

})