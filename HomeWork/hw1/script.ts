async function GetData<T>(url: string): Promise<T> {
    const response = await fetch(url);

    return await response.json() as T;
}

type Recipe = {
    id: number;
    name: string;
    image: string;
};

type RecipesResponse = {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
};


type User = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
};

type UsersResponse = {
    users: User[];
    total: number;
    skip: number;
    limit: number;
};



const recipesContainer  = document.getElementById("recipes") as HTMLDivElement;


GetData<RecipesResponse>("https://dummyjson.com/recipes")
    .then((data: RecipesResponse): void => {

        for (const recipe of data.recipes) {

            const div:HTMLDivElement = document.createElement("div");

            const h2:HTMLHeadingElement = document.createElement("h2");
            h2.innerText = recipe.name;

            const img:HTMLImageElement = document.createElement("img");
            img.src = recipe.image;
            img.alt = recipe.name;

            div.append(h2, img);

            recipesContainer.appendChild(div);
        }
    })
    .catch((error: unknown): void => {
        console.error(error);
    });

const usersContainer =
    document.getElementById("users") as HTMLDivElement;

GetData<UsersResponse>("https://dummyjson.com/users")
    .then((data: UsersResponse): void => {

        for (const user of data.users) {

            const div:HTMLDivElement = document.createElement("div");

            const h2:HTMLHeadingElement = document.createElement("h2");
            h2.innerText =
                `${user.firstName} ${user.lastName}`;

            const p:HTMLParagraphElement = document.createElement("p");
            p.innerText =
                `ID: ${user.id}
Age: ${user.age}
Email: ${user.email}`;

            div.append(h2, p);

            usersContainer.appendChild(div);
        }
    })
    .catch((error: unknown): void => {
        console.error("Помилка при отриманні користувачів:", error);
    });