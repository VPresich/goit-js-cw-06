const colors = [
{ hex: '#f44336', rgb: '(95, 158, 160)'},
{ hex: '#5f9ea0', rgb: '(0, 255, 255)'},
{ hex: '#00ffff', rgb: '(181, 20, 20)'},
{ hex: '#145fb5', rgb: '(20, 95, 181)'},
{ hex: '#a8b514', rgb: '(168, 181, 20)'},
{ hex: '#b5148d', rgb: '(181, 20, 141)'},
{ hex: '#19b2b7', rgb: '(25, 178, 183)'},
];

//Шаблон разметки

/* <div class="color-card">
    <div class="color-swatch" data-hex="#f44336" data-rgb="(95, 158, 160)"            
        style="background-color: #f44336 ">
    </div>
    <div class="color-swatch">
        <p>Hex: #f44336</p>
        <p>RGB: (95, 158, 160)</p>
    </div>
</div> */

function createColorCardsMarkUp(colors)
{
    return colors.map(({hex, rgb}) => {
        return `
        <div class="color-card">
            <div class="color-swatch"
                data-hex='${hex}'
                data-rgb='${rgb}'
                style="background-color: ${hex}">
            </div>
            <div class="color-meta"
                <p>Hex: ${hex}</p>
                <p>RGB: ${rgb}</p>
            </div>
        </div>
        `;
    }).join('');
}


const cardsMarkUp = createColorCardsMarkUp(colors);
// console.log(cardsMarkUp);

const cardsContainerRef = document.querySelector('.js-color-cards-container');
cardsContainerRef.insertAdjacentHTML("beforeend", cardsMarkUp);

cardsContainerRef.addEventListener('click', onCardsContainerClick);

function onCardsContainerClick(event) {
    const isColorSwatchRef = event.target.classList.contains("color-swatch");
    if (!isColorSwatchRef) {
        return;
    } 
    removeActiveCardClass();
    const swatchRef = event.target;
    const parentColorCardRef = swatchRef.closest('.color-card');
    addActiveCardClass(parentColorCardRef);    
    setBodyBgrColor(swatchRef.dataset.hex);
}

function setBodyBgrColor(color) {
    document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
    const currActiveColorCard = document.querySelector(".color-card.is-active");
    if (currActiveColorCard)
    {
        currActiveColorCard.classList.remove("is-active");         
    } 
}

function addActiveCardClass(card) {
    card.classList.add("is-active");
}