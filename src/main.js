//* utils 

function createPages(info, container){
    
    info.forEach(item => {
        const pageContainer = document.createElement('div');
        pageContainer.classList.add('destination')

        const pageTitle = document.createElement('H2');
        pageTitle.classList.add('destination-title')
        const placePage = document.createElement('span')
        //  placePage.document.crea

        const figure = document.createElement('figure')
        const planetImg = document.createElement('img');
        planetImg.setAttribute('alt', item.title);
        planetImg.setAttribute('src', item.planet);
        figure.appendChild(planetImg);

        pageTitle.appendChild(placePage);
        

    })
}