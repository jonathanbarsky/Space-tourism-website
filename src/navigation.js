navHome.addEventListener('click', () => {
    location.hash = '#home';
})
navDestination.addEventListener('click', () => {
    location.hash = '#destination=';
})
navCrew.addEventListener('click', () => {
    location.hash = '#crew=';
})
navTechnology.addEventListener('click', () => {
    location.hash = 'technology=';
})

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({ location});

    if(location.hash.startsWith('#destination')){
        destinationPage();
    } else if(location.hash.startsWith('#crew')){
        crewPage();
    } else if(location.hash.startsWith('#technology')){
        technologyPage();
    } else{
        homePage();
    }
}