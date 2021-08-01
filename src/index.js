import { homeCreator } from "./home";
import { menuCreator } from "./menu";
import { contactCreator } from "./contact";

// homeCreator();
// contactCreator();
// menuCreator();

const tabSwitching = (function() {
    let homeButton = document.querySelector('.home');
    let menuButton = document.querySelector('.menu');
    let contactButton = document.querySelector('.contact');

    function homeButtonFunction() {
        homeButton.addEventListener('click', function() {
            let divs = document.querySelector('.divs');
            divs.parentNode.removeChild(divs);
            homeCreator();
       });
    }
    
    function menuButtonFunction() {
        menuButton.addEventListener('click', function() {
            let divs = document.querySelector('.divs');
            divs.parentNode.removeChild(divs);
            menuCreator();
        });
    }
    
    function contactButtonFunction() {
        contactButton.addEventListener('click', function() {
            let divs = document.querySelector('.divs');
            divs.parentNode.removeChild(divs);
            contactCreator();
        });
    }

    return {
        homeButtonFunction: homeButtonFunction,
        menuButtonFunction: menuButtonFunction,
        contactButtonFunction: contactButtonFunction
    }
})();

homeCreator();

tabSwitching.homeButtonFunction();
tabSwitching.menuButtonFunction();
tabSwitching.contactButtonFunction();
