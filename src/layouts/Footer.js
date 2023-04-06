import SocialMedia from 'components/SocialMedia'
import React from 'react'
import {AiOutlineCopyrightCircle} from "react-icons/ai"
const Footer = () => {
  return (
    <div className='bg-logo h-auto sm:h-20 text-white font-semibold py-5 px-[8%] xl:px-[15%] flex-col sm:flex-row items-center flex '>
        <div className='h-14 w-auto'>
            <img src="https://i.pinimg.com/736x/3e/11/b3/3e11b3829d5701e320f74a188a167fae--logo-shapes-chef-logo.jpg" alt="logo" className="h-full w-auto" />
        </div>
        <div className='flex flex-col'>
            <h2 className='text-lg'>COOKIT APP</h2>
            <span className="flex items-center gap-x-2">
                <AiOutlineCopyrightCircle/> 2023</span>
        </div>
        <div className='sm:ml-auto mt-4 sm:mt-0'>
            <SocialMedia/>
        </div>
    </div>
  )
}

export default Footer