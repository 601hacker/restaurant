import { homeCreator } from "./home";
import { para2 } from "./menu";
import { contactCreator } from "./contact";

// homeCreator();
contactCreator();

// const tabSwitching = (function() {
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
