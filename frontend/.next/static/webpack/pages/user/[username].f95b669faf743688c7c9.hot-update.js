webpackHotUpdate_N_E("pages/user/[username]",{

/***/ "./components/UserQuestions.tsx":
/*!**************************************!*\
  !*** ./components/UserQuestions.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Tag */ \"./components/Tag.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/UserQuestions.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar UserQuestions = function UserQuestions(_ref) {\n  _s();\n\n  var uuid = _ref.uuid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchUserPosts = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_7__[\"default\"], \"/users/\").concat(uuid, \"/posts?page=\").concat(page, \"&limit=20\"));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchUserPosts(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])([\"user-posts\", page], function () {\n    return fetchUserPosts(page);\n  }, {\n    keepPreviousData: true,\n    cacheTime: 0\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isPreviousData = _useQuery.isPreviousData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]),\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]),\n      children: error.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"user-posts-container\",\n      children: [data.posts.map(function (post) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"user-post-container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"post-aside\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"votes\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"number\",\n                children: post.votes\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"text\",\n                children: [\"Vote\", post.votes === 1 ? \"\" : \"s\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"comments\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"number\",\n                children: post.comments.length\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"text\",\n                children: [\"Answer\", post.comments.length === 1 ? \"\" : \"s\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"post-main\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n              href: \"/questions/\".concat(post.uuid),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"post-title\",\n                children: post.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"communities-container\",\n              children: post.communities.slice(0, 4).map(function (community) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Tag__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                  name: community.name\n                }, community.name, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 60,\n                  columnNumber: 21\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 15\n          }, _this)]\n        }, post.uuid, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"page-handlers\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return setPage(function (old) {\n              return Math.max(old - 1, 0);\n            });\n          },\n          disabled: page === 1,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]),\n          children: \"Previous Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            if (!isPreviousData && data.hasMore) {\n              setPage(function (old) {\n                return old + 1;\n              });\n            }\n          },\n          disabled: isPreviousData || !data.hasMore,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1263861675\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]),\n          children: \"Next Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1263861675\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]],\n      children: \".user-post-container.__jsx-style-dynamic-selector{height:100px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"], \";margin:30px 20px;border-radius:10px;padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.post-aside.__jsx-style-dynamic-selector{width:3%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 5px;}.votes.__jsx-style-dynamic-selector,.comments.__jsx-style-dynamic-selector{width:100%;height:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.votes.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector,.comments.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:#dedede;font-size:1rem;}.votes.__jsx-style-dynamic-selector .text.__jsx-style-dynamic-selector,.comments.__jsx-style-dynamic-selector .text.__jsx-style-dynamic-selector{font-size:0.7rem;}.post-main.__jsx-style-dynamic-selector{width:97%;margin-left:9px;border:1px solid red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.post-title.__jsx-style-dynamic-selector{color:#ffffff;cursor:pointer;font-size:0.95rem;display:block;word-wrap:break-word;overflow:hidden;line-height:1.2em;max-height:2.4em;margin-left:6px;margin-top:3px;}.communities-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9Vc2VyUXVlc3Rpb25zLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRmtCLEFBR3dCLEFBU0osQUFTRSxBQVVHLEFBTUcsQUFJUCxBQVNJLEFBYUQsU0FsREEsQ0E2QkcsQ0FwQkwsRUFsQjZCLENBNEJ6QixBQW1CQSxHQWJqQixLQWZlLElBb0JRLEdBVnZCLEFBbUJvQixrQkFSTCxBQVNDLE1BaERHLFFBaURJLFNBaERGLElBMERyQixRQVRrQixDQXpDTSxNQVBULE9BaUJTLEVBZ0NKLElBaERMLGNBaURJLEtBWkssWUFhTixnQkFDRCxZQTVDUSxHQTZDekIsVUFuQ3lCLEVBaEJ6Qix1QkFxQzJCLDZEQTlCWixhQUNmLEFBU3FCLHVCQXFCckIsc0VBcEJBIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9Vc2VyUXVlc3Rpb25zLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IFVzZXJQb3N0c1R5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvdXNlclBvc3RzVHlwZVwiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBUYWcgZnJvbSBcIi4vVGFnXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHV1aWQ6IHN0cmluZztcbn1cblxuY29uc3QgVXNlclF1ZXN0aW9uczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdXVpZCB9KSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG5cbiAgY29uc3QgZmV0Y2hVc2VyUG9zdHMgPSBhc3luYyAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtob3N0fS91c2Vycy8ke3V1aWR9L3Bvc3RzP3BhZ2U9JHtwYWdlfSZsaW1pdD0yMGBcbiAgICApO1xuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9O1xuXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yLCBlcnJvciwgZGF0YSwgaXNQcmV2aW91c0RhdGEgfSA9IHVzZVF1ZXJ5PFxuICAgIFVzZXJQb3N0c1R5cGUsXG4gICAgRXJyb3JcbiAgPihbXCJ1c2VyLXBvc3RzXCIsIHBhZ2VdLCAoKSA9PiBmZXRjaFVzZXJQb3N0cyhwYWdlKSwge1xuICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gICAgY2FjaGVUaW1lOiAwLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcG9zdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAge2RhdGEucG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcG9zdC1jb250YWluZXJcIiBrZXk9e3Bvc3QudXVpZH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1hc2lkZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZXNcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bWJlclwiPntwb3N0LnZvdGVzfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5Wb3Rle3Bvc3Qudm90ZXMgPT09IDEgPyBcIlwiIDogXCJzXCJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bWJlclwiPntwb3N0LmNvbW1lbnRzLmxlbmd0aH08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIEFuc3dlcntwb3N0LmNvbW1lbnRzLmxlbmd0aCA9PT0gMSA/IFwiXCIgOiBcInNcIn1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1tYWluXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9xdWVzdGlvbnMvJHtwb3N0LnV1aWR9YH0+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0LXRpdGxlXCI+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0aWVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAge3Bvc3QuY29tbXVuaXRpZXMuc2xpY2UoMCwgNCkubWFwKChjb21tdW5pdHkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFRhZyBuYW1lPXtjb21tdW5pdHkubmFtZX0ga2V5PXtjb21tdW5pdHkubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oYW5kbGVyc1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChvbGQpID0+IE1hdGgubWF4KG9sZCAtIDEsIDApKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ByZXZpb3VzRGF0YSAmJiBkYXRhLmhhc01vcmUpIHtcbiAgICAgICAgICAgICAgICAgIHNldFBhZ2UoKG9sZCkgPT4gb2xkICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNQcmV2aW91c0RhdGEgfHwgIWRhdGEuaGFzTW9yZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmV4dCBQYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC51c2VyLXBvc3QtY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmZsb2F0aW5nUG9zdEJhY2tncm91bmR9O1xuICAgICAgICAgIG1hcmdpbjogMzBweCAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtYXNpZGUge1xuICAgICAgICAgIHdpZHRoOiAzJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3RlcyxcbiAgICAgICAgLmNvbW1lbnRzIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3RlcyBwLFxuICAgICAgICAuY29tbWVudHMgcCB7XG4gICAgICAgICAgY29sb3I6ICNkZWRlZGU7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZvdGVzIC50ZXh0LFxuICAgICAgICAuY29tbWVudHMgLnRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDk3JTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0LXRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyLjRlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tdW5pdGllcy1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclF1ZXN0aW9ucztcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/UserQuestions.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(UserQuestions, \"B8AHcuIhDtcfT64L9EclU84Jm5E=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = UserQuestions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserQuestions);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserQuestions\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUXVlc3Rpb25zLnRzeD8zODlhIl0sIm5hbWVzIjpbIlVzZXJRdWVzdGlvbnMiLCJ1dWlkIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsImZldGNoVXNlclBvc3RzIiwiZmV0Y2giLCJob3N0IiwicmVzIiwianNvbiIsInVzZVF1ZXJ5Iiwia2VlcFByZXZpb3VzRGF0YSIsImNhY2hlVGltZSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJlcnJvciIsImRhdGEiLCJpc1ByZXZpb3VzRGF0YSIsImNzcyIsIm1lc3NhZ2UiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJ2b3RlcyIsImNvbW1lbnRzIiwibGVuZ3RoIiwidGl0bGUiLCJjb21tdW5pdGllcyIsInNsaWNlIiwiY29tbXVuaXR5IiwibmFtZSIsIm9sZCIsIk1hdGgiLCJtYXgiLCJoYXNNb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQU1BLElBQU1BLGFBQThCLEdBQUcsU0FBakNBLGFBQWlDLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQzNCQyxzREFBUSxDQUFTLENBQVQsQ0FEbUI7QUFBQSxNQUM1Q0MsSUFENEM7QUFBQSxNQUN0Q0MsT0FEc0M7O0FBR25ELE1BQU1DLGNBQWM7QUFBQSxpTUFBRyxpQkFBT0YsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNIRyxLQUFLLFdBQ2xCQyxtREFEa0Isb0JBQ0pOLElBREkseUJBQ2VFLElBRGYsZUFERjs7QUFBQTtBQUNmSyxpQkFEZTtBQUFBO0FBQUEscUJBSVJBLEdBQUcsQ0FBQ0MsSUFBSixFQUpROztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZEosY0FBYztBQUFBO0FB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RDs7O0tBVnhEVixhO0FBOElTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXNlclF1ZXN0aW9ucy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBVc2VyUG9zdHNUeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL3VzZXJQb3N0c1R5cGVcIjtcbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgVGFnIGZyb20gXCIuL1RhZ1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB1dWlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IFVzZXJRdWVzdGlvbnM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHV1aWQgfSkgPT4ge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuXG4gIGNvbnN0IGZldGNoVXNlclBvc3RzID0gYXN5bmMgKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7aG9zdH0vdXNlcnMvJHt1dWlkfS9wb3N0cz9wYWdlPSR7cGFnZX0mbGltaXQ9MjBgXG4gICAgKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgfTtcblxuICBjb25zdCB7IGlzTG9hZGluZywgaXNFcnJvciwgZXJyb3IsIGRhdGEsIGlzUHJldmlvdXNEYXRhIH0gPSB1c2VRdWVyeTxcbiAgICBVc2VyUG9zdHNUeXBlLFxuICAgIEVycm9yXG4gID4oW1widXNlci1wb3N0c1wiLCBwYWdlXSwgKCkgPT4gZmV0Y2hVc2VyUG9zdHMocGFnZSksIHtcbiAgICBrZWVwUHJldmlvdXNEYXRhOiB0cnVlLFxuICAgIGNhY2hlVGltZTogMCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICkgOiBpc0Vycm9yID8gKFxuICAgICAgICA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXBvc3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtkYXRhLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXBvc3QtY29udGFpbmVyXCIga2V5PXtwb3N0LnV1aWR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtYXNpZGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGVzXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudW1iZXJcIj57cG9zdC52b3Rlc308L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+Vm90ZXtwb3N0LnZvdGVzID09PSAxID8gXCJcIiA6IFwic1wifTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudW1iZXJcIj57cG9zdC5jb21tZW50cy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICBBbnN3ZXJ7cG9zdC5jb21tZW50cy5sZW5ndGggPT09IDEgPyBcIlwiIDogXCJzXCJ9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtbWFpblwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcXVlc3Rpb25zLyR7cG9zdC51dWlkfWB9PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPntwb3N0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tdW5pdGllcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtwb3N0LmNvbW11bml0aWVzLnNsaWNlKDAsIDQpLm1hcCgoY29tbXVuaXR5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWcgbmFtZT17Y29tbXVuaXR5Lm5hbWV9IGtleT17Y29tbXVuaXR5Lm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGFuZGxlcnNcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZSgob2xkKSA9PiBNYXRoLm1heChvbGQgLSAxLCAwKSl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmV2aW91cyBQYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXNQcmV2aW91c0RhdGEgJiYgZGF0YS5oYXNNb3JlKSB7XG4gICAgICAgICAgICAgICAgICBzZXRQYWdlKChvbGQpID0+IG9sZCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJldmlvdXNEYXRhIHx8ICFkYXRhLmhhc01vcmV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudXNlci1wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5mbG9hdGluZ1Bvc3RCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBtYXJnaW46IDMwcHggMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0LWFzaWRlIHtcbiAgICAgICAgICB3aWR0aDogMyU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudm90ZXMsXG4gICAgICAgIC5jb21tZW50cyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudm90ZXMgcCxcbiAgICAgICAgLmNvbW1lbnRzIHAge1xuICAgICAgICAgIGNvbG9yOiAjZGVkZWRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3RlcyAudGV4dCxcbiAgICAgICAgLmNvbW1lbnRzIC50ZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0LW1haW4ge1xuICAgICAgICAgIHdpZHRoOiA5NyU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC10aXRsZSB7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgICAgbWF4LWhlaWdodDogMi40ZW07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbXVuaXRpZXMtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJRdWVzdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserQuestions.tsx\n");

/***/ })

})