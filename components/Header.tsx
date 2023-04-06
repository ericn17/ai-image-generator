import React from 'react'
import Image from 'next/image'

function header() {
  return (
    <header>
      {/* left */}
      <div>
        <Image src='https://links.papareact.com/4t3'
        alt='logo'
        />

        <div>
          <h1>
            The PAPAFAM <span className='text-violet-500'>AI</span> Image Generator
          </h1>
          <h2>
            Powered by DALL-E 2, Chat GPT & Microsoft Azure!
          </h2>
        </div>
      </div>
      {/* Right */}
    </header>
  )
}

export default header