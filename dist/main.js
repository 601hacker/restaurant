/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactCreator": () => (/* binding */ contactCreator)
/* harmony export */ });
var contact = function () {
  function contactCreator() {
    var container = document.querySelector('.container');
    var contactDiv = document.createElement('div');
    contactDiv.className = 'divs';
    var heading = document.createElement('h1');
    heading.innerText = 'Contact Us';
    var para1 = document.createElement('p');
    para1.innerText = 'Phone: 123 456 789 \n Hollywood Boulevard 42, Los Angeles, USA';
    contactDiv.appendChild(heading);
    contactDiv.appendChild(para1);
    container.appendChild(contactDiv);
  }

  return {
    contactCreator: contactCreator
  };
}();

var contactCreator = contact.contactCreator;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeCreator": () => (/* binding */ homeCreator)
/* harmony export */ });
var home = function () {
  function homeCreator() {
    var container = document.querySelector('.container');
    var homeDiv = document.createElement('div');
    homeDiv.className = 'divs';
    homeDiv.id = 'homeDiv';
    var heading = document.createElement('h1');
    heading.innerText = 'Food palace';
    var para1 = document.createElement('p');
    para1.innerText = 'Best Pizza in your country \n Made with passion since 1908';
    homeDiv.appendChild(heading);
    homeDiv.appendChild(para1);
    container.appendChild(homeDiv);
  }

  return {
    homeCreator: homeCreator
  };
}();

var homeCreator = home.homeCreator;

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuCreator": () => (/* binding */ menuCreator)
/* harmony export */ });
var menu = function () {
  function menuCreator() {
    var container = document.querySelector('.container');
    var menuDiv = document.createElement('div');
    menuDiv.className = 'divs';
    menuDiv.id = 'menuDiv';
    var mainHeading = document.createElement('h1');
    mainHeading.innerText = 'Menu';
    var subHeading1 = document.createElement('h1');
    subHeading1.innerText = 'Beverages';
    var coffeeDiv = document.createElement('div');
    var coffeeHeading = document.createElement('h3');
    coffeeHeading.innerText = 'Expresso';
    var coffeePara = document.createElement('p');
    coffeePara.innerText = 'Hot coffee with a flower on top!';
    var coffeePrice = document.createElement('h3');
    coffeePrice.innerText = '2$';
    var coffeeImg = document.createElement('img');
    coffeeImg.setAttribute('src', '../dist/pexels-chevanon-photography-302899.jpg');
    coffeeDiv.appendChild(coffeeHeading);
    coffeeDiv.appendChild(coffeePara);
    coffeeDiv.appendChild(coffeePrice);
    coffeeDiv.appendChild(coffeeImg);
    var subHeading2 = document.createElement('h1');
    subHeading2.innerText = 'Lunch';
    var omeletteDiv = document.createElement('div');
    var omeletteHeading = document.createElement('h3');
    omeletteHeading.innerText = 'Omelette and mashed Avocado';
    var omelettePara = document.createElement('p');
    omelettePara.innerText = 'Hot omelette with avocados!';
    var omelettePrice = document.createElement('h3');
    omelettePrice.innerText = '2$';
    var omeletteImg = document.createElement('img');
    omeletteImg.setAttribute('src', '../dist/pexels-daria-shevtsova-704569 (1).jpg');
    omeletteDiv.appendChild(omeletteHeading);
    omeletteDiv.appendChild(omelettePara);
    omeletteDiv.appendChild(omelettePrice);
    omeletteDiv.appendChild(omeletteImg);
    var pancakeDiv = document.createElement('div');
    var pancakeHeading = document.createElement('h3');
    pancakeHeading.innerText = 'Pancakes and Blueberries';
    var pancakePara = document.createElement('p');
    pancakePara.innerText = 'Hot omelette with avocados!';
    var pancakePrice = document.createElement('h3');
    pancakePrice.innerText = '2$';
    var pancakeImg = document.createElement('img');
    pancakeImg.setAttribute('src', '../dist/pexels-daria-shevtsova-704569.jpg');
    pancakeDiv.appendChild(pancakeHeading);
    pancakeDiv.appendChild(pancakePara);
    pancakeDiv.appendChild(pancakePrice);
    pancakeDiv.appendChild(pancakeImg);
    menuDiv.appendChild(mainHeading);
    menuDiv.appendChild(subHeading1);
    menuDiv.appendChild(coffeeDiv);
    menuDiv.appendChild(subHeading2);
    menuDiv.appendChild(omeletteDiv);
    menuDiv.appendChild(pancakeDiv);
    container.appendChild(menuDiv);
  }

  return {
    menuCreator: menuCreator
  };
}();

var menuCreator = menu.menuCreator;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");


 // homeCreator();
// contactCreator();
// menuCreator();

var tabSwitching = function () {
  var homeButton = document.querySelector('.home');
  var menuButton = document.querySelector('.menu');
  var contactButton = document.querySelector('.contact');

  function homeButtonFunction() {
    homeButton.addEventListener('click', function () {
      var divs = document.querySelector('.divs');
      divs.parentNode.removeChild(divs);
      (0,_home__WEBPACK_IMPORTED_MODULE_0__.homeCreator)();
    });
  }

  function menuButtonFunction() {
    menuButton.addEventListener('click', function () {
      var divs = document.querySelector('.divs');
      divs.parentNode.removeChild(divs);
      (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuCreator)();
    });
  }

  function contactButtonFunction() {
    contactButton.addEventListener('click', function () {
      var divs = document.querySelector('.divs');
      divs.parentNode.removeChild(divs);
      (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactCreator)();
    });
  }

  return {
    homeButtonFunction: homeButtonFunction,
    menuButtonFunction: menuButtonFunction,
    contactButtonFunction: contactButtonFunction
  };
}();

(0,_home__WEBPACK_IMPORTED_MODULE_0__.homeCreator)();
tabSwitching.homeButtonFunction();
tabSwitching.menuButtonFunction();
tabSwitching.contactButtonFunction();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map