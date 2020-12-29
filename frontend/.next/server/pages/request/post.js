module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/request/post.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/request/post.tsx":
/*!********************************!*\
  !*** ./pages/request/post.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"remark-gfm\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/cssVariables */ \"./utils/cssVariables.ts\");\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/request/post.tsx\";\n\n\n\n\n\n\nconst RequestPostPage = () => {\n  const {\n    0: body,\n    1: setBody\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"**Hello World!**\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2439480425\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"]]]]) + \" \" + \"post-form-heading\",\n      children: \"Ask a Question\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2439480425\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"]]]]) + \" \" + \"post-form-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        id: \"title\",\n        placeholder: \"Title\",\n        required: true,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2439480425\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"]]]]) + \" \" + \"post-form-input\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n        id: \"body\",\n        cols: 30,\n        rows: 10,\n        placeholder: \"Body\",\n        required: true,\n        value: body,\n        onChange: e => setBody(e.target.value),\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2439480425\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"]]]]) + \" \" + \"post-form-body\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        className: \"preview\",\n        plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_4___default.a],\n        source: body\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2439480425\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"]]]]) + \" \" + \"tags\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2439480425\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"], _utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"]],\n      children: `.post-form-heading.__jsx-style-dynamic-selector{text-align:center;margin:30px 0;}.post-form-container.__jsx-style-dynamic-selector{width:65%;min-height:500px;border-radius:20px;margin:0 auto 50px;background:#3b3b3b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}input.__jsx-style-dynamic-selector,textarea.__jsx-style-dynamic-selector{display:block;}.post-form-input.__jsx-style-dynamic-selector{display:block;width:80%;height:40px;margin:30px 0;text-indent:15px;background:${_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"]};color:#ffffff;border:2px solid ${_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"]};font-size:0.8rem;}.post-form-body.__jsx-style-dynamic-selector{width:80%;resize:none;height:400px;margin-bottom:40px;background:${_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBackground\"]};color:#ffffff;border:2px solid ${_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__[\"inputBorder\"]};padding:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvcmVxdWVzdC9wb3N0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q2tCLEFBRzZCLEFBS1IsQUFZSSxBQUlBLEFBWUosVUEzQk8sQUE0QkwsSUFoQmQsQUFJWSxJQXJCSSxJQWtDRCxFQVpELEdBaEJPLEtBTHJCLEdBa0NxQixDQVpMLFVBaEJLLElBaUJGLElBWXVCLFdBNUJyQixFQWlCcUIsaUJBaEIzQixVQTRCQyxhQVhBLENBWWdDLGFBWEEsaUNBWWpDLElBN0JTLFNBa0JMLEFBWW5CLGlCQVhBLG9EQWxCcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvcGFnZXMvcmVxdWVzdC9wb3N0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuXG5jb25zdCBSZXF1ZXN0UG9zdFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiKipIZWxsbyBXb3JsZCEqKlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJwb3N0LWZvcm0taGVhZGluZ1wiPkFzayBhIFF1ZXN0aW9uPC9oMT5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInBvc3QtZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3QtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9XCJib2R5XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0LWZvcm0tYm9keVwiXG4gICAgICAgICAgY29scz17MzB9XG4gICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJCb2R5XCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhbHVlPXtib2R5fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZTogQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+XG4gICAgICAgICAgICBzZXRCb2R5KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3XCJcbiAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgICBzb3VyY2U9e2JvZHl9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPjwvZGl2PlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wb3N0LWZvcm0taGVhZGluZyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtZm9ybS1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzYjNiM2I7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCxcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtZm9ybS1pbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaW5wdXRCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2Nzcy5pbnB1dEJvcmRlcn07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC1mb3JtLWJvZHkge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RQb3N0UGFnZTtcbiJdfQ== */\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/request/post.tsx */`\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestPostPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXF1ZXN0L3Bvc3QudHN4PzhkYjYiXSwibmFtZXMiOlsiUmVxdWVzdFBvc3RQYWdlIiwiYm9keSIsInNldEJvZHkiLCJ1c2VTdGF0ZSIsImNzcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbWFya0dmbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsZUFBeUIsR0FBRyxNQUFNO0FBQ3RDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBUyxrQkFBVCxDQUFoQztBQUVBLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFO0FBQUEsa0dBeURrQkMsbUVBekRsQixFQTJEd0JBLCtEQTNEeEIsRUFvRWtCQSxtRUFwRWxCLEVBc0V3QkEsK0RBdEV4QixhQUFjLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxrR0F3RGtCQSxtRUF4RGxCLEVBMER3QkEsK0RBMUR4QixFQW1Fa0JBLG1FQW5FbEIsRUFxRXdCQSwrREFyRXhCLGFBQWdCLHFCQUFoQjtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFHRSxVQUFFLEVBQUMsT0FITDtBQUlFLG1CQUFXLEVBQUMsT0FKZDtBQUtFLGdCQUFRLE1BTFY7QUFBQSxvR0F1RGdCQSxtRUF2RGhCLEVBeURzQkEsK0RBekR0QixFQWtFZ0JBLG1FQWxFaEIsRUFvRXNCQSwrREFwRXRCLGFBRVk7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBUUU7QUFDRSxVQUFFLEVBQUMsTUFETDtBQUdFLFlBQUksRUFBRSxFQUhSO0FBSUUsWUFBSSxFQUFFLEVBSlI7QUFLRSxtQkFBVyxFQUFDLE1BTGQ7QUFNRSxnQkFBUSxNQU5WO0FBT0UsYUFBSyxFQUFFSCxJQVBUO0FBUUUsZ0JBQVEsRUFBR0ksQ0FBRCxJQUNSSCxPQUFPLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBVFg7QUFBQSxvR0FnRGdCSCxtRUFoRGhCLEVBa0RzQkEsK0RBbER0QixFQTJEZ0JBLG1FQTNEaEIsRUE2RHNCQSwrREE3RHRCLGFBRVk7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBb0JFLHFFQUFDLHFEQUFEO0FBQ0UsaUJBQVMsRUFBQyxTQURaO0FBRUUsZUFBTyxFQUFFLENBQUNJLGlEQUFELENBRlg7QUFHRSxjQUFNLEVBQUVQO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQkYsZUF5QkU7QUFBQSxvR0ErQmdCRyxtRUEvQmhCLEVBaUNzQkEsK0RBakN0QixFQTBDZ0JBLG1FQTFDaEIsRUE0Q3NCQSwrREE1Q3RCLGFBQWU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBLGdCQTBEb0JBLG1FQTFEcEIsRUE0RDBCQSwrREE1RDFCLEVBcUVvQkEsbUVBckVwQixFQXVFMEJBLCtEQXZFMUI7QUFBQSxvckJBMERvQkEsbUVBMURwQixtQ0E0RDBCQSwrREE1RDFCLG9JQXFFb0JBLG1FQXJFcEIsbUNBdUUwQkEsK0RBdkUxQjtBQUNKO0FBQ0E7QUFGSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQThFRCxDQWpGRDs7QUFtRmVKLDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcmVxdWVzdC9wb3N0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuXG5jb25zdCBSZXF1ZXN0UG9zdFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiKipIZWxsbyBXb3JsZCEqKlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJwb3N0LWZvcm0taGVhZGluZ1wiPkFzayBhIFF1ZXN0aW9uPC9oMT5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInBvc3QtZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3QtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9XCJib2R5XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0LWZvcm0tYm9keVwiXG4gICAgICAgICAgY29scz17MzB9XG4gICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJCb2R5XCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhbHVlPXtib2R5fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZTogQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+XG4gICAgICAgICAgICBzZXRCb2R5KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3XCJcbiAgICAgICAgICBwbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgICBzb3VyY2U9e2JvZHl9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPjwvZGl2PlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wb3N0LWZvcm0taGVhZGluZyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtZm9ybS1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzYjNiM2I7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCxcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtZm9ybS1pbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaW5wdXRCYWNrZ3JvdW5kfTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2Nzcy5pbnB1dEJvcmRlcn07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC1mb3JtLWJvZHkge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5pbnB1dEJhY2tncm91bmR9O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLmlucHV0Qm9yZGVyfTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RQb3N0UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/request/post.tsx\n");

