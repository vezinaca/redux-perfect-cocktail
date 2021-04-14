export const getIngredients = (cocktail) => {
        
    console.log("drink, cocktail dans getIngredients: ", cocktail);
    let ingredients = [];
    for(let i = 1; i < 16; i++) {
        const ingredientMeasure = {};
        if( cocktail[`strIngredient${i}`] !== null ) {
            ingredientMeasure.ingredient = cocktail[`strIngredient${i}`];
            ingredientMeasure.measure = cocktail[`strMeasure${i}`];
            ingredients.push(ingredientMeasure);

            console.log("ingredientMeasure.ingredient: ", ingredientMeasure.ingredient)
            console.log("ingredientMeasure.measure: ", ingredientMeasure.measure)
        }
    }
    return ingredients;
}

