import React from 'react'

function Hero() {
  return (
    <div className='py-18'>
      <section className="hero w-full sm:px-[100px] sm:mb-16 mb-8 mx-auto overflow-hidden">
        <div className="flex flex-col items-center justify-between w-full gap-y-8 lg:flex-row">

          <div className='flex flex-col gap-8'>
            <h2 className="text-2xl md:text-[46px] md:leading-[54px] sm:mt-6 text-[#033B6C] font-semibold text-center mt-10 lg:mt-0 lg:text-justify max-w-md">Networking is a <span className='text-[#2F80ED] font-bold'>TWO-WAY STREET</span>, let us connect you with the right people.</h2>

            <div className='flex flex-row items-center justify-center text-center mt-5 gap-4'>
              <img src='./images/google.png' alt='google-play' />
              <img src='./images/ios.png' alt='ios' />
            </div>
          </div>
          <div className="relative mt-20 md:mt-0">
          <img className="relative z-20" src='./images/hero_img.png' alt="hero_image" />
          <div className="absolute z-0 lg:w-[836px] w-[600px] h-[600px] lg:h-[836px]  bg-[#2f80ed] opacity-10 top-[-320px] left-[-100px]  rounded-full"></div>
        </div>
        </div>
      </section>

      {/* section 2 */}

      <section className='w-full h-full flex flex-col items-center bg-[#2F80ED] justify-center sm:px-[100px] px-6 sm:flex-row py-14 gap-6 mb-7 mx-auto'>
        <div className=' max-w-sm'>
          <h2 className='text-white text-xl lg:text-2xl font-bold'>Find the best candidates with our speed-matching feature.</h2>
        </div>
        <div className='flex flex-row items-center justify-center gap-x-3'>
          <img src='./images/google.png' alt='google-play' />
          <img src='./images/ios.png' alt='ios' />
        </div>
        
      </section>

      {/*section 3  */}

      <section className="hero w-full sm:px-[100px] px-4 sm:mb-16 mb-8 mx-auto lg:mt-40 ">
        <div className="flex flex-col items-center justify-center w-full h-full p-0 gap-y-8 lg:flex-row-reverse gap-x-14">
          <div className=' h-full flex flex-col justify-center lg:pt-2 gap-y-4'>
              <h2 className="views flex flex-col items-center lg:items-start text-4xl lg:text-5xl sm:mt-6 text-[#033B6C] font-bold">View all <br/> screens.</h2>
              <p className='flex flex-col justify-center mx-auto text-[#8A8A8A] text-xl sm:text-2xl'>Real-time in app Social and Work <br/> tool with efficient AI.</p>
            <div className='flex flex-row mt-10 gap-x-4 mx-auto w-full max-w-md'>
              <img src='./images/google.png' alt='google-play' />
              <img src='./images/ios.png' alt='ios' />
            </div>
          </div>
          <img src="./images/woman1.png" className="w-full max-w-md mt-4" alt='hero'/>
        </div>
      </section>

    </div>
  )
}

export default Hero
