webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/functions.ts":
/*!****************************!*\
  !*** ./utils/functions.ts ***!
  \****************************/
/*! exports provided: getCookie, getTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCookie\", function() { return getCookie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTime\", function() { return getTime; });\nfunction getCookie(cname) {\n  if (true) {\n    var name = cname + \"=\";\n    var decodedCookie = decodeURIComponent(document.cookie);\n    var ca = decodedCookie.split(\";\");\n\n    for (var i = 0; i < ca.length; i++) {\n      var c = ca[i];\n\n      while (c.charAt(0) == \" \") {\n        c = c.substring(1);\n      }\n\n      if (c.indexOf(name) == 0) {\n        return c.substring(name.length, c.length);\n      }\n    }\n\n    return \"\";\n  }\n}\nfunction getTime(time) {\n  var now = Date.now();\n  var comparedTime = Date.parse(time);\n  var difference = Math.abs(comparedTime - now);\n  return \"\";\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZnVuY3Rpb25zLnRzP2Y2YjYiXSwibmFtZXMiOlsiZ2V0Q29va2llIiwiY25hbWUiLCJuYW1lIiwiZGVjb2RlZENvb2tpZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImRvY3VtZW50IiwiY29va2llIiwiY2EiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImdldFRpbWUiLCJ0aW1lIiwibm93IiwiRGF0ZSIsImNvbXBhcmVkVGltZSIsInBhcnNlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJhYnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFPLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBDO0FBQy9DLFlBQXFCO0FBQ25CLFFBQUlDLElBQUksR0FBR0QsS0FBSyxHQUFHLEdBQW5CO0FBQ0EsUUFBSUUsYUFBYSxHQUFHQyxrQkFBa0IsQ0FBQ0MsUUFBUSxDQUFDQyxNQUFWLENBQXRDO0FBQ0EsUUFBSUMsRUFBRSxHQUFHSixhQUFhLENBQUNLLEtBQWQsQ0FBb0IsR0FBcEIsQ0FBVDs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLEVBQUUsQ0FBQ0csTUFBdkIsRUFBK0JELENBQUMsRUFBaEMsRUFBb0M7QUFDbEMsVUFBSUUsQ0FBQyxHQUFHSixFQUFFLENBQUNFLENBQUQsQ0FBVjs7QUFDQSxhQUFPRSxDQUFDLENBQUNDLE1BQUYsQ0FBUyxDQUFULEtBQWUsR0FBdEIsRUFBMkI7QUFDekJELFNBQUMsR0FBR0EsQ0FBQyxDQUFDRSxTQUFGLENBQVksQ0FBWixDQUFKO0FBQ0Q7O0FBQ0QsVUFBSUYsQ0FBQyxDQUFDRyxPQUFGLENBQVVaLElBQVYsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsZUFBT1MsQ0FBQyxDQUFDRSxTQUFGLENBQVlYLElBQUksQ0FBQ1EsTUFBakIsRUFBeUJDLENBQUMsQ0FBQ0QsTUFBM0IsQ0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBTyxFQUFQO0FBQ0Q7QUFDRjtBQUVNLFNBQVNLLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVDO0FBQzVDLE1BQU1DLEdBQUcsR0FBR0MsSUFBSSxDQUFDRCxHQUFMLEVBQVo7QUFDQSxNQUFNRSxZQUFZLEdBQUdELElBQUksQ0FBQ0UsS0FBTCxDQUFXSixJQUFYLENBQXJCO0FBQ0EsTUFBTUssVUFBVSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0osWUFBWSxHQUFHRixHQUF4QixDQUFuQjtBQUVBLFNBQU8sRUFBUDtBQUNEIiwiZmlsZSI6Ii4vdXRpbHMvZnVuY3Rpb25zLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShjbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIGxldCBuYW1lID0gY25hbWUgKyBcIj1cIjtcbiAgICBsZXQgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xuICAgIGxldCBjYSA9IGRlY29kZWRDb29raWUuc3BsaXQoXCI7XCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjID0gY2FbaV07XG4gICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gXCIgXCIpIHtcbiAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xuICAgICAgfVxuICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XG4gICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZSh0aW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICBjb25zdCBjb21wYXJlZFRpbWUgPSBEYXRlLnBhcnNlKHRpbWUpO1xuICBjb25zdCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoY29tcGFyZWRUaW1lIC0gbm93KTtcblxuICByZXR1cm4gXCJcIjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/functions.ts\n");

/***/ })

})