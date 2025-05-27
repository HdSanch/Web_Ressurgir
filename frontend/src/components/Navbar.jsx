import React, { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'

// Icons as React components
const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
)

const XIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

const navigation = [
  { name: 'Quienes somos', href: '/quienessomos' },
  { name: 'Donaciones y Voluntariado', href: './voluntariados' },
  { name: 'Emprendimientos', href: '/emprendimientos' },
  { name: 'Tests', href: '/tests' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Contactanos', href: '/contactanos' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
       {/* Logo */}
        <a href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img
              src="./images/logodefinitivo.png"
              alt="Fundación Ressurgir"
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-rose-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight leading-none" style={{ color: '#e6317b' }}>
              FUNDACIÓN
            </span>
            <span className="text-lg font-semibold text-blue-600 tracking-wide leading-none">
              RESSURGIR
            </span>
          </div>
        </a>


        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-1">
          {navigation.map((item) => (
            <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-lg hover:bg-gray-50 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
          ))}

          <button
                className="ml-4 inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                Donar Ahora
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Abrir menú"
        >
          <MenuIcon />
        </button>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Fundación Ressurgir"
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none" style={{ color: '#e6317b' }}>
                  FUNDACIÓN
                </span>
                <span className="text-sm font-semibold text-blue-600 leading-none">RESSURGIR</span>
              </div>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Cerrar menú"
            >
              <XIcon />
            </button>
          </div>

          <div className="px-6 py-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="pt-4 border-t border-gray-100">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                Donar Ahora
              </button>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}