webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Question.tsx":
/*!*********************************!*\
  !*** ./components/Question.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n/* harmony import */ var _AskedBy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AskedBy */ \"./components/AskedBy.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Question.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Question = function Question(_ref) {\n  _s();\n\n  var _userContext$user;\n\n  var data = _ref.data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(data.votes),\n      votes = _useState[0],\n      setVotes = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"grey\"),\n      upvoteColor = _useState2[0],\n      setUpvoteColor = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"grey\"),\n      downvoteColor = _useState3[0],\n      setDownvoteColor = _useState3[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_12__[\"UserContext\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n  var upvote = \"#ff4400\";\n  var downvote = \"#7193ff\";\n  var style = {\n    cursor: \"pointer\"\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (userContext.user) {\n      fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_11__[\"default\"], \"/posts/\").concat(data.uuid, \"/vote/status\"), {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          userUuid: userContext.user.uuid\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data2) {\n        if (data2.status) {\n          if (data2.type === \"upvote\") {\n            setUpvoteColor(upvote);\n          } else if (data2.type === \"downvote\") {\n            setDownvoteColor(downvote);\n          }\n        }\n      });\n    }\n  }, [userContext]);\n\n  var vote = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(voteType) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!userContext.user) {\n                _context.next = 10;\n                break;\n              }\n\n              if (!(userContext.user.uuid !== data.user.uuid)) {\n                _context.next = 7;\n                break;\n              }\n\n              fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_11__[\"default\"], \"/posts/\").concat(data.uuid, \"/vote/status\"), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                  userUuid: userContext.user.uuid\n                })\n              }).then(function (res) {\n                return res.json();\n              }).then(function (data2) {\n                return Object(_utils_functions__WEBPACK_IMPORTED_MODULE_10__[\"updateVote\"])(data2, voteType, setVotes, setUpvoteColor, setDownvoteColor, votes, upvote, downvote);\n              });\n              _context.next = 5;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_11__[\"default\"], \"/posts/\").concat(data.uuid, \"/vote\"), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\",\n                  Authorization: \"Bearer \".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_10__[\"getCookie\"])(\"token\"))\n                },\n                body: JSON.stringify({\n                  userUuid: userContext.user.uuid,\n                  voteType: voteType\n                })\n              });\n\n            case 5:\n              _context.next = 8;\n              break;\n\n            case 7:\n              alert(\"You can't vote on your own post!\");\n\n            case 8:\n              _context.next = 12;\n              break;\n\n            case 10:\n              _context.next = 12;\n              return router.push(\"/auth/signup\");\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function vote(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n      className: \"jsx-1304547473\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1304547473\" + \" \" + \"question-container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-1304547473\" + \" \" + \"main\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-1304547473\" + \" \" + \"votes\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faSortUp\"],\n              color: upvoteColor,\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"upvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 106,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              style: {\n                color: \"#c6c6c6\",\n                margin: \"-8px 0\"\n              },\n              className: \"jsx-1304547473\" + \" \" + \"vote-count\",\n              children: votes\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faSortDown\"],\n              color: downvoteColor,\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"downvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-1304547473\" + \" \" + \"main-right\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-1304547473\" + \" \" + \"post-body\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n                className: \"preview\",\n                source: data.body,\n                plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 129,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_AskedBy__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n              username: data.user.username,\n              createdAt: data.createdAt,\n              postUuid: data.user.uuid,\n              userUuid: userContext === null || userContext === void 0 ? void 0 : (_userContext$user = userContext.user) === null || _userContext$user === void 0 ? void 0 : _userContext$user.uuid\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1304547473\",\n      children: \".question-container.jsx-1304547473{width:92%;margin:0 auto;}.main.jsx-1304547473{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:20px 0;}.votes.jsx-1304547473{width:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin:14px 10px;}.main-right.jsx-1304547473{width:95%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9RdWVzdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUprQixBQUdxQixBQUtHLEFBS0osQUFTQyxTQVJHLENBVkMsQUFtQmhCLGNBbEJBLGtEQUlnQixTQU1RLEtBTHhCLHlFQU1xQiw2RkFDUSx5R0FDVixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9jb21wb25lbnRzL1F1ZXN0aW9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhU29ydFVwLCBmYVNvcnREb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7IFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgeyBnZXRDb29raWUsIGdldFRpbWUsIHVwZGF0ZVZvdGUgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyB2b3RlVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy92b3RlVHlwZVwiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcbmltcG9ydCBBc2tlZEJ5IGZyb20gXCIuL0Fza2VkQnlcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YTogUXVlc3Rpb25UeXBlO1xufVxuXG5jb25zdCBRdWVzdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IFt2b3Rlcywgc2V0Vm90ZXNdID0gdXNlU3RhdGU8bnVtYmVyPihkYXRhLnZvdGVzKTtcbiAgY29uc3QgW3Vwdm90ZUNvbG9yLCBzZXRVcHZvdGVDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiZ3JleVwiKTtcbiAgY29uc3QgW2Rvd252b3RlQ29sb3IsIHNldERvd252b3RlQ29sb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcImdyZXlcIik7XG5cbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgdXB2b3RlID0gXCIjZmY0NDAwXCI7XG4gIGNvbnN0IGRvd252b3RlID0gXCIjNzE5M2ZmXCI7XG5cbiAgY29uc3Qgc3R5bGUgPSB7IGN1cnNvcjogXCJwb2ludGVyXCIgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyQ29udGV4dC51c2VyKSB7XG4gICAgICBmZXRjaChgJHtob3N0fS9wb3N0cy8ke2RhdGEudXVpZH0vdm90ZS9zdGF0dXNgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEyOiB2b3RlVHlwZSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhMi5zdGF0dXMpIHtcbiAgICAgICAgICAgIGlmIChkYXRhMi50eXBlID09PSBcInVwdm90ZVwiKSB7XG4gICAgICAgICAgICAgIHNldFVwdm90ZUNvbG9yKHVwdm90ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEyLnR5cGUgPT09IFwiZG93bnZvdGVcIikge1xuICAgICAgICAgICAgICBzZXREb3dudm90ZUNvbG9yKGRvd252b3RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VzZXJDb250ZXh0XSk7XG5cbiAgY29uc3Qgdm90ZSA9IGFzeW5jICh2b3RlVHlwZTogXCJ1cHZvdGVcIiB8IFwiZG93bnZvdGVcIikgPT4ge1xuICAgIGlmICh1c2VyQ29udGV4dC51c2VyKSB7XG4gICAgICBpZiAodXNlckNvbnRleHQudXNlci51dWlkICE9PSBkYXRhLnVzZXIudXVpZCkge1xuICAgICAgICBmZXRjaChgJHtob3N0fS9wb3N0cy8ke2RhdGEudXVpZH0vdm90ZS9zdGF0dXNgLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbigoZGF0YTI6IHZvdGVUeXBlKSA9PlxuICAgICAgICAgICAgdXBkYXRlVm90ZShcbiAgICAgICAgICAgICAgZGF0YTIsXG4gICAgICAgICAgICAgIHZvdGVUeXBlLFxuICAgICAgICAgICAgICBzZXRWb3RlcyxcbiAgICAgICAgICAgICAgc2V0VXB2b3RlQ29sb3IsXG4gICAgICAgICAgICAgIHNldERvd252b3RlQ29sb3IsXG4gICAgICAgICAgICAgIHZvdGVzLFxuICAgICAgICAgICAgICB1cHZvdGUsXG4gICAgICAgICAgICAgIGRvd252b3RlXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgZmV0Y2goYCR7aG9zdH0vcG9zdHMvJHtkYXRhLnV1aWR9L3ZvdGVgLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdXNlclV1aWQ6IHVzZXJDb250ZXh0LnVzZXIudXVpZCxcbiAgICAgICAgICAgIHZvdGVUeXBlOiB2b3RlVHlwZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIllvdSBjYW4ndCB2b3RlIG9uIHlvdXIgb3duIHBvc3QhXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCByb3V0ZXIucHVzaChcIi9hdXRoL3NpZ251cFwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZXNcIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhU29ydFVwfVxuICAgICAgICAgICAgICAgIGNvbG9yPXt1cHZvdGVDb2xvcn1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgc2l6ZT17XCIyeFwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJ1cHZvdGVcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidm90ZS1jb3VudFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2M2YzZjNlwiLCBtYXJnaW46IFwiLThweCAwXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt2b3Rlc31cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTb3J0RG93bn1cbiAgICAgICAgICAgICAgICBjb2xvcj17ZG93bnZvdGVDb2xvcn1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgc2l6ZT17XCIyeFwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJkb3dudm90ZVwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgc291cmNlPXtkYXRhLmJvZHl9XG4gICAgICAgICAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEFza2VkQnlcbiAgICAgICAgICAgICAgICB1c2VybmFtZT17ZGF0YS51c2VyLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdD17ZGF0YS5jcmVhdGVkQXR9XG4gICAgICAgICAgICAgICAgcG9zdFV1aWQ9e2RhdGEudXNlci51dWlkfVxuICAgICAgICAgICAgICAgIHVzZXJVdWlkPXt1c2VyQ29udGV4dD8udXNlcj8udXVpZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucXVlc3Rpb24tY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogOTIlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAudm90ZXMge1xuICAgICAgICAgIHdpZHRoOiA1JTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luOiAxNHB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbi1yaWdodCB7XG4gICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Question.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 101,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Question, \"I6vaFkRatAuPG4G+CwhBMxjQvOo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"]];\n});\n\n_c = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\n\nvar _c;\n\n$RefreshReg$(_c, \"Question\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWVzdGlvbi50c3g/ZjE2MCJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsImRhdGEiLCJ1c2VTdGF0ZSIsInZvdGVzIiwic2V0Vm90ZXMiLCJ1cHZvdGVDb2xvciIsInNldFVwdm90ZUNvbG9yIiwiZG93bnZvdGVDb2xvciIsInNldERvd252b3RlQ29sb3IiLCJ1c2VyQ29udGV4dCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInVwdm90ZSIsImRvd252b3RlIiwic3R5bGUiLCJjdXJzb3IiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwiZmV0Y2giLCJob3N0IiwidXVpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJVdWlkIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhMiIsInN0YXR1cyIsInR5cGUiLCJ2b3RlIiwidm90ZVR5cGUiLCJ1cGRhdGVWb3RlIiwiQXV0aG9yaXphdGlvbiIsImdldENvb2tpZSIsImFsZXJ0IiwicHVzaCIsImZhU29ydFVwIiwiY29sb3IiLCJtYXJnaW4iLCJmYVNvcnREb3duIiwicmVtYXJrR2ZtIiwidXNlcm5hbWUiLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxRQUF5QixHQUFHLFNBQTVCQSxRQUE0QixPQUFjO0FBQUE7O0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNwQkMsc0RBQVEsQ0FBU0QsSUFBSSxDQUFDRSxLQUFkLENBRFk7QUFBQSxNQUN2Q0EsS0FEdUM7QUFBQSxNQUNoQ0MsUUFEZ0M7O0FBQUEsbUJBRVJGLHNEQUFRLENBQVMsTUFBVCxDQUZBO0FBQUEsTUFFdkNHLFdBRnVDO0FBQUEs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QyxVQUFELENBQVY7QUFBQTtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBdUJFO0FBQUEsZ0RBQWUsWUFBZjtBQUFBLG9DQUNFO0FBQUEsa0RBQWUsV0FBZjtBQUFBLHFDQUNFLHFFQUFDLHFEQUFEO0FBQ0UseUJBQVMsRUFBQyxTQURaO0FBRUUsc0JBQU0sRUFBRWxDLElBQUksQ0FBQ3dCLElBRmY7QUFHRSx1QkFBTyxFQUFFLENBQUNxQixpREFBRDtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBUUUscUVBQUMsaURBQUQ7QUFDRSxzQkFBUSxFQUFFN0MsSUFBSSxDQUFDa0IsSUFBTCxDQUFVNEIsUUFEdEI7QUFFRSx1QkFBUyxFQUFFOUMsSUFBSSxDQUFDK0MsU0FGbEI7QUFHRSxzQkFBUSxFQUFFL0MsSUFBSSxDQUFDa0IsSUFBTCxDQUFVRyxJQUh0QjtBQUlFLHNCQUFRLEVBQUViLFdBQUYsYUFBRUEsV0FBRiw0Q0FBRUEsV0FBVyxDQUFFVSxJQUFmLHNEQUFFLGtCQUFtQkc7QUFKL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3RUQsQ0F6SkQ7O0dBQU10QixRO1VBTVdhLHFEOzs7S0FOWGIsUTtBQTJKU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1ZXN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhU29ydFVwLCBmYVNvcnREb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7IFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgeyBnZXRDb29raWUsIGdldFRpbWUsIHVwZGF0ZVZvdGUgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyB2b3RlVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy92b3RlVHlwZVwiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcbmltcG9ydCBBc2tlZEJ5IGZyb20gXCIuL0Fza2VkQnlcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YTogUXVlc3Rpb25UeXBlO1xufVxuXG5jb25zdCBRdWVzdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IFt2b3Rlcywgc2V0Vm90ZXNdID0gdXNlU3RhdGU8bnVtYmVyPihkYXRhLnZvdGVzKTtcbiAgY29uc3QgW3Vwdm90ZUNvbG9yLCBzZXRVcHZvdGVDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiZ3JleVwiKTtcbiAgY29uc3QgW2Rvd252b3RlQ29sb3IsIHNldERvd252b3RlQ29sb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcImdyZXlcIik7XG5cbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgdXB2b3RlID0gXCIjZmY0NDAwXCI7XG4gIGNvbnN0IGRvd252b3RlID0gXCIjNzE5M2ZmXCI7XG5cbiAgY29uc3Qgc3R5bGUgPSB7IGN1cnNvcjogXCJwb2ludGVyXCIgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyQ29udGV4dC51c2VyKSB7XG4gICAgICBmZXRjaChgJHtob3N0fS9wb3N0cy8ke2RhdGEudXVpZH0vdm90ZS9zdGF0dXNgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEyOiB2b3RlVHlwZSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhMi5zdGF0dXMpIHtcbiAgICAgICAgICAgIGlmIChkYXRhMi50eXBlID09PSBcInVwdm90ZVwiKSB7XG4gICAgICAgICAgICAgIHNldFVwdm90ZUNvbG9yKHVwdm90ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEyLnR5cGUgPT09IFwiZG93bnZvdGVcIikge1xuICAgICAgICAgICAgICBzZXREb3dudm90ZUNvbG9yKGRvd252b3RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VzZXJDb250ZXh0XSk7XG5cbiAgY29uc3Qgdm90ZSA9IGFzeW5jICh2b3RlVHlwZTogXCJ1cHZvdGVcIiB8IFwiZG93bnZvdGVcIikgPT4ge1xuICAgIGlmICh1c2VyQ29udGV4dC51c2VyKSB7XG4gICAgICBpZiAodXNlckNvbnRleHQudXNlci51dWlkICE9PSBkYXRhLnVzZXIudXVpZCkge1xuICAgICAgICBmZXRjaChgJHtob3N0fS9wb3N0cy8ke2RhdGEudXVpZH0vdm90ZS9zdGF0dXNgLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbigoZGF0YTI6IHZvdGVUeXBlKSA9PlxuICAgICAgICAgICAgdXBkYXRlVm90ZShcbiAgICAgICAgICAgICAgZGF0YTIsXG4gICAgICAgICAgICAgIHZvdGVUeXBlLFxuICAgICAgICAgICAgICBzZXRWb3RlcyxcbiAgICAgICAgICAgICAgc2V0VXB2b3RlQ29sb3IsXG4gICAgICAgICAgICAgIHNldERvd252b3RlQ29sb3IsXG4gICAgICAgICAgICAgIHZvdGVzLFxuICAgICAgICAgICAgICB1cHZvdGUsXG4gICAgICAgICAgICAgIGRvd252b3RlXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgZmV0Y2goYCR7aG9zdH0vcG9zdHMvJHtkYXRhLnV1aWR9L3ZvdGVgLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdXNlclV1aWQ6IHVzZXJDb250ZXh0LnVzZXIudXVpZCxcbiAgICAgICAgICAgIHZvdGVUeXBlOiB2b3RlVHlwZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIllvdSBjYW4ndCB2b3RlIG9uIHlvdXIgb3duIHBvc3QhXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCByb3V0ZXIucHVzaChcIi9hdXRoL3NpZ251cFwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZXNcIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhU29ydFVwfVxuICAgICAgICAgICAgICAgIGNvbG9yPXt1cHZvdGVDb2xvcn1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgc2l6ZT17XCIyeFwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJ1cHZvdGVcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidm90ZS1jb3VudFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2M2YzZjNlwiLCBtYXJnaW46IFwiLThweCAwXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt2b3Rlc31cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTb3J0RG93bn1cbiAgICAgICAgICAgICAgICBjb2xvcj17ZG93bnZvdGVDb2xvcn1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgc2l6ZT17XCIyeFwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJkb3dudm90ZVwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgc291cmNlPXtkYXRhLmJvZHl9XG4gICAgICAgICAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEFza2VkQnlcbiAgICAgICAgICAgICAgICB1c2VybmFtZT17ZGF0YS51c2VyLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdD17ZGF0YS5jcmVhdGVkQXR9XG4gICAgICAgICAgICAgICAgcG9zdFV1aWQ9e2RhdGEudXNlci51dWlkfVxuICAgICAgICAgICAgICAgIHVzZXJVdWlkPXt1c2VyQ29udGV4dD8udXNlcj8udXVpZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucXVlc3Rpb24tY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogOTIlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAudm90ZXMge1xuICAgICAgICAgIHdpZHRoOiA1JTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luOiAxNHB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbi1yaWdodCB7XG4gICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Question.tsx\n");

/***/ })

})