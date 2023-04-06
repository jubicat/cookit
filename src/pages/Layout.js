import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from 'layouts/Navbar'
import Footer from 'layouts/Footer'
const Layout = () => {
  return (
    
    <div className='flex flex-col  h-full w-full '>
        <Navbar/>

        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout