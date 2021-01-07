webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/EditQuestion.tsx":
/*!*************************************!*\
  !*** ./components/EditQuestion.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/EditQuestion.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar EditQuestion = function EditQuestion(_ref) {\n  _s();\n\n  var setEditMode = _ref.setEditMode,\n      question = _ref.question;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(question.body),\n      body = _useState[0],\n      setBody = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"Save\"),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_8__[\"UserContext\"]);\n\n  var editForm = function editForm(e) {\n    e.preventDefault();\n\n    if (userContext.user) {\n      var spinner = document.getElementById(\"spinner\");\n      spinner.style.display = \"block\";\n      setText(\"\");\n      fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/posts/\").concat(question.uuid), {\n        method: \"PATCH\",\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_7__[\"getCookie\"])(\"token\"))\n        },\n        body: JSON.stringify({\n          body: body // userUuid: userContext.user.uuid,\n\n        })\n      }).then(function (res) {\n        if (res.status >= 200 && res.status < 300) {\n          setEditMode(false);\n          window.scrollBy(0, -1000);\n        } else {\n          setText(\"Save\");\n          spinner.style.display = \"none\";\n        }\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: editForm,\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3254893101\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButtonHover\"]]]]) + \" \" + \"edit-post-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n        id: \"edit-form-body\",\n        cols: 30,\n        rows: 10,\n        value: body,\n        onChange: function onChange(e) {\n          return setBody(e.target.value);\n        },\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3254893101\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButtonHover\"]]]])\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        className: \"preview edit-post-preview\",\n        source: body,\n        plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_4___default.a]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3254893101\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButtonHover\"]]]]) + \" \" + \"buttons-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          id: \"save\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3254893101\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButtonHover\"]]]]) + \" \" + \"save\",\n          children: [text, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            id: \"spinner\",\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3254893101\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButtonHover\"]]]]) + \" \" + \"smt-spinner-circle\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3254893101\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButtonHover\"]]]]) + \" \" + \"smt-spinner\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            var confirm = window.confirm(\"Are you sure to discard your changes?\");\n\n            if (confirm) {\n              setEditMode(false);\n              window.scrollTo(0, -1000);\n            }\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3254893101\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButtonHover\"]]]]) + \" \" + \"cancel\",\n          children: \"Cancel\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3254893101\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButton\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButtonHover\"]],\n      children: \".edit-post-container.__jsx-style-dynamic-selector{width:92%;margin:20px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#edit-form-body.__jsx-style-dynamic-selector{width:90%;resize:none;height:400px;margin-bottom:20px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], \";border:2px solid \").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], \";color:#fff;padding:15px;}.buttons-container.__jsx-style-dynamic-selector{width:90%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}button.__jsx-style-dynamic-selector{margin-left:20px;border:none;border-radius:4px;width:80px;height:25px;cursor:pointer;color:#fff;font-size:0.8rem;}.save.__jsx-style-dynamic-selector{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButton\"], \";}.save.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"mainButtonHover\"], \";}.cancel.__jsx-style-dynamic-selector{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButton\"], \";}.cancel.__jsx-style-dynamic-selector:hover{background:\").concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"cancelButtonHover\"], \";}.smt-spinner-circle.__jsx-style-dynamic-selector{width:17px;height:17px;position:relative;border-radius:50%;margin:0 auto;display:none;}.smt-spinner.__jsx-style-dynamic-selector{height:100%;width:100%;border-radius:50%;border-right:2px solid rgba(255,255,255,0.6);border-top:2px solid #bababa;border-left:2px solid #dedede;border-bottom:2px solid #ffffff;-webkit-animation:rotate--spinner-__jsx-style-dynamic-selector 1.6s infinite;animation:rotate--spinner-__jsx-style-dynamic-selector 1.6s infinite;}@-webkit-keyframes rotate--spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotate--spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9FZGl0UXVlc3Rpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGa0IsQUFHcUIsQUFRQSxBQVdBLEFBTU8sQUFXdUIsQUFJQSxBQUlBLEFBSUEsQUFJN0IsQUFTQyxBQVlVLEFBR0ssVUEzRVYsQUFRTCxBQVdDLENBaUNELENBU0QsS0FwQ0MsS0FoQkMsQ0E0Q0ssQUFTQSxJQTdETCxFQXlCSyxNQWhCQyxLQTBCckIsQUFJQSxBQUlBLEFBSUEsQ0FNb0IsQUFTOEIsTUFwQ3JDLE9BaEI2QixJQWlCNUIsQ0EyQkUsV0ExQkMsRUE0Q2YsQ0FqQmEsV0FwQ1ksQ0FVZCxDQTJCYixBQU8rQixDQVk3QixPQWhFOEMsRUFtQjdCLEtBN0JLLFlBOEJ4QixFQWlDZ0MseUJBcERuQixLQXFEcUIsTUFwRG5CLGFBQ2YsYUFvRDBDLEVBaEVyQixFQWtCckIsMkZBakJBLG1EQWdFQSIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvRWRpdFF1ZXN0aW9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5cbmltcG9ydCB7IFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCIuLi91dGlscy9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2V0RWRpdE1vZGU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgRWRpdFF1ZXN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBzZXRFZGl0TW9kZSwgcXVlc3Rpb24gfSkgPT4ge1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZTxzdHJpbmc+KHF1ZXN0aW9uLmJvZHkpO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiU2F2ZVwiKTtcblxuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIGNvbnN0IGVkaXRGb3JtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Bpbm5lclwiKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgIHNwaW5uZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHNldFRleHQoXCJcIik7XG5cbiAgICAgIGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7cXVlc3Rpb24udXVpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgIC8vIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgIH0pLFxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAtMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGV4dChcIlNhdmVcIik7XG4gICAgICAgICAgc3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImVkaXQtcG9zdC1jb250YWluZXJcIiBvblN1Ym1pdD17ZWRpdEZvcm19PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cImVkaXQtZm9ybS1ib2R5XCJcbiAgICAgICAgICBjb2xzPXszMH1cbiAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICB2YWx1ZT17Ym9keX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJvZHkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXcgZWRpdC1wb3N0LXByZXZpZXdcIlxuICAgICAgICAgIHNvdXJjZT17Ym9keX1cbiAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2F2ZVwiIGlkPVwic2F2ZVwiPlxuICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8ZGl2IGlkPVwic3Bpbm5lclwiIGNsYXNzTmFtZT1cInNtdC1zcGlubmVyLWNpcmNsZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtdC1zcGlubmVyXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29uZmlybSA9IHdpbmRvdy5jb25maXJtKFxuICAgICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHRvIGRpc2NhcmQgeW91ciBjaGFuZ2VzP1wiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChjb25maXJtKSB7XG4gICAgICAgICAgICAgICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAtMTAwMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYW5jZWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZWRpdC1wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICNlZGl0LWZvcm0tYm9keSB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9ucy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2F2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgIH1cblxuICAgICAgICAuc2F2ZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbkhvdmVyfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYW5jZWwge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmNhbmNlbEJ1dHRvbn07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FuY2VsOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5jYW5jZWxCdXR0b25Ib3Zlcn07XG4gICAgICAgIH1cblxuICAgICAgICAuc210LXNwaW5uZXItY2lyY2xlIHtcbiAgICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNtdC1zcGlubmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2JhYmFiYTtcbiAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNkZWRlZGU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUtLXNwaW5uZXIgMS42cyBpbmZpbml0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgcm90YXRlLS1zcGlubmVyIHtcbiAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0byB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0UXVlc3Rpb247XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/EditQuestion.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EditQuestion, \"xYVUqJqONSU0QnfJ5OKnsop1aDo=\");\n\n_c = EditQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditQuestion);\n\nvar _c;\n\n$RefreshReg$(_c, \"EditQuestion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0UXVlc3Rpb24udHN4PzE2MDEiXSwibmFtZXMiOlsiRWRpdFF1ZXN0aW9uIiwic2V0RWRpdE1vZGUiLCJxdWVzdGlvbiIsInVzZVN0YXRlIiwiYm9keSIsInNldEJvZHkiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiZWRpdEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwic3Bpbm5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJmZXRjaCIsImhvc3QiLCJ1dWlkIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRDb29raWUiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsIndpbmRvdyIsInNjcm9sbEJ5IiwiY3NzIiwidGFyZ2V0IiwidmFsdWUiLCJyZW1hcmtHZm0iLCJjb25maXJtIiwic2Nyb2xsVG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxZQUE2QixHQUFHLFNBQWhDQSxZQUFnQyxPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxXQUE0QixRQUE1QkEsV0FBNEI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQzNDQyxzREFBUSxDQUFTRCxRQUFRLENBQUNFLElBQWxCLENBRG1DO0FBQUEsTUFDNURBLElBRDREO0FBQUEsTUFDdERDLE9BRHNEOztBQUFBLG1CQUUzQ0Ysc0RBQVEsQ0FBUyxNQUFULENBRm1DO0FBQUEsTUFFNURHLElBRjREO0FBQUEsTUFFdERDLE9BRnNEOztBQUluRSxNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUNDLGdFQUFELENBQTlCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QkEsS0FBQyxDQUFDQyxjQUFGOztBQUVBLFFBQUlMLFdBQVcsQ0FBQ00sSUFBaEIsRUFBc0I7QUFDcEIsVUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBaEI7QUFDQUYsYUFBTyxDQUFDRyxLQUFSLENBQWNDLE9BQWQsR0FBd0IsT0FBeEI7QUFDQVosYUFBTyxDQUFDLEVBQUQsQ0FBUDtBQUVBYSxXQUFLLFdBQUlDLG1EQUFKLG9CQUFrQm5CLFFBQVEsQ0FBQ29CLElBQTNCLEdBQW1DO0FBQ3RDQyxjQUFNLEVBQUUsT0FEOEI7QUFFdENDLGVBQU8sRUFBRTtBQUNQLDBCQUFnQixrQkFEVDtBQUVQQyx1QkFBYSxtQkFBWUMsa0VBQVMsQ0FBQyxPQUFELENBQXJCO0FBRk4sU0FGNkI7QUFNdEN0QixZQUFJLEVBQUV1QixJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQnhCLGNBQUksRUFBRUEsSUFEYSxDQUVuQjs7QUFGbUIsU0FBZjtBQU5nQyxPQUFuQyxDQUFMLENBVUd5QixJQVZILENBVVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2YsWUFBSUEsR0FBRyxDQUFDQyxNQUFKLElBQWMsR0FBZCxJQUFxQkQsR0FBRyxDQUFDQyxNQUFKLEdBQWEsR0FBdEMsRUFBMkM7QUFDekM5QixxQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBK0IsZ0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFDLElBQXBCO0FBQ0QsU0FIRCxNQUdPO0FBQ0wxQixpQkFBTyxDQUFDLE1BQUQsQ0FBUDtBQUNBUSxpQkFBTyxDQUFDRyxLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDRDtBQUNGLE9BbEJEO0FBbUJEO0FBQ0YsR0E1QkQ7O0FBOEJBLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFO0FBQXNDLGNBQVEsRUFBRVIsUUFBaEQ7QUFBQSxrR0FtRGtCdUIsbUVBbkRsQixFQW9Ed0JBLCtEQXBEeEIsRUEyRWtCQSw4REEzRWxCLEVBK0VrQkEsbUVBL0VsQixFQW1Ga0JBLGdFQW5GbEIsRUF1RmtCQSxxRUF2RmxCLGFBQWdCLHFCQUFoQjtBQUFBLDhCQUNFO0FBQ0UsVUFBRSxFQUFDLGdCQURMO0FBRUUsWUFBSSxFQUFFLEVBRlI7QUFHRSxZQUFJLEVBQUUsRUFIUjtBQUlFLGFBQUssRUFBRTlCLElBSlQ7QUFLRSxnQkFBUSxFQUFFLGtCQUFDUSxDQUFEO0FBQUEsaUJBQU9QLE9BQU8sQ0FBQ08sQ0FBQyxDQUFDdUIsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQSxTQUxaO0FBQUEsb0dBa0RnQkYsbUVBbERoQixFQW1Ec0JBLCtEQW5EdEIsRUEwRWdCQSw4REExRWhCLEVBOEVnQkEsbUVBOUVoQixFQWtGZ0JBLGdFQWxGaEIsRUFzRmdCQSxxRUF0RmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBUUUscUVBQUMscURBQUQ7QUFDRSxpQkFBUyxFQUFDLDJCQURaO0FBRUUsY0FBTSxFQUFFOUIsSUFGVjtBQUdFLGVBQU8sRUFBRSxDQUFDaUMsaURBQUQ7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUFhRTtBQUFBLG9HQXNDZ0JILG1FQXRDaEIsRUF1Q3NCQSwrREF2Q3RCLEVBOERnQkEsOERBOURoQixFQWtFZ0JBLG1FQWxFaEIsRUFzRWdCQSxnRUF0RWhCLEVBMEVnQkEscUVBMUVoQixhQUFlLG1CQUFmO0FBQUEsZ0NBQ0U7QUFBeUIsWUFBRSxFQUFDLE1BQTVCO0FBQUEsc0dBcUNjQSxtRUFyQ2QsRUFzQ29CQSwrREF0Q3BCLEVBNkRjQSw4REE3RGQsRUFpRWNBLG1FQWpFZCxFQXFFY0EsZ0VBckVkLEVBeUVjQSxxRUF6RWQsYUFBa0IsTUFBbEI7QUFBQSxxQkFDRzVCLElBREgsZUFFRTtBQUFLLGNBQUUsRUFBQyxTQUFSO0FBQUEsd0dBbUNZNEIsbUVBbkNaLEVBb0NrQkEsK0RBcENsQixFQTJEWUEsOERBM0RaLEVBK0RZQSxtRUEvRFosRUFtRVlBLGdFQW5FWixFQXVFWUEscUVBdkVaLGFBQTRCLG9CQUE1QjtBQUFBLG1DQUNFO0FBQUEsMEdBa0NVQSxtRUFsQ1YsRUFtQ2dCQSwrREFuQ2hCLEVBMERVQSw4REExRFYsRUE4RFVBLG1FQTlEVixFQWtFVUEsZ0VBbEVWLEVBc0VVQSxxRUF0RVYsYUFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQ0UsaUJBQU8sRUFBRSxtQkFBTTtBQUNiLGdCQUFNSSxPQUFPLEdBQUdOLE1BQU0sQ0FBQ00sT0FBUCxDQUNkLHVDQURjLENBQWhCOztBQUdBLGdCQUFJQSxPQUFKLEVBQWE7QUFDWHJDLHlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0ErQixvQkFBTSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQUMsSUFBcEI7QUFDRDtBQUNGLFdBVEg7QUFBQSxzR0ErQmNMLG1FQS9CZCxFQWdDb0JBLCtEQWhDcEIsRUF1RGNBLDhEQXZEZCxFQTJEY0EsbUVBM0RkLEVBK0RjQSxnRUEvRGQsRUFtRWNBLHFFQW5FZCxhQVVZLFFBVlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBLGdCQW9Eb0JBLG1FQXBEcEIsRUFxRDBCQSwrREFyRDFCLEVBNEVvQkEsOERBNUVwQixFQWdGb0JBLG1FQWhGcEIsRUFvRm9CQSxnRUFwRnBCLEVBd0ZvQkEscUVBeEZwQjtBQUFBLDJjQW9Eb0JBLG1FQXBEcEIsK0JBcUQwQkEsK0RBckQxQixpZEE0RW9CQSw4REE1RXBCLG1FQWdGb0JBLG1FQWhGcEIsK0RBb0ZvQkEsZ0VBcEZwQixxRUF3Rm9CQSxxRUF4RnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEySEQsQ0EvSkQ7O0dBQU1sQyxZOztLQUFBQSxZO0FBaUtTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRWRpdFF1ZXN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5cbmltcG9ydCB7IFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCIuLi91dGlscy9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2V0RWRpdE1vZGU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgRWRpdFF1ZXN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBzZXRFZGl0TW9kZSwgcXVlc3Rpb24gfSkgPT4ge1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZTxzdHJpbmc+KHF1ZXN0aW9uLmJvZHkpO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiU2F2ZVwiKTtcblxuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIGNvbnN0IGVkaXRGb3JtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Bpbm5lclwiKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgIHNwaW5uZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHNldFRleHQoXCJcIik7XG5cbiAgICAgIGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7cXVlc3Rpb24udXVpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgIC8vIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgIH0pLFxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAtMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGV4dChcIlNhdmVcIik7XG4gICAgICAgICAgc3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImVkaXQtcG9zdC1jb250YWluZXJcIiBvblN1Ym1pdD17ZWRpdEZvcm19PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cImVkaXQtZm9ybS1ib2R5XCJcbiAgICAgICAgICBjb2xzPXszMH1cbiAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICB2YWx1ZT17Ym9keX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJvZHkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXcgZWRpdC1wb3N0LXByZXZpZXdcIlxuICAgICAgICAgIHNvdXJjZT17Ym9keX1cbiAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2F2ZVwiIGlkPVwic2F2ZVwiPlxuICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8ZGl2IGlkPVwic3Bpbm5lclwiIGNsYXNzTmFtZT1cInNtdC1zcGlubmVyLWNpcmNsZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtdC1zcGlubmVyXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29uZmlybSA9IHdpbmRvdy5jb25maXJtKFxuICAgICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHRvIGRpc2NhcmQgeW91ciBjaGFuZ2VzP1wiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChjb25maXJtKSB7XG4gICAgICAgICAgICAgICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAtMTAwMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYW5jZWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZWRpdC1wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICNlZGl0LWZvcm0tYm9keSB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmlucHV0QmFja2dyb3VuZH07XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjc3MuaW5wdXRCb3JkZXJ9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9ucy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2F2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbn07XG4gICAgICAgIH1cblxuICAgICAgICAuc2F2ZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubWFpbkJ1dHRvbkhvdmVyfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYW5jZWwge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmNhbmNlbEJ1dHRvbn07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FuY2VsOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5jYW5jZWxCdXR0b25Ib3Zlcn07XG4gICAgICAgIH1cblxuICAgICAgICAuc210LXNwaW5uZXItY2lyY2xlIHtcbiAgICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNtdC1zcGlubmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2JhYmFiYTtcbiAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNkZWRlZGU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUtLXNwaW5uZXIgMS42cyBpbmZpbml0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgcm90YXRlLS1zcGlubmVyIHtcbiAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0byB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0UXVlc3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/EditQuestion.tsx\n");

/***/ })

})