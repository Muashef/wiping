import React from 'react'
import {MdOutlineConnectWithoutContact} from 'react-icons/md'
import {HiOutlineVideoCamera} from 'react-icons/hi'

function Features() {
    return (
        <div className='w-full h-full bg-white py-4 mt-10'>
            <div className='flex flex-col lg:flex-row items-center lg:items-center lg:justify-between max-w-[1240px] mx-auto'>
                <div className='flex flex-col items-start justify-start'>
                   <h1 className='features text-3xl font-bold text-[#2F80ED] mb-8 flex flex-col text-center items-center lg:items-start'>Real-time <br/> Features</h1>
                    <div className='h-full bg-[#2F80ED] lg:rounded-r-full'>
                        <img src='./images/prompt.png' alt='prompt' />
                        <img src='./images/frame.png' alt='morning' />
                    </div>
                </div>
                <div className='h-full flex flex-col'>
                    <h2 className='text-4xl text-[#2F80ED] font-medium max-w-md'>Meet People, Get that Job from Anywhere you are.</h2>
                    <div className='flex flex-row gap-5 mt-5'>
                        <MdOutlineConnectWithoutContact className='bg-[#2F80ED] rounded-full text-white p-4' />
                        <div className='max-w-md'>
                            <h1 className='text-[#2F80ED] text-2xl mb-2'>Algorithms</h1>
                            <p className='text-[#494E78]'>An app that combines speed dating, Ringall, and machine learning to provide a face, maximum reach, and a voice.</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 mt-5'>
                        <MdOutlineConnectWithoutContact className='bg-[#2F80ED] rounded-full text-white p-4' />
                        <div className='max-w-md'>
                            <h1 className='text-[#2F80ED] text-2xl mb-2'>Match</h1>
                            <p className='text-[#494E78]'>Find your closest match quickly using our algorithm and your personal data.</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 mt-5'>
                        <HiOutlineVideoCamera className='bg-[#2F80ED] rounded-full text-black p-4 ' />
                        <div className='max-w-md'>
                            <h1 className='text-[#2F80ED] text-2xl mb-2'>Video Dial In</h1>
                            <p className='text-[#494E78]'>Eliminate catfishing with our mandatory video call feature. Put a face to the name!</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <section className="hero w-full sm:px-[100px] mt-12 px-4 sm:mb-16 mb-8 mx-auto lg:mt-40 ">
        <div className="flex flex-col items-center justify-center w-full h-full p-0 gap-y-8 lg:flex-row gap-x-14">
          <div className=' h-full flex flex-col justify-center lg:pt-2 gap-y-4'>
              <h2 className="views flex flex-col items-center lg:items-start text-4xl lg:text-5xl sm:mt-6 text-[#033B6C] font-bold max-w-md">Efficency Guaranteed</h2>
              <p className='flex flex-col justify-center mx-auto text-[#8A8A8A] text-xl sm:text-2xl max-w-md'>Discover the most suitable and compatible match for your need.</p>
            <div className='flex flex-row mt-10 gap-x-4 mx-auto w-full max-w-md'>
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