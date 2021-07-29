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
    var para1 = document.createElement('p');
    para1.innerText = 'Phone: 123 456 789 \n Hollywood Boulevard 42, Los Angeles, USA';
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
    var br = document.createElement('br');
    var para1 = document.createElement('p');
    para1.innerText = 'Best Pizza in your country \n Made with passion since 1908';
    var img = document.createElement('img');
    img.setAttribute('src', '../dist/pexels-vincent-rivaud-2147491.jpg');
    img.className = 'homeImage';
    para1.appendChild(img);
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
/* harmony export */   "para2": () => (/* binding */ para2)
/* harmony export */ });
var menu = function () {
  function para2() {
    var container = document.querySelector('.container');
    var para2 = document.createElement('p');
    para2.className = 'para';
    para2.innerText = 'MENU';
    container.appendChild(para2);
  }

  return {
    para2: para2
  };
}();

var para2 = menu.para2;

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

(0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactCreator)(); // const tabSwitching = (function() {
//     let homeButton = document.querySelector('.home');
//     let menuButton = document.querySelector('.menu');
//     let contactButton = document.querySelector('.contact');
//     function homeButtonFunction() {
//         homeButton.addEventListener('click', function() {
//             let para = document.querySelector('.para');
//             para.parentNode.removeChild(para);
//             para1();
//        });
//     }
//     function menuButtonFunction() {
//         menuButton.addEventListener('click', function() {
//             let para = document.querySelector('.para');
//             para.parentNode.removeChild(para);
//             para2();
//         });
//     }
//     function contactButtonFunction() {
//         contactButton.addEventListener('click', function() {
//             let para = document.querySelector('.para');
//             para.parentNode.removeChild(para);
//             para3();
//         });
//     }
//     return {
//         homeButtonFunction: homeButtonFunction,
//         menuButtonFunction: menuButtonFunction,
//         contactButtonFunction: contactButtonFunction
//     }
// })();
// para1();
// tabSwitching.homeButtonFunction();
// tabSwitching.menuButtonFunction();
// tabSwitching.contactButtonFunction();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map