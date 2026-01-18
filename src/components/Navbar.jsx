import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'



const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
  if (sidebarOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}, [sidebarOpen]);


  return (
    <header className="navbar sticky top-0 z-30 bg-white dark:bg-gray-900 backdrop-blur-xl">

      
      {/* MAIN NAV CONTAINER */}
      <div
        className="
          max-w-7xl mx-auto
          flex items-center justify-between
          h-22
          px-8 sm:px-12 lg:px-20
        "
      >

        {/* LEFT: LOGO */}
        <div className="flex items-center">
          <img
            src={theme === 'dark' ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-32 sm:w-36"
          />
        </div>

        {/* CENTER: NAV LINKS */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600 dark:text-white">
  <Link to="/" className="hover:text-primary">Home</Link>
  <Link to="/services" className="hover:text-primary">Services</Link>
  <Link to="/our-work" className="hover:text-primary">Our Work</Link>
  <Link to="/contact" className="hover:text-primary">Contact Us</Link>
</nav>


        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-4">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          {/* MOBILE MENU */}
          <img
            src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
            alt="menu"
            className="w-8 md:hidden cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />

          {/* CONNECT BUTTON */}
          <Link
  to="/contact"
  className="connect-btn hidden md:flex"
>
  Connect
  <img src={assets.arrow_icon} alt="arrow" />
</Link>

        </div>
      </div>

      {/* MOBILE SIDEBAR */}
     {/* MOBILE SIDEBAR */}
<div
  className={`
    fixed top-0 right-0 h-screen w-full
    bg-primary text-white z-50
    flex flex-col gap-6 pt-24 px-10 text-sm
    transform transition-transform duration-300
    ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}
  `}
>
  <img
    src={assets.close_icon}
    alt="close"
    className="w-5 absolute top-6 right-6 cursor-pointer"
    onClick={() => setSidebarOpen(false)}
  />

  <a onClick={() => setSidebarOpen(false)} href="/">Home</a>
  <a onClick={() => setSidebarOpen(false)} href="/services">Services</a>
  <a onClick={() => setSidebarOpen(false)} href="/our-work">Our work</a>
  <a onClick={() => setSidebarOpen(false)} href="/contact">Contact Us</a>
</div>

    </header>
  )
}

export default Navbar
