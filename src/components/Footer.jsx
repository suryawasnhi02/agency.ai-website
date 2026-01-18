import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
  return (
    <footer className="section stack-">

    <div className="bg-slate-50 dark:bg-gray-900 pt-10 mt-20 px-4 sm:px-10 lg:px-24 xl:px-40">

      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <div className='space-y-5 text-sm text-gray-600 dark:text-gray-400'>
          <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className="w-32 sm:w-44 mb-4" alt="logo" />

          <p className="max-w-md text-sm opacity-70 mb-4">
            From strategy to execution, we craft digital experiences that drive growth and success.
          </p>

          <ul className="flex gap-8">
            <li><a className="hover:text-primary" href="#hero">Home</a></li>
            <li><a className="hover:text-primary" href="#services">Services</a></li>
            <li><a className="hover:text-primary" href="#ourwork">Our Work</a></li>
            <li><a className="hover:text-primary" href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className='text-gray-600 dark:text-gray-400'>
          <h3 className='font-semibold'>Subscribe to our newsletter</h3>
          <p className='text-sm mt-2 mb-6'>The Latest news, articles, and resources, sent to your inbox weekly.</p>
         
         <div className='flex gap-2 text-sm'>
          <input type='email' placeholder='Enter your email'
           className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'/>
           <button className='bg-primary text-white rounded px-6'>Subscribe</button>
         </div>
        </div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* Footer Bottom */}

      <div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
        <p> Copyright © 2026 Agency.AI All rights reserved.</p>
        <div className='flex items-center justify-between gap-4'>
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer
