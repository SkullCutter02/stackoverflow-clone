webpackHotUpdate_N_E("pages/user/[username]",{

/***/ "./pages/user/[username]/index.tsx":
/*!*****************************************!*\
  !*** ./pages/user/[username]/index.tsx ***!
  \*****************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../context/UserContext */ \"./context/UserContext.tsx\");\n/* harmony import */ var _components_UserQuestions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UserQuestions */ \"./components/UserQuestions.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/user/[username]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar UserProfilePage = function UserProfilePage(_ref) {\n  _s();\n\n  var _userContext$user;\n\n  var username = _ref.username;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"question\"),\n      tab = _useState[0],\n      setTab = _useState[1];\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_7__[\"UserContext\"]);\n\n  var fetchUser = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/users/\").concat(username));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchUser() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(\"user\", function () {\n    return fetchUser();\n  }, {\n    cacheTime: 0\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  function handleTab(tab) {\n    var tabs = document.getElementsByClassName(\"nav-item\");\n    var activeTab = document.getElementById(tab);\n    var currentActiveTab = document.getElementsByClassName(\"active\");\n\n    if (activeTab !== currentActiveTab[0]) {\n      for (var i = 0; i < tabs.length; i++) {\n        var _tab = tabs[i];\n\n        _tab.classList.remove(\"active\");\n      }\n\n      activeTab.classList.add(\"active\");\n      setTab(tab);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-695732861\",\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-695732861\",\n      children: [\"Error: \", error.message]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-695732861\" + \" \" + \"user-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"jsx-695732861\",\n        children: data.username\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n        className: \"jsx-695732861\",\n        children: [\"Reputation: \", data.reputation]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, _this), data.uuid === (userContext === null || userContext === void 0 ? void 0 : (_userContext$user = userContext.user) === null || _userContext$user === void 0 ? void 0 : _userContext$user.uuid) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n        className: \"jsx-695732861\",\n        children: [\"Email: \", data.email]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 13\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-695732861\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-695732861\" + \" \" + \"tab-nav\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          id: \"question\",\n          onClick: function onClick() {\n            return handleTab(\"question\");\n          },\n          className: \"jsx-695732861\" + \" \" + \"nav-item active\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-695732861\",\n            children: \"Questions\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          id: \"answer\",\n          onClick: function onClick() {\n            return handleTab(\"answer\");\n          },\n          className: \"jsx-695732861\" + \" \" + \"nav-item\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-695732861\",\n            children: \"Answers\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-695732861\" + \" \" + \"user-content\",\n        children: tab === \"question\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_UserQuestions__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          uuid: data.uuid\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 15\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-695732861\",\n          children: \"Answer\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 15\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"695732861\",\n      children: \".user-container.jsx-695732861{margin:40px;border:1px solid red;}.tab-nav.jsx-695732861{margin-top:30px;width:100%;height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;background:#414141;border:1.5px solid #cdcdcd;position:relative;}.nav-item.jsx-695732861{height:100%;width:90px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.nav-item.jsx-695732861:hover{background:#7c7c7c;}.active.jsx-695732861{background:#565656;}.active.jsx-695732861:hover{background:#a0a0a0;}.user-content.jsx-695732861{border-left:1.5px solid #cdcdcd;border-right:1.5px solid #cdcdcd;border-bottom:1.5px solid #cdcdcd;position:absolute;width:100%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvdXNlci9bdXNlcm5hbWVdL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR2tCLEFBR3VCLEFBS0ksQUFXSixBQVNPLEFBSUEsQUFJQSxBQUlhLFlBcENYLEFBZ0JWLElBWEEsR0FvQmIsQUFJQSxBQUlBLElBaEJlLElBWEQsS0ErQnFCLENBcENuQyxNQU1lLDBCQStCcUIsZ0NBcEJYLEVBcUJMLGNBL0JTLElBZ0NoQixXQUNiLG9FQXRCcUIsc0JBVkEsbUJBQ1EsMkJBQ1Qsa0JBQ3BCLE9BUWlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvdXNlci9bdXNlcm5hbWVdL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCBob3N0IGZyb20gXCIuLi8uLi8uLi91dGlscy9ob3N0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgVXNlclF1ZXN0aW9ucyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Vc2VyUXVlc3Rpb25zXCI7XG5cbnR5cGUgVXNlclR5cGUgPSB7XG4gIHV1aWQ6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgdmVyaWZpZWQ6IGJvb2xlYW47XG4gIHJlcHV0YXRpb246IG51bWJlcjtcbiAgcm9sZTogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG59O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB1c2VybmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBVc2VyUHJvZmlsZVBhZ2U6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHVzZXJuYW1lIH0pID0+IHtcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlPFwicXVlc3Rpb25cIiB8IFwiYW5zd2VyXCI+KFwicXVlc3Rpb25cIik7XG5cbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcblxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7aG9zdH0vdXNlcnMvJHt1c2VybmFtZX1gKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgfTtcblxuICBjb25zdCB7IGlzTG9hZGluZywgaXNFcnJvciwgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5PFVzZXJUeXBlLCBFcnJvcj4oXG4gICAgXCJ1c2VyXCIsXG4gICAgKCkgPT4gZmV0Y2hVc2VyKCksXG4gICAgeyBjYWNoZVRpbWU6IDAgfVxuICApO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYih0YWI6IFwicXVlc3Rpb25cIiB8IFwiYW5zd2VyXCIpIHtcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdi1pdGVtXCIpO1xuICAgIGNvbnN0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYikgYXMgSFRNTFNwYW5FbGVtZW50O1xuICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlXCIpO1xuXG4gICAgaWYgKGFjdGl2ZVRhYiAhPT0gY3VycmVudEFjdGl2ZVRhYlswXSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhYiA9IHRhYnNbaV0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuXG4gICAgICBhY3RpdmVUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIHNldFRhYih0YWIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICApIDogaXNFcnJvciA/IChcbiAgICAgICAgPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgxPntkYXRhLnVzZXJuYW1lfTwvaDE+XG4gICAgICAgICAgPHA+UmVwdXRhdGlvbjoge2RhdGEucmVwdXRhdGlvbn08L3A+XG4gICAgICAgICAge2RhdGEudXVpZCA9PT0gdXNlckNvbnRleHQ/LnVzZXI/LnV1aWQgPyAoXG4gICAgICAgICAgICA8cD5FbWFpbDoge2RhdGEuZW1haWx9PC9wPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1uYXZcIj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiXG4gICAgICAgICAgICAgIGlkPVwicXVlc3Rpb25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWIoXCJxdWVzdGlvblwiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHA+UXVlc3Rpb25zPC9wPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIlxuICAgICAgICAgICAgICBpZD1cImFuc3dlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYihcImFuc3dlclwiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHA+QW5zd2VyczwvcD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY29udGVudFwiPlxuICAgICAgICAgICAge3RhYiA9PT0gXCJxdWVzdGlvblwiID8gKFxuICAgICAgICAgICAgICA8VXNlclF1ZXN0aW9ucyB1dWlkPXtkYXRhLnV1aWR9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2PkFuc3dlcjwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC51c2VyLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiA0MHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWItbmF2IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgI2NkY2RjZDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdi1pdGVtOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjN2M3YzdjO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzU2NTY1NjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3RpdmU6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNhMGEwYTA7XG4gICAgICAgIH1cblxuICAgICAgICAudXNlci1jb250ZW50IHtcbiAgICAgICAgICBib3JkZXItbGVmdDogMS41cHggc29saWQgI2NkY2RjZDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICNjZGNkY2Q7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgI2NkY2RjZDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdXNlcm5hbWU6IGNvbnRleHQucXVlcnkudXNlcm5hbWUsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlUGFnZTtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/user/[username]/index.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(UserProfilePage, \"zwXyB230Hiin++iJDwQLLDpgoUc=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = UserProfilePage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfilePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserProfilePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9bdXNlcm5hbWVdL2luZGV4LnRzeD82NGZmIl0sIm5hbWVzIjpbIlVzZXJQcm9maWxlUGFnZSIsInVzZXJuYW1lIiwidXNlU3RhdGUiLCJ0YWIiLCJzZXRUYWIiLCJ1c2VyQ29udGV4dCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsImZldGNoVXNlciIsImZldGNoIiwiaG9zdCIsInJlcyIsImpzb24iLCJ1c2VRdWVyeSIsImNhY2hlVGltZSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJlcnJvciIsImRhdGEiLCJoYW5kbGVUYWIiLCJ0YWJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYWN0aXZlVGFiIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW50QWN0aXZlVGFiIiwiaSIsImxlbmd0aCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm1lc3NhZ2UiLCJyZXB1dGF0aW9uIiwidXVpZCIsInVzZXIiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFpQkEsSUFBTUEsZUFBZ0MsR0FBRyxTQUFuQ0EsZUFBbUMsT0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ25DQyxzREFBUSxDQUF3QixVQUF4QixDQUQyQjtBQUFBLE1BQ2xEQyxHQURrRDtBQUFBLE1BQzdDQyxNQUQ2Qzs7QUFHekQsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxnRUFBRCxDQUE5Qjs7QUFFQSxNQUFNQyxTQUFTO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRUMsS0FBSyxXQUFJQyxtREFBSixvQkFBa0JULFFBQWxCLEVBRFA7O0FBQUE7QUFDVlUsaUJBRFU7QUFBQTtBQUFBLHFCQUVIQSxHQUFHLENBQUNDLElBQUosRUFG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QTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBd0JFO0FBQUEsMkNBQWUsY0FBZjtBQUFBLGtCQUNHaEIsR0FBRyxLQUFLLFVBQVIsZ0JBQ0MscUVBQUMsaUVBQUQ7QUFBZSxjQUFJLEVBQUVlLElBQUksQ0FBQ2U7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxnQkFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlGRCxDQXpIRDs7R0FBTWpDLGU7VUFVd0NhLG9EOzs7S0FWeENiLGU7O0FBbUlTQSw4RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3VzZXIvW3VzZXJuYW1lXS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuaW1wb3J0IFVzZXJRdWVzdGlvbnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvVXNlclF1ZXN0aW9uc1wiO1xuXG50eXBlIFVzZXJUeXBlID0ge1xuICB1dWlkOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHZlcmlmaWVkOiBib29sZWFuO1xuICByZXB1dGF0aW9uOiBudW1iZXI7XG4gIHJvbGU6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgVXNlclByb2ZpbGVQYWdlOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB1c2VybmFtZSB9KSA9PiB7XG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZTxcInF1ZXN0aW9uXCIgfCBcImFuc3dlclwiPihcInF1ZXN0aW9uXCIpO1xuXG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbiAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2hvc3R9L3VzZXJzLyR7dXNlcm5hbWV9YCk7XG4gICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG4gIH07XG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeTxVc2VyVHlwZSwgRXJyb3I+KFxuICAgIFwidXNlclwiLFxuICAgICgpID0+IGZldGNoVXNlcigpLFxuICAgIHsgY2FjaGVUaW1lOiAwIH1cbiAgKTtcblxuICBmdW5jdGlvbiBoYW5kbGVUYWIodGFiOiBcInF1ZXN0aW9uXCIgfCBcImFuc3dlclwiKSB7XG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXYtaXRlbVwiKTtcbiAgICBjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWIpIGFzIEhUTUxTcGFuRWxlbWVudDtcbiAgICBjb25zdCBjdXJyZW50QWN0aXZlVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZVwiKTtcblxuICAgIGlmIChhY3RpdmVUYWIgIT09IGN1cnJlbnRBY3RpdmVUYWJbMF0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YWIgPSB0YWJzW2ldIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cblxuICAgICAgYWN0aXZlVGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBzZXRUYWIodGFiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgKSA6IGlzRXJyb3IgPyAoXG4gICAgICAgIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMT57ZGF0YS51c2VybmFtZX08L2gxPlxuICAgICAgICAgIDxwPlJlcHV0YXRpb246IHtkYXRhLnJlcHV0YXRpb259PC9wPlxuICAgICAgICAgIHtkYXRhLnV1aWQgPT09IHVzZXJDb250ZXh0Py51c2VyPy51dWlkID8gKFxuICAgICAgICAgICAgPHA+RW1haWw6IHtkYXRhLmVtYWlsfTwvcD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItbmF2XCI+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbSBhY3RpdmVcIlxuICAgICAgICAgICAgICBpZD1cInF1ZXN0aW9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiKFwicXVlc3Rpb25cIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwPlF1ZXN0aW9uczwvcD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCJcbiAgICAgICAgICAgICAgaWQ9XCJhbnN3ZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWIoXCJhbnN3ZXJcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwPkFuc3dlcnM8L3A+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIHt0YWIgPT09IFwicXVlc3Rpb25cIiA/IChcbiAgICAgICAgICAgICAgPFVzZXJRdWVzdGlvbnMgdXVpZD17ZGF0YS51dWlkfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdj5BbnN3ZXI8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudXNlci1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogNDBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAudGFiLW5hdiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNjZGNkY2Q7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXYtaXRlbTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzdjN2M3YztcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM1NjU2NTY7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZlOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTBhMGEwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItY29udGVudCB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkICNjZGNkY2Q7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCAjY2RjZGNkO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICNjZGNkY2Q7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHVzZXJuYW1lOiBjb250ZXh0LnF1ZXJ5LnVzZXJuYW1lLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/[username]/index.tsx\n");

/***/ })

})