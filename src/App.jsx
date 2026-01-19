import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'
import { Toaster } from 'react-hot-toast'
import TawkTo from './components/TawkTo'   // ✅ ADD THIS

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  return (
    <div className="dark:bg-black min-h-screen">
       {/* ✅ TAWK CHATBOT (GLOBAL) */}
      <TawkTo />
      
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/our-work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer theme={theme} />
    </div>
  )
}

export default App
