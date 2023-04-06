import React from "react";
import { MdDelete } from "react-icons/md";

const Ingredient = ({ ingredient, ingredients, setIngredients }) => {
  const deleteIngredient = () => {
    const updatedIngredients = ingredients.filter((ing) => ing !== ingredient);
    setIngredients(updatedIngredients);
  };
  return (
    <div className="h-8 w-full flex items-center justify-between bg-gray-900 rounded px-2">
      <p>{ingredient.title}</p>

      <MdDelete
        onClick={deleteIngredient}
        className="hover:text-red-500 cursor-pointer"
      />
    </div>
  );
};

export default Ingredient;
