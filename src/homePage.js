export const createHeaderElementsHomePage = () => {
    const header = document.querySelector('header');

    const nav = document.createElement('nav');

    const buttonHome = document.createElement('button');
    buttonHome.id = 'button-home'
    buttonHome.classList.add('active');
    buttonHome.textContent = 'Início';

    const buttonMenu = document.createElement('button');
    buttonMenu.id = 'button-menu';
    buttonMenu.textContent = 'Menu';

    const buttonAbout = document.createElement('button');
    buttonAbout.id = 'button-about';
    buttonAbout.textContent = 'Sobre';

    nav.append(
        buttonHome,
        buttonMenu,
        buttonAbout,
    );

    header.appendChild(nav);
};

export const createrMainElementsHomePage = () => {
    // ELEMENTOS DO MAIN
    const main = document.querySelector('main');
    const div = document.createElement('div');
    div.classList.add('container-content-home');
    const p = document.createElement('p');

    p.textContent = 'Bem-vindo ao nosso restaurante, onde cada prato é preparado com carinho, sabor e ingredientes frescos. Aqui, acreditamos que uma boa refeição vai além da comida: é uma experiência que reúne pessoas, histórias e momentos inesquecíveis';

    div.appendChild(p);
    main.appendChild(div);
};

export const createFooterElementsHomePage = () => {
    // ELEMENTOS DO FOOTER
    const footer = document.querySelector('footer');
    const footerP = document.createElement('p');
    footerP.innerHTML = '&copy;2026 Desenvolvido por: Fábio Tomás Alberto Naene';

    const address = document.createElement('address');
    const addressP = document.createElement('p');
    addressP.textContent = 'Email: fabiotomasnaene@gmail.com';

    address.append(footerP, addressP);
    footer.appendChild(address);
};