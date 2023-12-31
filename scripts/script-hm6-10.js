"use strict";
/*
Напиши скрипт створення і очищення колекції елементів. 
Користувач вводить кількість елементів в input і натискає кнопку Створити,
після чого рендериться колекція.
Натисненням на кнопку Очистити, колекція елементів очищається.
 <div id="controls">
    <input type="number" min="1" max="100" step="1" id="input-number" />
    <button type="button" data-create>Create</button>
    <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Створи функцію createBoxes(amount), яка приймає один параметр - число. 
Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. 
Використовуй готову функцію getRandomHexColor для отримання кольору.
*/
const refs = {
    inputNumber: document.querySelector('#input-number'),
    createButton: document.querySelector('[data-create]'),
    destroyButton: document.querySelector('[data-destroy]'),
    boxesContainer: document.querySelector('#boxes')
}

refs.createButton.addEventListener('click', onCreateButtonClick);
refs.destroyButton.addEventListener('click', onDestroyButtonClick);
refs.createButton.classList.add('btn-styles');
refs.destroyButton.classList.add('btn-styles');


function createBoxes(amount) {
  const baseSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = baseSize + i * 10;
    const divRef = document.createElement('div');
    divRef.style.width = `${size}px`;
    divRef.style.height = `${size}px`;
    divRef.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(divRef);
  }
    console.log(fragment);
    refs.boxesContainer.appendChild(fragment);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onCreateButtonClick() {
    const amount = Number(refs.inputNumber.value);
    console.log(amount);
    createBoxes(amount);
}

function onDestroyButtonClick() {
  refs.boxesContainer.innerHTML = '';
}