const contact = (function() {
    function contactCreator() {
        let container = document.querySelector('.container');
        let contactDiv = document.createElement('div');
        contactDiv.className = 'divs';

        let heading = document.createElement('h1');
        heading.innerText = 'Contact Us';

        let para1 = document.createElement('p');
        para1.innerText = 'Phone: 123 456 789 \n Hollywood Boulevard 42, Los Angeles, USA';

        contactDiv.appendChild(heading);
        contactDiv.appendChild(para1);
        container.appendChild(contactDiv);
    }

    return {
        contactCreator: contactCreator,
    }
})();

export let contactCreator = contact.contactCreator;