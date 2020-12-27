webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\n/* harmony import */ var _host__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../host */ \"./host.ts\");\n/* harmony import */ var _cssVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cssVariables */ \"./cssVariables.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Navbar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Navbar = function Navbar() {\n  _s();\n\n  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_7__[\"UserContext\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n\n  var logOut = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return fetch(\"\".concat(_host__WEBPACK_IMPORTED_MODULE_8__[\"default\"], \"/auth/logout\"), {\n                method: \"POST\",\n                credentials: \"include\"\n              });\n\n            case 3:\n              userContext.setState(null);\n              _context.next = 6;\n              return router.reload();\n\n            case 6:\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function logOut() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"nav\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1045140100\", [_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"secondaryBackground\"], _cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"buttonBorder\"]]]]),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1045140100\", [_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"secondaryBackground\"], _cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"buttonBorder\"]]]]) + \" \" + \"nav-top-line\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1045140100\", [_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"secondaryBackground\"], _cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"buttonBorder\"]]]]) + \" \" + \"nav-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1045140100\", [_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"secondaryBackground\"], _cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"buttonBorder\"]]]]) + \" \" + \"nav-left\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            href: \"/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1045140100\", [_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"secondaryBackground\"], _cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"buttonBorder\"]]]]) + \" \" + \"nav-site-name\",\n              children: \"AskProgramming\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this), userContext.user === undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1045140100\", [_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"secondaryBackground\"], _cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"buttonBorder\"]]]]) + \" \" + \"nav-right\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            href: \"/auth/login\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1045140100\", [_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"secondaryBackground\"], _cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"buttonBorder\"]]]]) + \" \" + \"nav-auth-btn nav-log-in-btn\",\n              children: \"Log In\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            href: \"/auth/signup\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1045140100\", [_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"secondaryBackground\"], _cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"buttonBorder\"]]]]) + \" \" + \"nav-auth-btn nav-sign-up-btn\",\n              children: \"Sign Up\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1045140100\", [_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"secondaryBackground\"], _cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"buttonBorder\"]]]]) + \" \" + \"nav-right\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1045140100\", [_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"secondaryBackground\"], _cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"buttonBorder\"]]]]),\n            children: userContext.user.username\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            onClick: logOut,\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1045140100\", [_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"secondaryBackground\"], _cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"buttonBorder\"]]]]) + \" \" + \"nav-auth-btn nav-sign-up-btn\",\n            children: \"Log Out\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1045140100\",\n      dynamic: [_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"secondaryBackground\"], _cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"buttonBorder\"]],\n      children: \".nav-top-line.__jsx-style-dynamic-selector{width:100%;height:4px;background:#c46215;}.nav-container.__jsx-style-dynamic-selector{background:\".concat(_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"secondaryBackground\"], \";width:100%;height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;box-shadow:0 3px 5px #151515;}.nav-site-name.__jsx-style-dynamic-selector{color:#f2f2f2;margin-left:50px;font-size:1.3rem;cursor:pointer;padding:10px 20px;height:100%;}.nav-site-name.__jsx-style-dynamic-selector:hover{background:#4a4a4a;}.nav-left.__jsx-style-dynamic-selector{width:50%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav-right.__jsx-style-dynamic-selector{width:50%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.nav-auth-btn.__jsx-style-dynamic-selector{width:80px;height:60%;border-radius:4px;border:1.5px solid \").concat(_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"buttonBorder\"], \";margin:0 10px;cursor:pointer;}.nav-sign-up-btn.__jsx-style-dynamic-selector{margin-right:17%;background:#3580c2;color:#d2d2d2;}.nav-sign-up-btn.__jsx-style-dynamic-selector:hover{background:#076bb8;color:#e2e2e2;}.nav-log-in-btn.__jsx-style-dynamic-selector{color:#bdedff;background:#3f4a50;}.nav-log-in-btn.__jsx-style-dynamic-selector:hover{background:#4d606f;border:1.5px solid #4d606d;color:#e2e2e2;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9OYXZiYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEa0IsQUFHc0IsQUFNNkIsQUFVMUIsQUFTSyxBQUlULEFBT0EsQUFRQyxBQVNNLEFBTUUsQUFLTCxBQUtLLFVBdkNQLEFBT0EsQ0FwQ0QsQUE0Q0EsR0E1Qk0sQUFnREUsR0FYQSxFQTVCckIsQUFrQ2dCLEFBVWEsR0FwRVIsQUE2Qk4sQUFPQSxBQVFLLFNBNUJELEVBMkNuQixBQUtBLEdBWGdCLElBaERILEFBd0NxQyxDQTVDbEQsS0FvRWdCLEVBcERDLEVBcUNqQixDQWhEYyxTQWdFZCxHQS9EZSxBQVdLLGtCQUNOLE9BMkJFLEtBMUJoQixHQVVxQixBQU9BLE1BVUosZUFDakIsb0JBeENxQixvREF1QnJCLEFBTzJCLHlDQTdCSyx3REE4QmhDLDJEQTdCK0IsNkJBQy9CIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9OYXZiYXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vaG9zdFwiO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuLi9jc3NWYXJpYWJsZXNcIjtcblxuY29uc3QgTmF2YmFyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgbG9nT3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBmZXRjaChgJHtob3N0fS9hdXRoL2xvZ291dGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgfSk7XG4gICAgICB1c2VyQ29udGV4dC5zZXRTdGF0ZShudWxsKTtcbiAgICAgIGF3YWl0IHJvdXRlci5yZWxvYWQoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPG5hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtdG9wLWxpbmVcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1sZWZ0XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJuYXYtc2l0ZS1uYW1lXCI+QXNrUHJvZ3JhbW1pbmc8L2gxPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt1c2VyQ29udGV4dC51c2VyID09PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1yaWdodFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9hdXRoL2xvZ2luXCJ9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2LWF1dGgtYnRuIG5hdi1sb2ctaW4tYnRuXCI+TG9nIEluPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvYXV0aC9zaWdudXBcIn0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXYtYXV0aC1idG4gbmF2LXNpZ24tdXAtYnRuXCI+XG4gICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1yaWdodFwiPlxuICAgICAgICAgICAgICA8cD57dXNlckNvbnRleHQudXNlci51c2VybmFtZX08L3A+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2LWF1dGgtYnRuIG5hdi1zaWduLXVwLWJ0blwiIG9uQ2xpY2s9e2xvZ091dH0+XG4gICAgICAgICAgICAgICAgTG9nIE91dFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm5hdi10b3AtbGluZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2M0NjIxNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5zZWNvbmRhcnlCYWNrZ3JvdW5kfTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA1cHggIzE1MTUxNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXYtc2l0ZS1uYW1lIHtcbiAgICAgICAgICBjb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXYtc2l0ZS1uYW1lOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGE0YTRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdi1sZWZ0IHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2LXJpZ2h0IHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXYtYXV0aC1idG4ge1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICR7Y3NzLmJ1dHRvbkJvcmRlcn07XG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdi1zaWduLXVwLWJ0biB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNyU7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzM1ODBjMjtcbiAgICAgICAgICBjb2xvcjogI2QyZDJkMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXYtc2lnbi11cC1idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwNzZiYjg7XG4gICAgICAgICAgY29sb3I6ICNlMmUyZTI7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2LWxvZy1pbi1idG4ge1xuICAgICAgICAgIGNvbG9yOiAjYmRlZGZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzZjRhNTA7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2LWxvZy1pbi1idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDYwNmY7XG4gICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNGQ2MDZkO1xuICAgICAgICAgIGNvbG9yOiAjZTJlMmUyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Navbar.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navbar, \"0HxAmO15WUjnMkI3CaaZGP52Doo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4P2U3ZmMiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dPdXQiLCJmZXRjaCIsImhvc3QiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsInNldFN0YXRlIiwicmVsb2FkIiwiY29uc29sZSIsImxvZyIsImNzcyIsInVzZXIiLCJ1bmRlZmluZWQiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsR0FBTTtBQUFBOztBQUM3QixNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUNDLGdFQUFELENBQTlCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxNQUFNO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFTEMsS0FBSyxXQUFJQyw2Q0FBSixtQkFBd0I7QUFDakNDLHNCQUFNLEVBQUUsTUFEeUI7QUFFakNDLDJCQUFXLEVBQUU7QUFGb0IsZUFBeEIsQ0FGQTs7QUFBQTtBQU1YVCx5QkFBVyxDQUFDVSxRQUFaLENBQXFCLElBQXJCO0FBTlc7QUFBQSxxQkFPTFAsTUFBTSxDQUFDUSxNQUFQLEVBUEs7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNYQyxxQkFBTyxDQUFDQyxHQUFSOztBQVRXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5SLE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFhQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBLGtHQXNDa0JTLGlFQXRDbEIsRUErRTBCQSwwREEvRTFCO0FBQUEsOEJBQ0U7QUFBQSxvR0FxQ2dCQSxpRUFyQ2hCLEVBOEV3QkEsMERBOUV4QixhQUFlO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSxvR0FvQ2dCQSxpRUFwQ2hCLEVBNkV3QkEsMERBN0V4QixhQUFlLGVBQWY7QUFBQSxnQ0FDRTtBQUFBLHNHQW1DY0EsaUVBbkNkLEVBNEVzQkEsMERBNUV0QixhQUFlLFVBQWY7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUUsR0FBWjtBQUFBLG1DQUNFO0FBQUEsMEdBaUNVQSxpRUFqQ1YsRUEwRWtCQSwwREExRWxCLGFBQWMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBTUdkLFdBQVcsQ0FBQ2UsSUFBWixLQUFxQkMsU0FBckIsZ0JBQ0M7QUFBQSxzR0E2QllGLGlFQTdCWixFQXNFb0JBLDBEQXRFcEIsYUFBZSxXQUFmO0FBQUEsa0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFFLGFBQVo7QUFBQSxtQ0FDRTtBQUFBLDBHQTJCUUEsaUVBM0JSLEVBb0VnQkEsMERBcEVoQixhQUFrQiw2QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFFLGNBQVo7QUFBQSxtQ0FDRTtBQUFBLDBHQXdCUUEsaUVBeEJSLEVBaUVnQkEsMERBakVoQixhQUFrQiw4QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxnQkFZQztBQUFBLHNHQWtCWUEsaUVBbEJaLEVBMkRvQkEsMERBM0RwQixhQUFlLFdBQWY7QUFBQSxrQ0FDRTtBQUFBLHdHQWlCVUEsaUVBakJWLEVBMERrQkEsMERBMURsQjtBQUFBLHNCQUFJZCxXQUFXLENBQUNlLElBQVosQ0FBaUJFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFpRCxtQkFBTyxFQUFFWixNQUExRDtBQUFBLHdHQWdCVVMsaUVBaEJWLEVBeURrQkEsMERBekRsQixhQUFrQiw4QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUEsZ0JBdUNvQkEsaUVBdkNwQixFQWdGNEJBLDBEQWhGNUI7QUFBQSxzS0F1Q29CQSxpRUF2Q3BCLCtyQ0FnRjRCQSwwREFoRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4R0QsQ0EvSEQ7O0dBQU1mLE07VUFFV0sscUQ7OztLQUZYTCxNO0FBaUlTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2YmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL2hvc3RcIjtcbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vY3NzVmFyaWFibGVzXCI7XG5cbmNvbnN0IE5hdmJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGxvZ091dCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZmV0Y2goYCR7aG9zdH0vYXV0aC9sb2dvdXRgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICAgIH0pO1xuICAgICAgdXNlckNvbnRleHQuc2V0U3RhdGUobnVsbCk7XG4gICAgICBhd2FpdCByb3V0ZXIucmVsb2FkKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXRvcC1saW5lXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbGVmdFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibmF2LXNpdGUtbmFtZVwiPkFza1Byb2dyYW1taW5nPC9oMT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dXNlckNvbnRleHQudXNlciA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvYXV0aC9sb2dpblwifT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdi1hdXRoLWJ0biBuYXYtbG9nLWluLWJ0blwiPkxvZyBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2F1dGgvc2lnbnVwXCJ9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2LWF1dGgtYnRuIG5hdi1zaWduLXVwLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPHA+e3VzZXJDb250ZXh0LnVzZXIudXNlcm5hbWV9PC9wPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdi1hdXRoLWJ0biBuYXYtc2lnbi11cC1idG5cIiBvbkNsaWNrPXtsb2dPdXR9PlxuICAgICAgICAgICAgICAgIExvZyBPdXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5uYXYtdG9wLWxpbmUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNjNDYyMTU7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3Muc2Vjb25kYXJ5QmFja2dyb3VuZH07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNXB4ICMxNTE1MTU7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2LXNpdGUtbmFtZSB7XG4gICAgICAgICAgY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2LXNpdGUtbmFtZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzRhNGE0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXYtbGVmdCB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdi1yaWdodCB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2LWF1dGgtYnRuIHtcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAke2Nzcy5idXR0b25Cb3JkZXJ9O1xuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXYtc2lnbi11cC1idG4ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTclO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzNTgwYzI7XG4gICAgICAgICAgY29sb3I6ICNkMmQyZDI7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2LXNpZ24tdXAtYnRuOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDc2YmI4O1xuICAgICAgICAgIGNvbG9yOiAjZTJlMmUyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdi1sb2ctaW4tYnRuIHtcbiAgICAgICAgICBjb2xvcjogI2JkZWRmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2Y0YTUwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdi1sb2ctaW4tYnRuOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ2MDZmO1xuICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzRkNjA2ZDtcbiAgICAgICAgICBjb2xvcjogI2UyZTJlMjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.tsx\n");

/***/ })

})