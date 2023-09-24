"use strict";
// Примеры получения ссылок на единичные элементы и коллекции

//Получение ссылки (до первого совпадения сверху)
const menuNavRef = document.querySelector('.navigation');
console.dir(menuNavRef);

//Получение ссылки на все элементы с таким селектором через document
const menuItemsRef = document.querySelectorAll('.navigation-item');
console.log(menuItemsRef);

//Получение ссылки на все элементы с таким селектором через menuNavRef
const menuNavItemsRef = menuNavRef.querySelectorAll('.navigation-item');
console.log(menuNavItemsRef);

// Получение ссылки на все элементы через специфичный селектор document
const menuNavSpecificItemsRef = document.querySelectorAll('.navigation > .navigation-item');
console.log(menuNavSpecificItemsRef);
