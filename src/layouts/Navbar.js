import React, {useState} from "react";
import { Link } from "react-router-dom";
import { SiCakephp } from "react-icons/si";
import { BiLogOut } from "react-icons/bi";
import { supabase } from "config/supabase_config";
import { toast } from "react-hot-toast";
import { MdMenu } from "react-icons/md";
import Menu from "./Menu";
const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const handleLogout = async() => {
    
            const {error} = await supabase.auth.signOut()
            if (error) {
                toast.error(error)
            }
            
        
    }
  return (
    <>
    {menu && <Menu setMenu={setMenu}/>}
    <header className="h-16 flex justify-between bg-gray-900 items-center px-[8%] xl:px-[15%] flex-shrink-0 z-10">
      <Link to={"/"} className="h-10 flex items-center gap-x-2">
        <img
          className="h-full w-auto rounded-full"
          src="https://i.pinimg.com/736x/3e/11/b3/3e11b3829d5701e320f74a188a167fae--logo-shapes-chef-logo.jpg"
          alt=""
        />
        <h1 className="font-logo font-bold text-white  text-2xl sm:text-3xl mt-1 ">COOKIT</h1>
      </Link>
      <nav className="hidden items-center gap-x-4 md:flex">
        <Link to={"/recipe"} className="text-white font-semibold flex items-center gap-x-2 border-white border px-2 py-1 rounded-md hover:bg-logo transition-all duration-300">
          <SiCakephp />
          Find New Recipe
        </Link>
        <button type="button" onClick={handleLogout} className="text-white  font-semibold flex items-center gap-x-2 border-white border px-2 py-1 rounded-md hover:bg-logo transition-all duration-300">
          <BiLogOut size={20} />
          Log out
        </button>
      </nav>


      <button onClick={() => setMenu(true)} className="md:hidden w-10 h-10 bg-logo flex items-center justify-center text-white rounded-full">
        <MdMenu size={24}/>
      </button>

      
    </header></>
  );
};

export default Navbar;
