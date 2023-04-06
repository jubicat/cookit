import classNames from "classnames";
import Recipe from "components/Ingredient";
import { nanoid } from "nanoid";
import React, { useState } from "react";

const IngredientTodo = ({ingredients, setIngredients}) => {
  const [ingredient, setIngredient] = useState("");
  
  const addIngredient = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, {
      id: nanoid(),
      title: ingredient
    }]);
    setIngredient("");
  };


  const disabled = ingredients.find(i => i.title === ingredient)
  return (
    <section className="flex flex-col gap-y-5 mt-4">
      <form onSubmit={addIngredient} className="flex gap-y-4 sm:items-center flex-col sm:flex-row gap-x-4">
        <input
          onChange={(e) => setIngredient(e.target.value)}
          value={ingredient}
          type="text"
          placeholder="Write an ingredient"
          className="px-4 outline-none h-10 w-full sm:w-[80%]  rounded-md bg-slate-700 placeholder:text-white placeholder:opacity-70"
        />
        <button
        disabled={disabled}
          type="submit"
          className={
            classNames({
              "bg-green-500 flex-auto h-10 font-medium rounded-md  transition-all duration-300": true,
              "hover:bg-white hover:text-green-500": !disabled,
              "bg-opacity-70": disabled
            })
          }
        >
          Add
        </button>
      </form>

      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2">
        {ingredients.length > 0 && ingredients.map((i, key) => (
          <Recipe key={i.id} ingredient={i} setIngredients={setIngredients} ingredients={ingredients}/>
        ))}
      </div>
    </section>
  );
};

export default IngredientTodo;
