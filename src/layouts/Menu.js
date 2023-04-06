import { supabase } from "config/supabase_config";
import React from "react";
import { toast } from "react-hot-toast";
import { BiLogOut } from "react-icons/bi";
import { IoMdHeart } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { SiCakephp } from "react-icons/si";
import { Link } from "react-router-dom";

const Menu = ({setMenu}) => {
    const handleLogout = async() => {
    
        const {error} = await supabase.auth.signOut()
        if (error) {
            toast.error(error)
        }
        
    
}
  return (
    <div className="fixed flex h-full w-full z-40 text-white">
      <div className="w-1/2 bg-gray-900 h-full bg-opacity-60" onClick={()=> setMenu(false)}></div>
      <div className="flex-auto relative bg-logo p-2 flex  flex-col justify-center gap-y-2">
        <button onClick={() => setMenu(false)} className="h-7 w-7 flex absolute items-center justify-center bg-gray-900 rounded-full top-2 right-2">
          <MdClose />
        </button>
        <Link to="/recipe" className="bg-gray-900 flex h-8 items-center  justify-center gap-x-2 rounded-md ">
          <span>Find New Recipe</span>
          <SiCakephp />
        </Link>
        <Link to="/favourites" className="bg-gray-900 flex h-8 items-center  justify-center gap-x-2 rounded-md ">
          <span>Favourites</span>
          <IoMdHeart />
        </Link>
        <button type="button" onClick={handleLogout} className="bg-gray-900 flex h-8 items-center  justify-center gap-x-2 rounded-md ">
          <span>Log out</span>
          <BiLogOut size={22} />
        </button>
      </div>
    </div>
  );
};

export default Menu;
