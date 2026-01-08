import carneAdovada from './images/CarneAdovada.webp';
import CarneAsadaMarinade from './images/CarneAsadaMarinade.webp';
import CarneEnSuJugo from './images/CarneEnSuJugo.webp';
import CarneGuisada from './images/CarneGuisada.webp';

export const createMenuPageElements = () => {
    const main = document.querySelector('main');

    const containerContentMenu = document.createElement('div');
    containerContentMenu.classList.add('container-menu-content');

    const containerCards = document.createElement('div');
    containerCards.classList.add('container-cards');

    containerContentMenu.appendChild(containerCards);
    main.appendChild(containerContentMenu);

    // CARD 1
    const card01 = document.createElement('div');
    card01.classList.add('card');

    const cardImg01 = document.createElement('div');
    cardImg01.classList.add('card-img');
    const img01 = document.createElement('img');
    img01.src = carneAdovada;
    img01.alt = 'carne Adovada';
    img01.title = 'carne Adovada';

    const cardContent01 = document.createElement('div');
    cardContent01.classList.add('card-content');
    const p01 = document.createElement('p');
    p01.textContent = 'Esta é uma receita maravilhosa de Carne Adovada, que derrete na boca. Minha família adora e tenho certeza de que você também vai adorar.';

    cardImg01.appendChild(img01);
    cardContent01.appendChild(p01);
    card01.append(cardImg01, cardContent01);

    // CARD 2
    const card02 = document.createElement('div');
    card02.classList.add('card');

    const cardImg02 = document.createElement('div');
    cardImg02.classList.add('card-img');
    const img02 = document.createElement('img');
    img02.src = CarneAsadaMarinade;
    img02.alt = 'Carne Asada Marinda';
    img02.title = 'Carne Asada Marinda';

    const cardContent02 = document.createElement('div');
    cardContent02.classList.add('card-content');
    const p02 = document.createElement('p');
    p02.textContent = 'Esta marinada para carne assada é repleta de ingredientes deliciosos, como: Suco de frutas, Molho de soja, Temperos e Especiarias, Pimenta chipotle e Azeite de oliva.';

    cardImg02.appendChild(img02);
    cardContent02.appendChild(p02);
    card02.append(cardImg02, cardContent02);

    // CARD 3
    const card03 = document.createElement('div');
    card03.classList.add('card');

    const cardImg03 = document.createElement('div');
    cardImg03.classList.add('card-img');
    const img03 = document.createElement('img');
    img03.src = CarneEnSuJugo;
    img03.alt = 'carne en su jugo';
    img03.title = 'carne en su jugo';

    const cardContent03 = document.createElement('div');
    cardContent03.classList.add('card-content');
    const p03 = document.createElement('p');
    p03.textContent = 'Carne en su jugo é um prato típico de Guadalajara. Pequenos pedaços de bife de flanco são cozidos no próprio suco e depois misturados com feijão inteiro e bacon crocante em pedaços.';

    cardImg03.appendChild(img03);
    cardContent03.appendChild(p03);
    card03.append(cardImg03, cardContent03);

    // CARD 4
    const card04 = document.createElement('div');
    card04.classList.add('card');

    const cardImg04 = document.createElement('div');
    cardImg04.classList.add('card-img');
    const img04 = document.createElement('img');
    img04.src = CarneGuisada;
    img04.alt = 'carne guisada';
    img04.title = 'carne guisada';

    const cardContent04 = document.createElement('div');
    cardContent04.classList.add('card-content');
    const p04 = document.createElement('p');
    p04.textContent = 'Carne guisada é a refeição porto-riquenha perfeita. Em qualquer lugar que você vá, este é um dos pratos principais servidos. Esta receita fica ótima servida sobre arroz cozido no vapor.';

    cardImg04.appendChild(img04);
    cardContent04.appendChild(p04);
    card04.append(cardImg04, cardContent04);

    containerCards.append(card01,
        card02,
        card03,
        card04
    );
};