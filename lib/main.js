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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Application; });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/app/controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Application =
/*#__PURE__*/
function () {
  function Application() {
    _classCallCheck(this, Application);

    this.controller = new _controller__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(Application, [{
    key: "start",
    value: function start() {
      this.controller.start();
    }
  }]);

  return Application;
}();



/***/ }),

/***/ "./src/app/controller.js":
/*!*******************************!*\
  !*** ./src/app/controller.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/model.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var apiKey = '5f278558b6764b15ab11440856aa2594';

var Controller =
/*#__PURE__*/
function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.model = new _model__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.pageToShow = 0;
    this.lastAPIUrl = '';
  }

  _createClass(Controller, [{
    key: "getNewsResources",
    value: function getNewsResources() {
      var newsAPIUrl = 'https://newsapi.org/v2/sources?language=en&apiKey=' + apiKey;
      var request = new Request(newsAPIUrl);
      var currThis = this;
      fetch(request).then(function (response) {
        return response.json();
      }).then(function (data) {
        currThis.model.processNewsResources(data);
      });
    }
  }, {
    key: "getNewsBySearch",
    value: function getNewsBySearch(urlPart) {
      document.querySelector('#error-block').style.display = 'none';
      var newsAPIUrl = 'https://newsapi.org/v2/' + urlPart + 'apiKey=' + apiKey;
      var request = new Request(newsAPIUrl);
      var currThis = this;
      fetch(request).then(function (response) {
        return response.json();
      }).then(function (data) {
        currThis.model.processNewsBySearch(data);
        currThis.pageToShow = 2;
        currThis.lastAPIUrl = newsAPIUrl;
      });
    }
  }, {
    key: "appendNews",
    value: function appendNews() {
      this.lastAPIUrl = this.lastAPIUrl.replace(new RegExp('page=.*&'), 'page=' + this.pageToShow + '&');
      var request = new Request(this.lastAPIUrl);
      var currThis = this;
      fetch(request).then(function (response) {
        return response.json();
      }).then(function (data) {
        currThis.model.processAppendNews(data);
        currThis.pageToShow++;
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.getNewsResources();
      this.getNewsBySearch('top-headlines?country=us&pageSize=5&page=1&');
      document.querySelector('#resources').addEventListener('click', function (event) {
        _this.getNewsBySearch("everything?sources=".concat(event.target.id, "&pageSize=5&page=1&"));
      });
      document.querySelector('#loadMore').addEventListener('click', function () {
        _this.appendNews();
      });
      document.querySelector('#search-btn').addEventListener('click', function () {
        var query = document.querySelector('#search-field').value;

        if (query.length > 0) {
          _this.getNewsBySearch("everything?q=".concat(query, "&pageSize=5&page=1&"));

          query.length = 0;
        }
      });
      document.querySelector('#search-field').addEventListener('keyup', function (event) {
        event.preventDefault();

        if (event.keyCode === 13) {
          document.querySelector('#search-btn').click();
        }
      });
    }
  }]);

  return Controller;
}();



/***/ }),

