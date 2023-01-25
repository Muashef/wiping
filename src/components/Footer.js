import React from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

function Footer() {
    return(
        <div className="h-[60vh]">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <div className="w-full">
          <h2 className="footer__text font-bold w-[15%]">Wiping</h2>
          <div className="w-full flex items-center justify-between my-3">
            <p className="text-[#212121] tracking-tighter text-[21px] leading-[27px]">
              Dates, Job seekers to HR, and counselors to seekers.
            </p>
            <div className="flex items-center gap-4">
              <img src='./images/facebook.png' alt="" />
              <img src='./images/instagram.png' alt="" />

              <img src='./images/twitter.png' alt="" />
              <img src='./images/linkedIN.png' alt="" />
            </div>
          </div>

          <div className="w-full flex items-center justify-between my-3">
            <p className="font-medium text-2xl text-[#212121] w-[50%]">
              Find your ideal love mate and that perfect job in{' '}
              <span className="decoration-[#2F80ED] underline">real-time.</span>
            </p>
            <div className='flex flex-col text-right'>
              <p>© 2021, Wiping</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Footer