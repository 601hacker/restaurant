let body = document.querySelector('body');

const createButtons = (function() {
        let homeButton = function() {
            let homeButton = document.createElement('button');
            homeButton.innerText = 'Home';
            body.appendChild(homeButton);
        }

        let menuButton = function() {
            let menuButton = document.createElement('button');
            menuButton.innerText = 'menu';
            body.appendChild(menuButton);
        }
        let contactButton = function() {
            let contactButton = document.createElement('button');
            contactButton.innerText = 'Contact';
            body.appendChild(contactButton);
        }

        return {
            createAllButtons: function() {
                homeButton();
                menuButton();
                contactButton();
            }
        }
})();

createButtons.createAllButtons();