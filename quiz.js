const quizData = [
    {
        question: 'Как часто вы пользуетесь услугами интернет-торговли?',
        a: 'Почти все покупки делаю в интернет-магазинах или на маркет-плейсах',
        b: 'Часто, почти каждый день',
        c: '2-3 раза в неделю',
        d: 'Раз в неделю',
        e: 'Раз в месяц',
        f: 'По мере необходимости',
        g: 'Другое:',
    },
    {
        question: 'Какой ассортимент приобретаете с помощью интернет – торговли?',
        a: 'Только не продовольственные товары',
        b: 'Только продовольственные товары',
        c: 'Как продовольственные, так и не продовольственные товары',
    },
    {
        question: 'Ассортимент каких продовольственных товаров заказываете?',
        a: 'Молочные товары',
        b: 'Хлебобулочные товары',
        c: 'Бакалея',
        d: 'Мясо и мясные товары',
        e: 'Рыбу и рыбные товары',
        f: 'Кондитерские изделия',
        g: 'Соки, воды',
        h: 'Алкоголь',
        i: 'Овощи',
        j: 'Фрукты',
    },
    {
        question: 'Ассортимент каких непродовольственных товаров заказываете?',
        a: 'Одежда',
        b: 'Обувь',
        c: 'Косметика',
        d: 'Парфюмерия',
        e: 'Бытовая химия',
        f: 'Спортивные товары',
        g: 'Мебель',
        h: 'Канцелярские принадлежности',
        i: 'Сумки. кожгалантерея',
        j: 'Детские товары ',
        k: 'Товары для дома',
        m: 'Электроника',
    },
    {
        question: 'Каков объем покупок в денежном выражении (средняя цена одной покупки)?',
        a: 'До 1 тыс. руб.',
        b: '1-3 тыс. руб.',
        c: '5 тыс. руб. и более',
        d: 'Другое:',
    },
    {
        question: 'Какие  способы оплаты используете?',
        a: 'Оплата картой банка',
        b: 'Оплата наличными',
        c: 'Электронный кошелек',
        d: 'Оплата покупки с наложенным платежом',
        e: 'Другое:',
    },
    {
        question: 'На каких электронных площадках чаще всего делаете покупки?',
        a: 'Ozon',
        b: 'WildBerris',
        c: 'KazanExpress',
        d: 'Lamoda',
        e: 'Яндекс.Маркет',
        f: 'AliExpress',
        g: 'Другое:',
    },
    {
        
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

let currentQuiz = 0;
let answer = undefined;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuiz++;
}

function getSelected() {
    const answerEls = document.querySelectorAll('.answer');

    answerEls.forEach((answerEl) => {
        if (answer.checked) {
            answer = answerEl.id
        }
    });
}

submitButton.addEventListener('click', () => {
    currentQuiz++;

    getSelected();

    if (currentQuiz < quizData.length) {

    loadQuiz();
    
    } else {
        alert('Вы закончили!')
    }
});