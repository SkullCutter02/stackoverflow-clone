webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Question.tsx":
/*!*********************************!*\
  !*** ./components/Question.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Aside__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Aside */ \"./components/Aside.tsx\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/functions */ \"./utils/functions.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Question.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Question = function Question(_ref) {\n  _s();\n\n  var data = _ref.data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(data.votes),\n      votes = _useState[0],\n      setVotes = _useState[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_12__[\"UserContext\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n  var style = {\n    cursor: \"pointer\"\n  };\n\n  var vote = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(voteType) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!userContext.user) {\n                _context.next = 6;\n                break;\n              }\n\n              fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_11__[\"default\"], \"/posts/\").concat(data.uuid, \"/vote/status\"), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                  userUuid: userContext.user.uuid\n                })\n              }).then(function (res) {\n                return res.json();\n              }).then(function (data2) {\n                console.log(data2);\n                console.log(voteType);\n\n                if (!data2.status) {\n                  if (voteType === \"upvote\") {\n                    setVotes(data.votes + 1);\n                  } else if (voteType === \"downvote\") {\n                    setVotes(data.votes - 1);\n                  }\n                } else if (data2.status) {\n                  if (data2.voteType === \"upvote\" && voteType === \"upvote\") {\n                    setVotes(data.votes - 1);\n                  } else if (data2.voteType === \"downvote\" && voteType === \"downvote\") {\n                    setVotes(data.votes + 1);\n                  } else if (data2.voteType === \"upvote\" && voteType === \"downvote\") {\n                    setVotes(data.votes - 2);\n                  } else if (data2.voteType === \"downvote\" && voteType === \"upvote\") {\n                    setVotes(data.votes + 2);\n                  }\n                }\n              });\n              _context.next = 4;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_11__[\"default\"], \"/posts/\").concat(data.uuid, \"/vote\"), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\",\n                  Authorization: \"Bearer \".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_13__[\"getCookie\"])(\"token\"))\n                },\n                body: JSON.stringify({\n                  userUuid: userContext.user.uuid,\n                  voteType: voteType\n                })\n              });\n\n            case 4:\n              _context.next = 8;\n              break;\n\n            case 6:\n              _context.next = 8;\n              return router.push(\"/auth/signup\");\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function vote(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      className: \"jsx-2426090784\",\n      children: data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-2426090784\" + \" \" + \"h1-border-btm\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n      className: \"jsx-2426090784\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-2426090784\" + \" \" + \"question-container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2426090784\" + \" \" + \"main\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-2426090784\" + \" \" + \"votes\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faSortUp\"],\n              color: \"grey\",\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"upvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              style: {\n                color: \"#c6c6c6\",\n                margin: \"-8px 0\"\n              },\n              className: \"jsx-2426090784\" + \" \" + \"vote-count\",\n              children: votes\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faSortDown\"],\n              color: \"grey\",\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"downvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-2426090784\" + \" \" + \"main-right\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n              source: data.body,\n              plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Aside__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        borderSide: \"left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"2426090784\",\n      children: \"main.jsx-2426090784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.question-container.jsx-2426090784{width:73%;margin:0 auto;}h1.jsx-2426090784{font-size:1.3rem;line-height:1.4em;margin:20px auto;width:88%;}.h1-border-btm.jsx-2426090784{width:93%;margin:0 auto;border-bottom:1px solid #fff;}.main.jsx-2426090784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:20px 0;}.votes.jsx-2426090784{width:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-right:10px;}.main-right.jsx-2426090784{width:95%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9RdWVzdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhrQixBQUd3QixBQUtILEFBS08sQUFPUCxBQU1HLEFBS0osQUFTQyxTQVJHLENBdkJDLEFBWUEsQUFvQmhCLE9BM0JvQixPQUpwQixBQVkrQixXQVBaLGlCQUNQLENBT1osU0FOQSxZQWJnQyxBQXVCaEIsU0FNUSxLQUx4Qix5RUFNcUIsNEJBN0JyQixpRUE4QjZCLHlHQUNULGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvUXVlc3Rpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhU29ydFVwLCBmYVNvcnREb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7IFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgQXNpZGUgZnJvbSBcIi4vQXNpZGVcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRhdGE6IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgUXVlc3Rpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCBbdm90ZXMsIHNldFZvdGVzXSA9IHVzZVN0YXRlPG51bWJlcj4oZGF0YS52b3Rlcyk7XG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHN0eWxlID0geyBjdXJzb3I6IFwicG9pbnRlclwiIH07XG5cbiAgY29uc3Qgdm90ZSA9IGFzeW5jICh2b3RlVHlwZTogXCJ1cHZvdGVcIiB8IFwiZG93bnZvdGVcIikgPT4ge1xuICAgIGlmICh1c2VyQ29udGV4dC51c2VyKSB7XG4gICAgICBmZXRjaChgJHtob3N0fS9wb3N0cy8ke2RhdGEudXVpZH0vdm90ZS9zdGF0dXNgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YTIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHZvdGVUeXBlKTtcbiAgICAgICAgICBpZiAoIWRhdGEyLnN0YXR1cykge1xuICAgICAgICAgICAgaWYgKHZvdGVUeXBlID09PSBcInVwdm90ZVwiKSB7XG4gICAgICAgICAgICAgIHNldFZvdGVzKGRhdGEudm90ZXMgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodm90ZVR5cGUgPT09IFwiZG93bnZvdGVcIikge1xuICAgICAgICAgICAgICBzZXRWb3RlcyhkYXRhLnZvdGVzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhMi5zdGF0dXMpIHtcbiAgICAgICAgICAgIGlmIChkYXRhMi52b3RlVHlwZSA9PT0gXCJ1cHZvdGVcIiAmJiB2b3RlVHlwZSA9PT0gXCJ1cHZvdGVcIikge1xuICAgICAgICAgICAgICBzZXRWb3RlcyhkYXRhLnZvdGVzIC0gMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICBkYXRhMi52b3RlVHlwZSA9PT0gXCJkb3dudm90ZVwiICYmXG4gICAgICAgICAgICAgIHZvdGVUeXBlID09PSBcImRvd252b3RlXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzZXRWb3RlcyhkYXRhLnZvdGVzICsgMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEyLnZvdGVUeXBlID09PSBcInVwdm90ZVwiICYmIHZvdGVUeXBlID09PSBcImRvd252b3RlXCIpIHtcbiAgICAgICAgICAgICAgc2V0Vm90ZXMoZGF0YS52b3RlcyAtIDIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhMi52b3RlVHlwZSA9PT0gXCJkb3dudm90ZVwiICYmIHZvdGVUeXBlID09PSBcInVwdm90ZVwiKSB7XG4gICAgICAgICAgICAgIHNldFZvdGVzKGRhdGEudm90ZXMgKyAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgYXdhaXQgZmV0Y2goYCR7aG9zdH0vcG9zdHMvJHtkYXRhLnV1aWR9L3ZvdGVgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKFwidG9rZW5cIil9YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJVdWlkOiB1c2VyQ29udGV4dC51c2VyLnV1aWQsXG4gICAgICAgICAgdm90ZVR5cGU6IHZvdGVUeXBlLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCByb3V0ZXIucHVzaChcIi9hdXRoL3NpZ251cFwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8aDE+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDEtYm9yZGVyLWJ0bVwiIC8+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZXNcIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhU29ydFVwfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtcImdyZXlcIn1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgc2l6ZT17XCIyeFwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJ1cHZvdGVcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidm90ZS1jb3VudFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2M2YzZjNlwiLCBtYXJnaW46IFwiLThweCAwXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt2b3Rlc31cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTb3J0RG93bn1cbiAgICAgICAgICAgICAgICBjb2xvcj17XCJncmV5XCJ9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIHNpemU9e1wiMnhcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b3RlKFwiZG93bnZvdGVcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1yaWdodFwiPlxuICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e2RhdGEuYm9keX0gcGx1Z2lucz17W3JlbWFya0dmbV19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBc2lkZSBib3JkZXJTaWRlPXtcImxlZnRcIn0gLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5xdWVzdGlvbi1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA3MyU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA4OCU7XG4gICAgICAgIH1cblxuICAgICAgICAuaDEtYm9yZGVyLWJ0bSB7XG4gICAgICAgICAgd2lkdGg6IDkzJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZvdGVzIHtcbiAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLXJpZ2h0IHtcbiAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Question.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Question, \"oV4dTEByPCAsK5FrYdSftR59xW4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"]];\n});\n\n_c = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\n\nvar _c;\n\n$RefreshReg$(_c, \"Question\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWVzdGlvbi50c3g/ZjE2MCJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsImRhdGEiLCJ1c2VTdGF0ZSIsInZvdGVzIiwic2V0Vm90ZXMiLCJ1c2VyQ29udGV4dCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInN0eWxlIiwiY3Vyc29yIiwidm90ZSIsInZvdGVUeXBlIiwidXNlciIsImZldGNoIiwiaG9zdCIsInV1aWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyVXVpZCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YTIiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiQXV0aG9yaXphdGlvbiIsImdldENvb2tpZSIsInB1c2giLCJ0aXRsZSIsImZhU29ydFVwIiwiY29sb3IiLCJtYXJnaW4iLCJmYVNvcnREb3duIiwicmVtYXJrR2ZtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsUUFBeUIsR0FBRyxTQUE1QkEsUUFBNEIsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDcEJDLHNEQUFRLENBQVNELElBQUksQ0FBQ0UsS0FBZCxDQURZO0FBQUEsTUFDdkNBLEtBRHVDO0FBQUEsTUFDaENDLFFBRGdDOztBQUU5QyxNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQTlCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLEtBQUssR0FBRztBQUFFQyxVQUFNLEVBQUU7QUFBVixHQUFkOztBQUVBLE1BQU1DLElBQUk7QUFBQSxpTUFBRyxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFB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O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBOEJFLHFFQUFDLCtDQUFEO0FBQU8sa0JBQVUsRUFBRTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUZELENBNUlEOztHQUFNdkMsUTtVQUdXUyxxRDs7O0tBSFhULFE7QUE4SVNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9RdWVzdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFTb3J0VXAsIGZhU29ydERvd24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUXVlc3Rpb25UeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL2luZGl2aWR1YWxRdWVzdGlvblR5cGVcIjtcbmltcG9ydCBBc2lkZSBmcm9tIFwiLi9Bc2lkZVwiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCIuLi91dGlscy9mdW5jdGlvbnNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YTogUXVlc3Rpb25UeXBlO1xufVxuXG5jb25zdCBRdWVzdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IFt2b3Rlcywgc2V0Vm90ZXNdID0gdXNlU3RhdGU8bnVtYmVyPihkYXRhLnZvdGVzKTtcbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc3R5bGUgPSB7IGN1cnNvcjogXCJwb2ludGVyXCIgfTtcblxuICBjb25zdCB2b3RlID0gYXN5bmMgKHZvdGVUeXBlOiBcInVwdm90ZVwiIHwgXCJkb3dudm90ZVwiKSA9PiB7XG4gICAgaWYgKHVzZXJDb250ZXh0LnVzZXIpIHtcbiAgICAgIGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7ZGF0YS51dWlkfS92b3RlL3N0YXR1c2AsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdXNlclV1aWQ6IHVzZXJDb250ZXh0LnVzZXIudXVpZCxcbiAgICAgICAgfSksXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YTIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhMik7XG4gICAgICAgICAgY29uc29sZS5sb2codm90ZVR5cGUpO1xuICAgICAgICAgIGlmICghZGF0YTIuc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAodm90ZVR5cGUgPT09IFwidXB2b3RlXCIpIHtcbiAgICAgICAgICAgICAgc2V0Vm90ZXMoZGF0YS52b3RlcyArIDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2b3RlVHlwZSA9PT0gXCJkb3dudm90ZVwiKSB7XG4gICAgICAgICAgICAgIHNldFZvdGVzKGRhdGEudm90ZXMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEyLnN0YXR1cykge1xuICAgICAgICAgICAgaWYgKGRhdGEyLnZvdGVUeXBlID09PSBcInVwdm90ZVwiICYmIHZvdGVUeXBlID09PSBcInVwdm90ZVwiKSB7XG4gICAgICAgICAgICAgIHNldFZvdGVzKGRhdGEudm90ZXMgLSAxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIGRhdGEyLnZvdGVUeXBlID09PSBcImRvd252b3RlXCIgJiZcbiAgICAgICAgICAgICAgdm90ZVR5cGUgPT09IFwiZG93bnZvdGVcIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNldFZvdGVzKGRhdGEudm90ZXMgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YTIudm90ZVR5cGUgPT09IFwidXB2b3RlXCIgJiYgdm90ZVR5cGUgPT09IFwiZG93bnZvdGVcIikge1xuICAgICAgICAgICAgICBzZXRWb3RlcyhkYXRhLnZvdGVzIC0gMik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEyLnZvdGVUeXBlID09PSBcImRvd252b3RlXCIgJiYgdm90ZVR5cGUgPT09IFwidXB2b3RlXCIpIHtcbiAgICAgICAgICAgICAgc2V0Vm90ZXMoZGF0YS52b3RlcyArIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICBhd2FpdCBmZXRjaChgJHtob3N0fS9wb3N0cy8ke2RhdGEudXVpZH0vdm90ZWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdXNlclV1aWQ6IHVzZXJDb250ZXh0LnVzZXIudXVpZCxcbiAgICAgICAgICB2b3RlVHlwZTogdm90ZVR5cGUsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL2F1dGgvc2lnbnVwXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMS1ib3JkZXItYnRtXCIgLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3Rlc1wiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTb3J0VXB9XG4gICAgICAgICAgICAgICAgY29sb3I9e1wiZ3JleVwifVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBzaXplPXtcIjJ4XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcInVwdm90ZVwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2b3RlLWNvdW50XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjYzZjNmM2XCIsIG1hcmdpbjogXCItOHB4IDBcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3ZvdGVzfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYVNvcnREb3dufVxuICAgICAgICAgICAgICAgIGNvbG9yPXtcImdyZXlcIn1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgc2l6ZT17XCIyeFwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJkb3dudm90ZVwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17ZGF0YS5ib2R5fSBwbHVnaW5zPXtbcmVtYXJrR2ZtXX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFzaWRlIGJvcmRlclNpZGU9e1wibGVmdFwifSAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLnF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDczJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDg4JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oMS1ib3JkZXItYnRtIHtcbiAgICAgICAgICB3aWR0aDogOTMlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAudm90ZXMge1xuICAgICAgICAgIHdpZHRoOiA1JTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4tcmlnaHQge1xuICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Question.tsx\n");

/***/ })

})