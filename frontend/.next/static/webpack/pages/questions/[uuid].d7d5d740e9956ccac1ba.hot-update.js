webpackHotUpdate_N_E("pages/questions/[uuid]",{

/***/ "./components/OPActions.tsx":
/*!**********************************!*\
  !*** ./components/OPActions.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/OPActions.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar OPActions = function OPActions(_ref) {\n  var uuid = _ref.uuid,\n      type = _ref.type,\n      setEditMode = _ref.setEditMode;\n  var style = {\n    cursor: \"pointer\",\n    marginRight: \"20px\"\n  };\n\n  var edit = function edit() {\n    setEditMode(true);\n\n    if (type === \"question\") {\n      window.scrollBy(0, -1000);\n    }\n  };\n\n  var remove = function remove() {\n    var confirm = window.confirm(\"Are you sure you want to delete your \".concat(type, \"?\"));\n\n    if (confirm) {\n      if (type === \"answer\") {\n        fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_5__[\"default\"], \"/posts/comments/\").concat(uuid), {\n          method: \"DELETE\",\n          headers: {\n            \"Content-Type\": \"application/json\"\n          }\n        });\n      }\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1507055468\" + \" \" + \"actions-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1507055468\" + \" \" + \"icons-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faEdit\"],\n          color: \"white\",\n          style: style,\n          size: \"1x\",\n          onClick: edit\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faTrashAlt\"],\n          color: \"white\",\n          style: style,\n          size: \"1x\",\n          onClick: remove\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1507055468\",\n      children: \".actions-container.jsx-1507055468{width:95%;}.icons-container.jsx-1507055468{float:right;margin-top:-10px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9PUEFjdGlvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFa0IsQUFHcUIsQUFJRSxVQUhkLEVBSW1CLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zdGFja292ZXJmbG93LWNsb25lL2Zyb250ZW5kL2NvbXBvbmVudHMvT1BBY3Rpb25zLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFFZGl0LCBmYVRyYXNoQWx0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCIuLi91dGlscy9mdW5jdGlvbnNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXVpZDogc3RyaW5nO1xuICB0eXBlOiBcInF1ZXN0aW9uXCIgfCBcImFuc3dlclwiO1xuICBzZXRFZGl0TW9kZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xufVxuXG5jb25zdCBPUEFjdGlvbnM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHV1aWQsIHR5cGUsIHNldEVkaXRNb2RlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBtYXJnaW5SaWdodDogXCIyMHB4XCIsXG4gIH07XG5cbiAgY29uc3QgZWRpdCA9ICgpID0+IHtcbiAgICBzZXRFZGl0TW9kZSh0cnVlKTtcblxuICAgIGlmICh0eXBlID09PSBcInF1ZXN0aW9uXCIpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAtMTAwMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb25maXJtID0gd2luZG93LmNvbmZpcm0oXG4gICAgICBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB5b3VyICR7dHlwZX0/YFxuICAgICk7XG5cbiAgICBpZiAoY29uZmlybSkge1xuICAgICAgaWYgKHR5cGUgPT09IFwiYW5zd2VyXCIpIHtcbiAgICAgICAgZmV0Y2goYCR7aG9zdH0vcG9zdHMvY29tbWVudHMvJHt1dWlkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgIGljb249e2ZhRWRpdH1cbiAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBzaXplPXtcIjF4XCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXtlZGl0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgaWNvbj17ZmFUcmFzaEFsdH1cbiAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBzaXplPXtcIjF4XCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYWN0aW9ucy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbnMtY29udGFpbmVyIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT1BBY3Rpb25zO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/OPActions.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = OPActions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OPActions);\n\nvar _c;\n\n$RefreshReg$(_c, \"OPActions\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PUEFjdGlvbnMudHN4P2EwMzMiXSwibmFtZXMiOlsiT1BBY3Rpb25zIiwidXVpZCIsInR5cGUiLCJzZXRFZGl0TW9kZSIsInN0eWxlIiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiLCJlZGl0Iiwid2luZG93Iiwic2Nyb2xsQnkiLCJyZW1vdmUiLCJjb25maXJtIiwiZmV0Y2giLCJob3N0IiwibWV0aG9kIiwiaGVhZGVycyIsImZhRWRpdCIsImZhVHJhc2hBbHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFTQSxJQUFNQSxTQUEwQixHQUFHLFNBQTdCQSxTQUE2QixPQUFpQztBQUFBLE1BQTlCQyxJQUE4QixRQUE5QkEsSUFBOEI7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUNsRSxNQUFNQyxLQUFLLEdBQUc7QUFDWkMsVUFBTSxFQUFFLFNBREk7QUFFWkMsZUFBVyxFQUFFO0FBRkQsR0FBZDs7QUFLQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCSixlQUFXLENBQUMsSUFBRCxDQUFYOztBQUVBLFFBQUlELElBQUksS0FBSyxVQUFiLEVBQXlCO0FBQ3ZCTSxZQUFNLENBQUNDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBQyxJQUFwQjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFFBQU1DLE9BQU8sR0FBR0gsTUFBTSxDQUFDRyxPQUFQLGdEQUMwQlQsSUFEMUIsT0FBaEI7O0FBSUEsUUFBSVMsT0FBSixFQUFhO0FBQ1gsVUFBSVQsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDckJVLGFBQUssV0FBSUMsbURBQUosNkJBQTJCWixJQUEzQixHQUFtQztBQUN0Q2EsZ0JBQU0sRUFBRSxRQUQ4QjtBQUV0Q0MsaUJBQU8sRUFBRTtBQUNQLDRCQUFnQjtBQURUO0FBRjZCLFNBQW5DLENBQUw7QUFNRDtBQUNGO0FBQ0YsR0FmRDs7QUFpQkEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSxtQkFBZjtBQUFBLDZCQUNFO0FBQUEsNENBQWUsaUJBQWY7QUFBQSxnQ0FDRSxxRUFBQyw4RUFBRDtBQUNFLGNBQUksRUFBRUMsd0VBRFI7QUFFRSxlQUFLLEVBQUUsT0FGVDtBQUdFLGVBQUssRUFBRVosS0FIVDtBQUlFLGNBQUksRUFBRSxJQUpSO0FBS0UsaUJBQU8sRUFBRUc7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBUUUscUVBQUMsOEVBQUQ7QUFDRSxjQUFJLEVBQUVVLDRFQURSO0FBRUUsZUFBSyxFQUFFLE9BRlQ7QUFHRSxlQUFLLEVBQUViLEtBSFQ7QUFJRSxjQUFJLEVBQUUsSUFKUjtBQUtFLGlCQUFPLEVBQUVNO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQ0QsQ0FoRUQ7O0tBQU1WLFM7QUFrRVNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9PUEFjdGlvbnMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUVkaXQsIGZhVHJhc2hBbHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB1dWlkOiBzdHJpbmc7XG4gIHR5cGU6IFwicXVlc3Rpb25cIiB8IFwiYW5zd2VyXCI7XG4gIHNldEVkaXRNb2RlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XG59XG5cbmNvbnN0IE9QQWN0aW9uczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdXVpZCwgdHlwZSwgc2V0RWRpdE1vZGUgfSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIixcbiAgfTtcblxuICBjb25zdCBlZGl0ID0gKCkgPT4ge1xuICAgIHNldEVkaXRNb2RlKHRydWUpO1xuXG4gICAgaWYgKHR5cGUgPT09IFwicXVlc3Rpb25cIikge1xuICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIC0xMDAwKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpcm0gPSB3aW5kb3cuY29uZmlybShcbiAgICAgIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHlvdXIgJHt0eXBlfT9gXG4gICAgKTtcblxuICAgIGlmIChjb25maXJtKSB7XG4gICAgICBpZiAodHlwZSA9PT0gXCJhbnN3ZXJcIikge1xuICAgICAgICBmZXRjaChgJHtob3N0fS9wb3N0cy9jb21tZW50cy8ke3V1aWR9YCwge1xuICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgaWNvbj17ZmFFZGl0fVxuICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHNpemU9e1wiMXhcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2VkaXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBpY29uPXtmYVRyYXNoQWx0fVxuICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHNpemU9e1wiMXhcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hY3Rpb25zLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29ucy1jb250YWluZXIge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPUEFjdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/OPActions.tsx\n");

/***/ })

})