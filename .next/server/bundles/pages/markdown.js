module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Header.js


var linkStyle = {
  marginRight: 15
};

var Header_Header = function Header() {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(link__default.a, {
    href: "/"
  }, external__react__default.a.createElement("a", {
    style: linkStyle
  }, "Home")), external__react__default.a.createElement(link__default.a, {
    href: "/about"
  }, external__react__default.a.createElement("a", {
    style: linkStyle
  }, "About")), external__react__default.a.createElement(link__default.a, {
    href: "/markdown"
  }, external__react__default.a.createElement("a", {
    style: linkStyle
  }, "markdown")));
};

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/MyLayout.js


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var MyLayout_Layout = function Layout(props) {
  console.log(props);
  return external__react__default.a.createElement("div", {
    style: layoutStyle
  }, external__react__default.a.createElement(components_Header, null), props.children);
};

/* harmony default export */ var MyLayout = __webpack_exports__["a"] = (MyLayout_Layout);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MyLayout_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_markdown__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_highlight__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_highlight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_highlight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_marked__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_marked__);







/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3_next_router__["withRouter"])(function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_MyLayout_js__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    className: "jsx-3267370368"
  }, props.router.query.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-3267370368" + " " + "markdown"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_highlight___default.a, {
    innerHTML: true
  }, __WEBPACK_IMPORTED_MODULE_6_marked___default()('This is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\n# git命令\n## 初始化\n设置用户名，邮箱\n```bash\ngit config --global user.name "Author Name"\ngit config --global user.email "Author Email"\n```\n查看邮箱用户名等选项\n```bash\ngitc onfig --list\n```\n\n初始化一个Git仓库，使用`git init`命令。\n第一步，使用命令`git add .`,添加全部 ，注意，可反复多次使用，添加多个文件；\n第二步，使用命令`git commit -m "提交的注释"`，完成。\n\n\nAnd here\'s the content.')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_markdown___default.a, {
    source: "\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\n# git\u547D\u4EE4\n## \u521D\u59CB\u5316\n\u8BBE\u7F6E\u7528\u6237\u540D\uFF0C\u90AE\u7BB1\n```bash\ngit config --global user.name \"Author Name\"\ngit config --global user.email \"Author Email\"\n```\n\u67E5\u770B\u90AE\u7BB1\u7528\u6237\u540D\u7B49\u9009\u9879\n```bash\ngitc onfig --list\n```\n\n\u521D\u59CB\u5316\u4E00\u4E2AGit\u4ED3\u5E93\uFF0C\u4F7F\u7528`git init`\u547D\u4EE4\u3002\n\u7B2C\u4E00\u6B65\uFF0C\u4F7F\u7528\u547D\u4EE4`git add .`,\u6DFB\u52A0\u5168\u90E8 \uFF0C\u6CE8\u610F\uFF0C\u53EF\u53CD\u590D\u591A\u6B21\u4F7F\u7528\uFF0C\u6DFB\u52A0\u591A\u4E2A\u6587\u4EF6\uFF1B\n\u7B2C\u4E8C\u6B65\uFF0C\u4F7F\u7528\u547D\u4EE4`git commit -m \"\u63D0\u4EA4\u7684\u6CE8\u91CA\"`\uFF0C\u5B8C\u6210\u3002\n\n\nAnd here's the content.\n     "
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3267370368",
    css: [".markdown{font-family:'Arial';}", ".markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}", ".markdown a:hover{opacity:0.6;}", ".markdown h3{margin:0;padding:0;text-transform:uppercase;}"]
  }));
}));

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-highlight");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ })
/******/ ]);