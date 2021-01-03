webpackHotUpdate_N_E("pages/[community]",{

/***/ "./components/CommunityPost.tsx":
/*!**************************************!*\
  !*** ./components/CommunityPost.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tag */ \"./components/Tag.tsx\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/functions */ \"./utils/functions.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/CommunityPost.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar CommunityPost = function CommunityPost(_ref) {\n  _s();\n\n  var post = _ref.post;\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_5__[\"UserContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"community-post-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"community-post-aside\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"votes-container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"number\",\n            children: post.votes\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"text\",\n            children: [\"Vote\", post.votes === 1 ? \"\" : \"s\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"comments-container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"number\",\n            children: post.comments.length\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"text\",\n            children: [\"Answer\", post.comments.length === 1 ? \"\" : \"s\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"community-post-main\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"post-title\",\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"main-bottom\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"communities-container\",\n            children: post.communities.map(function (community) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Tag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                name: community.name\n              }, community.name, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"asked-by\",\n            children: [\"asked by: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"username\",\n              children: post.user.username\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"time\",\n              children: [\" \", Object(_utils_functions__WEBPACK_IMPORTED_MODULE_6__[\"getTime\"])(post.createdAt)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2001334413\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"],\n      children: \".community-post-container.__jsx-style-dynamic-selector{width:90%;margin-top:30px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__[\"floatingPostBackground\"], \";border-radius:10px;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.community-post-aside.__jsx-style-dynamic-selector{width:7%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 5px;}.community-post-main.__jsx-style-dynamic-selector{width:93%;margin:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.post-communities-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.votes-container.__jsx-style-dynamic-selector,.comments-container.__jsx-style-dynamic-selector{width:100%;height:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.votes-container.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector,.comments-container.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:#dedede;font-size:1rem;}.votes-container.__jsx-style-dynamic-selector .text.__jsx-style-dynamic-selector,.comments-container.__jsx-style-dynamic-selector .text.__jsx-style-dynamic-selector{font-size:0.7rem;}.post-title.__jsx-style-dynamic-selector{color:#ffffff;cursor:pointer;font-size:0.95rem;display:block;word-wrap:break-word;overflow:hidden;line-height:1.2em;max-height:2.4em;margin-left:6px;margin-top:3px;}.post-title.__jsx-style-dynamic-selector:hover{color:#bebebe;}.main-bottom.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.communities-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.asked-by.__jsx-style-dynamic-selector{font-size:0.9rem;color:#fff;margin-right:15px;}.asked-by.__jsx-style-dynamic-selector .username.__jsx-style-dynamic-selector{color:\").concat(post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\", \";}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9Db21tdW5pdHlQb3N0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ2tCLEFBR3FCLEFBU0QsQUFRQyxBQVNHLEFBS0YsQUFVRyxBQU1HLEFBSUgsQUFhQSxBQUlELEFBT0EsQUFJSSxBQU1rQixTQTNFdEIsQ0FURyxBQWlCSixDQWNELEdBVUksQUFVQSxBQWFqQixHQWpCQSxBQWdDYSxLQTdERSxBQWNBLElBL0IyQixFQStFdEIsQ0F0Q3BCLEFBVW9CLE1BaUNwQixXQUpBLENBNUJnQixjQUNPLEtBcERGLFFBd0JyQixBQTBDZ0MsQUFPaEMsUUFwQmtCLENBN0NNLEVBUFQsV0FnQlMsQUFjQSxFQTdCVCxBQW9ESyxrQkFDRCxpQkFDRCxnQkFDRCxZQWhEUSxHQWlEekIsUUF2REEsRUFlZ0MsQUFjUCxlQW1DSix1RUF6RE4sYUFDZixBQXNCcUIsU0FtQ1IsT0FqRFksSUFrRHpCLHlFQW5DQSxnQ0FkQSIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvQ29tbXVuaXR5UG9zdC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IHsgUG9zdFR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvcG9zdFR5cGVcIjtcbmltcG9ydCBUYWcgZnJvbSBcIi4vVGFnXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBnZXRUaW1lIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwb3N0OiBQb3N0VHlwZTtcbn1cblxuY29uc3QgQ29tbXVuaXR5UG9zdDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0eS1wb3N0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0eS1wb3N0LWFzaWRlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3Rlcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bWJlclwiPntwb3N0LnZvdGVzfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5Wb3Rle3Bvc3Qudm90ZXMgPT09IDEgPyBcIlwiIDogXCJzXCJ9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudW1iZXJcIj57cG9zdC5jb21tZW50cy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICBBbnN3ZXJ7cG9zdC5jb21tZW50cy5sZW5ndGggPT09IDEgPyBcIlwiIDogXCJzXCJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0eS1wb3N0LW1haW5cIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0LXRpdGxlXCI+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3R0b21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXRpZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIHtwb3N0LmNvbW11bml0aWVzLm1hcCgoY29tbXVuaXR5KSA9PiAoXG4gICAgICAgICAgICAgICAgPFRhZyBuYW1lPXtjb21tdW5pdHkubmFtZX0ga2V5PXtjb21tdW5pdHkubmFtZX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFza2VkLWJ5XCI+XG4gICAgICAgICAgICAgIGFza2VkIGJ5OiA8c3BhbiBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPntwb3N0LnVzZXIudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lXCI+IHtnZXRUaW1lKHBvc3QuY3JlYXRlZEF0KX08L3NwYW4+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbW11bml0eS1wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmZsb2F0aW5nUG9zdEJhY2tncm91bmR9O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW11bml0eS1wb3N0LWFzaWRlIHtcbiAgICAgICAgICB3aWR0aDogNyU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbXVuaXR5LXBvc3QtbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDkzJTtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0LWNvbW11bml0aWVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3Rlcy1jb250YWluZXIsXG4gICAgICAgIC5jb21tZW50cy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZvdGVzLWNvbnRhaW5lciBwLFxuICAgICAgICAuY29tbWVudHMtY29udGFpbmVyIHAge1xuICAgICAgICAgIGNvbG9yOiAjZGVkZWRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3Rlcy1jb250YWluZXIgLnRleHQsXG4gICAgICAgIC5jb21tZW50cy1jb250YWluZXIgLnRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtdGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIuNGVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtdGl0bGU6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjYmViZWJlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4tYm90dG9tIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW11bml0aWVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hc2tlZC1ieSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFza2VkLWJ5IC51c2VybmFtZSB7XG4gICAgICAgICAgY29sb3I6ICR7cG9zdC51c2VyLnV1aWQgPT09IHVzZXJDb250ZXh0LnVzZXIudXVpZFxuICAgICAgICAgICAgPyBcIiMzY2E0ZmZcIlxuICAgICAgICAgICAgOiBcIiNmZmZcIn07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbXVuaXR5UG9zdDtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/CommunityPost.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CommunityPost, \"j5sV9rHnklY0KPGfLa+JuIW0EIQ=\");\n\n_c = CommunityPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommunityPost);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommunityPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tdW5pdHlQb3N0LnRzeD9hMWQwIl0sIm5hbWVzIjpbIkNvbW11bml0eVBvc3QiLCJwb3N0IiwidXNlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJjc3MiLCJ1c2VyIiwidXVpZCIsInZvdGVzIiwiY29tbWVudHMiLCJsZW5ndGgiLCJ0aXRsZSIsImNvbW11bml0aWVzIiwibWFwIiwiY29tbXVuaXR5IiwibmFtZSIsInVzZXJuYW1lIiwiZ2V0VGltZSIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxhQUE4QixHQUFHLFNBQWpDQSxhQUFpQyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ25ELE1BQU1DLFdBQVcsR0FBR0Msd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FBOUI7QUFFQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBLGtHQWlDa0JDLDBFQWpDbEIsRUFvSGFKLElBQUksQ0FBQ0ssSUFBTCxDQUFVQyxJQUFWLEtBQW1CTCxXQUFXLENBQUNJLElBQVosQ0FBaUJDLElBQXBDLEdBQ0wsU0FESyxHQUVMLE1BdEhSLGFBQWUsMEJBQWY7QUFBQSw4QkFDRTtBQUFBLG9HQWdDZ0JGLDBFQWhDaEIsRUFtSFdKLElBQUksQ0FBQ0ssSUFBTCxDQUFVQyxJQUFWLEtBQW1CTCxXQUFXLENBQUNJLElBQVosQ0FBaUJDLElBQXBDLEdBQ0wsU0FESyxHQUVMLE1BckhOLGFBQWUsc0JBQWY7QUFBQSxnQ0FDRTtBQUFBLHNHQStCY0YsMEVBL0JkLEVBa0hTSixJQUFJLENBQUNLLElBQUwsQ0FBVUMsSUFBVixLQUFtQkwsV0FBVyxDQUFDSSxJQUFaLENBQWlCQyxJQUFwQyxHQUNMLFNBREssR0FFTCxNQXBISixhQUFlLGlCQUFmO0FBQUEsa0NB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QUNMLFNBREssR0FFTCxNQXZIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkhELENBaElEOztHQUFNUCxhOztLQUFBQSxhO0FBa0lTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbXVuaXR5UG9zdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IHsgUG9zdFR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvcG9zdFR5cGVcIjtcbmltcG9ydCBUYWcgZnJvbSBcIi4vVGFnXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBnZXRUaW1lIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwb3N0OiBQb3N0VHlwZTtcbn1cblxuY29uc3QgQ29tbXVuaXR5UG9zdDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0eS1wb3N0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0eS1wb3N0LWFzaWRlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3Rlcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bWJlclwiPntwb3N0LnZvdGVzfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5Wb3Rle3Bvc3Qudm90ZXMgPT09IDEgPyBcIlwiIDogXCJzXCJ9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudW1iZXJcIj57cG9zdC5jb21tZW50cy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICBBbnN3ZXJ7cG9zdC5jb21tZW50cy5sZW5ndGggPT09IDEgPyBcIlwiIDogXCJzXCJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0eS1wb3N0LW1haW5cIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0LXRpdGxlXCI+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3R0b21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXRpZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIHtwb3N0LmNvbW11bml0aWVzLm1hcCgoY29tbXVuaXR5KSA9PiAoXG4gICAgICAgICAgICAgICAgPFRhZyBuYW1lPXtjb21tdW5pdHkubmFtZX0ga2V5PXtjb21tdW5pdHkubmFtZX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFza2VkLWJ5XCI+XG4gICAgICAgICAgICAgIGFza2VkIGJ5OiA8c3BhbiBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPntwb3N0LnVzZXIudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lXCI+IHtnZXRUaW1lKHBvc3QuY3JlYXRlZEF0KX08L3NwYW4+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbW11bml0eS1wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmZsb2F0aW5nUG9zdEJhY2tncm91bmR9O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW11bml0eS1wb3N0LWFzaWRlIHtcbiAgICAgICAgICB3aWR0aDogNyU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbXVuaXR5LXBvc3QtbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDkzJTtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0LWNvbW11bml0aWVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3Rlcy1jb250YWluZXIsXG4gICAgICAgIC5jb21tZW50cy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZvdGVzLWNvbnRhaW5lciBwLFxuICAgICAgICAuY29tbWVudHMtY29udGFpbmVyIHAge1xuICAgICAgICAgIGNvbG9yOiAjZGVkZWRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3Rlcy1jb250YWluZXIgLnRleHQsXG4gICAgICAgIC5jb21tZW50cy1jb250YWluZXIgLnRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtdGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIuNGVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtdGl0bGU6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjYmViZWJlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4tYm90dG9tIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW11bml0aWVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hc2tlZC1ieSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFza2VkLWJ5IC51c2VybmFtZSB7XG4gICAgICAgICAgY29sb3I6ICR7cG9zdC51c2VyLnV1aWQgPT09IHVzZXJDb250ZXh0LnVzZXIudXVpZFxuICAgICAgICAgICAgPyBcIiMzY2E0ZmZcIlxuICAgICAgICAgICAgOiBcIiNmZmZcIn07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbXVuaXR5UG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CommunityPost.tsx\n");

/***/ })

})