import store from "store";
import { setUser } from "store/auth";
import { supabase } from "config/supabase_config";

export const handleUser = data => {
    if (data) {
        store.dispatch(setUser(data))
    } else {
        store.dispatch(setUser(false))
    }
}


export const removeRecipe = async(recipe) => {
    const {data} = await supabase.auth.getUser()
    const favs = data.user.user_metadata?.favourites
    if (favs.length === 1  ){
        const {user, error} = await supabase.auth.updateUser({
            data: {
                favourites: [] 
            }
        })
        if (user && error) {
          
        }
    } else {

        const filtered =  favs.filter(r => r.id !== recipe.id)
        const {user, error} = await supabase.auth.updateUser({
            data: {
                favourites: filtered 
            }
        })
        if (user && error) {
          
        }
    }    
}

export const addRecipe = async(recipe) => {
    const { data } = await supabase.auth.getUser();
    const favs = data.user.user_metadata?.favourites;
      if (favs) {
        favs.push(recipe);
        const { user, error } = await supabase.auth.updateUser({
          data: {
            favourites: favs,
          },
        });
        if (user && error) {
          
        }
      } else {
        const { user, error } = await supabase.auth.updateUser({
          data: {
            favourites: [recipe],
          },
        });
        if (user && error) {

        }
      }
}
