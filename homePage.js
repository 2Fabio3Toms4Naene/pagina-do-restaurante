export const createrHeaderElements = () => {
    // ELEMENTOS DO HEADER
    const header = document.querySelector('header');

    const nav = document.createElement('nav');

    const buttonHome = document.createElement('button');
    buttonHome.classList.add('button-home');
    buttonHome.textContent = 'Início';

    const buttonMenu = document.createElement('button');
    buttonMenu.classList.add('button-menu');
    buttonMenu.textContent = 'Menu';

    const buttonAbout = document.createElement('button');
    buttonAbout.classList.add('button-about');
    buttonAbout.textContent = 'Sobre';

    nav.append(
        buttonHome,
        buttonMenu,
        buttonAbout,
    );
    header.appendChild(nav);

    document.body.prepend(header)

    // ELEMENTOS DO MAIN
    const main = document.querySelector('main');
    const div = document.createElement('div');
    div.classList.add('container-content-home');
    const p = document.createElement('p');

    p.textContent = 'Bem-vindo ao nosso restaurante, onde cada prato é preparado com carinho, sabor e ingredientes frescos. Aqui, acreditamos que uma boa refeição vai além da comida: é uma experiência que reúne pessoas, histórias e momentos inesquecíveis';

    div.appendChild(p);
    main.appendChild(div);
    document.body.append(main);

    // ELEMENTOS DO FOOTER
    const footer = document.querySelector('footer');
    const footerP = document.createElement('p');
    footerP.innerHTML = '&copy;2026 Desenvolvido por: Fábio Tomás Alberto Naene';

    footer.appendChild(footerP);
    document.body.append(footer);
};