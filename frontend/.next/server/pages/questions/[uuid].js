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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/questions/[uuid]/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Question.tsx":
/*!*********************************!*\
  !*** ./components/Question.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/Question.tsx\";\n\n\nconst Question = ({\n  data\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: data.uuid\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1F1ZXN0aW9uLnRzeD9mMTYwIl0sIm5hbWVzIjpbIlF1ZXN0aW9uIiwiZGF0YSIsInV1aWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFRQSxNQUFNQSxRQUF5QixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDOUMsc0JBQU87QUFBQSxjQUFNQSxJQUFJLENBQUNDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGRDs7QUFJZUYsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1ZXN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgUXVlc3Rpb25UeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL2luZGl2aWR1YWxRdWVzdGlvblR5cGVcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YTogUXVlc3Rpb25UeXBlO1xufVxuXG5jb25zdCBRdWVzdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiA8ZGl2PntkYXRhLnV1aWR9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Question.tsx\n");

/***/ }),

/***/ "./pages/questions/[uuid]/index.tsx":
/*!******************************************!*\
  !*** ./pages/questions/[uuid]/index.tsx ***!
  \******************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Question */ \"./components/Question.tsx\");\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/questions/[uuid]/index.tsx\";\n\n\n\n\n\nconst QuestionPage = ({\n  uuid\n}) => {\n  const fetchQuestions = async () => {\n    const res = await fetch(`${_utils_host__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}/posts/${uuid}`);\n    return await res.json();\n  };\n\n  const {\n    isLoading,\n    isError,\n    error,\n    data\n  } = Object(react_query__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])([\"individual-question\"], () => fetchQuestions(), {\n    cacheTime: 0\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, undefined) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: error.message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Question__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getServerSideProps = async context => {\n  return {\n    props: {\n      uuid: context.params.uuid\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9xdWVzdGlvbnMvW3V1aWRdL2luZGV4LnRzeD9kOTFjIl0sIm5hbWVzIjpbIlF1ZXN0aW9uUGFnZSIsInV1aWQiLCJmZXRjaFF1ZXN0aW9ucyIsInJlcyIsImZldGNoIiwiaG9zdCIsImpzb24iLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJjYWNoZVRpbWUiLCJtZXNzYWdlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInByb3BzIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFFQTs7QUFNQSxNQUFNQSxZQUE2QixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDbEQsUUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFDakMsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyxtREFBSyxVQUFTSixJQUFLLEVBQXZCLENBQXZCO0FBQ0EsV0FBTyxNQUFNRSxHQUFHLENBQUNHLElBQUosRUFBYjtBQUNELEdBSEQ7O0FBS0EsUUFBTTtBQUFFQyxhQUFGO0FBQWFDLFdBQWI7QUFBc0JDLFNBQXRCO0FBQTZCQztBQUE3QixNQUFzQ0MsNERBQVEsQ0FDbEQsQ0FBQyxxQkFBRCxDQURrRCxFQUVsRCxNQUFNVCxjQUFjLEVBRjhCLEVBR2xEO0FBQUVVLGFBQVMsRUFBRTtBQUFiLEdBSGtELENBQXBEO0FBTUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsMkJBQ0U7QUFBQSxnQkFDR0wsU0FBUyxnQkFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUSxHQUVOQyxPQUFPLGdCQUNUO0FBQUEsa0JBQU1DLEtBQUssQ0FBQ0k7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURTLGdCQUdULHFFQUFDLDREQUFEO0FBQVUsWUFBSSxFQUFFSDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELENBekJEOztBQTJCTyxNQUFNSSxrQkFBc0MsR0FBRyxNQUFPQyxPQUFQLElBQW1CO0FBQ3ZFLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xmLFVBQUksRUFBRWMsT0FBTyxDQUFDRSxNQUFSLENBQWVoQjtBQURoQjtBQURGLEdBQVA7QUFLRCxDQU5NO0FBUVFELDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcXVlc3Rpb25zL1t1dWlkXS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IGhvc3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy90eXBlcy9pbmRpdmlkdWFsUXVlc3Rpb25UeXBlXCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXVpZDogc3RyaW5nO1xufVxuXG5jb25zdCBRdWVzdGlvblBhZ2U6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHV1aWQgfSkgPT4ge1xuICBjb25zdCBmZXRjaFF1ZXN0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtob3N0fS9wb3N0cy8ke3V1aWR9YCk7XG4gICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG4gIH07XG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeTxRdWVzdGlvblR5cGUsIEVycm9yPihcbiAgICBbXCJpbmRpdmlkdWFsLXF1ZXN0aW9uXCJdLFxuICAgICgpID0+IGZldGNoUXVlc3Rpb25zKCksXG4gICAgeyBjYWNoZVRpbWU6IDAgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPG1haW4+XG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICkgOiBpc0Vycm9yID8gKFxuICAgICAgICAgIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFF1ZXN0aW9uIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHV1aWQ6IGNvbnRleHQucGFyYW1zLnV1aWQsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/questions/[uuid]/index.tsx\n");

/***/ }),

/***/ "./utils/host.ts":
/*!***********************!*\
  !*** ./utils/host.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @ts-ignore\nconst host = true ? \"http://localhost:5000\" : undefined;\n/* harmony default export */ __webpack_exports__[\"default\"] = (host);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9ob3N0LnRzPzY0MDUiXSwibmFtZXMiOlsiaG9zdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBLE1BQU1BLElBQUksR0FDUixPQUF5Qyx1QkFBekMsR0FBbUUsU0FEckU7QUFHZUEsbUVBQWYiLCJmaWxlIjoiLi91dGlscy9ob3N0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWlnbm9yZVxuY29uc3QgaG9zdCA9XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiIDogXCJcIjtcblxuZXhwb3J0IGRlZmF1bHQgaG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/host.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-query\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeVwiPzMwNmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-query\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });