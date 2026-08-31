// #bq1zkx7WP
//
// *** (подібне вже було, але...будьте уважні в другій частині)

type Session = {
    time: number;
    price: number;
};

let sessionsList: Session[] = JSON.parse(
    localStorage.getItem('sessionsList') || '[]'
);

const priceElement = document.getElementById('price') as HTMLElement;

let price: number = Number(localStorage.getItem('price')) || 100;

const currentTime: number = Date.now();

let lastSession: Session | undefined =
    sessionsList[sessionsList.length - 1];

if (!lastSession || currentTime - lastSession.time >= 10000) {
    price += 10;
}

sessionsList.push({
    time: currentTime,
    price: price
});

localStorage.setItem('price', String(price));
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

priceElement.innerText = `${price} грн`;


// #NKB0tgWIK1
//
// *** PAGINATION
//
// зробити масив на 100 об'єктів та дві кнопки prev next
//
// при завантаженні сторінки з'являються перші 10 об'єктів.
//
// При натисканні next виводяться наступні 10 об'єктів
//
// При натисканні prev виводяться попередні 10 об'єктів


type User = {
    id: number;
    name: string;
};

const users: User[] = [];

for (let i = 1; i <= 100; i++) {
    users.push({
        id: i,
        name: `User ${i}`
    });
}

const container = document.getElementById('container') as HTMLElement;
const prevButton = document.getElementById('prev') as HTMLButtonElement;
const nextButton = document.getElementById('next') as HTMLButtonElement;

let currentPage: number = 0;
const itemsPerPage: number = 10;

function showUsers(): void {

    container.innerHTML = '';

    const start: number = currentPage * itemsPerPage;
    const end: number = start + itemsPerPage;

    for (let i = start; i < end; i++) {

        const div: HTMLDivElement = document.createElement('div');

        div.innerText = `${users[i]!.id} - ${users[i]!.name}`;

        container.appendChild(div);
    }
}

nextButton.addEventListener('click', function (): void {

    if (currentPage < 9) {
        currentPage++;
        showUsers();
    }

});

prevButton.addEventListener('click', function (): void {

    if (currentPage > 0) {
        currentPage--;
        showUsers();
    }

});

showUsers();