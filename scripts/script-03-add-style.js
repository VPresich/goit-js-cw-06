
const accentBtn = document.querySelector('.js-accent-btn');

accentBtn.addEventListener('click', onAccentButtonClick);

const currentPageUrl = "./portfolio.html";

function onAccentButtonClick() {    
    
    //Получение ссылки на все элементы с таким селектором через document
    //const menuNavRef = document.querySelector('.navigation');
    // console.log(menuNavRef);
    
    //Получение ссылки на все элементы с таким селектором через menuNavRef
    //const menuNavItemLinksRef = menuNavRef.querySelectorAll('.navigation-item-link');
    // console.log(menuNavItemLinksRef);

    // Добавление класса
    // menuNavItemLinksRef[0].classList.add('navigation-item-link-current'); 
    // console.log(menuNavItemLinksRef);

    // Удаление класса
    // menuNavItemLinksRef[0].classList.remove('navigation-item-link-current'); 
    
    // Замена класса
    // if (menuNavItemLinksRef[0].classList.contains('navigation-item-link-current')) {
    //     menuNavItemLinksRef[0].classList.remove('navigation-item-link', 'new-class'); 
    // }
    
    // Добавление, если нет. Удаление, если есть
    const selector = `.navigation-item-link[href="${currentPageUrl}"]`;
    console.log(selector);

    const menuItemLinkPortfolio = document.querySelector(`.navigation-item-link[href="${currentPageUrl}"]`);
    console.log(menuItemLinkPortfolio);
    menuItemLinkPortfolio.classList.toggle('navigation-item-link-current'); 
}