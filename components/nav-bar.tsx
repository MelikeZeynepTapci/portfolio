"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Twitter, Instagram, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:backdrop-blur dark:supports-[backdrop-filter]:bg-gray-900/60" : "bg-transparent"}`}>
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 h-16">
        <Link href="/" className="text-xl font-semibold">
          Meeko
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("home")} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection("portfolio")} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            Portfolio
          </button>
          <button onClick={() => scrollToSection("about")} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            Contact
          </button>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            Blog
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Globe className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="w-4 h-4" />
            </Button>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

