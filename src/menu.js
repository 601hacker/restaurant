const menu = (function() {
    function menuCreator() {
        let container = document.querySelector('.container');
        let menuDiv = document.createElement('div');
        menuDiv.className = 'divs';

        let mainHeading = document.createElement('h1');
        mainHeading.innerText = 'Menu';

        let subHeading1 = document.createElement('h1');
        subHeading1.innerText = 'Beverages';

        let coffeeDiv = document.createElement('div');
        let coffeeHeading = document.createElement('h3');
        coffeeHeading.innerText = 'Expresso';
        let coffeePara = document.createElement('p');
        coffeePara.innerText = 'Hot coffee with a flower on top!';
        let coffeePrice = document.createElement('h3');
        coffeePrice.innerText = '2$';
        let coffeeImg = document.createElement('img');
        coffeeImg.setAttribute('src', '../dist/pexels-chevanon-photography-302899.jpg');
        coffeeDiv.appendChild(coffeeHeading);
        coffeeDiv.appendChild(coffeePara);
        coffeeDiv.appendChild(coffeePrice);
        coffeeDiv.appendChild(coffeeImg);

        let subHeading2 = document.createElement('h1');
        subHeading2.innerText = 'Lunch'

        let omeletteDiv = document.createElement('div');
        let omeletteHeading = document.createElement('h3');
        omeletteHeading.innerText = 'Omelette and mashed Avocado';     
        let omelettePara = document.createElement('p');
        omelettePara.innerText = 'Hot omelette with avocados!';
        let omelettePrice = document.createElement('h3');
        omelettePrice.innerText = '2$';
        let omeletteImg = document.createElement('img');
        omeletteImg.setAttribute('src', '../dist/pexels-daria-shevtsova-704569 (1).jpg');
        omeletteDiv.appendChild(omeletteHeading);
        omeletteDiv.appendChild(omelettePara);
        omeletteDiv.appendChild(omelettePrice);
        omeletteDiv.appendChild(omeletteImg);

        let pancakeDiv = document.createElement('div');
        let pancakeHeading = document.createElement('h3');
        pancakeHeading.innerText = 'Pancakes and Blueberries';
        let pancakePara = document.createElement('p');
        pancakePara.innerText = 'Hot omelette with avocados!';
        let pancakePrice = document.createElement('h3');
        pancakePrice.innerText = '2$';
        let pancakeImg = document.createElement('img');
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
    }
})();

export let menuCreator = menu.menuCreator;