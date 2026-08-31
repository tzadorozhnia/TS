// # Recipes

type Recipe = {
    id: number;
    name: string;
    image: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    rating: number;
    reviewCount: number;
    userId: number;
    tags: string[];
    mealType: string[];
    ingredients: string[];
    instructions: string[];
};

type RecipesResponse = {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
};


const url: URL = new URL("https://dummyjson.com/recipes");

const divWrap: HTMLDivElement = document.createElement("div");

divWrap.classList.add("recipes-wrapper");


fetch(url)
    .then((response: Response): Promise<RecipesResponse> => {
        return response.json();
    })
    .then((recipesObj: RecipesResponse): void => {

        for (const recipe of recipesObj.recipes) {

            const recipeCard: HTMLDivElement =
                document.createElement("div");

            recipeCard.classList.add("recipe-card");


            const img: HTMLImageElement =
                document.createElement("img");

            img.src = recipe.image;
            img.alt = recipe.name;


            const h2: HTMLHeadingElement =
                document.createElement("h2");

            h2.innerText = recipe.name;


            const info: HTMLParagraphElement =
                document.createElement("p");

            info.innerText = `
Prep time: ${recipe.prepTimeMinutes} min
Cook time: ${recipe.cookTimeMinutes} min
Servings: ${recipe.servings}
Difficulty: ${recipe.difficulty}
Cuisine: ${recipe.cuisine}
Calories: ${recipe.caloriesPerServing}
Rating: ${recipe.rating}
Reviews: ${recipe.reviewCount}
User ID: ${recipe.userId}
Tags: ${recipe.tags.join(", ")}
Meal type: ${recipe.mealType.join(", ")}
`;


            const ingredientsTitle: HTMLHeadingElement =
                document.createElement("h3");

            ingredientsTitle.innerText = "Ingredients";


            const ingredientsList: HTMLUListElement =
                document.createElement("ul");


            for (const ingredient of recipe.ingredients) {

                const li: HTMLLIElement =
                    document.createElement("li");

                li.innerText = ingredient;

                ingredientsList.appendChild(li);
            }


            const instructionsTitle: HTMLHeadingElement =
                document.createElement("h3");

            instructionsTitle.innerText = "Instructions";


            const instructionsList: HTMLUListElement =
                document.createElement("ul");


            for (const instruction of recipe.instructions) {

                const li: HTMLLIElement =
                    document.createElement("li");

                li.innerText = instruction;

                instructionsList.appendChild(li);
            }


            recipeCard.append(
                img,
                h2,
                info,
                ingredientsTitle,
                ingredientsList,
                instructionsTitle,
                instructionsList
            );


            divWrap.appendChild(recipeCard);
        }
    })
    .catch((error: unknown): void => {
        console.error("Помилка при отриманні рецептів:", error);
    });


document.body.appendChild(divWrap);