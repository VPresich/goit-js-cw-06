// Создание элемента списка и доавление его в существующий список
/*
<ul class="navigation">
    <li class="navigation-item">
      <a class="navigation-item-link" href="./index.html">About us</a>
    </li>
    <li class="navigation-item">
      <a class="navigation-item-link" href="./portfolio.html"
        >Portfolio</a
      >
    </li>
    <li class="navigation-item">
      <a class="navigation-item-link" href="./contacts.html"
        >Contacts</a
      >
    </li>
</ul>

<button class="magic-button js-create-elem-btn" type="button">
  Create element
</button>
*/
const newListItemLink = "./cabinet.html";

const createElementBtn = document.querySelector('.js-create-elem-btn');
createElementBtn.addEventListener('click', onCreateElementBtnClick);

function onCreateElementBtnClick() {
  // Добавляет элемент списка, если такового нет 
  if (document.querySelector(`.navigation-item-link[href="${newListItemLink}"]`)) {
    return;
  }

  const listItemRef = document.createElement("li"); 
  listItemRef.classList.add("navigation-item");
  
  const listItemLinkRef = document.createElement("a");
  listItemLinkRef.classList.add("navigation-item-link");
  listItemLinkRef.textContent = 'Cabinet';
  listItemLinkRef.href = newListItemLink;

  listItemRef.appendChild(listItemLinkRef);
  console.log(listItemRef);

  const navigationListRef = document.querySelector(".navigation");
  // Последний элемент
  navigationListRef.appendChild(listItemRef);

  // Первый элемент
  // navigationListRef.insertBefore(listItemRef, navigationListRef.firstElementChild);
}