/***/ "./src/app/model.js":
/*!**************************!*\
  !*** ./src/app/model.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/app/view.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var minDisplayedNews = 5;
var maxDisplayedNews = 40;
var loadButtonSelector = '#loadMore';

var Model =
/*#__PURE__*/
function () {
  function Model() {
    _classCallCheck(this, Model);

    this.newsDisplayed = 0;
    this.view = new _view__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(Model, [{
    key: "processNewsResources",
    value: function processNewsResources(data) {
      for (var i = 0; i < data.sources.length; i++) {
        document.querySelector('#resources').innerHTML += "<button class=\"btn btn__sources\" id=\"" + data.sources[i].id + "\">" + data.sources[i].name + "</button>";
      }
    }
  }, {
    key: "processNewsBySearch",
    value: function processNewsBySearch(data) {
      var newsCount = data.articles.length;
      var newsItems = document.querySelector('#news');
      newsItems.innerHTML = '';

      if (newsCount == 0) {
        document.querySelector('#error-block').style.display = 'unset';
        document.querySelector(loadButtonSelector).style.display = 'none';
        return;
      }

      var renderedItems = this.view.renderItems(newsCount, data.articles);
      newsItems.appendChild(renderedItems);
      if (newsCount < minDisplayedNews) document.querySelector(loadButtonSelector).style.display = 'none';else document.querySelector(loadButtonSelector).style.display = 'unset';
      this.newsDisplayed = newsCount;
    }
  }, {
    key: "processAppendNews",
    value: function processAppendNews(data) {
      var newsCount = data.articles.length;

      if (newsCount == 0) {
        document.querySelector(loadButtonSelector).style.display = 'none';
        return;
      }

      var renderedItems = this.view.renderItems(newsCount, data.articles);
      var newsItems = document.querySelector('#news');
      newsItems.appendChild(renderedItems);
      this.newsDisplayed += newsCount;
      if (newsCount < minDisplayedNews || this.newsDisplayed == maxDisplayedNews) document.querySelector(loadButtonSelector).style.display = 'none';
    }
  }]);

  return Model;
}();



/***/ }),

/***/ "./src/app/view.js":
/*!*************************!*\
  !*** ./src/app/view.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View =
/*#__PURE__*/
function () {
  function View() {
    _classCallCheck(this, View);
  }

  _createClass(View, [{
    key: "itemView",
    value: function itemView(item, data) {
      item.querySelector('.news__picture').setAttribute('src', "".concat(data.urlToImage ? data.urlToImage : ''));
      item.querySelector('.news__title').textContent = data.title;
      item.querySelector('.news__source').textContent = data.source.name;
      item.querySelector('.news__text').textContent = data.description;
      item.querySelector('.news__link').setAttribute('href', data.url);
      return item;
    }
  }, {
    key: "renderItems",
    value: function renderItems(newsCount, data) {
      var fragment = document.createDocumentFragment();
      var news_template = document.querySelector('#news-template');

      for (var i = 0; i < newsCount; i++) {
        var item = news_template.content ? news_template.content.cloneNode(true).querySelector('.news-template__item') : news_template.querySelector('.news-template__item').cloneNode(true);
        var child = this.itemView(item, data[i]);
        fragment.appendChild(child);
      }

      return fragment;
    }
  }]);

  return View;
}();



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ "./src/app/app.js");

