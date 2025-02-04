"use client";
import Link from "next/link"
import { Globe, BookOpen, Mail } from "lucide-react"
import {useEffect, useState} from "react";

import { Button } from "@/components/ui/button"



export function FeatureCards() {
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
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-4">
        <div className="bg-white/80 dark:bg-gray-700 p-8 rounded-2xl text-center shadow-lg">
          <div className="flex justify-center mb-6">
            <Globe className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-4">My Portfolio</h3>
          <p className="text-navy dark:text-lavender mb-6">
            Check out some of my portfolio with various projects.
          </p>
          <Link
              href="https://github.com/MelikeZeynepTapci"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-caramel/20 hover:bg-caramel/30 dark:bg-caramel/30 dark:hover:bg-caramel/70 transition-colors"
          >
            <span className="sr-only">View Portfolio</span>
            <span className="text-navy dark:text-lavender">→</span>
          </Link>
        </div>

        <div className="bg-white/80 dark:bg-gray-700 p-8 rounded-2xl text-center shadow-lg">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-4">My Journal</h3>
          <p className="text-navy dark:text-lavender mb-6">
            Here I share my insights with tips and tricks.
          </p>
          <Link
              href="https://medium.com/@mztapci"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-caramel/20 hover:bg-caramel/30 dark:bg-caramel/30 dark:hover:bg-caramel/70 transition-colors"
          >
            <span className="sr-only">Read Journal</span>
            <span className="text-navy dark:text-lavender">→</span>
          </Link>
        </div>

        <div className="bg-white/80 dark:bg-gray-700 p-8 rounded-2xl text-center shadow-lg">
          <div className="flex justify-center mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
          <p className="text-navy dark:text-lavender mb-6">
            If you like what you see, let's work to bring your vision to life.
          </p>
          <Button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-caramel/20 hover:bg-caramel/30 dark:bg-caramel/30 dark:hover:bg-caramel/70 transition-colors"
          >
            <span className="sr-only">Contact Me</span>
            <span className="text-navy dark:text-lavender">→</span>
          </Button>
        </div>
      </div>
  )
}