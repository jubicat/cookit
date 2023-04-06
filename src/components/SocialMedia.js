import React from 'react'

import {AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp} from "react-icons/ai"
const SocialMedia = () => {
  return (
    <div className='flex items-center gap-x-4 mt-auto flex-shrink-0'>
        <a href='https://www.instagram.com/' target='_blank'  rel='noreferrer' className='h-12 w-12 flex bg-white items-center justify-center   text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full'>
            <AiOutlineInstagram size={26}/>
        </a>
        <a href='https://www.facebook.com/' target='_blank'  rel='noreferrer' className='h-12 w-12 flex bg-white items-center justify-center   text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full'>
            <AiOutlineTwitter size={26}/>
        </a>
        <a href='https://web.whatsapp.com/' target='_blank'  rel='noreferrer' className='h-12 w-12 flex bg-white items-center justify-center   text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full'>
            <AiOutlineWhatsApp size={26}/>
        </a>

    </div>
  )
}

export default SocialMedia