var App = new _app_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
App.start();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbIkFwcGxpY2F0aW9uIiwiY29udHJvbGxlciIsIkNvbnRyb2xsZXIiLCJzdGFydCIsImFwaUtleSIsIm1vZGVsIiwiTW9kZWwiLCJwYWdlVG9TaG93IiwibGFzdEFQSVVybCIsIm5ld3NBUElVcmwiLCJyZXF1ZXN0IiwiUmVxdWVzdCIsImN1cnJUaGlzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInByb2Nlc3NOZXdzUmVzb3VyY2VzIiwidXJsUGFydCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsInByb2Nlc3NOZXdzQnlTZWFyY2giLCJyZXBsYWNlIiwiUmVnRXhwIiwicHJvY2Vzc0FwcGVuZE5ld3MiLCJnZXROZXdzUmVzb3VyY2VzIiwiZ2V0TmV3c0J5U2VhcmNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiaWQiLCJhcHBlbmROZXdzIiwicXVlcnkiLCJ2YWx1ZSIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSIsImNsaWNrIiwibWluRGlzcGxheWVkTmV3cyIsIm1heERpc3BsYXllZE5ld3MiLCJsb2FkQnV0dG9uU2VsZWN0b3IiLCJuZXdzRGlzcGxheWVkIiwidmlldyIsIlZpZXciLCJpIiwic291cmNlcyIsImlubmVySFRNTCIsIm5hbWUiLCJuZXdzQ291bnQiLCJhcnRpY2xlcyIsIm5ld3NJdGVtcyIsInJlbmRlcmVkSXRlbXMiLCJyZW5kZXJJdGVtcyIsImFwcGVuZENoaWxkIiwiaXRlbSIsInNldEF0dHJpYnV0ZSIsInVybFRvSW1hZ2UiLCJ0ZXh0Q29udGVudCIsInRpdGxlIiwic291cmNlIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJuZXdzX3RlbXBsYXRlIiwiY29udGVudCIsImNsb25lTm9kZSIsImNoaWxkIiwiaXRlbVZpZXciLCJBcHAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0lBRXFCQSxXOzs7QUFDakIseUJBQWM7QUFBQTs7QUFDVixTQUFLQyxVQUFMLEdBQWtCLElBQUlDLG1EQUFKLEVBQWxCO0FBQ0g7Ozs7NEJBRU07QUFDSCxXQUFLRCxVQUFMLENBQWdCRSxLQUFoQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUTDtBQUVBLElBQU1DLE1BQU0sR0FBRyxrQ0FBZjs7SUFFcUJGLFU7OztBQUNqQix3QkFBYTtB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LENBQUM4QyxzQkFBVCxFQUFqQjtBQUNBLFVBQU1DLGFBQWEsR0FBRy9DLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBdEI7O0FBQ0EsV0FBSyxJQUFJMEIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0ksU0FBcEIsRUFBK0JKLENBQUMsRUFBaEMsRUFBb0M7QUFDbEMsWUFBTVUsSUFBSSxHQUFJVSxhQUFhLENBQUNDLE9BQWYsR0FBMEJELGFBQWEsQ0FBQ0MsT0FBZCxDQUFzQkMsU0FBdEIsQ0FBZ0MsSUFBaEMsRUFBc0NoRCxhQUF0QyxDQUFvRCxzQkFBcEQsQ0FBMUIsR0FDVDhDLGFBQWEsQ0FBQzlDLGFBQWQsQ0FBNEIsc0JBQTVCLEVBQW9EZ0QsU0FBcEQsQ0FBOEQsSUFBOUQsQ0FESjtBQUVBLFlBQU1DLEtBQUssR0FBRyxLQUFLQyxRQUFMLENBQWNkLElBQWQsRUFBb0J4QyxJQUFJLENBQUM4QixDQUFELENBQXhCLENBQWQ7QUFDQWtCLGdCQUFRLENBQUNULFdBQVQsQ0FBcUJjLEtBQXJCO0FBQ0Q7O0FBQ0QsYUFBT0wsUUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkw7QUFBQTtBQUFBO0FBRUEsSUFBTU8sR0FBRyxHQUFHLElBQUl4RSxnREFBSixFQUFaO0FBQ0F3RSxHQUFHLENBQUNyRSxLQUFKLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCJpbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGljYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5zdGFydCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnO1xyXG5cclxuY29uc3QgYXBpS2V5ID0gJzVmMjc4NTU4YjY3NjRiMTVhYjExNDQwODU2YWEyNTk0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnBhZ2VUb1Nob3cgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdEFQSVVybCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld3NSZXNvdXJjZXMoKXtcclxuICAgICAgICBsZXQgbmV3c0FQSVVybCA9J2h0dHBzOi8vbmV3c2FwaS5vcmcvdjIvc291cmNlcz9sYW5ndWFnZT1lbiZhcGlLZXk9JysgYXBpS2V5O1xyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QobmV3c0FQSVVybCk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4geyBcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpOyBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgY3VyclRoaXMubW9kZWwucHJvY2Vzc05ld3NSZXNvdXJjZXMoZGF0YSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXdzQnlTZWFyY2godXJsUGFydCl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yLWJsb2NrJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBsZXQgbmV3c0FQSVVybCA9ICdodHRwczovL25ld3NhcGkub3JnL3YyLycgKyB1cmxQYXJ0ICsgJ2FwaUtleT0nICsgYXBpS2V5O1xyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QobmV3c0FQSVVybCk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4geyBcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICBjdXJyVGhpcy5tb2RlbC5wcm9jZXNzTmV3c0J5U2VhcmNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgIGN1cnJUaGlzLnBhZ2VUb1Nob3cgPSAyO1xyXG4gICAgICAgICAgICAgIGN1cnJUaGlzLmxhc3RBUElVcmwgPSBuZXdzQVBJVXJsO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kTmV3cygpe1xyXG4gICAgICAgIHRoaXMubGFzdEFQSVVybCA9IHRoaXMubGFzdEFQSVVybC5yZXBsYWNlKG5ldyBSZWdFeHAoJ3BhZ2U9LiomJyksICdwYWdlPScgKyB0aGlzLnBhZ2VUb1Nob3cgKyAnJicpO1xyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodGhpcy5sYXN0QVBJVXJsKTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJUaGlzID0gdGhpcztcclxuICAgICAgICBmZXRjaChyZXF1ZXN0KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7IFxyXG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICBjdXJyVGhpcy5tb2RlbC5wcm9jZXNzQXBwZW5kTmV3cyhkYXRhKTtcclxuICAgICAgICAgICAgICBjdXJyVGhpcy5wYWdlVG9TaG93Kys7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0TmV3c1Jlc291cmNlcygpO1xyXG4gICAgICAgIHRoaXMuZ2V0TmV3c0J5U2VhcmNoKCd0b3AtaGVhZGxpbmVzP2NvdW50cnk9dXMmcGFnZVNpemU9NSZwYWdlPTEmJyk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNvdXJjZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT57XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TmV3c0J5U2VhcmNoKGBldmVyeXRoaW5nP3NvdXJjZXM9JHtldmVudC50YXJnZXQuaWR9JnBhZ2VTaXplPTUmcGFnZT0xJmApO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkTW9yZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFwcGVuZE5ld3MoKTsgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWZpZWxkJykudmFsdWU7XHJcbiAgICAgICAgICAgIGlmKHF1ZXJ5Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXROZXdzQnlTZWFyY2goYGV2ZXJ5dGhpbmc/cT0ke3F1ZXJ5fSZwYWdlU2l6ZT01JnBhZ2U9MSZgKTtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5Lmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZmllbGQnKVxyXG4gICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYnRuJykuY2xpY2soKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcclxuXHJcbmNvbnN0IG1pbkRpc3BsYXllZE5ld3MgPSA1O1xyXG5jb25zdCBtYXhEaXNwbGF5ZWROZXdzID0gNDA7XHJcbmNvbnN0IGxvYWRCdXR0b25TZWxlY3RvciA9ICcjbG9hZE1vcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWx7XHJcbiAgICBjb25zdHJ1Y3RvcigpeyAgXHJcbiAgICAgICAgdGhpcy5uZXdzRGlzcGxheWVkID0gMDtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NOZXdzUmVzb3VyY2VzKGRhdGEpe1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuc291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNvdXJjZXMnKS5pbm5lckhUTUwgKz1cclxuICAgICAgICAgYDxidXR0b24gY2xhc3M9XCJidG4gYnRuX19zb3VyY2VzXCIgaWQ9XCJgICsgZGF0YS5zb3VyY2VzW2ldLmlkICsgYFwiPmAgXHJcbiAgICAgICAgICsgZGF0YS5zb3VyY2VzW2ldLm5hbWUgKyBgPC9idXR0b24+YDtcclxuICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzTmV3c0J5U2VhcmNoKGRhdGEpe1xyXG4gICAgICBjb25zdCBuZXdzQ291bnQgPSBkYXRhLmFydGljbGVzLmxlbmd0aDtcclxuICAgICAgY29uc3QgbmV3c0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3MnKTtcclxuICAgICAgbmV3c0l0ZW1zLmlubmVySFRNTCA9ICcnO1xyXG4gICAgIFxyXG4gICAgICBpZihuZXdzQ291bnQgPT0gMCl7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3ItYmxvY2snKS5zdHlsZS5kaXNwbGF5ID0gJ3Vuc2V0JzsgIFxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihsb2FkQnV0dG9uU2VsZWN0b3IpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gICAgICBcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlcmVkSXRlbXMgPSB0aGlzLnZpZXcucmVuZGVySXRlbXMobmV3c0NvdW50LCBkYXRhLmFydGljbGVzKTtcclxuICAgICAgbmV3c0l0ZW1zLmFwcGVuZENoaWxkKHJlbmRlcmVkSXRlbXMpO1xyXG5cclxuICAgICAgaWYobmV3c0NvdW50IDwgbWluRGlzcGxheWVkTmV3cylcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobG9hZEJ1dHRvblNlbGVjdG9yKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxvYWRCdXR0b25TZWxlY3Rvcikuc3R5bGUuZGlzcGxheSA9ICd1bnNldCc7XHJcbiAgICAgIHRoaXMubmV3c0Rpc3BsYXllZCA9IG5ld3NDb3VudDsgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm9jZXNzQXBwZW5kTmV3cyhkYXRhKXtcclxuICAgICAgY29uc3QgbmV3c0NvdW50ID0gZGF0YS5hcnRpY2xlcy5sZW5ndGg7XHJcbiAgICAgIGlmKG5ld3NDb3VudCA9PSAwKXtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobG9hZEJ1dHRvblNlbGVjdG9yKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9ICAgIFxyXG5cclxuICAgICAgY29uc3QgcmVuZGVyZWRJdGVtcyA9IHRoaXMudmlldy5yZW5kZXJJdGVtcyhuZXdzQ291bnQsIGRhdGEuYXJ0aWNsZXMpO1xyXG4gICAgICBjb25zdCBuZXdzSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cycpO1xyXG4gICAgICBuZXdzSXRlbXMuYXBwZW5kQ2hpbGQocmVuZGVyZWRJdGVtcyk7XHJcblxyXG4gICAgICB0aGlzLm5ld3NEaXNwbGF5ZWQgKz0gbmV3c0NvdW50O1xyXG5cclxuICAgICAgaWYobmV3c0NvdW50IDwgbWluRGlzcGxheWVkTmV3cyB8fCB0aGlzLm5ld3NEaXNwbGF5ZWQgPT0gbWF4RGlzcGxheWVkTmV3cylcclxuICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihsb2FkQnV0dG9uU2VsZWN0b3IpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld3tcclxuICAgIGl0ZW1WaWV3KGl0ZW0sIGRhdGEpe1xyXG4gICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19waWN0dXJlJykuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtkYXRhLnVybFRvSW1hZ2UgPyBkYXRhLnVybFRvSW1hZ2UgOiAnJ31gKTtcclxuICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcubmV3c19fdGl0bGUnKS50ZXh0Q29udGVudCA9IGRhdGEudGl0bGU7XHJcbiAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignLm5ld3NfX3NvdXJjZScpLnRleHRDb250ZW50ID0gZGF0YS5zb3VyY2UubmFtZTtcclxuICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcubmV3c19fdGV4dCcpLnRleHRDb250ZW50ID0gZGF0YS5kZXNjcmlwdGlvbjtcclxuICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcubmV3c19fbGluaycpLnNldEF0dHJpYnV0ZSgnaHJlZicsIGRhdGEudXJsKTtcclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySXRlbXMobmV3c0NvdW50LCBkYXRhKXtcclxuICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgIGNvbnN0IG5ld3NfdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cy10ZW1wbGF0ZScpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld3NDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IChuZXdzX3RlbXBsYXRlLmNvbnRlbnQpID8gbmV3c190ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKS5xdWVyeVNlbGVjdG9yKCcubmV3cy10ZW1wbGF0ZV9faXRlbScpIFxyXG4gICAgICAgICAgOiBuZXdzX3RlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzLXRlbXBsYXRlX19pdGVtJykuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pdGVtVmlldyhpdGVtLCBkYXRhW2ldKTtcclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZyYWdtZW50OyAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQXBwbGljYXRpb24gZnJvbSBcIi4vYXBwL2FwcFwiO1xyXG5cclxuY29uc3QgQXBwID0gbmV3IEFwcGxpY2F0aW9uKCk7XHJcbkFwcC5zdGFydCgpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==