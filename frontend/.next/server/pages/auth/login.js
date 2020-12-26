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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/login.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AuthForm.tsx":
/*!*********************************!*\
  !*** ./components/AuthForm.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/AuthForm.tsx\";\n\n\n\nconst AuthForm = ({\n  formType\n}) => {\n  const submitForm = e => {\n    e.preventDefault();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-2425110780\" + \" \" + \"auth-form-page-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitForm,\n        className: \"jsx-2425110780\" + \" \" + \"auth-form-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-2425110780\" + \" \" + \"auth-form-heading\",\n          children: formType === \"signup\" ? \"Signup\" : \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, undefined), formType === \"signup\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2425110780\" + \" \" + \"auth-form auth-form-signup\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"username\",\n            placeholder: \"Username: \",\n            required: true,\n            className: \"jsx-2425110780\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"email\",\n            placeholder: \"Email: \",\n            required: true,\n            className: \"jsx-2425110780\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"password\",\n            id: \"password\",\n            placeholder: \"Password: \",\n            required: true,\n            className: \"jsx-2425110780\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"password\",\n            id: \"confirmPassword\",\n            placeholder: \"Confirm Password: \",\n            required: true,\n            className: \"jsx-2425110780\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-2425110780\" + \" \" + \"auth-form-checkbox-container\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"checkbox\",\n              id: \"rememberMe\",\n              className: \"jsx-2425110780\" + \" \" + \"auth-form-checkbox\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"rememberMe\",\n              className: \"jsx-2425110780\" + \" \" + \"auth-form-checkbox-label\",\n              children: \"Remember Me\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 17\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"jsx-2425110780\" + \" \" + \"auth-form-submit-btn\",\n            children: \"Signup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 13\n        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2425110780\" + \" \" + \"auth-form auth-form-login\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"identifier\",\n            placeholder: \"Username or Email: \",\n            required: true,\n            className: \"jsx-2425110780\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"password\",\n            id: \"password\",\n            placeholder: \"Password: \",\n            required: true,\n            className: \"jsx-2425110780\" + \" \" + \"auth-form-input\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-2425110780\" + \" \" + \"auth-form-checkbox-container\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"checkbox\",\n              id: \"rememberMe\",\n              className: \"jsx-2425110780\" + \" \" + \"auth-form-checkbox\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"rememberMe\",\n              className: \"jsx-2425110780\" + \" \" + \"auth-form-checkbox-label\",\n              children: \"Remember Me\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 17\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"jsx-2425110780\" + \" \" + \"auth-form-submit-btn\",\n            children: \"Login\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2425110780\",\n      children: \".auth-form-page-container.jsx-2425110780{width:100%;height:calc(100vh - 40px - 4px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.auth-form-container.jsx-2425110780{height:80%;width:30%;min-width:310px;-webkit-transform:translateY(-30px);-ms-transform:translateY(-30px);transform:translateY(-30px);}.auth-form-heading.jsx-2425110780{text-align:center;-webkit-transform:translateY(70px);-ms-transform:translateY(70px);transform:translateY(70px);}.auth-form.jsx-2425110780{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;}.auth-form-input.jsx-2425110780{display:block;width:100%;height:40px;margin:11px 0;text-indent:15px;background:#454545;color:white;border:2px solid #dedede;font-size:0.8rem;}.auth-form-input.jsx-2425110780::-webkit-input-placeholder{font-size:0.8rem;color:white;}.auth-form-input.jsx-2425110780::-moz-placeholder{font-size:0.8rem;color:white;}.auth-form-input.jsx-2425110780:-ms-input-placeholder{font-size:0.8rem;color:white;}.auth-form-input.jsx-2425110780::placeholder{font-size:0.8rem;color:white;}#username.jsx-2425110780{margin-top:90px;}#identifier.jsx-2425110780{margin-top:140px;}.auth-form-checkbox-container.jsx-2425110780{margin:10px 0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.auth-form-checkbox-label.jsx-2425110780{margin-left:15px;font-size:1rem;-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px);}.auth-form-checkbox.jsx-2425110780{margin-left:10px;}.auth-form-submit-btn.jsx-2425110780{background:#3580c2;border:1.5px solid #4f6f87;border-radius:2px;color:#bebebe;width:70px;height:30px;margin-top:10px;cursor:pointer;font-size:0.8rem;}.auth-form-submit-btn.jsx-2425110780:hover{background:#076bb8;color:#e2e2e2;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9BdXRoRm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0drQixBQUdzQixBQVFBLEFBT08sQUFLTCxBQVNDLEFBWUcsQUFLRCxBQUlDLEFBSUgsQUFPRyxBQU1BLEFBSUUsQUFZQSxXQWxGYSxBQVF0QixHQXFCQyxBQXlCQSxFQVJiLENBTGMsQUFTZCxBQVdpQixBQU1qQixDQXBENkIsQ0F3REEsQUFZYixFQTFFRSxJQXFCSixBQXlCQyxJQWJmLEdBb0I0QixDQXNCNUIsSUExRThCLEFBcUJkLE1BOUJELEdBdUVLLEtBeENELGFBeUNILElBeENLLE1BYkcsSUFzRFgsU0F4Q0MsRUF5Q0EsVUF4Q2EsQUFxQkUsRUFvQlgsVUE1RGxCLE1BZHlCLEFBMkVSLEtBZGpCLEVBM0JtQixRQTBDQSxDQW5FbkIsUUEwQkEsUUEwQ0EsR0ExRDZCLG9EQW9DN0IsWUF0RHFCLHlDQW1CQSxvREFsQnJCLHlDQW1CYSxXQUNDLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc3RhY2tvdmVyZmxvdy1jbG9uZS9mcm9udGVuZC9jb21wb25lbnRzL0F1dGhGb3JtLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZm9ybVR5cGU6IFwic2lnbnVwXCIgfCBcImxvZ2luXCI7XG59XG5cbmNvbnN0IEF1dGhGb3JtOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBmb3JtVHlwZSB9KSA9PiB7XG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jb250YWluZXJcIiBvblN1Ym1pdD17c3VibWl0Rm9ybX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1oZWFkaW5nXCI+XG4gICAgICAgICAgICB7Zm9ybVR5cGUgPT09IFwic2lnbnVwXCIgPyBcIlNpZ251cFwiIDogXCJMb2dpblwifVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAge2Zvcm1UeXBlID09PSBcInNpZ251cFwiID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0gYXV0aC1mb3JtLXNpZ251cFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lOiBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWw6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQ6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmQ6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0tY2hlY2tib3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwicmVtZW1iZXJNZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJyZW1lbWJlck1lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jaGVja2JveC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUmVtZW1iZXIgTWVcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLXN1Ym1pdC1idG5cIj5cbiAgICAgICAgICAgICAgICBTaWdudXBcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0gYXV0aC1mb3JtLWxvZ2luXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiaWRlbnRpZmllclwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZSBvciBFbWFpbDogXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZDogXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jaGVja2JveC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0tY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJyZW1lbWJlck1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJlbWVtYmVyTWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWNoZWNrYm94LWxhYmVsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBSZW1lbWJlciBNZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhdXRoLWZvcm0tc3VibWl0LWJ0blwiPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmF1dGgtZm9ybS1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCAtIDRweCk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgbWluLXdpZHRoOiAzMTBweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1oZWFkaW5nIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0taW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW46IDExcHggMDtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDU0NTQ1O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGVkZWRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICN1c2VybmFtZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNpZGVudGlmaWVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tY2hlY2tib3gtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tY2hlY2tib3gtbGFiZWwge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tY2hlY2tib3gge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1zdWJtaXQtYnRuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzU4MGMyO1xuICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzRmNmY4NztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgY29sb3I6ICNiZWJlYmU7XG4gICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgtZm9ybS1zdWJtaXQtYnRuOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDc2YmI4O1xuICAgICAgICAgIGNvbG9yOiAjZTJlMmUyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/AuthForm.tsx */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGhGb3JtLnRzeD8wNjkzIl0sIm5hbWVzIjpbIkF1dGhGb3JtIiwiZm9ybVR5cGUiLCJzdWJtaXRGb3JtIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBTUEsTUFBTUEsUUFBeUIsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUNsRCxRQUFNQyxVQUFVLEdBQUlDLENBQUQsSUFBTztBQUN4QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBLDBDQUFlLDBCQUFmO0FBQUEsNkJBQ0U7QUFBc0MsZ0JBQVEsRUFBRUYsVUFBaEQ7QUFBQSw0Q0FBZ0IscUJBQWhCO0FBQUEsZ0NBQ0U7QUFBQSw4Q0FBYyxtQkFBZDtBQUFBLG9CQUNHRCxRQUFRLEtBQUssUUFBYixHQUF3QixRQUF4QixHQUFtQztBQUR0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBSUdBLFFBQVEsS0FBSyxRQUFiLGdCQUNDO0FBQUEsOENBQWUsNEJBQWY7QUFBQSxrQ0FDRTtBQUNFLGdCQUFJLEVBQUMsTUFEUDtBQUdFLGNBQUUsRUFBQyxVQUhMO0FBSUUsdUJBQVcsRUFBQyxZQUpkO0FBS0Usb0JBQVEsTUFMVjtBQUFBLGdEQUVZO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQVFFO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBR0UsY0FBRSxFQUFDLE9BSEw7QUFJRSx1QkFBVyxFQUFDLFNBSmQ7QUFLRSxvQkFBUSxNQUxWO0FBQUEsZ0RBRVk7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJGLGVBZUU7QUFDRSxnQkFBSSxFQUFDLFVBRFA7QUFHRSxjQUFFLEVBQUMsVUFITDtBQUlFLHVCQUFXLEVBQUMsWUFKZDtBQUtFLG9CQUFRLE1BTFY7QUFBQSxnREFFWTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZkYsZUFzQkU7QUFDRSxnQkFBSSxFQUFDLFVBRFA7QUFHRSxjQUFFLEVBQUMsaUJBSEw7QUFJRSx1QkFBVyxFQUFDLG9CQUpkO0FBS0Usb0JBQVEsTUFMVjtBQUFBLGdEQUVZO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF0QkYsZUE2QkU7QUFBQSxnREFBZSw4QkFBZjtBQUFBLG9DQUNFO0FBQ0Usa0JBQUksRUFBQyxVQURQO0FBR0UsZ0JBQUUsRUFBQyxZQUhMO0FBQUEsa0RBRVk7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBTUU7QUFDRSxxQkFBTyxFQUFDLFlBRFY7QUFBQSxrREFFWSwwQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBN0JGLGVBMENFO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQUEsZ0RBQWdDLHNCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGdCQWdEQztBQUFBLDhDQUFlLDJCQUFmO0FBQUEsa0NBQ0U7QUFDRSxnQkFBSSxFQUFDLE1BRFA7QUFHRSxjQUFFLEVBQUMsWUFITDtBQUlFLHVCQUFXLEVBQUMscUJBSmQ7QUFLRSxvQkFBUSxNQUxWO0FBQUEsZ0RBRVk7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBUUU7QUFDRSxnQkFBSSxFQUFDLFVBRFA7QUFHRSxjQUFFLEVBQUMsVUFITDtBQUlFLHVCQUFXLEVBQUMsWUFKZDtBQUtFLG9CQUFRLE1BTFY7QUFBQSxnREFFWTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUkYsZUFlRTtBQUFBLGdEQUFlLDhCQUFmO0FBQUEsb0NBQ0U7QUFDRSxrQkFBSSxFQUFDLFVBRFA7QUFHRSxnQkFBRSxFQUFDLFlBSEw7QUFBQSxrREFFWTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFNRTtBQUNFLHFCQUFPLEVBQUMsWUFEVjtBQUFBLGtEQUVZLDBCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFmRixlQTRCRTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFBLGdEQUFnQyxzQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFwREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXNMRCxDQTNMRDs7QUE2TGVELHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BdXRoRm9ybS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZvcm1UeXBlOiBcInNpZ251cFwiIHwgXCJsb2dpblwiO1xufVxuXG5jb25zdCBBdXRoRm9ybTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZm9ybVR5cGUgfSkgPT4ge1xuICBjb25zdCBzdWJtaXRGb3JtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZm9ybS1wYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWZvcm0tY29udGFpbmVyXCIgb25TdWJtaXQ9e3N1Ym1pdEZvcm19PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhdXRoLWZvcm0taGVhZGluZ1wiPlxuICAgICAgICAgICAge2Zvcm1UeXBlID09PSBcInNpZ251cFwiID8gXCJTaWdudXBcIiA6IFwiTG9naW5cIn1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIHtmb3JtVHlwZSA9PT0gXCJzaWdudXBcIiA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1mb3JtIGF1dGgtZm9ybS1zaWdudXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZTogXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsOiBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkOiBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkOiBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWNoZWNrYm94LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBpZD1cInJlbWVtYmVyTWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwicmVtZW1iZXJNZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0tY2hlY2tib3gtbGFiZWxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJlbWVtYmVyIE1lXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1zdWJtaXQtYnRuXCI+XG4gICAgICAgICAgICAgICAgU2lnbnVwXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1mb3JtIGF1dGgtZm9ybS1sb2dpblwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cImlkZW50aWZpZXJcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUgb3IgRW1haWw6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQ6IFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0tY2hlY2tib3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwicmVtZW1iZXJNZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJyZW1lbWJlck1lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jaGVja2JveC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUmVtZW1iZXIgTWVcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYXV0aC1mb3JtLXN1Ym1pdC1idG5cIj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hdXRoLWZvcm0tcGFnZS1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQwcHggLSA0cHgpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgIG1pbi13aWR0aDogMzEwcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0taGVhZGluZyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMXB4IDA7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzQ1NDU0NTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAjdXNlcm5hbWUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAjaWRlbnRpZmllciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWNoZWNrYm94LWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aC1mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tc3VibWl0LWJ0biB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzM1ODBjMjtcbiAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM0ZjZmODc7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIGNvbG9yOiAjYmViZWJlO1xuICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoLWZvcm0tc3VibWl0LWJ0bjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzA3NmJiODtcbiAgICAgICAgICBjb2xvcjogI2UyZTJlMjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AuthForm.tsx\n");

/***/ }),

/***/ "./pages/auth/login.tsx":
/*!******************************!*\
  !*** ./pages/auth/login.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AuthForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AuthForm */ \"./components/AuthForm.tsx\");\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/pages/auth/login.tsx\";\n\n\n\nconst LogInPage = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AuthForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      formType: \"login\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogInPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL2xvZ2luLnRzeD83ZDhmIl0sIm5hbWVzIjpbIkxvZ0luUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLFNBQW1CLEdBQUcsTUFBTTtBQUNoQyxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDREQUFEO0FBQVUsY0FBUSxFQUFFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztBQVFlQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2F1dGgvbG9naW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQXV0aEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXV0aEZvcm1cIjtcblxuY29uc3QgTG9nSW5QYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEF1dGhGb3JtIGZvcm1UeXBlPXtcImxvZ2luXCJ9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dJblBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/login.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

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