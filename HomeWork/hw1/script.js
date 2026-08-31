async function GetData(url) {
    const response = await fetch(url);
    return await response.json();
}
const recipesContainer = document.getElementById("recipes");
GetData("https://dummyjson.com/recipes")
    .then((data) => {
    for (const recipe of data.recipes) {
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        h2.innerText = recipe.name;
        const img = document.createElement("img");
        img.src = recipe.image;
        img.alt = recipe.name;
        div.append(h2, img);
        recipesContainer.appendChild(div);
    }
})
    .catch((error) => {
    console.error(error);
});
const usersContainer = document.getElementById("users");
GetData("https://dummyjson.com/users")
    .then((data) => {
    for (const user of data.users) {
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        h2.innerText =
            `${user.firstName} ${user.lastName}`;
        const p = document.createElement("p");
        p.innerText =
            `ID: ${user.id}
Age: ${user.age}
Email: ${user.email}`;
        div.append(h2, p);
        usersContainer.appendChild(div);
    }
})
    .catch((error) => {
    console.error("Помилка при отриманні користувачів:", error);
});
export {};
//# sourceMappingURL=script.js.map