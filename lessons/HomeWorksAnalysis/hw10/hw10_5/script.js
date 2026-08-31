// #LhSfdhM3
//
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList
// зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
//     Інфу НЕ виводити в консоль, а малювати в DOM
let sessions = JSON.parse(localStorage.getItem('sessionsListNew') ?? '[]');
let currentSession = new Date().toLocaleString('uk-UA');
sessions.push(currentSession);
localStorage.setItem('sessionsListNew', JSON.stringify(sessions));
export {};
//# sourceMappingURL=script.js.map