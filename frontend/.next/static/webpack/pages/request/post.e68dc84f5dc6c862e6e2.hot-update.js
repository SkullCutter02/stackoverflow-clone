webpackHotUpdate_N_E("pages/request/post",{

/***/ "./pages/request/post.tsx":
/*!********************************!*\
  !*** ./pages/request/post.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/host */ \"./utils/host.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/request/post.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar RequestPostPage = function RequestPostPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"**Hello World!**\"),\n      body = _useState[0],\n      setBody = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      tags = _useState2[0],\n      setTags = _useState2[1];\n\n  var fetchCommunities = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var filter,\n          res,\n          _args = arguments;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              filter = _args.length > 0 && _args[0] !== undefined ? _args[0] : \"\";\n              _context.next = 3;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_9__[\"default\"], \"/communities?page=1&limit=6&filter=\").concat(filter));\n\n            case 3:\n              res = _context.sent;\n              _context.next = 6;\n              return res.json();\n\n            case 6:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchCommunities() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_7__[\"useQuery\"])([\"communities\", tags]),\n      isLoading = _useQuery.isLoading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (tags !== \"\") {}\n  }, [tags]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"2411153611\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"]]]]) + \" \" + \"post-form-heading\",\n      children: \"Ask a Question\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"2411153611\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"]]]]) + \" \" + \"post-form-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        id: \"title\",\n        placeholder: \"Title\",\n        required: true,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"2411153611\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"]]]]) + \" \" + \"post-form-input\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"textarea\", {\n        id: \"body\",\n        cols: 30,\n        rows: 10,\n        placeholder: \"Body\",\n        required: true,\n        value: body,\n        onChange: function onChange(e) {\n          return setBody(e.target.value);\n        },\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"2411153611\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"]]]]) + \" \" + \"post-form-body\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        className: \"preview\",\n        plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a],\n        source: body\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"2411153611\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"]]]]) + \" \" + \"tags\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          placeholder: \"Tags: (maximum 5) \",\n          value: tags,\n          onChange: function onChange(e) {\n            return setTags(e.target.value);\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"2411153611\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"]]]]) + \" \" + \"post-form-input\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"2411153611\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"]],\n      children: \".post-form-heading.__jsx-style-dynamic-selector{text-align:center;margin:30px 0;}.post-form-container.__jsx-style-dynamic-selector{width:65%;min-height:500px;border-radius:20px;margin:0 auto 50px;background:#3b3b3b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}input.__jsx-style-dynamic-selector,textarea.__jsx-style-dynamic-selector{display:block;}.post-form-input.__jsx-style-dynamic-selector{display:block;width:80%;height:40px;margin:30px 0;text-indent:15px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], \";color:#ffffff;border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], \";font-size:0.8rem;}.post-form-body.__jsx-style-dynamic-selector{width:80%;resize:none;height:400px;margin-bottom:40px;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], \";color:#ffffff;border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], \";padding:15px;}.tags.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:-40px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvcmVxdWVzdC9wb3N0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRWtCLEFBRzZCLEFBS1IsQUFZSSxBQUlBLEFBWUosQUFXQyxVQXRDTSxBQTRCTCxDQVdDLEdBM0JmLEFBSVksSUFyQkksSUFrQ0QsRUFaRCxHQWhCTyxLQUxyQixHQWtDcUIsQ0FaTCxVQWhCSyxJQWlCRixJQVl1QixXQTVCckIsRUFpQnFCLGlCQWhCM0IsQ0FvQ1UsU0FSVCxhQVhBLENBWWdDLGFBWEEsaUNBWWpDLElBN0JTLFNBa0JMLEFBWW5CLGlCQVhBLEFBaUJtQixpQkFDbkIsbUNBcENxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9wYWdlcy9yZXF1ZXN0L3Bvc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vLi4vdXRpbHMvaG9zdFwiO1xuXG5jb25zdCBSZXF1ZXN0UG9zdFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiKipIZWxsbyBXb3JsZCEqKlwiKTtcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCBmZXRjaENvbW11bml0aWVzID0gYXN5bmMgKGZpbHRlcjogc3RyaW5nID0gXCJcIikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7aG9zdH0vY29tbXVuaXRpZXM/cGFnZT0xJmxpbWl0PTYmZmlsdGVyPSR7ZmlsdGVyfWBcbiAgICApO1xuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9O1xuXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoW1wiY29tbXVuaXRpZXNcIiwgdGFnc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRhZ3MgIT09IFwiXCIpIHtcbiAgICB9XG4gIH0sIFt0YWdzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwicG9zdC1mb3JtLWhlYWRpbmdcIj5Bc2sgYSBRdWVzdGlvbjwvaDE+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwb3N0LWZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0LWZvcm0taW5wdXRcIlxuICAgICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPVwiYm9keVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicG9zdC1mb3JtLWJvZHlcIlxuICAgICAgICAgIGNvbHM9ezMwfVxuICAgICAgICAgIHJvd3M9ezEwfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQm9keVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICB2YWx1ZT17Ym9keX1cbiAgICAgICAgICBvbkNoYW5nZT17KGU6IENoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgc2V0Qm9keShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlld1wiXG4gICAgICAgICAgcGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgICAgc291cmNlPXtib2R5fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3QtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRhZ3M6IChtYXhpbXVtIDUpIFwiXG4gICAgICAgICAgICB2YWx1ZT17dGFnc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgIHNldFRhZ3MoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBvc3QtZm9ybS1oZWFkaW5nIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC1mb3JtLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDUwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzNiM2IzYjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LFxuICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC1mb3JtLWlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0LWZvcm0tYm9keSB7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGFncyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0UG9zdFBhZ2U7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/request/post.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(RequestPostPage, \"zqk1YuFzu+2isii/LH8UFY6A294=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_7__[\"useQuery\"]];\n});\n\n_c = RequestPostPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestPostPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"RequestPostPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVxdWVzdC9wb3N0LnRzeD84ZGI2Il0sIm5hbWVzIjpbIlJlcXVlc3RQb3N0UGFnZSIsInVzZVN0YXRlIiwiYm9keSIsInNldEJvZHkiLCJ0YWdzIiwic2V0VGFncyIsImZldGNoQ29tbXVuaXRpZXMiLCJmaWx0ZXIiLCJmZXRjaCIsImhvc3QiLCJyZXMiLCJqc29uIiwidXNlUXVlcnkiLCJpc0xvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VFZmZlY3QiLCJjc3MiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZW1hcmtHZm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLGVBQXlCLEdBQUcsU0FBNUJBLGVBQTRCLEdBQU07QUFBQTs7QUFBQSxrQkFDZEMsc0RBQVEsQ0FBUyxrQkFBVCxDQURNO0FBQUEsTUFDL0JDLElBRCtCO0FBQUEsTUFDekJDLE9BRHlCOztBQUFBLG1CQUVkRixzREFBUSxDQUFTLEVBQVQsQ0FGTTtBQUFBLE1BRS9CRyxJQUYrQjtBQUFBLE1BRXpCQyxPQUZ5Qjs7QUFJdEMsTUFBTUMsZ0JBQWdCO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPQyxvQkFBUCwyREFBd0IsRUFBeEI7QUFBQTtBQUFBLHFCQUNMQyxLQUFLLFdBQ2xCQyxtREFEa0IsZ0RBQ3dCRixNQUR4QixFQURBOztBQUFBO0FBQ2pCRyxpQkFEaUI7QUFBQTtBQUFBLHFCQUlWQSxHQUFHLENBQUNDLElBQUosRUFKVTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCTCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBSnNDLGtCQVdITSw0REFBUSxDQUFDLENBQUMsYUFBRCxFQUFnQlIsSUFBaEIsQ0FBRCxDQVhMO0FBQUEsTUFXOUJTLFNBWDhCLGFBVzlCQSxTQVg4QjtBQUFBLE1BV25CQyxLQVhtQixhQVduQkEsS0FYbUI7QUFBQSxNQVdaQyxJQVhZLGFBV1pBLElBWFk7O0FBYXRDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJWixJQUFJLEtBQUssRUFBYixFQUFpQixDQUNoQjtBQUNGLEdBSFEsRUFHTixDQUFDQSxJQUFELENBSE0sQ0FBVDtBQUtBLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFO0FBQUEsa0dBbUVrQmEsbUVBbkVsQixFQXFFd0JBLCtEQXJFeEIsRUE4RWtCQSxtRUE5RWxCLEVBZ0Z3QkEsK0RBaEZ4QixhQUFjLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGtHQWtFa0JBLG1FQWxFbEIsRUFvRXdCQSwrREFwRXhCLEVBNkVrQkEsbUVBN0VsQixFQStFd0JBLCtEQS9FeEIsYUFBZ0IscUJBQWhCO0FBQUEsOEJBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUdFLFVBQUUsRUFBQyxPQUhMO0FBSUUsbUJBQVcsRUFBQyxPQUpkO0FBS0UsZ0JBQVEsTUFMVjtBQUFBLG9HQWlFZ0JBLG1FQWpFaEIsRUFtRXNCQSwrREFuRXRCLEVBNEVnQkEsbUVBNUVoQixFQThFc0JBLCtEQTlFdEIsYUFFWTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVFFO0FBQ0UsVUFBRSxFQUFDLE1BREw7QUFHRSxZQUFJLEVBQUUsRUFIUjtBQUlFLFlBQUksRUFBRSxFQUpSO0FBS0UsbUJBQVcsRUFBQyxNQUxkO0FBTUUsZ0JBQVEsTUFOVjtBQU9FLGFBQUssRUFBRWYsSUFQVDtBQVFFLGdCQUFRLEVBQUUsa0JBQUNnQixDQUFEO0FBQUEsaUJBQ1JmLE9BQU8sQ0FBQ2UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FEQztBQUFBLFNBUlo7QUFBQSxvR0EwRGdCSCxtRUExRGhCLEVBNERzQkEsK0RBNUR0QixFQXFFZ0JBLG1FQXJFaEIsRUF1RXNCQSwrREF2RXRCLGFBRVk7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUFvQkUscUVBQUMscURBQUQ7QUFDRSxpQkFBUyxFQUFDLFNBRFo7QUFFRSxlQUFPLEVBQUUsQ0FBQ0ksaURBQUQsQ0FGWDtBQUdFLGNBQU0sRUFBRW5CO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRixlQXlCRTtBQUFBLG9HQXlDZ0JlLG1FQXpDaEIsRUEyQ3NCQSwrREEzQ3RCLEVBb0RnQkEsbUVBcERoQixFQXNEc0JBLCtEQXREdEIsYUFBZSxNQUFmO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUdFLHFCQUFXLEVBQUMsb0JBSGQ7QUFJRSxlQUFLLEVBQUViLElBSlQ7QUFLRSxrQkFBUSxFQUFFLGtCQUFDYyxDQUFEO0FBQUEsbUJBQ1JiLE9BQU8sQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FEQztBQUFBLFdBTFo7QUFBQSxzR0F3Q2NILG1FQXhDZCxFQTBDb0JBLCtEQTFDcEIsRUFtRGNBLG1FQW5EZCxFQXFEb0JBLCtEQXJEcEIsYUFFWTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQSxnQkFvRW9CQSxtRUFwRXBCLEVBc0UwQkEsK0RBdEUxQixFQStFb0JBLG1FQS9FcEIsRUFpRjBCQSwrREFqRjFCO0FBQUEsMnJCQW9Fb0JBLG1FQXBFcEIsNkNBc0UwQkEsK0RBdEUxQiw4SUErRW9CQSxtRUEvRXBCLDZDQWlGMEJBLCtEQWpGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStGRCxDQWpIRDs7R0FBTWpCLGU7VUFXK0JZLG9EOzs7S0FYL0JaLGU7QUFtSFNBLDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcmVxdWVzdC9wb3N0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uLy4uL3V0aWxzL2hvc3RcIjtcblxuY29uc3QgUmVxdWVzdFBvc3RQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGU8c3RyaW5nPihcIioqSGVsbG8gV29ybGQhKipcIik7XG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgY29uc3QgZmV0Y2hDb21tdW5pdGllcyA9IGFzeW5jIChmaWx0ZXI6IHN0cmluZyA9IFwiXCIpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke2hvc3R9L2NvbW11bml0aWVzP3BhZ2U9MSZsaW1pdD02JmZpbHRlcj0ke2ZpbHRlcn1gXG4gICAgKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgfTtcblxuICBjb25zdCB7IGlzTG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KFtcImNvbW11bml0aWVzXCIsIHRhZ3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0YWdzICE9PSBcIlwiKSB7XG4gICAgfVxuICB9LCBbdGFnc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInBvc3QtZm9ybS1oZWFkaW5nXCI+QXNrIGEgUXVlc3Rpb248L2gxPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicG9zdC1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicG9zdC1mb3JtLWlucHV0XCJcbiAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cImJvZHlcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3QtZm9ybS1ib2R5XCJcbiAgICAgICAgICBjb2xzPXszMH1cbiAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJvZHlcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlOiBDaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT5cbiAgICAgICAgICAgIHNldEJvZHkoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXdcIlxuICAgICAgICAgIHBsdWdpbnM9e1tyZW1hcmtHZm1dfVxuICAgICAgICAgIHNvdXJjZT17Ym9keX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0LWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUYWdzOiAobWF4aW11bSA1KSBcIlxuICAgICAgICAgICAgdmFsdWU9e3RhZ3N9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICBzZXRUYWdzKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wb3N0LWZvcm0taGVhZGluZyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtZm9ybS1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzYjNiM2I7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCxcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtZm9ybS1pbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaW5wdXRCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2Nzcy5pbnB1dEJvcmRlcn07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC1mb3JtLWJvZHkge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhZ3Mge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFBvc3RQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/request/post.tsx\n");

/***/ })

})