/***/ }),

/***/ "./utils/cssVariables.ts":
/*!*******************************!*\
  !*** ./utils/cssVariables.ts ***!
  \*******************************/
/*! exports provided: mainBackground, secondaryBackground, buttonBorder, mainButton, mainButtonHover, mainButtonText, mainButtonTextHover, secondaryButton, secondaryButtonHover, secondaryButtonText, secondaryButtonTextHover, inputBackground, inputBorder, tagBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainBackground\", function() { return mainBackground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secondaryBackground\", function() { return secondaryBackground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonBorder\", function() { return buttonBorder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainButton\", function() { return mainButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainButtonHover\", function() { return mainButtonHover; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainButtonText\", function() { return mainButtonText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainButtonTextHover\", function() { return mainButtonTextHover; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secondaryButton\", function() { return secondaryButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secondaryButtonHover\", function() { return secondaryButtonHover; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secondaryButtonText\", function() { return secondaryButtonText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secondaryButtonTextHover\", function() { return secondaryButtonTextHover; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputBackground\", function() { return inputBackground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputBorder\", function() { return inputBorder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tagBackground\", function() { return tagBackground; });\nconst mainBackground = \"#2b2e2f\";\nconst secondaryBackground = \"#393939\";\nconst buttonBorder = \"#4f6f87\";\nconst mainButton = \"#3580c2\";\nconst mainButtonHover = \"#076bb8\";\nconst mainButtonText = \"#d2d2d2\";\nconst mainButtonTextHover = \"#e2e2e2\";\nconst secondaryButton = \"#3f4a50\";\nconst secondaryButtonHover = \"#4d606f\";\nconst secondaryButtonText = \"#bdedff\";\nconst secondaryButtonTextHover = \"#e2e2e2\";\nconst inputBackground = \"#454545\";\nconst inputBorder = \"#dedede\";\nconst tagBackground = \"#4a4a4a\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jc3NWYXJpYWJsZXMudHM/ZTkzYSJdLCJuYW1lcyI6WyJtYWluQmFja2dyb3VuZCIsInNlY29uZGFyeUJhY2tncm91bmQiLCJidXR0b25Cb3JkZXIiLCJtYWluQnV0dG9uIiwibWFpbkJ1dHRvbkhvdmVyIiwibWFpbkJ1dHRvblRleHQiLCJtYWluQnV0dG9uVGV4dEhvdmVyIiwic2Vjb25kYXJ5QnV0dG9uIiwic2Vjb25kYXJ5QnV0dG9uSG92ZXIiLCJzZWNvbmRhcnlCdXR0b25UZXh0Iiwic2Vjb25kYXJ5QnV0dG9uVGV4dEhvdmVyIiwiaW5wdXRCYWNrZ3JvdW5kIiwiaW5wdXRCb3JkZXIiLCJ0YWdCYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxjQUFjLEdBQUcsU0FBdkI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUE1QjtBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFyQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFuQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxTQUF4QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxTQUF2QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLFNBQTVCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLFNBQXhCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsU0FBN0I7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUE1QjtBQUNBLE1BQU1DLHdCQUF3QixHQUFHLFNBQWpDO0FBRUEsTUFBTUMsZUFBZSxHQUFHLFNBQXhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQXBCO0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQXRCIiwiZmlsZSI6Ii4vdXRpbHMvY3NzVmFyaWFibGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1haW5CYWNrZ3JvdW5kID0gXCIjMmIyZTJmXCI7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5QmFja2dyb3VuZCA9IFwiIzM5MzkzOVwiO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uQm9yZGVyID0gXCIjNGY2Zjg3XCI7XG5leHBvcnQgY29uc3QgbWFpbkJ1dHRvbiA9IFwiIzM1ODBjMlwiO1xuZXhwb3J0IGNvbnN0IG1haW5CdXR0b25Ib3ZlciA9IFwiIzA3NmJiOFwiO1xuZXhwb3J0IGNvbnN0IG1haW5CdXR0b25UZXh0ID0gXCIjZDJkMmQyXCI7XG5leHBvcnQgY29uc3QgbWFpbkJ1dHRvblRleHRIb3ZlciA9IFwiI2UyZTJlMlwiO1xuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUJ1dHRvbiA9IFwiIzNmNGE1MFwiO1xuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUJ1dHRvbkhvdmVyID0gXCIjNGQ2MDZmXCI7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5QnV0dG9uVGV4dCA9IFwiI2JkZWRmZlwiO1xuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUJ1dHRvblRleHRIb3ZlciA9IFwiI2UyZTJlMlwiO1xuXG5leHBvcnQgY29uc3QgaW5wdXRCYWNrZ3JvdW5kID0gXCIjNDU0NTQ1XCI7XG5leHBvcnQgY29uc3QgaW5wdXRCb3JkZXIgPSBcIiNkZWRlZGVcIjtcblxuZXhwb3J0IGNvbnN0IHRhZ0JhY2tncm91bmQgPSBcIiM0YTRhNGFcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/cssVariables.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-markdown\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXJrZG93blwiPzY4YjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtbWFya2Rvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXJrZG93blwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-markdown\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "remark-gfm":
/*!*****************************!*\
  !*** external "remark-gfm" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"remark-gfm\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmstZ2ZtXCI/NGNjMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZW1hcmstZ2ZtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVtYXJrLWdmbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///remark-gfm\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });