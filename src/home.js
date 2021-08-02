const home = (function() {
    function homeCreator() {
        let container = document.querySelector('.container');
        let homeDiv = document.createElement('div');
        homeDiv.className = 'divs';
        homeDiv.id = 'homeDiv';

        let heading = document.createElement('h1');
        heading.innerText = 'Food palace';

        let para1 = document.createElement('p');
        para1.innerText = 'Best Pizza in your country \n Made with passion since 1908';
        
        homeDiv.appendChild(heading);
        homeDiv.appendChild(para1);
        container.appendChild(homeDiv);
    }

    return {
        homeCreator: homeCreator,
    }
})();

export let homeCreator = home.homeCreator;