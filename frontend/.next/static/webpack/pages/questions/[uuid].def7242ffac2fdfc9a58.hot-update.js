webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Answer.tsx":
/*!*******************************!*\
  !*** ./components/Answer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n/* harmony import */ var _AskedBy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AskedBy */ \"./components/AskedBy.tsx\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Answer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Answer = function Answer(_ref) {\n  _s();\n\n  var _userContext$user;\n\n  var comment = _ref.comment;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(comment.votes),\n      votes = _useState[0],\n      setVotes = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"grey\"),\n      upvoteColor = _useState2[0],\n      setUpvoteColor = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"grey\"),\n      downvoteColor = _useState3[0],\n      setDownvoteColor = _useState3[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_12__[\"UserContext\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n  var style = {\n    cursor: \"pointer\"\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var pres = document.querySelectorAll(\"pre\");\n\n    for (var i = 0; i < pres.length; i++) {\n      highlight_js__WEBPACK_IMPORTED_MODULE_13___default.a.highlightBlock(pres[i]);\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (userContext.user) {\n      fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_14__[\"default\"], \"/posts/comments/\").concat(comment.uuid, \"/vote/status\"), {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          userUuid: userContext.user.uuid\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        if (data.status) {\n          if (data.type === \"upvote\") {\n            setUpvoteColor(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_10__[\"upvote\"]);\n          } else if (data.type === \"downvote\") {\n            setDownvoteColor(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_10__[\"downvote\"]);\n          }\n        }\n      });\n    }\n  }, [userContext]);\n\n  var vote = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(voteType) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!userContext.user) {\n                _context.next = 4;\n                break;\n              }\n\n              if (userContext.user.uuid !== comment.user.uuid) {\n                fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_14__[\"default\"], \"/posts/comments/\").concat(comment.uuid, \"/vote/status\"), {\n                  method: \"POST\",\n                  headers: {\n                    \"Content-Type\": \"application/json\"\n                  },\n                  body: JSON.stringify({\n                    userUuid: userContext.user.uuid\n                  })\n                }).then(function (res) {\n                  return res.json();\n                }).then(function (data) {});\n              } else {\n                alert(\"You can't vote on your own comment!\");\n              }\n\n              _context.next = 6;\n              break;\n\n            case 4:\n              _context.next = 6;\n              return router.push(\"/auth/signup\");\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function vote(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1321083110\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_10__[\"floatingPostBackground\"]]]]) + \" \" + \"answer-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1321083110\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_10__[\"floatingPostBackground\"]]]]) + \" \" + \"votes\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faSortUp\"],\n          color: upvoteColor,\n          style: style,\n          size: \"2x\",\n          onClick: function onClick() {\n            return vote(\"upvote\");\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n          style: {\n            color: \"#c6c6c6\",\n            margin: \"-8px 0\"\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1321083110\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_10__[\"floatingPostBackground\"]]]]) + \" \" + \"vote-count\",\n          children: votes\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faSortDown\"],\n          color: downvoteColor,\n          style: style,\n          size: \"2x\",\n          onClick: function onClick() {\n            return vote(\"downvote\");\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        style: {\n          width: \"95%\"\n        },\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1321083110\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_10__[\"floatingPostBackground\"]]]]),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          className: \"preview answer-pre\",\n          source: comment.body,\n          plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_8___default.a]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1321083110\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_10__[\"floatingPostBackground\"]]]]) + \" \" + \"user\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_AskedBy__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            type: \"answered\",\n            username: comment.user.username,\n            createdAt: comment.createdAt,\n            postUuid: comment.user.uuid,\n            userUuid: userContext === null || userContext === void 0 ? void 0 : (_userContext$user = userContext.user) === null || _userContext$user === void 0 ? void 0 : _userContext$user.uuid,\n            reputation: comment.user.reputation\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1321083110\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_10__[\"floatingPostBackground\"]],\n      children: \".answer-container.__jsx-style-dynamic-selector{width:100%;margin-bottom:30px;padding:5px 5px 20px;border-radius:10px;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_10__[\"floatingPostBackground\"], \";position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.user.__jsx-style-dynamic-selector{position:absolute;bottom:10px;right:5px;}.votes.__jsx-style-dynamic-selector{width:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-top:14px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9BbnN3ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdJa0IsQUFHc0IsQUFVTyxBQU1ULFNBQ0ksRUFoQk0sT0FVUCxZQVRTLEFBVVgsVUFDWixXQVZxQixtQkFDcUIsYUFjbEIsMkJBYkosa0JBQ0wsaUNBYU0seUNBWnJCLG9EQWE2Qix5R0FDWCxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9jb21wb25lbnRzL0Fuc3dlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFTb3J0RG93biwgZmFTb3J0VXAgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgeyBDb21tZW50VHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgeyBWb3RlVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy92b3RlVHlwZVwiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBBc2tlZEJ5IGZyb20gXCIuL0Fza2VkQnlcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcbmltcG9ydCBobGpzIGZyb20gXCJoaWdobGlnaHQuanNcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyB1cGRhdGVWb3RlIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb21tZW50OiBDb21tZW50VHlwZTtcbn1cblxuY29uc3QgQW5zd2VyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjb21tZW50IH0pID0+IHtcbiAgY29uc3QgW3ZvdGVzLCBzZXRWb3Rlc10gPSB1c2VTdGF0ZTxudW1iZXI+KGNvbW1lbnQudm90ZXMpO1xuICBjb25zdCBbdXB2b3RlQ29sb3IsIHNldFVwdm90ZUNvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJncmV5XCIpO1xuICBjb25zdCBbZG93bnZvdGVDb2xvciwgc2V0RG93bnZvdGVDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiZ3JleVwiKTtcblxuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBzdHlsZSA9IHsgY3Vyc29yOiBcInBvaW50ZXJcIiB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwcmVcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2socHJlc1tpXSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgZmV0Y2goYCR7aG9zdH0vcG9zdHMvY29tbWVudHMvJHtjb21tZW50LnV1aWR9L3ZvdGUvc3RhdHVzYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkLFxuICAgICAgICB9KSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhOiBWb3RlVHlwZSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gXCJ1cHZvdGVcIikge1xuICAgICAgICAgICAgICBzZXRVcHZvdGVDb2xvcihjc3MudXB2b3RlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSBcImRvd252b3RlXCIpIHtcbiAgICAgICAgICAgICAgc2V0RG93bnZvdGVDb2xvcihjc3MuZG93bnZvdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbdXNlckNvbnRleHRdKTtcblxuICBjb25zdCB2b3RlID0gYXN5bmMgKHZvdGVUeXBlOiBcInVwdm90ZVwiIHwgXCJkb3dudm90ZVwiKSA9PiB7XG4gICAgaWYgKHVzZXJDb250ZXh0LnVzZXIpIHtcbiAgICAgIGlmICh1c2VyQ29udGV4dC51c2VyLnV1aWQgIT09IGNvbW1lbnQudXNlci51dWlkKSB7XG4gICAgICAgIGZldGNoKGAke2hvc3R9L3Bvc3RzL2NvbW1lbnRzLyR7Y29tbWVudC51dWlkfS92b3RlL3N0YXR1c2AsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdXNlclV1aWQ6IHVzZXJDb250ZXh0LnVzZXIudXVpZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgIC50aGVuKChkYXRhOiBWb3RlVHlwZSkgPT4ge30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJZb3UgY2FuJ3Qgdm90ZSBvbiB5b3VyIG93biBjb21tZW50IVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgcm91dGVyLnB1c2goXCIvYXV0aC9zaWdudXBcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZXNcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBpY29uPXtmYVNvcnRVcH1cbiAgICAgICAgICAgIGNvbG9yPXt1cHZvdGVDb2xvcn1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHNpemU9e1wiMnhcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJ1cHZvdGVcIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidm90ZS1jb3VudFwiXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjYzZjNmM2XCIsIG1hcmdpbjogXCItOHB4IDBcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2b3Rlc31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgaWNvbj17ZmFTb3J0RG93bn1cbiAgICAgICAgICAgIGNvbG9yPXtkb3dudm90ZUNvbG9yfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgc2l6ZT17XCIyeFwifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcImRvd252b3RlXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjk1JVwiIH19PlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3IGFuc3dlci1wcmVcIlxuICAgICAgICAgICAgc291cmNlPXtjb21tZW50LmJvZHl9XG4gICAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgICAgPEFza2VkQnlcbiAgICAgICAgICAgICAgdHlwZT17XCJhbnN3ZXJlZFwifVxuICAgICAgICAgICAgICB1c2VybmFtZT17Y29tbWVudC51c2VyLnVzZXJuYW1lfVxuICAgICAgICAgICAgICBjcmVhdGVkQXQ9e2NvbW1lbnQuY3JlYXRlZEF0fVxuICAgICAgICAgICAgICBwb3N0VXVpZD17Y29tbWVudC51c2VyLnV1aWR9XG4gICAgICAgICAgICAgIHVzZXJVdWlkPXt1c2VyQ29udGV4dD8udXNlcj8udXVpZH1cbiAgICAgICAgICAgICAgcmVwdXRhdGlvbj17Y29tbWVudC51c2VyLnJlcHV0YXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hbnN3ZXItY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmZsb2F0aW5nUG9zdEJhY2tncm91bmR9O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3RlcyB7XG4gICAgICAgICAgd2lkdGg6IDUlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuc3dlcjtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Answer.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Answer, \"RV0q2OCHdtH/22AsmnvVUEbhveI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"]];\n});\n\n_c = Answer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Answer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Answer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbnN3ZXIudHN4P2IxYzQiXSwibmFtZXMiOlsiQW5zd2VyIiwiY29tbWVudCIsInVzZVN0YXRlIiwidm90ZXMiLCJzZXRWb3RlcyIsInVwdm90ZUNvbG9yIiwic2V0VXB2b3RlQ29sb3IiLCJkb3dudm90ZUNvbG9yIiwic2V0RG93bnZvdGVDb2xvciIsInVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwic3R5bGUiLCJjdXJzb3IiLCJ1c2VFZmZlY3QiLCJwcmVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImhsanMiLCJoaWdobGlnaHRCbG9jayIsInVzZXIiLCJmZXRjaCIsImhvc3QiLCJ1dWlkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlclV1aWQiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJ0eXBlIiwiY3NzIiwidm90ZSIsInZvdGVUeXBlIiwiYWxlcnQiLCJwdXNoIiwiZmFTb3J0VXAiLCJjb2xvciIsIm1hcmdpbiIsImZhU29ydERvd24iLCJ3aWR0aCIsInJlbWFya0dmbSIsInVzZXJuYW1lIiwiY3JlYXRlZEF0IiwicmVwdXRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxNQUF1QixHQUFHLFNBQTFCQSxNQUEwQixPQUFpQjtBQUFBOztBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxrQkFDckJDLHNEQUFRLENBQVNELE9BQU8sQ0FBQ0UsS0FBakIsQ0FEYTtBQUFBLE1BQ3hDQSxLQUR3QztBQUFBLE1BQ2pDQyxRQURpQzs7QUFBQSxtQkFF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RSxnQkFBTSxFQUFFdkMsT0FBTyxDQUFDNkIsSUFGbEI7QUFHRSxpQkFBTyxFQUFFLENBQUNvQixpREFBRDtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRTtBQUFBLHNHQW1CY1YsMkVBbkJkLGFBQWUsTUFBZjtBQUFBLGlDQUNFLHFFQUFDLGlEQUFEO0FBQ0UsZ0JBQUksRUFBRSxVQURSO0FBRUUsb0JBQVEsRUFBRXZDLE9BQU8sQ0FBQ3VCLElBQVIsQ0FBYTJCLFFBRnpCO0FBR0UscUJBQVMsRUFBRWxELE9BQU8sQ0FBQ21ELFNBSHJCO0FBSUUsb0JBQVEsRUFBRW5ELE9BQU8sQ0FBQ3VCLElBQVIsQ0FBYUcsSUFKekI7QUFLRSxvQkFBUSxFQUFFbEIsV0FBRixhQUFFQSxXQUFGLDRDQUFFQSxXQUFXLENBQUVlLElBQWYsc0RBQUUsa0JBQW1CRyxJQUwvQjtBQU1FLHNCQUFVLEVBQUUxQixPQUFPLENBQUN1QixJQUFSLENBQWE2QjtBQU4zQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBLGdCQWlEb0JiLDJFQWpEcEI7QUFBQSwwSkFpRG9CQSwyRUFqRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3RUQsQ0F4SUQ7O0dBQU14QyxNO1VBTVdhLHFEOzs7S0FOWGIsTTtBQTBJU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fuc3dlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFTb3J0RG93biwgZmFTb3J0VXAgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgeyBDb21tZW50VHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgeyBWb3RlVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy92b3RlVHlwZVwiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcbmltcG9ydCBBc2tlZEJ5IGZyb20gXCIuL0Fza2VkQnlcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcbmltcG9ydCBobGpzIGZyb20gXCJoaWdobGlnaHQuanNcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyB1cGRhdGVWb3RlIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb21tZW50OiBDb21tZW50VHlwZTtcbn1cblxuY29uc3QgQW5zd2VyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjb21tZW50IH0pID0+IHtcbiAgY29uc3QgW3ZvdGVzLCBzZXRWb3Rlc10gPSB1c2VTdGF0ZTxudW1iZXI+KGNvbW1lbnQudm90ZXMpO1xuICBjb25zdCBbdXB2b3RlQ29sb3IsIHNldFVwdm90ZUNvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJncmV5XCIpO1xuICBjb25zdCBbZG93bnZvdGVDb2xvciwgc2V0RG93bnZvdGVDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiZ3JleVwiKTtcblxuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBzdHlsZSA9IHsgY3Vyc29yOiBcInBvaW50ZXJcIiB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwcmVcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2socHJlc1tpXSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgZmV0Y2goYCR7aG9zdH0vcG9zdHMvY29tbWVudHMvJHtjb21tZW50LnV1aWR9L3ZvdGUvc3RhdHVzYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkLFxuICAgICAgICB9KSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhOiBWb3RlVHlwZSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gXCJ1cHZvdGVcIikge1xuICAgICAgICAgICAgICBzZXRVcHZvdGVDb2xvcihjc3MudXB2b3RlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSBcImRvd252b3RlXCIpIHtcbiAgICAgICAgICAgICAgc2V0RG93bnZvdGVDb2xvcihjc3MuZG93bnZvdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbdXNlckNvbnRleHRdKTtcblxuICBjb25zdCB2b3RlID0gYXN5bmMgKHZvdGVUeXBlOiBcInVwdm90ZVwiIHwgXCJkb3dudm90ZVwiKSA9PiB7XG4gICAgaWYgKHVzZXJDb250ZXh0LnVzZXIpIHtcbiAgICAgIGlmICh1c2VyQ29udGV4dC51c2VyLnV1aWQgIT09IGNvbW1lbnQudXNlci51dWlkKSB7XG4gICAgICAgIGZldGNoKGAke2hvc3R9L3Bvc3RzL2NvbW1lbnRzLyR7Y29tbWVudC51dWlkfS92b3RlL3N0YXR1c2AsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdXNlclV1aWQ6IHVzZXJDb250ZXh0LnVzZXIudXVpZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgIC50aGVuKChkYXRhOiBWb3RlVHlwZSkgPT4ge30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJZb3UgY2FuJ3Qgdm90ZSBvbiB5b3VyIG93biBjb21tZW50IVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgcm91dGVyLnB1c2goXCIvYXV0aC9zaWdudXBcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZXNcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBpY29uPXtmYVNvcnRVcH1cbiAgICAgICAgICAgIGNvbG9yPXt1cHZvdGVDb2xvcn1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHNpemU9e1wiMnhcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJ1cHZvdGVcIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidm90ZS1jb3VudFwiXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjYzZjNmM2XCIsIG1hcmdpbjogXCItOHB4IDBcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2b3Rlc31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgaWNvbj17ZmFTb3J0RG93bn1cbiAgICAgICAgICAgIGNvbG9yPXtkb3dudm90ZUNvbG9yfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgc2l6ZT17XCIyeFwifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcImRvd252b3RlXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjk1JVwiIH19PlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3IGFuc3dlci1wcmVcIlxuICAgICAgICAgICAgc291cmNlPXtjb21tZW50LmJvZHl9XG4gICAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgICAgPEFza2VkQnlcbiAgICAgICAgICAgICAgdHlwZT17XCJhbnN3ZXJlZFwifVxuICAgICAgICAgICAgICB1c2VybmFtZT17Y29tbWVudC51c2VyLnVzZXJuYW1lfVxuICAgICAgICAgICAgICBjcmVhdGVkQXQ9e2NvbW1lbnQuY3JlYXRlZEF0fVxuICAgICAgICAgICAgICBwb3N0VXVpZD17Y29tbWVudC51c2VyLnV1aWR9XG4gICAgICAgICAgICAgIHVzZXJVdWlkPXt1c2VyQ29udGV4dD8udXNlcj8udXVpZH1cbiAgICAgICAgICAgICAgcmVwdXRhdGlvbj17Y29tbWVudC51c2VyLnJlcHV0YXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hbnN3ZXItY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmZsb2F0aW5nUG9zdEJhY2tncm91bmR9O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3RlcyB7XG4gICAgICAgICAgd2lkdGg6IDUlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuc3dlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Answer.tsx\n");

/***/ })

})