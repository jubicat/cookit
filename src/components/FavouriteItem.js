
import React from 'react'
import { MdDelete } from 'react-icons/md'
import {  removeRecipe } from 'utils'

const FavouriteItem = ({recipe, index}) => {

    
  return (
    <div className="flex flex-col mt-5">
          <div className="py-2 bg-gray-900 flex items-center relative border border-white rounded-t-md px-4 justify-between">
            <h4 className="font-semibold text-xl">{index+1}.{recipe.title}</h4>
            <button
            onClick={() => removeRecipe(recipe)}
              type="button"
              className="flex items-center justify-center  mr-4"
            >
              <MdDelete
                size={32}
                className="p-1 border rounded-full text-white border-red-500 bg-red-500 hover:text-red-500 hover:bg-white hover:border-white transition-all duration-300"
              />
            </button>
          </div>

          <div className="flex-auto h-auto p-4 bg-slate-700 rounded-b-md border-x border-b border-white ">
            <span>Ingredients: {recipe.ingredients}</span>
            <span>Directions: {recipe.directions}</span>
          </div>
        </div>
  )
}

export default FavouriteItem