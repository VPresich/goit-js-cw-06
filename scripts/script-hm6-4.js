// Лічильник складається зі спану і кнопок, які по кліку
// повинні збільшувати і зменшувати його значення на одиницю.
/*

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

*/

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.

// Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let currentValue = 0;

const counterValueRef = document.querySelector("#value");

const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener("click", onDecrementBtnClick);
decrementBtn.classList.add("action-btn"); //for formating

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener("click", onIncrementBtnClick);
incrementBtn.classList.add("action-btn"); //for formating

function onDecrementBtnClick(event) {
  currentValue -= 1;
  counterValueRef.textContent = currentValue;
}

function onIncrementBtnClick() {
  currentValue += 1;
  counterValueRef.textContent = currentValue;
}














