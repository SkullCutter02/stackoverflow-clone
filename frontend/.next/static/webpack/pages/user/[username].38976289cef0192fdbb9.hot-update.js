webpackHotUpdate_N_E("pages/user/[username]",{

/***/ "./components/UserQuestions.tsx":
/*!**************************************!*\
  !*** ./components/UserQuestions.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/UserQuestions.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar UserQuestions = function UserQuestions(_ref) {\n  _s();\n\n  var uuid = _ref.uuid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchUserPosts = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_7__[\"default\"], \"/users/\").concat(uuid, \"/posts?page=\").concat(page, \"&limit=20\"));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchUserPosts(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])([\"user-posts\", page], function () {\n    return fetchUserPosts(page);\n  }, {\n    keepPreviousData: true,\n    cacheTime: 0\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isPreviousData = _useQuery.isPreviousData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]),\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]),\n      children: error.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"user-posts-container\",\n      children: [data.posts.map(function (post) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"user-post-container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"post-aside\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"votes\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"number\",\n                children: post.votes\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"text\",\n                children: [\"Vote\", post.votes === 1 ? \"\" : \"s\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"comments\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"number\",\n                children: post.comments.length\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"text\",\n                children: [\"Answer\", post.comments.length === 1 ? \"\" : \"s\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"post-main\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n              href: \"/questions/\".concat(post.uuid),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"post-title\",\n                children: post.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 15\n          }, _this)]\n        }, post.uuid, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"page-handlers\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return setPage(function (old) {\n              return Math.max(old - 1, 0);\n            });\n          },\n          disabled: page === 1,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]),\n          children: \"Previous Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            if (!isPreviousData && data.hasMore) {\n              setPage(function (old) {\n                return old + 1;\n              });\n            }\n          },\n          disabled: isPreviousData || !data.hasMore,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"117212645\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]),\n          children: \"Next Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"117212645\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]],\n      children: \".user-post-container.__jsx-style-dynamic-selector{height:100px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"], \";margin:30px 20px;border-radius:10px;padding:15px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9Vc2VyUXVlc3Rpb25zLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRmtCLEFBR3dCLGFBQzJCLHdDQUN2QixpQkFDRSxtQkFDTixhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9Vc2VyUXVlc3Rpb25zLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IFVzZXJQb3N0c1R5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvdXNlclBvc3RzVHlwZVwiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBUYWcgZnJvbSBcIi4vVGFnXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHV1aWQ6IHN0cmluZztcbn1cblxuY29uc3QgVXNlclF1ZXN0aW9uczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdXVpZCB9KSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG5cbiAgY29uc3QgZmV0Y2hVc2VyUG9zdHMgPSBhc3luYyAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtob3N0fS91c2Vycy8ke3V1aWR9L3Bvc3RzP3BhZ2U9JHtwYWdlfSZsaW1pdD0yMGBcbiAgICApO1xuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9O1xuXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yLCBlcnJvciwgZGF0YSwgaXNQcmV2aW91c0RhdGEgfSA9IHVzZVF1ZXJ5PFxuICAgIFVzZXJQb3N0c1R5cGUsXG4gICAgRXJyb3JcbiAgPihbXCJ1c2VyLXBvc3RzXCIsIHBhZ2VdLCAoKSA9PiBmZXRjaFVzZXJQb3N0cyhwYWdlKSwge1xuICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gICAgY2FjaGVUaW1lOiAwLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcG9zdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAge2RhdGEucG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcG9zdC1jb250YWluZXJcIiBrZXk9e3Bvc3QudXVpZH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1hc2lkZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZXNcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bWJlclwiPntwb3N0LnZvdGVzfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5Wb3Rle3Bvc3Qudm90ZXMgPT09IDEgPyBcIlwiIDogXCJzXCJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bWJlclwiPntwb3N0LmNvbW1lbnRzLmxlbmd0aH08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIEFuc3dlcntwb3N0LmNvbW1lbnRzLmxlbmd0aCA9PT0gMSA/IFwiXCIgOiBcInNcIn1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1tYWluXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9xdWVzdGlvbnMvJHtwb3N0LnV1aWR9YH0+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0LXRpdGxlXCI+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGFuZGxlcnNcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZSgob2xkKSA9PiBNYXRoLm1heChvbGQgLSAxLCAwKSl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmV2aW91cyBQYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXNQcmV2aW91c0RhdGEgJiYgZGF0YS5oYXNNb3JlKSB7XG4gICAgICAgICAgICAgICAgICBzZXRQYWdlKChvbGQpID0+IG9sZCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJldmlvdXNEYXRhIHx8ICFkYXRhLmhhc01vcmV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudXNlci1wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5mbG9hdGluZ1Bvc3RCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBtYXJnaW46IDMwcHggMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudXNlci1wb3N0LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclF1ZXN0aW9ucztcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/UserQuestions.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(UserQuestions, \"B8AHcuIhDtcfT64L9EclU84Jm5E=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = UserQuestions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserQuestions);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserQuestions\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUXVlc3Rpb25zLnRzeD8zODlhIl0sIm5hbWVzIjpbIlVzZXJRdWVzdGlvbnMiLCJ1dWlkIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsImZldGNoVXNlclBvc3RzIiwiZmV0Y2giLCJob3N0IiwicmVzIiwianNvbiIsInVzZVF1ZXJ5Iiwia2VlcFByZXZpb3VzRGF0YSIsImNhY2hlVGltZSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJlcnJvciIsImRhdGEiLCJpc1ByZXZpb3VzRGF0YSIsImNzcyIsIm1lc3NhZ2UiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJ2b3RlcyIsImNvbW1lbnRzIiwibGVuZ3RoIiwidGl0bGUiLCJvbGQiLCJNYXRoIiwibWF4IiwiaGFzTW9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFPQSxJQUFNQSxhQUE4QixHQUFHLFNBQWpDQSxhQUFpQyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUMzQkMsc0RBQVEsQ0FBUyxDQUFULENBRG1CO0FBQUEsTUFDNUNDLElBRDRDO0FBQUEsTUFDdENDLE9BRHNDOztBQUduRCxNQUFNQyxjQUFjO0FBQUEsaU1BQUcsaUJBQU9GLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDSEcsS0FBSyxXQUNsQkMsbURBRGtCLG9CQUNKTixJQURJLHlCQUNlRSxJQURmLGVBREY7O0FBQUE7QUFDZkssaUJBRGU7QUFBQTtBQUFBLHFCQUlSQSxHQUFHLENBQUNDLElBQUosRUFKUTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWRKLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBSG1ELGtCQVVTSyw0REFBUSxDQUdsRSxDQUFDLFlBQUQsRUFBZVAsSUFBZixDQUhrRSxFQUc1QztBQUFBLFdBQU1FLGNBQWMsQ0FBQ0YsSUFBRCxDQUFwQjtBQUFBLEdBSDRDLEVBR2hCO0FBQ2xEUSxvQkFBZ0IsRUFBRSxJQURnQztBQUVsREMsYUFBUyxFQUFFO0FBRnVDLEdBSGdCLENBVmpCO0FBQUEsTUFVM0NDLFNBVjJDLGFBVTNDQSxTQVYyQztBQUFBLE1BVWhDQyxPQVZnQyxhQVVoQ0EsT0FWZ0M7QUFBQSxNQVV2QkMsS0FWdUIsYUFVdkJBLEtBVnVCO0FBQUEsTUFVaEJDLElBVmdCLGFBVWhCQSxJQVZnQjtBQUFBLE1BVVZDLGNBVlUsYUFVVkEsY0FWVTs7QUFrQm5ELHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLGVBQ0dKLFNBQVMsZ0JBQ1I7QUFBQSxpR0FrRGdCSywwRUFsRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFEsR0FFTkosT0FBTyxnQkFDVDtBQUFBLGlHQWdEZ0JJLDBFQWhEaEI7QUFBQSxnQkFBTUgsS0FBSyxDQUFDSTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUyxnQkFHVDtBQUFBLGlHQThDZ0JELDBFQTlDaEIsYUFBZSxzQkFBZjtBQUFBLGlCQUNHRixJQUFJLENBQUNJLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFVBQUNDLElBQUQ7QUFBQSw0QkFDZDtBQUFBLHFHQTRDWUosMEVBNUNaLGFBQWUscUJBQWY7QUFBQSxrQ0FDRTtBQUFBLHVHQTJDVUEsMEVBM0NWLGFBQWUsWUFBZjtBQUFBLG9DQUNFO0FBQUEseUdBMENRQSwwRUExQ1IsYUFBZSxPQUFmO0FBQUEsc0NBQ0U7QUFBQSwyR0F5Q01BLDBFQXpDTixhQUFhLFFBQWI7QUFBQSwwQkFBdUJJLElBQUksQ0FBQ0M7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUEsMkdBd0NNTCwwRUF4Q04sYUFBYSxNQUFiO0FBQUEsbUNBQXlCSSxJQUFJLENBQUNDLEtBQUwsS0FBZSxDQUFmLEdBQW1CLEVBQW5CLEdBQXdCLEdBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFLRTtBQUFBLHlHQXNDUUwsMEVBdENSLGFBQWUsVUFBZjtBQUFBLHNDQUNFO0FBQUEsMkdBcUNNQSwwRUFyQ04sYUFBYSxRQUFiO0FBQUEsMEJBQXVCSSxJQUFJLENBQUNFLFFBQUwsQ0FBY0M7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUEsMkdBb0NNUCwwRUFwQ04sYUFBYSxNQUFiO0FBQUEscUNBQ1NJLElBQUksQ0FBQ0UsUUFBTCxDQUFjQyxNQUFkLEtBQXlCLENBQXpCLEdBQTZCLEVBQTdCLEdBQWtDLEdBRDNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBYUU7QUFBQSx1R0ErQlVQLDBFQS9CVixhQUFlLFdBQWY7QUFBQSxtQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLHVCQUFnQkksSUFBSSxDQUFDckIsSUFBckIsQ0FBVjtBQUFBLHFDQUNFO0FBQUEsMkdBNkJNaUIsMEVBN0JOLGFBQWEsWUFBYjtBQUFBLDBCQUEyQkksSUFBSSxDQUFDSTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkY7QUFBQSxXQUEwQ0osSUFBSSxDQUFDckIsSUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWYsQ0FESCxlQXNCRTtBQUFBLG1HQXdCY2lCLDBFQXhCZCxhQUFlLGVBQWY7QUFBQSxnQ0FDRTtBQUNFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWQsT0FBTyxDQUFDLFVBQUN1QixHQUFEO0FBQUEscUJBQVNDLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixHQUFHLEdBQUcsQ0FBZixFQUFrQixDQUFsQixDQUFUO0FBQUEsYUFBRCxDQUFiO0FBQUEsV0FEWDtBQUVFLGtCQUFRLEVBQUV4QixJQUFJLEtBQUssQ0FGckI7QUFBQSxxR0F1QlllLDBFQXZCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQ0UsaUJBQU8sRUFBRSxtQkFBTTtBQUNiLGdCQUFJLENBQUNELGNBQUQsSUFBbUJELElBQUksQ0FBQ2MsT0FBNUIsRUFBcUM7QUFDbkMxQixxQkFBTyxDQUFDLFVBQUN1QixHQUFEO0FBQUEsdUJBQVNBLEdBQUcsR0FBRyxDQUFmO0FBQUEsZUFBRCxDQUFQO0FBQ0Q7QUFDRixXQUxIO0FBTUUsa0JBQVEsRUFBRVYsY0FBYyxJQUFJLENBQUNELElBQUksQ0FBQ2MsT0FOcEM7QUFBQSxxR0FpQllaLDBFQWpCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBLGdCQW9Eb0JBLDBFQXBEcEI7QUFBQSxvR0FvRG9CQSwwRUFwRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnRUQsQ0FsRkQ7O0dBQU1sQixhO1VBVXdEVSxvRDs7O0tBVnhEVixhO0FBb0ZTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXNlclF1ZXN0aW9ucy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBVc2VyUG9zdHNUeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL3VzZXJQb3N0c1R5cGVcIjtcbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgVGFnIGZyb20gXCIuL1RhZ1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB1dWlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IFVzZXJRdWVzdGlvbnM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHV1aWQgfSkgPT4ge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuXG4gIGNvbnN0IGZldGNoVXNlclBvc3RzID0gYXN5bmMgKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7aG9zdH0vdXNlcnMvJHt1dWlkfS9wb3N0cz9wYWdlPSR7cGFnZX0mbGltaXQ9MjBgXG4gICAgKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgfTtcblxuICBjb25zdCB7IGlzTG9hZGluZywgaXNFcnJvciwgZXJyb3IsIGRhdGEsIGlzUHJldmlvdXNEYXRhIH0gPSB1c2VRdWVyeTxcbiAgICBVc2VyUG9zdHNUeXBlLFxuICAgIEVycm9yXG4gID4oW1widXNlci1wb3N0c1wiLCBwYWdlXSwgKCkgPT4gZmV0Y2hVc2VyUG9zdHMocGFnZSksIHtcbiAgICBrZWVwUHJldmlvdXNEYXRhOiB0cnVlLFxuICAgIGNhY2hlVGltZTogMCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICkgOiBpc0Vycm9yID8gKFxuICAgICAgICA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXBvc3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtkYXRhLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXBvc3QtY29udGFpbmVyXCIga2V5PXtwb3N0LnV1aWR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtYXNpZGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGVzXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudW1iZXJcIj57cG9zdC52b3Rlc308L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+Vm90ZXtwb3N0LnZvdGVzID09PSAxID8gXCJcIiA6IFwic1wifTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudW1iZXJcIj57cG9zdC5jb21tZW50cy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICBBbnN3ZXJ7cG9zdC5jb21tZW50cy5sZW5ndGggPT09IDEgPyBcIlwiIDogXCJzXCJ9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtbWFpblwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcXVlc3Rpb25zLyR7cG9zdC51dWlkfWB9PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPntwb3N0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhhbmRsZXJzXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKG9sZCkgPT4gTWF0aC5tYXgob2xkIC0gMSwgMCkpfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA9PT0gMX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHJldmlvdXMgUGFnZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUHJldmlvdXNEYXRhICYmIGRhdGEuaGFzTW9yZSkge1xuICAgICAgICAgICAgICAgICAgc2V0UGFnZSgob2xkKSA9PiBvbGQgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1ByZXZpb3VzRGF0YSB8fCAhZGF0YS5oYXNNb3JlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOZXh0IFBhZ2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnVzZXItcG9zdC1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuZmxvYXRpbmdQb3N0QmFja2dyb3VuZH07XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItcG9zdC1jb250YWluZXIgPiBkaXYge1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJRdWVzdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserQuestions.tsx\n");

/***/ })

})