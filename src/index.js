import '../src/styles.css';
import { createHeaderElementsHomePage,
    createrMainElementsHomePage,
    createFooterElementsHomePage
} from './homePage.js';
import { createAboutPageElements } from './aboutPage.js';  
import { createMenuPageElements } from './menuPage.js';  


createHeaderElementsHomePage();
createrMainElementsHomePage();
createFooterElementsHomePage();

const main = document.querySelector('main');
const buttonHome = document.querySelector('#button-home');
const buttonMenu = document.querySelector('#button-menu');
const buttonAbout = document.querySelector('#button-about');
const buttons = document.querySelectorAll('header nav button');

function setActiveButton() {
    buttons.forEach(button => {
        button.classList.remove('active');
    });
};

buttonHome.addEventListener('click', (event) => {
    main.innerHTML = ''; 
    setActiveButton();
    buttonHome.classList.add('active');
    createrMainElementsHomePage();
});

buttonMenu.addEventListener('click', (event) => {
    main.innerHTML = ''; 
    setActiveButton();
    buttonMenu.classList.add('active');
    createMenuPageElements();
});

buttonAbout.addEventListener('click', (event) => {
    main.innerHTML = ''; 
    setActiveButton();
    buttonAbout.classList.add('active');
    createAboutPageElements();
});