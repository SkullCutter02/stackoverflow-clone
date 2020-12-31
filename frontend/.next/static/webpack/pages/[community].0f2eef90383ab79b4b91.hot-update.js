webpackHotUpdate_N_E("pages/[community]",{

/***/ "./pages/[community]/index.tsx":
/*!*************************************!*\
  !*** ./pages/[community]/index.tsx ***!
  \*************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _components_Aside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Aside */ \"./components/Aside.tsx\");\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _components_CommunityPost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/CommunityPost */ \"./components/CommunityPost.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/[community]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CommunityPostPage = function CommunityPostPage(_ref) {\n  _s();\n\n  var community = _ref.community;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchPosts = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {\n      var res, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/communities/\").concat(community, \"/posts?page=\").concat(page, \"&limit=10\"));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchPosts(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])([\"community-posts\", page], function () {\n    return fetchPosts(page);\n  }, {\n    keepPreviousData: true,\n    cacheTime: 0\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isPreviousData = _useQuery.isPreviousData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3242244371\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"headerBackground\"]]]]) + \" \" + \"community-post-header-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3242244371\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"headerBackground\"]]]]) + \" \" + \"header-title\",\n        children: data === null || data === void 0 ? void 0 : data.community.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3242244371\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"headerBackground\"]]]]) + \" \" + \"header-description\",\n        children: data === null || data === void 0 ? void 0 : data.community.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3242244371\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"headerBackground\"]]]]) + \" \" + \"community-post-page-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3242244371\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"headerBackground\"]]]]) + \" \" + \"posts-container\",\n        children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3242244371\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"headerBackground\"]]]]),\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3242244371\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"headerBackground\"]]]]),\n          children: error.message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3242244371\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"headerBackground\"]]]]) + \" \" + \"community-posts-container\",\n            children: data.posts.map(function (post) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_CommunityPost__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                uuid: post.uuid,\n                title: post.title,\n                body: post.body,\n                votes: post.votes,\n                username: post.user.username,\n                commentLength: post.comments.length\n              }, post.uuid, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 19\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3242244371\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"headerBackground\"]]]]) + \" \" + \"page-handlers\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3242244371\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"headerBackground\"]]]]) + \" \" + \"current-page\",\n              children: [\"Current Page: \", page]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              onClick: function onClick() {\n                return setPage(function (old) {\n                  return Math.max(old - 1, 0);\n                });\n              },\n              disabled: page === 1,\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3242244371\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"headerBackground\"]]]]),\n              children: \"Previous Page\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              onClick: function onClick() {\n                if (!isPreviousData && data.hasMore) {\n                  setPage(function (old) {\n                    return old + 1;\n                  });\n                }\n              },\n              disabled: isPreviousData || !data.hasMore,\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3242244371\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"headerBackground\"]]]]),\n              children: \"Next Page\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Aside__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        borderSide: \"left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"3242244371\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"headerBackground\"]],\n      children: \".community-post-header-container.__jsx-style-dynamic-selector{height:140px;width:100%;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"headerBackground\"], \";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header-title.__jsx-style-dynamic-selector,.header-description.__jsx-style-dynamic-selector{width:90%;margin:10px 0;}.community-post-page-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.posts-container.__jsx-style-dynamic-selector{width:80%;}.community-posts-container.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvW2NvbW11bml0eV0vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGa0IsQUFHd0IsQUFXSCxBQUtHLEFBS0gsQUFJQyxVQWJHLEFBVWhCLENBSWUsRUF6QkYsV0FDNkIsQUFXMUMsd0NBVmUsVUFjRixXQUNiLEFBU3dCLHFEQXZCQSx5QkF3QkgscURBdkJJLHdDQXdCekIsMkRBdkJxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9wYWdlcy9bY29tbXVuaXR5XS9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgQ29tbXVuaXR5UG9zdHNUeXBlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3R5cGVzL3Bvc3RUeXBlXCI7XG5pbXBvcnQgQXNpZGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXNpZGVcIjtcbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgQ29tbXVuaXR5UG9zdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db21tdW5pdHlQb3N0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbW11bml0eTogc3RyaW5nO1xufVxuXG5jb25zdCBDb21tdW5pdHlQb3N0UGFnZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY29tbXVuaXR5IH0pID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7aG9zdH0vY29tbXVuaXRpZXMvJHtjb21tdW5pdHl9L3Bvc3RzP3BhZ2U9JHtwYWdlfSZsaW1pdD0xMGBcbiAgICApO1xuICAgIGNvbnN0IGRhdGE6IENvbW11bml0eVBvc3RzVHlwZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yLCBkYXRhLCBpc1ByZXZpb3VzRGF0YSB9ID0gdXNlUXVlcnk8XG4gICAgQ29tbXVuaXR5UG9zdHNUeXBlLFxuICAgIEVycm9yXG4gID4oW1wiY29tbXVuaXR5LXBvc3RzXCIsIHBhZ2VdLCAoKSA9PiBmZXRjaFBvc3RzKHBhZ2UpLCB7XG4gICAga2VlcFByZXZpb3VzRGF0YTogdHJ1ZSxcbiAgICBjYWNoZVRpbWU6IDAsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tdW5pdHktcG9zdC1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj57ZGF0YT8uY29tbXVuaXR5Lm5hbWV9PC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGVyLWRlc2NyaXB0aW9uXCI+e2RhdGE/LmNvbW11bml0eS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXR5LXBvc3QtcGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0cy1jb250YWluZXJcIj5cbiAgICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgICAgICA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXR5LXBvc3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPENvbW11bml0eVBvc3RcbiAgICAgICAgICAgICAgICAgICAgdXVpZD17cG9zdC51dWlkfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgYm9keT17cG9zdC5ib2R5fVxuICAgICAgICAgICAgICAgICAgICB2b3Rlcz17cG9zdC52b3Rlc31cbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e3Bvc3QudXNlci51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY29tbWVudExlbmd0aD17cG9zdC5jb21tZW50cy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgIGtleT17cG9zdC51dWlkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oYW5kbGVyc1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN1cnJlbnQtcGFnZVwiPkN1cnJlbnQgUGFnZToge3BhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKG9sZCkgPT4gTWF0aC5tYXgob2xkIC0gMSwgMCkpfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUHJldmlvdXMgUGFnZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ByZXZpb3VzRGF0YSAmJiBkYXRhLmhhc01vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlKChvbGQpID0+IG9sZCArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJldmlvdXNEYXRhIHx8ICFkYXRhLmhhc01vcmV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTmV4dCBQYWdlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFzaWRlIGJvcmRlclNpZGU9e1wibGVmdFwifSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbW11bml0eS1wb3N0LWhlYWRlci1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaGVhZGVyQmFja2dyb3VuZH07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLXRpdGxlLFxuICAgICAgICAuaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW11bml0eS1wb3N0LXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RzLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tdW5pdHktcG9zdHMtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb21tdW5pdHk6IGNvbnRleHQucGFyYW1zLmNvbW11bml0eSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbXVuaXR5UG9zdFBhZ2U7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/[community]/index.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CommunityPostPage, \"B8AHcuIhDtcfT64L9EclU84Jm5E=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = CommunityPostPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommunityPostPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommunityPostPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2NvbW11bml0eV0vaW5kZXgudHN4Pzg4NTciXSwibmFtZXMiOlsiQ29tbXVuaXR5UG9zdFBhZ2UiLCJjb21tdW5pdHkiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwiaG9zdCIsInJlcyIsImpzb24iLCJkYXRhIiwidXNlUXVlcnkiLCJrZWVwUHJldmlvdXNEYXRhIiwiY2FjaGVUaW1lIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsImVycm9yIiwiaXNQcmV2aW91c0RhdGEiLCJjc3MiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJtZXNzYWdlIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwidXVpZCIsInRpdGxlIiwiYm9keSIsInZvdGVzIiwidXNlciIsInVzZXJuYW1lIiwiY29tbWVudHMiLCJsZW5ndGgiLCJvbGQiLCJNYXRoIiwibWF4IiwiaGFzTW9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxpQkFBa0MsR0FBRyxTQUFyQ0EsaUJBQXFDLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFBQSxrQkFDcENDLHNEQUFRLENBQVMsQ0FBVCxDQUQ0QjtBQUFBLE1BQ3JEQyxJQURxRDtBQUFBLE1BQy9DQyxPQUQrQzs7QUFHNUQsTUFBTUMsVUFBVTtBQUFBLGlNQUFHLGlCQUFPRixJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0NHLEtBQUssV0FDbEJDLG1EQURrQiwwQkFDRU4sU0FERix5QkFDMEJFLElBRDFCLGVBRE47O0FBQUE7QUFDWEssaUJBRFc7QUFBQTtBQUFBLHFCQUlzQkEsR0FBRyxDQUFDQyxJQUFKLEVBSnRCOztBQUFBO0FBSVhDLGtCQUpXO0FBQUEsK0NBS1ZBLElBTFU7O0FBQUE7QUFBQTtBQUFB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ZSxvRUEzQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFRRTtBQUNFLHFCQUFPLEVBQUUsbUJBQU07QUFDYixvQkFBSSxDQUFDRCxjQUFELElBQW1CUCxJQUFJLENBQUMwQixPQUE1QixFQUFxQztBQUNuQ2hDLHlCQUFPLENBQUMsVUFBQzZCLEdBQUQ7QUFBQSwyQkFBU0EsR0FBRyxHQUFHLENBQWY7QUFBQSxtQkFBRCxDQUFQO0FBQ0Q7QUFDRixlQUxIO0FBTUUsc0JBQVEsRUFBRWhCLGNBQWMsSUFBSSxDQUFDUCxJQUFJLENBQUMwQixPQU5wQztBQUFBLDBHQXFCUWxCLG9FQXJCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBMkNFLHFFQUFDLHlEQUFEO0FBQU8sa0JBQVUsRUFBRTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQSxnQkF1RG9CQSxvRUF2RHBCO0FBQUEsMkhBdURvQkEsb0VBdkRwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUZELENBMUdEOztHQUFNbEIsaUI7VUFXd0RXLG9EOzs7S0FYeERYLGlCOztBQW9IU0EsZ0ZBQWYiLCJmaWxlIjoiLi9wYWdlcy9bY29tbXVuaXR5XS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgQ29tbXVuaXR5UG9zdHNUeXBlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3R5cGVzL3Bvc3RUeXBlXCI7XG5pbXBvcnQgQXNpZGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXNpZGVcIjtcbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgQ29tbXVuaXR5UG9zdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db21tdW5pdHlQb3N0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbW11bml0eTogc3RyaW5nO1xufVxuXG5jb25zdCBDb21tdW5pdHlQb3N0UGFnZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY29tbXVuaXR5IH0pID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7aG9zdH0vY29tbXVuaXRpZXMvJHtjb21tdW5pdHl9L3Bvc3RzP3BhZ2U9JHtwYWdlfSZsaW1pdD0xMGBcbiAgICApO1xuICAgIGNvbnN0IGRhdGE6IENvbW11bml0eVBvc3RzVHlwZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yLCBkYXRhLCBpc1ByZXZpb3VzRGF0YSB9ID0gdXNlUXVlcnk8XG4gICAgQ29tbXVuaXR5UG9zdHNUeXBlLFxuICAgIEVycm9yXG4gID4oW1wiY29tbXVuaXR5LXBvc3RzXCIsIHBhZ2VdLCAoKSA9PiBmZXRjaFBvc3RzKHBhZ2UpLCB7XG4gICAga2VlcFByZXZpb3VzRGF0YTogdHJ1ZSxcbiAgICBjYWNoZVRpbWU6IDAsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tdW5pdHktcG9zdC1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj57ZGF0YT8uY29tbXVuaXR5Lm5hbWV9PC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGVyLWRlc2NyaXB0aW9uXCI+e2RhdGE/LmNvbW11bml0eS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXR5LXBvc3QtcGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0cy1jb250YWluZXJcIj5cbiAgICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgICAgICA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXR5LXBvc3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPENvbW11bml0eVBvc3RcbiAgICAgICAgICAgICAgICAgICAgdXVpZD17cG9zdC51dWlkfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgYm9keT17cG9zdC5ib2R5fVxuICAgICAgICAgICAgICAgICAgICB2b3Rlcz17cG9zdC52b3Rlc31cbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e3Bvc3QudXNlci51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY29tbWVudExlbmd0aD17cG9zdC5jb21tZW50cy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgIGtleT17cG9zdC51dWlkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oYW5kbGVyc1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN1cnJlbnQtcGFnZVwiPkN1cnJlbnQgUGFnZToge3BhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKG9sZCkgPT4gTWF0aC5tYXgob2xkIC0gMSwgMCkpfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUHJldmlvdXMgUGFnZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ByZXZpb3VzRGF0YSAmJiBkYXRhLmhhc01vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlKChvbGQpID0+IG9sZCArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJldmlvdXNEYXRhIHx8ICFkYXRhLmhhc01vcmV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTmV4dCBQYWdlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFzaWRlIGJvcmRlclNpZGU9e1wibGVmdFwifSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbW11bml0eS1wb3N0LWhlYWRlci1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaGVhZGVyQmFja2dyb3VuZH07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLXRpdGxlLFxuICAgICAgICAuaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW11bml0eS1wb3N0LXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RzLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tdW5pdHktcG9zdHMtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb21tdW5pdHk6IGNvbnRleHQucGFyYW1zLmNvbW11bml0eSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbXVuaXR5UG9zdFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[community]/index.tsx\n");

/***/ })

})