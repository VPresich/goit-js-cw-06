/* Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
 перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text" id="validation-input"  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
*/

const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const input = event.currentTarget;
  const requiredLength = Number(input.dataset.length);
  const currentLength = input.value.length;

  if (currentLength === requiredLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } 
  else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}











