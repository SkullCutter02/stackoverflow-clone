webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/OPActions.tsx":
/*!**********************************!*\
  !*** ./components/OPActions.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/OPActions.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar OPActions = function OPActions(_ref) {\n  _s();\n\n  var uuid = _ref.uuid,\n      type = _ref.type,\n      setEditMode = _ref.setEditMode;\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_11__[\"UserContext\"]);\n  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_7__[\"useQueryClient\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n  var style = {\n    cursor: \"pointer\",\n    marginRight: \"20px\"\n  };\n\n  var edit = function edit() {\n    setEditMode(true);\n\n    if (type === \"question\") {\n      window.scrollBy(0, -1000);\n    }\n  };\n\n  var remove = function remove() {\n    if (userContext.user) {\n      var confirm = window.confirm(\"Are you sure you want to delete your \".concat(type, \"?\"));\n\n      if (confirm) {\n        if (type === \"answer\") {\n          fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_9__[\"default\"], \"/posts/comments/\").concat(uuid), {\n            method: \"DELETE\",\n            headers: {\n              \"Content-Type\": \"application/json\",\n              Authorization: \"Bearer \".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_10__[\"getCookie\"])(\"token\"))\n            },\n            body: JSON.stringify({\n              userUuid: userContext.user.uuid\n            })\n          }).then( /*#__PURE__*/function () {\n            var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {\n              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                while (1) {\n                  switch (_context.prev = _context.next) {\n                    case 0:\n                      if (!(res.status >= 200 && res.status < 300)) {\n                        _context.next = 5;\n                        break;\n                      }\n\n                      _context.next = 3;\n                      return queryClient.prefetchQuery([\"individual-question\"], {\n                        cacheTime: 0\n                      });\n\n                    case 3:\n                      _context.next = 6;\n                      break;\n\n                    case 5:\n                      alert(\"Something went wrong\");\n\n                    case 6:\n                    case \"end\":\n                      return _context.stop();\n                  }\n                }\n              }, _callee);\n            }));\n\n            return function (_x) {\n              return _ref2.apply(this, arguments);\n            };\n          }());\n        } else if (type === \"question\") {\n          fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_9__[\"default\"], \"/posts/\").concat(uuid), {\n            method: \"DELETE\",\n            headers: {\n              \"Content-Type\": \"application/json\",\n              Authorization: \"Bearer \".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_10__[\"getCookie\"])(\"token\"))\n            },\n            body: JSON.stringify({\n              userUuid: userContext.user.uuid\n            })\n          }).then(function (res) {\n            if (res.status >= 200 && res.status < 300) {\n              router.back();\n            } else {\n              alert(\"Something went wrong\");\n            }\n          });\n        }\n      }\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1507055468\" + \" \" + \"actions-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1507055468\" + \" \" + \"icons-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faEdit\"],\n          color: \"white\",\n          style: style,\n          size: \"1x\",\n          onClick: edit\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faTrashAlt\"],\n          color: \"white\",\n          style: style,\n          size: \"1x\",\n          onClick: remove\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1507055468\",\n      children: \".actions-container.jsx-1507055468{width:95%;}.icons-container.jsx-1507055468{float:right;margin-top:-10px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9PUEFjdGlvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ha0IsQUFHcUIsQUFJRSxVQUhkLEVBSW1CLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvT1BBY3Rpb25zLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUVkaXQsIGZhVHJhc2hBbHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHV1aWQ6IHN0cmluZztcbiAgdHlwZTogXCJxdWVzdGlvblwiIHwgXCJhbnN3ZXJcIjtcbiAgc2V0RWRpdE1vZGU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+Pjtcbn1cblxuY29uc3QgT1BBY3Rpb25zOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB1dWlkLCB0eXBlLCBzZXRFZGl0TW9kZSB9KSA9PiB7XG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBtYXJnaW5SaWdodDogXCIyMHB4XCIsXG4gIH07XG5cbiAgY29uc3QgZWRpdCA9ICgpID0+IHtcbiAgICBzZXRFZGl0TW9kZSh0cnVlKTtcblxuICAgIGlmICh0eXBlID09PSBcInF1ZXN0aW9uXCIpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAtMTAwMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgY29uc3QgY29uZmlybSA9IHdpbmRvdy5jb25maXJtKFxuICAgICAgICBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB5b3VyICR7dHlwZX0/YFxuICAgICAgKTtcblxuICAgICAgaWYgKGNvbmZpcm0pIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiYW5zd2VyXCIpIHtcbiAgICAgICAgICBmZXRjaChgJHtob3N0fS9wb3N0cy9jb21tZW50cy8ke3V1aWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkIH0pLFxuICAgICAgICAgIH0pLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgICAgYXdhaXQgcXVlcnlDbGllbnQucHJlZmV0Y2hRdWVyeShbXCJpbmRpdmlkdWFsLXF1ZXN0aW9uXCJdLCB7XG4gICAgICAgICAgICAgICAgY2FjaGVUaW1lOiAwLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJxdWVzdGlvblwiKSB7XG4gICAgICAgICAgZmV0Y2goYCR7aG9zdH0vcG9zdHMvJHt1dWlkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlclV1aWQ6IHVzZXJDb250ZXh0LnVzZXIudXVpZCB9KSxcbiAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgIGljb249e2ZhRWRpdH1cbiAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBzaXplPXtcIjF4XCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXtlZGl0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgaWNvbj17ZmFUcmFzaEFsdH1cbiAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBzaXplPXtcIjF4XCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYWN0aW9ucy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbnMtY29udGFpbmVyIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT1BBY3Rpb25zO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/OPActions.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(OPActions, \"Dw2rKvK38ya7nxnMikYJuJs11lQ=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_7__[\"useQueryClient\"], next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\n_c = OPActions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OPActions);\n\nvar _c;\n\n$RefreshReg$(_c, \"OPActions\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PUEFjdGlvbnMudHN4P2EwMzMiXSwibmFtZXMiOlsiT1BBY3Rpb25zIiwidXVpZCIsInR5cGUiLCJzZXRFZGl0TW9kZSIsInVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwicXVlcnlDbGllbnQiLCJ1c2VRdWVyeUNsaWVudCIsInJvdXRlciIsInVzZVJvdXRlciIsInN0eWxlIiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiLCJlZGl0Iiwid2luZG93Iiwic2Nyb2xsQnkiLCJyZW1vdmUiLCJ1c2VyIiwiY29uZmlybSIsImZldGNoIiwiaG9zdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0Q29va2llIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyVXVpZCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJwcmVmZXRjaFF1ZXJ5IiwiY2FjaGVUaW1lIiwiYWxlcnQiLCJiYWNrIiwiZmFFZGl0IiwiZmFUcmFzaEFsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFRQSxJQUFNQSxTQUEwQixHQUFHLFNBQTdCQSxTQUE2QixPQUFpQztBQUFBOztBQUFBLE1BQTlCQyxJQUE4QixRQUE5QkEsSUFBOEI7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUNsRSxNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQTlCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyxrRUFBYyxFQUFsQztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxLQUFLLEdBQUc7QUFDWkMsVUFBTSxFQUFFLFNBREk7QUFFWkMsZUFBVyxFQUFFO0FBRkQsR0FBZDs7QUFLQSxNQUFN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SyxFQUFFLE9BRlQ7QUFHRSxlQUFLLEVBQUUzQixLQUhUO0FBSUUsY0FBSSxFQUFFLElBSlI7QUFLRSxpQkFBTyxFQUFFTTtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUNELENBL0ZEOztHQUFNakIsUztVQUVnQlEsMEQsRUFDTEUscUQ7OztLQUhYVixTO0FBaUdTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvT1BBY3Rpb25zLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUVkaXQsIGZhVHJhc2hBbHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHV1aWQ6IHN0cmluZztcbiAgdHlwZTogXCJxdWVzdGlvblwiIHwgXCJhbnN3ZXJcIjtcbiAgc2V0RWRpdE1vZGU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+Pjtcbn1cblxuY29uc3QgT1BBY3Rpb25zOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB1dWlkLCB0eXBlLCBzZXRFZGl0TW9kZSB9KSA9PiB7XG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBtYXJnaW5SaWdodDogXCIyMHB4XCIsXG4gIH07XG5cbiAgY29uc3QgZWRpdCA9ICgpID0+IHtcbiAgICBzZXRFZGl0TW9kZSh0cnVlKTtcblxuICAgIGlmICh0eXBlID09PSBcInF1ZXN0aW9uXCIpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAtMTAwMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICBpZiAodXNlckNvbnRleHQudXNlcikge1xuICAgICAgY29uc3QgY29uZmlybSA9IHdpbmRvdy5jb25maXJtKFxuICAgICAgICBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB5b3VyICR7dHlwZX0/YFxuICAgICAgKTtcblxuICAgICAgaWYgKGNvbmZpcm0pIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiYW5zd2VyXCIpIHtcbiAgICAgICAgICBmZXRjaChgJHtob3N0fS9wb3N0cy9jb21tZW50cy8ke3V1aWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyVXVpZDogdXNlckNvbnRleHQudXNlci51dWlkIH0pLFxuICAgICAgICAgIH0pLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgICAgYXdhaXQgcXVlcnlDbGllbnQucHJlZmV0Y2hRdWVyeShbXCJpbmRpdmlkdWFsLXF1ZXN0aW9uXCJdLCB7XG4gICAgICAgICAgICAgICAgY2FjaGVUaW1lOiAwLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJxdWVzdGlvblwiKSB7XG4gICAgICAgICAgZmV0Y2goYCR7aG9zdH0vcG9zdHMvJHt1dWlkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlclV1aWQ6IHVzZXJDb250ZXh0LnVzZXIudXVpZCB9KSxcbiAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgIGljb249e2ZhRWRpdH1cbiAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBzaXplPXtcIjF4XCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXtlZGl0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgaWNvbj17ZmFUcmFzaEFsdH1cbiAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBzaXplPXtcIjF4XCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYWN0aW9ucy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbnMtY29udGFpbmVyIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT1BBY3Rpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/OPActions.tsx\n");

/***/ })

})