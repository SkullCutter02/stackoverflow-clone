webpackHotUpdate_N_E("pages/[community]",{

/***/ "./utils/functions.ts":
/*!****************************!*\
  !*** ./utils/functions.ts ***!
  \****************************/
/*! exports provided: getCookie, getTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCookie\", function() { return getCookie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTime\", function() { return getTime; });\nfunction getCookie(cname) {\n  if (true) {\n    var name = cname + \"=\";\n    var decodedCookie = decodeURIComponent(document.cookie);\n    var ca = decodedCookie.split(\";\");\n\n    for (var i = 0; i < ca.length; i++) {\n      var c = ca[i];\n\n      while (c.charAt(0) == \" \") {\n        c = c.substring(1);\n      }\n\n      if (c.indexOf(name) == 0) {\n        return c.substring(name.length, c.length);\n      }\n    }\n\n    return \"\";\n  }\n}\nfunction getTime(time) {\n  var now = Date.now();\n  var comparedTime = Date.parse(time);\n  var difference = Math.abs(comparedTime - now);\n  return difference.toString();\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZnVuY3Rpb25zLnRzP2Y2YjYiXSwibmFtZXMiOlsiZ2V0Q29va2llIiwiY25hbWUiLCJuYW1lIiwiZGVjb2RlZENvb2tpZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImRvY3VtZW50IiwiY29va2llIiwiY2EiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImdldFRpbWUiLCJ0aW1lIiwibm93IiwiRGF0ZSIsImNvbXBhcmVkVGltZSIsInBhcnNlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJhYnMiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEM7QUFDL0MsWUFBcUI7QUFDbkIsUUFBSUMsSUFBSSxHQUFHRCxLQUFLLEdBQUcsR0FBbkI7QUFDQSxRQUFJRSxhQUFhLEdBQUdDLGtCQUFrQixDQUFDQyxRQUFRLENBQUNDLE1BQVYsQ0FBdEM7QUFDQSxRQUFJQyxFQUFFLEdBQUdKLGFBQWEsQ0FBQ0ssS0FBZCxDQUFvQixHQUFwQixDQUFUOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsRUFBRSxDQUFDRyxNQUF2QixFQUErQkQsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQyxVQUFJRSxDQUFDLEdBQUdKLEVBQUUsQ0FBQ0UsQ0FBRCxDQUFWOztBQUNBLGFBQU9FLENBQUMsQ0FBQ0MsTUFBRixDQUFTLENBQVQsS0FBZSxHQUF0QixFQUEyQjtBQUN6QkQsU0FBQyxHQUFHQSxDQUFDLENBQUNFLFNBQUYsQ0FBWSxDQUFaLENBQUo7QUFDRDs7QUFDRCxVQUFJRixDQUFDLENBQUNHLE9BQUYsQ0FBVVosSUFBVixLQUFtQixDQUF2QixFQUEwQjtBQUN4QixlQUFPUyxDQUFDLENBQUNFLFNBQUYsQ0FBWVgsSUFBSSxDQUFDUSxNQUFqQixFQUF5QkMsQ0FBQyxDQUFDRCxNQUEzQixDQUFQO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPLEVBQVA7QUFDRDtBQUNGO0FBRU0sU0FBU0ssT0FBVCxDQUFpQkMsSUFBakIsRUFBdUM7QUFDNUMsTUFBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNELEdBQUwsRUFBWjtBQUNBLE1BQU1FLFlBQVksR0FBR0QsSUFBSSxDQUFDRSxLQUFMLENBQVdKLElBQVgsQ0FBckI7QUFDQSxNQUFNSyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTSixZQUFZLEdBQUdGLEdBQXhCLENBQW5CO0FBRUEsU0FBT0ksVUFBVSxDQUFDRyxRQUFYLEVBQVA7QUFDRCIsImZpbGUiOiIuL3V0aWxzL2Z1bmN0aW9ucy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWUoY25hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICBsZXQgbmFtZSA9IGNuYW1lICsgXCI9XCI7XG4gICAgbGV0IGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcbiAgICBsZXQgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KFwiO1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgYyA9IGNhW2ldO1xuICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09IFwiIFwiKSB7XG4gICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICAgIH1cbiAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkge1xuICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWUodGltZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgY29tcGFyZWRUaW1lID0gRGF0ZS5wYXJzZSh0aW1lKTtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGNvbXBhcmVkVGltZSAtIG5vdyk7XG5cbiAgcmV0dXJuIGRpZmZlcmVuY2UudG9TdHJpbmcoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/functions.ts\n");

/***/ })

})