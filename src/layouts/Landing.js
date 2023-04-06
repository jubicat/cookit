import SocialMedia from 'components/SocialMedia'
import React from 'react'

const Landing = () => {
  return (
    <main className='col-span-1 flex items-center'>
        <section className='bg-logo text-white px-10 py-8 rounded-md flex flex-col items-center gap-y-6 h-[90%]'>
          <h3 className="font-semibold text-2xl font-logo">Welcome to cookit app!</h3>
          <p className="font-medium overflow-auto px-2 landing">
            Welcome to the cookit app! Here you can find a lot of recipes and you can save them to your favorites. You can also create your own recipes and share them with the community. You can also search for recipes by ingredients. Enjoy!
          </p>
          <SocialMedia/>
        </section>


    </main>
  )
}

export default Landing