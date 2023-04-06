import React, { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import classNames from "classnames";

import { addRecipe,  removeRecipe } from "utils";

const Recipe = ({ recipe, index }) => {
  const [like, setLike] = useState(false);

  const handleClick = async () => {
    setLike(!like);
    if (like) {
      removeRecipe(recipe);
    } else {
      addRecipe(recipe);
    }
  };
  return (
    <section className="flex flex-col">
      <div className="bg-gray-900 py-1 px-2 rounded-md mb-2 flex items-center justify-between">
        <h1 className="font-semibold sm:text-xl text-base ">
          {index + 1}.{recipe.title}
        </h1>
        <button onClick={handleClick}>
          <IoMdHeart
            size={24}
            className={classNames({
              "transition-all duration-300 mr-4": true,
              "text-white": !like,
              "text-red-500": like,
            })}
          />
        </button>
      </div>
      <div className="bg-green-500 py-1 px-2 rounded-t-md">
        <span className="font-medium sm:text-lg text-base ">Ingredients: </span>
        {recipe.ingredients}
      </div>
      <div className="bg-yellow-500 px-2 py-1 rounded-b-md">
        <span className="font-medium sm:text-lg text-base">Directions:</span>
        {recipe.directions}
      </div>
    </section>
  );
};

export default Recipe;
