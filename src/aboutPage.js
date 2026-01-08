function createAboutPageElements() {
    const main = document.querySelector('main');

    const containerAboutContent = document.createElement('div');
    containerAboutContent.classList.add('container-about-content');

    const p = document.createElement('p');
    p.textContent = 'Somos um restaurante apaixonado pela boa gastronomia. A nossa missão é oferecer pratos deliciosos, feitos com ingredientes selecionados e receitas autênticas, criando um ambiente acolhedor para toda a família e amigos.';

    containerAboutContent.appendChild(p);
    main.appendChild(containerAboutContent);
};

export { createAboutPageElements };