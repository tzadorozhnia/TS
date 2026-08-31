const container:HTMLUListElement = document.getElementById('sessions-container') as HTMLUListElement;


interface ISessionObject {
    time: number;
    price: number;
}

type SessionItem = string | ISessionObject;

const sessions: SessionItem[] = JSON.parse(localStorage.getItem('sessionsListNew') ?? '[]');

if (sessions.length === 0) {
    container.innerHTML = '<li>Історія відвідувань поки що порожня.</li>';
} else {
    sessions.forEach((sessionDate, index) => {
        const li:HTMLLIElement = document.createElement('li');
        li.textContent = `Візит №${index + 1}: ${sessionDate}`;
        container.appendChild(li);
    });
}