import React from 'react'
// import {MdOutlineConnectWithoutContact} from 'react-icons/md'
// import {HiOutlineVideoCamera} from 'react-icons/hi'

function Features() {
    return (
        <div className='w-full h-full bg-white py-4 mt-10'>
            <div className="w-[80%] mx-auto">
        <main className="flex items-center justify-between gap-10 mt-8 flex-col lg:flex-row lg:items-center lg:justify-between max-w-[1240px] mx-auto">
        
        <div className='flex flex-col items-start justify-start'>
                   <h1 className='features text-3xl font-bold text-[#2F80ED] mb-8 flex flex-col text-center items-center justify-center lg:text-justify'>Real-time <br/> Features</h1>
                    <div className='w-full h-full bg-[#2F80ED] lg:rounded-r-full'>
                        <img src='./images/prompt.png' alt='prompt' />
                        <img src='./images/frame.png' alt='morning' />
                    </div>
                </div>
          <div className="w-[50%] ml-auto max-w-4xl">
            <h2 className="font-semibold text-[36px] leading-[44px] text-[#2F80ED]">
              Meet People, Get that Job from Anywhere you are.
            </h2>
            <div className="flex items-start gap-6 mt-5">
              <img src='./images/algorithms.png' alt="algorithms" />
              <div>
                <h3 className="font-semibold text-[28px] leading-[34px] text-[#2F80ED]">
                  Algorithms
                </h3>
                <p className="font-normal text-xl text-[#494E78]">
                  An app that combines speed dating, Ringall, and machine
                  learning to provide a face, maximum reach, and a voice.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 mt-5">
              <img src='./images/match.png' alt="math_img" />
              <div>
                <h3 className="font-semibold text-[28px] leading-[34px] text-[#2F80ED]">
                  Match
                </h3>
                <p className="font-normal text-xl text-[#494E78]">
                  Find your closest match quickly using our algorithm and your
                  personal data.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 mt-5">
              <img src='./images/video.png' alt="video-dial-in" />
              <div>
                <h3 className="font-semibold text-[28px] leading-[34px] text-[#2F80ED]">
                  Video Dial In
                </h3>
                <p className="font-normal text-xl text-[#494E78]">
                  Eliminate catfishing with our mandatory video call feature.
                  Put a face to the name!
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>



            {/* Another section */}
            
            <section className="hero w-full sm:px-[100px] mt-12 px-4 sm:mb-16 mb-8 mx-auto lg:mt-40 ">
        <div className="flex flex-col items-center justify-center w-full h-full p-0 gap-y-8 lg:flex-row gap-x-14">
          <div className=' h-full flex flex-col justify-center lg:pt-2 gap-y-4'>
              <h2 className="views flex flex-col items-center lg:items-start text-4xl lg:text-5xl sm:mt-6 text-[#033B6C] font-bold max-w-md text-center lg:text-justify">Efficency Guaranteed</h2>
              <p className='flex flex-col justify-center mx-auto text-[#8A8A8A] text-xl sm:text-2xl max-w-md'>Discover the most suitable and compatible match for your need.</p>
            <div className='flex flex-row items-center justify-center mt-10 gap-x-4 mx-auto w-full max-w-md'>
              <img src='./images/google.png' alt='google-play' />
              <img src='./images/ios.png' alt='ios' />
            </div>
          </div>
          <img src="./images/woman2.png" className="w-full max-w-md mt-4" alt='hero'/>
        </div>
           </section>

        </div>
    )
}

export default Features