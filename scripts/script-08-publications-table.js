//Cоздание таблиы публикаций

// Импорт с другого модуля
import publications from "./data/publications.js";
console.log(publications);

// Структура данных
// const publication = {
//     number: 6,
//     title: "Пакет прикладних программ МЕТЛИН-ПЭВМ",
//     type: "друк.",
//     where: "Журн. Кибернетика и системный анализ, 1993,  № 5.- С. 79 - 91.",
//     volume: 1.0,
//     coauthors: "Пшеничный Б.Н., Соболенко Л.А.,Сосновский А.А. Шульженко Ю.В."
// };
// Пример разметки
/*
table class="publication-table js-publication-table">
    <thead class="head-table">
        <tr class="thead-row-table">
        <th class="telem-number">№</th>
        <th class="telem-title">Title</th>
        <th class="telem-type">Type</th>
        <th class="telem-where">Where</th>
        <th class="telem-volume">Volume</th>
        <th class="telem-authors">Co-authors</th>
        </tr>
    </thead>
    <tbody class=>
        <tr class="tbody-row-table">
            <td class="telem-number"></td>
            <td class="telem-title"></td>
            <td class="telem-type"></td>
            <td class="telem-where"></td>
            <td class="telem-volume"></td>
            <td class="telem-authors"></td>
        </tr>
    </tbody>
</table>
*/
const publ = publications[0];
console.log(publ);

const makePublicationTblRowMarkUp = (publication) => {
    const { number, title, type, where, volume, coauthors } = publication;   
    
    return `<tr class="tbody-row-table">
        <td class="telem-number">${number}</td>
        <td class="telem-title">${title}</td>
        <td class="telem-type">${type}</td>
        <td class="telem-where">${where}</td>
        <td class="telem-volume">${volume}</td>
        <td class="telem-authors">${coauthors}</td>
    </tr>`;
}

const makePublicationTblRowsMarkUp =
    publications.map(makePublicationTblRowMarkUp).join('');

// console.log(makePublicationTblRowsMarkUp);
document.querySelector('.js-publication-table').insertAdjacentHTML("beforeend", makePublicationTblRowsMarkUp);