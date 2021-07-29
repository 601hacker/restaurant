const menu = (function() {
    function para2() {
        let container = document.querySelector('.container');
        let para2 = document.createElement('p');
        para2.className = 'para';
        para2.innerText = 'MENU';
        container.appendChild(para2);
    }

    return {
        para2: para2,
    }
})();

export let para2 = menu.para2;