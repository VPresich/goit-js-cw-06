// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод
// document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

// Функція для створення одного li 
const makeIngredientRef = (ingredient) => {
  const listItemRef = document.createElement("li");
  listItemRef.textContent = ingredient;
  listItemRef.classList.add("item-list");
  return listItemRef;
};

// Створення елементів li з масиву ingredients
const itemsRef = ingredients.map(makeIngredientRef);

// Додавання елементів li в список
ingredientsRef.append(...itemsRef);




