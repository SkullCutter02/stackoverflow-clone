webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Reply.tsx":
/*!******************************!*\
  !*** ./components/Reply.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Reply.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Reply = function Reply(_ref) {\n  _s();\n\n  var question = _ref.question;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_11__[\"UserContext\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n\n  var postAnswer = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var errMsg;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              errMsg = document.getElementById(\"err-msg\");\n\n              if (!userContext.user) {\n                _context.next = 6;\n                break;\n              }\n\n              if (text.length < 50 && text.length > 6500) fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_9__[\"default\"], \"/posts/\").concat(question.uuid, \"/comments\"), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\",\n                  Authorization: \"Bearer \".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_10__[\"getCookie\"])(\"token\"))\n                },\n                body: JSON.stringify({\n                  userUuid: userContext.user.uuid,\n                  body: text\n                })\n              }).then(function (res) {\n                return res.json();\n              }).then(function (data) {\n                if (data.msg) {\n                  errMsg.innerText = data.msg;\n                } else {\n                  errMsg.innerText = \"\";\n                  setText(\"\");\n                  router.reload();\n                }\n              })[\"catch\"](function (err) {\n                return console.log(err);\n              });\n              _context.next = 8;\n              break;\n\n            case 6:\n              _context.next = 8;\n              return router.push(\"/auth/signup\");\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function postAnswer(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButtonHover\"]]]]) + \" \" + \"reply-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n        onSubmit: postAnswer,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButtonHover\"]]]]),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"textarea\", {\n          id: \"reply\",\n          required: true,\n          placeholder: \"Reply to this question\",\n          value: text,\n          onChange: function onChange(e) {\n            setText(e.target.value);\n            window.scrollBy(0, 100);\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButtonHover\"]]]]) + \" \" + \"reply-form-textarea\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButtonHover\"]]]]) + \" \" + \"reply-btn\",\n          children: \"Post your Answer\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n          id: \"err-msg\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1671903266\", [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButtonHover\"]]]]) + \" \" + \"err-msg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          className: \"preview reply-preview\",\n          source: text,\n          plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1671903266\",\n      dynamic: [text.length === 0 ? \"120px\" : \"200px\", _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButtonHover\"]],\n      children: \".reply-container.__jsx-style-dynamic-selector{width:82%;margin:40px auto;}.reply-form-textarea.__jsx-style-dynamic-selector{width:100%;resize:none;display:block;height:\".concat(text.length === 0 ? \"120px\" : \"200px\", \";background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBackground\"], \";color:#ffffff;border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"inputBorder\"], \";padding:15px;}.reply-form-textarea.__jsx-style-dynamic-selector:focus{height:200px;}.reply-btn.__jsx-style-dynamic-selector{margin:20px 10px;float:right;border:none;color:#fff;background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButton\"], \";border-radius:3px;padding:7px 10px;cursor:pointer;}.reply-btn.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"mainButtonHover\"], \";}.err-msg.__jsx-style-dynamic-selector{color:red;margin:20px 0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9SZXBseS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZrQixBQUdxQixBQUtDLEFBV0UsQUFJSSxBQVd1QixBQUk5QixVQWxDTyxBQW1DSCxDQTlCRixFQVdkLElBSWMsTUFkRSxDQThCaEIsR0FuQ0EsRUFvQmMsUUFkd0IsR0F3QnRDLENBVGEsV0FDNkIscUJBZkEsbUJBZ0J0QixrQkFDRCxHQWhCSCxjQUNnQyxBQWdCL0IsZUFDakIsK0JBaEJlLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9jb21wb25lbnRzL1JlcGx5LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBxdWVzdGlvbjogUXVlc3Rpb25UeXBlO1xufVxuXG5jb25zdCBSZXBseTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcXVlc3Rpb24gfSkgPT4ge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBwb3N0QW5zd2VyID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlcnJNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVyci1tc2dcIikgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgaWYgKHRleHQubGVuZ3RoIDwgNTAgJiYgdGV4dC5sZW5ndGggPiA2NTAwKVxuICAgICAgICBmZXRjaChgJHtob3N0fS9wb3N0cy8ke3F1ZXN0aW9uLnV1aWR9L2NvbW1lbnRzYCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKFwidG9rZW5cIil9YCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgICAgICBib2R5OiB0ZXh0LFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLm1zZykge1xuICAgICAgICAgICAgICBlcnJNc2cuaW5uZXJUZXh0ID0gZGF0YS5tc2c7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlcnJNc2cuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgc2V0VGV4dChcIlwiKTtcbiAgICAgICAgICAgICAgcm91dGVyLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCByb3V0ZXIucHVzaChcIi9hdXRoL3NpZ251cFwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGx5LWNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17cG9zdEFuc3dlcn0+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBpZD1cInJlcGx5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlcGx5LWZvcm0tdGV4dGFyZWFcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlJlcGx5IHRvIHRoaXMgcXVlc3Rpb25cIn1cbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgMTAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlcGx5LWJ0blwiIHR5cGU9e1wic3VibWl0XCJ9PlxuICAgICAgICAgICAgUG9zdCB5b3VyIEFuc3dlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVyci1tc2dcIiBpZD1cImVyci1tc2dcIiAvPlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3IHJlcGx5LXByZXZpZXdcIlxuICAgICAgICAgICAgc291cmNlPXt0ZXh0fVxuICAgICAgICAgICAgcGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJlcGx5LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDgyJTtcbiAgICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBseS1mb3JtLXRleHRhcmVhIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAke3RleHQubGVuZ3RoID09PSAwID8gXCIxMjBweFwiIDogXCIyMDBweFwifTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcGx5LWZvcm0tdGV4dGFyZWE6Zm9jdXMge1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwbHktYnRuIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b259O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwbHktYnRuOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5tYWluQnV0dG9uSG92ZXJ9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVyci1tc2cge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwbHk7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Reply.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Reply, \"5txUqqiZ38LgqrTQp34pIFZRoNk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"]];\n});\n\n_c = Reply;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reply);\n\nvar _c;\n\n$RefreshReg$(_c, \"Reply\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXBseS50c3g/MmZiYiJdLCJuYW1lcyI6WyJSZXBseSIsInF1ZXN0aW9uIiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdEFuc3dlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVyck1zZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VyIiwibGVuZ3RoIiwiZmV0Y2giLCJob3N0IiwidXVpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0Q29va2llIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyVXVpZCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm1zZyIsImlubmVyVGV4dCIsInJlbG9hZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiY3NzIiwidGFyZ2V0IiwidmFsdWUiLCJ3aW5kb3ciLCJzY3JvbGxCeSIsInJlbWFya0dmbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQU1BLElBQU1BLEtBQXNCLEdBQUcsU0FBekJBLEtBQXlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUN2QkMsc0RBQVEsQ0FBUyxFQUFULENBRGU7QUFBQSxNQUN4Q0MsSUFEd0M7QUFBQSxNQUNsQ0MsT0FEa0M7O0FBRS9DLE1BQU1DLFdBQVcsR0FBR0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FBOUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFVBQVU7QUFBQSxpTUFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJB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ImZpbGUiOiIuL2NvbXBvbmVudHMvUmVwbHkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHF1ZXN0aW9uOiBRdWVzdGlvblR5cGU7XG59XG5cbmNvbnN0IFJlcGx5OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBxdWVzdGlvbiB9KSA9PiB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHBvc3RBbnN3ZXIgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVyck1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyLW1zZ1wiKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgIGlmICh1c2VyQ29udGV4dC51c2VyKSB7XG4gICAgICBpZiAodGV4dC5sZW5ndGggPCA1MCAmJiB0ZXh0Lmxlbmd0aCA+IDY1MDApXG4gICAgICAgIGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7cXVlc3Rpb24udXVpZH0vY29tbWVudHNgLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdXNlclV1aWQ6IHVzZXJDb250ZXh0LnVzZXIudXVpZCxcbiAgICAgICAgICAgIGJvZHk6IHRleHQsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEubXNnKSB7XG4gICAgICAgICAgICAgIGVyck1zZy5pbm5lclRleHQgPSBkYXRhLm1zZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVyck1zZy5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgICAgICAgICBzZXRUZXh0KFwiXCIpO1xuICAgICAgICAgICAgICByb3V0ZXIucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL2F1dGgvc2lnbnVwXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwbHktY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtwb3N0QW5zd2VyfT5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPVwicmVwbHlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVwbHktZm9ybS10ZXh0YXJlYVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiUmVwbHkgdG8gdGhpcyBxdWVzdGlvblwifVxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAxMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVwbHktYnRuXCIgdHlwZT17XCJzdWJtaXRcIn0+XG4gICAgICAgICAgICBQb3N0IHlvdXIgQW5zd2VyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyLW1zZ1wiIGlkPVwiZXJyLW1zZ1wiIC8+XG4gICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXcgcmVwbHktcHJldmlld1wiXG4gICAgICAgICAgICBzb3VyY2U9e3RleHR9XG4gICAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmVwbHktY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogODIlO1xuICAgICAgICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcGx5LWZvcm0tdGV4dGFyZWEge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBoZWlnaHQ6ICR7dGV4dC5sZW5ndGggPT09IDAgPyBcIjEyMHB4XCIgOiBcIjIwMHB4XCJ9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwbHktZm9ybS10ZXh0YXJlYTpmb2N1cyB7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBseS1idG4ge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBseS1idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm1haW5CdXR0b25Ib3Zlcn07XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyLW1zZyB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBseTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Reply.tsx\n");

/***/ })

})