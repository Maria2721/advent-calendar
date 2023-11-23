
function closeCard() {
  location.href = "main.html";
}

document.getElementById('number1').addEventListener('click', function () {
  document.getElementById('modalWindow').style.display = "block";
  document.querySelector('.modal-content__title').textContent = 'День 1: Просмотр рождественских фильмов';
  document.querySelector('.modal-content__text').textContent = 'Верный способ создать новогоднее настроение – устроить себе вечер просмотра рождественских фильмов. Теплый плед, чашечка горячего шоколада и уютный вечер обеспечен!';
  document.querySelector('.modal-content__img').src = '../../assets/images/films/home-alone.jpg';
  document.querySelector('.modal-content__atitle').textContent = 'Больше рождественских фильмов здесь';
  document.querySelector('.modal-content__a').href = 'https://www.thevoicemag.ru/lifestyle/films/luchshie-novogodnie-filmy/';
});

document.getElementById('number2').addEventListener('click', function () {
  document.getElementById('modalWindow').style.display = "block";
  document.querySelector('.modal-content__title').textContent = 'День 2: Слепить снеговика';
  document.querySelector('.modal-content__text').textContent = 'Дай волю своему воображению в снежную зиму! Нужно подготовить три снежных кома: один большой, один средний и один маленький. Просто установите комья друг на друга от большого до самого маленького, последний станет головой снеговика.';
  document.querySelector('.modal-content__img').src = '../../assets/images/snowman.webp';
  document.querySelector('.modal-content__atitle').textContent = 'Узнать больше о том, как слепить снеговика';
  document.querySelector('.modal-content__a').href = 'https://ru.wikihow.com/%D1%81%D0%BB%D0%B5%D0%BF%D0%B8%D1%82%D1%8C-%D1%81%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B8%D0%BA%D0%B0';
});

document.getElementById('number3').addEventListener('click', function () {
  document.getElementById('modalWindow').style.display = "block";
  document.querySelector('.modal-content__title').textContent = 'День 3: Провести Тайного Санту';
  document.querySelector('.modal-content__text').textContent = ' Участники проекта случайным образом тасуются между собой. Каждому выпадает один человек, которому дарится подарочек, а даритель получает свой презент от совершенно другого. Никто до последнего не знает, что и кто ему подарит.';
  document.querySelector('.modal-content__img').src = '../../assets/images/santa.jpeg';
  document.querySelector('.modal-content__atitle').textContent = 'Узнать больше о том, как устроить Тайного Санту';
  document.querySelector('.modal-content__a').href = 'https://ru.wikihow.com/устроить-%22Тайного-Санту%22';
});

document.getElementById('number4').addEventListener('click', function () {
  document.getElementById('modalWindow').style.display = "block";
  document.querySelector('.modal-content__title').textContent = 'День 4: Принять ванну с аромамаслами';
  document.querySelector('.modal-content__text').textContent = ' Самое время остановиться и уделить немного времени себе. Один из самых простых и доступных способов быстро улучшить свое самочувствие и даже укрепить здоровье в домашних условиях – это ароматические ванны с эфирными маслами.';
  document.querySelector('.modal-content__img').src = '../../assets/images/bath-oil.jpg';
  document.querySelector('.modal-content__atitle').textContent = 'Лучшие эфирные масла для ванны';
  document.querySelector('.modal-content__a').href = 'https://medaboutme.ru/articles/ukhod_za_telom_8_efirnykh_masel_dlya_vanny/';
});

document.getElementById('number5').addEventListener('click', function () {
  document.getElementById('modalWindow').style.display = "block";
  document.querySelector('.modal-content__title').textContent = 'День 5: Посещение рождественской ярмарки';
  document.querySelector('.modal-content__text').textContent = ' Наступает время сказок и ожидания волшебства! Традиции празднования в каждой стране разные, но одно остается неизменным: в любом городе можно найти многолюдный праздничный базар.';
  document.querySelector('.modal-content__img').src = '../../assets/images/christmas-fairs.jpeg';
  document.querySelector('.modal-content__atitle').textContent = '10 лучших рождественских ярмарок России';
  document.querySelector('.modal-content__a').href = 'https://tonkosti.ru/%D0%96%D1%83%D1%80%D0%BD%D0%B0%D0%BB/10_%D0%BB%D1%83%D1%87%D1%88%D0%B8%D1%85_%D1%80%D0%BE%D0%B6%D0%B4%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D1%85_%D1%8F%D1%80%D0%BC%D0%B0%D1%80%D0%BE%D0%BA_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8';
});

document.getElementById('number6').addEventListener('click', function () {
  document.getElementById('modalWindow').style.display = "block";
  document.querySelector('.modal-content__title').textContent = 'День 6: Позаботься о себе';
  document.querySelector('.modal-content__text').textContent = ' Добавь маленькие короткие пятиминутки любви к себе в этот день, почувствуй себя лучше: съешь любимый фрукт, приберись на рабочем столе, сделай зарядку для глаз, обними себя и поблагодари';
  document.querySelector('.modal-content__img').src = '../../assets/images/flashlight.png';
  document.querySelector('.modal-content__atitle').textContent = 'Больше вариантов заботы о себе здесь';
  document.querySelector('.modal-content__a').href = 'https://www.b17.ru/blog/zabotaosebe100/?ysclid=lpbej9iovo975675655';
});

document.getElementById('number7').addEventListener('click', function () {
  document.getElementById('modalWindow').style.display = "block";
  document.querySelector('.modal-content__title').textContent = 'День 7: Подведите итоги года';
  document.querySelector('.modal-content__text').textContent = ' Подготовьте вопросы для подведения итогов года и ответье на них. Постарайтесь найти время и спокойное место для того, чтобы оглянуться на прожитый год и сделать выводы для себя.';
  document.querySelector('.modal-content__img').src = '../../assets/images/сhristmas_tree.png';
  document.querySelector('.modal-content__atitle').textContent = 'Примеры подведения итогов года здесь';
  document.querySelector('.modal-content__a').href = 'https://vc.ru/u/660293-julia-cores/192693-metodologiya-podvedeniya-itogov-i-planirovaniya-novogo-goda?ysclid=lpberbk1mk71488781';
});
