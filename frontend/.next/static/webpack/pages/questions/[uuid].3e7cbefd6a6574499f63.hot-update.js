webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Answer.tsx":
/*!*******************************!*\
  !*** ./components/Answer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _AskedBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AskedBy */ \"./components/AskedBy.tsx\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Answer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Answer = function Answer(_ref) {\n  _s();\n\n  var _userContext$user;\n\n  var comment = _ref.comment;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(comment.votes),\n      votes = _useState[0],\n      setVotes = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"grey\"),\n      upvoteColor = _useState2[0],\n      setUpvoteColor = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"grey\"),\n      downvoteColor = _useState3[0],\n      setDownvoteColor = _useState3[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_10__[\"UserContext\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n  var style = {\n    cursor: \"pointer\"\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var pres = document.querySelectorAll(\"pre\");\n\n    for (var i = 0; i < pres.length; i++) {\n      highlight_js__WEBPACK_IMPORTED_MODULE_11___default.a.highlightBlock(pres[i]);\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (userContext.user) {\n      fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_12__[\"default\"], \"/posts/comments/\").concat(comment.uuid, \"/vote/status\"), {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          userUuid: userContext.user.uuid\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        if (data.status) {\n          if (data.type === \"upvote\") {\n            setUpvoteColor(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"upvote\"]);\n          } else if (data.type === \"downvote\") {\n            setDownvoteColor(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"downvote\"]);\n          }\n        }\n      });\n    }\n  }, [userContext]);\n\n  var vote = function vote(voteType) {\n    if (userContext.user) {} else {}\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1321083110\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"answer-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1321083110\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"votes\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faSortUp\"],\n          color: upvoteColor,\n          style: style,\n          size: \"2x\",\n          onClick: function onClick() {\n            return vote(\"upvote\");\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          style: {\n            color: \"#c6c6c6\",\n            margin: \"-8px 0\"\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1321083110\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"vote-count\",\n          children: votes\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faSortDown\"],\n          color: downvoteColor,\n          style: style,\n          size: \"2x\",\n          onClick: function onClick() {\n            return vote(\"downvote\");\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          width: \"95%\"\n        },\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1321083110\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          className: \"preview answer-pre\",\n          source: comment.body,\n          plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1321083110\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]]]]) + \" \" + \"user\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_AskedBy__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            type: \"answered\",\n            username: comment.user.username,\n            createdAt: comment.createdAt,\n            postUuid: comment.user.uuid,\n            userUuid: userContext === null || userContext === void 0 ? void 0 : (_userContext$user = userContext.user) === null || _userContext$user === void 0 ? void 0 : _userContext$user.uuid,\n            reputation: comment.user.reputation\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1321083110\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"]],\n      children: \".answer-container.__jsx-style-dynamic-selector{width:100%;margin-bottom:30px;padding:5px 5px 20px;border-radius:10px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_8__[\"floatingPostBackground\"], \";position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.user.__jsx-style-dynamic-selector{position:absolute;bottom:10px;right:5px;}.votes.__jsx-style-dynamic-selector{width:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-top:14px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9BbnN3ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHa0IsQUFHc0IsQUFVTyxBQU1ULFNBQ0ksRUFoQk0sT0FVUCxZQVRTLEFBVVgsVUFDWixXQVZxQixtQkFDcUIsYUFjbEIsMkJBYkosa0JBQ0wsaUNBYU0seUNBWnJCLG9EQWE2Qix5R0FDWCxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9jb21wb25lbnRzL0Fuc3dlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFTb3J0RG93biwgZmFTb3J0VXAgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgeyBDb21tZW50VHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgeyBWb3RlVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy92b3RlVHlwZVwiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBBc2tlZEJ5IGZyb20gXCIuL0Fza2VkQnlcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcbmltcG9ydCBobGpzIGZyb20gXCJoaWdobGlnaHQuanNcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbW1lbnQ6IENvbW1lbnRUeXBlO1xufVxuXG5jb25zdCBBbnN3ZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNvbW1lbnQgfSkgPT4ge1xuICBjb25zdCBbdm90ZXMsIHNldFZvdGVzXSA9IHVzZVN0YXRlPG51bWJlcj4oY29tbWVudC52b3Rlcyk7XG4gIGNvbnN0IFt1cHZvdGVDb2xvciwgc2V0VXB2b3RlQ29sb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcImdyZXlcIik7XG4gIGNvbnN0IFtkb3dudm90ZUNvbG9yLCBzZXREb3dudm90ZUNvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJncmV5XCIpO1xuXG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHN0eWxlID0geyBjdXJzb3I6IFwicG9pbnRlclwiIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInByZVwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayhwcmVzW2ldKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyQ29udGV4dC51c2VyKSB7XG4gICAgICBmZXRjaChgJHtob3N0fS9wb3N0cy9jb21tZW50cy8ke2NvbW1lbnQudXVpZH0vdm90ZS9zdGF0dXNgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGE6IFZvdGVUeXBlKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSBcInVwdm90ZVwiKSB7XG4gICAgICAgICAgICAgIHNldFVwdm90ZUNvbG9yKGNzcy51cHZvdGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09IFwiZG93bnZvdGVcIikge1xuICAgICAgICAgICAgICBzZXREb3dudm90ZUNvbG9yKGNzcy5kb3dudm90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIFt1c2VyQ29udGV4dF0pO1xuXG4gIGNvbnN0IHZvdGUgPSAodm90ZVR5cGU6IFwidXB2b3RlXCIgfCBcImRvd252b3RlXCIpID0+IHtcbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgIH0gZWxzZSB7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZXNcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBpY29uPXtmYVNvcnRVcH1cbiAgICAgICAgICAgIGNvbG9yPXt1cHZvdGVDb2xvcn1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHNpemU9e1wiMnhcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJ1cHZvdGVcIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidm90ZS1jb3VudFwiXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjYzZjNmM2XCIsIG1hcmdpbjogXCItOHB4IDBcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2b3Rlc31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgaWNvbj17ZmFTb3J0RG93bn1cbiAgICAgICAgICAgIGNvbG9yPXtkb3dudm90ZUNvbG9yfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgc2l6ZT17XCIyeFwifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcImRvd252b3RlXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjk1JVwiIH19PlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3IGFuc3dlci1wcmVcIlxuICAgICAgICAgICAgc291cmNlPXtjb21tZW50LmJvZHl9XG4gICAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgICAgPEFza2VkQnlcbiAgICAgICAgICAgICAgdHlwZT17XCJhbnN3ZXJlZFwifVxuICAgICAgICAgICAgICB1c2VybmFtZT17Y29tbWVudC51c2VyLnVzZXJuYW1lfVxuICAgICAgICAgICAgICBjcmVhdGVkQXQ9e2NvbW1lbnQuY3JlYXRlZEF0fVxuICAgICAgICAgICAgICBwb3N0VXVpZD17Y29tbWVudC51c2VyLnV1aWR9XG4gICAgICAgICAgICAgIHVzZXJVdWlkPXt1c2VyQ29udGV4dD8udXNlcj8udXVpZH1cbiAgICAgICAgICAgICAgcmVwdXRhdGlvbj17Y29tbWVudC51c2VyLnJlcHV0YXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hbnN3ZXItY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmZsb2F0aW5nUG9zdEJhY2tncm91bmR9O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3RlcyB7XG4gICAgICAgICAgd2lkdGg6IDUlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuc3dlcjtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Answer.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Answer, \"RV0q2OCHdtH/22AsmnvVUEbhveI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"]];\n});\n\n_c = Answer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Answer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Answer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbnN3ZXIudHN4P2IxYzQiXSwibmFtZXMiOlsiQW5zd2VyIiwiY29tbWVudCIsInVzZVN0YXRlIiwidm90ZXMiLCJzZXRWb3RlcyIsInVwdm90ZUNvbG9yIiwic2V0VXB2b3RlQ29sb3IiLCJkb3dudm90ZUNvbG9yIiwic2V0RG93bnZvdGVDb2xvciIsInVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwic3R5bGUiLCJjdXJzb3IiLCJ1c2VFZmZlY3QiLCJwcmVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImhsanMiLCJoaWdobGlnaHRCbG9jayIsInVzZXIiLCJmZXRjaCIsImhvc3QiLCJ1dWlkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlclV1aWQiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJ0eXBlIiwiY3NzIiwidm90ZSIsInZvdGVUeXBlIiwiZmFTb3J0VXAiLCJjb2xvciIsIm1hcmdpbiIsImZhU29ydERvd24iLCJ3aWR0aCIsInJlbWFya0dmbSIsInVzZXJuYW1lIiwiY3JlYXRlZEF0IiwicmVwdXRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsTUFBdUIsR0FBRyxTQUExQkEsTUFBMEIsT0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQ3JCQyxzREFBUSxDQUFTRCxPQUFPLENBQUNFLEtBQWpCLENBRGE7QUFBQSxNQUN4Q0EsS0FEd0M7QUFBQSxNQUNqQ0MsUUFEaUM7O0FBQUEsbUJBRVRGLHNEQUFRLENBQVMsTUFBVCxD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eEMsTTtVQU1XYSxxRDs7O0tBTlhiLE07QUEwSFNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BbnN3ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhU29ydERvd24sIGZhU29ydFVwIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQ29tbWVudFR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0IHsgVm90ZVR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvdm90ZVR5cGVcIjtcbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5pbXBvcnQgQXNrZWRCeSBmcm9tIFwiLi9Bc2tlZEJ5XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgaGxqcyBmcm9tIFwiaGlnaGxpZ2h0LmpzXCI7XG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vdXRpbHMvaG9zdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb21tZW50OiBDb21tZW50VHlwZTtcbn1cblxuY29uc3QgQW5zd2VyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjb21tZW50IH0pID0+IHtcbiAgY29uc3QgW3ZvdGVzLCBzZXRWb3Rlc10gPSB1c2VTdGF0ZTxudW1iZXI+KGNvbW1lbnQudm90ZXMpO1xuICBjb25zdCBbdXB2b3RlQ29sb3IsIHNldFVwdm90ZUNvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJncmV5XCIpO1xuICBjb25zdCBbZG93bnZvdGVDb2xvciwgc2V0RG93bnZvdGVDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiZ3JleVwiKTtcblxuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBzdHlsZSA9IHsgY3Vyc29yOiBcInBvaW50ZXJcIiB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwcmVcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2socHJlc1tpXSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgZmV0Y2goYCR7aG9zdH0vcG9zdHMvY29tbWVudHMvJHtjb21tZW50LnV1aWR9L3ZvdGUvc3RhdHVzYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkLFxuICAgICAgICB9KSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhOiBWb3RlVHlwZSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gXCJ1cHZvdGVcIikge1xuICAgICAgICAgICAgICBzZXRVcHZvdGVDb2xvcihjc3MudXB2b3RlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSBcImRvd252b3RlXCIpIHtcbiAgICAgICAgICAgICAgc2V0RG93bnZvdGVDb2xvcihjc3MuZG93bnZvdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbdXNlckNvbnRleHRdKTtcblxuICBjb25zdCB2b3RlID0gKHZvdGVUeXBlOiBcInVwdm90ZVwiIHwgXCJkb3dudm90ZVwiKSA9PiB7XG4gICAgaWYgKHVzZXJDb250ZXh0LnVzZXIpIHtcbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGVzXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgaWNvbj17ZmFTb3J0VXB9XG4gICAgICAgICAgICBjb2xvcj17dXB2b3RlQ29sb3J9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBzaXplPXtcIjJ4XCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b3RlKFwidXB2b3RlXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInZvdGUtY291bnRcIlxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2M2YzZjNlwiLCBtYXJnaW46IFwiLThweCAwXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dm90ZXN9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgIGljb249e2ZhU29ydERvd259XG4gICAgICAgICAgICBjb2xvcj17ZG93bnZvdGVDb2xvcn1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHNpemU9e1wiMnhcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJkb3dudm90ZVwiKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI5NSVcIiB9fT5cbiAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlldyBhbnN3ZXItcHJlXCJcbiAgICAgICAgICAgIHNvdXJjZT17Y29tbWVudC5ib2R5fVxuICAgICAgICAgICAgcGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICAgIDxBc2tlZEJ5XG4gICAgICAgICAgICAgIHR5cGU9e1wiYW5zd2VyZWRcIn1cbiAgICAgICAgICAgICAgdXNlcm5hbWU9e2NvbW1lbnQudXNlci51c2VybmFtZX1cbiAgICAgICAgICAgICAgY3JlYXRlZEF0PXtjb21tZW50LmNyZWF0ZWRBdH1cbiAgICAgICAgICAgICAgcG9zdFV1aWQ9e2NvbW1lbnQudXNlci51dWlkfVxuICAgICAgICAgICAgICB1c2VyVXVpZD17dXNlckNvbnRleHQ/LnVzZXI/LnV1aWR9XG4gICAgICAgICAgICAgIHJlcHV0YXRpb249e2NvbW1lbnQudXNlci5yZXB1dGF0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYW5zd2VyLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5mbG9hdGluZ1Bvc3RCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudm90ZXMge1xuICAgICAgICAgIHdpZHRoOiA1JTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbnN3ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Answer.tsx\n");

/***/ })

})