import products from "./data/products.js";

console.log(products);


/* <article class="product">
    <h2 class="product-name"></h2>
    <p class="product-description"></p>
    <p class="product-price"></p>
</article> */

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
    priceRef.textContent = `Price: ${price}`;
    priceRef.classList.add('product-price');

    productRef.append(titleRef, descriptionRef, priceRef);

    return productRef;
}
const prodRef = makeProduct(products[0]);

const prodsRef = products.map(makeProduct);
console.log(prodsRef);

const prodsConainertRef = document.querySelector('.js-products-container');

prodsConainertRef.append(...prodsRef);
console.log(prodsConainertRef);