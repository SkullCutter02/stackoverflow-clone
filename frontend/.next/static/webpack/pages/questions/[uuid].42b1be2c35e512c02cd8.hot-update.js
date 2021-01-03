webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/Question.tsx":
/*!*********************************!*\
  !*** ./components/Question.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _Aside__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Aside */ \"./components/Aside.tsx\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/functions */ \"./utils/functions.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Question.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Question = function Question(_ref) {\n  _s();\n\n  var data = _ref.data;\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_13__[\"UserContext\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n  var style = {\n    cursor: \"pointer\"\n  };\n\n  var postVote = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userUuid, voteType) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_12__[\"default\"], \"/posts/\").concat(data.uuid, \"/vote\"), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\",\n                  Authorization: \"Bearer \".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_14__[\"getCookie\"])(\"token\"))\n                },\n                body: JSON.stringify({\n                  userUuid: userUuid,\n                  voteType: voteType\n                })\n              });\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function postVote(_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // @ts-ignore\n\n\n  var mutation = Object(react_query__WEBPACK_IMPORTED_MODULE_10__[\"useMutation\"])(postVote);\n\n  var vote = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(voteType) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!userContext.user) {\n                _context2.next = 4;\n                break;\n              }\n\n              // @ts-ignore\n              mutation.mutate(userContext.user.uuid, voteType);\n              _context2.next = 6;\n              break;\n\n            case 4:\n              _context2.next = 6;\n              return router.push(\"/auth/signup\");\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function vote(_x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      className: \"jsx-2426090784\",\n      children: data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-2426090784\" + \" \" + \"h1-border-btm\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n      className: \"jsx-2426090784\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-2426090784\" + \" \" + \"question-container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2426090784\" + \" \" + \"main\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-2426090784\" + \" \" + \"votes\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faSortUp\"],\n              color: \"grey\",\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"upvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              style: {\n                color: \"#c6c6c6\",\n                margin: \"-8px 0\"\n              },\n              className: \"jsx-2426090784\" + \" \" + \"vote-count\",\n              children: data.votes\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faSortDown\"],\n              color: \"grey\",\n              style: style,\n              size: \"2x\",\n              onClick: function onClick() {\n                return vote(\"downvote\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-2426090784\" + \" \" + \"main-right\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n              source: data.body,\n              plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Aside__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        borderSide: \"left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"2426090784\",\n      children: \"main.jsx-2426090784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.question-container.jsx-2426090784{width:73%;margin:0 auto;}h1.jsx-2426090784{font-size:1.3rem;line-height:1.4em;margin:20px auto;width:88%;}.h1-border-btm.jsx-2426090784{width:93%;margin:0 auto;border-bottom:1px solid #fff;}.main.jsx-2426090784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:20px 0;}.votes.jsx-2426090784{width:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-right:10px;}.main-right.jsx-2426090784{width:95%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9RdWVzdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkZrQixBQUd3QixBQUtILEFBS08sQUFPUCxBQU1HLEFBS0osQUFTQyxTQVJHLENBdkJDLEFBWUEsQUFvQmhCLE9BM0JvQixPQUpwQixBQVkrQixXQVBaLGlCQUNQLENBT1osU0FOQSxZQWJnQyxBQXVCaEIsU0FNUSxLQUx4Qix5RUFNcUIsNEJBN0JyQixpRUE4QjZCLHlHQUNULGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvUXVlc3Rpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFTb3J0VXAsIGZhU29ydERvd24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmltcG9ydCB7IFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgQXNpZGUgZnJvbSBcIi4vQXNpZGVcIjtcbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRhdGE6IFF1ZXN0aW9uVHlwZTtcbn1cblxuY29uc3QgUXVlc3Rpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBzdHlsZSA9IHsgY3Vyc29yOiBcInBvaW50ZXJcIiB9O1xuXG4gIGNvbnN0IHBvc3RWb3RlID0gYXN5bmMgKFxuICAgIHVzZXJVdWlkOiBzdHJpbmcsXG4gICAgdm90ZVR5cGU6IFwidXB2b3RlXCIgfCBcImRvd252b3RlXCJcbiAgKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7aG9zdH0vcG9zdHMvJHtkYXRhLnV1aWR9L3ZvdGVgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VyVXVpZDogdXNlclV1aWQsXG4gICAgICAgIHZvdGVUeXBlOiB2b3RlVHlwZSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9O1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgbXV0YXRpb24gPSB1c2VNdXRhdGlvbihwb3N0Vm90ZSk7XG5cbiAgY29uc3Qgdm90ZSA9IGFzeW5jICh2b3RlVHlwZTogXCJ1cHZvdGVcIiB8IFwiZG93bnZvdGVcIikgPT4ge1xuICAgIGlmICh1c2VyQ29udGV4dC51c2VyKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBtdXRhdGlvbi5tdXRhdGUodXNlckNvbnRleHQudXNlci51dWlkLCB2b3RlVHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL2F1dGgvc2lnbnVwXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMS1ib3JkZXItYnRtXCIgLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3Rlc1wiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTb3J0VXB9XG4gICAgICAgICAgICAgICAgY29sb3I9e1wiZ3JleVwifVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBzaXplPXtcIjJ4XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcInVwdm90ZVwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2b3RlLWNvdW50XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjYzZjNmM2XCIsIG1hcmdpbjogXCItOHB4IDBcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RhdGEudm90ZXN9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhU29ydERvd259XG4gICAgICAgICAgICAgICAgY29sb3I9e1wiZ3JleVwifVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBzaXplPXtcIjJ4XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcImRvd252b3RlXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcmlnaHRcIj5cbiAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtkYXRhLmJvZHl9IHBsdWdpbnM9e1tyZW1hcmtHZm1dfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QXNpZGUgYm9yZGVyU2lkZT17XCJsZWZ0XCJ9IC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAucXVlc3Rpb24tY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNzMlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICB3aWR0aDogODglO1xuICAgICAgICB9XG5cbiAgICAgICAgLmgxLWJvcmRlci1idG0ge1xuICAgICAgICAgIHdpZHRoOiA5MyU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52b3RlcyB7XG4gICAgICAgICAgd2lkdGg6IDUlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbi1yaWdodCB7XG4gICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Question.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Question, \"B+sQdo8t2Y+jMNH9UGvtSXSWBQg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], react_query__WEBPACK_IMPORTED_MODULE_10__[\"useMutation\"]];\n});\n\n_c = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\n\nvar _c;\n\n$RefreshReg$(_c, \"Question\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWVzdGlvbi50c3g/ZjE2MCJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsImRhdGEiLCJ1c2VyQ29udGV4dCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInN0eWxlIiwiY3Vyc29yIiwicG9zdFZvdGUiLCJ1c2VyVXVpZCIsInZvdGVUeXBlIiwiZmV0Y2giLCJob3N0IiwidXVpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0Q29va2llIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwibXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsInZvdGUiLCJ1c2VyIiwibXV0YXRlIiwicHVzaCIsInRpdGxlIiwiZmFTb3J0VXAiLCJjb2xvciIsIm1hcmdpbiIsInZvdGVzIiwiZmFTb3J0RG93biIsInJlbWFya0dmbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1BLFFBQXlCLEdBQUcsU0FBNUJBLFFBQTRCLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDOUMsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE5QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxLQUFLLEdBQUc7QUFBRUMsVUFBTSxFQUFFO0FBQVYsR0FBZDs7QUFFQSxNQUFNQyxRQUFRO0FBQUEsaU1BQUcsaUJBQ2ZDLFFBRGUsRUFFZkMsUUFGZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUlHQyxLQUFLLFdBQUlDLG9EQUFKLG9CQUFrQlosSUFBSSxDQUFDYSxJQUF2QixZQUFvQztBQUN6REMsc0JBQU0s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QUFVLEVBQUU7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlGRCxDQXJIRDs7R0FBTXBDLFE7VUFFV00scUQsRUF1QkVtQix3RDs7O0tBekJiekIsUTtBQXVIU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1ZXN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhU29ydFVwLCBmYVNvcnREb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvaW5kaXZpZHVhbFF1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0IEFzaWRlIGZyb20gXCIuL0FzaWRlXCI7XG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBkYXRhOiBRdWVzdGlvblR5cGU7XG59XG5cbmNvbnN0IFF1ZXN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc3R5bGUgPSB7IGN1cnNvcjogXCJwb2ludGVyXCIgfTtcblxuICBjb25zdCBwb3N0Vm90ZSA9IGFzeW5jIChcbiAgICB1c2VyVXVpZDogc3RyaW5nLFxuICAgIHZvdGVUeXBlOiBcInVwdm90ZVwiIHwgXCJkb3dudm90ZVwiXG4gICk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2hvc3R9L3Bvc3RzLyR7ZGF0YS51dWlkfS92b3RlYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlclV1aWQ6IHVzZXJVdWlkLFxuICAgICAgICB2b3RlVHlwZTogdm90ZVR5cGUsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgfTtcblxuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IG11dGF0aW9uID0gdXNlTXV0YXRpb24ocG9zdFZvdGUpO1xuXG4gIGNvbnN0IHZvdGUgPSBhc3luYyAodm90ZVR5cGU6IFwidXB2b3RlXCIgfCBcImRvd252b3RlXCIpID0+IHtcbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgbXV0YXRpb24ubXV0YXRlKHVzZXJDb250ZXh0LnVzZXIudXVpZCwgdm90ZVR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCByb3V0ZXIucHVzaChcIi9hdXRoL3NpZ251cFwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8aDE+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDEtYm9yZGVyLWJ0bVwiIC8+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZXNcIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhU29ydFVwfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtcImdyZXlcIn1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgc2l6ZT17XCIyeFwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJ1cHZvdGVcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidm90ZS1jb3VudFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2M2YzZjNlwiLCBtYXJnaW46IFwiLThweCAwXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkYXRhLnZvdGVzfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYVNvcnREb3dufVxuICAgICAgICAgICAgICAgIGNvbG9yPXtcImdyZXlcIn1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgc2l6ZT17XCIyeFwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJkb3dudm90ZVwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17ZGF0YS5ib2R5fSBwbHVnaW5zPXtbcmVtYXJrR2ZtXX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFzaWRlIGJvcmRlclNpZGU9e1wibGVmdFwifSAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLnF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDczJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDg4JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oMS1ib3JkZXItYnRtIHtcbiAgICAgICAgICB3aWR0aDogOTMlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAudm90ZXMge1xuICAgICAgICAgIHdpZHRoOiA1JTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4tcmlnaHQge1xuICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Question.tsx\n");

/***/ })

})