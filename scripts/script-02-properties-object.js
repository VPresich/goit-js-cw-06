"use strict";

// Получение ссылок на все кнопки внутри js-section-hero-buttons
const heroButtonsRef = document.querySelectorAll('.js-section-hero-buttons button');
console.log(heroButtonsRef);
// Парсинг dataset
heroButtonsRef.forEach(heroBtn => { 
    console.log(heroBtn.dataset.action);

    // или через getAttribute
    console.log(heroBtn.getAttribute('data-action'));
});

// Получение свойств элементов 
const heroImgRef = document.querySelector('.js-section-hero-image');
console.log(heroImgRef);
console.log(heroImgRef.src);

//Получение ссылки на title Hero
const heroTitlerRef = document.querySelector('.js-section-hero-title');
console.log(heroTitlerRef);
console.log(heroTitlerRef.textContent);

const actionBtn = heroButtonsRef[0].getAttribute('data-action');
console.log(actionBtn);

const removeButton = document.querySelector('[data-action="remove"]');
console.log(removeButton);
removeButton.addEventListener('click', onRemoveBtnClick);

const addButton = document.querySelector('[data-action="add"]');
console.log(addButton);
addButton.addEventListener('click', onAddBtnClick);

const changeButton = document.querySelector('[data-action="change"]');
console.log(changeButton);
changeButton.addEventListener('click', onChangeBtnClik);
    
function onRemoveBtnClick() {    
    console.log("Это обработчик кнопки Remove");
    heroTitlerRef.textContent = "";
    // Для удаления атрибута - метод removeAttribute('');
    // Для проверки наличия атрибута - метод hasAttribute('');
}

function onAddBtnClick() {   
    console.log("Это обработчик кнопки Add");
    heroTitlerRef.textContent = "Про нас";    
}

function onChangeBtnClik() {  
    console.log("Это обработчик кнопки Change"); 
    heroTitlerRef.textContent = "Про нас";
    heroImgRef.alt = "Office";

    // Получение атрибутов через getAttribute()
    console.log(heroImgRef.getAttribute('src'));
}