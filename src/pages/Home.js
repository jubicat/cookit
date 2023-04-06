import { React  } from "react";
import Details from "layouts/Landing";
import UserDetails from "layouts/UserDetails";
import classNames from "classnames";

function Home() {
   


  return (
    <div className="flex-auto bg-slate-800  ">
       
      
         

                    <div className={classNames({
                        "px-[8%] xl:px-[15%] h-full  grid grid-cols-1 lg:grid-cols-2 gap-x-10  ": true
                        
                    })}>
                      <Details/>
                      <UserDetails />
                    </div>
                   
       
           
    </div>
  );
}   
export default Home;
