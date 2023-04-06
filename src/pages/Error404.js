import {  React } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Error404()
{
    const {user} = useSelector(state => state.auth)
    return (
        
        <section className="h-full w-full flex items-center justify-center bg-gray-900 px-[8%] md:px-0">

                <main className="bg-slate-700 text-white py-10 px-16 rounded-lg flex flex-col justify-center gap-y-10">
                        <h1 className="font-black text-4xl tracking-wider ">This page was not found!</h1>
                        <Link to="/" className="flex items-center justify-center bg-logo font-bold text-xl w-full h-10 rounded-lg hover:bg-white hover:text-logo transition-all duration-300">Back to {user ? "Home" : "Auth"} Page</Link>
                </main>
        </section>
    )
}

export default Error404;