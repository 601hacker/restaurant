/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var body = document.querySelector('body');

var createButtons = function () {
  var homeButton = function homeButton() {
    var homeButton = document.createElement('button');
    homeButton.innerText = 'Home';
    body.appendChild(homeButton);
  };

  var menuButton = function menuButton() {
    var menuButton = document.createElement('button');
    menuButton.innerText = 'menu';
    body.appendChild(menuButton);
  };

  var contactButton = function contactButton() {
    var contactButton = document.createElement('button');
    contactButton.innerText = 'Contact';
    body.appendChild(contactButton);
  };

  return {
    createAllButtons: function createAllButtons() {
      homeButton();
      menuButton();
      contactButton();
    }
  };
}();

createButtons.createAllButtons();
/******/ })()
;
//# sourceMappingURL=main.js.map