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
  className="
    hidden sm:flex
    items-center gap-3
    bg-primary text-white
    px-6 py-3
    rounded-full
    text-base font-semibold
    transition-all duration-300
    hover:scale-105
    hover:shadow-xl
    active:scale-95
  "
>
  <span>Connect</span>
  <img src={assets.arrow_icon} alt="arrow" className="w-4" />
</Link>
 



        </div>
      </div>

     {/* OVERLAY (mobile only) */}
{/* OVERLAY + SIDEBAR (render ONLY when open) */}
{sidebarOpen && (
  <>
    {/* OVERLAY */}
    <div
      className="fixed inset-0 bg-black/40 z-40 md:hidden"
      onClick={() => setSidebarOpen(false)}
    />

    {/* SIDEBAR */}
    <div
      className="
        fixed top-0 right-0 h-screen w-[75%] max-w-sm
        bg-primary text-white z-50
        flex flex-col gap-6 pt-24 px-10 text-base
        transition-transform duration-300
        md:hidden
      "
    >
      <img
        src={assets.close_icon}
        alt="close"
        className="w-5 absolute top-6 right-6 cursor-pointer"
        onClick={() => setSidebarOpen(false)}
      />

      <Link onClick={() => setSidebarOpen(false)} to="/">Home</Link>
      <Link onClick={() => setSidebarOpen(false)} to="/services">Services</Link>
      <Link onClick={() => setSidebarOpen(false)} to="/our-work">Our Work</Link>
      <Link onClick={() => setSidebarOpen(false)} to="/contact">Contact Us</Link>
    </div>
  </>
)}



    </header>
  )
}

export default Navbar
