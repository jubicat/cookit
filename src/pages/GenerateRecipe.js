import Header from "components/Header";
import RecipeTodo from "layouts/IngredientTodo";
import React, { useState} from "react";
import Recipe from "components/Recipe";
import { nanoid } from "nanoid";

function GenerateRecipe() {
  const [ingredients, setIngredients] = useState([]);

  const [recipes, setRecipes] = useState([]);

 

  const generateData = async () => {
    
      const response = await fetch(
        "https://api-inference.huggingface.co/models/flax-community/t5-recipe-generation",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify(ingredients),
        }
      );

      const result = await response.json();

      const reps =
        result.length > 0 &&
        result.map((r) => {
          const title = r.generated_text.match(
            /(?<=title:)(.*)(?= ingredients:)/
          )[1];
          const ingredients = r.generated_text.match(
            /(?<=ingredients:)(.*)(?= directions:)/
          )[1];
          const directions = r.generated_text.match(/(?<=directions:)(.*)/)[1];
          return {
            id: nanoid(),
            title,
            ingredients,
            directions,
          };
        });
      setRecipes(reps)
  };

  return (
    <div className="h-full px-[8%] xl:px-[15%] flex-auto overflow-auto bg-slate-800 text-white py-4">
      <Header>FIND NEW RECIPES</Header>
      <RecipeTodo ingredients={ingredients} setIngredients={setIngredients} />
      <button
        type="button"
        onClick={generateData}
        className="bg-blue-500 text-white hover:text-blue-500 hover:bg-white h-10 rounded-md my-4 w-full"
      >
        Generate New Recipes
      </button>
      <div className="flex flex-col gap-y-2">
        {recipes.length > 0 &&
          recipes.map((recipe, key) => (
            <Recipe recipe={recipe} key={recipe.title} index={key} />
          ))}
      </div>
    </div>
  );
}

export default GenerateRecipe;
