"use strict";

// Получение ссылки на все єлементы на нажатие кнопки
const magicBtn = document.querySelector('.js-magic-btn');
console.dir(magicBtn);

magicBtn.addEventListener('click', onMagickButtonClick);

// magicBtn.addEventListener('click', () => { 
//     console.log("This is from Magic Button");
//     // Получение ссылки (до первого совпадения сверху)
//     const menuNavRef = document.querySelector('.navigation');
//     console.dir(menuNavRef);

//     //Получение ссылки на все єлементы с таким селектором через document
//     const menuItemsRef = document.querySelectorAll('.navigation-item');
//     console.log(menuItemsRef);

//     //Получение ссылки на все єлементы с таким селектором через menuNavRef
//     const menuNavItemsRef = menuNavRef.querySelectorAll('.navigation-item');
//     console.log(menuNavItemsRef);

//     // Получение ссылки на все єлементы через специфичный селектор document
//     const menuNavSpecificItemsRef = document.querySelectorAll('.navigation > .navigation-item');
//     console.log(menuNavSpecificItemsRef);
// })
 
function onMagickButtonClick() {
    console.log("This is from Magic Button");
    // Получение ссылки (до первого совпадения сверху)
    const menuNavRef = document.querySelector('.navigation');
    console.dir(menuNavRef);

    //Получение ссылки на все єлементы с таким селектором через document
    const menuItemsRef = document.querySelectorAll('.navigation-item');
    console.log(menuItemsRef);

    //Получение ссылки на все єлементы с таким селектором через menuNavRef
    const menuNavItemsRef = menuNavRef.querySelectorAll('.navigation-item');
    console.log(menuNavItemsRef);

    // Получение ссылки на все єлементы через специфичный селектор document
    const menuNavSpecificItemsRef = document.querySelectorAll('.navigation > .navigation-item');
    console.log(menuNavSpecificItemsRef);
}