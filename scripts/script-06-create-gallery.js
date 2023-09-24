/// Напиши скрипт для створення галереї зображень на підставі масиву даних.
//  HTML містить список ul.gallery.
// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>,

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ingredientsRef = document.querySelector(".gallery");

// Функція для створення одного li 
const makeImgRef = ({ url, alt }) => {
  
  const listItemRef = document.createElement("li");
  listItemRef.classList.add("gallery-item", "list");
  
  const imgRef = document.createElement("img");
  imgRef.classList.add("gallery-img");
  imgRef.src = url;
  imgRef.alt = alt; 

  listItemRef.appendChild(imgRef);
  console.log(listItemRef);
  return listItemRef;
};

// Створення елементів li з масиву images
const elementsRef = images.map(makeImgRef);

// Додавання елементів li в список
ingredientsRef.append(...elementsRef);




