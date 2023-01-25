import React from 'react';

function GetWiping() {
    return (
        <div className='w-full h-full py-10 px-32 bg-white mt-24'>
            <div className='w-full flex flex-col items-center justify-between px-24 pt-10 bg-[#2F80ED] rounded-[72px] mt-10 max-w-[1200px] mx-auto lg:flex-row'>
                <div className='mb-32 lg:mb-0'>
                    <h2 className='text-white text-4xl text-center lg:text-justify font-bold mb-2'>Get Wiping now.</h2>
                    <p className='text-white text-md text-center lg:text-justify'>Real-time Dating and Hr Tool</p>
                    <div className='flex flex-row items-center justify-center gap-5 mt-8 mx-auto'>
                        <img src='./images/google.png' alt='google play' />
                        <img src='./images/ios.png' alt='ios'/>
                    </div>
                </div>
                <div>
                    <img src='./images/galaxy.png' alt='galaxy phone'/>
                </div>
            </div>
        </div>
    )
}

export default GetWiping