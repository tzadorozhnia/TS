const container = document.getElementById('sessions-container');
const sessions = JSON.parse(localStorage.getItem('sessionsListNew') ?? '[]');
if (sessions.length === 0) {
    container.innerHTML = '<li>Історія відвідувань поки що порожня.</li>';
}
else {
    sessions.forEach((sessionDate, index) => {
        const li = document.createElement('li');
        li.textContent = `Візит №${index + 1}: ${sessionDate}`;
        container.appendChild(li);
    });
}
export {};
//# sourceMappingURL=scriptSessionsList.js.map