'use client'

import React, { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Quienes somos', href: '#' },
  { name: 'Donaciones', href: '#' },
  { name: 'Emprendimientos', href: '/emprendimientos' },
  { name: 'Voluntariado', href: '/voluntariados' },
  { name: 'Tests', href: '/tests' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Contactanos', href: '/contactanos' },
  { name: 'Testimonios', href: '/testimonios' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-10">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src={new URL('@icons/logo.jpg', import.meta.url).href}
            alt="Fundación Ressurgir"
            className="h-10 w-auto"
          />
          <span className="text-lg font-semibold text-gray-900 tracking-wide">FUNDACIÓN RESSURGIR</span>
        </a>

        {/* Menú en escritorio */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Botón para menú móvil */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
          aria-label="Abrir menú"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      {/* Menú móvil */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 w-4/5 max-w-xs bg-white/80 backdrop-blur-md p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2">
              <img src="/icons/logo.jpg" alt="Fundación Ressurgir" className="h-10 w-auto" />
              <span className="text-lg font-semibold text-gray-900">Ressurgir</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-md"
              aria-label="Cerrar menú"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
