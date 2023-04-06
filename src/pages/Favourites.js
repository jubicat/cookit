import classNames from "classnames";
import FavouriteItem from "components/FavouriteItem";
import Header from "components/Header";
import React from "react";

import "style/scrollbar.css"
import {useSelector} from "react-redux"

const Favourites = () => {
  const {user} = useSelector(state => state.auth)
 
  return (
    <main
      className={classNames({
        "px-[8%] xl:px-[15%] h-full bg-slate-800 text-white  flex flex-col py-4 overflow-auto": true,
      })}
    >
      <Header>Favourites</Header>
      <section className="flex flex-col">
       {user.user_metadata?.favourites?.length > 0 && user.user_metadata.favourites.map((r, index) => (
        <FavouriteItem recipe={r} index={index} key={index}/>
       ))}

      </section>
    </main>
  );
};

export default Favourites;
