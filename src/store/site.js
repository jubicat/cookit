import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    favourites: [],
    ingredients: []
}

const site = createSlice({
    name: "site",
    initialState: initialState,
    reducers: {
        addFav: (state, action) => {
            state.favourites = [...state.favourites, action.payload]
        },
        deleteFav: (state, action) => {

        }
    }
})


export const {addFav, deleteFav} = site.actions
export default site.reducer