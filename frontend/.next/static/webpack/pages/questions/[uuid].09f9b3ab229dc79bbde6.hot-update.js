webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Question.tsx":
/*!*********************************!*\
  !*** ./components/Question.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n/* harmony import */ var _AskedBy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AskedBy */ \"./components/AskedBy.tsx\");\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Tag */ \"./components/Tag.tsx\");\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Question.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Question = function Question(_ref) {\n  _s();\n\n  var _userContext$user;\n\n  var question = _ref.question;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(question.votes),\n      votes = _useState[0],\n      setVotes = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"grey\"),\n      upvoteColor = _useState2[0],\n      setUpvoteColor = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"grey\"),\n      downvoteColor = _useState3[0],\n      setDownvoteColor = _useState3[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_12__[\"UserContext\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n  var upvote = _utils_cssVariables__WEBPACK_IMPORTED_MODULE_15__[\"upvote\"];\n  var downvote = _utils_cssVariables__WEBPACK_IMPORTED_MODULE_15__[\"downvote\"];\n  var style = {\n    cursor: \"pointer\"\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (userContext.user) {\n      fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_11__[\"default\"], \"/posts/\").concat(question.uuid, \"/vote/status\"), {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          userUuid: userContext.user.uuid\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        if (data.status) {\n          if (data.type === \"upvote\") {\n            setUpvoteColor(upvote);\n          } else if (data.type === \"downvote\") {\n            setDownvoteColor(downvote);\n          }\n        }\n      });\n    }\n  }, [userContext]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var pres = document.querySelectorAll(\"pre\");\n  }, []);\n\n  var vote = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(voteType) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!userContext.user) {\n                _context.next = 10;\n                break;\n              }\n\n              if (!(userContext.user.uuid !== question.user.uuid)) {\n                _context.next = 7;\n                break;\n              }\n\n              fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_11__[\"default\"], \"/posts/\").concat(question.uuid, \"/vote/status\"), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                  userUuid: userContext.user.uuid\n                })\n              }).then(function (res) {\n                return res.json();\n              }).then(function (data) {\n                return Object(_utils_functions__WEBPACK_IMPORTED_MODULE_10__[\"updateVote\"])(data, voteType, setVotes, setUpvoteColor, setDownvoteColor, votes, upvote, downvote);\n              });\n              _context.next = 5;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_11__[\"default\"], \"/posts/\").concat(question.uuid, \"/vote\"), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\",\n                  Authorization: \"Bearer \".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_10__[\"getCookie\"])(\"token\"))\n                },\n                body: JSON.stringify({\n                  userUuid: userContext.user.uuid,\n                  voteType: voteType\n                })\n              });\n\n            case 5:\n              _context.next = 8;\n              break;\n\n            case 7:\n              alert(\"You can't vote on your own post!\");\n\n            case 8:\n              _context.next = 12;\n              break;\n\n            case 10:\n              _context.next = 12;\n              return router.push(\"/auth/signup\");\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function vote(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n      className: \"jsx-268140291\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-268140291\" + \" \" + \"question-container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-268140291\" + \" \" + \"main\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-268140291\" + \" \" + \"votes\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faSortUp\"],\n              color: upvoteColor,\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"upvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              style: {\n                color: \"#c6c6c6\",\n                margin: \"-8px 0\"\n              },\n              className: \"jsx-268140291\" + \" \" + \"vote-count\",\n              children: votes\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faSortDown\"],\n              color: downvoteColor,\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"downvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 126,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-268140291\" + \" \" + \"main-right\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-268140291\" + \" \" + \"post-body\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n                className: \"preview post-body-mkd\",\n                source: question.body,\n                plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 136,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-268140291\" + \" \" + \"post-body-btm\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n                className: \"jsx-268140291\" + \" \" + \"communities-container\",\n                children: question.communities.slice(0, 4).map(function (community) {\n                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Tag__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                    name: community.name\n                  }, community.name, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 145,\n                    columnNumber: 21\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 143,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_AskedBy__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                username: question.user.username,\n                createdAt: question.createdAt,\n                postUuid: question.user.uuid,\n                userUuid: userContext === null || userContext === void 0 ? void 0 : (_userContext$user = userContext.user) === null || _userContext$user === void 0 ? void 0 : _userContext$user.uuid,\n                reputation: question.user.reputation\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 148,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 142,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"268140291\",\n      children: \".question-container.jsx-268140291{width:92%;margin:0 auto;}.main.jsx-268140291{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:20px 0;}.votes.jsx-268140291{width:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin:14px 20px;}.main-right.jsx-268140291{width:95%;}.post-body-btm.jsx-268140291{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:95%;margin-bottom:20px;}.communities-container.jsx-268140291{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9RdWVzdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0trQixBQUdxQixBQUtHLEFBS0osQUFTQyxBQUlHLEFBUUEsU0FwQkEsQ0FWQyxBQW1CaEIsY0FsQkEsa0RBSWdCLEFBa0JnQixBQVFoQyxTQXBCd0IsS0FMeEIseUVBTXFCLDRCQVlBLGlFQVhRLDRCQVlqQixVQUNTLG1CQUNyQixnREFibUIsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9RdWVzdGlvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYVNvcnRVcCwgZmFTb3J0RG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGhsanMgZnJvbSBcImhpZ2hsaWdodC5qc1wiO1xuXG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0IHsgZ2V0Q29va2llLCB1cGRhdGVWb3RlIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgdm90ZVR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvdm90ZVR5cGVcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgQXNrZWRCeSBmcm9tIFwiLi9Bc2tlZEJ5XCI7XG5pbXBvcnQgVGFnIGZyb20gXCIuL1RhZ1wiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgUXVlc3Rpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7IHF1ZXN0aW9uIH0pID0+IHtcbiAgY29uc3QgW3ZvdGVzLCBzZXRWb3Rlc10gPSB1c2VTdGF0ZTxudW1iZXI+KHF1ZXN0aW9uLnZvdGVzKTtcbiAgY29uc3QgW3Vwdm90ZUNvbG9yLCBzZXRVcHZvdGVDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiZ3JleVwiKTtcbiAgY29uc3QgW2Rvd252b3RlQ29sb3IsIHNldERvd252b3RlQ29sb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcImdyZXlcIik7XG5cbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgdXB2b3RlID0gY3NzLnVwdm90ZTtcbiAgY29uc3QgZG93bnZvdGUgPSBjc3MuZG93bnZvdGU7XG5cbiAgY29uc3Qgc3R5bGUgPSB7IGN1cnNvcjogXCJwb2ludGVyXCIgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyQ29udGV4dC51c2VyKSB7XG4gICAgICBmZXRjaChgJHtob3N0fS9wb3N0cy8ke3F1ZXN0aW9uLnV1aWR9L3ZvdGUvc3RhdHVzYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkLFxuICAgICAgICB9KSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhOiB2b3RlVHlwZSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gXCJ1cHZvdGVcIikge1xuICAgICAgICAgICAgICBzZXRVcHZvdGVDb2xvcih1cHZvdGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09IFwiZG93bnZvdGVcIikge1xuICAgICAgICAgICAgICBzZXREb3dudm90ZUNvbG9yKGRvd252b3RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VzZXJDb250ZXh0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInByZVwiKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHZvdGUgPSBhc3luYyAodm90ZVR5cGU6IFwidXB2b3RlXCIgfCBcImRvd252b3RlXCIpID0+IHtcbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgaWYgKHVzZXJDb250ZXh0LnVzZXIudXVpZCAhPT0gcXVlc3Rpb24udXNlci51dWlkKSB7XG4gICAgICAgIGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7cXVlc3Rpb24udXVpZH0vdm90ZS9zdGF0dXNgLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbigoZGF0YTogdm90ZVR5cGUpID0+XG4gICAgICAgICAgICB1cGRhdGVWb3RlKFxuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICB2b3RlVHlwZSxcbiAgICAgICAgICAgICAgc2V0Vm90ZXMsXG4gICAgICAgICAgICAgIHNldFVwdm90ZUNvbG9yLFxuICAgICAgICAgICAgICBzZXREb3dudm90ZUNvbG9yLFxuICAgICAgICAgICAgICB2b3RlcyxcbiAgICAgICAgICAgICAgdXB2b3RlLFxuICAgICAgICAgICAgICBkb3dudm90ZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIGF3YWl0IGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7cXVlc3Rpb24udXVpZH0vdm90ZWAsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkLFxuICAgICAgICAgICAgdm90ZVR5cGU6IHZvdGVUeXBlLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiWW91IGNhbid0IHZvdGUgb24geW91ciBvd24gcG9zdCFcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL2F1dGgvc2lnbnVwXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3Rlc1wiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTb3J0VXB9XG4gICAgICAgICAgICAgICAgY29sb3I9e3Vwdm90ZUNvbG9yfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBzaXplPXtcIjJ4XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcInVwdm90ZVwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2b3RlLWNvdW50XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjYzZjNmM2XCIsIG1hcmdpbjogXCItOHB4IDBcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3ZvdGVzfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYVNvcnREb3dufVxuICAgICAgICAgICAgICAgIGNvbG9yPXtkb3dudm90ZUNvbG9yfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBzaXplPXtcIjJ4XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcImRvd252b3RlXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlldyBwb3N0LWJvZHktbWtkXCJcbiAgICAgICAgICAgICAgICAgIHNvdXJjZT17cXVlc3Rpb24uYm9keX1cbiAgICAgICAgICAgICAgICAgIHBsdWdpbnM9e1tyZW1hcmtHZm1dfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtYm9keS1idG1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0aWVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmNvbW11bml0aWVzLnNsaWNlKDAsIDQpLm1hcCgoY29tbXVuaXR5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWcgbmFtZT17Y29tbXVuaXR5Lm5hbWV9IGtleT17Y29tbXVuaXR5Lm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QXNrZWRCeVxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e3F1ZXN0aW9uLnVzZXIudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e3F1ZXN0aW9uLmNyZWF0ZWRBdH1cbiAgICAgICAgICAgICAgICAgIHBvc3RVdWlkPXtxdWVzdGlvbi51c2VyLnV1aWR9XG4gICAgICAgICAgICAgICAgICB1c2VyVXVpZD17dXNlckNvbnRleHQ/LnVzZXI/LnV1aWR9XG4gICAgICAgICAgICAgICAgICByZXB1dGF0aW9uPXtxdWVzdGlvbi51c2VyLnJlcHV0YXRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZvdGVzIHtcbiAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIG1hcmdpbjogMTRweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4tcmlnaHQge1xuICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC1ib2R5LWJ0bSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbXVuaXRpZXMtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Question.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 108,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Question, \"drH/5d1/8I7O3YYc61Z+eGUFwRY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"]];\n});\n\n_c = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\n\nvar _c;\n\n$RefreshReg$(_c, \"Question\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWVzdGlvbi50c3g/ZjE2MCJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsInF1ZXN0aW9uIiwidXNlU3RhdGUiLCJ2b3RlcyIsInNldFZvdGVzIiwidXB2b3RlQ29sb3IiLCJzZXRVcHZvdGVDb2xvciIsImRvd252b3RlQ29sb3IiLCJzZXREb3dudm90ZUNvbG9yIiwidXNlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1cHZvdGUiLCJjc3MiLCJkb3dudm90ZSIsInN0eWxlIiwiY3Vyc29yIiwidXNlRWZmZWN0IiwidXNlciIsImZldGNoIiwiaG9zdCIsInV1aWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyVXVpZCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsInR5cGUiLCJwcmVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidm90ZSIsInZvdGVUeXBlIiwidXBkYXRlVm90ZSIsIkF1dGhvcml6YXRpb24iLCJnZXRDb29raWUiLCJhbGVydCIsInB1c2giLCJmYVNvcnRVcCIsImNvbG9yIiwibWFyZ2luIiwiZmFTb3J0RG93biIsInJlbWFya0dmbSIsImNvbW11bml0aWVzIiwic2xpY2UiLCJtYXAiLCJjb21tdW5pdHkiLCJuYW1lIiwidXNlcm5hbWUiLCJjcmVhdGVkQXQiLCJyZXB1dGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsUUFBeUIsR0FBRyxTQUE1QkEsUUFBNEIsT0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ3hCQyxzREFBUSxD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QUFFdkQsUUFBUSxDQUFDd0QsU0FGdEI7QUFHRSx3QkFBUSxFQUFFeEQsUUFBUSxDQUFDbUIsSUFBVCxDQUFjRyxJQUgxQjtBQUlFLHdCQUFRLEVBQUVkLFdBQUYsYUFBRUEsV0FBRiw0Q0FBRUEsV0FBVyxDQUFFVyxJQUFmLHNEQUFFLGtCQUFtQkcsSUFKL0I7QUFLRSwwQkFBVSxFQUFFdEIsUUFBUSxDQUFDbUIsSUFBVCxDQUFjc0M7QUFMNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEZELENBakxEOztHQUFNMUQsUTtVQU1XYSxxRDs7O0tBTlhiLFE7QUFtTFNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9RdWVzdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYVNvcnRVcCwgZmFTb3J0RG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGhsanMgZnJvbSBcImhpZ2hsaWdodC5qc1wiO1xuXG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0IHsgZ2V0Q29va2llLCB1cGRhdGVWb3RlIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgdm90ZVR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvdm90ZVR5cGVcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgQXNrZWRCeSBmcm9tIFwiLi9Bc2tlZEJ5XCI7XG5pbXBvcnQgVGFnIGZyb20gXCIuL1RhZ1wiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi91dGlscy9jc3NWYXJpYWJsZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgUXVlc3Rpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7IHF1ZXN0aW9uIH0pID0+IHtcbiAgY29uc3QgW3ZvdGVzLCBzZXRWb3Rlc10gPSB1c2VTdGF0ZTxudW1iZXI+KHF1ZXN0aW9uLnZvdGVzKTtcbiAgY29uc3QgW3Vwdm90ZUNvbG9yLCBzZXRVcHZvdGVDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiZ3JleVwiKTtcbiAgY29uc3QgW2Rvd252b3RlQ29sb3IsIHNldERvd252b3RlQ29sb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcImdyZXlcIik7XG5cbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgdXB2b3RlID0gY3NzLnVwdm90ZTtcbiAgY29uc3QgZG93bnZvdGUgPSBjc3MuZG93bnZvdGU7XG5cbiAgY29uc3Qgc3R5bGUgPSB7IGN1cnNvcjogXCJwb2ludGVyXCIgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyQ29udGV4dC51c2VyKSB7XG4gICAgICBmZXRjaChgJHtob3N0fS9wb3N0cy8ke3F1ZXN0aW9uLnV1aWR9L3ZvdGUvc3RhdHVzYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkLFxuICAgICAgICB9KSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhOiB2b3RlVHlwZSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gXCJ1cHZvdGVcIikge1xuICAgICAgICAgICAgICBzZXRVcHZvdGVDb2xvcih1cHZvdGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09IFwiZG93bnZvdGVcIikge1xuICAgICAgICAgICAgICBzZXREb3dudm90ZUNvbG9yKGRvd252b3RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VzZXJDb250ZXh0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInByZVwiKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHZvdGUgPSBhc3luYyAodm90ZVR5cGU6IFwidXB2b3RlXCIgfCBcImRvd252b3RlXCIpID0+IHtcbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgaWYgKHVzZXJDb250ZXh0LnVzZXIudXVpZCAhPT0gcXVlc3Rpb24udXNlci51dWlkKSB7XG4gICAgICAgIGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7cXVlc3Rpb24udXVpZH0vdm90ZS9zdGF0dXNgLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbigoZGF0YTogdm90ZVR5cGUpID0+XG4gICAgICAgICAgICB1cGRhdGVWb3RlKFxuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICB2b3RlVHlwZSxcbiAgICAgICAgICAgICAgc2V0Vm90ZXMsXG4gICAgICAgICAgICAgIHNldFVwdm90ZUNvbG9yLFxuICAgICAgICAgICAgICBzZXREb3dudm90ZUNvbG9yLFxuICAgICAgICAgICAgICB2b3RlcyxcbiAgICAgICAgICAgICAgdXB2b3RlLFxuICAgICAgICAgICAgICBkb3dudm90ZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIGF3YWl0IGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7cXVlc3Rpb24udXVpZH0vdm90ZWAsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkLFxuICAgICAgICAgICAgdm90ZVR5cGU6IHZvdGVUeXBlLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiWW91IGNhbid0IHZvdGUgb24geW91ciBvd24gcG9zdCFcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL2F1dGgvc2lnbnVwXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3Rlc1wiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTb3J0VXB9XG4gICAgICAgICAgICAgICAgY29sb3I9e3Vwdm90ZUNvbG9yfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBzaXplPXtcIjJ4XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcInVwdm90ZVwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2b3RlLWNvdW50XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjYzZjNmM2XCIsIG1hcmdpbjogXCItOHB4IDBcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3ZvdGVzfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYVNvcnREb3dufVxuICAgICAgICAgICAgICAgIGNvbG9yPXtkb3dudm90ZUNvbG9yfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBzaXplPXtcIjJ4XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcImRvd252b3RlXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlldyBwb3N0LWJvZHktbWtkXCJcbiAgICAgICAgICAgICAgICAgIHNvdXJjZT17cXVlc3Rpb24uYm9keX1cbiAgICAgICAgICAgICAgICAgIHBsdWdpbnM9e1tyZW1hcmtHZm1dfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtYm9keS1idG1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0aWVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmNvbW11bml0aWVzLnNsaWNlKDAsIDQpLm1hcCgoY29tbXVuaXR5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWcgbmFtZT17Y29tbXVuaXR5Lm5hbWV9IGtleT17Y29tbXVuaXR5Lm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QXNrZWRCeVxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e3F1ZXN0aW9uLnVzZXIudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e3F1ZXN0aW9uLmNyZWF0ZWRBdH1cbiAgICAgICAgICAgICAgICAgIHBvc3RVdWlkPXtxdWVzdGlvbi51c2VyLnV1aWR9XG4gICAgICAgICAgICAgICAgICB1c2VyVXVpZD17dXNlckNvbnRleHQ/LnVzZXI/LnV1aWR9XG4gICAgICAgICAgICAgICAgICByZXB1dGF0aW9uPXtxdWVzdGlvbi51c2VyLnJlcHV0YXRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZvdGVzIHtcbiAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIG1hcmdpbjogMTRweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4tcmlnaHQge1xuICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC1ib2R5LWJ0bSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbXVuaXRpZXMtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Question.tsx\n");

