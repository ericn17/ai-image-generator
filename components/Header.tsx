import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function header() {
  return (
    <header className='flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md'>
      {/* left */}
      <div className='flex space-x-2 items-center'>
        <Image 
          src='https://links.papareact.com/4t3'
          alt='logo'
          height={30}
          width={30}
        />

        <div>
          <h1 className='font-bold'>
            The PAPAFAM <span className='text-violet-500'>AI</span> Image Generator
          </h1>
          <h2 className='text-xs'>
            Powered by DALL-E 2, Chat GPT & Microsoft Azure!
          </h2>
        </div>
      </div>

      {/* Right */}
    </header>
  )
}

export default header