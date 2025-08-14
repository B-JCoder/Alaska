"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Top Bar */}
      <header >
        <div className="max-w-6xl mx-auto px-1 flex items-center justify-between h-16">
          {/* Logo */}
          {/* <div className="flex items-center gap-2">
            <Image
              src="/images/alaska-logo.png"
              alt="Alaska Cleaning Services"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="font-bold text-lg text-gray-900">Alaska Cleaning</span>
          </div> */}

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden transition"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-white flex flex-col">
          {/* Header inside menu */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-cyan-500 ">
            {[
              { id: "home", label: "Home" },
              { id: "services", label: "Services" },
              { id: "about", label: "About" },
              { id: "pricing", label: "Pricing" },
              { id: "testimonials", label: "Reviews" },
              
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-6 py-3 w-full text-center  hover:bg-cyan-50 hover:text-cyan-700 transition rounded-md"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Call Button at Bottom */}
          <div className="p-4 border-t border-gray-200">
            <Button
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 text-lg"
              onClick={() => {
                window.open("tel:907-671-0552")
                setIsOpen(false)
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 907-671-0552
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