/***/ }),

/***/ "./node_modules/highlight.js/lib/core.js":
false,

/***/ "./node_modules/highlight.js/lib/index.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/1c.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/abnf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/accesslog.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/actionscript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ada.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/angelscript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/apache.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/applescript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/arcade.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/arduino.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/armasm.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/asciidoc.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/aspectj.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/autohotkey.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/autoit.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/avrasm.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/awk.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/axapta.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/bash.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/basic.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/bnf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/brainfuck.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/c-like.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/c.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/cal.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/capnproto.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ceylon.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/clean.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/clojure-repl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/clojure.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/cmake.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/coffeescript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/coq.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/cos.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/cpp.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/crmsh.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/crystal.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/csharp.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/csp.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/css.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/d.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/dart.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/delphi.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/diff.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/django.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/dns.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/dockerfile.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/dos.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/dsconfig.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/dts.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/dust.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ebnf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/elixir.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/elm.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/erb.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/erlang-repl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/erlang.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/excel.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/fix.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/flix.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/fortran.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/fsharp.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/gams.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/gauss.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/gcode.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/gherkin.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/glsl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/gml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/go.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/golo.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/gradle.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/groovy.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/haml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/handlebars.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/haskell.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/haxe.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/hsp.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/htmlbars.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/http.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/hy.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/inform7.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ini.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/irpf90.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/isbl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/java.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/javascript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/jboss-cli.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/json.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/julia-repl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/julia.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/kotlin.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/lasso.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/latex.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ldif.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/leaf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/less.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/lisp.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/livecodeserver.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/livescript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/llvm.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/lsl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/lua.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/makefile.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/markdown.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/mathematica.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/matlab.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/maxima.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/mel.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/mercury.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/mipsasm.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/mizar.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/mojolicious.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/monkey.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/moonscript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/n1ql.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/nginx.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/nim.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/nix.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/node-repl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/nsis.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/objectivec.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ocaml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/openscad.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/oxygene.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/parser3.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/perl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/pf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/pgsql.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/php-template.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/php.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/plaintext.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/pony.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/powershell.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/processing.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/profile.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/prolog.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/properties.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/protobuf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/puppet.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/purebasic.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/python-repl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/python.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/q.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/qml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/r.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/reasonml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/rib.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/roboconf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/routeros.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/rsl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ruby.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ruleslanguage.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/rust.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/sas.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/scala.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/scheme.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/scilab.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/scss.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/shell.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/smali.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/smalltalk.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/sml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/sqf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/sql.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/sql_more.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/stan.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/stata.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/step21.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/stylus.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/subunit.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/swift.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/taggerscript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/tap.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/tcl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/thrift.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/tp.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/twig.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/typescript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/vala.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/vbnet.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/vbscript-html.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/vbscript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/verilog.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/vhdl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/vim.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/x86asm.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/xl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/xml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/xquery.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/yaml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/zephir.js":
false

})