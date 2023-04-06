import SocialMedia from 'components/SocialMedia'
import React from 'react'

const Landing = () => {
  return (
    <main className='col-span-1 flex items-center'>
        <section className='bg-logo text-white px-10 py-8 rounded-md flex flex-col items-center gap-y-6 h-[90%]'>
          <h3 className="font-semibold text-2xl font-logo">Welcome to cookit app!</h3>
          <p className="font-medium overflow-auto px-2 landing">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, explicabo optio consequuntur asperiores odit fuga porro quaerat sint. Autem beatae quo aperiam nobis repellat ex eveniet aspernatur! Quisquam velit alias veritatis at natus repellat nam quod. Voluptatibus temporibus blanditiis consequatur ad corporis fuga facere aliquam sequi cum nihil, cupiditate minus! Non dolor id quam repellendus, vitae alias eos numquam laborum temporibus! Repellat reprehenderit ducimus veritatis corrupti dolor aliquid aspernatur nostrum itaque ipsa alias rerum dignissimos, rem doloremque blanditiis aperiam ratione unde illum voluptas, quaerat debitis? Natus, voluptatem? Mollitia est, a quam vero cum blanditiis ipsum, consequuntur natus minima similique debitis.
          </p>
          <SocialMedia/>
        </section>


    </main>
  )
}

export default Landing