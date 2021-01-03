webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Question.tsx":
/*!*********************************!*\
  !*** ./components/Question.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n/* harmony import */ var _AskedBy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AskedBy */ \"./components/AskedBy.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Question.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Question = function Question(_ref) {\n  _s();\n\n  var _userContext$user;\n\n  var data = _ref.data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(data.votes),\n      votes = _useState[0],\n      setVotes = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"grey\"),\n      upvoteColor = _useState2[0],\n      setUpvoteColor = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"grey\"),\n      downvoteColor = _useState3[0],\n      setDownvoteColor = _useState3[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_12__[\"UserContext\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n  var upvote = \"#ff4400\";\n  var downvote = \"#7193ff\";\n  var style = {\n    cursor: \"pointer\"\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (userContext.user) {\n      fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_11__[\"default\"], \"/posts/\").concat(data.uuid, \"/vote/status\"), {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          userUuid: userContext.user.uuid\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data2) {\n        if (data2.status) {\n          if (data2.type === \"upvote\") {\n            setUpvoteColor(upvote);\n          } else if (data2.type === \"downvote\") {\n            setDownvoteColor(downvote);\n          }\n        }\n      });\n    }\n  }, [userContext]);\n\n  var vote = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(voteType) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!userContext.user) {\n                _context.next = 10;\n                break;\n              }\n\n              if (!(userContext.user.uuid !== data.user.uuid)) {\n                _context.next = 7;\n                break;\n              }\n\n              fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_11__[\"default\"], \"/posts/\").concat(data.uuid, \"/vote/status\"), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                  userUuid: userContext.user.uuid\n                })\n              }).then(function (res) {\n                return res.json();\n              }).then(function (data2) {\n                return Object(_utils_functions__WEBPACK_IMPORTED_MODULE_10__[\"updateVote\"])(data2, voteType, setVotes, setUpvoteColor, setDownvoteColor, votes, upvote, downvote);\n              });\n              _context.next = 5;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_11__[\"default\"], \"/posts/\").concat(data.uuid, \"/vote\"), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\",\n                  Authorization: \"Bearer \".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_10__[\"getCookie\"])(\"token\"))\n                },\n                body: JSON.stringify({\n                  userUuid: userContext.user.uuid,\n                  voteType: voteType\n                })\n              });\n\n            case 5:\n              _context.next = 8;\n              break;\n\n            case 7:\n              alert(\"You can't vote on your own post!\");\n\n            case 8:\n              _context.next = 12;\n              break;\n\n            case 10:\n              _context.next = 12;\n              return router.push(\"/auth/signup\");\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function vote(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n      className: \"jsx-1812248443\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1812248443\" + \" \" + \"question-container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-1812248443\" + \" \" + \"main\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-1812248443\" + \" \" + \"votes\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faSortUp\"],\n              color: upvoteColor,\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"upvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 106,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              style: {\n                color: \"#c6c6c6\",\n                margin: \"-8px 0\"\n              },\n              className: \"jsx-1812248443\" + \" \" + \"vote-count\",\n              children: votes\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faSortDown\"],\n              color: downvoteColor,\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"downvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-1812248443\" + \" \" + \"main-right\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n              className: \"post-body\",\n              source: data.body,\n              plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_AskedBy__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n              username: data.user.username,\n              createdAt: data.createdAt,\n              postUuid: data.user.uuid,\n              userUuid: userContext === null || userContext === void 0 ? void 0 : (_userContext$user = userContext.user) === null || _userContext$user === void 0 ? void 0 : _userContext$user.uuid\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 133,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1812248443\",\n      children: \".question-container.jsx-1812248443{width:92%;margin:0 auto;}.main.jsx-1812248443{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:20px 0;}.votes.jsx-1812248443{width:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-right:10px;}.main-right.jsx-1812248443{width:95%;}.post-body.jsx-1812248443{margin-bottom:40px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9RdWVzdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0lrQixBQUdxQixBQUtHLEFBS0osQUFTQyxBQUlTLFNBWk4sQ0FWQyxBQW1CaEIsU0FJQSxLQXRCQSxrREFJZ0IsU0FNUSxLQUx4Qix5RUFNcUIsNkZBQ1EseUdBQ1Qsa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9RdWVzdGlvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYVNvcnRVcCwgZmFTb3J0RG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0IHsgZ2V0Q29va2llLCBnZXRUaW1lLCB1cGRhdGVWb3RlIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgdm90ZVR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvdm90ZVR5cGVcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgQXNrZWRCeSBmcm9tIFwiLi9Bc2tlZEJ5XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRhdGE6IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgUXVlc3Rpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCBbdm90ZXMsIHNldFZvdGVzXSA9IHVzZVN0YXRlPG51bWJlcj4oZGF0YS52b3Rlcyk7XG4gIGNvbnN0IFt1cHZvdGVDb2xvciwgc2V0VXB2b3RlQ29sb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcImdyZXlcIik7XG4gIGNvbnN0IFtkb3dudm90ZUNvbG9yLCBzZXREb3dudm90ZUNvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJncmV5XCIpO1xuXG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHVwdm90ZSA9IFwiI2ZmNDQwMFwiO1xuICBjb25zdCBkb3dudm90ZSA9IFwiIzcxOTNmZlwiO1xuXG4gIGNvbnN0IHN0eWxlID0geyBjdXJzb3I6IFwicG9pbnRlclwiIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgZmV0Y2goYCR7aG9zdH0vcG9zdHMvJHtkYXRhLnV1aWR9L3ZvdGUvc3RhdHVzYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkLFxuICAgICAgICB9KSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhMjogdm90ZVR5cGUpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YTIuc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAoZGF0YTIudHlwZSA9PT0gXCJ1cHZvdGVcIikge1xuICAgICAgICAgICAgICBzZXRVcHZvdGVDb2xvcih1cHZvdGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhMi50eXBlID09PSBcImRvd252b3RlXCIpIHtcbiAgICAgICAgICAgICAgc2V0RG93bnZvdGVDb2xvcihkb3dudm90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIFt1c2VyQ29udGV4dF0pO1xuXG4gIGNvbnN0IHZvdGUgPSBhc3luYyAodm90ZVR5cGU6IFwidXB2b3RlXCIgfCBcImRvd252b3RlXCIpID0+IHtcbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgaWYgKHVzZXJDb250ZXh0LnVzZXIudXVpZCAhPT0gZGF0YS51c2VyLnV1aWQpIHtcbiAgICAgICAgZmV0Y2goYCR7aG9zdH0vcG9zdHMvJHtkYXRhLnV1aWR9L3ZvdGUvc3RhdHVzYCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oKGRhdGEyOiB2b3RlVHlwZSkgPT5cbiAgICAgICAgICAgIHVwZGF0ZVZvdGUoXG4gICAgICAgICAgICAgIGRhdGEyLFxuICAgICAgICAgICAgICB2b3RlVHlwZSxcbiAgICAgICAgICAgICAgc2V0Vm90ZXMsXG4gICAgICAgICAgICAgIHNldFVwdm90ZUNvbG9yLFxuICAgICAgICAgICAgICBzZXREb3dudm90ZUNvbG9yLFxuICAgICAgICAgICAgICB2b3RlcyxcbiAgICAgICAgICAgICAgdXB2b3RlLFxuICAgICAgICAgICAgICBkb3dudm90ZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIGF3YWl0IGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7ZGF0YS51dWlkfS92b3RlYCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKFwidG9rZW5cIil9YCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgICAgICB2b3RlVHlwZTogdm90ZVR5cGUsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJZb3UgY2FuJ3Qgdm90ZSBvbiB5b3VyIG93biBwb3N0IVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgcm91dGVyLnB1c2goXCIvYXV0aC9zaWdudXBcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGVzXCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYVNvcnRVcH1cbiAgICAgICAgICAgICAgICBjb2xvcj17dXB2b3RlQ29sb3J9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIHNpemU9e1wiMnhcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b3RlKFwidXB2b3RlXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZvdGUtY291bnRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiNjNmM2YzZcIiwgbWFyZ2luOiBcIi04cHggMFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dm90ZXN9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhU29ydERvd259XG4gICAgICAgICAgICAgICAgY29sb3I9e2Rvd252b3RlQ29sb3J9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIHNpemU9e1wiMnhcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b3RlKFwiZG93bnZvdGVcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1yaWdodFwiPlxuICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3QtYm9keVwiXG4gICAgICAgICAgICAgICAgc291cmNlPXtkYXRhLmJvZHl9XG4gICAgICAgICAgICAgICAgcGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxBc2tlZEJ5XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU9e2RhdGEudXNlci51c2VybmFtZX1cbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e2RhdGEuY3JlYXRlZEF0fVxuICAgICAgICAgICAgICAgIHBvc3RVdWlkPXtkYXRhLnVzZXIudXVpZH1cbiAgICAgICAgICAgICAgICB1c2VyVXVpZD17dXNlckNvbnRleHQ/LnVzZXI/LnV1aWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZvdGVzIHtcbiAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLXJpZ2h0IHtcbiAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtYm9keSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Question.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 101,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Question, \"I6vaFkRatAuPG4G+CwhBMxjQvOo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"]];\n});\n\n_c = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\n\nvar _c;\n\n$RefreshReg$(_c, \"Question\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWVzdGlvbi50c3g/ZjE2MCJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsImRhdGEiLCJ1c2VTdGF0ZSIsInZvdGVzIiwic2V0Vm90ZXMiLCJ1cHZvdGVDb2xvciIsInNldFVwdm90ZUNvbG9yIiwiZG93bnZvdGVDb2xvciIsInNldERvd252b3RlQ29sb3IiLCJ1c2VyQ29udGV4dCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInVwdm90ZSIsImRvd252b3RlIiwic3R5bGUiLCJjdXJzb3IiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwiZmV0Y2giLCJob3N0IiwidXVpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJVdWlkIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhMiIsInN0YXR1cyIsInR5cGUiLCJ2b3RlIiwidm90ZVR5cGUiLCJ1cGRhdGVWb3RlIiwiQXV0aG9yaXphdGlvbiIsImdldENvb2tpZSIsImFsZXJ0IiwicHVzaCIsImZhU29ydFVwIiwiY29sb3IiLCJtYXJnaW4iLCJmYVNvcnREb3duIiwicmVtYXJrR2ZtIiwidXNlcm5hbWUiLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxRQUF5QixHQUFHLFNBQTVCQSxRQUE0QixPQUFjO0FBQUE7O0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNwQkMsc0RBQVEsQ0FBU0QsSUFBSSxDQUFDRSxLQUFkLENBRFk7QUFBQSxNQUN2Q0EsS0FEdUM7QUFBQSxNQUNoQ0MsUUFEZ0M7O0FBQUEsbUJBRVJGLHNEQUFRLENBQVMsTUFBVCxDQUZBO0FBQUEsTUFFdkNHLFdBRnVDO0FBQUEs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QyxVQUFELENBQVY7QUFBQTtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBdUJFO0FBQUEsZ0RBQWUsWUFBZjtBQUFBLG9DQUNFLHFFQUFDLHFEQUFEO0FBQ0UsdUJBQVMsRUFBQyxXQURaO0FBRUUsb0JBQU0sRUFBRWxDLElBQUksQ0FBQ3dCLElBRmY7QUFHRSxxQkFBTyxFQUFFLENBQUNxQixpREFBRDtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFNRSxxRUFBQyxpREFBRDtBQUNFLHNCQUFRLEVBQUU3QyxJQUFJLENBQUNrQixJQUFMLENBQVU0QixRQUR0QjtBQUVFLHVCQUFTLEVBQUU5QyxJQUFJLENBQUMrQyxTQUZsQjtBQUdFLHNCQUFRLEVBQUUvQyxJQUFJLENBQUNrQixJQUFMLENBQVVHLElBSHRCO0FBSUUsc0JBQVEsRUFBRWIsV0FBRixhQUFFQSxXQUFGLDRDQUFFQSxXQUFXLENBQUVVLElBQWYsc0RBQUUsa0JBQW1CRztBQUovQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBFRCxDQTNKRDs7R0FBTXRCLFE7VUFNV2EscUQ7OztLQU5YYixRO0FBNkpTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUXVlc3Rpb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFTb3J0VXAsIGZhU29ydERvd24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUXVlc3Rpb25UeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL2luZGl2aWR1YWxRdWVzdGlvblR5cGVcIjtcbmltcG9ydCB7IGdldENvb2tpZSwgZ2V0VGltZSwgdXBkYXRlVm90ZSB9IGZyb20gXCIuLi91dGlscy9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IHZvdGVUeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL3ZvdGVUeXBlXCI7XG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuaW1wb3J0IEFza2VkQnkgZnJvbSBcIi4vQXNrZWRCeVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBkYXRhOiBRdWVzdGlvblR5cGU7XG59XG5cbmNvbnN0IFF1ZXN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgW3ZvdGVzLCBzZXRWb3Rlc10gPSB1c2VTdGF0ZTxudW1iZXI+KGRhdGEudm90ZXMpO1xuICBjb25zdCBbdXB2b3RlQ29sb3IsIHNldFVwdm90ZUNvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJncmV5XCIpO1xuICBjb25zdCBbZG93bnZvdGVDb2xvciwgc2V0RG93bnZvdGVDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiZ3JleVwiKTtcblxuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB1cHZvdGUgPSBcIiNmZjQ0MDBcIjtcbiAgY29uc3QgZG93bnZvdGUgPSBcIiM3MTkzZmZcIjtcblxuICBjb25zdCBzdHlsZSA9IHsgY3Vyc29yOiBcInBvaW50ZXJcIiB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJDb250ZXh0LnVzZXIpIHtcbiAgICAgIGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7ZGF0YS51dWlkfS92b3RlL3N0YXR1c2AsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdXNlclV1aWQ6IHVzZXJDb250ZXh0LnVzZXIudXVpZCxcbiAgICAgICAgfSksXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YTI6IHZvdGVUeXBlKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEyLnN0YXR1cykge1xuICAgICAgICAgICAgaWYgKGRhdGEyLnR5cGUgPT09IFwidXB2b3RlXCIpIHtcbiAgICAgICAgICAgICAgc2V0VXB2b3RlQ29sb3IodXB2b3RlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YTIudHlwZSA9PT0gXCJkb3dudm90ZVwiKSB7XG4gICAgICAgICAgICAgIHNldERvd252b3RlQ29sb3IoZG93bnZvdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbdXNlckNvbnRleHRdKTtcblxuICBjb25zdCB2b3RlID0gYXN5bmMgKHZvdGVUeXBlOiBcInVwdm90ZVwiIHwgXCJkb3dudm90ZVwiKSA9PiB7XG4gICAgaWYgKHVzZXJDb250ZXh0LnVzZXIpIHtcbiAgICAgIGlmICh1c2VyQ29udGV4dC51c2VyLnV1aWQgIT09IGRhdGEudXNlci51dWlkKSB7XG4gICAgICAgIGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7ZGF0YS51dWlkfS92b3RlL3N0YXR1c2AsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdXNlclV1aWQ6IHVzZXJDb250ZXh0LnVzZXIudXVpZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgIC50aGVuKChkYXRhMjogdm90ZVR5cGUpID0+XG4gICAgICAgICAgICB1cGRhdGVWb3RlKFxuICAgICAgICAgICAgICBkYXRhMixcbiAgICAgICAgICAgICAgdm90ZVR5cGUsXG4gICAgICAgICAgICAgIHNldFZvdGVzLFxuICAgICAgICAgICAgICBzZXRVcHZvdGVDb2xvcixcbiAgICAgICAgICAgICAgc2V0RG93bnZvdGVDb2xvcixcbiAgICAgICAgICAgICAgdm90ZXMsXG4gICAgICAgICAgICAgIHVwdm90ZSxcbiAgICAgICAgICAgICAgZG93bnZvdGVcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICBhd2FpdCBmZXRjaChgJHtob3N0fS9wb3N0cy8ke2RhdGEudXVpZH0vdm90ZWAsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkLFxuICAgICAgICAgICAgdm90ZVR5cGU6IHZvdGVUeXBlLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiWW91IGNhbid0IHZvdGUgb24geW91ciBvd24gcG9zdCFcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL2F1dGgvc2lnbnVwXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3Rlc1wiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTb3J0VXB9XG4gICAgICAgICAgICAgICAgY29sb3I9e3Vwdm90ZUNvbG9yfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBzaXplPXtcIjJ4XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcInVwdm90ZVwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2b3RlLWNvdW50XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjYzZjNmM2XCIsIG1hcmdpbjogXCItOHB4IDBcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3ZvdGVzfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYVNvcnREb3dufVxuICAgICAgICAgICAgICAgIGNvbG9yPXtkb3dudm90ZUNvbG9yfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBzaXplPXtcIjJ4XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcImRvd252b3RlXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcmlnaHRcIj5cbiAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0LWJvZHlcIlxuICAgICAgICAgICAgICAgIHNvdXJjZT17ZGF0YS5ib2R5fVxuICAgICAgICAgICAgICAgIHBsdWdpbnM9e1tyZW1hcmtHZm1dfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QXNrZWRCeVxuICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtkYXRhLnVzZXIudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0PXtkYXRhLmNyZWF0ZWRBdH1cbiAgICAgICAgICAgICAgICBwb3N0VXVpZD17ZGF0YS51c2VyLnV1aWR9XG4gICAgICAgICAgICAgICAgdXNlclV1aWQ9e3VzZXJDb250ZXh0Py51c2VyPy51dWlkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5xdWVzdGlvbi1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA5MiU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3RlcyB7XG4gICAgICAgICAgd2lkdGg6IDUlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbi1yaWdodCB7XG4gICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0LWJvZHkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Question.tsx\n");

/***/ })

})