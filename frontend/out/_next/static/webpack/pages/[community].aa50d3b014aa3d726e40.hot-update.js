webpackHotUpdate_N_E("pages/[community]",{

/***/ "./components/CommunityQuestion.tsx":
/*!******************************************!*\
  !*** ./components/CommunityQuestion.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tag */ \"./components/Tag.tsx\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/functions */ \"./utils/functions.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/CommunityQuestion.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CommunityQuestion = function CommunityQuestion(_ref) {\n  _s();\n\n  var post = _ref.post,\n      community = _ref.community;\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_6__[\"UserContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"community-post-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"community-post-aside\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"votes-container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"number\",\n            children: post.votes\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"text\",\n            children: [\"Vote\", post.votes === 1 ? \"\" : \"s\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"comments-container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"number\",\n            children: post.comments.length\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"text\",\n            children: [\"Answer\", post.comments.length === 1 ? \"\" : \"s\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"community-post-main\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"/questions/\".concat(post.uuid),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"post-title\",\n            children: post.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"main-bottom\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"communities-container\",\n            children: post.communities.map(function (community) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Tag__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                name: community.name\n              }, community.name, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"asked-by\",\n            children: [\"asked by: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"username\",\n              children: post.user.username\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2001334413\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"]]]) + \" \" + \"time\",\n              children: [\" \", Object(_utils_functions__WEBPACK_IMPORTED_MODULE_7__[\"getTime\"])(post.createdAt)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2001334413\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\"],\n      children: \".community-post-container.__jsx-style-dynamic-selector{width:90%;margin-top:30px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__[\"floatingPostBackground\"], \";border-radius:10px;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.community-post-aside.__jsx-style-dynamic-selector{width:7%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 5px;}.community-post-main.__jsx-style-dynamic-selector{width:93%;margin:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.post-communities-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.votes-container.__jsx-style-dynamic-selector,.comments-container.__jsx-style-dynamic-selector{width:100%;height:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.votes-container.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector,.comments-container.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:#dedede;font-size:1rem;}.votes-container.__jsx-style-dynamic-selector .text.__jsx-style-dynamic-selector,.comments-container.__jsx-style-dynamic-selector .text.__jsx-style-dynamic-selector{font-size:0.7rem;}.post-title.__jsx-style-dynamic-selector{color:#ffffff;cursor:pointer;font-size:0.95rem;display:block;word-wrap:break-word;overflow:hidden;line-height:1.2em;max-height:2.4em;margin-left:6px;margin-top:3px;}.post-title.__jsx-style-dynamic-selector:hover{color:#bebebe;}.main-bottom.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.communities-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.asked-by.__jsx-style-dynamic-selector{font-size:0.9rem;color:#fff;margin-right:15px;}.asked-by.__jsx-style-dynamic-selector .username.__jsx-style-dynamic-selector{color:\").concat(post.user.uuid === userContext.user.uuid ? \"#3ca4ff\" : \"#fff\", \";}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9Db21tdW5pdHlRdWVzdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RrQixBQUdxQixBQVNELEFBUUMsQUFTRyxBQUtGLEFBVUcsQUFNRyxBQUlILEFBYUEsQUFJRCxBQU9BLEFBSUksQUFNa0IsU0EzRXRCLENBVEcsQUFpQkosQ0FjRCxHQVVJLEFBVUEsQUFhakIsR0FqQkEsQUFnQ2EsS0E3REUsQUFjQSxJQS9CMkIsRUErRXRCLENBdENwQixBQVVvQixNQWlDcEIsV0FKQSxDQTVCZ0IsY0FDTyxLQXBERixRQXdCckIsQUEwQ2dDLEFBT2hDLFFBcEJrQixDQTdDTSxFQVBULFdBZ0JTLEFBY0EsRUE3QlQsQUFvREssa0JBQ0QsaUJBQ0QsZ0JBQ0QsWUFoRFEsR0FpRHpCLFFBdkRBLEVBZWdDLEFBY1AsZUFtQ0osdUVBekROLGFBQ2YsQUFzQnFCLFNBbUNSLE9BakRZLElBa0R6Qix5RUFuQ0EsZ0NBZEEiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9jb21wb25lbnRzL0NvbW11bml0eVF1ZXN0aW9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9wb3N0VHlwZVwiO1xuaW1wb3J0IFRhZyBmcm9tIFwiLi9UYWdcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcbmltcG9ydCB7IGdldFRpbWUgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBvc3Q6IFBvc3RUeXBlO1xuICBjb21tdW5pdHk6IHN0cmluZztcbn1cblxuY29uc3QgQ29tbXVuaXR5UXVlc3Rpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7IHBvc3QsIGNvbW11bml0eSB9KSA9PiB7XG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0eS1wb3N0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0eS1wb3N0LWFzaWRlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3Rlcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bWJlclwiPntwb3N0LnZvdGVzfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5Wb3Rle3Bvc3Qudm90ZXMgPT09IDEgPyBcIlwiIDogXCJzXCJ9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudW1iZXJcIj57cG9zdC5jb21tZW50cy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICBBbnN3ZXJ7cG9zdC5jb21tZW50cy5sZW5ndGggPT09IDEgPyBcIlwiIDogXCJzXCJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0eS1wb3N0LW1haW5cIj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3F1ZXN0aW9ucy8ke3Bvc3QudXVpZH1gfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3QtdGl0bGVcIj57cG9zdC50aXRsZX08L3A+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3R0b21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXRpZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIHtwb3N0LmNvbW11bml0aWVzLm1hcCgoY29tbXVuaXR5KSA9PiAoXG4gICAgICAgICAgICAgICAgPFRhZyBuYW1lPXtjb21tdW5pdHkubmFtZX0ga2V5PXtjb21tdW5pdHkubmFtZX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFza2VkLWJ5XCI+XG4gICAgICAgICAgICAgIGFza2VkIGJ5OiA8c3BhbiBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPntwb3N0LnVzZXIudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lXCI+IHtnZXRUaW1lKHBvc3QuY3JlYXRlZEF0KX08L3NwYW4+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbW11bml0eS1wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmZsb2F0aW5nUG9zdEJhY2tncm91bmR9O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW11bml0eS1wb3N0LWFzaWRlIHtcbiAgICAgICAgICB3aWR0aDogNyU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbXVuaXR5LXBvc3QtbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDkzJTtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0LWNvbW11bml0aWVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3Rlcy1jb250YWluZXIsXG4gICAgICAgIC5jb21tZW50cy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZvdGVzLWNvbnRhaW5lciBwLFxuICAgICAgICAuY29tbWVudHMtY29udGFpbmVyIHAge1xuICAgICAgICAgIGNvbG9yOiAjZGVkZWRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3Rlcy1jb250YWluZXIgLnRleHQsXG4gICAgICAgIC5jb21tZW50cy1jb250YWluZXIgLnRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtdGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIuNGVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtdGl0bGU6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjYmViZWJlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4tYm90dG9tIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW11bml0aWVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hc2tlZC1ieSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFza2VkLWJ5IC51c2VybmFtZSB7XG4gICAgICAgICAgY29sb3I6ICR7cG9zdC51c2VyLnV1aWQgPT09IHVzZXJDb250ZXh0LnVzZXIudXVpZFxuICAgICAgICAgICAgPyBcIiMzY2E0ZmZcIlxuICAgICAgICAgICAgOiBcIiNmZmZcIn07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbXVuaXR5UXVlc3Rpb247XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/CommunityQuestion.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CommunityQuestion, \"j5sV9rHnklY0KPGfLa+JuIW0EIQ=\");\n\n_c = CommunityQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommunityQuestion);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommunityQuestion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tdW5pdHlRdWVzdGlvbi50c3g/OTEwNyJdLCJuYW1lcyI6WyJDb21tdW5pdHlRdWVzdGlvbiIsInBvc3QiLCJjb21tdW5pdHkiLCJ1c2VyQ29udGV4dCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsImNzcyIsInVzZXIiLCJ1dWlkIiwidm90ZXMiLCJjb21tZW50cyIsImxlbmd0aCIsInRpdGxlIiwiY29tbXVuaXRpZXMiLCJtYXAiLCJuYW1lIiwidXNlcm5hbWUiLCJnZXRUaW1lIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxpQkFBa0MsR0FBRyxTQUFyQ0EsaUJBQXFDLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDbEUsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxnRUFBRCxDQUE5QjtBQUVBLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFO0FBQUEsa0dBbUNrQkMsMEVBbkNsQixFQXNIYUwsSUFBSSxDQUFDTSxJQUFMLENBQVVDLElBQVYsS0FBbUJMLFdBQVcsQ0FBQ0ksSUFBWixDQUFpQkMsSUFBcEMsR0FDTCxTQURLLEdBRUwsTUF4SFIsYUFBZSwwQkFBZjtBQUFBLDhCQUNFO0FBQUEsb0dBa0NnQkYsMEVBbENoQixFQXFIV0wsSUFBSSxDQUFDTSxJQUFMLENBQVVDLElBQVYsS0FBbUJMLFdBQVcsQ0FBQ0ksSUFBWixDQUFpQkMsSUFBcEMsR0FDTCxTQURLLEdBRUwsTUF2SE4sYUFBZSxzQkFBZjtBQUFBLGdDQUNFO0FBQUEsc0dBaUNjRiwwRUFqQ2QsRUFvSFNMLElBQUksQ0FBQ00sSUFBTCxDQUFVQyxJQUFWLEtBQW1CTCxXQUFXLENBQUNJLElBQVos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LENBQUNJLElBQVosQ0FBaUJDLElBQXBDLEdBQ0wsU0FESyxHQUVMLE1BekhWO0FBQUEsc0hBb0NvQkYsMEVBcENwQix3c0ZBdUhlTCxJQUFJLENBQUNNLElBQUwsQ0FBVUMsSUFBVixLQUFtQkwsV0FBVyxDQUFDSSxJQUFaLENBQWlCQyxJQUFwQyxHQUNMLFNBREssR0FFTCxNQXpIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0hELENBbElEOztHQUFNUixpQjs7S0FBQUEsaUI7QUFvSVNBLGdGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tdW5pdHlRdWVzdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuaW1wb3J0IHsgUG9zdFR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvcG9zdFR5cGVcIjtcbmltcG9ydCBUYWcgZnJvbSBcIi4vVGFnXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBnZXRUaW1lIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwb3N0OiBQb3N0VHlwZTtcbiAgY29tbXVuaXR5OiBzdHJpbmc7XG59XG5cbmNvbnN0IENvbW11bml0eVF1ZXN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwb3N0LCBjb21tdW5pdHkgfSkgPT4ge1xuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tdW5pdHktcG9zdC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tdW5pdHktcG9zdC1hc2lkZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudW1iZXJcIj57cG9zdC52b3Rlc308L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+Vm90ZXtwb3N0LnZvdGVzID09PSAxID8gXCJcIiA6IFwic1wifTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVtYmVyXCI+e3Bvc3QuY29tbWVudHMubGVuZ3RofTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgQW5zd2Vye3Bvc3QuY29tbWVudHMubGVuZ3RoID09PSAxID8gXCJcIiA6IFwic1wifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tdW5pdHktcG9zdC1tYWluXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9xdWVzdGlvbnMvJHtwb3N0LnV1aWR9YH0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0LXRpdGxlXCI+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm90dG9tXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0aWVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICB7cG9zdC5jb21tdW5pdGllcy5tYXAoKGNvbW11bml0eSkgPT4gKFxuICAgICAgICAgICAgICAgIDxUYWcgbmFtZT17Y29tbXVuaXR5Lm5hbWV9IGtleT17Y29tbXVuaXR5Lm5hbWV9IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJhc2tlZC1ieVwiPlxuICAgICAgICAgICAgICBhc2tlZCBieTogPHNwYW4gY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57cG9zdC51c2VyLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPiB7Z2V0VGltZShwb3N0LmNyZWF0ZWRBdCl9PC9zcGFuPlxuICAgICAgICAgICAgPC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb21tdW5pdHktcG9zdC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5mbG9hdGluZ1Bvc3RCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tdW5pdHktcG9zdC1hc2lkZSB7XG4gICAgICAgICAgd2lkdGg6IDclO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW11bml0eS1wb3N0LW1haW4ge1xuICAgICAgICAgIHdpZHRoOiA5MyU7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC1jb21tdW5pdGllcy1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAudm90ZXMtY29udGFpbmVyLFxuICAgICAgICAuY29tbWVudHMtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3Rlcy1jb250YWluZXIgcCxcbiAgICAgICAgLmNvbW1lbnRzLWNvbnRhaW5lciBwIHtcbiAgICAgICAgICBjb2xvcjogI2RlZGVkZTtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudm90ZXMtY29udGFpbmVyIC50ZXh0LFxuICAgICAgICAuY29tbWVudHMtY29udGFpbmVyIC50ZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0LXRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyLjRlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0LXRpdGxlOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2JlYmViZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLWJvdHRvbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tdW5pdGllcy1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXNrZWQtYnkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hc2tlZC1ieSAudXNlcm5hbWUge1xuICAgICAgICAgIGNvbG9yOiAke3Bvc3QudXNlci51dWlkID09PSB1c2VyQ29udGV4dC51c2VyLnV1aWRcbiAgICAgICAgICAgID8gXCIjM2NhNGZmXCJcbiAgICAgICAgICAgIDogXCIjZmZmXCJ9O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW11bml0eVF1ZXN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommunityQuestion.tsx\n");

/***/ })

})