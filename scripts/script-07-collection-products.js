//Cоздание карточек продуктов

// Импорт с другого модуля
import products from "./data/products.js";
//console.log(products);

// Структура данных
// const product = {
//     name: "Сумка крос-боді Regina Notte",
//     description: "Сумка крос-боді жіноча шкіряна. Темно-жовтогаряча (RN2000000198842)",
//     price: 1947 грн,
//     available: true,
//     onSale: true,
// };
// Пример разметки
/* <article class="product">
    <h2 class="product-name"></h2>
    <p class="product-description"></p>
    <p class="product-price"></p>
</article> */

// Функция для создания одной карточки
const makeProduct = ({name, description, price}) => {
    const productRef = document.createElement('article');
    productRef.classList.add('product');

    const titleRef = document.createElement('h2');
    titleRef.textContent = name;
    titleRef.classList.add('product-name');

    const descriptionRef = document.createElement('p');
    descriptionRef.textContent = description;
    descriptionRef.classList.add('product-description');

    const priceRef = document.createElement('p');
    priceRef.textContent = `Price: ${price} грн`;
    priceRef.classList.add('product-price');

    productRef.append(titleRef, descriptionRef, priceRef);

    return productRef;
}

// Проверка создание одного єлемента
const prodRef = makeProduct(products[0]);
//console.log(prodRef);

// Тестировагие создания массива карточек через map
const prodsRef = products.map(makeProduct);
//console.log(prodsRef);

// Функция для создания карточек
// const makeProductCarts = (products) => {
//     return products.map(({name, description, price}) => {
//         const productRef = document.createElement('article');
//         productRef.classList.add('product');

//         const titleRef = document.createElement('h2');
//         titleRef.textContent = name;
//         titleRef.classList.add('product-name');

//         const descriptionRef = document.createElement('p');
//         descriptionRef.textContent = description;
//         descriptionRef.classList.add('product-description');

//         const priceRef = document.createElement('p');
//         priceRef.textContent = `Price: ${price} грн`;
//         priceRef.classList.add('product-price');

//         productRef.append(titleRef, descriptionRef, priceRef);

//         return productRef;

//     });
// }

// Функция для создания карточек c вызовом makeProduct
function makeProductCarts(products)
{
    return products.map(makeProduct);
};

    
// Тестировагие создания массива карточек через вызов функции
const cardsRef = makeProductCarts(products);
//console.log(cardsRef);

// Добавление в DOM
document.querySelector('.js-products-container').append(...cardsRef);

