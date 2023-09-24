const colorPickerOptions = [
    { label: 'red',     color: '#f51e1e'},
    { label: 'blue',    color: '#5d0bf5'},
    { label: 'green',   color: '#59810f'},
    { label: 'violet',  color: '#513d75'},
    { label: 'pink',    color: '#f724ec'},
    { label: 'lgreen',  color: '#aaf51e'},
    { label: 'yellow',  color: '#f5ca0b'}
];

const option = colorPickerOptions[3];

// Создание одной кнопки
console.log(option);
const buttonEl = document.createElement('button');
buttonEl.type = 'button';
buttonEl.classList.add('color-picker-btn');
buttonEl.textContent = option.label;
buttonEl.style.backgroundColor = option.color;
console.log(buttonEl);

// 
const colorPickerContainerRef = document.querySelector('.js-color-picker');
// colorPickerContainerRef.appendChild(buttonEl);

// Создание массива кнопок - 1й способ
//const elements = [];
// for (const option of colorPickerOptions)
// {    
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker-btn');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     elements.push(buttonEl);
// }

// Создание массива кнопок - 2й способ
// const elements = colorPickerOptions.map(option => {    
//         const buttonEl = document.createElement('button');
//         buttonEl.type = 'button';
//         buttonEl.classList.add('color-picker-btn');
//         buttonEl.textContent = option.label;
//         buttonEl.style.backgroundColor = option.color;
//
//     return buttonEl;
// }
// );

// В виде функции
const makeColorPickerOptions = (options) => {
    return options.map(({ label, color}) => {    
        const buttonEl = document.createElement('button');
        buttonEl.type = 'button';
        buttonEl.classList.add('color-picker-btn');
        buttonEl.textContent = label;
        buttonEl.style.backgroundColor = color;

        return buttonEl;
    });
}

const elements = makeColorPickerOptions(colorPickerOptions);
console.log(elements);

colorPickerContainerRef.append(...elements);