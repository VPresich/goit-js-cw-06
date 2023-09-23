/*
Напиши скрипт управління формою логіна.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму,
збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
а значення поля - значенням властивості. 
Для доступу до елементів форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

*/

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSubmit);
console.log(loginForm);

function onSubmit(event) {
  // Відміняємо стандартну поведінку відправки форми
  event.preventDefault(); 

  // Одержуємо дані з контролів форми, парсінг даних
  const formData = new FormData(event.currentTarget);
  const formDataObject = {};
  formData.forEach((value, name) => {
    formDataObject[name] = value;
  });

  if (formDataObject.email && formDataObject.password) {
    // Виводимо об'єкт даних у консоль
    console.log(formDataObject);    
    // Очищуємо значення полів форми
    loginForm.reset(); 
  } 
  else {
    // Виводимо повідомлення, якщо є незаповнені поля
    alert("All fields must be filled!"); 
  }
}













