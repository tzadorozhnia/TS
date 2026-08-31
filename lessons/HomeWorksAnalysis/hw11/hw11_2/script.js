// # Recipes
const url = new URL("https://dummyjson.com/recipes");
const divWrap = document.createElement("div");
divWrap.classList.add("recipes-wrapper");
fetch(url)
    .then((response) => {
    return response.json();
})
    .then((recipesObj) => {
    for (const recipe of recipesObj.recipes) {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        const img = document.createElement("img");
        img.src = recipe.image;
        img.alt = recipe.name;
        const h2 = document.createElement("h2");
        h2.innerText = recipe.name;
        const info = document.createElement("p");
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
        const ingredientsTitle = document.createElement("h3");
        ingredientsTitle.innerText = "Ingredients";
        const ingredientsList = document.createElement("ul");
        for (const ingredient of recipe.ingredients) {
            const li = document.createElement("li");
            li.innerText = ingredient;
            ingredientsList.appendChild(li);
        }
        const instructionsTitle = document.createElement("h3");
        instructionsTitle.innerText = "Instructions";
        const instructionsList = document.createElement("ul");
        for (const instruction of recipe.instructions) {
            const li = document.createElement("li");
            li.innerText = instruction;
            instructionsList.appendChild(li);
        }
        recipeCard.append(img, h2, info, ingredientsTitle, ingredientsList, instructionsTitle, instructionsList);
        divWrap.appendChild(recipeCard);
    }
})
    .catch((error) => {
    console.error("Помилка при отриманні рецептів:", error);
});
document.body.appendChild(divWrap);
export {};
//# sourceMappingURL=script.js.map