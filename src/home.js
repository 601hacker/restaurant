const home = (function() {
    function homeCreator() {
        let container = document.querySelector('.container');
        let homeDiv = document.createElement('div');
        homeDiv.className = 'divs';

        let br = document.createElement('br');
        let para1 = document.createElement('p');
        para1.innerText = 'Best Pizza in your country \n Made with passion since 1908';
        
        let img = document.createElement('img');
        img.setAttribute('src', '../dist/pexels-vincent-rivaud-2147491.jpg');
        img.className = 'homeImage';
        
        para1.appendChild(img);
        homeDiv.appendChild(para1);
        container.appendChild(homeDiv);
    }

    return {
        homeCreator: homeCreator,
    }
})();

export let homeCreator = home.homeCreator;