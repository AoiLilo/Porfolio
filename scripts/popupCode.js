const popupData = [
    {
        title: 'Понятность кода',
        text: 'Простейшая и понятная структура кода в которой разберется даже ребенок, а также его поддержка и разъеснительные работы для человека, который в последствие будет ответственен за верстку.',
    }, {
        title: 'Современные методы верстки',
        text: 'Современные методы верстки, которые включают в себя технологии FlexBox и Grid. Идеальная возможность для того, чтобы сделать наиболее гибкий и понятный сайт для потребителя.',
    }, {
        title: 'Дизайн для вас',
        text: 'Макет дизайна создается с нуля для каждого случая, в портфолио 3 года опыта дизайнерской деятельности. А также весь дизайн полностью согласуется с заказчиком и правится, при необходимости.',
    }, {
        title: 'JS наше все',
        text: 'Благодаря JavaScritp сайт получается очень живой и интерактивный, именно то, что нужно в современных реалиях развития бизнеса и торговли.',
    }, {
        title: 'Все под ключ',
        text: 'Удобные методы оплаты, которые дают свободу и придают уверенности. Благодаря этому как заказчик, так и сам сайтодел получают только плюсы от совместной работы.',
    }, {
        title: 'Надежная защита кода',
        text: 'Код пишется отдельно под каждого клиента, автор гарантирует полную безопасность кода и не допускает повторного использования кода, поэтому каждый сайт получается уникальным.',
    }, {
        title: 'Соблюдение дедлайнов',
        text: 'Личные качества: пунктуальность, нацеленность на идею, высокая вовлеченность. Все это гарантирует высокое качество проделанной работы.',
    }, {
        title: 'Readme всегда',
        text: 'При необходимости для всех элементов верстки формируется файл с инструкциями в которых можно найти все ответы на вопросы о том, как менять сайт под себя. Также формируется и интегрируется Админ-панель.',
    }, {
        title: 'Всегда на связи',
        text: 'По поддержке вашего сайта вы можете обращаться практически 24/7 по Уральскому времени, в любой мессенджер который вам удобен, отвечаю везде в течение 5 минут',
    }
];

const titleEl = document.getElementById('title');
const textEl = document.getElementById('text');
const openBtn = document.getElementById('open');
let popupBg = document.querySelector('.popup_code_bg');
let popup = document.querySelector('.popup_code');
let openPopup = document.querySelectorAll('.open-popup');
let closePopup = document.querySelector('.close_popup');

let currentPopup = undefined;
let m = undefined;

function loadPopup() {
    switch(m) {
        case 'popupCode':
            console.log(m);
            currentPopup = 0;
            break;
        case 'popupLend':
            console.log(m);
            currentPopup = 1;
            break;
        case 'popupPers':
            console.log(m);
            currentPopup = 2;
            break;
        case 'popupJs':
            console.log(m);
            currentPopup = 3;
            break;
        case 'popupKey':
            console.log(m);
            currentPopup = 4;
            break;
        case 'popupSecure':
            console.log(m);
            currentPopup = 5;
            break;
        case 'popupDeadline':
            console.log(m);
            currentPopup = 6;
            break;
        case 'popupReadme':
            console.log(m);
            currentPopup = 7;
            break;
        case 'popupMessage':
            console.log(m);
            currentPopup = 8;
            break;
    };
    
    const currentPopupData = popupData[currentPopup];

    titleEl.innerHTML = currentPopupData.title;
    textEl.innerHTML = currentPopupData.text;
}

openPopup.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        m = button.getAttribute('About');
        loadPopup();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopup.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});