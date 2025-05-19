'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { User, Menu, X, Bolt } from 'lucide-react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const [prevScrollY, setPrevScrollY] = useState(0)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItem = [
    { label: "Home", href: "/" },
    { label: "Villa", href: "/art" },
    { label: "Offres", href: "/World" },
    { label: "Contact", href: "/" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Si on défile vers le bas (scrolling down)
      if (window.scrollY > prevScrollY && window.scrollY > 100) {
        setScrolling(true) // Masque la nav
      } else if (window.scrollY < prevScrollY) {
        setScrolling(false) // Affiche la nav
      }

      // Mettre à jour la position précédente du scroll
      setPrevScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup listener quand le composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollY]) // Dépend de prevScrollY pour savoir quand mettre à jour l'état

  return (
    <nav
      className={`${
        scrolling ? '-top-[120px]' : 'top-0'
      } bg-gray-800 bg-opacity-75 fixed left-0 w-full z-50 flex items-center justify-between p-4 transition-all duration-300`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="items-center">
            <div className="flex-shrink-0 text-white flex items-center space-x-2">
              <Bolt />
              <span className="font-bold">MyBrand</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItem.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-white hover:text-yellow-500 transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* User Icon */}
          <div className="hidden md:block">
            <Link href="/sign" className="text-white hover:text-yellow-500 transition-colors duration-200 cursor-pointer">
              <User size={20} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="transparent shadow-none z-[50]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute right-0 top-0 w-[200px] p-5 bg-gray-900 text-white rounded-bl-lg shadow-lg">
          <div className="flex flex-col space-y-4 px-2 pt-20">
            {menuItem.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white hover:text-yellow-500 transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </Link>
            ))}

            {/* Ajout du lien Se connecter dans le menu mobile */}
            <Link
              href="/sign"
              className="flex items-center space-x-2 text-white hover:text-yellow-500 transition-colors duration-200"
            >
              <User size={18} />
              <span>Se connecter</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
