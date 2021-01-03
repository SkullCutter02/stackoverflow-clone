webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Question.tsx":
/*!*********************************!*\
  !*** ./components/Question.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _Aside__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Aside */ \"./components/Aside.tsx\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Question.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Question = function Question(_ref) {\n  _s();\n\n  var data = _ref.data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(data.votes),\n      votes = _useState[0],\n      setVotes = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"grey\"),\n      upvoteColor = _useState2[0],\n      setUpvoteColor = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"grey\"),\n      downvoteColor = _useState3[0],\n      setDownvoteColor = _useState3[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_13__[\"UserContext\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n  var upvote = \"#ff4400\";\n  var downvote = \"#7193ff\";\n  var style = {\n    cursor: \"pointer\"\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (userContext.user) {\n      fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_12__[\"default\"], \"/posts/\").concat(data.uuid, \"/vote/status\"), {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          userUuid: userContext.user.uuid\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data2) {\n        if (data2.status) {\n          if (data2.type === \"upvote\") {\n            setUpvoteColor(upvote);\n          } else if (data2.type === \"downvote\") {\n            setDownvoteColor(downvote);\n          }\n        }\n      });\n    }\n  }, [userContext]);\n\n  var vote = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(voteType) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!userContext.user) {\n                _context.next = 10;\n                break;\n              }\n\n              if (!(userContext.user.uuid !== data.uuid)) {\n                _context.next = 7;\n                break;\n              }\n\n              fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_12__[\"default\"], \"/posts/\").concat(data.uuid, \"/vote/status\"), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                  userUuid: userContext.user.uuid\n                })\n              }).then(function (res) {\n                return res.json();\n              }).then(function (data2) {\n                return Object(_utils_functions__WEBPACK_IMPORTED_MODULE_10__[\"updateVote\"])(data2, voteType, setVotes, setUpvoteColor, setDownvoteColor, votes, upvote, downvote);\n              });\n              _context.next = 5;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_12__[\"default\"], \"/posts/\").concat(data.uuid, \"/vote\"), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\",\n                  Authorization: \"Bearer \".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_10__[\"getCookie\"])(\"token\"))\n                },\n                body: JSON.stringify({\n                  userUuid: userContext.user.uuid,\n                  voteType: voteType\n                })\n              });\n\n            case 5:\n              _context.next = 8;\n              break;\n\n            case 7:\n              alert(\"You can't vote on your own post!\");\n\n            case 8:\n              _context.next = 12;\n              break;\n\n            case 10:\n              _context.next = 12;\n              return router.push(\"/auth/signup\");\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function vote(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      className: \"jsx-2426090784\",\n      children: data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-2426090784\" + \" \" + \"h1-border-btm\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n      className: \"jsx-2426090784\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-2426090784\" + \" \" + \"question-container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2426090784\" + \" \" + \"main\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-2426090784\" + \" \" + \"votes\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faSortUp\"],\n              color: upvoteColor,\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"upvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              style: {\n                color: \"#c6c6c6\",\n                margin: \"-8px 0\"\n              },\n              className: \"jsx-2426090784\" + \" \" + \"vote-count\",\n              children: votes\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faSortDown\"],\n              color: downvoteColor,\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"downvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 121,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-2426090784\" + \" \" + \"main-right\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n              source: data.body,\n              plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 130,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Aside__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        borderSide: \"left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"2426090784\",\n      children: \"main.jsx-2426090784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.question-container.jsx-2426090784{width:73%;margin:0 auto;}h1.jsx-2426090784{font-size:1.3rem;line-height:1.4em;margin:20px auto;width:88%;}.h1-border-btm.jsx-2426090784{width:93%;margin:0 auto;border-bottom:1px solid #fff;}.main.jsx-2426090784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:20px 0;}.votes.jsx-2426090784{width:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-right:10px;}.main-right.jsx-2426090784{width:95%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9RdWVzdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0lrQixBQUd3QixBQUtILEFBS08sQUFPUCxBQU1HLEFBS0osQUFTQyxTQVJHLENBdkJDLEFBWUEsQUFvQmhCLE9BM0JvQixPQUpwQixBQVkrQixXQVBaLGlCQUNQLENBT1osU0FOQSxZQWJnQyxBQXVCaEIsU0FNUSxLQUx4Qix5RUFNcUIsNEJBN0JyQixpRUE4QjZCLHlHQUNULGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvUXVlc3Rpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFTb3J0VXAsIGZhU29ydERvd24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUXVlc3Rpb25UeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL2luZGl2aWR1YWxRdWVzdGlvblR5cGVcIjtcbmltcG9ydCB7IGdldENvb2tpZSwgdXBkYXRlVm90ZSB9IGZyb20gXCIuLi91dGlscy9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IHZvdGVUeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL3ZvdGVUeXBlXCI7XG5pbXBvcnQgQXNpZGUgZnJvbSBcIi4vQXNpZGVcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRhdGE6IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgUXVlc3Rpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCBbdm90ZXMsIHNldFZvdGVzXSA9IHVzZVN0YXRlPG51bWJlcj4oZGF0YS52b3Rlcyk7XG4gIGNvbnN0IFt1cHZvdGVDb2xvciwgc2V0VXB2b3RlQ29sb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcImdyZXlcIik7XG4gIGNvbnN0IFtkb3dudm90ZUNvbG9yLCBzZXREb3dudm90ZUNvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJncmV5XCIpO1xuXG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHVwdm90ZSA9IFwiI2ZmNDQwMFwiO1xuICBjb25zdCBkb3dudm90ZSA9IFwiIzcxOTNmZlwiO1xuXG4gIGNvbnN0IHN0eWxlID0geyBjdXJzb3I6IFwicG9pbnRlclwiIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgZmV0Y2goYCR7aG9zdH0vcG9zdHMvJHtkYXRhLnV1aWR9L3ZvdGUvc3RhdHVzYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkLFxuICAgICAgICB9KSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhMjogdm90ZVR5cGUpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YTIuc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAoZGF0YTIudHlwZSA9PT0gXCJ1cHZvdGVcIikge1xuICAgICAgICAgICAgICBzZXRVcHZvdGVDb2xvcih1cHZvdGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhMi50eXBlID09PSBcImRvd252b3RlXCIpIHtcbiAgICAgICAgICAgICAgc2V0RG93bnZvdGVDb2xvcihkb3dudm90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIFt1c2VyQ29udGV4dF0pO1xuXG4gIGNvbnN0IHZvdGUgPSBhc3luYyAodm90ZVR5cGU6IFwidXB2b3RlXCIgfCBcImRvd252b3RlXCIpID0+IHtcbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgaWYgKHVzZXJDb250ZXh0LnVzZXIudXVpZCAhPT0gZGF0YS51dWlkKSB7XG4gICAgICAgIGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7ZGF0YS51dWlkfS92b3RlL3N0YXR1c2AsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdXNlclV1aWQ6IHVzZXJDb250ZXh0LnVzZXIudXVpZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgIC50aGVuKChkYXRhMjogdm90ZVR5cGUpID0+XG4gICAgICAgICAgICB1cGRhdGVWb3RlKFxuICAgICAgICAgICAgICBkYXRhMixcbiAgICAgICAgICAgICAgdm90ZVR5cGUsXG4gICAgICAgICAgICAgIHNldFZvdGVzLFxuICAgICAgICAgICAgICBzZXRVcHZvdGVDb2xvcixcbiAgICAgICAgICAgICAgc2V0RG93bnZvdGVDb2xvcixcbiAgICAgICAgICAgICAgdm90ZXMsXG4gICAgICAgICAgICAgIHVwdm90ZSxcbiAgICAgICAgICAgICAgZG93bnZvdGVcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICBhd2FpdCBmZXRjaChgJHtob3N0fS9wb3N0cy8ke2RhdGEudXVpZH0vdm90ZWAsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkLFxuICAgICAgICAgICAgdm90ZVR5cGU6IHZvdGVUeXBlLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiWW91IGNhbid0IHZvdGUgb24geW91ciBvd24gcG9zdCFcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL2F1dGgvc2lnbnVwXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMS1ib3JkZXItYnRtXCIgLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3Rlc1wiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTb3J0VXB9XG4gICAgICAgICAgICAgICAgY29sb3I9e3Vwdm90ZUNvbG9yfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBzaXplPXtcIjJ4XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcInVwdm90ZVwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2b3RlLWNvdW50XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjYzZjNmM2XCIsIG1hcmdpbjogXCItOHB4IDBcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3ZvdGVzfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYVNvcnREb3dufVxuICAgICAgICAgICAgICAgIGNvbG9yPXtkb3dudm90ZUNvbG9yfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBzaXplPXtcIjJ4XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcImRvd252b3RlXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcmlnaHRcIj5cbiAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtkYXRhLmJvZHl9IHBsdWdpbnM9e1tyZW1hcmtHZm1dfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QXNpZGUgYm9yZGVyU2lkZT17XCJsZWZ0XCJ9IC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAucXVlc3Rpb24tY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNzMlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICB3aWR0aDogODglO1xuICAgICAgICB9XG5cbiAgICAgICAgLmgxLWJvcmRlci1idG0ge1xuICAgICAgICAgIHdpZHRoOiA5MyU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3RlcyB7XG4gICAgICAgICAgd2lkdGg6IDUlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbi1yaWdodCB7XG4gICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Question.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 101,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Question, \"I6vaFkRatAuPG4G+CwhBMxjQvOo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"]];\n});\n\n_c = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\n\nvar _c;\n\n$RefreshReg$(_c, \"Question\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWVzdGlvbi50c3g/ZjE2MCJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsImRhdGEiLCJ1c2VTdGF0ZSIsInZvdGVzIiwic2V0Vm90ZXMiLCJ1cHZvdGVDb2xvciIsInNldFVwdm90ZUNvbG9yIiwiZG93bnZvdGVDb2xvciIsInNldERvd252b3RlQ29sb3IiLCJ1c2VyQ29udGV4dCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInVwdm90ZSIsImRvd252b3RlIiwic3R5bGUiLCJjdXJzb3IiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwiZmV0Y2giLCJob3N0IiwidXVpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJVdWlkIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhMiIsInN0YXR1cyIsInR5cGUiLCJ2b3RlIiwidm90ZVR5cGUiLCJ1cGRhdGVWb3RlIiwiQXV0aG9yaXphdGlvbiIsImdldENvb2tpZSIsImFsZXJ0IiwicHVzaCIsInRpdGxlIiwiZmFTb3J0VXAiLCJjb2xvciIsIm1hcmdpbiIsImZhU29ydERvd24iLCJyZW1hcmtHZm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxRQUF5QixHQUFHLFNBQTVCQSxRQUE0QixPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNwQkMsc0RBQVEsQ0FBU0QsSUFBSSxDQUFDRSxLQUFkLENBRFk7QUFBQSxNQUN2Q0EsS0FEdUM7QUFBQSxNQUNoQ0MsUUFEZ0M7O0FBQUEsbUJBRVJGLHNEQUFRLENBQVMsTUFBVCxDQUZBO0FBQUEsTUFFdkNHLFdBRnVDO0FBQUEsTUFFMUJDLGNBRjBCOztBQUFBLG1C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QUdFLG1CQUFLLEVBQUVTLEtBSFQ7QUFJRSxrQkFBSSxFQUFFLElBSlI7QUFLRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1tQixJQUFJLENBQUMsVUFBRCxDQUFWO0FBQUE7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQXVCRTtBQUFBLGdEQUFlLFlBQWY7QUFBQSxtQ0FDRSxxRUFBQyxxREFBRDtBQUFlLG9CQUFNLEVBQUVsQyxJQUFJLENBQUN3QixJQUE1QjtBQUFrQyxxQkFBTyxFQUFFLENBQUNzQixpREFBRDtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBOEJFLHFFQUFDLCtDQUFEO0FBQU8sa0JBQVUsRUFBRTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUZELENBbEtEOztHQUFNL0MsUTtVQU1XYSxxRDs7O0tBTlhiLFE7QUFvS1NBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9RdWVzdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYVNvcnRVcCwgZmFTb3J0RG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0IHsgZ2V0Q29va2llLCB1cGRhdGVWb3RlIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgdm90ZVR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvdm90ZVR5cGVcIjtcbmltcG9ydCBBc2lkZSBmcm9tIFwiLi9Bc2lkZVwiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YTogUXVlc3Rpb25UeXBlO1xufVxuXG5jb25zdCBRdWVzdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IFt2b3Rlcywgc2V0Vm90ZXNdID0gdXNlU3RhdGU8bnVtYmVyPihkYXRhLnZvdGVzKTtcbiAgY29uc3QgW3Vwdm90ZUNvbG9yLCBzZXRVcHZvdGVDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiZ3JleVwiKTtcbiAgY29uc3QgW2Rvd252b3RlQ29sb3IsIHNldERvd252b3RlQ29sb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcImdyZXlcIik7XG5cbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgdXB2b3RlID0gXCIjZmY0NDAwXCI7XG4gIGNvbnN0IGRvd252b3RlID0gXCIjNzE5M2ZmXCI7XG5cbiAgY29uc3Qgc3R5bGUgPSB7IGN1cnNvcjogXCJwb2ludGVyXCIgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyQ29udGV4dC51c2VyKSB7XG4gICAgICBmZXRjaChgJHtob3N0fS9wb3N0cy8ke2RhdGEudXVpZH0vdm90ZS9zdGF0dXNgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEyOiB2b3RlVHlwZSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhMi5zdGF0dXMpIHtcbiAgICAgICAgICAgIGlmIChkYXRhMi50eXBlID09PSBcInVwdm90ZVwiKSB7XG4gICAgICAgICAgICAgIHNldFVwdm90ZUNvbG9yKHVwdm90ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEyLnR5cGUgPT09IFwiZG93bnZvdGVcIikge1xuICAgICAgICAgICAgICBzZXREb3dudm90ZUNvbG9yKGRvd252b3RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VzZXJDb250ZXh0XSk7XG5cbiAgY29uc3Qgdm90ZSA9IGFzeW5jICh2b3RlVHlwZTogXCJ1cHZvdGVcIiB8IFwiZG93bnZvdGVcIikgPT4ge1xuICAgIGlmICh1c2VyQ29udGV4dC51c2VyKSB7XG4gICAgICBpZiAodXNlckNvbnRleHQudXNlci51dWlkICE9PSBkYXRhLnV1aWQpIHtcbiAgICAgICAgZmV0Y2goYCR7aG9zdH0vcG9zdHMvJHtkYXRhLnV1aWR9L3ZvdGUvc3RhdHVzYCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oKGRhdGEyOiB2b3RlVHlwZSkgPT5cbiAgICAgICAgICAgIHVwZGF0ZVZvdGUoXG4gICAgICAgICAgICAgIGRhdGEyLFxuICAgICAgICAgICAgICB2b3RlVHlwZSxcbiAgICAgICAgICAgICAgc2V0Vm90ZXMsXG4gICAgICAgICAgICAgIHNldFVwdm90ZUNvbG9yLFxuICAgICAgICAgICAgICBzZXREb3dudm90ZUNvbG9yLFxuICAgICAgICAgICAgICB2b3RlcyxcbiAgICAgICAgICAgICAgdXB2b3RlLFxuICAgICAgICAgICAgICBkb3dudm90ZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIGF3YWl0IGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7ZGF0YS51dWlkfS92b3RlYCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKFwidG9rZW5cIil9YCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgICAgICB2b3RlVHlwZTogdm90ZVR5cGUsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJZb3UgY2FuJ3Qgdm90ZSBvbiB5b3VyIG93biBwb3N0IVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgcm91dGVyLnB1c2goXCIvYXV0aC9zaWdudXBcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGgxPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgxLWJvcmRlci1idG1cIiAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGVzXCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYVNvcnRVcH1cbiAgICAgICAgICAgICAgICBjb2xvcj17dXB2b3RlQ29sb3J9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIHNpemU9e1wiMnhcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b3RlKFwidXB2b3RlXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZvdGUtY291bnRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiNjNmM2YzZcIiwgbWFyZ2luOiBcIi04cHggMFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dm90ZXN9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhU29ydERvd259XG4gICAgICAgICAgICAgICAgY29sb3I9e2Rvd252b3RlQ29sb3J9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIHNpemU9e1wiMnhcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b3RlKFwiZG93bnZvdGVcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1yaWdodFwiPlxuICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e2RhdGEuYm9keX0gcGx1Z2lucz17W3JlbWFya0dmbV19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBc2lkZSBib3JkZXJTaWRlPXtcImxlZnRcIn0gLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5xdWVzdGlvbi1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA3MyU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA4OCU7XG4gICAgICAgIH1cblxuICAgICAgICAuaDEtYm9yZGVyLWJ0bSB7XG4gICAgICAgICAgd2lkdGg6IDkzJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZvdGVzIHtcbiAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLXJpZ2h0IHtcbiAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Question.tsx\n");

/***/ })

})